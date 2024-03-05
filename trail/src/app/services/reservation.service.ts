import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Reservation } from '../models/reservation.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:3000/rental';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }
  
  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }



  getLastReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/last/${id}`);
  }

  getAllReservationByUser(id: string): Observable<Reservation[]> {

    return this.http.get<Reservation[]>(`${this.apiUrl}/all/${id}`);
  }

  getRentalWithDetails(id: string): Observable<Reservation> {

    return this.http.get<Reservation>(`${this.apiUrl}/completeInfo/${id}`);

  }
  


}
