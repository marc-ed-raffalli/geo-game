import {combineReducers} from 'redux';
import {localeReducer as locale} from 'react-localize-redux';

import game from './gameReducer';
import map from './mapReducer';
import profile from './profileReducer';
import timer from './timerReducer';

export default combineReducers({
  locale,
  game,
  map,
  profile,
  timer
});
