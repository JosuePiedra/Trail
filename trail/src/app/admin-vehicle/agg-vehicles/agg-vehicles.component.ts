import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { VehicleService } from '../../services/vehicle.service';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import mapboxgl from 'mapbox-gl';
import { StationService } from '../../services/station.service';
import { Station } from '../../models/station.model';

@Component({
  selector: 'app-agg-vehicles',
  templateUrl: './agg-vehicles.component.html',
  styleUrl: './agg-vehicles.component.css',
})
export class AggVehiclesComponent {
  vehiculos: string[] = ['Bicicleta', 'Scooter'];
  selectedVehiculo: string | null = null;
  newVehiculo: string = '';
  showNewVehiculoInput: boolean = false;
  @Input() vehicles: Vehicle[] = [];
  manufacturerEditMode = false;
  modelEditMode = false;
  activeButton: 'scooter' | 'bicycle' = 'scooter';
  faBicycle = faBicycle;
  marcaScooter: string[] = [];
  marcaBicycle: string[] = [];
  modelosScooter: string[] = [];
  modelosBicycle: string[] = [];
  marcas: string[] = [];
  modelos: string[] = [];
  stations: Station[] = [];
  imageUrl: string | null = null;

  vehicleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private firebaseStorageService: FirebaseStorageService,
    private stationService: StationService
  ) {
    this.vehicleForm = this.fb.group({
      model: ['', [Validators.required]],
      station: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      maxVelocity: ['', [Validators.required]],
      manufacturingAge: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.stationService.getAllStations().subscribe((stations) => {
      this.stations = stations;
    });

    this.marcaScooter = Array.from(
      new Set(
        this.vehicles
          .filter((vehicle) => vehicle.type === 'scooter')
          .map((v) => v.manufacturer)
      )
    );
    this.modelosScooter = Array.from(
      new Set(
        this.vehicles
          .filter((vehicle) => vehicle.type === 'scooter')
          .map((v) => v.model)
      )
    );
    this.marcaBicycle = Array.from(
      new Set(
        this.vehicles
          .filter((vehicle) => vehicle.type === 'bicycle')
          .map((v) => v.manufacturer)
      )
    );
    this.modelosBicycle = Array.from(
      new Set(
        this.vehicles
          .filter((vehicle) => vehicle.type === 'bicycle')
          .map((v) => v.model)
      )
    );
    this.marcas = this.marcaScooter;
    this.modelos = this.modelosScooter;
  }

  setActiveButton(button: 'scooter' | 'bicycle') {
    this.activeButton = button;
    this.marcas = button === 'scooter' ? this.marcaScooter : this.marcaBicycle;
    this.modelos =
      button === 'scooter' ? this.modelosScooter : this.modelosBicycle;
  }

  onVehiculoChange(): void {
    this.showNewVehiculoInput = this.showNewVehiculoInput === null;
  }

  onSubmit() {
    console.log(this.activeButton);

    const formData = this.vehicleForm.value;

    const defaultValues = {
      type: this.activeButton,
      state: 'available',
      location: this.vehicleForm.value.station.location,
      battery: 100,
      img: this.imageUrl == null ? null : this.imageUrl,
    };

    const { station, ...otherFormData } = formData; 

    const vehicleData: Vehicle = {
      ...otherFormData, 
      ...defaultValues,
    };

    this.vehicleService.createVehicle(vehicleData).subscribe({
      next: (response) => {
        alert('Vehículo creado correctamente');
        this.vehicleForm.reset();
        this.imageUrl = null;
      },
      error: (error) => {
        // Manejar el error
        console.error('Error al crear el vehiculo', error);
      },
    });
  }

  changeStatusManufacturer() {
    this.manufacturerEditMode = !this.manufacturerEditMode;
  }

  changeStatusModel() {
    this.modelEditMode = !this.modelEditMode;
  }

  async onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      try {
        const downloadURL = await this.firebaseStorageService.uploadImage(file);
        this.imageUrl = downloadURL;
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }
}
