import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShipsData } from './Shared/Models/ships.interface';
import { ShipsApiFacade } from './Facade/ships.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'korushka';
  shipsSubscription: Subscription = new Subscription;
  shipsSource!: ShipsData;

  constructor(private shipsFacade: ShipsApiFacade) { }

  ngOnInit(): void {
    this.shipsFacade.geShipsBanner2().subscribe((source) => {
      console.log(source)
    });
    // debugger
    // this.shipsSubscription = this.shipsFacade.shipsSource$.subscribe(
    //   (source) => {
    //     console.log(source)
    //     this.shipsSource = source;
    //   }
    // );
  }
  ngOnDestroy(): void {
    this.shipsSubscription.unsubscribe();
  }
}
