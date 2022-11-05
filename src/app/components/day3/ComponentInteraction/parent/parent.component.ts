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

  ParentData = "ana data mn parent";

  dataFromReg :string= "";

  getData(data:any){
    // console.log(data);
    this.dataFromReg = data;
  }
}
