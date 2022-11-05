import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() students:{name:string,age:number}[] = []

}
