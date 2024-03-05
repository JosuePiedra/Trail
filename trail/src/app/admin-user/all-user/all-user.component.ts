import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent {
  onSelect($event: any) {
    throw new Error('Method not implemented.');
  }
  @Input() users: User[] = [];
  dataSource = new MatTableDataSource<User>(this.users);
  single: { name: any; value: number }[] = []; // Inicializado como un array vacío
  colorScheme: string | Color = '#D0A966'; // Valor predeterminado o el valor que desees
  cardColor: string = '#d9d9d9'; // Valor predeterminado o el valor que desees

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      this.users = changes['users'].currentValue;
      console.log(this.users)
      
    }

    console.log(this.users);
    this.dataSource = new MatTableDataSource<User>(this.users);

    this.single = this.users.map((user) => ({ name: user.name, value: 1 }));

    this.colorScheme = {
      name: 'custom',
      selectable: true,
      group: ScaleType.Ordinal, // Utiliza el tipo ScaleType.Ordinal
      domain: [
        '#5AA454',
        '#E44D25',
        '#CFC0BB',
        '#7aa3e5',
        '#a8385d',
        '#aae3f5',
      ],
    };


  }


  

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
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
    'infoContacto',
    'cedula',
    'direccion',
    'correo',
    // 'hist_Alquiler',
  ];
}
