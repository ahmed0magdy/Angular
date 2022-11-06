import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RegFormValid = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    age: new FormControl('',[Validators.max(40),Validators.min(20),Validators.required])
  })

  get NameValid(){
    return this.RegFormValid.controls.name.valid
  }

  get EmailValid(){
    return this.RegFormValid.controls.email.valid;
  }

  get AgeValid(){
    return this.RegFormValid.controls.age.valid;
  }

  SendData(){
    console.log(this.RegFormValid);
    //Add Data To DB
    if(this.RegFormValid.valid){
      //ADD--->DB
    }
  }

}
