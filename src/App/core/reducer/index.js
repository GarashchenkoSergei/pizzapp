import { combineReducers } from 'redux';
import { menuListReducer } from '../../containers/Menu/store/duck';
import { cartReducer } from '../../containers/Cart/store/duck';
import { loginReducer } from '../../containers/User/store/duck'
import { historyListReducer } from '../../containers/History/store/duck';

export const rootReducer = combineReducers({ menuListReducer, cartReducer, loginReducer, historyListReducer });
