import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Station } from '../../models/station.model';
import { Color } from '@swimlane/ngx-charts';
import { ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-all-station',
  templateUrl: './all-station.component.html',
  styleUrl: './all-station.component.css'
})
export class AllStationComponent {
  onSelect($evenet: any){
    throw new Error('Method not implemented.');
  }

  single: { name: any; value: number; }[] = []; // Inicializado como un array vacío
  colorScheme: string | Color = '#D0A966'; // Valor predeterminado o el valor que desees
  cardColor: string = '#d9d9d9'; 
  @Input() stations: Station[] = [];
  dataSource = new MatTableDataSource<Station>();
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      this.stations = changes['stations'].currentValue;
      
      
    }

    console.log(this.stations)
    this.dataSource = new MatTableDataSource<Station>(this.stations);
    
    this.single = this.stations.map(stations => ({ name: stations.name, value: 1 }));

    this.colorScheme = {
      name: 'custom',
      selectable: true,
      group: ScaleType.Ordinal,  // Utiliza el tipo ScaleType.Ordinal
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };


  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  displayedColumns: string[] = [
    'id',
    'name',
    'totalCapacity',
    'location',
  
    'currentVehicles',
    'address',
  ];

}
