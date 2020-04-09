import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../security/guards/Auth.guard';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendProfileComponent } from './profile/friend-profile/friend-profile.component';


const routes: Routes = [
    {path:'profile', component: ProfileComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: UserProfileComponent},
            {path: ':username', component: FriendProfileComponent}
        ]
    }
];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}