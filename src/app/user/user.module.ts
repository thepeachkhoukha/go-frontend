import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserGeneralInfoComponent } from './profile/shared/user-general-info/user-general-info.component';

import { AngularMaterial } from '../angular-material.module';
import { EventsFeedModule } from '../events-feed/events-feed.module';
import { NewEventComponent } from '../events-feed/events-base/new-event/new-event.component';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing-module';
import { FriendProfileComponent } from './profile/friend-profile/friend-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { UserEventsComponent } from './profile/shared/user-events/user-events.component';
import { UserActivitiesComponent } from './profile/user-profile/user-activities/user-activities.component';
import { UserEditComponent } from './profile/shared/user-general-info/user-edit/user-edit.component';


@NgModule({
  declarations: [
    UserProfileComponent, 
    UserGeneralInfoComponent, 
    UserEventsComponent,
    UserActivitiesComponent,
    UserEditComponent,
    FriendProfileComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterial,
    UserRoutingModule,
    EventsFeedModule,
    SharedModule
  ],
  exports:[
    UserProfileComponent
  ],
  entryComponents: [
    NewEventComponent,
    UserEditComponent
  ]
})
export class UserModule { }
