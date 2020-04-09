import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfoRequest } from '../models/user-info-request.model';
import { UserGeneralInfoResponse } from 'src/app/shared/model/user-general-info-response.model';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-general-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo(userInfoRequest: UserInfoRequest){
    return this.http.post<UserInfo>('http://localhost:1010/user', 
                    userInfoRequest,
                    {headers: this.getHeadersUrlUpload()});
  }

  getGeneralInfo(): Observable<UserGeneralInfoResponse>{
    return this.http.post<UserGeneralInfoResponse>('http://localhost:1010/usergeneralinfo', 
                      {username: localStorage.getItem('username'), token: localStorage.getItem('token')},
                      { headers: this.getHeadersUrlUpload() });
  }

  checkFriendship(username: string, friendname: string): Observable<boolean>{
    return this.http.get<boolean>('http://localhost:1010/friend?username='+username+"&friendname="+friendname
                                  +"&token="+localStorage.getItem('token'),
                                  { headers: this.getHeadersUrlUpload() });
  }

  addFriend(friendname: string): Observable<string>{
    return this.http.post<string>('http://localhost:1010/addfriend', 
                      {username: localStorage.getItem('username'), friendname: friendname ,token: localStorage.getItem('token')},
                      { headers: this.getHeadersUrlUpload() });
  }

  deleteFriend(friendname: string): Observable<string>{
    return this.http.delete<string>('http://localhost:1010/deletefriend?username='+localStorage.getItem('username')
                                    +"&friendname="+friendname+"&token="+localStorage.getItem('token'), 
                      { headers: this.getHeadersUrlUpload() });
  }   

  getUserCircle(userInfoRequest: UserInfoRequest){
    return this.http.post('http://localhost:1010/usercircle',
                    userInfoRequest,
                    {headers: this.getHeadersUrlUpload()}
                );
  }

  private getHeadersUrlUpload(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }); 
    return headers;
  }
}
