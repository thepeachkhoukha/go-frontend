import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDetails, UserInfo } from '../../models/user-general-info.model';
import { Event } from 'src/app/events-feed/models/event-details.model';
import { UserGeneralEventInfoService } from '../../services/user-general-event-info.service';
import { UserCircle } from '../../models/user-circle.model';

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
  userCircle: UserCircle[];
  allUserCircle: UserCircle[];
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
    this.userService.getUserCircle({
      username: this.username,
      token: localStorage.getItem("token")
    }).subscribe(
      (data: UserCircle[]) => {
        this.userCircle = [];
        this.allUserCircle = [];
        let counter = 0;
        while(counter < data.length && counter <3){
          this.userCircle.push({id: data[counter].id, 
            image: atob(data[counter].image),
            username: data[counter].username                  
          });
          counter++;
        }
        data.forEach(friend => {
          this.allUserCircle.push({id: friend.id, image: atob(friend.image), username: friend.username});
        });
      }
    )
  }
}