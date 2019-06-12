import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { httpOptions } from '../core/http-interface';
import { BusArrivalReturn } from './bus-arrival-interface';

@Injectable({
  providedIn: 'root'
})
export class BusArrivalService {
  private busStopHistorySubject = new BehaviorSubject<string[]>([]);
  busStopHistory$ = this.busStopHistorySubject.asObservable();
  busStopHistory: string[];

  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) {
    this.busStopHistory$.subscribe(data => {
      this.busStopHistory = data;
    });
    this.getBusStopHistory();
  }

  getBusStopHistory() {
    let cookie = this.cookieService.get('busStopCode');
    if (cookie) {
      this.busStopHistorySubject.next(JSON.parse(cookie));
    }
  }

  getBusArrival(busStopCode: string): Observable<BusArrivalReturn> {
    return this.httpClient.get<BusArrivalReturn>(
      `/api/lta/bus/busArrival/${busStopCode}`
    );
  }

  bookmarkBusStop(busStopCode: string) {
    if (this.busStopHistory.includes(busStopCode)) {
      return;
    }
    this.busStopHistory.push(busStopCode);
    this.busStopHistorySubject.next(this.busStopHistory);
    this.cookieService.set(
      'busStopCode',
      JSON.stringify(this.busStopHistory),
      10 * 365 * 24 * 60 * 60,
      '/'
    );
  }

  deleteBusStopHistory(busStopCode: string) {
    let i = this.busStopHistory.indexOf(busStopCode);
    this.busStopHistory.splice(i, 1);
    this.busStopHistorySubject.next(this.busStopHistory);
    this.cookieService.set(
      'busStopCode',
      JSON.stringify(this.busStopHistory),
      10 * 365 * 24 * 60 * 60,
      '/'
    );
  }
}
