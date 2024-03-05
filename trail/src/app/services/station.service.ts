import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../models/station.model';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private apiUrl = 'http://localhost:3000/station';

  constructor(private http: HttpClient) {}
  
  createStation(station: Station): Observable<Station> {
    return this.http.post<Station>(this.apiUrl, station);
  }

  // Leer todas las estaciones
  getAllStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.apiUrl);
  }

  // Leer una estación por su ID
  getStationById(id: number): Observable<Station> {
    return this.http.get<Station>(`${this.apiUrl}/${id}`);
  }

  // Actualizar una estación por su ID
  updateStation(id: number, station: Station): Observable<Station> {
    return this.http.put<Station>(`${this.apiUrl}/${id}`, station);
  }

  // Eliminar una estación por su ID
  deleteStation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateVehicle(idStation: string, idVehicle: string): Observable<Station> {
    return this.http.put<Station>(`${this.apiUrl}/${idStation}/vehicles/${idVehicle}`, {});
  }

  
}
