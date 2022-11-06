import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-studentss',
  templateUrl: './studentss.component.html',
  styles: [
  ]
})
export class StudentssComponent implements OnInit, OnChanges {

  constructor() { }

//lifecycle of component
//ngonchanges feels any change on decorator input
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // if(this.studentFromParent.name){
    //   this.students.push(this.studentFromParent);
    // }//first sol
    // if(!changes['studentFromParent'].firstChange){
    //   this.students.push(this.studentFromParent);
    // }//second sol
    if(changes['studentFromParent'].currentValue.name){
      this.students.push(this.studentFromParent);
    }

  }

  ngOnInit(): void {
  }

  // @Input() studentsFromParent:{name:string, age:number}[] = [];
  @Input() studentFromParent:any;
  students: { name: string, age: number}[] = [];
  //this is the problem when to push so we need ngOnchange
// this.students.push(studentFromParent);
}
