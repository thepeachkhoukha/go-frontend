import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsBaseComponent } from './events-base/events-base.component';
import { EventsListComponent } from './events-base/events-list/events-list.component';
import { EventDetailsComponent } from './events-base/event-details/event-details.component';
import { AngularMaterial } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopEventsComponent } from './events-base/events-list/top-events/top-events.component';
import { NewEventComponent } from './events-base/new-event/new-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../security/guards/Auth.guard';
import { EventsRoutingModule } from './event-feed-routing-module';
import { ReportEventComponent } from './events-base/report-event/report-event.component';
import { SingleEventComponent } from './events-base/events-list/single-event/single-event.component';


@NgModule({
  declarations: [
    EventsBaseComponent,
    EventsListComponent,
    EventDetailsComponent,
    SingleEventComponent,
    TopEventsComponent,
    NewEventComponent,
    ReportEventComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    AngularMaterial,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    EventsBaseComponent,
    SingleEventComponent,
    NewEventComponent
  ],
  entryComponents:[
    EventDetailsComponent,
    NewEventComponent
  ],
  providers:[AuthGuard]
})
export class EventsFeedModule { }
