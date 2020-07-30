import { takeEvery, put } from 'redux-saga/effects';
import { actions } from './duck';
import * as constants from './constants';
import { userOrders } from '../../../../utils/data';

function* receiveHistoryListWorker(action) {
  try {
    const result = userOrders;
    if (!result) throw new Error();
    yield put(actions.receiveHistoryListSuccess(result));
  } catch (error) {
    console.log('History List Loading Error: ', error);
  }
}

export function* getHistoryListSaga() {
  yield takeEvery(constants.RECEIVE_HISTORY_LIST, receiveHistoryListWorker);
}