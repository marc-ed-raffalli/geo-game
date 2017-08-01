import {combineReducers} from 'redux';

import game from './gameReducer';
import timer from './timerReducer';
import map from './mapReducer';

export default combineReducers({
  game,
  map,
  timer
});
