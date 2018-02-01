import {mapActionToReducer} from './_utils';
import {Timer} from '../actionTypes';

const defaultState = {
    active: false,
    duration: undefined,
    timeout: undefined,
    onTimeout: undefined
  },
  start = (state, action) => ({
    ...state,
    duration: action.payload.duration || state.duration,
    onTimeout: action.payload.onTimeout || state.onTimeout,
    timeout: action.payload.duration || state.duration,
    active: true
  }),
  stop = state => ({
    ...state,
    active: false
  }),
  reset = state => ({
    ...state,
    timeout: state.duration
  }),
  decrement = state => ({
    ...state,
    timeout: state.timeout - 1
  })
;

export default mapActionToReducer({
  [Timer.START]: start,
  [Timer.STOP]: stop,
  [Timer.RESET]: reset,
  [Timer.DECREMENT]: decrement,
}, defaultState);
