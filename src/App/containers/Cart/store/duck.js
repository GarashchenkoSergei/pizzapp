import * as constants from './constants';
import { createAction } from 'redux-actions';

const initialState = {
  cart: [],
  isDollar: true,
};

export const actions = {
  addToCart: createAction(constants.ADD_TO_CART),
  removeFromCart: createAction(constants.REMOVE_FROM_CART),
  removeAllFromCart: createAction(constants.REMOVE_ALL_FROM_CART),
  changeCurrency: createAction(constants.CHANGE_CURRENCY),
  submitOrder: createAction(constants.SUBMIT_ORDER),
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TO_CART:
      return { 
        ...state,
        cart: [
          ...state.cart,
          action.payload,
        ]
      };
    case constants.REMOVE_FROM_CART:
      const index = (state.cart.findIndex(item => item.id === action.payload));
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      return {
        ...state,
        cart: [
          ...state.cart,
        ]
      }
    case constants.REMOVE_ALL_FROM_CART:
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      })
      return {
        ...state,
        cart: [
          ...state.cart,
        ]
      }
    case constants.CHANGE_CURRENCY:
      return {
        ...state,
        isDollar: state.isDollar ? state.isDollar = false : state.isDollar = true,
      }
    case constants.SUBMIT_ORDER:
      return console.log('order submitted');
    default:
      return state;
  }
};
