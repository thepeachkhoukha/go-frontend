import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/event-details.model';
import { EventsHandlerService } from '../../services/events-handler.service';
import { EventsNearmeRequest } from '../../models/events-nearme-request.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @Input() userGeneralInfo: EventsNearmeRequest;

  categories: any[] = [
    { value: 'education-0', viewValue: 'Education' },
    { value: 'teen-1', viewValue: 'Teen' },
    { value: 'network-2', viewValue: 'Network' }
  ];

  events: Event[];
  topEvent: Event;
  show: boolean = false;

  constructor(private eventHandler: EventsHandlerService) { }

  ngOnInit() {
    console.log(this.userGeneralInfo);
    this.eventHandler.getEvent(this.userGeneralInfo).subscribe(
      (data: Event[]) => {
        this.events = data;
      }
    )
    this.eventHandler.getTopEvents({ city: this.userGeneralInfo.city, username: localStorage.getItem("username") }).subscribe(
      (data: Event) => {
        this.topEvent = data;
        console.log(this.topEvent);
        this.show = true;
      }
    )
  }
}
