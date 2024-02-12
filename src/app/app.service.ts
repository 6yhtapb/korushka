import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Vehicles } from "./Shared/Models/ships.interface";

@Injectable({providedIn: 'root'})
export class AppsService {

    public ships:Vehicles[] = new Array();

    constructor(){
    }
    setShipsData(data:Vehicles[]) {
      this.ships=data;
    }
    getShipsData() {
      return this.ships;
    }
}
