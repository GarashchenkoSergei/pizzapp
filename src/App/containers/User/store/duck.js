import * as constants from './constants';
import { createAction } from 'redux-actions';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  loadingFailed: false,
};

export const actions = {
  logIn: createAction(constants.LOG_IN),
  logInSuccess: createAction(constants.LOG_IN_SUCCESS),
  logInFailure: createAction(constants.LOG_IN_FAILURE),
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOG_IN:
      return { ...state, isLoading: true };
    case constants.LOG_IN_SUCCESS:
      return { ...state, isLoggedIn: true, isLoading: false };
    case constants.LOG_IN_FAILURE:
      return { ...state, isLoggedIn: false, isLoading: false, loadingFailed: true };
    default:
      return state;
  }
};
