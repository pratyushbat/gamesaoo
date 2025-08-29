import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { RootReducerState } from './reducers';
import { Store } from '@ngrx/store';
import { groceryAction } from './actions/grocery.action';
import { GreetComponent } from './components/coders-never-quit/greet/greet.component';

@Component({
  selector: 'app-root',
  template: `

  <ng-template #greettemp></ng-template>
  <button (click)='loadGreetComponent()'>Greet</button>
  
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit {

@ViewChild('greettemp',{read:ViewContainerRef})
private greetViewContainerRef!:ViewContainerRef;
  constructor(private store: Store<RootReducerState>,private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver){ }
  ngOnInit(): void {
    this.store.dispatch(groceryAction['[Grocery]RequestAPI']());
  }

  // async loadGreetComponent(){
    
  //   this.vcref.clear();
  //   const { GreetComponent } = await import('./components/coders-never-quit/greet/greet.component');
  //   let greetcomp = this.vcref.createComponent(
  //     this.cfr.resolveComponentFactory(GreetComponent)
  //   );
  //   greetcomp.instance.greetMessage = "Data Passed from Parent";
  //   greetcomp.instance.sendMessageEvent.subscribe(data=>{
  //     console.log(data);
  //   })
  
  // }

  // using assync await
  // async loadGreetComponent(){
    
  //   this.greetViewContainerRef.clear();
  //   const { GreetComponent } = await import('./components/coders-never-quit/greet/greet.component');
  //   let greetcomp = this.greetViewContainerRef.createComponent(
  //     this.cfr.resolveComponentFactory(GreetComponent)
  //   );
  //   greetcomp.instance.greetMessage = "Data Passed from Parent";
  //   greetcomp.instance.sendMessageEvent.subscribe(data=>{
  //     console.log(data);
  //   })
  
  // }
  
  // using promise
  loadGreetComponent(){
    
    this.greetViewContainerRef.clear(); 
     import('./components/coders-never-quit/greet/greet.component').then(({GreetComponent})=>{
      let greetcomp = this.greetViewContainerRef.createComponent(
        this.cfr.resolveComponentFactory(GreetComponent)
      );
      greetcomp.instance.greetMessage = "Data Passed from Parent";
      greetcomp.instance.sendMessageEvent.subscribe(data=>{
        console.log(data);
      })
     })
 
  
  }

}


// my component are dependent on api service
// api service -> http service
// http service -> http client
