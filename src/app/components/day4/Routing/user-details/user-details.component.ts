import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
//to get id in the path use activated route
userId = 0;
  constructor(myactiveRoute:ActivatedRoute) { 
    // console.log(myactiveRoute.snapshot.params['id']);
    this.userId = myactiveRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
