import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.css']
})
export class ProgressStepperComponent {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 3;
  @Output() stepChanged = new EventEmitter<number>();

  constructor(private router: Router) {}

  navigateToStep(step: number) {
    if (!(step - 1 > this.currentStep)) {
      this.stepChanged.emit(step); 
      
    }
   
  }


  calculateProgressWidth(): string {
    return `${((this.currentStep - 1) / (this.totalSteps - 1)) * 100}%`;
  }
}
