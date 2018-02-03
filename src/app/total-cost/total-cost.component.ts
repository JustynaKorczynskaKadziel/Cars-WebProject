import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent{
//get totalCost from parent component (cars-list) 
  @Input() totalCost : number;
  
//send shownGross to parent component (cars-list)
  @Output() shownGross : EventEmitter<number> = new EventEmitter<number>();
  private VAT : number = 1.20;
  showGross() : void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }

}
