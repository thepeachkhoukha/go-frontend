import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { LogInService } from '../services/log-in.service';
import { Token } from '../model/token.model';
import { AuthService } from '../services/auth.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{

  hide: boolean = true;

  usernameFormControl: FormControl;

  passwordFormControl: FormControl;

  matcher = new MyErrorStateMatcher();

  constructor(private logInService: LogInService, 
              private authService: AuthService,
              private router: Router){}

  ngOnInit(){
    this.usernameFormControl = new FormControl('', [
      Validators.required
    ]);
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    if(localStorage.getItem('isLoggedIn')==="true"){
      this.router.navigate(['feed']);
    }
    else{
      this.authService.logout();  
    }  
  }
  onLogIn(){
    this.logInService.logIn({username: this.usernameFormControl.value, password:this.passwordFormControl.value})
                     .subscribe((result:Token)=>{
                          localStorage.setItem('isLoggedIn', "true");
                          localStorage.setItem('token', result.jwt);
                          localStorage.setItem('username', this.usernameFormControl.value);
                          this.router.navigate(['feed']);
                      });
  }
  onSignUp(){
    this.router.navigate(['signup']);
  }
}