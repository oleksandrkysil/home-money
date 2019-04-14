import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../../../shared/core/base-api';
import { BOOKKEEPEREvent } from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  addEvent(event: BOOKKEEPEREvent): Observable<BOOKKEEPEREvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<BOOKKEEPEREvent[]> {
    return this.get('events');
  }

  getEventById(id: string): Observable<BOOKKEEPEREvent> {
    return this.get(`events/${id}`);
  }
}
