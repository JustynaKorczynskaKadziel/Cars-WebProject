import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup; //represents the form
  readOnly: boolean = false;
  cost: any = '';
  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
      deadline: ['', Validators.required],
      cost: '',
      clientFirstName: '',
      clientSurname: ['', Validators.required],
      isFullyDamaged: '',
    });
  }

  deadlineValidity() {
    const damageControl = this.addCarForm.get('isFullyDamaged');
    const deadlineControl = this.addCarForm.get('deadline');
    this.cost = this.addCarForm.get('cost');
    if (damageControl.value) {
      deadlineControl.clearValidators();
      this.readOnly = true;
      this.cost = 200;
    } else {
      deadlineControl.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(7)]);
      this.readOnly = false;
      this.cost = '';
    }
    deadlineControl.updateValueAndValidity();
  }

  addCar() {
    this.router.navigateByUrl('carsList');
  }
}
