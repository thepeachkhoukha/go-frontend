import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDetails, UserInfo } from '../models/user-general-info.model';
import { Event } from 'src/app/events-feed/models/event-details.model';
import { UserGeneralEventInfoService } from '../services/user-general-event-info.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username: string;
  user: UserDetails;
  events: Event[];
  myEvents: Event[];
  numberOfTodaysEvent: number = null;
  constructor(private userService: UserService,
    private userGeneralEventInfo: UserGeneralEventInfoService) { }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.userService.getUserInfo({
      username: this.username,
      token: localStorage.getItem("token")
    })
      .subscribe((data: UserInfo) => {
        this.user = data.userDetails;
        this.events = data.events;
        this.myEvents = data.myEvents;
      })
    this.userGeneralEventInfo.getNumberOfEventsToday(this.username).subscribe(
      (data: number) =>{
        this.numberOfTodaysEvent = data;
      }
    )
  }
}