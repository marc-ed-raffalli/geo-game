import {Game} from '../actionTypes';

import {getRandomInt} from '../services/mathUtils';

import * as timerActions from './timerActions';
import * as mapActions from './mapActions';

import {colors, gameModes} from '../constants';

const buildQuestionList = (countries, mode, count) => {
    const listOfCountries = countries.features.map(f => f.properties),
      len = listOfCountries.length,
      questionByFeatureId = {};

    if (len <= count) {
      count = listOfCountries.length;
    }

    let added = 0;

    while (added < count) {
      const country = listOfCountries[getRandomInt(len)],
        {id, name, capital, flag} = country,
        display = getValueByGameMode(country, mode);

      // prevent duplicates and empty values
      // some capitals may not be defined on the data set
      if (!display || questionByFeatureId[id] !== undefined) {
        continue;
      }

      questionByFeatureId[id] = {id, name, capital, flag, display};
      added++;
    }

    return Object.keys(questionByFeatureId)
      .map(id => questionByFeatureId[id]);
  },
  getValueByGameMode = (value, mode) => value && value[gameModes[mode]] ? value[gameModes[mode]] : undefined
;

export const loadGame = (locale, areaId, mode, questionCount) => dispatch => {
  dispatch(mapActions.load(locale, areaId))
    .then(countries => dispatch(setGame(countries, mode, questionCount)));
};

export const setGame = (data, mode, questionCount) => dispatch => {
  dispatch({
    type: Game.SET,
    payload: {
      questions: buildQuestionList(data, mode, questionCount),
      mode: mode
    }
  });
};

export const startGame = timeout => (dispatch) => {
  dispatch({type: Game.START});
  dispatch(mapActions.reset());
  dispatch(mapActions.showMarkersAllCountries());
  dispatch(timerActions.start(timeout, () => answerCurrentQuestion(undefined)));
};

export const restartGame = () => (dispatch, getState) => {
  const {map, game, timer} = getState();
  dispatch(setGame(map.countriesData, game.mode, game.questions.length));
  dispatch(startGame(timer.duration));
};

export const stopGame = () => dispatch => {
  dispatch({type: Game.STOP});
  dispatch(mapActions.clearData());
  dispatch(timerActions.stop());
};

export const showResults = () => (dispatch, getState) => {
  const state = getState(),
    gameState = state.game,
    colorsByName = gameState.questions.reduce((res, question, index) => {
      const answer = gameState.answers[index];

      res[question.id] = answer === question.display ? colors.greenOk : colors.redError;

      return res;
    }, {});

  dispatch(timerActions.stop());
  dispatch(mapActions.highlightFeatures(colorsByName));
  dispatch({type: Game.RESULTS});

  if (gameState.correct === gameState.questions.length) {
    return;
  }

  const wrongAnswers = gameState.questions
    .filter((question, index) => gameState.answers[index] !== question.display)
    .map(d => ({
      id: d.id,
      type: 'error-pin',
      properties: state.map.dataById[d.id].properties
    }))
  ;

  dispatch(mapActions.showMarkers(wrongAnswers));
};

export const answerCurrentQuestion = answer => (dispatch, getState) => {
  const gameState = getState().game,
    isLastAnswer = gameState.questions.length === (gameState.answers.length + 1);

  dispatch({
    type: Game.ANSWER_CURRENT_QUESTION,
    payload: answer !== undefined ? getValueByGameMode(answer.properties, gameState.mode) : undefined
  });

  if (isLastAnswer) {
    dispatch(showResults());
    return;
  }

  dispatch(timerActions.reset());
};
