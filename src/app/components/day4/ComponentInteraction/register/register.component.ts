
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

@Output() myEvent = new EventEmitter();

// student:{}={};
sendData(arg0: string,arg1: number) {
// console.log(arg0,arg1);
// this.student = {name:arg0,age:arg1};
this.myEvent.emit({name:arg0,age:arg1});
}

  constructor() { }

  ngOnInit(): void {
  }

}
