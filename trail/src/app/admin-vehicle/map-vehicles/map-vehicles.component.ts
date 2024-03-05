import { Component, Input, Output } from '@angular/core';
import mapboxgl from 'mapbox-gl';

import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-map-vehicles',
  templateUrl: './map-vehicles.component.html',
  styleUrl: './map-vehicles.component.css',
})
export class MapVehiclesComponent {
  @Input() vehicles: Vehicle[] = [];

  map!: mapboxgl.Map;
  lat = -3.997795;
  lng = -79.205622;

  // Define tus marcadores aquí
  markers = [
    {
      coordinates: [-79.209643, -4.009217],
      title: 'Mollocos House',
      description: 'Casa del buen Molloco',
    },
    {
      coordinates: [-79.201454, -4.002844],
      title: 'Mapbox',
      description: 'San Francisco, California',
    },
  ];
  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken:
        'Ingresar el token de acceso',
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [this.lng, this.lat],
      zoom: 15,
    });

    this.vehicles.forEach((vehicle) => {
      // Crea un nuevo elemento para cada marcador
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = 'url(../../../assets/imgs/marker_image.png)';
      el.style.width = '50px'; // Ancho del marcador
      el.style.height = '50px'; // Alto del marcador
      el.style.backgroundSize = 'cover';
      el.style.borderRadius = '50%'; // Opcional para hacerlo circular

      // Crea el contenido HTML del popup
      const popupHtml = `
      <div class="popup">
      <div class="station-image">
      <img src="../assets/imgs/scooter-image1.png" class="popup-image">
        </div>
          
          <h3> Modelo:  ${vehicle.model}</h3>
          <p><strong>Año: </strong> ${vehicle.manufacturingAge}</p>
          <p><strong>Tipo: </strong>${vehicle.type}</p>
          <p><strong>Bateria: </strong>${vehicle.battery}</p>
          <p><strong>Estado: </strong>${vehicle.state}</p>

          </div>
        `;

      new mapboxgl.Marker(el)
        .setLngLat(vehicle.location as [number, number])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml))
        .addTo(this.map);

      console.log('marcador agregado');
    });
  }
}
