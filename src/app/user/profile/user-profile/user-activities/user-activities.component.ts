import { Component, OnInit, Input } from '@angular/core';
import { UserCircle } from '../../../models/user-circle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.scss']
})
export class UserActivitiesComponent {

  @Input() numberOfTodaysEvent: number;
  @Input() circle: UserCircle[];
  @Input() allCircle: UserCircle[];
  constructor(private router: Router) { }

  onFriendClick(username: string){
    this.router.navigate(['profile', username]);
  }
}
