import { Component } from '@angular/core';
import { Artist } from 'src/modules/Artist';
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
  public artists: Artist[] = [
    new Artist("Juan", "https://via.placeholder.com/150"),
    new Artist("Juan", "https://via.placeholder.com/150"),
    new Artist("Juan", "https://via.placeholder.com/150"),
    new Artist("Juan", "https://via.placeholder.com/150")
  ];

  constructor() {}

}
