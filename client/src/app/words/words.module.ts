import { NgModule } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { WordsRoutingModule } from "./words-routing.module";
import { WordsComponent } from "./words.component";

@NgModule({
  declarations: [WordsComponent],
  imports: [SharedModule, WordsRoutingModule]
})
export class WordsModule {}
