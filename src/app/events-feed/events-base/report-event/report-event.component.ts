import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsHandlerService } from '../../services/events-handler.service';
import { UserGeneralInfoService } from '../../services/user-general-info.service';
import { UserGeneralInfoResponse } from '../../models/user-general-info-response.model';

@Component({
  selector: 'app-report-event',
  templateUrl: './report-event.component.html',
  styleUrls: ['./report-event.component.scss']
})
export class ReportEventComponent implements OnInit {

  @ViewChild('f', { static: false }) reportForm;

  categories = [
    { value: 'spam', viewValue: 'Spam' },
    { value: 'inappropriate', viewValue: 'inappropriate' }
  ];

  eventId: number;
  image: string;
  show: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ehService: EventsHandlerService,
    private userGeneralInfoService: UserGeneralInfoService) { }

  ngOnInit() {
    this.eventId = +this.route.snapshot.params['id'];
    this.userGeneralInfoService.getGeneralInfo().subscribe(
      (data: UserGeneralInfoResponse) => {
        this.image = data.image;
        this.show = true;
      }
    );
  }

  onReport() {
    this.ehService.reportEvent({
      username: localStorage.getItem("username"),
      eventId: this.eventId,
      reason: this.reportForm.value.reason
    })
      .subscribe(
        () => {
          this.router.navigate(['feed']);
        }
      );
  }
}
