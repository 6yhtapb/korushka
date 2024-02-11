import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShipsData, ShipsResponse } from '../Shared/Models/ships.interface';
import { ShipsApiFacade } from '../Facade/ships.facade';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  shipsSubscription: Subscription = new Subscription;
  shipsSource!: ShipsData;

  constructor(private shipsFacade: ShipsApiFacade) { }

  ngOnInit(): void {
    debugger
    // this.shipsSubscription = this.shipsFacade.shipsSource$.subscribe(
    //   (source) => {
    //     console.log(source)
    //     this.shipsSource = source;
    //   }
    // );
  }
  ngOnDestroy(): void {
    // this.shipsSubscription.unsubscribe();
  }
}
