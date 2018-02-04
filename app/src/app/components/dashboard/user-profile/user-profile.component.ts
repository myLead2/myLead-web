import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./../../../../assets/sass/material-dashboard.scss']
})

export class UserProfileComponent implements OnInit {
  private enterprise={};

  constructor(private user: UserService) {
    this.enterprise = user.getUserLoggedIn();
    console.log(this.enterprise);
   }

  ngOnInit() {
  }

}
