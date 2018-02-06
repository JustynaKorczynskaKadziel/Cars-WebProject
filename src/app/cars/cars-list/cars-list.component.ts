import { Component, OnInit, ViewChild } from '@angular/core';
import { ICar } from '../../models/car';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { FormBuilder } from "@angular/forms";
import { CarsService } from '../../cars.service';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{
  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
  showForm: boolean = false;
  hideTotalCost: boolean = false;
  cars: Array<ICar>;
  
  constructor(private _carsService: CarsService) { }
  
  ngOnInit() {
    this._carsService.getCars()
    .subscribe(resCarsData => this.cars = resCarsData);
    console.log(this.cars);

  }
  showEditForm() {
    this.showForm = true;
    this.hideTotalCost = true;
  }


}
