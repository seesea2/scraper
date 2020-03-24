import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuicklinkStrategy, QuicklinkModule } from "ngx-quicklink";

import { BusArrivalComponent } from "./bus-arrival/bus-arrival.component";

const routes: Routes = [
  {
    path: "words",
    loadChildren: () => import("./words/words.module").then(m => m.WordsModule)
  },
  {
    path: "dictionary",
    loadChildren: () =>
      import("./dictionary/dictionary.module").then(m => m.DictionaryModule)
  },
  {
    path: "bus-arrival",
    loadChildren: () =>
      import("./bus-arrival/bus-arrival.module").then(m => m.BusArrivalModule)
  },
  {
    path: "",
    component: BusArrivalComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
