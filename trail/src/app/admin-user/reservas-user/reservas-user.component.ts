import { Component, Input, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-reservas-user',
  templateUrl: './reservas-user.component.html',
  styleUrl: './reservas-user.component.css'
})
export class ReservasUserComponent {
  @Input() Reservation: User[] = [];
  dataSource = new MatTableDataSource<User>(this.Reservation);
  /*colorScheme: ColorHelper;*/
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  ngOnInit() {
    console.log(this.Reservation)
    this.dataSource = new MatTableDataSource<User>(this.Reservation);    
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = [
    '_id',
    'userId',
    'vehicleId',
    'schedule',
    'dateOfReservation',
    'pickupStation',
    'totalPrice'
  ];

}