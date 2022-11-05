import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

stDatafromParent:{name:string,age:number}[] = [];

  getdata(data:{name:string,age:number}){
    this.stDatafromParent.push(data);
    // console.log(this.stDatafromParent);
  }


}
