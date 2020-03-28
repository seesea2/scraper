import { Component, OnInit } from "@angular/core";

import { ScraperService } from "./scraper.service";

@Component({
  selector: "app-scraper",
  templateUrl: "./scraper.component.html",
  styleUrls: ["./scraper.component.css"]
})
export class ScraperComponent implements OnInit {
  totalUrls: number;
  scannedUrls: number;

  constructor(private svc: ScraperService) {}

  ngOnInit(): void {
    this.totalUrls = 0;
    this.scannedUrls = 0;

    this.svc.getTotalUrls().subscribe(data => {
      console.log(data);
      this.totalUrls = data.qty;
    });
    this.svc.getScannedUrls().subscribe(data => {
      console.log(data);
      this.scannedUrls = data.qty;
    });
  }
}
