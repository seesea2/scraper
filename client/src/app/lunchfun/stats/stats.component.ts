import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LunchfunService } from '../lunchfun.service';
import { LunchStats } from '../lunchfun-interfaces';

@Component({
  selector: 'lunchfun-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {
  lunchStats: LunchStats[];
  lunchStatsErr: string;
  subscription: Subscription;

  constructor(private lunchfunService: LunchfunService) {
    this.subscription = lunchfunService.refresh$.subscribe(b => {
      this.getStats();
    });
  }

  ngOnInit() {
    this.lunchStats = [];
    this.lunchStatsErr = '';

    this.getStats();
  }

  getStats() {
    this.lunchfunService.getStats().subscribe(
      data => {
        this.lunchStatsErr = '';
        this.lunchStats = data;
      },
      err => {
        this.lunchStatsErr = err;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
