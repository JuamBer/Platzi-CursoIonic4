"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 3963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 3963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ 7827);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);








let RegisterPage = class RegisterPage {
    constructor(formBuilder, authenticateService, navCtrl, storage) {
        this.formBuilder = formBuilder;
        this.authenticateService = authenticateService;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.srcLogo = "assets/img/logo.png";
        this.validationMessages = {
            name: [
                {
                    type: "required",
                    message: "El name es requerido"
                },
                {
                    type: "minlength",
                    message: "La longitud mínima para el nombre es de 3 caracteres"
                }
            ],
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
        this.registerForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3),
            ])),
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
    }
    goToLogin() {
        this.navCtrl.navigateBack('/login');
    }
    registerUser(credentials) {
        this.authenticateService.registerUser(credentials).then(() => {
            this.navCtrl.navigateForward('/login');
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button (click)=\"goToLogin()\"> Back </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <figure class=\"ion-text-center\">\n    <img [src]=\"srcLogo\" alt=\"\">\n  </figure>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser(registerForm.value)\">\n\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <div *ngFor=\"let validation of validationMessages.name\">\n        <div\n          *ngIf=\"registerForm.get('name').hasError(validation.type) && (registerForm.get('name').dirty ||\n          registerForm.get('name').touched)\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <div *ngFor=\"let validation of validationMessages.email\">\n        <div\n          *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <div *ngFor=\"let validation of validationMessages.password\">\n        <div\n          *ngIf=\"registerForm.get('password').hasError(validation.type) && (registerForm.get('password').dirty || registerForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </div>\n    </div>\n\n    {{\n      errorMessage\n    }}\n    <ion-button class=\"ion-text-center\" expand=\"full\" shape=\"round\" color=\"success\" [disabled]=\"!registerForm.valid\"\n      type=\"submit\">Register</ion-button>\n  </form>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map