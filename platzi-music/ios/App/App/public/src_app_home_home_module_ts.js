"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _album_modal_album_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../album-modal/album-modal.page */ 7569);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../songs-modal/songs-modal.page */ 7246);








let HomePage = class HomePage {
    constructor(musicService, modalController) {
        this.musicService = musicService;
        this.modalController = modalController;
        this.slideOps = {
            initialSlide: 2,
            slidesPerView: 4,
            speed: 400
        };
        this.artists = [];
        this.songs = [];
        this.albums = [];
    }
    ionViewDidEnter() {
        this.musicService.getNewReleases().then((newRealeses) => {
            this.songs = newRealeses.albums.items.filter(e => e.album_type == "single");
            this.albums = newRealeses.albums.items.filter(e => e.album_type == "album");
        });
        this.musicService.getArtist().then((artists) => {
            this.artists = artists.items;
        });
    }
    showArtist(artist) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const songs = yield this.musicService.getArtistTopTracks(artist.id);
            const modal = yield this.modalController.create({
                component: _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_4__.SongsModalPage,
                componentProps: {
                    songs: songs.tracks,
                    artist: artist.name
                }
            });
            modal.onDidDismiss().then(dataReturned => {
                this.song = dataReturned.data;
                this.currentSong = new Audio(this.song.preview_url);
            });
            return yield modal.present();
        });
    }
    showAlbum(album) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const albumTracks = yield this.musicService.getAlbumTracks(album.id);
            console.log(album.name);
            console.log(album.images[0].url);
            console.log(albumTracks.items);
            const modal = yield this.modalController.create({
                component: _album_modal_album_modal_page__WEBPACK_IMPORTED_MODULE_2__.AlbumModalPage,
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
            return yield modal.present();
        });
    }
    playSong(song) {
        this.song = song;
        this.currentSong = new Audio(this.song.preview_url);
    }
    play() {
        this.currentSong.play();
        this.currentSong.addEventListener("timeupdate", () => {
            this.time = (this.currentSong.currentTime / this.currentSong.duration);
        });
        this.song.playing = true;
    }
    pause() {
        this.currentSong.pause();
        this.song.playing = false;
    }
    parseTime(time) {
        if (time) {
            return Math.floor(time).toString();
        }
        else {
            return '0:00';
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.APIService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams],
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIService": () => (/* binding */ APIService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 2340);




let APIService = class APIService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
    }
    getArtist() {
        return fetch(`https://static.platzi.com/media/tmp/class-files/git/ionic/ionic-0b43f4f65e1026d2afe15307334d28bda0307cc3/src/app/services/artists.json`).then(response => response.json());
    }
    getNewReleases() {
        return fetch(`https://platzi-music-api.herokuapp.com/browse/new-releases`).then(response => response.json());
    }
    getArtistTopTracks(artistId) {
        return fetch(`https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`).then(response => response.json());
    }
    getAlbumTracks(albumId) {
        return fetch(`https://platzi-music-api.herokuapp.com/albums/${albumId}/tracks?country=CO`).then(response => response.json());
    }
};
APIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
APIService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], APIService);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  height: 120px;\n  width: 90%;\n}\n\nion-avatar img {\n  width: 90px;\n  height: 90px;\n}\n\nion-avatar span {\n  font-size: 12px;\n}\n\n.square-avatar {\n  --border-radius: ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIGltZyB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnNxdWFyZS1hdmF0YXIge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>home</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <h1>Artistas</h1>\n  <ion-slides [options]=\"slideOps\" *ngIf=\"artists.length\">\n    <ion-slide *ngFor=\"let artist of artists\">\n      <ion-avatar (click)=\"showArtist(artist)\">\n        <img [src]=\"artist.images[0].url\" />\n        <span>{{ artist.name }}</span>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n  <h1>Albums</h1>\n  <ion-slides [options]=\"slideOps\" *ngIf=\"albums.length\">\n    <ion-slide *ngFor=\"let album of albums\" (click)=\"showAlbum(album)\">\n      <ion-avatar class=\"square-avatar\">\n        <img [src]=\"album.images[0].url\" />\n        <span>{{ album.name }}</span>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n  <h1>Canciones</h1>\n  <ion-slides [options]=\"slideOps\" *ngIf=\"songs.length\">\n    <ion-slide *ngFor=\"let song of songs\" (click)=\"playSong(song)\">\n      <ion-avatar class=\"square-avatar\">\n        <img [src]=\"song.images[0].url\" />\n        <span>{{ song.name }}</span>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer *ngIf=\"song\">\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-start\">\n        {{ parseTime(currentSong.currentTime) || '0:00' }}\n      </ion-col>\n      <ion-col class=\"ion-text-end\">\n        {{ parseTime(currentSong.duration) || '0:00' }}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-progress-bar [value]=\"time\"></ion-progress-bar>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-text size=\"10\">\n          {{song.name || 'Aún No Has Seleccionado La Cación'}}\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\" *ngIf=\"!song.playing\">\n        <ion-icon (click)=\"play()\" name=\"play\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"1\" *ngIf=\"song.playing\">\n        <ion-icon (click)=\"pause()\" name=\"pause\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map