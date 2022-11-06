import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {

  constructor(private myService: StudentsService) { }
  students: any

  ngOnInit(): void { //fetch url
    let that = this;
    this.myService.getAllStudents().subscribe(
      {
        next(data) {
          that.students = data;
        },
        error(err) {
          console.log(err)
        }

      }
    )
  }

}
