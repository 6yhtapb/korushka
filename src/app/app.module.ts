import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './Core/Services/core.module';
import { SharedModule } from './Shared/Models/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './Components/filter/filter.component';
import { ShipItemComponent } from './Components/ship-item/ship-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ShipItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
