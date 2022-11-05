import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr:string[]=[
    "https://shorturl.at/jpQT8",
    "https://shorturl.at/jEQS9",
    "https://shorturl.at/dW034",
    "https://shorturl.at/jAIMS",
    "https://shorturl.at/afju7",
    "https://shorturl.at/bDIMV",
    "https://shorturl.at/hosW7"
  ]

  index:number = 0;
  src:string = this.arr[this.index];
  next(){
    if(this.index < (this.arr.length-1))
    {
      this.index++;
      this.src = this.arr[this.index];
      // console.log(this.index);
    }
  }

  previous()
  {
    if(this.index > 0)
    {
      this.index--;
      this.src = this.arr[this.index];
      // console.log(this.index);
    }

  }
  intervalId:any;
  slide(sec:number)
  {
    this.intervalId = setInterval(()=>{
      if(this.index == (this.arr.length-1))
      {
        this.index = -1;
      }
      this.next();
    },sec)

  }

  stop()
  {
    clearInterval(this.intervalId);
  }


  // array:any = ["1.jpg","2.jpg","3.jpg","4.jpg"]
  // src = "assets/images/1.jpg"
  // index = 0;

  //   next(){
  //     if(this.index != (this.array.length -1)){
  //       this.src="assets/images/";
  //       this.index++;
  //       this.src  += this.array[this.index];
  //     }

  //   }
  //   previous(){
  //     if(this.index !=0){
  //       this.src = "assets/images/";
  //       this.index--;
  //       this.src  += this.array[this.index];
  //     }
  //   }
  //   slide(){

  //       this.index = 0;
  //       this.src = "assets/images/";
  //       this.src  += this.array[this.index];
  //       setInterval(()=>{
  //         if(this.index ==(this.array.length-1)){
  //           this.index = -1;
  //         }
  //         this.next();
  //       },500)

  //     }

  //   stop(){
  //     this.array = stop();
  //   }
}
