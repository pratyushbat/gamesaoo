import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addToBucket,
  initBucket,
  removeFromBucket,
  resetFromBucket,
} from '../../actions/bucket.action';
// import { requestGrocery, successGrocery } from '../../actions/grocery.action';
import { Grocery } from '../../models/grocery';
import { RootReducerState } from '../../reducers';
import { GroceryReducerState } from '../../reducers/grocery.reducer';
import {
  selectGroceries,
  selectGroceriesAll,
  selectGroceriesByType,
} from '../../selectors/grocery.selector';

@Component({
  selector: 'grocery',
  template: `
    <div class="row">
      <h1>GroceryComponent {{ selected }}</h1>
      <select class="type-select" (change)="onTypeChange($event)">
        <option value="">Select type</option>
        <option value="fruit">Fruit</option>
        <option value="snacks">Snacks</option>
      </select>
      <div
        *ngFor="
          let groc of (filteredGroceries$ ? filteredGroceries$ : groceries$)
            | async
        "
      >
        <button (click)="onIncrement(groc)" mat-button color="accent">
          Increment
        </button>
        {{ groc.name }}
        <button (click)="onDecrement(groc)" mat-button color="accent">
          Decrement
        </button>
      </div>
    </div>
  `,
  styles: [``],
})
export class GroceryComponent implements OnInit {
  selected: boolean = false;
  groceries$: Observable<Grocery[]> = this.store.select(selectGroceriesAll);
  filteredGroceries$: Observable<Grocery[]> | null = null;

  constructor(private store: Store<RootReducerState>) {
    this.store.dispatch(initBucket());
  }

  ngOnInit(): void {
    // this.javafunc();
    const myinc = this.incclos();
    console.log(myinc());
    console.log(myinc());
    console.log(myinc());
    // this.getGroceriesData();
  }

  incclos() {
    let count = 0;
    // outer environment=lexical environment

    return () => {
      // count can be acccess from parent and this is closure
      count = count + 1;
      return count;
    };
  }

memoizationsquare(){

}


  javafunc() {
    let citites = [
      'delhi',
      'delhi',
      'mp',
      'up',
      'delhi',
      'mp',
      'mp',
      'tl',
      'up',
    ];
   

// 1st way     
    citites = citites.filter((value, index, arr) => arr.indexOf(value) == index);

    // 2nd way 
    let ucitites = new Set(citites);
    let ucitiesarr = [...ucitites];
    console.log(ucitiesarr);
  }
  // getGroceriesData() {
  //   this.store.dispatch(requestGrocery());
  //   this.groceryService.getAlGrocery().subscribe((res:any)=>{
  //        this.store.dispatch(successGrocery({payload: res}));
  //   },err=>console.log(err))
  // }

  onTypeChange(ev: Event) {
    const selectedType = (ev.target as HTMLSelectElement).value;
    if (selectedType)
      this.filteredGroceries$ = this.store.select(
        selectGroceriesByType(selectedType)
      );
    else this.filteredGroceries$ = null;
    this.store.dispatch(resetFromBucket());
  }
  onIncrement(item: Grocery) {
    const payload = { id: item.id, name: item.name, quantity: 1 };
    //  this.store.dispatch({type:'update-grocery',payload:payload})
    this.store.dispatch(addToBucket({ payload: payload }));
  }
  onDecrement(item: Grocery) {
    const payload = { id: item.id };
    this.store.dispatch(removeFromBucket({ payload: payload }));
  }
}
