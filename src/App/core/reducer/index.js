import { combineReducers } from 'redux';
import { menuListReducer } from '../../containers/Menu/store/duck';

export const rootReducer = combineReducers({ menuListReducer });
