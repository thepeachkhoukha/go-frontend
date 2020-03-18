import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfoRequest } from '../models/user-info-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo(userInfoRequest: UserInfoRequest){
    return this.http.post('http://localhost:1010/getuser', 
                     userInfoRequest,
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
