import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styles: [
  ]
})
export class StudentItemComponent implements OnInit {

  constructor(private myservice:StudentsService) { }

  ngOnInit(): void {
  }

  @Input() oneStudent:any;
  destu:any;
deleteStudent(id:number){
this.destu = this.myservice.deleteStudent(id).subscribe();
}
}
