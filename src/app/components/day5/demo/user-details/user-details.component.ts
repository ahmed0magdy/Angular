import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userID = 0;
  user:any;
  constructor(private myactivated: ActivatedRoute, private myservice: DemoService) {
    this.userID = myactivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    let that = this;
    this.myservice.getUserByID(this.userID).subscribe({
      next(data) { 
        // console.log(data);
        that.user = data },
      error(err) {console.log(err)}
    }
    )
  }

}
