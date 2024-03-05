import { Component, Input } from '@angular/core';
import { Station } from '../../models/station.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StationService } from '../../services/station.service';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

@Component({
  selector: 'app-agg-statio',
  templateUrl: './agg-statio.component.html',
  styleUrl: './agg-statio.component.css',
})
export class AggStatioComponent {
  vehiculos: string[] = ['Bicicleta', 'Scooter'];
  selectedVehiculo: string | null = null;
  newVehiculo: string = '';
  showNewVehiculoInput: boolean = false;
  @Input() stations: Station[] = [];
  manufacturerEditMode = false;
  modelEditMode = false;
  imageUrl: string | null = null;

  map!: mapboxgl.Map;
  lat = -3.997795;
  lng = -79.205622;

  stationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stationService: StationService,
    private firebaseStorageService: FirebaseStorageService
  ) {
    this.stationForm = this.fb.group({
      name: ['', [Validators.required]],
      totalCapacity: ['', [Validators.required, Validators.min(1)]],
      location: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.backgroundImage = 'url(../../../assets/imgs/marker_image.png)';
    el.style.width = '50px'; 
    el.style.height = '50px'; 
    el.style.backgroundSize = 'cover';
    el.style.borderRadius = '50%';

    var marker = new mapboxgl.Marker(el);

    this.map = new mapboxgl.Map({
      accessToken:
        'Ingresar el token de acceso',
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [this.lng, this.lat],
      zoom: 15,
    });

    this.map.on('click', (e) => {
      var create = true;
      var coordinates = e.lngLat;
      var newMarker = turf.point([coordinates.lng, coordinates.lat] as number[] );
      console.log("control");
      this.stations.forEach((station) => {
        console.log("control", station.location[0], station.location[1]);
        var oldMarker = turf.point([station.location[0], station.location[1]] as number[]);
        
        if (
          turf.distance(newMarker, oldMarker, { units: 'kilometers' }) < 0.1

          
        ) {
          alert('Ya existe una estación en este lugar');
          create = false;
        }
      });
      

      if (create) {


        

        if (marker) {
          marker.remove();
        }

        marker.setLngLat(coordinates).addTo(this.map);

        this.stationForm.controls['location'].setValue([coordinates.lng, coordinates.lat]);

      }

     
    });

    this.stations.forEach((station) => {
      
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = 'url(../../../assets/imgs/marker_image.png)';
      el.style.width = '50px'; 
      el.style.height = '50px'; 
      el.style.backgroundSize = 'cover';
      el.style.borderRadius = '50%';
      

      const marker = new mapboxgl.Marker(el)
        .setLngLat(station.location as [number, number])
        .addTo(this.map);
    });
  }

  onSubmit() {
    const formData = this.stationForm.value;

    console.log(this.imageUrl);

    const defaultValues = {
      currentVehicles: 0,
      img: this.imageUrl == null ? null : this.imageUrl,
    };

   
    const vehicleData: Station = {
      ...formData,
      ...defaultValues,
    };

    this.stationService.createStation(vehicleData).subscribe({
      next: (response) => {
        alert('Estación creada correctamente');
        this.stationForm.reset(); 
        this.imageUrl = null;
      },
      error: (error) => {
        // Manejar el error
        console.error('Error al crear la estación', error);
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
