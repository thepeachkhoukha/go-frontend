import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserGeneralInfoResponse } from '../models/user-general-info-response.model';

@Injectable({
    providedIn: 'root'
})
export class UserGeneralInfoService{
    
    constructor(private http: HttpClient) { }

    getGeneralInfo(): Observable<UserGeneralInfoResponse>{
        return this.http.post<UserGeneralInfoResponse>('http://localhost:1010/getusergeneralinfo', 
                          {username: localStorage.getItem('username'), token: localStorage.getItem('token')},
                          { headers: this.getHeadersUrlUpload() });
    }

    private getHeadersUrlUpload() {
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }); 
        return headers;
    }
}