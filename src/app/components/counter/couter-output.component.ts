import {Component, Input} from '@angular/core';
// import {User} from '../models/user';
// import { AddToCartAction, RemoveFromCartAction } from '../actions/cart-action';
// import { RootReducerState } from '../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'counter-output',
  template: `
    <div class="row wrap" >
      <h1>Counter Output in child {{counter}}</h1>    
    </div>
  `,
  styles: [``]
})

export class CounterOutputComponent {

@Input() counter:any;
  // constructor(private store: Store<RootReducerState>) {
  // }

//   addToCart(){
//      this.store.dispatch(new AddToCartAction());
//   }

//   removeFromCart(){
//     this.store.dispatch(new RemoveFromCartAction());
//  }
}
