import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';

import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
// const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))
export default store;