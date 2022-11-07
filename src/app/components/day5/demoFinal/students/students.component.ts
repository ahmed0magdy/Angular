import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit, OnDestroy {

  constructor(private myService: StudentsService) { }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.stuSub.unsubscribe();
  }
  students: any;
  stuSub:any;
  ngOnInit(): void { //fetch url
    let that = this;
    this.stuSub = this.myService.getAllStudents().subscribe(
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
