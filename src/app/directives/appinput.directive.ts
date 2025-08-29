import {
  Directive,
  ElementRef,
  HostListener,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appInput]',
})
export class AppInputDirective {
  constructor() {}

  @HostListener('focus', ['$event.target'])
  onFocus(target: any) {
    console.log(target.value);
  }
}
