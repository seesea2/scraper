import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { httpOptions } from '../core/http-interface';
import { BusArrivalReturn, BusStopInfo } from './bus-arrival-interface';

@Injectable({
  providedIn: 'root'
})
export class BusArrivalService {
  private busStopBookmarkSubject = new BehaviorSubject<BusStopInfo[]>([]);
  busStopBookmark$ = this.busStopBookmarkSubject.asObservable();
  busStopBookmark: BusStopInfo[];

  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) {
    this.busStopBookmark$.subscribe(data => {
      this.busStopBookmark = data;
    });
    this.getCookieBusStopBookmark();
  }

  getCookieBusStopBookmark() {
    let cookie = this.cookieService.get('InSgBusStopBookmark');
    if (cookie) {
      this.busStopBookmarkSubject.next(JSON.parse(cookie));
    }
  }

  getBusStopInfo(busStopCode: string) {
    return this.httpClient.get<BusStopInfo>(
      `/api/lta/bus/busStop/${busStopCode}`
    );
  }

  getBusArrival(busStopCode: string): Observable<BusArrivalReturn> {
    return this.httpClient.get<BusArrivalReturn>(
      `/api/lta/bus/busArrival/${busStopCode}`
    );
  }

  addBusStopBookmark(busStopInfo: BusStopInfo) {
    if (this.existingBookmark(busStopInfo)) {
      return;
    }
    this.busStopBookmark.push(busStopInfo);
    this.busStopBookmarkSubject.next(this.busStopBookmark);
    this.cookieService.set(
      'InSgBusStopBookmark',
      JSON.stringify(this.busStopBookmark),
      365 * 10,
      '/'
    );
  }

  deleteBusStopBookmark(busStopInfo: BusStopInfo) {
    let i = 0;
    for (let i = 0; i < this.busStopBookmark.length; i++) {
      if (this.busStopBookmark[i].BusStopCode === busStopInfo.BusStopCode) {
        this.busStopBookmark.splice(i, 1);
        break;
      }
    }
    this.busStopBookmarkSubject.next(this.busStopBookmark);
    this.cookieService.set(
      'InSgBusStopBookmark',
      JSON.stringify(this.busStopBookmark),
      365 * 10,
      '/'
    );
  }

  existingBookmark(busStopInfo: BusStopInfo) {
    for (let i = 0; i < this.busStopBookmark.length; i++) {
      if (busStopInfo.BusStopCode === this.busStopBookmark[i].BusStopCode) {
        return true;
      }
    }
    return false;
  }

  getNearbyBusStops(coordinate: Coordinates) {
    return this.httpClient.get('/api/lta/bus/busStops');
  }
}
