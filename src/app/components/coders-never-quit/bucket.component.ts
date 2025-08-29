import {Component, Input} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bucket } from '../../models/bucket';
import { RootReducerState } from '../../reducers';

@Component({
  selector: 'bucket',
  template: `
    <div class="row">
      <h1>BucketComponent</h1>
      <p>{{appFile.keywordforexpt}}</p>
      <app-accordian  accordian>
      <app-tab> Tab one </app-tab>
      <app-tab>Tab two</app-tab>
      <app-tab> Tab one </app-tab>
      <app-tab>Tab two</app-tab>

      </app-accordian>
      <p   appHighlight [size]="2" (fileChanged)="onFileChange($event)"  #appFile="appHighlight">angular service is not singleton if privided in component only  {{issel}}</p>
      <textarea>provided in root is tree shakeable ,procided in app module is not      
      useClass=same token for  one or multiple class
      provides-[{provide:Token, useClass:CLass}]
      useExisting=same token for multiple class
      provides-[{provide:LogService, useExisting:Token Existin in previous}]
      useclass -globalerrorhandler
      </textarea>
      <textarea name="" id="">
        directive features

        appearance customization-class style other attribute
        add remove dom events on elememnt
        custom event like date changed ,list added

        layout and structure-add/remove the element
        intercept the behaviour and do something else
        validate inputs inside form
        
        
        Identification: to ref the element and use them in viewchild,viewchildren,
        to find or extract the element in directive,component or other place,
        to provide  the context and intent.
         

      </textarea>
<input  type="text"/>
      <div *ngFor="let groc of bucket$ | async">      
        {{groc.name}}  x  {{groc.quantity}} 
      </div>
    </div>
  `,
  styles: [``]
})

export class BucketComponent {
  public source=['esta','test']
  issel:boolean=false;
onFileChange(event: any) {
  this.issel=event;
}

bucket$:Observable<Bucket[]>=this.store.select("myBucket");


 constructor(private store: Store<RootReducerState>) {
    }
 
}
