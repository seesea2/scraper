import { NgModule } from "@angular/core";

import { SharedModule } from "@shared/shared.module";
import { ScraperRoutingModule } from "./scraper-routing.module";
import { ScraperComponent } from "./scraper.component";

@NgModule({
  declarations: [ScraperComponent],
  imports: [SharedModule, ScraperRoutingModule]
})
export class ScraperModule {}
