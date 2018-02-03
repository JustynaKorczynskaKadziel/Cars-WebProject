import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsComponent } from './cars/cars.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { TotalCostComponent } from './cars/cars-list/total-cost/total-cost.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { SearchComponent } from './cars/search/search.component';
import { SharedModule } from './shared-module/shared-module.module';


@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    TotalCostComponent,
    AddCarComponent,
    CarsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
