import { Injectable } from '@angular/core';
import { Credentials } from '../model/credentials.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  logIn(credentials: Credentials){
    return this.http.post('http://localhost:1010/authenticate',
                          {username: credentials.username, password: credentials.password},
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
