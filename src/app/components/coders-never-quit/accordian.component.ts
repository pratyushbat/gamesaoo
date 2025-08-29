import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-accordian',
  template: ` 
  <ng-content></ng-content>
  <!-- <app-tab> Tab one </app-tab>
  <app-tab>Tab two</app-tab>
  <app-tab> Tab one </app-tab>
  <app-tab>Tab two</app-tab> -->
  `,
  styles: [``]
})
export class AccordianComponent implements AfterViewInit {
  // note view children can only be used in component but content children can be used in directive also

   @ViewChildren(TabComponent) tabs!:QueryList<TabComponent>;
   constructor(){
    console.log(this.tabs)
  }
  ngAfterViewInit(): void {
    console.log(this.tabs)
    // this.tabs.forEach((tab:TabComponent,index:number)=>{
    //     tab.isTab = index%2==0;
    // });
  }
}
