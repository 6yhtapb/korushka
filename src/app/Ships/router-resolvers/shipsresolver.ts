import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { ShipsApiFacade } from "src/app/Facade/ships.facade";

@Injectable({
  providedIn: 'root',
})
export class ShipsResolver implements Resolve<boolean> {
  constructor(
    private shipsFacade: ShipsApiFacade
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {

    this.shipsFacade.geShipsBanner().subscribe((source) => {
      console.log(source)
    });
    return of(true);
  }
}
