import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShipsComponent } from "./ships.component";
import { SharedModule } from "../Shared/Models/shared.module";

@NgModule({
  declarations: [
    ShipsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class ShipsModule {}
