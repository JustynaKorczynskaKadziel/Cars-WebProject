import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
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
    isFullyDamaged: true,
    //year: ''
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
