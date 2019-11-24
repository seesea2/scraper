import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusArrivalService } from '../bus-arrival.service';
import {
  BusStopInfo,
  BusTable,
  NextBusData,
  BusArrivalReturn
} from '../bus-arrival-interface';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  loading: boolean;
  busStopCode: string;
  busTable: BusTable[];
  busTableColumn: string[] = ['service', 'bus1', 'bus2', 'bus3', 'load'];
  bExistingBookmark: boolean;
  busStopInfo: BusStopInfo;
  err_msg: string;

  constructor(
    private route: ActivatedRoute,
    private busSvc: BusArrivalService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loading = true;
    this.busStopCode = '';
    this.busTable = [];
    this.bExistingBookmark = false;
    this.busStopCode = this.route.snapshot.paramMap.get('BusStopCode');
    this.err_msg = '';

    this.getBusArrival();
  }

  addBusStopBookmark() {
    this.bExistingBookmark = true;
    this.busSvc.addBusStopBookmark(this.busStopInfo);
  }

  getBusArrival() {
    this.busTable = [];

    this.busStopCode = this.busStopCode.trim();
    if (!this.busStopCode) {
      this.err_msg = 'Invalid Bus Stop Code.';
      this.snackBar.open('Invalid Bus Stop Code.', 'warn', { duration: 3000 });
      return;
    }

    this.loading = true;
    this.busSvc.getBusArrival(this.busStopCode).subscribe(
      (data: BusArrivalReturn) => {
        this.loading = false;
        if (data.busArrival.Services.length <= 0) {
          this.err_msg = 'Bus service unavailable at the Bus Stop.';
          this.snackBar.open(
            'Bus service unavailable at the Bus Stop.',
            'warn',
            {
              duration: 3000
            }
          );
          return;
        }

        this.err_msg = '';
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
        this.bExistingBookmark = this.busSvc.existingBookmark(this.busStopInfo);
      },
      err => {
        this.loading = false;
        this.err_msg = err;
        this.snackBar.open(err, 'Error', { duration: 4000 });
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
