import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  editCarForm : FormGroup; //represents the form
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
