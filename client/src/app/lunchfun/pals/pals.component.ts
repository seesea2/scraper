import { Component, OnInit } from '@angular/core';

import { LunchfunService } from '../lunchfun.service';
import { LunchPal } from '../lunchfun-interfaces';

@Component({
  selector: 'lunchfun-pals',
  templateUrl: './pals.component.html',
  styleUrls: ['./pals.component.css']
})
export class PalsComponent implements OnInit {
  today: string;
  addRecordErr: string;
  bAddingRecord: boolean;
  lunchPals: LunchPal[];
  lunchPalsErr: string;
  palAttendCheckbox: boolean[];

  constructor(private lunchfunService: LunchfunService) {}

  ngOnInit() {
    this.today = '';
    this.addRecordErr = '';
    this.bAddingRecord = false;
    this.lunchPals = [];
    this.lunchPalsErr = '';
    this.palAttendCheckbox = [];

    this.today = new Date().toLocaleString('en-SG');
    setInterval(() => {
      this.today = new Date().toLocaleString('en-SG');
    }, 1000);
    this.getPals();
  }

  getPals() {
    this.lunchfunService.getPals().subscribe(
      pals => {
        this.lunchPalsErr = '';
        this.lunchPals = pals;
        pals.forEach(pal => {
          this.palAttendCheckbox.push(true);
        });
      },
      err => {
        this.lunchPalsErr = err.error;
      }
    );
  }

  addRecord(payerSelect: number) {
    if (!payerSelect) {
      return (this.addRecordErr = 'Please select Payer.');
    }
    if (!this.palAttendCheckbox[payerSelect]) {
      return (this.addRecordErr =
        'Payer is not joining the lunch? Please review checkbox.');
    }

    this.bAddingRecord = true;
    const attendees: string[] = [];
    this.palAttendCheckbox.forEach((checkbox, ind) => {
      if (checkbox) {
        attendees.push(this.lunchPals[ind].name);
      }
    });

    const params = {
      payer: this.lunchPals[payerSelect].name,
      attendees: attendees
    };
    this.lunchfunService.addRecord(params).subscribe(
      data => {
        this.addRecordErr = 'Done. Record added.';
        this.lunchfunService.startRefresh();
        setTimeout(() => {
          this.addRecordErr = '';
          this.bAddingRecord = false;
        }, 1500);
      },
      err => {
        this.addRecordErr = err;
        this.bAddingRecord = false;
      }
    );
  }
}
