import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusArrivalService } from '../bus-arrival.service';
import {
  BusStopInfo,
  BusTable,
  NextBusData,
  BusArrivalReturn
} from '../bus-arrival-interface';

@Component({
  selector: 'bus-arrival-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  busTable: BusTable[];
  busTableColumn: string[] = ['service', 'bus1', 'bus2', 'bus3', 'load'];
  busStopBookmark: BusStopInfo[];
  busStopInfo: BusStopInfo;
  bExistingBookmark: boolean;
  nearbyBusStops: BusStopInfo[];
  // bShowNearbyBusStops: boolean;
  bSpinnerShowNearbyBusStops = false;
  currentBusStopCode: string;

  constructor(
    private busArrivalService: BusArrivalService,
    private snackBar: MatSnackBar
  ) {
    this.busStopBookmark = [];
    busArrivalService.busStopBookmark$.subscribe(data => {
      this.busStopBookmark = data;
    });
  }

  ngOnInit() {
    this.busTable = [];
    this.nearbyBusStops = [];
    // this.bShowNearbyBusStops = false;
    this.busStopInfo = undefined;
    this.bExistingBookmark = false;
    this.bSpinnerShowNearbyBusStops = false;
    this.currentBusStopCode = '';
  }

  addBusStopBookmark() {
    this.bExistingBookmark = true;
    this.busArrivalService.addBusStopBookmark(this.busStopInfo);
  }

  deleteBusStopBookmark(busStop: BusStopInfo) {
    this.bExistingBookmark = false;
    this.busArrivalService.deleteBusStopBookmark(busStop);
  }

  getBusArrival(busStopCode: string) {
    this.busTable = [];
    this.bExistingBookmark = false;
    // this.bShowNearbyBusStops = false;
    this.nearbyBusStops = [];

    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.snackBar.open('Invalid Bus Stop Code.', 'warn', { duration: 2000 });
      return;
    }
    this.currentBusStopCode = busStopCode;
    this.busArrivalService.getBusArrival(busStopCode).subscribe(
      (data: BusArrivalReturn) => {
        if (data.busArrival.Services.length <= 0) {
          this.snackBar.open(
            'Bus service unavailable at the Bus Stop.',
            'warn',
            {
              duration: 2000
            }
          );
          return;
        }

        data.busArrival.Services.forEach(service => {
          let busRow: BusTable = {
            service: service.ServiceNo,
            bus1: calculateArrivalTime(service.NextBus),
            bus2: calculateArrivalTime(service.NextBus2),
            bus3: calculateArrivalTime(service.NextBus3),
            load: service.NextBus.Load
          };
          this.busTable.push(busRow);
        });

        this.busStopInfo = data.busStopInfo;
        this.bExistingBookmark = this.busArrivalService.existingBookmark(
          data.busStopInfo
        );
      },
      err => {
        this.snackBar.open(err, 'Error', { duration: 4000 });
      }
    );
  }

  getNearbyBusStops(coordinates: Coordinates) {
    this.busArrivalService.getNearbyBusStops(coordinates).subscribe(
      data => {
        this.nearbyBusStops = data;
        this.bSpinnerShowNearbyBusStops = false;
        // this.bShowNearbyBusStops = true;
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
      // this.bShowNearbyBusStops = !this.bShowNearbyBusStops;
      return (this.nearbyBusStops = []);
    }
    this.bSpinnerShowNearbyBusStops = true;
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        if (pos && pos.coords) {
          this.getNearbyBusStops(pos.coords);
        } else {
          this.bSpinnerShowNearbyBusStops = false;
        }
      });
    } else {
      this.bSpinnerShowNearbyBusStops = false;
      this.snackBar.open('Please enable the location access.', 'warn', {
        duration: 2000
      });
    }
  }
}

function calculateArrivalTime(bus: NextBusData) {
  if (!bus || !bus.EstimatedArrival) {
    return 'NA';
  }

  const date = new Date(bus.EstimatedArrival);
  const diffMinutes = (date.valueOf() - Date.now()) / 1000 / 60;
  if (diffMinutes < 1) {
    return 'Arriving';
  } else {
    return diffMinutes.toFixed(0) + ' mins';
  }
}

function getLoadDescription(loadType: string): string {
  if (loadType === 'SEA') {
    return 'Seats Available';
  } else if (loadType === 'SDA') {
    return 'Standing Available';
  } else if (loadType === 'LSD') {
    return 'Limited Standing';
  }
  return 'NA';
}
