import { inject, Injectable } from "@angular/core";
import { GroceryService } from "../services/grocery.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from "rxjs/operators";
import { EMPTY, of, pipe } from "rxjs";
import { groceryAction } from "../actions/grocery.action";
@Injectable()
export class GroceryEffects {
    constructor(private actions$:Actions,private groceryService:GroceryService){}

  
    loadGroceries$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(groceryAction['[Grocery]RequestAPI']),
          exhaustMap(() => this.groceryService.getAlGrocery()
            .pipe(
              map((data:any) => (groceryAction["[Grocery]SuccessAPI"]({payload:data}))),
              catchError(() => of(groceryAction["[Grocery]FailiureAPI"]()))
            ))
      );
    });
  }