import { Component, EventEmitter, Output } from '@angular/core';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { Station } from '../../models/station.model';
import { StationService } from '../../services/station.service';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-step1-select-station',
  templateUrl: './step1-select-station.component.html',
  styleUrl: './step1-select-station.component.css'
})
export class Step1SelectStationComponent {

  selectedStation : Station | null = null;
  selectedVehicle : Vehicle | null = null;
  @Output() stationSelected = new EventEmitter<Station>();
  @Output() vehicleSelected = new EventEmitter<Vehicle>();
  vehicles: Vehicle[] = [];
  
  faMap = faMap;
  faBorderAll = faBorderAll;
  activeButton: 'map' | 'grid' = 'grid'; 
  stations : Station[] = [];

  constructor(private stationService: StationService, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.loadStations();
    this.loadVehicle();
  }


  handleStationSelection(station: Station) {
    this.selectedStation = station; 
    
    this.stationSelected.emit(station);
  }



  handleVehicleSelection(vehicle: Vehicle) {
    this.selectedVehicle = vehicle; 
    this.vehicleSelected.emit(vehicle);
  }



  loadStations() {
    this.stationService.getAllStations().subscribe(data => {
      this.stations = data;
    });
  
  }


  setActiveButton(button: 'map' | 'grid') {
    this.activeButton = button;
  }

  loadVehicle() {
    this.vehicleService.getAllVehicles().subscribe((data) => {
      this.vehicles = data;
      console.log(this.vehicles);
    });
  }
  

}
