import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserGeneralInfoResponse } from 'src/app/shared/model/user-general-info-response.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserGeneralInfoResponse;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getGeneralInfo().subscribe(
      (user: UserGeneralInfoResponse) => {
        this.user = user;
      }
    )
  }

}
