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

  constructor(
    private busArrivalService: BusArrivalService,
    private snackBar: MatSnackBar
  ) {
    busArrivalService.busStopBookmark$.subscribe(data => {
      this.busStopBookmark = data;
    });
  }

  ngOnInit() {
    this.busTable = [];
    this.bExistingBookmark = false;

    function positionCB(pos) {
      console.log(pos);
    }
    function errorCB(err) {
      console.log(err);
    }
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(positionCB, errorCB);
    } else {
      alert('navigator.geolocation is empty');
    }
  }

  addBusStopBookmark() {
    this.bExistingBookmark = true;
    this.busArrivalService.addBusStopBookmark(this.busStopInfo);
  }

  deleteBusStopBookmark(busStop: string) {
    this.bExistingBookmark = false;
    this.busArrivalService.deleteBusStopBookmark(this.busStopInfo);
  }

  getBusArrival(busStopCode: string) {
    this.busTable = [];
    this.bExistingBookmark = false;

    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.snackBar.open('Invalid Bus Stop Code.', 'Error', { duration: 5000 });
      return;
    }
    this.busArrivalService.getBusArrival(busStopCode).subscribe(
      (data: BusArrivalReturn) => {
        if (data.busArrival.Services.length <= 0) {
          this.snackBar.open('Bus service unavailable at the Bus Stop.', '', {
            duration: 5000
          });
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
        this.snackBar.open(err, 'Error', { duration: 5000 });
      }
    );
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
