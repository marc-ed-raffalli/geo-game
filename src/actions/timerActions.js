import {Timer} from '../actionTypes';

let interval;

export const start = (duration, onTimeout) => dispatch => {
  dispatch({type: Timer.START, payload: {duration, onTimeout}});

  if (interval !== undefined) {
    throw Error('Multiple timers started');
  }

  interval = setInterval(() => dispatch(tick()), 1000);
};

export const stop = () => dispatch => {
  clearInterval(interval);
  interval = undefined;
  dispatch({type: Timer.STOP});
};

export const reset = () => ({type: Timer.RESET});

export const tick = () => (dispatch, getState) => {
  const timerState = getState().timer;

  if (timerState.timeout <= 1) {
    // IMPR better way ?
    if (timerState.onTimeout) {
      dispatch(timerState.onTimeout());
    }

    dispatch(reset());
    return;
  }

  dispatch({type: Timer.DECREMENT});
};
