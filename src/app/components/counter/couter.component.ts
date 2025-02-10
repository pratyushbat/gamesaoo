import { Component, Input } from '@angular/core';
// import {User} from '../models/user';
// import { AddToCartAction, RemoveFromCartAction } from '../actions/cart-action';
// import { RootReducerState } from '../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'counter',
  template: `
    <div class="row">
      <div class="col-md-12"><h1>parent</h1></div>

      <div class="row">
        <div class="col-md-6">
          <couter-button
            (increment)="onIncrement()"
            (decrement)="onDecrement()"
            (reset)="onReset()"
          ></couter-button>
        </div>
        <div class="col-md-6">
          <counter-output [counter]="counter"></counter-output>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class CounterComponent {
  counter: number = 0;

  onIncrement() {
    this.counter++;
  }
  onDecrement() {
    this.counter--;
  }
  onReset() {
    this.counter = 0;
  }

  //   constructor(private store: Store<RootReducerState>) {
  //   }

  //   addToCart(){
  //      this.store.dispatch(new AddToCartAction());
  //   }

  //   removeFromCart(){
  //     this.store.dispatch(new RemoveFromCartAction());
  //  }
}
