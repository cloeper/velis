import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { appReducer, IAppState } from './App/App.reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

// Needed to tell typescript __REDUX_DEVTOOLS_EXTENSION__ is valid
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
  }
}

const sagaMiddleware = createSagaMiddleware();

export interface IStateStore {
  app: IAppState;
}

const rootReducer = combineReducers({ app: appReducer });

export const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

sagaMiddleware.run(rootSaga);
