import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class PlayService {
  constructor(private http: HttpClient) { }
  getPlayers() {
    return this.http.get(`${environment.appUrl}/api/play/get-players`);
  }
}
