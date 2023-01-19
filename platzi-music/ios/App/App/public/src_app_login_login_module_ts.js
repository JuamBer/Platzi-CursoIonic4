"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ 7827);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);








let LoginPage = class LoginPage {
    constructor(formBuilder, authenticateService, navCtrl, storage) {
        this.formBuilder = formBuilder;
        this.authenticateService = authenticateService;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.srcLogo = "assets/img/logo.png";
        this.validationMessages = {
            email: [
                {
                    type: "required",
                    message: "El email es requerido"
                },
                {
                    type: "pattern",
                    message: "El email es incorrecto"
                }
            ],
            password: [
                {
                    type: "required",
                    message: "El password es requerido"
                },
                {
                    type: "minlength",
                    message: "La longitud mínima para la contraseña es de 5 caracteres"
                }
            ]
        };
        this.errorMessage = "";
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),
            ]))
        });
    }
    ngOnInit() {
        this.storage.create();
        this.storage.set('isUserLoggedIn', false);
    }
    loginUser(credentials) {
        console.log(credentials);
        this.authenticateService.loginUser(credentials).then(res => {
            this.errorMessage = "";
            this.storage.create();
            this.storage.set('isUserLoggedIn', true);
            this.navCtrl.navigateForward('menu/home');
        }).catch(error => {
            this.errorMessage = error;
        });
    }
    goToRegister() {
        this.navCtrl.navigateForward('/register');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n<figure class=\"ion-text-center\">\n  <img [src]=\"srcLogo\" alt=\"\">\n</figure>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input formControlName=\"email\"></ion-input>\n  </ion-item>\n  <div class=\"validation-error\">\n    <div *ngFor=\"let validation of validationMessages.email\">\n      <div\n        *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n        {{ validation.message }}\n      </div>\n    </div>\n  </div>\n  <ion-item>\n    <ion-label>Password</ion-label>\n    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n  </ion-item>\n  <div class=\"validation-error\">\n    <div *ngFor=\"let validation of validationMessages.password\">\n      <div\n        *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('email').touched)\">\n        {{ validation.message }}\n      </div>\n    </div>\n  </div>\n  {{\n    errorMessage\n  }}\n  <ion-button class=\"ion-text-center\" expand=\"full\" shape=\"round\" color=\"success\"\n    [disabled]=\"!loginForm.valid\"\n    type=\"submit\"\n  >Login</ion-button>\n</form>\n</ion-content>\n<ion-footer>\n  <ion-button (click)=\"goToRegister()\" class=\"ion-text-center\" expand=\"full\" fill=\"outline\" shape=\"round\" color=\"success\">Registrar</ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map