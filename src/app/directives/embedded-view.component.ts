import { Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[embeddedView]'
})
export class EmbeddedViewDirective {

  
    constructor(private el: ElementRef,private templateRef:TemplateRef<any>,private vcr:ViewContainerRef) {
   this.listOps();
    }
    listOps() {
  this.vcr.createEmbeddedView(this.templateRef)
    }
  

}
