import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styles: [
  ]
})
export class AllInOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  stname:string = "";
  stAge:number = 0;
  AllStudents:{name:String, age:number}[] = [];

  addNewStudent()
  {
    let NewStudent:{name:String, age:number} = {name:this.stname, age:this.stAge};
    // console.log(NewStudent);
    if(this.stAge <= 30 && this.stAge != 0 )
      this.AllStudents.push(NewStudent);
    // console.log(this.AllStudents);

  }

}
