import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-left-navbar',
  templateUrl: './admin-left-navbar.component.html',
  styleUrl: './admin-left-navbar.component.css'
})
export class AdminLeftNavbarComponent {
  faHome = faHome;
  userName: string = '';

  constructor(private authService : AuthService, private router : Router) {}

  ngOnInit() {
    const userData = this.authService.getUserData();
    if(userData){
      this.userName = userData ? userData.name : 'Invitado';
    }
  }


  getUserInitials(): string {
    return this.userName.split(' ').map((n) => n[0]).join('').toUpperCase();
  }

  logout() {
    this.authService.clearUserData();
    console.log('logout');
    this.router.navigate(['']);  

  }


}
