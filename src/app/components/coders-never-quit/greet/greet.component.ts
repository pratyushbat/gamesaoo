import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent {
  @Input() greetMessage!: string;
  @Output() sendMessageEvent = new EventEmitter();
    message:string='';
  constructor() { }
  ngOnInit(): void {


  }

  greet(): void {
    this.sendMessageEvent.emit('Hello From Greet Component');

  }
}
