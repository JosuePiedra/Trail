import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../models/station.model';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-admin-station',
  templateUrl: './admin-station.component.html',
  styleUrl: './admin-station.component.css'
})
export class AdminStationComponent {

  currentFuntion: number = 0;
  botonActivo = 1;
  tablaActiva: string = 'bicicleta';
  stations: Station[] = [];
  imageUrl: string | null = null;


  constructor(private router: Router, private stationService: StationService) {}

  
  ngOnInit() {
    this.loadVehicles();
    
  }

  loadVehicles() {
    this.stationService.getAllStations().subscribe((data) => {
      this.stations = data

  
    });
  }

  
  cambiarTabla(tabla: string): void {
    this.tablaActiva = tabla;
  }

  esTablaActiva(tabla: string): boolean {
    return this.tablaActiva === tabla;
  }

  cambiarFuncion(funcion: number): void {
    this.currentFuntion = funcion;
    this.botonActivo = funcion;

  }

 

}
