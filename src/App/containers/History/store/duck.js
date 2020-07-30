import * as constants from './constants';
import { createAction } from 'redux-actions';

const initialState = {
  historyList: [],
  isLoading: false,
  loadingFailed: false,
};

export const actions = {
  receiveHistoryList: createAction(constants.RECEIVE_HISTORY_LIST),
  receiveHistoryListSuccess: createAction(constants.RECEIVE_HISTORY_LIST_SUCCESS),
  receiveHistoryListFailure: createAction(constants.RECEIVE_HISTORY_LIST_FAILURE),
};

export const historyListReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RECEIVE_HISTORY_LIST:
      return { ...state, isLoading: true };
    case constants.RECEIVE_HISTORY_LIST_SUCCESS:
      return { 
        ...state, 
        historyList: action.payload, 
        isLoading: false 
      };
    case constants.RECEIVE_HISTORY_LIST_FAILURE:
      return { ...state, loadingFailed: true };
    default:
      return state;
  }
};
