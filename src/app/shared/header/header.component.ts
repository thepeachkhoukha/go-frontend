import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() image: string;
  profilePicture = null
  constructor(private router: Router) { }

  ngOnInit(){
    this.profilePicture = atob(this.image);
  }

  onProfileClick(){
    this.router.navigate(['profile']);
  }

  onFeedClick(){
    this.router.navigate(['feed']);
  }

  logOut(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.router.navigate(['']);
  }
}
