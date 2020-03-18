import { Input, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';
import { EventsHandlerService } from 'src/app/events-feed/services/events-handler.service';
import { Event } from 'src/app/events-feed/models/event-details.model';
import { EventDetailsComponent } from '../../event-details/event-details.component';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent implements OnInit{

  @Input() event: Event;

  previewUrl: any = null;
  constructor(public dialog: MatDialog, 
              private eventsHandlerService: EventsHandlerService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(){
    this.previewUrl = atob(this.event.coverImage);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EventDetailsComponent, {
                                      width: '850px',
                                      data: this.event
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onJoin(){
    this.eventsHandlerService.joinEvent({eventId: this.event.id, username: localStorage.getItem("username")})
                             .subscribe(
                               () => {
                                  this._snackBar.open('joined', '', {
                                    duration: 2000,
                                  });
                               }
                             );
  }
}