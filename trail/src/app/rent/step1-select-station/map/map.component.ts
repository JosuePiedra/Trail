import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { Marker } from 'mapbox-gl';
import { Station } from '../../../models/station.model';
import { VehicleService } from '../../../services/vehicle.service';
import { Vehicle } from '../../../models/vehicle.model';
import * as turf from '@turf/turf';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() stations: Station[] = [];
  @Input() vehicles: Vehicle[] = [];
  @Output() vehicleSelected = new EventEmitter<Vehicle>();
  @Output() stationSelected = new EventEmitter<Station>();


  map!: mapboxgl.Map;
  lat = -3.997795;
  lng = -79.205622;

  constructor() {}

  ngOnInit() {

    this.map = new mapboxgl.Map({
      accessToken:
        'Ingresar el token de acceso',
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [this.lng, this.lat],
      zoom: 15,
    });

    this.stations.forEach((station) => {
      // Crea un nuevo elemento para cada marcador
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = 'url(../../../assets/imgs/marker_image.png)';
      el.style.width = '50px';
      el.style.height = '50px';
      el.style.backgroundSize = 'cover';
      el.style.borderRadius = '50%';

      const popupHtml = `
      <div class="popup">

      <div [class.selected]="selectedStationIndex === i">
        <div class="station-image">
        <img src="../assets/imgs/estacion1.png" class="popup-image">
        </div>
        <div class="station-info">
        <h3>Dirección: ${station.name}</h3>
        <p>Dirección: ${station.address}</p>
        <p>Vehículos: ${station.totalCapacity}</p>
        <button id="reserveButton-${station}" class="reserve-button" >Reservar</button>
        </div>
  
    `;

      const marker = new mapboxgl.Marker(el)
        .setLngLat(station.location as [number, number])

        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml))

        .addTo(this.map);

      marker.getPopup().on('open', () => {
        const reserveButton = document.getElementById(
          `reserveButton-${station}`
        );
        if (reserveButton) {
          reserveButton.onclick = () => {
            this.reservar(station);
          };
        }
      });
    });


    
    

    this.vehicles.filter(x => x.state != 'maintenance' || 'inUse').forEach((vehicle) => {

      ;
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage =
        'url(../../../assets/imgs/marcador-bicycle.png)';
      el.style.width = '50px';
      el.style.height = '50px';
      el.style.backgroundSize = 'cover';
      el.style.borderRadius = '50%';

      var img  = vehicle.img != null ? vehicle.img :
      vehicle.type == 'bicycle' ? '../assets/imgs/bicycle-image1.png' : '../assets/imgs/scooter-image1.png';

      const popupHtml2 = `
    <div class="popup">

    <div [class.selected]="selectedStationIndex === i">
      <div class="station-image">
      <img src="${img}" class="popup-image">
      </div>
      <div class="station-info">
      <h3>Dirección: ${vehicle.model}</h3>
      <p>Velocidad: ${vehicle.maxVelocity}</p>
      <p>Calificación: ${vehicle.rentalRate ?? "Sin calificar"} </p>
      <p>Tipo: ${vehicle.type}</p>
      <button id="reserveButton-${vehicle}" class="reserve-button" >Reservar</button>
      </div>

  `;
  
  var create = true
  var newMarker = turf.point([vehicle.location![0], vehicle.location![1]] as number[] );

  this.stations.forEach((station) => {
    
    
    var oldMarker = turf.point([station.location[0], station.location[1]] as number[]);
    
    if (
      turf.distance(newMarker, oldMarker, { units: 'kilometers' }) < 0.1

      
    ) {
      create = false;
    }
  });
  

  if (create) {

    if(vehicle.location){
      const marker = new mapboxgl.Marker(el)
          .setLngLat(vehicle.location as [number, number])
  
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml2))
  
          .addTo(this.map);
  
        marker.getPopup().on('open', () => {
          const reserveButton = document.getElementById(
            `reserveButton-${vehicle}`
          );
          if (reserveButton) {
            reserveButton.onclick = () => {
              this.reservarVehicle(vehicle);

              
            };
          }
        });
    }


   
  }



  

      
    });
  }


  reservar(station: Station) {
    this.stationSelected.emit(station);
  }

  reservarVehicle(vehicle: Vehicle) {

    this.vehicleSelected.emit(vehicle);
    
  }


}
