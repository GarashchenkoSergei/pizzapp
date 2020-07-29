import * as constants from './constants';
import { createAction } from 'redux-actions';

const initialState = {
  cart: [],
};

export const actions = {
  addToCart: createAction(constants.ADD_TO_CART),
  removeFromCart: createAction(constants.REMOVE_FROM_CART),
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
      return {
        ...state,
        // cart.filter()
        
        // : [
        //   ...state.cart,
        //   action.payload,

          //cart.filter
        // ]
      }
    default:
      return state;
  }
};
