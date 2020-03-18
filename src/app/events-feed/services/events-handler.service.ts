import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventSaveRequest } from '../models/event-save-request.model';
import { EventsNearmeRequest } from '../models/events-nearme-request.model';
import { EventJoin } from '../models/event-join.model';
import { Observable } from 'rxjs';
import { Event } from '../models/event-details.model';
import { EventReport } from '../models/event-report.model';

@Injectable({
  providedIn: 'root'
})
export class EventsHandlerService {

  constructor(private http: HttpClient) { }

  joinEvent(eventJoin: EventJoin) {
    return this.http.post('http://localhost:1010/joinevent',
      eventJoin,
      { headers: this.getHeadersUrlUpload() })
  }

  saveEvent(event: EventSaveRequest) {
    return this.http.post('http://localhost:1010/saveevent',
      event,
      { headers: this.getHeadersUrlUpload() });
  }

  getEvent(eventsNearmeRequest: EventsNearmeRequest): Observable<Event[]> {
    return this.http.post<Event[]>('http://localhost:1010/nearme',
      eventsNearmeRequest,
      { headers: this.getHeadersUrlUpload() });
  }

  getTopEvents(eventTopRequest: { city: string, username: string }): Observable<Event> {
    return this.http.post<Event>('http://localhost:1010/topevents',
      eventTopRequest,
      { headers: this.getHeadersUrlUpload() });
  }

  reportEvent(reportEventRequest: EventReport) {
    return this.http.post('http://localhost:1010/reportevent',
      reportEventRequest,
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
