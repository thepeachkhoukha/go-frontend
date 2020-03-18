import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewEventComponent } from 'src/app/events-feed/events-base/new-event/new-event.component';
import { Event } from 'src/app/events-feed/models/event-details.model';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent {
  @Input() events:Event[];
  @Input() myEvents: Event[];

  constructor(public dialog: MatDialog) { }

  onCreateEvent(): void {
    const dialogRef = this.dialog.open(NewEventComponent, {
      width: '850px'
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    });
  }

}
