import {combineReducers} from 'redux';

import game from './gameReducer';
import map from './mapReducer';
import profile from './profileReducer';
import timer from './timerReducer';

export default combineReducers({
  game,
  map,
  profile,
  timer
});
