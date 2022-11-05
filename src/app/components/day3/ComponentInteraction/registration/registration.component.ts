import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor() {
    // setTimeout(()=>{
    //   this.myEvent.emit(this.RegData);
    // },2000)
  }

  ngOnInit(): void {

  }

  RegData = "2na data mn registration"

  @Output() myEvent = new EventEmitter();

  FireNow(){
    this.myEvent.emit(this.RegData);
  }
}
