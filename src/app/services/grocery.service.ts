import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GroceryService {
public static textmark:number=0;
  constructor(private http: HttpClient) {
    GroceryService.textmark=GroceryService.textmark+1;
    console.log(GroceryService.textmark)
  }

  getAlGrocery(){
   return this.http.get('http://localhost:5000/groceries');
  }
}
