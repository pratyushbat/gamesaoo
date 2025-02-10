import {User} from '../models/user';

export const CART_REQUEST = 'cart request';
export const CART_SUCCESS = 'cart success';
export const CART_ADD = 'add to cart ';
export const CART_REMOVE = 'remove from cart' ;
// export const USER_ADD = 'user add';
export const CART_ERROR = 'cart error';

export class AddToCartAction {
  readonly type = CART_ADD;
}

export class RemoveFromCartAction {
  readonly type = CART_REMOVE;
}

// export class UserUpdateAction {
//   readonly type = USER_UPDATE;

//   constructor(public payload?: { data: User }) {
//   }
// }

// export class UserAddAction {
//   readonly type = USER_ADD;

//   constructor(public payload?: { data: User }) {
//   }
// }

// export class CartErrorAction {
//   readonly type = CART_ERROR;
// }

// export class CartSuccessAction {
//   readonly type = CART_SUCCESS;

//   constructor(public payload?: { data: User[] }) {
//   }
// }
