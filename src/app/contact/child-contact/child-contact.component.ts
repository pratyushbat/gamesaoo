import { Component } from '@angular/core';

@Component({
  selector: 'app-child-contact',
  templateUrl: './child-contact.component.html',
  styleUrl: './child-contact.component.css'
})
export class ChildContactComponent {
message: string;
constructor(){
  this.message='child'
  console.log('hello')
}
}
