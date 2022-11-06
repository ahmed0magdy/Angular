import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styles: [
  ]
})
export class StudentItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() oneStudent:any;

}
