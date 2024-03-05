import { Component, Input } from '@angular/core';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-information-rent',
  templateUrl: './information-rent.component.html',
  styleUrl: './information-rent.component.css'
})
export class InformationRentComponent {

  @Input() reservation: Reservation | null = null;

  ngOnInit() {
    console.log(this.reservation?.vehicle?.location);
  }
}
