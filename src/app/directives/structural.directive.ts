import {ContentChild, ContentChildren, Directive, Input, QueryList, TemplateRef, ViewChildren, ViewContainerRef} from '@angular/core';
import { TabComponent } from '../components/coders-never-quit/tab.component';
@Directive({
  selector: '[accordian]',
})
export class AccordianDirective  {

    @ContentChildren(TabComponent) tabs!:QueryList<TabComponent>
   

  
   ngAfterContentInit(): void {
     console.log(this.tabs)
     this.tabs.forEach((tab:TabComponent,index:number)=>{
         tab.isTab = index%2==0;
     });
   }
}