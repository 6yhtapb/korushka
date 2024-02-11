import { Injectable } from "@angular/core";
import { ShipsData, ShipsResponse } from "../Shared/Models/ships.interface";
import { BehaviorSubject, tap } from "rxjs";
import { ShipsApiService } from "../Core/Services/api.ships";

@Injectable({
  providedIn: 'root',
})

export class ShipsApiFacade {
  _shipsSource: ShipsData = new ShipsData();
  shipsSource$: BehaviorSubject<ShipsData> = new BehaviorSubject<ShipsData>(
    this._shipsSource
  );
  constructor(
    private shipsApiService: ShipsApiService,
  ){}
  geShipsBanner() {
    console.log("papa")
    return this.shipsApiService.getShipsData().pipe(
      tap((data) => {
        console.log(data)
        this._shipsSource = data;
        this.shipsSource$.next(this._shipsSource);
      })
    );
  }
  geShipsBanner2() {
    console.log("papa2")
    return this.shipsApiService.getShipsData2().pipe(
      tap((data) => {
        console.log(data)
        // this._shipsSource = data;
        // this.shipsSource$.next(this._shipsSource);
      })
    );
  }
}
