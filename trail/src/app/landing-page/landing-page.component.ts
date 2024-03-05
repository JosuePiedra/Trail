import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private authService: AuthService,) {}

  userName: string = '';
  userRol: string = 'user';

  ngOnInit() {
    const userData = this.authService.getUserData();
    if(userData){
      this.userName = userData ? userData.name : 'Invitado';
      this.userRol = userData ? userData.rol : 'user';
    }
  }


}
