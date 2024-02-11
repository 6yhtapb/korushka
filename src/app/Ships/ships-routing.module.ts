import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ShipsComponent } from "./ships.component";
import { ShipsResolver } from "./router-resolvers/shipsresolver";
import { NgModule } from "@angular/core";

const routes:Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: ShipsComponent,
    resolve:[ShipsResolver],
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShipsRoutingModule { }
