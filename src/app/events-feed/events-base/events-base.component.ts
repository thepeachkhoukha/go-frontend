import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEventComponent } from './new-event/new-event.component';
import { EventsHandlerService } from '../services/events-handler.service';
import { UserGeneralInfoService } from '../services/user-general-info.service';
import { EventSaveRequest } from '../models/event-save-request.model';
import { EventsNearmeRequest } from '../models/events-nearme-request.model';
import { UserGeneralInfoResponse } from '../models/user-general-info-response.model';

@Component({
  selector: 'app-events-base',
  templateUrl: './events-base.component.html',
  styleUrls: ['./events-base.component.scss']
})
export class EventsBaseComponent implements OnInit {

  userGeneralInfo: EventsNearmeRequest = null;
  eventTopRequest: {city: string, username: string} = null;
  image: string = null;
  showFeed:boolean =false;
  constructor(public dialog: MatDialog,  
              private eventsHandler: EventsHandlerService, 
              private userGeneralInfoService: UserGeneralInfoService) { }

  ngOnInit() {
    this.userGeneralInfoService.getGeneralInfo().subscribe(
      (data: UserGeneralInfoResponse)=>{
          this.userGeneralInfo = {username: localStorage.getItem("username"), city: data.city, lat: data.lat, lng: data.lng, diameter:1000};
          this.eventTopRequest = {city: data.city, username: localStorage.getItem("username")};
          this.image = data.image;
          this.showFeed = true;
      }
    )
  }

  onCreateEvent(): void {
    const dialogRef = this.dialog.open(NewEventComponent, {
      width: '850px'
    });

    dialogRef.afterClosed().subscribe(result => {
      let eventSaveRequest: EventSaveRequest = {
                            ownerUsername:result.generalInfo.ownerUsername,
                            title: result.generalInfo.title,
                            description: result.generalInfo.description,
                            shortDescription: result.generalInfo.shortDescription,
                            date: result.specificInfo.date,
                            startTime: result.specificInfo.startTime,
                            endTime: result.specificInfo.endTime,
                            threshold: result.specificInfo.threshold,
                            maximum: result.specificInfo.expectedNumber,
                            coverImage: result.image,
                            location: result.specificInfo.location,
                            city: result.specificInfo.city
                          };
      this.eventsHandler.saveEvent(eventSaveRequest).subscribe();
    });
  }
}
