import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusArrivalService } from '../bus-arrival.service';
import { BusStopInfo } from '../bus-arrival-interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  busStopBookmark: BusStopInfo[];
  nearbyBusStops: BusStopInfo[];
  bSpinnerShowNearbyBusStops = false;

  constructor(
    private busArrivalService: BusArrivalService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.busStopBookmark = [];
    busArrivalService.busStopBookmark$.subscribe(data => {
      this.busStopBookmark = data;
    });
  }

  ngOnInit(): void {
    this.nearbyBusStops = [];
    this.bSpinnerShowNearbyBusStops = false;
  }

  submit(busStopCode: string) {
    this.nearbyBusStops = [];

    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.snackBar.open('Invalid Bus Stop Code.', 'warn', { duration: 2000 });
      return;
    }
    this.router.navigate(['/bus', busStopCode]);
  }

  getNearbyBusStops(coordinates: Coordinates) {
    this.busArrivalService.getNearbyBusStops(coordinates).subscribe(
      data => {
        for (const item of data) {
          this.nearbyBusStops.push(item.busStop);
        }
        this.bSpinnerShowNearbyBusStops = false;
      },
      err => {
        this.nearbyBusStops = [];
        this.bSpinnerShowNearbyBusStops = false;
        this.snackBar.open('No Nearby Bus Stop.', 'warn', {
          duration: 2000
        });
      }
    );
  }

  toggleNearbyBusStops() {
    if (this.nearbyBusStops.length) {
      return (this.nearbyBusStops = []);
    }
    this.bSpinnerShowNearbyBusStops = true;
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        if (pos && pos.coords) {
          this.getNearbyBusStops(pos.coords);
        } else {
          this.bSpinnerShowNearbyBusStops = false;
          this.snackBar.open('Cannot get coordinate of your device.', 'warn', {
            duration: 2000
          });
        }
      });
    } else {
      this.bSpinnerShowNearbyBusStops = false;
      this.snackBar.open('Please enable the location access.', 'warn', {
        duration: 2000
      });
    }
  }

  deleteBusStopBookmark(busStop: BusStopInfo) {
    this.busArrivalService.deleteBusStopBookmark(busStop);
  }
}
