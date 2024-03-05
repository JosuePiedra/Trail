import { Component, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Station } from '../../models/station.model';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-station-stats',
  templateUrl: './station-stats.component.html',
  styleUrl: './station-stats.component.css'
})
export class StationStatsComponent {

  @Input() stations: Station[] = [];
  dataSource = new MatTableDataSource<Station>();
  single: { name: any; value: number; }[] = []; // Inicializado como un array vacío
  colorScheme: string | Color = '#D0A966'; // Valor predeterminado o el valor que desees
  cardColor: string = '#d9d9d9'; 
  reservations: Reservation[] = [];
  infoStation: Reservation | null = null; 




  constructor(private reservationService : ReservationService){

    

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vehicles']) {
      
    }
    
    this.reservationService.getAllReservation().subscribe((data) => {
      this.reservations = data;

      this.single = this.groupByStateAndCount(data);
      
    });

   

  

   console.log("Single");
   console.log(this.single);


   this.colorScheme = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,  // Utiliza el tipo ScaleType.Ordinal
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  }
  



  onSelect($evenet: any){
    console.log($evenet);
    this.reservationService.getRentalWithDetails($evenet.name).subscribe((data) => {
      this.infoStation = data;
    })
  }

  groupByStateAndCount(reservations: Reservation[]): any[] {
    

    const countById = reservations.reduce((acc, reservation) => {
        

        if (reservation.pickupStation) { // Verificar si pickupStation es válido
            acc[reservation.pickupStation] = (acc[reservation.pickupStation] || 0) + 1;
        }

        return acc;
    }, {} as Record<string, number>);

    

    return Object.entries(countById).map(([state, count]) => ({
        name: state,
        value: count
    }));
}





}
