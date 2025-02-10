import {Component, OnInit} from '@angular/core';
import { GroceryService } from './services/grocery.service';
import { RootReducerState } from './reducers';
import { Store } from '@ngrx/store';
import { groceryAction } from './actions/grocery.action';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit {
  constructor(private store: Store<RootReducerState>) {
  }
  ngOnInit(): void {
    this.store.dispatch(groceryAction['[Grocery]RequestAPI']());
  }
  
}

// my component are dependent on api service
// api service -> http service
// http service -> http client
