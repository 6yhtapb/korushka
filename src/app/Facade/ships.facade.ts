import { Injectable } from "@angular/core";
import { ShipsApiService } from "../Core/Services/api.ships";

@Injectable({
  providedIn: 'root',
})

export class ShipsApiFacade {

  constructor(
    private shipsApiService: ShipsApiService,
  ){}
  geShipsData() {
    return this.shipsApiService.getShipsData();
  }
}
