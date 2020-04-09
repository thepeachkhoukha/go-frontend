import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserInfo } from '../../models/user-general-info.model';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.scss']
})
export class FriendProfileComponent implements OnInit {

  username: string;
  userInfo: UserInfo
  friends: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.username = this.activatedRoute.snapshot.params['username'];

    this.userService.getUserInfo({username: this.username, token: localStorage.getItem("token")})
                    .subscribe(
                      (data: UserInfo) => {
                        this.userInfo = data;
                      }
                    );

    this.userService.checkFriendship(localStorage.getItem('username'), this.username)
                    .subscribe(
                      (data: boolean) => {
                        this.friends = data;
                      }
                    );
  }

  onFollow(){
    this.friends = true;
    this.userService.addFriend(this.username).subscribe();
  }

  onUnfollow(){
    this.friends = true;
    this.userService.deleteFriend(this.username).subscribe();
  }
}
