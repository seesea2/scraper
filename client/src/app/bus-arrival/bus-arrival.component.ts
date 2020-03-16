import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusService } from './bus.service';
import { BusStop, NearByBusStop } from './bus-arrival';

@Component({
  selector: 'bus-arrival',
  templateUrl: './bus-arrival.component.html',
  styleUrls: ['./bus-arrival.component.css']
})
export class BusArrivalComponent implements OnInit {
  busStopBookmark: BusStop[];
  nearbyBusStops: NearByBusStop[];
  spinnerNearbyBusStops = false;

  constructor(
    private busSvc: BusService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.busStopBookmark = [];
    busSvc.busStopBookmark$.subscribe(data => {
      this.busStopBookmark = data;
    });
  }

  ngOnInit(): void {
    this.nearbyBusStops = [];
    this.spinnerNearbyBusStops = false;
  }

  deleteBusStopBookmark(busStop: BusStop) {
    this.busSvc.deleteBusStopBookmark(busStop);
  }

  submit(busStopCode: string) {
    this.nearbyBusStops = [];

    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.snackBar.open('Invalid Bus Stop Code.', 'warn', { duration: 2000 });
      return;
    }
    this.router.navigate(['/bus-arrival', busStopCode]);
  }

  toggleNearbyBusStops() {
    if (this.nearbyBusStops.length) {
      return (this.nearbyBusStops = []);
    }

    this.spinnerNearbyBusStops = true;
    if (navigator && navigator.geolocation) {
      function geoError(error) {
        let text = '';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            text = 'Request for Geolocation is denied.';
            break;
          case error.POSITION_UNAVAILABLE:
            text = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            text = 'Request to get location timed out.';
            break;
          case error.UNKNOWN_ERROR:
            text = 'An unknown error occurred.';
            break;
        }
        this.snackBar.open(text, 'warn', {
          duration: 2000
        });
      }
      function geoSuccess(pos) {
        if (pos && pos.coords) {
          this.getNearbyBusStops(pos.coords);
        } else {
          this.spinnerNearbyBusStops = false;
          this.snackBar.open('Get current location failed.f', 'warn', {
            duration: 2000
          });
        }
      }
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
      this.spinnerNearbyBusStops = false;
      this.snackBar.open('Please enable the location access.', 'warn', {
        duration: 3000
      });
    }
  }

  getNearbyBusStops(coordinates: Coordinates) {
    this.busSvc.getNearbyBusStops(coordinates).subscribe(
      data => {
        for (let i = 0; i < data.length; ++i) {
          this.nearbyBusStops.push(data[i]);
        }
        this.spinnerNearbyBusStops = false;
      },
      err => {
        this.nearbyBusStops = [];
        this.spinnerNearbyBusStops = false;
        this.snackBar.open('No Nearby Bus Stop.', 'warn', {
          duration: 2000
        });
      }
    );
  }
}
