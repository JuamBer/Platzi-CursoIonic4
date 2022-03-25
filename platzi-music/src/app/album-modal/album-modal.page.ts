import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.page.html',
  styleUrls: ['./album-modal.page.scss'],
})
export class AlbumModalPage {

  @Input() albumName: any;
  @Input() albumImg: string;
  @Input() albumSongs: any[] = [];

  constructor(
    private modalController: ModalController
  ) {
  }

  async selectSong(song) {
    await this.modalController.dismiss(song);
  }
}
