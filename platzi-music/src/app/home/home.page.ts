import { Component } from '@angular/core';
import { Artist } from 'src/modules/Artist';
import { APIService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public slideOps: any = {
    initialSlide: 2,
    slidesPerView: 4,
    speed:400
  }
  public artists: any[] = [];
  public songs: any[] = [];
  public albums: any[] = [];

  constructor(
    private musicService: APIService
  ) {}

  ionViewDidEnter() {
    this.musicService.getNewReleases().then(
      (newRealeses)=>{
        this.songs = newRealeses.albums.items.filter(e=>e.album_type=="single");
        this.albums = newRealeses.albums.items.filter(e => e.album_type == "album");
      }
    )

    this.musicService.getArtist().then(
      (artists)=>{
        this.artists = artists.items
      }
    )
  }

}
