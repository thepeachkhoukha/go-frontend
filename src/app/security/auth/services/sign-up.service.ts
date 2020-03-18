import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpRequest } from '../model/SignUpRequest.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signup(signUpRequest: SignUpRequest){
    return this.http.post('http://localhost:1010/signup',
                          signUpRequest,
                          {headers: this.getHeadersUrlUpload()});
  }

  private getHeadersUrlUpload() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }); 
    return headers;
  }
}
