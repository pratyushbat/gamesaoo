import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../models/grocery";
import { GroceryReducerState } from "../reducers/grocery.reducer";

// export const selectGroceries= (state:{groceries:Grocery[]})=> state.groceries;
export const selectGroceries= createFeatureSelector<GroceryReducerState>('groceries');
export const selectGroceriesAll= createSelector(
    selectGroceries,
    (item)=>item.groceries
);
export const getGroceriesLoading = (state: GroceryReducerState) => state.loading;
export const getGroceriesLoaded = (state: GroceryReducerState) => state.loaded;
// line 4===5
export const selectGroceriesByType= (type:string) =>createSelector(
    selectGroceries,
    (item)=>item.groceries.filter(data=>data.type ===type)
);


// to transform data before showing to ui a to  memoized data and increase tthe performance as sit is caled once only but it is used  everywehere 