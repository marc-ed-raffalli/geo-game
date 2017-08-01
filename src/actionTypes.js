export const Game = {
  START: 'game:start',
  STOP: 'game:stop',
  RESTART: 'game:restart',

  ANSWER_CURRENT_QUESTION: 'game:answer-current-question',
  RESULTS: 'game:results'
};

export const CountryQna = {
  SELECT_AREA: 'country-qna:select-area',
  SET_QUESTION_LIST: 'country-qna:set-question-list',
  ANSWER_CURRENT_QUESTION: 'country-qna:answer-current-question'
};

export const Timer = {
  START: 'timer:start',
  STOP: 'timer:stop',
  RESET: 'timer:reset',
  DECREMENT: 'timer:decrement',
  TIMEOUT: 'timer:timeout'
};

export const Map = {
  FETCH_DATA: 'map:fetch-data',
  FETCH_DATA_FULFILLED: 'map:fetch-data_fulfilled',
  FETCH_DATA_REJECTED: 'map:fetch-data_rejected',
  RESET: 'map:reset',
  HIGHLIGHT_FEATURES: 'map:highlightFeatures',
  SHOW_MARKERS: 'map:show-markers',
  SHOW_POPUP: 'map:show-popup',
  HIDE_POPUP: 'map:hide-popup'
};
