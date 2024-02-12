import { Component } from '@angular/core';
import { Vehicles } from './Shared/Models/ships.interface';
import { ShipsApiFacade } from './Facade/ships.facade';
import { AppsService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'korushka';
  ships: Vehicles[] = new Array();
  levels = new Array();
  nations = new Array();
  classNames = new Array();

  constructor(private shipsFacade: ShipsApiFacade, private appsService: AppsService,) { }

  ngOnInit(): void {
    this.shipsFacade.geShipsData().subscribe(result => {
      this.ships=result.data.vehicles;
      this.appsService.setShipsData(this.ships);
       this.levels = Array.from(new Set(this.ships.map(x => x.level))).sort(function(a, b) {
        return Number(a) - Number(b);
      });
      this.nations = Array.from(new Set(this.ships.map(x => x.nation.title))).sort();
      this.classNames = Array.from(new Set(this.ships.map(x => x.type.title))).sort();
    });;
  }
  filterShips(shipFilters: any){
    this.ships=this.appsService.getShipsData();
    if(shipFilters.levels.length>0){
      this.ships = this.ships.filter(p => shipFilters.levels.includes(p.level));
      }
      if(shipFilters.nations.length>0){
        this.ships =this.ships.filter(p => shipFilters.nations.includes(p.nation.title));
      }
      if(shipFilters.classNames.length>0){
        this.ships =this.ships.filter(p => shipFilters.classNames.includes(p.type.title));
      }
    if(shipFilters.levels.length==0 && shipFilters.nations.length==0 && shipFilters.classNames.length==0){
      this.ships = this.appsService.getShipsData()
    }

  }
}
