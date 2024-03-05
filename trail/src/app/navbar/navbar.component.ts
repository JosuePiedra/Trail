import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userName: string = '';
  userLogged: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const userData = this.authService.getUserData();
    if(userData){
      this.userLogged = true;
      this.userName = userData ? userData.name : 'Invitado';
    }
  }

  logout() {
    this.authService.clearUserData();
    this.userLogged = false;
    this.router.navigate(['']);  

  }



}
