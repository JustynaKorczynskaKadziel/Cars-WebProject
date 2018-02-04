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
  showForm: boolean = false;
  hideTotalCost: boolean = false;

  cars : Car[] = [
  {
    id: 1,
    make: 'Mazda',
    model: 'Model A',
    plate: 'AA',
    deliveryDate: '02-02-2018',
    deadline: '',
    clientFirstName: 'John',
    clientSurname: 'Doe',
    cost: 300,
    isFullyDamaged: true,
    isCarRepaired: false
  },
  {
    id: 2,
    make: 'Mazda',
    model: 'Model B',
    plate: 'AA',
    deliveryDate: '02-02-2018',
    deadline: '',
    clientFirstName: 'Mike',
    clientSurname: 'Doe',
    cost: 500,
    isFullyDamaged: false,
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

  showEditForm() {
    this.showForm = true;
    this.hideTotalCost = true;
  }
}
