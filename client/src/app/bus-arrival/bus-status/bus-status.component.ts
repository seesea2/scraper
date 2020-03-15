import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusService } from '../bus.service';
import { BusStop, BusTable, NextBusData, BusArrival } from '../bus-arrival';

@Component({
  selector: 'bus-status',
  templateUrl: './bus-status.component.html',
  styleUrls: ['./bus-status.component.css']
})
export class BusStatusComponent implements OnInit {
  loading: boolean;
  // busStopCode: string;
  busTable: BusTable[];
  busTableColumn: string[] = ['service', 'bus1', 'bus2', 'bus3', 'load'];
  existingBookmark: boolean;
  busStop: BusStop;
  errMsg: string;

  constructor(
    private route: ActivatedRoute,
    private busSvc: BusService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.busTable = [];
    this.existingBookmark = false;
    this.errMsg = '';

    this.getBusArrival();
  }

  addBusStopBookmark() {
    this.existingBookmark = true;
    this.busSvc.addBusStopBookmark(this.busStop);
  }

  getBusArrival() {
    this.busTable = [];

    let busStopCode = this.route.snapshot.paramMap.get('BusStopCode');
    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.errMsg = 'Invalid Bus Stop Code.';
      this.snackBar.open('Invalid Bus Stop Code.', 'warn', { duration: 3000 });
      return;
    }

    this.loading = true;
    this.busSvc.getBusArrival(busStopCode).subscribe(
      (data: BusArrival) => {
        this.loading = false;
        if (data.busArrival.Services.length <= 0) {
          this.errMsg = 'Bus service unavailable at the Bus Stop.';
          this.snackBar.open(
            'Bus service unavailable at the Bus Stop.',
            'warn',
            {
              duration: 3000
            }
          );
          return;
        }

        this.errMsg = '';
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

        this.busStop = data.busStop;
        this.existingBookmark = this.busSvc.existingBusStopBookmark(
          this.busStop
        );
      },
      err => {
        this.loading = false;
        this.errMsg = err.message;
        this.snackBar.open(this.errMsg, 'Error', { duration: 4000 });
      }
    );
  }
}

function calculateArrivalTime(bus: NextBusData) {
  if (!bus || !bus.EstimatedArrival) {
    return 'NA';
  }

  const date = new Date(bus.EstimatedArrival);
  if (date.valueOf() - Date.now() < 0) {
    return 'Arrived';
  }

  const diffMinutes = (date.valueOf() - Date.now()) / 1000 / 60;
  if (diffMinutes < 1) {
    return '1 min';
  } else {
    return diffMinutes.toFixed(0) + ' mins';
  }
}
