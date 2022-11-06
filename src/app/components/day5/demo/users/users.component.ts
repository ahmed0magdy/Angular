import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private myservice: DemoService) { }
  users :any;
  ngOnInit(): void {//fetching API
    // this.myservice.getAllUsers() //return observable --> subscribe
    this.myservice.getAllUsers().subscribe(
      (data) => {
      //console.log(data)
      this.users = data;
    },
      (err) => { console.log(err) })
  }

}
