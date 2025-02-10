import {Component, Input} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bucket } from '../../models/bucket';
import { RootReducerState } from '../../reducers';

@Component({
  selector: 'bucket',
  template: `
    <div class="row">
      <h1>BucketComponent</h1>
      <p>angular service is not singleton if privided in component only</p>
      <div *ngFor="let groc of bucket$ | async">      
        {{groc.name}}  x  {{groc.quantity}} 
      </div>
    </div>
  `,
  styles: [``]
})

export class BucketComponent {

bucket$:Observable<Bucket[]>=this.store.select("myBucket");


 constructor(private store: Store<RootReducerState>) {
    }
 
}
