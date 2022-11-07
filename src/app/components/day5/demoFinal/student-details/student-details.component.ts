import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  stID: number = 0;
  student: any;
  constructor(private myactivated: ActivatedRoute, private myservice: StudentsService) {
    // console.log(myactivated)
    this.stID = this.myactivated.snapshot.params['id'];
    // console.log(this.stID)
  }
  ngOnInit(): void {
    let that = this;
    this.myservice.getStudentByID(this.stID).subscribe({
      next(data) {
        that.student = data;
      },
       error(err) { console.log(err) }

    }
    )
  }

}
