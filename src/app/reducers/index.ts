import * as fromUser from './user-reducer';
import * as fromPost from './post-reducer';
import * as fromCart from './cart-reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';
import { Grocery } from '../models/grocery';
import { groceryReducer, GroceryReducerState } from './grocery.reducer';
import { bucketReducer } from './bucket.reducer';
import { Bucket } from '../models/bucket';


export interface RootReducerState {
  users: fromUser.UserReducerState;
  post: fromPost.PostReducerState;
  cart:fromCart.CartReducerState;
  groceries:GroceryReducerState;
  myBucket:Bucket[]
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  users: fromUser.UserReducer,
  post: fromPost.PostReducer,
  cart:fromCart.CartReducer,
  groceries:groceryReducer,
  myBucket:bucketReducer
}

export const getUserState = (state: RootReducerState) => state.users;

export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUserEntities = createSelector(getUserState, fromUser.getEntities);
export const getUsers = createSelector(getUserState, fromUser.getUsers);
export const getUserError = createSelector(getUserState, fromUser.getError);

export const getUserById = (state: RootReducerState, id: number) => {
  const entities = getUserEntities(state);
  return entities[id];
};

export const getPostState = (state: RootReducerState) => state.post;

export const getPostLoaded = createSelector(getPostState, fromPost.getLoaded);
export const getPostLoading = createSelector(getPostState, fromPost.getLoading);
export const getPostEntities = createSelector(getPostState, fromPost.getEntities);
export const getPosts = createSelector(getPostState, fromPost.getPosts);
export const getPostError = createSelector(getPostState, fromPost.getError);

export const getPostById = (state: RootReducerState, id: number) => {
  const entities = getUserEntities(state);
  return entities[id];
};



export const getCartState = (state: RootReducerState) => state.cart;

export const getCountCartState= createSelector(getCartState, fromCart.getCartount);