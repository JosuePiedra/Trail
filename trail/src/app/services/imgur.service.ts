import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgurService {
  private clientId = '40df9682fbd5bef'; 

  constructor(private http: HttpClient) {}

  uploadImage(imageFile: File) {
    const formData = new FormData();
    formData.append('image', imageFile);

    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.clientId}`,
    });

    return this.http.post('https://api.imgur.com/3/image', formData, { headers });
  }
}
