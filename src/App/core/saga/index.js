import { all } from 'redux-saga/effects';
import { getMenuListSaga } from '../../containers/Menu/store/saga';

export function* rootSaga() {
  yield all([getMenuListSaga()]);
}