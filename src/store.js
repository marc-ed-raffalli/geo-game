import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {NODE_ENV_PRODUCTION} from './constants';
import reducers from './reducers';

const middlewares = [thunk];
const composeEnhancers = !NODE_ENV_PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

if (!NODE_ENV_PRODUCTION) {
  middlewares.push(logger);
}

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);
