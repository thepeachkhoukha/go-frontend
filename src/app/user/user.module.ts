import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserGeneralInfoComponent } from './user-profile/user-general-info/user-general-info.component';
import { UserEventsComponent } from './user-profile/user-events/user-events.component';
import { UserActivitiesComponent } from './user-profile/user-activities/user-activities.component';
import { AngularMaterial } from '../angular-material.module';
import { EventsFeedModule } from '../events-feed/events-feed.module';
import { NewEventComponent } from '../events-feed/events-base/new-event/new-event.component';
import { UserEditComponent } from './user-profile/user-edit/user-edit.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing-module';


@NgModule({
  declarations: [
    UserProfileComponent, 
    UserGeneralInfoComponent, 
    UserEventsComponent,
    UserActivitiesComponent,
    UserEditComponent
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
