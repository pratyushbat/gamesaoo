import {Component, Input} from '@angular/core';
import {User} from '../models/user';
import { AddToCartAction, RemoveFromCartAction } from '../actions/cart-action';
import { RootReducerState } from '../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'add-item',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center start" fxLayoutGap="30px">
      <h1>Add or Remove</h1>
      <button  (click)="addToCart()" mat-button color="accent">Add</button>
      <button (click)="removeFromCart()" mat-button color="warn">Remove</button>
    </div>
  `,
  styles: [``]
})

export class AddItemComponent {


  constructor(private store: Store<RootReducerState>) {
  }

  addToCart(){
     this.store.dispatch(new AddToCartAction());
  }

  removeFromCart(){
    this.store.dispatch(new RemoveFromCartAction());
 }
}
