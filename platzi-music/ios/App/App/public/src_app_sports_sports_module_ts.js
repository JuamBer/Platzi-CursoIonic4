"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sports_sports_module_ts"],{

/***/ 9789:
/*!*************************************************!*\
  !*** ./src/app/sports/sports-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsPageRoutingModule": () => (/* binding */ SportsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sports.page */ 1487);




const routes = [
    {
        path: '',
        component: _sports_page__WEBPACK_IMPORTED_MODULE_0__.SportsPage
    }
];
let SportsPageRoutingModule = class SportsPageRoutingModule {
};
SportsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SportsPageRoutingModule);



/***/ }),

/***/ 4713:
/*!*****************************************!*\
  !*** ./src/app/sports/sports.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsPageModule": () => (/* binding */ SportsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sports-routing.module */ 9789);
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sports.page */ 1487);







let SportsPageModule = class SportsPageModule {
};
SportsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sports_routing_module__WEBPACK_IMPORTED_MODULE_0__.SportsPageRoutingModule
        ],
        declarations: [_sports_page__WEBPACK_IMPORTED_MODULE_1__.SportsPage]
    })
], SportsPageModule);



/***/ }),

/***/ 1487:
/*!***************************************!*\
  !*** ./src/app/sports/sports.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsPage": () => (/* binding */ SportsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sports.page.html?ngResource */ 1699);
/* harmony import */ var _sports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sports.page.scss?ngResource */ 5848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SportsPage = class SportsPage {
    constructor() { }
    ngOnInit() {
    }
};
SportsPage.ctorParameters = () => [];
SportsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sports',
        template: _sports_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sports_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SportsPage);



/***/ }),

/***/ 5848:
/*!****************************************************!*\
  !*** ./src/app/sports/sports.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9ydHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1699:
/*!****************************************************!*\
  !*** ./src/app/sports/sports.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>sports</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sports_sports_module_ts.js.map