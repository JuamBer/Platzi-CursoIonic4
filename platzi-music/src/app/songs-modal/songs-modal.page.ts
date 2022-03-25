import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage {

  @Input() songs: any[];
  @Input() artist: string;

  constructor(
    private modalController: ModalController
  ) { }

  ionViewDidEnter(){
  }

  async selectSong(song){
    await this.modalController.dismiss(song);
  }
}
