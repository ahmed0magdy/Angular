import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-test',
  templateUrl: './valid-test.component.html',
  styles: [
  ]
})
export class ValidTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  RegValidation = new FormGroup({
    name: new FormControl("hamada", Validators.required) ,
    age: new FormControl(20,[Validators.min(20), Validators.max(40)])
  })

  get NameValid(){
    return this.RegValidation.controls.name.valid;
  }
  get AgeValid(){
    return this.RegValidation.controls.age.valid;
  }

  sendData(){
    console.log(this.RegValidation)
    if(this.RegValidation.valid){
      //push to db
    }
  }

}
