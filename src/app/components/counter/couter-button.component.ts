import {Component, EventEmitter, Input, Output} from '@angular/core';
// import {User} from '../models/user';
// import { AddToCartAction, RemoveFromCartAction } from '../actions/cart-action';
// import { RootReducerState } from '../reducers';
import { Store } from '@ngrx/store';


@Component({
  selector: 'couter-button',
  template: `
    <div class="row wrap" >
      <h1>Counnter Button</h1>
      <button (click)="onIncrement()"   mat-button color="accent">Increment</button>
      <button (click)="onDecrement()"   mat-button color="accent">Decrement</button>
      <button (click)="onReset()"   mat-button color="accent">Reset</button>
    </div>
  `,
  styles: [``]
})

export class CounterButtonComponent {
  @Output() increment=new EventEmitter<void>();
  @Output() decrement=new EventEmitter<void>();
  @Output() reset=new EventEmitter<void>();
  onIncrement() {
    this.increment.emit();
  }
  onDecrement() {
    this.decrement.emit();
  }
  onReset() {
    this.reset.emit();
  }


  // constructor(private store: Store<RootReducerState>) {
  // }

//   addToCart(){
//      this.store.dispatch(new AddToCartAction());
//   }

//   removeFromCart(){
//     this.store.dispatch(new RemoveFromCartAction());
//  }
}
