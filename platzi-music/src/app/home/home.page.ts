import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Artist } from 'src/modules/Artist';
import { APIService } from '../services/api.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams]
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
    private musicService: APIService,
    private modalController: ModalController
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

  async showSongs(artist) {
    const songs = await this.musicService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });
    return await modal.present();
  }

}
