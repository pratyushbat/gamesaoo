import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { getCountCartState, RootReducerState } from '../../reducers';

@Component({
  selector: 'youtube-header',
  template: `
    <mat-toolbar color="primary" style="height: 85px; padding: 0 16px;">
      <div fxLayoutAlign="start center" fxFlex="100%" fxHide.xs>
        <button mat-button routerLink="" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="selected">Users</button>
        <button mat-button routerLink="/post" routerLinkActive="selected">Posts</button>
        <button mat-button routerLink="/contact/child" routerLinkActive="selected">Contact lazy</button>
        <button mat-button routerLink="/counter" routerLinkActive="selected">Counter</button>
        <button mat-button routerLink="/codersneverquit" routerLinkActive="selected">codersneverquit</button>
        <button mat-button routerLink="/add-item" routerLinkActive="selected">Items</button>
        <div class="cart-count" id="lblCartCount"><a><i class="fa-solid fa-bag-shopping"></i></a>{{cartCount | async}}</div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .selected {
      background: #3c763d;
    }
    #lblCartCount {
    font-size: 12px;
    background: #ff0000;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
}
  `]
})

export class HeaderComponent {

  cartCount=this.store.select(getCountCartState);
  
  constructor(private store: Store<RootReducerState>) {
    }

  addToCart(){

  }
}
