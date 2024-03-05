import { ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { FirebaseStorageService } from '../services/firebase-storage.service';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation.model';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle.model';
import { StationService } from '../services/station.service';
import { Station } from '../models/station.model';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  editForm: FormGroup;
  editMode = false;
  lastReservation: Reservation | null = null;
  allReservation: Reservation[] | null = null;
  vehicles: Vehicle[] | null = null;
  stations: Station[] | null = null;
  imageUrl: string | null = null;
  userCookieData: any = null;
  paginatedReservations: any[] | null =  null;
  currentPage: number = 1;
  itemsPerPage: number = 5; //
  user: User = {};

  constructor(
    private firebaseStorageService: FirebaseStorageService,
    private authService: AuthService,
    private vehicleService: VehicleService,
    private stationService: StationService,
    private userService: UserService,
    private fb: FormBuilder,
    private reservationServe: ReservationService,
    private router: Router,
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      dni: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });

    
  }

  ngOnInit() {
    this.userCookieData = this.authService.getUserData();
    this.getUser();
    this.getVehicles();
    this.getStations();
    //this.getAllReservations();
    this.getAllReservationsAndVehicles();
    this.getLastReserve();
    this.paginateReservations();

  
   
  
    
  }


  getAllReservationsAndVehicles() {
    forkJoin({
      reservations: this.reservationServe.getAllReservationByUser(this.userCookieData.id),
      vehicles: this.vehicleService.getAllVehicles(),
      // cualquier otra llamada que necesites
    }).subscribe({
      next: ({ reservations, vehicles }) => {
        this.allReservation = reservations;
        this.vehicles = vehicles;
        this.linkReservationsToVehicles();
        this.paginateReservations();
      },
      error: (error) => {
        console.error('Error al obtener reservas y vehículos', error);
      }
    });
  }

  linkReservationsToVehicles() {
    if (this.allReservation && this.vehicles) {
      this.allReservation.forEach(reservation => {
        const associatedVehicle = this.vehicles!.find(vehicle => vehicle._id === reservation.vehicleId);
        reservation.vehicle = associatedVehicle;
      });
    }
  }


  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.editForm.patchValue(this.user);
    }
  }

  updateUserInfo() {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
    }
  }

  triggerFileUpload() {
    document.getElementById('file-upload')?.click();
  }

  getUser() {
    this.userService.getUserById(this.userCookieData.id).subscribe({
      next: (response) => {
        this.user = response;
        this.imageUrl = this.user.img ? this.user.img : null;

        console.log('Usuario obtenido', response);
      },
      error: (error) => {
        // Manejar el error
        console.error('Error al obtener el usuario', error);
      },
    });
  }

  async onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      try {
        const downloadURL = await this.firebaseStorageService.uploadImage(file);
        this.imageUrl = downloadURL;

        this.updateProfile(downloadURL);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }

  updateProfile(imageUrl: string) {
    const userData = this.userCookieData.id;

    if (userData) {
      const userWithOnlyImage: User = { img: imageUrl };
      this.userService.updateImage(userData, userWithOnlyImage).subscribe({
        next: (response) => {
          console.log('Imagen actualizada', response);
        },
        error: (error) => {
          // Manejar el error
          console.error('Error al actualizar la imagen', error);
        },
      });
    } else {
      console.log('No hay usuario logueado');
    }
  }

  getLastReserve() {
    this.reservationServe.getLastReservation(this.userCookieData.id).subscribe({
      next: (response) => {
        console.log('ultima reservación', response);
        this.lastReservation = response;

        this.vehicles?.find((vehicle) => {
          {
            if (vehicle._id == this.lastReservation?.vehicleId) {
              this.lastReservation.vehicle = vehicle;
              console.log;
            }
          }
        });

        this.stations?.find((station) => {
          {
            if (station._id == this.lastReservation?.pickupStation) {
              this.lastReservation.station = station;
            }
          }
        });
      },
      error: (error) => {
        // Manejar el error
        console.error('Error al obtener la última reserva', error);
      },
    });
  }

  getAllReservations() {
    this.reservationServe
      .getAllReservationByUser(this.userCookieData.id)
      .subscribe({
        next: (response) => {
          console.log('ultima reservación', response);
          this.allReservation = response;

          this.allReservation?.forEach((reservation) => {
            this.vehicles?.find((vehicle) => {
              {
                if (vehicle._id == reservation.vehicleId) {
                  reservation.vehicle = vehicle;
                  console.log;
                }
              }
            });

            this.stations?.find((station) => {
              {
                if (station._id == reservation.pickupStation) {
                  reservation.station = station;
                }
              }
            });
          });
          console.log("hola"),
          console.log(this.allReservation);

          this.paginateReservations();
        },
        error: (error) => {
          // Manejar el error
          console.error('Error al obtener la última reserva', error);
        },
      });
  }

  getVehicles() {
    this.vehicleService.getAllVehicles().subscribe({
      next: (response) => {
        console.log('vehículos: ', response);
        this.vehicles = response;
      },
      error: (error) => {
        // Manejar el error
        console.error('Error al obtener los vehículos', error);
      },
    });
  }

  getStations() {
    this.stationService.getAllStations().subscribe({
      next: (response) => {
        console.log('staciones: ', response);
        this.stations = response;
      },
      error: (error) => {
        // Manejar el error
        console.error('Error al obtener las estaciones', error);
      },
    });
  }

  getCar() {
    console.log('navegar a nueva página');
    this.router.navigate(['/get-car'], {
      queryParams: { data: JSON.stringify(this.lastReservation) },
    });
  }

  paginateReservations() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.allReservation!.length);
    this.paginatedReservations = this.allReservation!.slice(startIndex, endIndex);
  }
  

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.paginateReservations();
  }

  get totalPages(): number {
    return Math.ceil(this.allReservation!.length / this.itemsPerPage);
  }

  range(size: number, startAt: number = 1): ReadonlyArray<number> {
    return [...Array(size).keys()].map(i => i + startAt);
  }


  changePage(step: number): void {
    const nextPage = this.currentPage + step;
    if (nextPage > 0 && nextPage <= this.totalPages) {
      this.currentPage = nextPage;
      this.paginateReservations();
    }
  }
  
  
  
}
