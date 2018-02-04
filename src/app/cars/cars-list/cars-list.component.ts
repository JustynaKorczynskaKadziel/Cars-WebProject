import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../../models/car';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  @ViewChild("totalCostRef") totalCostRef : TotalCostComponent;
  totalCost : number;
  grossCost : number;
  cars : Car[] = [
  {
    id: 1,
    make: 'Mazda',
    model: 'a',
    plate: 'AA',
    deliveryDate: '02-02-2018',
    power: 2,
    clientFirstName: 'John',
    clientSurname: 'Doe',
    cost: 300,
    isFullyDamaged: true,
    year: 2018,
    isCarRepaired: false
  },
  {
    id: 2,
    make: 'Mazda',
    model: '',
    plate: 'AA',
    deliveryDate: '02-02-2018',
    power: 5,
    clientFirstName: 'Mike',
    clientSurname: 'Doe',
    cost: 500,
    isFullyDamaged: false,
    year: 2017,
    isCarRepaired: false
  }
  ]
  constructor() { }

  ngOnInit() {
this.countTotalCost();

  }
  showGross() : void {
    this.totalCostRef.showGross();
  }

  countTotalCost() : void {
    if (this.cars.length === 0) {
      return;
    }

    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost : number) : void {
    this.grossCost = grossCost;
  }
}
