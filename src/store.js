import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {NODE_ENV_PRODUCTION} from './constants';
import reducers from './reducers';

const middlewares = [thunk];

if (!NODE_ENV_PRODUCTION) {
  middlewares.push(logger);
}

export default createStore(
  reducers,
  applyMiddleware(...middlewares)
);
