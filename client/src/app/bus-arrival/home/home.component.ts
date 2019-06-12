import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BusArrivalService } from '../bus-arrival.service';
import {
  BusArrivalReturn,
  BusTable,
  NextBusData
} from '../bus-arrival-interface';

@Component({
  selector: 'bus-arrival-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formGroup: FormGroup;
  errorMsg: string;
  validBusStopCode: string;
  busTable: BusTable[];
  busTableColumn: string[] = [
    'service',
    'bus1',
    'bus2',
    'bus3',
    'operator',
    'load'
  ];
  busStopHistory: string[];

  constructor(
    private formBuilder: FormBuilder,
    private busArrivalService: BusArrivalService
  ) {
    busArrivalService.busStopHistory$.subscribe(data => {
      this.busStopHistory = data;
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      busStopCode: ['']
    });
    this.busTable = [];
    this.validBusStopCode = '';
    this.errorMsg = '';
  }

  bookmarkBusStop() {
    this.busArrivalService.bookmarkBusStop(this.validBusStopCode);
  }

  deleteBusStopHistory(busStop: string) {
    this.busArrivalService.deleteBusStopHistory(busStop);
  }

  getBusArrival(busStopCode: string) {
    this.errorMsg = '';
    this.busTable = [];
    this.validBusStopCode = '';
    busStopCode = busStopCode.trim();
    if (!busStopCode) {
      this.errorMsg = 'Invalid Bus Stop Code.';
      return;
    }
    this.busArrivalService.getBusArrival(busStopCode).subscribe(
      data => {
        if (data.Services.length <= 0) {
          this.errorMsg = 'No bus service at the Bus Stop.';
          return;
        }
        this.validBusStopCode = data.BusStopCode;
        data.Services.forEach(service => {
          let busRow: BusTable = {
            service: service.ServiceNo,
            bus1: calculateArrivalTime(service.NextBus),
            bus2: calculateArrivalTime(service.NextBus2),
            bus3: calculateArrivalTime(service.NextBus3),
            operator: service.Operator,
            load: getLoadDescription(service.NextBus.Load)
          };
          this.busTable.push(busRow);
        });
      },
      err => {
        this.errorMsg = err;
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
