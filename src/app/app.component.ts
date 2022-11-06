import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'demo';

  // students:{name:string, age:number}[] = [];
  student:{}={}

  GetData(data:{}){
    // this.students.push(data);
    // console.log(this.students);
    this.student=data;
  }
}
