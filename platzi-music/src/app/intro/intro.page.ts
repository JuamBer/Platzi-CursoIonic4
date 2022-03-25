import { Component, OnInit } from '@angular/core';
import { Slide } from './../../modules/Slide';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  public srcLogo: string = 'assets/img/logo.png';
  public altLogo: string = 'PlatziMusicLogo';
  public slideOpts: any = {
    initialSlide: 0,
    slidesPerView: 1,
    centerSlides: true,
    speed: 400
  }
  public slides: Slide[] = [
    {
      imageSrc: this.srcLogo,
      imageAlt: this.altLogo,
      title: 'Escucha tu música',
      subTitle: 'EN CUALQUIER LUGAR',
      description: 'Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento. A todas horas.',
      icon: 'play'
    }, {
      imageSrc: this.srcLogo,
      imageAlt: this.altLogo,
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'DE VÍDEOS INCREIBLES',
      description: 'Enrtra al modo video de nuestro reproductor y obtén acceso a documentales y making offs increibles de tu artista favorito.',
      icon: 'videocam'
    }, {
      imageSrc: this.srcLogo,
      imageAlt: this.altLogo,
      title: 'Accede al exclusivo',
      subTitle: 'MODO DEPORTE',
      description: 'Crea una playlist basada en tu actividad física. <br/> Ten reportes y acceso a lo que necsites, integrado con GPS!',
      icon: 'bicycle'
    }
  ];

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  finish(){
    this.storage.create();
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/login');
  }

}
