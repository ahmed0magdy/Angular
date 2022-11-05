import { Component } from "@angular/core";

@Component ({
  selector: 'app-first',
  templateUrl:'./first.component.html'
})

export class FirstComponent{
  name = "menna";
  beauty = "https://images.unsplash.com/photo-1667558023897-caa002219b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
  chngName(){
    this.name='salwa';
    this.beauty="https://images.unsplash.com/photo-1666932520929-c4f447b98224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  }
  fname="";
  lname="";

  getdata(e:any){
    // console.log(e.target.value);
    this.fname = e.target.value;
  }

  reset(){
    this.name = "";
    this.fname = "";
    this.lname = "";
  }
}
