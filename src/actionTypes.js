export const Game = {
  START: 'game:start',
  SET: 'game:set',
  STOP: 'game:stop',
  RESTART: 'game:restart',

  ANSWER_CURRENT_QUESTION: 'game:answer-current-question',
  RESULTS: 'game:results'
};

export const Profile = {
  FETCH_DATA: 'profile:fetch-data',
  FETCH_DATA_FULFILLED: 'profile:fetch-data_fulfilled',
  FETCH_DATA_REJECTED: 'profile:fetch-data_rejected',
  SAVE_DATA: 'profile:save-data',
  SAVE_DATA_FULFILLED: 'profile:save-data_fulfilled',
  SAVE_DATA_REJECTED: 'profile:save-data_rejected',
  SHOW_HELP: 'profile:help_show',
  HIDE_HELP: 'profile:help_hide'
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
