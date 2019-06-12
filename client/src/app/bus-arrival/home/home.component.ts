import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusArrivalService } from '../bus-arrival.service';
import { BusStopInfo, BusTable, NextBusData } from '../bus-arrival-interface';

@Component({
  selector: 'bus-arrival-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  busTable: BusTable[];
  busTableColumn: string[] = ['service', 'bus1', 'bus2', 'bus3', 'load'];
  busStopHistory: string[];
  validBusStopCode: string;
  busStopInfo: BusStopInfo;
  bShowAddToBookmark: boolean;

  constructor(
    private busArrivalService: BusArrivalService,
    private snackBar: MatSnackBar
  ) {
    busArrivalService.busStopBookmark$.subscribe(data => {
      this.busStopHistory = data;
    });
  }

  ngOnInit() {
    this.busTable = [];
    this.validBusStopCode = '';
    this.bShowAddToBookmark = false;
  }

  addBusStopHistory() {
    this.busArrivalService.addBusStopHistory(
      this.validBusStopCode,
      this.busStopInfo
    );
  }

  deleteBusStopHistory(busStop: string) {
    this.busArrivalService.deleteBusStopBookmark(busStop);
  }

  getBusStopInfoAndBusArrivalTime(busStopCode: string) {
    this.busTable = [];
    this.validBusStopCode = '';
    this.bShowAddToBookmark = false;

    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.snackBar.open('Invalid Bus Stop Code.', 'Error', { duration: 5000 });
      return;
    }

    this.busArrivalService.getBusStopInfo(busStopCode).subscribe(
      data => {
        this.busStopInfo = data;
        this.getBusArrival(busStopCode);
      },
      err => {
        this.snackBar.open(err, 'Error', { duration: 5000 });
      }
    );
  }

  getBusArrival(busStopCode: string) {
    this.busArrivalService.getBusArrival(busStopCode).subscribe(
      data => {
        if (data.Services.length <= 0) {
          this.snackBar.open(
            'Bus service unavailable at the Bus Stop.',
            'Error',
            {
              duration: 5000
            }
          );
          return;
        }

        data.Services.forEach(service => {
          let busRow: BusTable = {
            service: service.ServiceNo,
            bus1: calculateArrivalTime(service.NextBus),
            bus2: calculateArrivalTime(service.NextBus2),
            bus3: calculateArrivalTime(service.NextBus3),
            load: service.NextBus.Load
          };
          this.busTable.push(busRow);
        });

        this.validBusStopCode = data.BusStopCode;
        this.bShowAddToBookmark = !this.busStopHistory.includes(
          data.BusStopCode
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
