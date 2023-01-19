"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 1198:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 5915);




const routes = [
    {
        path: "",
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage,
        children: [
            {
                path: "home",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: "settings",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 7075)).then(m => m.SettingsPageModule)
            },
            {
                path: 'sports',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sports_sports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../sports/sports.module */ 4713)).then(m => m.SportsPageModule)
            },
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            }
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 2825:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 1198);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 5915);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 5915:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page.html?ngResource */ 1757);
/* harmony import */ var _menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss?ngResource */ 140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 190);






let MenuPage = class MenuPage {
    constructor(menuController, navCtrl, storage) {
        this.menuController = menuController;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    goTo(url) {
        this.navCtrl.navigateRoot('menu/' + url);
        this.menuController.close();
    }
    closeMenu() {
        this.menuController.close();
    }
    logOut() {
        this.navCtrl.navigateBack('/login');
        this.storage.create();
        this.storage.set('isUserLoggedIn', false);
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-menu',
        template: _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPage);



/***/ }),

/***/ 140:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1757:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-split-pane contentId=\"content\">\n  <ion-menu contentId=\"content\" side=\"end\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"closeMenu()\">\n            <ion-icon name=\"arrow-forward\" size=\"large\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item (click)=\"goTo('home')\">Home</ion-item>\n        <ion-item (click)=\"goTo('sports')\">Sports</ion-item>\n        <ion-item (click)=\"goTo('settings')\">Settings</ion-item>\n        <ion-item (click)=\"logOut()\">\n          <ion-icon name=\"log-out\" color=\"primary\" slot=\"start\"></ion-icon>\n          Log Out\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n\n</ion-split-pane>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map