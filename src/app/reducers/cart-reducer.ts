import {User} from '../models/user';
import {Action} from '../actions';
import {USER_ADD, USER_DELETE, USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE} from '../actions/user-action';
import {StoreUtility} from '../utils/store-utility';
import {createSelector} from '@ngrx/store';
import { CART_ADD, CART_REMOVE } from '../actions/cart-action';

export interface CartReducerState {
  count: number;
}

const initialState: CartReducerState = {
  count: 0
};

export function CartReducer(state = initialState, action: Action): CartReducerState {
  switch (action.type) {
    case CART_ADD: {
      return {...state, count: state.count+1};
    }
    case CART_REMOVE: {
      return {...state, count: state.count-1};
    }
    default: {
      return state;
    }
  }
}

// selectors -like obsservable
export const getCartount = (state: CartReducerState) => state.count;

