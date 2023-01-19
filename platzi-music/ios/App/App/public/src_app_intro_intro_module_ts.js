"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_intro_intro_module_ts"],{

/***/ 370:
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": () => (/* binding */ IntroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 5808);




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ 25:
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": () => (/* binding */ IntroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 370);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 5808);







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
    })
], IntroPageModule);



/***/ }),

/***/ 5808:
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page.html?ngResource */ 9099);
/* harmony import */ var _intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss?ngResource */ 1355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 190);






let IntroPage = class IntroPage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
        this.srcLogo = 'assets/img/logo.png';
        this.altLogo = 'PlatziMusicLogo';
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            centerSlides: true,
            speed: 400
        };
        this.slides = [
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
    }
    finish() {
        this.storage.create();
        this.storage.set('isIntroShowed', true);
        this.router.navigateByUrl('/login');
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-intro',
        template: _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroPage);



/***/ }),

/***/ 1355:
/*!**************************************************!*\
  !*** ./src/app/intro/intro.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-success);\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nion-slides {\n  background-color: white;\n  height: 100%;\n  max-width: 800px;\n}\n\n.swiper-slide {\n  display: block;\n  margin-bottom: 64px;\n  background-color: white;\n}\n\nion-slide > h1,\nh2 {\n  margin: 0 0 0 0;\n  color: var(--ion-color-primary);\n}\n\nion-slide > p {\n  font-style: italic;\n  font-size: 22px;\n  padding: 1em 1em 1em 1em;\n}\n\nion-slide > ion-icon {\n  color: var(--ion-color-success);\n  font-size: 48px;\n}\n\nion-slide > ion-icon[name=close] {\n  float: right;\n  color: var(--ion-color-primary);\n  font-size: 48px;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 64px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBOztFQUVFLGVBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiaW50cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tc2xpZGU+aDEsXHJcbmgyIHtcclxuICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLXNsaWRlPnAge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gMWVtO1xyXG59XHJcblxyXG5pb24tc2xpZGU+aW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGU+aW9uLWljb25bbmFtZT1cImNsb3NlXCJdIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZT5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDUwJTtcclxuICBtYXgtd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDY0cHggMDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9099:
/*!**************************************************!*\
  !*** ./src/app/intro/intro.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let slide of slides\">\n      <ion-icon name=\"close\" (click)=\"finish()\"></ion-icon>\n      <img src=\"{{ slide.imageSrc }}\" alt=\"{{ slide.imageAlt }}\" />\n      <h1>{{ slide.title }}</h1>\n      <h2>{{ slide.subTitle }}</h2>\n      <p>\n        {{ slide.description }}\n      </p>\n      <ion-icon name=\"{{ slide.icon }}\"></ion-icon>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_intro_intro_module_ts.js.map