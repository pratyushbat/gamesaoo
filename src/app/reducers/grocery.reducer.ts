import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../models/grocery";
import { groceryAction
  // , requestGrocery, successGrocery 
} from "../actions/grocery.action";





export interface GroceryReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  groceries: Grocery[];
}
// {id:1,name:"Milk",type:"fruit"},{id:2,name:"Banana",type:"fruit"},{id:3,name:"Chips",type:"snacks"},{id:4,name:"doritos",type:"snacks"},
export const groceryInitalState:Grocery[]=[]
export const groceryInitaNewState:GroceryReducerState={
    loaded: false,
    loading: false,
    error: false,
    groceries:groceryInitalState
}





export const groceryReducer=createReducer(groceryInitaNewState,
//   on(requestGrocery,(state,action)=>{
//     return {
//       ...state,...{     
//       loading: true
//     }}
// }),
//   on(successGrocery,(state,action)=>{
//     return {
//       ...state,...{
//       loaded: true,
//       loading: false, error: false,
//       groceries: action.payload.groceries
//     }}
// }),

on(groceryAction["[Grocery]RequestAPI"],(state,action)=>{
  return {
    ...state,...{     
    loading: true
  }}
}),
on(groceryAction["[Grocery]SuccessAPI"],(state,action)=>{
  return {
    ...state,...{
    loaded: true,
    loading: false, error: false,
    groceries: action.payload.groceries
  }}
}),

on(groceryAction["[Grocery]FailiureAPI"],(state,action)=>{
  return {
    ...state,...{
    loaded: true,
    loading: false, error: true,
    groceries: []
  }}
}),

);