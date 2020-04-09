import { Component, ViewChild, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';
import { Token } from '../model/token.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  fileData: File = null;
  previewUrl: any = null;
  base64textString:any;

  interests:string[] = []

  @ViewChild('f',{static: false}) signUpForm;
  lat: number;
  lng: number;
  
  constructor(private signUpService: SignUpService, 
              private authService: AuthService,
              private router: Router){}

  ngOnInit(){
    if(localStorage.getItem('isLoggedIn')==="true"){
      this.router.navigate(['feed']);
    }
    else{
      this.authService.logout();  
      this.getLocation();
    }
  }
  
  onSignUp(){
    this.signUpService.signup({
      username: this.signUpForm.value.username,
      password: this.signUpForm.value.password,
      name: this.signUpForm.value.name,
      location: this.signUpForm.value.location,
      university: this.signUpForm.value.university,
      occupation: this.signUpForm.value.occupation,
      lat: this.lat,
      lng: this.lng,
      image: this.base64textString
    }).subscribe((result:Token)=>{
        localStorage.setItem('isLoggedIn', "true");
                          localStorage.setItem('token', result.jwt);
                          localStorage.setItem('username', this.signUpForm.value.username);
                          this.router.navigate(['feed']);
    });
  }

  onLogIn(){
    this.router.navigate(['login']);
  }

  fileProgress(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
    console.log(this.fileData);
    this.preview();
  }

  preview(){
    var mimeType = this.fileData.type;
    if(mimeType.match(/image\/*/)==null){
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.fileData);
  }
  
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           console.log(btoa(binaryString));
    this.previewUrl = atob(this.base64textString);
   }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
      if (position) {
        console.log("Latitude: " + position.coords.latitude +
                    "Longitude: " + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }
    },
      (error: PositionError) => console.log(error));
    } 
    else {
      this.lat = null;
      this.lng = null;
      console.log("this browser does not support geolocation");
    }
  }
}