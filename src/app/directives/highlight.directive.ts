import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs:"appHighlight"
})
export class HighlightDirective {

  @Input('size')
  size:number=0;

  keywordforexpt:string="hello keyword"

  @Output()
  fileChanged= new EventEmitter<any>();

  issel:boolean=false;

  constructor(private el: ElementRef) {
    
   
  }

  @HostListener("click")
  transferClickEvent(){
    const elp= this.el.nativeElement as HTMLParagraphElement
    elp.classList.add('test')
    elp.style.backgroundColor = 'yellow';
    this.issel=true;
    this.fileChanged.emit('yellow'+this.issel);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.transferClickEvent();
  }
  @HostListener('mouseleave') 
  onMouseLeave() {
    const elp= this.el.nativeElement as HTMLParagraphElement
    elp.classList.remove();
    elp.style.backgroundColor = 'white';
    this.issel=false;
    this.fileChanged.emit('yellow'+this.issel);
  }
  

  @HostBinding("style.display") 
  get styleDisplay() {
   return !!this.issel?'none':'block';
  }

// old way
  // transferClickEvent(){
  //   elp.addEventListener("click",() =>{
  //     this.fileChanged.emit('yay')
  //   })
  // }

}
