import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../models/grocery";
import { Bucket } from "../models/bucket";
import { addToBucket, removeFromBucket, resetFromBucket } from "../actions/bucket.action";



export const initialStateBucket:Bucket[]=[
//  {id:1,name:"Milk",quantity:1},
//  {id:2,name:"Banana",quantity:1},
//  {id:3,name:"Chips",quantity:1},
//  {id:4,name:"doritos",quantity:1},
]



export const bucketReducer=createReducer(initialStateBucket,

    // to listen to action
    on(addToBucket,(state,action)=>{
        const bucketItem=state.find(item=>item.id=== action.payload.id);
        if(bucketItem){
        return state.map(item=> { 
            return item.id === action.payload.id ?  {...item,quantity:item.quantity+action.payload.quantity}:item  
        });
        }
        else
        return [...state,action.payload]
    }),
    on(removeFromBucket,(state,action)=>{
        const bucketItem=state.find(item=>item.id=== action.payload.id);
    //    if(!bucketItem)
    //     return  state;
         if(!!bucketItem && bucketItem.quantity>1){
        return state.map(item=> { 
            return item.id === action.payload.id ?  {...item,quantity:item.quantity-1}:item  
        });
        }
        else
        return  state.filter(item=>item.id!= action.payload.id);
    }),
    on(resetFromBucket,(state,action)=>{
        return [];
    }),
    
);