import { Component, Input, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/Shared/Models/ships.interface';

@Component({
  selector: 'app-ship-item',
  templateUrl: './ship-item.component.html',
  styleUrls: ['./ship-item.component.scss']
})
export class ShipItemComponent implements OnInit {
  @Input() ship:Vehicles | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
