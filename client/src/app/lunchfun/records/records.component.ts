import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LunchfunService } from '../lunchfun.service';
import { LunchRecord } from '../lunchfun-interfaces';

@Component({
  selector: 'lunchfun-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit, OnDestroy {
  lunchRecords: LunchRecord[];
  lunchRecordErr: string;
  subscription: Subscription;

  constructor(private lunchfunService: LunchfunService) {
    this.subscription = lunchfunService.refresh$.subscribe(b => {
      this.getRecords();
    });
  }

  ngOnInit() {
    this.lunchRecords = [];
    this.lunchRecordErr = '';

    this.getRecords();
  }

  getRecords() {
    this.lunchfunService.getRecords().subscribe(
      data => {
        this.lunchRecordErr = '';
        this.lunchRecords = data;
      },
      err => {
        this.lunchRecordErr = err;
      }
    );
  }

  deleteRecord(record: LunchRecord) {
    this.lunchRecords = this.lunchRecords.filter(h => h !== record);
    this.lunchfunService.deleteRecord(record).subscribe(
      data => {
        this.lunchRecordErr = '';
        this.lunchfunService.startRefresh();
      },
      err => {
        this.lunchRecordErr = err;
      }
    );
  }

  trackById(index: number, record: LunchRecord) {
    return record._id;
  }

  getLocalDate(lunchRecord: LunchRecord) {
    return new Date(lunchRecord.createdOn).toLocaleString('en-SG');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
