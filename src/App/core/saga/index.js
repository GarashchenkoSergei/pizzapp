import { all } from 'redux-saga/effects';
import { getMenuListSaga } from '../../containers/Menu/store/saga';
import { loginSaga } from '../../containers/User/store/saga';
import { getHistoryListSaga } from '../../containers/History/store/saga';

export function* rootSaga() {
  yield all([getMenuListSaga(), loginSaga(), getHistoryListSaga()]);
}