import { combineReducers } from 'redux';
import { menuListReducer } from '../../containers/Menu/store/duck';
import { cartReducer } from '../../containers/Cart/store/duck';

export const rootReducer = combineReducers({ menuListReducer, cartReducer });
