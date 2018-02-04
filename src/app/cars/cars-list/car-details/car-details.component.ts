import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from '../../../models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  editCarForm : FormGroup; //represents the form
  car : Car;
  readOnly: boolean = true;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.editCarForm = this.buildCarForm();
    
  }

  buildCarForm() {
    return this.formBuilder.group({
      make: '',
      model: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(11)]],
      deliveryDate: '',
      deadline: ['', Validators.required],
      cost: '',
      clientFirstName: '',
      clientSurname: ['', Validators.required],
      isCarRepaired: '',
    });
  }

}
