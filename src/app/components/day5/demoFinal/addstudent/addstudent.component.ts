import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styles: [
  ]
})
export class AddstudentComponent implements OnInit {

  constructor(private myservice:StudentsService) { }

  ngOnInit(): void {
  }

  addValidator = new FormGroup({
    name:new FormControl([Validators.required,Validators.min(3)]),
    age:new FormControl([Validators.required]),
    email:new FormControl([Validators.required])
  })
  get NValid(){
    return this.addValidator.controls.name.valid;
  }

  addStu(n:string, a:number, e:string){
    // console.log(n,a,e)
    this.myservice.addStudent({name:n, age:a, email:e}).subscribe()
  }
}
