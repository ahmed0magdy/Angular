import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styles: [
  ]
})
export class AddstudentComponent implements OnInit {

  constructor(private myservice: StudentsService, private router: Router) { }

  ngOnInit(): void {
  }

  // addValidator = new FormGroup({
  //   name: new FormControl("",[Validators.required, Validators.min(3)]),
  //   age: new FormControl([Validators.required]),
  //   email: new FormControl([Validators.required])
  // })
  // get NValid() {
  //   return this.addValidator.controls.name.valid;
  // }

  addStu(name: string, age: number, email: string) {
    // console.log(n,a,e)
    let user = { name, age, email };
    if (user.name != "" && user.age != 0 && user.email != "") {
      this.myservice.addStudent(user).subscribe();
      this.router.navigate(['/']);
    }

  }

}
