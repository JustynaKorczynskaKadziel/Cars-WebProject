import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

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
    model: 'Mazda',
    //type: '',
    plate: 'AA',
    deliveryDate: '02-02-2018',
    deadline: '03-02-2018',
    //color: '',
    //power: '',
    clientFirstName: 'John',
    clientSurname: 'Doe',
    cost: 300,
    isFullyDamaged: true,
    //year: ''
  },
  {
    id: 2,
    model: 'Mazda',
    //type: '',
    plate: 'AA',
    deliveryDate: '02-02-2018',
    deadline: '03-02-2018',
    //color: '',
    //power: '',
    clientFirstName: 'Mike',
    clientSurname: 'Doe',
    cost: 300,
    isFullyDamaged: false,
    //year: ''
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
