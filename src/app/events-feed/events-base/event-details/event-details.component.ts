import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Event } from '../../models/event-details.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

  previewUrl: any = null;

  constructor(private dialogRef: MatDialogRef<EventDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public event: Event,
    private router: Router) {
      this.previewUrl = atob(event.coverImage);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onReportClick(): void {
    this.dialogRef.close();
    this.router.navigate(['report', this.event.id]);
  }
}
