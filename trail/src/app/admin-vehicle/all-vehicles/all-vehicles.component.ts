import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrl: './all-vehicles.component.css',
})
export class AllVehiclesComponent{
  onSelect($event: any) {
    throw new Error('Method not implemented.');
  }
  dataSource = new MatTableDataSource<Vehicle>();
  isEditRoute = false;

  single: any | undefined; 
  colorScheme: string | Color = '#D0A966'; // Valor predeterminado o el valor que desees
  cardColor: string = '#d9d9d9'; 

  constructor(private vehicleService : VehicleService, private router : Router, private activatedRoute: ActivatedRoute){}

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica si la ruta actual es la de edición
        this.isEditRoute = this.activatedRoute.firstChild!.snapshot.url[0].path === 'edit';
      }
    });

  }


  activeButton: 'scooter' | 'bicycle' = 'scooter';
  faBicycle = faBicycle;

  bicycles: Vehicle[] = [];
  scooters: Vehicle[] = [];
  @Input() vehicles: Vehicle[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vehicles']) {
      this.updateDataSource();
    }

    

    this.colorScheme = {
      name: 'custom',
      selectable: true,
      group: ScaleType.Ordinal,  // Utiliza el tipo ScaleType.Ordinal
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
  }
  



  updateDataSource(): void {
    this.bicycles = this.vehicles.filter((vehicle) => vehicle.type === 'bicycle');
    this.scooters = this.vehicles.filter((vehicle) => vehicle.type === 'scooter');
    this.setActiveButton(this.activeButton);
    console.log(this.vehicles);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setActiveButton(button: 'scooter' | 'bicycle') {
    this.activeButton = button;
    this.dataSource.data = button === 'scooter' ? this.scooters : this.bicycles;
    this.single = this.groupByStateAndCount(this.dataSource.data);
    
  }

  groupByStateAndCount(vehicles: Vehicle[]): any[] {
    const countByState: Record<string, number> = {};
  
    vehicles.forEach(vehicle => {
      let stateInSpanish = '';
      switch (vehicle.state) {
        case 'available':
          stateInSpanish = 'Disponible';
          break;
        case 'maintenance':
          stateInSpanish = 'Mantenimiento';
          break;
        case 'inUse':
          stateInSpanish = 'Ocupado';
          break;
        default:
          stateInSpanish = vehicle.state;
      }
  
      if (!countByState[stateInSpanish]) {
        countByState[stateInSpanish] = 0;
      }
      countByState[stateInSpanish]++;
    });
  
    // Convertir el objeto en un arreglo de objetos para ngx-charts
    return Object.entries(countByState).map(([state, count]) => ({
      name: state,
      value: count
    }));
  }

  updateVehicle(vehicle: Vehicle) {
    this.router.navigate(['']); 
    this.router.navigate(['/admin-vehicle/edit', vehicle._id]); 
  }

  deleteVehicle(id: string) {
    // Lógica para eliminar el vehículo
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      alert('Vehículo eliminado');
    });
  }


  displayedColumns: string[] = [
    'id',
    'type',
    'state',
    'model',
    'manufacturer',
    'manufacturingAge',
    'maxVelocity',
    'battery',
    'actions',
  ];
}
