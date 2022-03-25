import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Artist } from 'src/modules/Artist';
import { AlbumModalPage } from '../album-modal/album-modal.page';
import { APIService } from '../services/api.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams]
})
export class HomePage {

  slideOps: any = {
    initialSlide: 2,
    slidesPerView: 4,
    speed:400
  }
  artists: any[] = [];
  songs: any[] = [];
  albums: any[] = [];

  //Footer
  song: any;
  currentSong: HTMLAudioElement;
  time: number;

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

  async showArtist(artist) {
    const songs = await this.musicService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });

    modal.onDidDismiss().then(dataReturned => {
      this.song = dataReturned.data;
      this.currentSong = new Audio(this.song.preview_url);
    });

    return await modal.present();
  }

  async showAlbum(album) {

    const albumTracks = await this.musicService.getAlbumTracks(album.id);
    console.log(album.name)
    console.log(album.images[0].url)
    console.log(albumTracks.items)
    const modal = await this.modalController.create({
      component: AlbumModalPage,
      componentProps: {
        albumName: album.name,
        albumImg: album.images[0].url,
        albumSongs: albumTracks.items
      }
    });

    modal.onDidDismiss().then(dataReturned => {
      this.song = dataReturned.data;
      this.currentSong = new Audio(this.song.preview_url);
    });

    return await modal.present();
  }
  playSong(song){
    this.song = song;
    this.currentSong = new Audio(this.song.preview_url);
  }
  play(){
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", ()=>{
      this.time = (this.currentSong.currentTime / this.currentSong.duration);
    })
    this.song.playing = true;
  }

  pause(){
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime(time){
    if (time){
      return Math.floor(time).toString();
    }else{
      return '0:00'
    }
  }

}
