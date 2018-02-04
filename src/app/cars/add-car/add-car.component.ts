import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addCarForm : FormGroup; //represents the form
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.addCarForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      make: '',
      model: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(11)]],
      power: '',
      year: '',
      deliveryDate: '',
      cost: '',
      clientFirstName: '',
      clientSurname: ['', Validators.required],
      isFullyDamaged: '',
    });
  }

}
