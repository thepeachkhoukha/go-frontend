import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventsBaseComponent } from './events-base/events-base.component';
import { AuthGuard } from '../security/guards/Auth.guard';
import { ReportEventComponent } from './events-base/report-event/report-event.component';

const routes: Routes = [
    {path:'feed', component: EventsBaseComponent, canActivate: [AuthGuard]},
    {path: 'report/:id', component: ReportEventComponent, canActivate: [AuthGuard]}
];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule{}