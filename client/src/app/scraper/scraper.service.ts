import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ScraperService {
  constructor(private http: HttpClient) {}

  getTotalUrls() {
    return this.http.get<{ qty: number }>("/api/scraper/urls/total");
  }
  getScannedUrls() {
    return this.http.get<{ qty: number }>("/api/scraper/urls/scanned");
  }
}
