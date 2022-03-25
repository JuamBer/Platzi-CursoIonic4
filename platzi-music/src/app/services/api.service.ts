import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private apiUrl: string = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getArtist() {
    return fetch(`https://static.platzi.com/media/tmp/class-files/git/ionic/ionic-0b43f4f65e1026d2afe15307334d28bda0307cc3/src/app/services/artists.json`).then(
      response => response.json()
    );
  }

  getNewReleases() {
    return fetch(`https://platzi-music-api.herokuapp.com/browse/new-releases`).then(
      response => response.json()
    );
  }

  getArtistTopTracks(artistId) {
    return fetch(`https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`).then(
      response => response.json()
    );
  }
}
