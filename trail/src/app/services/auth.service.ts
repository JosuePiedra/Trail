import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  saveUserData(userData: any) {
    // Suponiendo que `userData` es un objeto que contiene información del usuario
    this.cookieService.set(
      'userData',
      JSON.stringify(userData),
      1, // Expira en 1 día
      '/', // Path para la cookie
      undefined, // Domain: undefined para usar el dominio actual
      false, // Secure: false porque no estamos forzando HTTPS
      'Lax' // SameSite Policy
    );
  }

  getUserData() {
    const userData = this.cookieService.get('userData');
    return userData ? JSON.parse(userData) : null;
  }

  clearUserData() {
    this.cookieService.delete('userData', '/');
  }

 

  login(credentials: any): Observable<any> {
    console.log('Credenciales:');
    console.log(credentials);
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
}
