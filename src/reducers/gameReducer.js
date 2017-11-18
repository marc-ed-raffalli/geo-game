import {mapActionToReducer} from './_utils';

import {Game} from '../actionTypes';
import {gameStatus} from '../constants';

const defaultGameState = {
    status: gameStatus.stopped,
    mode: undefined,
    questions: [],
    answers: [],
    correct: 0
  },
  set = (state, action) => ({
    ...state,
    mode: action.payload.mode,
    questions: action.payload.questions,
    answers: [],
    correct: 0
  }),
  start = state => ({
    ...state,
    status: gameStatus.started
  }),
  showResults = state => ({
    ...state,
    status: gameStatus.results
  }),
  stop = state => ({
    ...state,
    status: gameStatus.stopped
  }),

  answerQuestion = (state, action) => {
    const answer = action.payload,
      questions = state.questions,
      answers = state.answers;

    if (questions.length === answers.length) {
      return state;
    }

    const isCorrect = answer !== undefined && answer === questions[answers.length].display;

    return {
      ...state,
      correct: isCorrect ? state.correct + 1 : state.correct,
      answers: answers.concat(answer)
    };
  }
;

export default mapActionToReducer({
  [Game.START]: start,
  [Game.RESULTS]: showResults,
  [Game.STOP]: stop,
  [Game.SET]: set,
  [Game.ANSWER_CURRENT_QUESTION]: answerQuestion,
}, defaultGameState);
