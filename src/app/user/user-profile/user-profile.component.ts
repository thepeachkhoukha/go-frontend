import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDetails, UserInfo } from '../models/user-general-info.model';
import { Event } from 'src/app/events-feed/models/event-details.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: UserDetails;
  events: Event[];
  myEvents: Event[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo({username: localStorage.getItem("username"), 
                                  token: localStorage.getItem("token")})
                                  .subscribe((data: UserInfo) =>{
                                    this.user = data.userDetails;
                                    this.events = data.events;
                                    this.myEvents = data.myEvents;
                                })
  }
}