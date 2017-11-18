import {mapActionToReducer} from './_utils';
import {Profile} from '../actionTypes';

const defaultProfileState = {
    persisted: undefined,
    showHelp: true,
    loading: false,
    saving: false,
    error: undefined
  },

  //<editor-fold desc="Fetch">
  fetch = state => ({
    ...state,
    loading: true,
    error: undefined
  }),
  fetchFulfilled = (state, action) => {
    const persisted = action.payload;
    return {
      ...state,
      showHelp: persisted.config.showHelpOnGameStart,
      loading: false,
      persisted: persisted
    };
  },
  fetchRejected = (state, action) => ({
    ...state,
    loading: false,
    persisted: undefined,
    error: action.payload
  }),
  //</editor-fold>

  //<editor-fold desc="Save">
  save = state => ({
    ...state,
    saving: true,
    error: undefined
  }),
  saveFulfilled = state => ({
    ...state,
    saving: false
  }),
  saveRejected = (state, action) => ({
    ...state,
    saving: false,
    error: action.payload
  }),
  //</editor-fold>

  //<editor-fold desc="Help">
  showHelp = state => ({
    ...state,
    showHelp: true
  }),
  hideHelp = (state, action) => {
    const res = {
      ...state,
      showHelp: false
    };

    if (action.payload.showHelpOnGameStart === false) {
      res.persisted.config.showHelpOnGameStart = false;
    }

    return res;
  }
  //</editor-fold>
;

export default mapActionToReducer({
  [Profile.FETCH_DATA]: fetch,
  [Profile.FETCH_DATA_FULFILLED]: fetchFulfilled,
  [Profile.FETCH_DATA_REJECTED]: fetchRejected,
  [Profile.SAVE_DATA]: save,
  [Profile.SAVE_DATA_FULFILLED]: saveFulfilled,
  [Profile.SAVE_DATA_REJECTED]: saveRejected,
  [Profile.SHOW_HELP]: showHelp,
  [Profile.HIDE_HELP]: hideHelp
}, defaultProfileState);
