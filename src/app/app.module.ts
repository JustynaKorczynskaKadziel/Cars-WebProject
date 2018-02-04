import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CarsComponent } from './cars/cars.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailsComponent } from './cars/cars-list/car-details/car-details.component';
import { TotalCostComponent } from './cars/cars-list/total-cost/total-cost.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { SearchComponent } from './cars/search/search.component';
import { EditCarComponent } from './cars/cars-list/edit-car/edit-car.component';
import { SharedModule } from './shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    TotalCostComponent,
    AddCarComponent,
    CarsComponent,
    SearchComponent,
    EditCarComponent,
    CarDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: <any>HomeComponent },
        { path: 'carsList', component: <any>CarsListComponent },
        { path: 'addCar', component: <any>AddCarComponent },
        { path: 'viewDetails', component: <any>CarDetailsComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
