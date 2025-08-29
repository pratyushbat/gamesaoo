import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { WishItem } from '../../models/wish';

@Component({
  selector: 'codersneverquit',
  template: `
    <div class="row">
      <div *ngIf="items.length === 0; then noItems; else showItems"></div>
      <ng-template #noItems>
        <div >There are no items</div>
      </ng-template>
      <ng-template #showItems>
        <ul *ngIf="items.length > 0" class="wish-list">
          <li *ngFor="let data of items;index as i">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="checkbox" [checked]="data.isComplete" [attr.data-index]="i" (click)="toggleItem(data)"/> {{ data.wishText }}
              </label>
            </div>
          </li>
        </ul>
      </ng-template>

      <input appInput type="text" />
      <ng-template embeddedView>
        <p>asadas when embedded view</p>
      </ng-template>
      <ng-template embeddedView>
        <p>asadas when embedded view</p>
      </ng-template>

      <h1>CodersneverquitComponent</h1>
      <grocery list></grocery>
      <bucket></bucket>

      <!-- <button  (click)="addToCart()" mat-button color="accent">Add</button>
      <button (click)="removeFromCart()" mat-button color="warn">Remove</button> -->
    </div>
  `,
  styles: [
    `
      .wish-list {
        list-style: none;
      }
    `,
  ],
})
export class CodersneverquitComponent {
  public items: any[] = [
    new WishItem('Learn angular'),
    new WishItem('make coffee', true),
    new WishItem('go to park'),
  ];
  toggleItem(item:WishItem) {
    item.isComplete= !item.isComplete;

  }
  
}
