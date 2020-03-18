import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.scss']
})
export class UserActivitiesComponent implements OnInit {

  @Input() numberOfTodaysEvent: number;
  constructor() { }

  ngOnInit() {
  }

}
