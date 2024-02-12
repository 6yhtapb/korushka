import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() levelsItems = new Array();
  @Input() nationsItems = new Array();
  @Input() classNamesItems = new Array();
  @Output() onFilterPressed: EventEmitter<any> = new EventEmitter<any>();
  selectedLevels: string[] = [];
  selectedNations: string[] = [];
  selectedClassNames: string[] = [];
  constructor() { }

  ngOnInit(): void {

  }
  toggleLevel(level: string) {
    var index = this.selectedLevels.indexOf(level);
    if (index == -1) {
      this.selectedLevels.push(level);
    } else {
      this.selectedLevels.splice(index, 1);
    }
    console.log( this.selectedLevels,index);
    this.onFilterPressed?.emit({
      levels: this.selectedLevels,
      nations: this.selectedNations,
      classNames: this.selectedClassNames,
    });
  }

  toggleNations(nation: string) {
    var index = this.selectedNations.indexOf(nation);
    if (index == -1) {
      this.selectedNations.push(nation);
    } else {
      this.selectedNations.splice(index, 1);
    }

    this.onFilterPressed?.emit({
      levels: this.selectedLevels,
      nations: this.selectedNations,
      classNames: this.selectedClassNames,
    });
  }
  toggleClassName(className: string) {
    var index = this.selectedClassNames.indexOf(className);
    if (index == -1) {
      this.selectedClassNames.push(className);
    } else {
      this.selectedClassNames.splice(index, 1);
    }

    this.onFilterPressed?.emit({
      levels: this.selectedLevels,
      nations: this.selectedNations,
      classNames: this.selectedClassNames,
    });
  }

  clearAll() {
    this.selectedLevels = [];
    this.selectedNations = [];
    this.selectedClassNames = [];

    this.onFilterPressed?.emit({
      levels: [],
      nations: [],
      classNames: [],
    });
  }

}
