import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';


@Component({
  selector: 'app-admin-vehicle',
  templateUrl: './admin-vehicle.component.html',
  styleUrls: ['./admin-vehicle.component.css']
})
export class AdminVehicleComponent {


  currentFuntion: number = 0;
  botonActivo = 1;
  tablaActiva: string = 'bicicleta';
  vehicles: Vehicle[] = [];


  constructor(private router: Router, private vehicleService: VehicleService) {}

  
  ngOnInit() {
    this.loadVehicles();
    
  }

  loadVehicles() {
    this.vehicleService.getAllVehicles().subscribe((data) => {
      this.vehicles = data
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
