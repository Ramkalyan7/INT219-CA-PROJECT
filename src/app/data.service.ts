import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Provide the service at the root level
})
export class DataService {
  private apiUrl = 'https://musicbrainz.org/ws/2/artist/?query=dua';
  private songs = 'https://musicbrainz.org/ws/2/recording/?query=blank%space&fmt=json'
  private url = 'https://accounts.spotify.com/api/token'

  constructor(private http: HttpClient) {}


  getData(): Observable<any> {
    return this.http.get(this.songs);

    
  }
}
