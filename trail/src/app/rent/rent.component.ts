import { Component } from '@angular/core';
import { Station } from '../models/station.model';
import { Vehicle } from '../models/vehicle.model';
import { TimeSlot } from '../models/time-slot.model';
import { AuthService } from '../services/auth.service';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css',
})
export class RentComponent {
  currentStep = 1;
  totalSteps = 3;
  rentFinish : boolean = false;
  selectedStation: Station | null = null;
  selectedTimeSlot: [Date, TimeSlot[]] | null = null;
  selectedVehicle: Vehicle | null = null;
  reservationData : Reservation | null = null;
  reservationDone : boolean = false;
  step3 : boolean = true;

  constructor(
    private authService: AuthService,
    private reservationService: ReservationService,
  ) {
    console.log(authService.getUserData());
  }

  updateSteps(step: number) {


  
    this.currentStep = step;

    if(this.currentStep == 3 && this.selectedVehicle != null){
      this.step3 = false;
    }

  

   
    
  }

  onStationSelected(station: Station) {
    this.selectedStation = station;
  }

  onTimeSlotSelected(timeSlot: [Date, TimeSlot[]]) {
    this.selectedTimeSlot = timeSlot;
    // Activa aquí el botón "Siguiente" si es necesario
  }

  onVehicleSelected(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;


    
  }

  canProceedToNextStep(): boolean {

    var userData = this.authService.getUserData().id;

    if(userData)
    switch (this.currentStep) {
      case 1:
        return !!this.selectedStation || !!this.selectedVehicle; 
      case 2:
        return !!this.selectedTimeSlot;
      case 3:
        return !!this.selectedVehicle; 
      default:
        return false;
    }else{
      return false;
      
    }
  }

  reserve() {
    let start = this.selectedTimeSlot?.[1]?.[0]?.start;
    let end =
      this.selectedTimeSlot?.[1]?.[this.selectedTimeSlot[1]?.length - 1]?.end;

    let year = this.selectedTimeSlot?.[0].getFullYear();
    let month = this.selectedTimeSlot?.[0].getMonth()! + 1;
    let day = this.selectedTimeSlot?.[0].getDate()!;

    // Formatea la fecha en 'YYYY-MM-DD'
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;

    if (this.canProceedToNextStep()) {
      this.reservationData = this.selectedStation != null ? {
        userId: this.authService.getUserData().id,
        vehicleId: this.selectedVehicle!._id,
        dateOfReservation: formattedDate,
        schedule: `${start} : ${end}`,
        pickupStation: this.selectedStation!._id,
        pickupLocation: this.selectedStation!.location
          ? this.selectedStation!.location
          : null,
        totalPrice: 1,
        vehicle: this.selectedVehicle!,
      } : 

      {
        userId: this.authService.getUserData().id,
        vehicleId: this.selectedVehicle!._id,
        dateOfReservation: formattedDate,
        schedule: `${start} : ${end}`,
        pickupLocation: this.selectedVehicle?.location,
        totalPrice: 1,
        vehicle: this.selectedVehicle!,
      }
      ;

      this.reservationService.createReservation(this.reservationData).subscribe(); 
      this.rentFinish = true;
    } else {
      // Notifica al usuario que necesita completar la selección actual antes de proceder
    }
  }

  calculateTotalPrice() {
    // Calcula el precio total de la reserva
    this.selectedVehicle!.pricePerSchedule! * this.selectedTimeSlot!.length;
  }

  handlePaymentCompleted() {
    this.reserve();
  }

  rentCompleted() {
    this.reservationDone = true;
  }

}
