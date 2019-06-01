(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n    position: absolute;\r\n    width: 80%;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 80px;\r\n    height: 80%;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page'>\n  <h2>{{res.name}}</h2>\n  <p><i class=\"fas fa-envelope-open-text\"></i>&nbsp;{{res.email}}</p>\n  <p><i class=\"fas fa-school\"></i>&nbsp;{{res.school}}</p>\n  <p><i class=\"fas fa-map-signs\"></i>&nbsp;{{res.richting}}</p>\n  <p><i class=\"fas fa-users\"></i>&nbsp;{{res.klas}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AccountComponent = /** @class */ (function () {
    function AccountComponent(http, router, cookie) {
        this.http = http;
        this.router = router;
        this.cookie = cookie;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.identify();
    };
    AccountComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get('jwt')
            })
        };
        this.user = this.cookie.get('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            console.log(_this.res);
        }, function (error) {
            _this.error = error;
            console.log("error");
        });
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/authenticated/authenticated.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rapport/rapport.component */ "./src/app/rapport/rapport.component.ts");







var routes = [
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'authenticated', component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticatedComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"] },
    { path: 'rapport', component: _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_6__["RapportComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n    <router-outlet>\n    </router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(cookie) {
        this.cookie = cookie;
        this.title = 'client';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cookiesl();
    };
    AppComponent.prototype.cookiesl = function () {
        this.cookies = this.cookie.get('jwt');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/authenticated/authenticated.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rapport/rapport.component */ "./src/app/rapport/rapport.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"],
                _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticatedComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _rapport_rapport_component__WEBPACK_IMPORTED_MODULE_12__["RapportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated.component.css":
/*!***********************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n    position: absolute;\r\n    width: 80%;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 80px;\r\n    height: 80%;\r\n    text-align: center;\r\n}\r\n.container {\r\n    position: relative;\r\n}\r\n.bold {\r\n    font-weight: bold;\r\n}\r\nbutton {\r\n    margin: 5px;\r\n}\r\n.spannerd {\r\n    font-size: 5rem;\r\n    color: #007bff;\r\n    cursor: pointer;\r\n}\r\n.card-header {\r\n    cursor: pointer;\r\n}\r\n.hidecard {\r\n    display: none;\r\n}\r\n.showcard {\r\n    display: block;\r\n}\r\n.card {\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n@media (min-width: 0) {\r\n    .card-deck .card {\r\n      flex: 0 0 calc(100% - 30px);\r\n    }\r\n  }\r\n@media (min-width: 576px) {\r\n    .card-deck .card {\r\n      flex: 0 0 calc(50% - 30px);\r\n    }\r\n  }\r\n@media (min-width: 768px) {\r\n    .card-deck .card {\r\n      flex: 0 0 calc(33.33333% - 30px);\r\n    }\r\n  }\r\n@media (min-width: 992px) {\r\n    .card-deck .card {\r\n      flex: 0 0 calc(25% - 30px);\r\n    }\r\n  }\r\n@media (min-width: 1200px) {\r\n    .card-deck .card {\r\n      flex: 0 0 calc(20% - 30px);\r\n    }\r\n  }\r\n.fa-times {\r\n      font-size: 1.5em;\r\n      position: absolute;\r\n      right: 5%;\r\n      color: red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjtBQUNBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNBO0lBQ0U7TUFDRSxnQ0FBZ0M7SUFDbEM7RUFDRjtBQUNBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRjtBQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuICAgIHRvcDogODBweDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uc3Bhbm5lcmQge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaGlkZWNhcmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvd2NhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMCkge1xyXG4gICAgLmNhcmQtZGVjayAuY2FyZCB7XHJcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY2FyZC1kZWNrIC5jYXJkIHtcclxuICAgICAgZmxleDogMCAwIGNhbGMoNTAlIC0gMzBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNhcmQtZGVjayAuY2FyZCB7XHJcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDMzLjMzMzMzJSAtIDMwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jYXJkLWRlY2sgLmNhcmQge1xyXG4gICAgICBmbGV4OiAwIDAgY2FsYygyNSUgLSAzMHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNhcmQtZGVjayAuY2FyZCB7XHJcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDIwJSAtIDMwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmEtdGltZXMge1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/authenticated/authenticated.component.html":
/*!************************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page\">\n    <div class=\"card-deck card-columns\">\n        <div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\" *ngFor=\"let rapport of res.rapporten\">\n            <div class=\"card-header bold\" (click)=\"openRapport(rapport._id)\">{{rapport.periode | uppercase}}</div>\n            <div class=\"card-body\" >\n            <h5 class=\"card-title\" *ngIf=\"rapport.totaal != undefined\">&nbsp;total: {{ rapport.totaal }}%</h5>\n            <h5 class=\"card-title\" *ngIf=\"rapport.totaal == undefined\" title=\"to be determined\">&nbsp;total: TBD </h5>\n            <h6 class=\"card-title\">{{ rapport.datum | date }}</h6>\n            <span (click)=\"openRapport(rapport._id)\"><button type=\"button\" class=\"btn btn-outline-primary\">view <i class=\"fas fa-book-open\"></i></button></span>\n            <span (click)=\"editFunc()\"><button type=\"button\" class=\"btn btn-outline-warning\">edit <i class=\"fas fa-edit\"></i></button></span>\n            <span (click)=\"deleteFunc(rapport._id)\"><button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Delete <i class=\"fas fa-trash-alt\"></i></button></span>\n            </div>\n        </div>\n        <div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\" [ngClass]=\"{ 'showcard': showcard, 'hidecard': !showcard  }\">\n            <div class=\"card-header bold\">Add Card</div>\n            <div class=\"card-body\">\n            <p style=\"font-weight: bold\"> Click on the blueberry!</p>\n            <span class=\"spannerd\" (click)=\"addNewRapport()\">\n                    <i class=\"fab fa-raspberry-pi\"></i>\n            </span>\n            </div>\n        </div>\n        <div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\" [ngClass]=\"{ 'showcard': !showcard, 'hidecard': showcard  }\">\n            <div class=\"card-header bold\">New Rapport<i class=\"fas fa-times\" (click)='normalMode()'></i></div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\n                    <div>\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Periode\" formControlName=\"periode\">\n                    </div>\n                    <button class=\"button btn btn-primary mb-2\" type=\"submit\">submit</button>\n                </form>\n            </div>\n        </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authenticated/authenticated.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AuthenticatedComponent = /** @class */ (function () {
    function AuthenticatedComponent(cookie, http, router, formBuilder) {
        this.cookie = cookie;
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            name: '',
            periode: ''
        });
    }
    AuthenticatedComponent.prototype.ngOnInit = function () {
        this.identify();
        this.showcard = true;
        this.showedit = false;
    };
    AuthenticatedComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get('jwt')
            })
        };
        this.user = this.cookie.get('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            console.log(_this.res);
        }, function (error) {
            _this.error = error;
            console.log("error");
        });
    };
    AuthenticatedComponent.prototype.onSubmit = function (card) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get('jwt')
            })
        };
        this.http.post("http://localhost:3000/api/rapport", card, httpOptions)
            .subscribe(function (data) {
            _this.useless = data;
        });
        window.location.reload();
    };
    AuthenticatedComponent.prototype.deleteFunc = function (rapportid) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get('jwt')
            })
        };
        this.rapportidObj = {
            "rapportid": rapportid
        };
        this.http.put("http://localhost:3000/api/delrapport", this.rapportidObj, httpOptions)
            .subscribe(function (data) {
            console.log(data);
            _this.useless = data;
            window.location.reload();
        });
    };
    AuthenticatedComponent.prototype.editFunc = function () {
        alert("coming soon...");
    };
    AuthenticatedComponent.prototype.openRapport = function (id) {
        this.cookie.set('rapport', id, new Date(new Date().getTime() + 60 * 60 * 24 * 1000));
        this.router.navigate(['/rapport']);
    };
    AuthenticatedComponent.prototype.logOut = function () {
        this.cookie.delete('jwt');
        this.router.navigate(['/signin']);
    };
    AuthenticatedComponent.prototype.navAcc = function () {
        this.router.navigate(['/account']);
    };
    AuthenticatedComponent.prototype.addNewRapport = function () {
        this.showcard = false;
    };
    AuthenticatedComponent.prototype.normalMode = function () {
        this.showcard = true;
    };
    AuthenticatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authenticated',
            template: __webpack_require__(/*! ./authenticated.component.html */ "./src/app/authenticated/authenticated.component.html"),
            styles: [__webpack_require__(/*! ./authenticated.component.css */ "./src/app/authenticated/authenticated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], AuthenticatedComponent);
    return AuthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\r\n    position: absolute;\r\n    width: 100%;\r\n    padding: 0;\r\n    height: 70px;\r\n    max-height: 70px;\r\n}\r\n.hover {\r\n    text-decoration: none;\r\n}\r\n.hover:hover {\r\n    background-color: #d1e0e0;\r\n}\r\n.fab {\r\n    color: blue;\r\n}\r\n.card {\r\n    width: 20%;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n.workspace {\r\n    position: absolute;\r\n    top: 20%;\r\n    width: 100%;\r\n}\r\na {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5ob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmhvdmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWUwZTA7XHJcbn1cclxuLmZhYiB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi53b3Jrc3BhY2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow full\">\n    <h5 class=\"my-0 mr-md-auto font-weight-normal\">Blueberry pi <i class=\"fab fa-raspberry-pi\"></i></h5>\n    <nav class=\"my-2 my-md-0 mr-md-3\">\n        <a class=\"p-2 text-dark hover\" (click)=\"navHome()\">Home</a>\n        <a class=\"p-2 text-dark hover\"  (click)=\"navAcc()\">{{res.name}}</a>\n        <a class=\"p-2 text-dark hover\" href=\"#\">Settings</a>\n    </nav>\n      <a class=\"btn btn-outline-danger\" href=\"#\" (click)=\"logOut()\">log out</a>\n  </div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(cookie, http, router) {
        this.cookie = cookie;
        this.http = http;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.identify();
    };
    NavigationComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get('jwt')
            })
        };
        this.user = this.cookie.get('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            console.log(_this.res);
        }, function (error) {
            _this.error = error;
            console.log("error");
            _this.router.navigate(['/']);
        });
    };
    NavigationComponent.prototype.logOut = function () {
        this.cookie.delete('jwt');
        this.router.navigate(['/signin']);
    };
    NavigationComponent.prototype.navAcc = function () {
        this.router.navigate(['/account']);
    };
    NavigationComponent.prototype.navHome = function () {
        this.router.navigate(['/authenticated']);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/rapport/rapport.component.css":
/*!***********************************************!*\
  !*** ./src/app/rapport/rapport.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n    position: absolute;\r\n    width: 80%;\r\n    left: 10%;\r\n    right: 10%;\r\n    top: 80px;\r\n    height: 80%;\r\n    text-align: center;\r\n}\r\n.green {\r\n    color: green;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFwcG9ydC9yYXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcmFwcG9ydC9yYXBwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuICAgIHRvcDogODBweDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/rapport/rapport.component.html":
/*!************************************************!*\
  !*** ./src/app/rapport/rapport.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"list-group\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\n      <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-3 center\">{{ rapportelement.periode }}</h5>\n        <small>{{ rapportelement.datum | date }}</small>\n      </div>\n      <p class=\"mb-1\">{{ rapportelement.totaal }}</p>\n    </a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\" *ngFor=\"let vak of rapportelement.vakken\" [ngClass]=\"{ 'list-group-item-danger': vak.danger , 'list-group-item-warning': vak.warning }\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{vak.naam}}</h5>\n        <small class=\"text-muted\">{{vak.lesuren}}u</small>\n      </div>\n      <p class=\"mb-1\">{{vak.behaald }}/{{ vak.totaal}} = {{ vak.finale }}%</p>\n      &nbsp;&nbsp;-&nbsp;&nbsp;<small class=\"text-muted\"><span *ngFor=\"let toets of vak.toetsen\">{{toets.procent}}%&nbsp;&nbsp;-&nbsp;&nbsp;</span></small>\n    </a>\n    <a  class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">Add Vak</h5>\n          <small class=\"text-muted\"><input type=\"text\" placeholder=\"naam\" class=\"form-control\" [(ngModel)]=\"name\"><input type=\"text\" placeholder=\"lesuren\" class=\"form-control\" [(ngModel)]=\"lesuren\"></small>\n        </div>\n        <p class=\"mb-1\">toetsen: <input type=\"text\" placeholder=\"behaald/totaal_\" class=\"form-control\" title=\"behaald/totaal_\" [(ngModel)]=\"toetsen\"></p>\n        <small class=\"text-muted\"><button  class=\"btn btn-primary mb-2\" (click)=\"alert(rapportelement._id)\">submit</button></small>\n      </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rapport/rapport.component.ts":
/*!**********************************************!*\
  !*** ./src/app/rapport/rapport.component.ts ***!
  \**********************************************/
/*! exports provided: RapportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportComponent", function() { return RapportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RapportComponent = /** @class */ (function () {
    function RapportComponent(cookie, http, router, formBuilder) {
        this.cookie = cookie;
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.lesuren = '';
        this.toetsen = '';
        this.name = '';
    }
    RapportComponent.prototype.ngOnInit = function () {
        this.identify();
    };
    RapportComponent.prototype.identify = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get('jwt')
            })
        };
        this.user = this.cookie.get('jwt');
        this.http.get("http://localhost:3000/api/userinfo", httpOptions)
            .subscribe(function (data) {
            _this.res = data;
            console.log(_this.res);
            _this.identifyRapport();
        }, function (error) {
            _this.error = error;
            console.log("error");
        });
    };
    RapportComponent.prototype.identifyRapport = function () {
        this.rapportid = this.cookie.get('rapport');
        this.rapportelement = this.arrayCheck(this.rapportid);
        this.vakTotaal(this.rapportelement);
    };
    RapportComponent.prototype.arrayCheck = function (id) {
        for (this.i = 0; this.i < this.res.rapporten.length; this.i++) {
            if (this.res.rapporten[this.i]._id == id) {
                return this.res.rapporten[this.i];
            }
        }
    };
    RapportComponent.prototype.vakTotaal = function (rapportelement) {
        for (this.c = 0; this.c < rapportelement.vakken.length; this.c++) {
            this.vak = rapportelement.vakken[this.c];
            this.vak.totaal = 0;
            this.vak.behaald = 0;
            this.vak.finale = 0;
            this.vak.danger = false;
            this.vak.warning = false;
            for (this.f = 0; this.f < this.vak.toetsen.length; this.f++) {
                this.toets = this.vak.toetsen[this.f];
                this.vak.totaal = this.vak.totaal + this.toets.maxscore;
                this.vak.behaald = this.vak.behaald + this.toets.score;
                this.vak.finale = Math.floor(this.vak.behaald / this.vak.totaal * 100);
                if (this.vak.finale < 50) {
                    this.vak.danger = true;
                }
                else if (this.vak.finale == 50) {
                    this.vak.warning = true;
                }
                else {
                    this.vak.danger = false;
                }
                ;
            }
            console.log(this.rapportelement.vakken[this.c]);
        }
    };
    RapportComponent.prototype.alert = function (rapportid) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'responseType': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json',
                'Authorization': 'Bearer ' + this.cookie.get('jwt')
            })
        };
        this.split1 = this.toetsen.split("_");
        this.split2 = [];
        for (this.i = 0; this.i < this.split1.length; this.i++) {
            this.split2.push(this.split1[this.i].split("/"));
        }
        console.log(this.split2);
        this.body = {
            "lesuren": this.lesuren,
            "name": this.name,
            "rapportid": rapportid
        };
        this.http.put('http://localhost:3000/api/rapportvak', this.body, httpOptions)
            .subscribe(function (data) {
            for (_this.i = 0; _this.i < _this.split2.length; _this.i++) {
                _this.array2 = _this.split2[_this.i];
                _this.body2 = {
                    "score": _this.array2[0],
                    "maxscore": _this.array2[1],
                    "rapportid": rapportid,
                    "vakname": _this.name
                };
                _this.http.put('http://localhost:3000/api/rapportvaktoets', _this.body2, httpOptions);
            }
            ;
        });
    };
    RapportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rapport',
            template: __webpack_require__(/*! ./rapport.component.html */ "./src/app/rapport/rapport.component.html"),
            styles: [__webpack_require__(/*! ./rapport.component.css */ "./src/app/rapport/rapport.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RapportComponent);
    return RapportComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='text-center fullpage1'>\n    <form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <img class=\"mb-4\" src=\"./assets/raspberry-pi.svg\" alt=\"\" width=\"72\" height=\"72\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\" ngModel name=\"name\" required>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" ngModel name=\"password\" required>\n        <div class=\"checkbox mb-3\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n        <p class=\"mt-5 mb-3 text-muted\">© Wout De Tollenaere</p>\n      </form>\n</div>\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SigninComponent = /** @class */ (function () {
    function SigninComponent(http, cookie, router) {
        this.http = http;
        this.cookie = cookie;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.testAuthenticated();
    };
    SigninComponent.prototype.testAuthenticated = function () {
        this.cookies = this.cookie.get('jwt');
        if (this.cookies == undefined || this.cookies == null || this.cookies == '') {
            console.log(true);
        }
        else if (this.cookies != undefined) {
            this.router.navigate(['/authenticated']);
        }
        ;
    };
    ;
    SigninComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'email': f.value.name,
                'toegang': f.value.password
            })
        };
        console.log(f.value);
        console.log(f.valid);
        if (f.valid == false) {
            return alert("vergeet je email / wachtwoord niet in te vullen");
        }
        ;
        if (f.valid == true) {
            this.http.get("http://localhost:3000/api/authenticate", httpOptions)
                .subscribe(function (data) {
                _this.res = data;
                _this.now = Date.now();
                _this.cookie.set('jwt', _this.res, new Date(new Date().getTime() + 60 * 60 * 24 * 1000));
                _this.router.navigate(['/authenticated']);
            }, function (error) {
                _this.error = error;
                alert("incorrect email / password. status: " + error.status + ' ' + error);
            });
        }
        ;
    };
    ;
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\program\rapport\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map