import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `<h1 [ngClass]="{'scl': !!isTab}" > tab </h1>
  <ng-content ></ng-content>
  `,
  styles: [`
  
  h1 { font-weight: normal; }
  .scl{background-color:blue}
  `],
})
export class TabComponent {

   isTab:boolean=false;
    scl:string='blue';
   
}
