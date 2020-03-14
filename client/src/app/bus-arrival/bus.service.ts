import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { BusArrival, BusStop, NearByBusStop } from './bus-arrival';

const BusBookmarksCookieName = 'InSgBusStopBookmark';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private busStopBookmarkSubject = new BehaviorSubject<BusStop[]>([]);
  busStopBookmark$ = this.busStopBookmarkSubject.asObservable();
  busStopBookmark: BusStop[];

  constructor(private cookie: CookieService, private http: HttpClient) {
    this.busStopBookmark$.subscribe(data => {
      this.busStopBookmark = data;
    });
    this.getBusStopBookmarkCookie();
  }

  getBusStopBookmarkCookie() {
    let cookie = this.cookie.get(BusBookmarksCookieName);
    if (cookie) {
      this.busStopBookmarkSubject.next(JSON.parse(cookie));
    }
  }

  getBusStop(busStopCode: string) {
    return this.http.get<BusStop>(`/api/lta/bus/busStop/${busStopCode}`);
  }

  getBusArrival(busStopCode: string): Observable<BusArrival> {
    return this.http.get<BusArrival>(`/api/lta/bus/busArrival/${busStopCode}`);
  }

  addBusStopBookmark(busStop: BusStop) {
    if (this.existingBusStopBookmark(busStop)) {
      return;
    }
    this.busStopBookmark.push(busStop);
    this.busStopBookmarkSubject.next(this.busStopBookmark);
    this.cookie.set(
      BusBookmarksCookieName,
      JSON.stringify(this.busStopBookmark),
      365 * 10,
      '/'
    );
  }

  deleteBusStopBookmark(busStop: BusStop) {
    for (let i = 0; i < this.busStopBookmark.length; i++) {
      if (this.busStopBookmark[i].BusStopCode === busStop.BusStopCode) {
        this.busStopBookmark.splice(i, 1);
        break;
      }
    }
    this.busStopBookmarkSubject.next(this.busStopBookmark);
    this.cookie.set(
      BusBookmarksCookieName,
      JSON.stringify(this.busStopBookmark),
      365 * 10,
      '/'
    );
  }

  existingBusStopBookmark(busStop: BusStop) {
    for (let i = 0; i < this.busStopBookmark.length; i++) {
      if (busStop.BusStopCode === this.busStopBookmark[i].BusStopCode) {
        return true;
      }
    }
    return false;
  }

  getNearbyBusStops(coordinate: Coordinates) {
    return this.http.get<NearByBusStop[]>(
      '/api/lta/bus/nearbyBusStops?' +
        `latitude=${coordinate.latitude}` +
        `&longitude=${coordinate.longitude}`
    );
  }
}
