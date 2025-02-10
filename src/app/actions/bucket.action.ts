import { createAction, props } from "@ngrx/store";
import { Bucket } from "../models/bucket";


export const initBucket = createAction(
    '[Bucket] Initialize'
)
export const addToBucket = createAction(
    '[Bucket] Add',
    props<{payload:Bucket }>()
)


export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<{payload:Partial<Bucket> }>()
)


export const resetFromBucket = createAction(
    '[Bucket] Reset'  
)


