import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { LunchRecord, LunchPal, LunchStats } from './lunchfun-interfaces';
import { httpOptions } from '../core/http-interface';

@Injectable({
  providedIn: 'root'
})
export class LunchfunService {
  private refreshSubject = new Subject<boolean>();
  refresh$ = this.refreshSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  startRefresh() {
    this.refreshSubject.next(true);
  }

  getPals(): Observable<LunchPal[]> {
    return this.httpClient.get<LunchPal[]>('/api/lunchfun/pals');
  }

  getStats(): Observable<LunchStats[]> {
    return this.httpClient.get<LunchStats[]>('/api/lunchfun/stats/attendance');
  }

  addRecord(params): Observable<any> {
    return this.httpClient.post('/api/lunchfun/record', params, httpOptions);
  }

  getRecords(): Observable<LunchRecord[]> {
    return this.httpClient.get<LunchRecord[]>(`/api/lunchfun/records`);
  }

  deleteRecord(lunchRecord: LunchRecord): Observable<any> {
    const params = new HttpParams().set('_id', lunchRecord._id);
    return this.httpClient.delete('/api/lunchfun/record', {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: params
    });
  }
}
