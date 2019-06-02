import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), ReduxThunk, logger());

export const store = createStore(reducers, {}, middleware);