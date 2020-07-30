import { takeEvery, put } from 'redux-saga/effects';
import { actions } from './duck';
import * as constants from './constants';
import { pseudoServerResponse } from '../../../../utils/data';

function* receiveMenuListWorker(action) {
  try {
    const result = pseudoServerResponse;
    if (!result) throw new Error();
    yield put(actions.receiveMenuListSuccess(result));
  } catch (error) {
    console.log('Menu List Loading Error: ', error);
  }
}

export function* getMenuListSaga() {
  yield takeEvery(constants.RECEIVE_MENU_LIST, receiveMenuListWorker);
}