import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../security/guards/Auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
    {path:'profile', component: UserProfileComponent, canActivate: [AuthGuard]}
];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}