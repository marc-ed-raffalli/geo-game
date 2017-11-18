import {Profile} from '../actionTypes';

import {fetchData, saveData} from '../services/profileService';

export const load = id => dispatch => {
  dispatch({type: Profile.FETCH_DATA});

  return fetchData(id)
    .then(data => {
      if (data === undefined) {
        data = {
          id: id,
          config: {
            showHelpOnGameStart: true
          }
        };
        dispatch(save(data));
      }

      dispatch({type: Profile.FETCH_DATA_FULFILLED, payload: data});
      return data;
    })
    .catch(err => dispatch({type: Profile.FETCH_DATA_REJECTED, payload: err}));
};

export const save = data => (dispatch, getState) => {
  dispatch({type: Profile.SAVE_DATA});

  data = data !== undefined ? data : getState().profile.persisted;

  return saveData(data.id, data)
    .then(() => dispatch({type: Profile.SAVE_DATA_FULFILLED}))
    .catch(err => dispatch({type: Profile.SAVE_DATA_REJECTED, payload: err}));
};

export const showHelp = () => ({type: Profile.SHOW_HELP});
export const hideHelp = showHelpOnGameStart => (dispatch, getState) => {
  const saveRequired = showHelpOnGameStart !== getState().profile.persisted.config.showHelpOnGameStart;

  dispatch({
    type: Profile.HIDE_HELP,
    payload: {showHelpOnGameStart}
  });

  if (saveRequired) {
    dispatch(save());
  }
};
