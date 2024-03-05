import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

  constructor(private authService: AuthService, private router: Router) {}

  userName: string = '';
  
  ngOnInit() {
    const userData = this.authService.getUserData();
    if(userData){
      this.userName = userData ? userData.name : 'Invitado';
    }
  }
  
  logout() {
    this.authService.clearUserData();

    
    this.router.navigate(['']);  

  }
}
