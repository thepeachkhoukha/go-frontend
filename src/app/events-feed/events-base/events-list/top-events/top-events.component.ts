import { Component, Input } from '@angular/core';
import { Event } from '../../../models/event-details.model';


@Component({
  selector: 'app-top-events',
  templateUrl: './top-events.component.html',
  styleUrls: ['./top-events.component.scss']
})
export class TopEventsComponent {
  @Input() topEvent: Event;

  constructor() {
  }
}