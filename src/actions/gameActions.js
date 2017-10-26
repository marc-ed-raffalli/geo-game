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


export const loadGame = (areaId, mode, questionCount, timeout) => dispatch => {
  // IMPR better way?
  dispatch(mapActions.load(areaId))
    .then(countries => dispatch(startGame(countries, mode, questionCount, timeout)));
};

export const startGame = (data, mode, questionCount, timeout) => dispatch => {
  dispatch({
    type: Game.START,
    payload: {
      questions: buildQuestionList(data, mode, questionCount),
      mode: mode
    }
  });

  dispatch(timerActions.start(timeout, () => answerCurrentQuestion(undefined)));
};

export const restartGame = () => (dispatch, getState) => {
  const {map, game, timer} = getState();
  dispatch(startGame(map.countriesData, game.mode, game.questions.length, timer.duration));
  dispatch(mapActions.reset());
};

export const stopGame = () => dispatch => {
  dispatch({type: Game.STOP});
  dispatch(mapActions.reset());
  dispatch(timerActions.stop());
};

export const showResults = () => (dispatch, getState) => {
  const gameState = getState().game,
    colorsByName = gameState.questions.reduce((res, question, index) => {
      const answer = gameState.answers[index];

      res[question.id] = answer === question.display ? colors.greenOk : colors.redError;

      return res;
    }, {});

  dispatch(stopGame());
  dispatch(mapActions.highlightFeatures(colorsByName));

  if (gameState.correct === gameState.questions.length) {
    return;
  }

  const wrongAnswers = gameState.questions
    .filter((question, index) => gameState.answers[index] !== question.display)
  ;

  dispatch(mapActions.showMarkers(wrongAnswers.map(d => d.id)));
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
