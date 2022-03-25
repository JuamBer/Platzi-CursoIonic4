import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menuController: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  goTo(url: string){
    this.navCtrl.navigateRoot('menu/'+url);
  }
  closeMenu(){
    this.menuController.close()
  }
  logOut(){
    this.navCtrl.navigateBack('/login');
    this.storage.create();
    this.storage.set('isUserLoggedIn', false);
  }
}
