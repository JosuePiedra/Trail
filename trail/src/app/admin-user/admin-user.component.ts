import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css'
})
export class AdminUserComponent {

  currentFuntion: number = 0;
  botonActivo = 1;
  tablaActiva: string = 'user';
  user: User[] = [];

  constructor(private router: Router, private userService: UserService) {}

  
  ngOnInit() {
    this.loadUser();
    
  }

  loadUser() {
    this.userService.getAllUsers().subscribe((users) => {
      this.user = users;
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
