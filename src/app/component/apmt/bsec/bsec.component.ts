import { Component, OnInit ,  ElementRef, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bsec',
  templateUrl: './bsec.component.html',
  styleUrls: ['./bsec.component.css']
})
export class BsecComponent implements OnInit {

  isPlaying: boolean = false;

  searchQuery: string = '';
  searchResults: any[] = [];

  selectedService: string = '';
  selectedProvider: string = '';
  appointmentDateTime: string = '';
  yourName: string = '';
  email: string = '';
  phoneNumber: string = '';

  access_tok = '';

  constructor(private dataService: DataService, private http: HttpClient , private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.authenticateWithSpotify();
  }

  authenticateWithSpotify() {
    const client_id = 'fe979c392cbc41fc89b5dc21e7f8a826';
    const client_secret = '743bb020c08f4b318a3c242d1e407925';

    // Encode the client ID and client secret using the 'btoa' function
    const credentials = btoa(`${client_id}:${client_secret}`);

    const authOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
    };

    const body = 'grant_type=client_credentials';

    // Make the authentication request to Spotify
    this.http.post('https://accounts.spotify.com/api/token', body, authOptions).subscribe(
      (response: any) => {
        console.log(response.access_token);
        this.access_tok = response.access_token;
        console.log(this.access_tok);
      },
      (error) => {
        console.error('Spotify authentication error:', error);
      }
    );
  }

  getArtist(searchQuery: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.access_tok}`
    });

    const apiUrl = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`;

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        this.searchResults = response.tracks.items;
        console.log(this.searchResults);
      },
      (error) => {
        console.error('Spotify artist search error:', error);
        this.searchResults = [];
      }
    );
  }

  onSubmit() {
    console.log('Service:', this.selectedService);
    console.log('Provider:', this.selectedProvider);
    console.log('Appointment Date & Time:', this.appointmentDateTime);
    console.log('Your Name:', this.yourName);
    console.log('Email:', this.email);
    console.log('Phone Number:', this.phoneNumber);
  }

  searchArtist() {
    if (this.searchQuery) {
      this.getArtist(this.searchQuery);
    }
  }



  toggleAudio(previewUrl: string) {
    const audioElement = this.el.nativeElement.querySelector('audio');

    if (this.isPlaying) {
      audioElement.pause();
    } else {
      audioElement.src = previewUrl;
      audioElement.load();
      audioElement.play();
    }

    this.isPlaying = !this.isPlaying;
  }
}
