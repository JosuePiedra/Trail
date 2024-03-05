import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step4-payment',
  templateUrl: './step4-payment.component.html',
  styleUrl: './step4-payment.component.css',
})
export class Step4PaymentComponent {
  paymentForm: FormGroup;
  isValid: boolean = false;
required: any;
@Output() paymentCompleted = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.maxLength(50),
        ],
      ], // Solo letras y espacios, longitud máxima 50
      cardNumber: ['', [Validators.required, Validators.pattern('\\d{16}')]], // Debe ser un número de 16 dígitos
      expiryDate: [
        '',
        [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\\/\\d{2}')],
      ], // Formato MM/AA
      cvc: ['', [Validators.required, Validators.pattern('\\d{3}')]], // Debe ser un número de 3 dígitos
     
    });
  }

  submitForm() {
    
    if (this.paymentForm.valid) {
      this.paymentCompleted.emit();
      this.isValid = true;
    } else {
      alert('Formulario inválido');
      this.paymentForm.reset();
    }
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.paymentForm.get(controlName)?.hasError(errorType) &&
      this.paymentForm.get(controlName)?.touched
    );
  }
}
