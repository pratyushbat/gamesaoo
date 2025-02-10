import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Grocery } from '../models/grocery';

// export const requestGrocery = createAction(
//     '[Grocery] Request API'
// )

// export const successGrocery = createAction(
//     '[Grocery] Success API',
//     props<{payload:{"groceries":Grocery[]} }>()
// )
// export const faiiureGrocery = createAction(
//     '[Grocery] Failure API'
// )

export const  groceryAction = createActionGroup({
  source: 'Grocery API',
  events: {
    '[Grocery] Request API': emptyProps(),
    '[Grocery] Success API': props<{ payload: { groceries: Grocery[] } }>(),
    '[Grocery] Failiure API': emptyProps(),
  },
});


