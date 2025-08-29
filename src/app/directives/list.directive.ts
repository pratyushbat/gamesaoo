import { Directive, ElementRef, ViewContainerRef } from '@angular/core';
import { GroceryComponent } from '../components/coders-never-quit/grocery.comonennt';

@Directive({
  selector: '[list]'
})
export class ListDirective {

  constructor(private el: ElementRef,private cmp:GroceryComponent,private vcr:ViewContainerRef) {
 this.listOps();
  }
  listOps() {
    console.log(this.vcr)
setTimeout(()=>this.cmp.selected=true,1500)    ;
// this.vcr.createEmbeddedView(this.templateRef)
  }

}
