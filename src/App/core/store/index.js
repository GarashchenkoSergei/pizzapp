import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducer';
import { rootSaga } from '../saga';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);