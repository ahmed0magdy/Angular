import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stname:string="";
  stAge:number=0;
studentData :{name:string,age:number} = {name:this.stname,age:this.stAge};
@Output() myEvent = new EventEmitter()

  addNewStudent(){
    if(this.stAge > 20 && this.stAge < 40 && this.stname.length > 3 && this.stname != ""){
      this.studentData = {name:this.stname,age:this.stAge};
      this.myEvent.emit(this.studentData);
    }
  }
}
