import { takeLatest, put } from 'redux-saga/effects';
import { actions } from './duck';
import * as constants from './constants';

function* loginWorker(action) {
  try {
    const result = true;
    if (!result) throw new Error(result.data.error); 
    yield put(actions.logInSuccess());
  } catch (error) {
    yield put(actions.logInFailure());
  }
}

export function* loginSaga() {
  yield takeLatest(constants.LOG_IN, loginWorker);
}