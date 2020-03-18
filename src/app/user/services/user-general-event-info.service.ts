import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGeneralEventInfoService {

  constructor(private http: HttpClient) { }

  getNumberOfEventsToday(username: string) {
    return this.http.get('http://localhost:1010/today?username=' + username,
      { headers: this.getHeadersUrlUpload() })
  }

  private getHeadersUrlUpload() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }
}
