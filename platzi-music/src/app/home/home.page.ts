import { Component } from '@angular/core';
import { Slide } from './../../modules/Slide';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public srcLogo: string = 'assets/img/logo.png';
  public altLogo: string = 'PlatziMusicLogo';
  public slideOpt: any = {
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
    },{
      imageSrc: this.srcLogo,
      imageAlt: this.altLogo,
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'DE VÍDEOS INCREIBLES',
      description: 'Enrtra al modo video de nuestro reproductor y obtén acceso a documentales y making offs increibles de tu artista favorito.',
      icon: 'videocam'
    },{
      imageSrc: this.srcLogo,
      imageAlt: this.altLogo,
      title: 'Accede al exclusivo',
      subTitle: 'MODO DEPORTE',
      description: 'Crea una playlist basada en tu actividad física. <br/> Ten reportes y acceso a lo que necsites, integrado con GPS!',
      icon: 'bicycle'
    }
  ];

  constructor() {}

}
