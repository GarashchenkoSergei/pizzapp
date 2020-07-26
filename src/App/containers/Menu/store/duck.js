import * as constants from './constants';
import { createAction } from 'redux-actions';

const initialState = {
  menuList: [],
  isLoading: false,
  loadingFailed: false,
};

export const actions = {
  receiveMenuList: createAction(constants.RECEIVE_MENU_LIST),
  receiveMenuListSuccess: createAction(constants.RECEIVE_MENU_LIST_SUCCESS),
  receiveMenuListFailure: createAction(constants.RECEIVE_MENU_LIST_FAILURE),
};

export const menuListReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RECEIVE_MENU_LIST:
      return { ...state, isLoading: true };
    case constants.RECEIVE_MENU_LIST_SUCCESS:
      return { 
        ...state, 
        menuList: action.payload, 
        isLoading: false 
      };
    case constants.RECEIVE_MENU_LIST_FAILURE:
      return { ...state, loadingFailed: true };
    default:
      return state;
  }
};
