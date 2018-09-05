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

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\nThis is my attempt to follow the steps in the \n<a href=\"https://codelabs.developers.google.com/codelabs/sheets-api/#0\">Codelabs Google Sheets-API Tutorial.</a> The tutorial teaches how to use the Google Sheets-API to read Google Docs spreadsheets from a web application. It is based around Node, Express and Javascript but I think Stackblitz, Angular and Typescript are much cooler so I wanted to use these technologies while going through the tutorial.\n</p>\n<p>\nThe tutorial uses an SQL database which is accessed via the npm package sqlite3. I tried using this but as far as I could tell it only works from within Node and not on the client-side. So I couldn't use it in Stackblitz as there is no Node server side so instead I used the npm package <a href=\"https://github.com/agershun/alasql\">Alasql</a> which does work on the client side. It took a certain amount of tinkering to get it to work and the section \n<a routerLink=\"/alasql-demo\" routerLinkActive=\"active\">\n\t\tAlaSql Demo</a>\n shows some simple examples of what works.\n</p>\n<p>\nI've actually had to abandon doing this in Stackblitz because, as far as I can tell, there is a fundamental security flaw with it. To use Google API's OAuth, you need to use a client secret key. When a user grants the app permission to access his/her personal data on Google Sheets, anyone with that secret key would be able to access that person's data in their own app. In Stackblitz, the secret key will always be visible to everyone because anyone can go in and view the source code. In an application built in VS Code on a local computer, the secret key would be kept hidden from the outside world and presumably would have to be excluded in any output to git. But I don't see how it would be possible in Stackblitz to keep the secret key secret.\n</p>\n<p>\nInstead, perhaps the way forward is to use Google Apps Script and the tool clasp which, as far as I can tell (I haven't tried it yet) allows you to write Typescript code and upload it to Google Apps Script. For Google Apps Script, I think, the secret key and other authorisation codes are kept behind the scenes and even the writer of the app script doesn't see it. \n</p>\n<p>I think that Stackblitz would be fine for instances where a Google Drive document or sheet that is shared with everyone needs to be accessed.\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/alasql-demo/alasql-demo-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/alasql-demo/alasql-demo-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AlasqlDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlasqlDemoRoutingModule", function() { return AlasqlDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alasql_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alasql-demo.component */ "./src/app/alasql-demo/alasql-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';


var alasqlDemoRoutes = [
    { path: 'alasql-demo', component: _alasql_demo_component__WEBPACK_IMPORTED_MODULE_2__["AlasqlDemoComponent"] }
];
var AlasqlDemoRoutingModule = /** @class */ (function () {
    function AlasqlDemoRoutingModule() {
    }
    AlasqlDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(alasqlDemoRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AlasqlDemoRoutingModule);
    return AlasqlDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/alasql-demo/alasql-demo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/alasql-demo/alasql-demo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alasql-demo/alasql-demo.component.html":
/*!********************************************************!*\
  !*** ./src/app/alasql-demo/alasql-demo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div class=\"mdl-grid\" *ngIf=\"comments\">\n\t<section id=\"orders\" class=\"mdl-cell mdl-cell--8-col relative\" *ngFor=\"let comment of comments\">\n\t\t<div class=\"mdl-grid\">\n\t\t\t{{ comment }}\n\t\t</div>\n\t</section>\n\n</div>\n<p>Cities:</p>\n<div class=\"mdl-grid\" *ngIf=\"cities\">\n\t<section id=\"cities\" class=\"mdl-cell mdl-cell--8-col relative\" *ngFor=\"let city of cities\">\n\t\t<div class=\"mdl-grid\">\n\t\t\t{{ city }}\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./src/app/alasql-demo/alasql-demo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/alasql-demo/alasql-demo.component.ts ***!
  \******************************************************/
/*! exports provided: AlasqlDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlasqlDemoComponent", function() { return AlasqlDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alasql */ "./node_modules/alasql/dist/alasql.min.js");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alasql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



//import { parse } from 'alasql';

var AlasqlDemoComponent = /** @class */ (function () {
    function AlasqlDemoComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.comments = new Array("initializing...");
        this.cities = new Array();
    }
    AlasqlDemoComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fieldName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("DROP TABLE IF EXISTS cities")
                            .then(function (res) {
                            _this.comments.push('Return from create table: ' + res.toString());
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("CREATE TABLE cities (city string, population number)")
                                .then(function (res) {
                                _this.comments.push('Return from create table: ' + res.toString());
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("INSERT INTO cities VALUES ('Rome',2863224),('Paris',2249975),('Berlin',3517424),('Madrid',3041579)").then(function (res) {
                                _this.comments.push('Return from insert: ' + res.toString());
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("SELECT * FROM cities WHERE population < 3500000 ORDER BY population DESC").then(function (res) {
                                _this.comments.push('Return from select: ' + JSON.stringify(res));
                                for (var i = 0; i < res.length; i++) {
                                    var obj = res[i];
                                    _this.cities.push(obj["city"] + " (population " + obj["population"]
                                        + ")");
                                }
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.dataService.getOrders().subscribe(function (data) {
                                _this.jsonOrders = data;
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("drop table if exists t_orders")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("create table t_orders ("
                                + "id int NOT NULL PRIMARY KEY, "
                                + "customerName string, "
                                + "productCode string, "
                                + "unitsOrdered int, "
                                + "unitPrice number, "
                                + "status string, "
                                + "createdAt date, "
                                + "updatedAt date)")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("insert into t_orders select * from ?", [this.jsonOrders])];
                    case 8:
                        _a.sent();
                        fieldName = "customerName";
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_2__["promise"]("SELECT " + fieldName + " FROM t_orders")
                                .then(function (res) {
                                _this.comments.push('Return from select: ' + JSON.stringify(res));
                                for (var i = 0; i < res.length; i++) {
                                    var obj = res[i];
                                    _this.cities.push(obj[fieldName]);
                                }
                            })];
                    case 9:
                        _a.sent();
                        this.comments.push("here2");
                        return [2 /*return*/];
                }
            });
        });
    };
    AlasqlDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./alasql-demo.component.html */ "./src/app/alasql-demo/alasql-demo.component.html"),
            styles: [__webpack_require__(/*! ./alasql-demo.component.css */ "./src/app/alasql-demo/alasql-demo.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlasqlDemoComponent);
    return AlasqlDemoComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false // <-- debugging purposes only
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hello name=\"{{ name }}\"></hello>\n\n<nav>\n\t<a routerLink=\"/orders\" routerLinkActive=\"active\">\n\t\tOrders</a>\n\t<a routerLink=\"/alasql-demo\" routerLinkActive=\"active\">\n\t\tAlaSql Demo</a>\n\t<a routerLink=\"/google\" routerLinkActive=\"active\">\n\t\tGoogle</a>\n\t<a routerLink=\"/about\" routerLinkActive=\"active\">\n\t\tAbout</a>\n</nav>\n\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Sheets API Angular Version';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello.component */ "./src/app/hello.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _alasql_demo_alasql_demo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alasql-demo/alasql-demo-routing.module */ "./src/app/alasql-demo/alasql-demo-routing.module.ts");
/* harmony import */ var _alasql_demo_alasql_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alasql-demo/alasql-demo.component */ "./src/app/alasql-demo/alasql-demo.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _orders_orders_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _order_edit_order_edit_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-edit/order-edit-routing.module */ "./src/app/order-edit/order-edit-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_about_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-edit/order-edit.component */ "./src/app/order-edit/order-edit.component.ts");
/* harmony import */ var _google_google_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./google/google.service */ "./src/app/google/google.service.ts");
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./google/google.component */ "./src/app/google/google.component.ts");
/* harmony import */ var _google_google_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./google/google-routing.module */ "./src/app/google/google-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = /** @class */ (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _orders_orders_routing_module__WEBPACK_IMPORTED_MODULE_12__["OrdersRoutingModule"],
                _order_edit_order_edit_routing_module__WEBPACK_IMPORTED_MODULE_13__["OrderEditRoutingModule"],
                _alasql_demo_alasql_demo_routing_module__WEBPACK_IMPORTED_MODULE_8__["AlasqlDemoRoutingModule"],
                _about_about_routing_module__WEBPACK_IMPORTED_MODULE_15__["AboutRoutingModule"],
                _google_google_routing_module__WEBPACK_IMPORTED_MODULE_21__["GoogleRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"],
                _alasql_demo_alasql_demo_component__WEBPACK_IMPORTED_MODULE_9__["AlasqlDemoComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["OrdersComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_18__["OrderEditComponent"],
                _google_google_component__WEBPACK_IMPORTED_MODULE_20__["GoogleComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _google_google_service__WEBPACK_IMPORTED_MODULE_19__["GoogleService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google/google-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/google/google-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GoogleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleRoutingModule", function() { return GoogleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _google_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google.component */ "./src/app/google/google.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'google', component: _google_component__WEBPACK_IMPORTED_MODULE_2__["GoogleComponent"] }
];
var GoogleRoutingModule = /** @class */ (function () {
    function GoogleRoutingModule() {
    }
    GoogleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], GoogleRoutingModule);
    return GoogleRoutingModule;
}());



/***/ }),

/***/ "./src/app/google/google.component.css":
/*!*********************************************!*\
  !*** ./src/app/google/google.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/google/google.component.html":
/*!**********************************************!*\
  !*** ./src/app/google/google.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<br>\n<div class=\"g-signin2\" data-onsuccess=\"onSignIn\" \ndata-theme=\"dark\">\n<br>\n</div>\n<p>\n    google!\n</p>"

/***/ }),

/***/ "./src/app/google/google.component.ts":
/*!********************************************!*\
  !*** ./src/app/google/google.component.ts ***!
  \********************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google.service */ "./src/app/google/google.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleComponent = /** @class */ (function () {
    function GoogleComponent(googleService) {
        this.googleService = googleService;
    }
    GoogleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleService.loadGapi().subscribe();
        window.onSignIn = function (googleUser) { return _this.onSignIn(googleUser); };
    };
    GoogleComponent.prototype.onSignIn = function (googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId());
        // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    };
    GoogleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google',
            template: __webpack_require__(/*! ./google.component.html */ "./src/app/google/google.component.html"),
            styles: [__webpack_require__(/*! ./google.component.css */ "./src/app/google/google.component.css")]
        }),
        __metadata("design:paramtypes", [_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"]])
    ], GoogleComponent);
    return GoogleComponent;
}());



/***/ }),

/***/ "./src/app/google/google.service.ts":
/*!******************************************!*\
  !*** ./src/app/google/google.service.ts ***!
  \******************************************/
/*! exports provided: GoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// From https://github.com/rubenCodeforges/ng-gapi/blob/master/src/GoogleApiService.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleService = /** @class */ (function () {
    function GoogleService() {
        this.gapiUrl = 'https://apis.google.com/js/platform.js';
    }
    GoogleService.prototype.loadGapi = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var node = document.createElement('script');
            node.src = _this.gapiUrl;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0]
                .appendChild(node);
            node.onload = function () {
                observer.next(true);
                observer.complete();
            };
        });
    };
    GoogleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GoogleService);
    return GoogleService;
}());



/***/ }),

/***/ "./src/app/hello.component.ts":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hello',
            template: "<h1>The {{name}}</h1>",
            styles: ["h1 { font-weight: normal; }"]
        })
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/order-edit/order-edit-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/order-edit/order-edit-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditRoutingModule", function() { return OrderEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-edit.component */ "./src/app/order-edit/order-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'edit/:id', component: _order_edit_component__WEBPACK_IMPORTED_MODULE_2__["OrderEditComponent"] }
];
var OrderEditRoutingModule = /** @class */ (function () {
    function OrderEditRoutingModule() {
    }
    OrderEditRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], OrderEditRoutingModule);
    return OrderEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/order-edit/order-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-edit/order-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floating-box {\n    \n    display: inline-block;\n    width: 250px;\n    margin: 10px; \n    vertical-align: top;\n}"

/***/ }),

/***/ "./src/app/order-edit/order-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-edit/order-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<mat-toolbar color=\"primary\">\n\t<p>Edit order #{{order.id}}</p>\n</mat-toolbar>\n<br>\n<section>\n\t<div class=\"floating-box\">\n\t\t<mat-card>\n\t\t\t<form>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput placeholder=\"Customer Name\" [(ngModel)]=\"editedOrder.customerName\" name=\"customerName\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput placeholder=\"Product Code\" [(ngModel)]=\"editedOrder.productCode\" name=\"productCode\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t\t\t<input matInput placeholder=\"Units Ordered\" [(ngModel)]=\"editedOrder.unitsOrdered\" name=\"unitsOrdered\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t\t\t<input matInput placeholder=\"Unit Price\" [(ngModel)]=\"editedOrder.unitPrice\" name=\"unitPrice\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t\t\t<input matInput placeholder=\"Status\" [(ngModel)]=\"editedOrder.status\" name=\"status\">\n\t\t\t\t</mat-form-field>\n\t\t\t</form>\n\t\t\t<mat-card-actions>\n\t\t\t\t<button (click)=\"onSubmit()\" mat-button matTooltip=\"Save\"\n        [routerLink]=\"['/orders']\">\n      <mat-icon>save\n        </mat-icon>\n      </button>\n      <button mat-button matTooltip=\"Cancel\" \n      [routerLink]=\"['/orders']\">\n      <mat-icon>cancel\n        </mat-icon>\n      </button>\n\t\t\t</mat-card-actions>\n\t\t</mat-card>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/order-edit/order-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-edit/order-edit.component.ts ***!
  \****************************************************/
/*! exports provided: OrderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function() { return OrderEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _orders_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders/order */ "./src/app/orders/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.editedOrder = new _orders_order__WEBPACK_IMPORTED_MODULE_3__["Order"](); // the edited version
    }
    OrderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("params: " + this.route.params == null)
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                //console.log("params id: " + params['id']);
                var id = +params['id'];
                //console.log("params id: " + id.toString());
                _this.dataService.getOrder(id)
                    .subscribe(function (order) {
                    _this.order = order;
                    _this.editedOrder.copyInto(order);
                });
            }
        });
    };
    OrderEditComponent.prototype.onSubmit = function () {
        //console.log("Saving order... " + JSON.stringify(this.editedOrder));
        this.order.id = this.editedOrder.id;
        this.order.customerName = this.editedOrder.customerName;
        this.order.productCode = this.editedOrder.productCode;
        this.order.unitsOrdered = this.editedOrder.unitsOrdered;
        this.order.unitPrice = this.editedOrder.unitPrice;
        this.order.status = this.editedOrder.status;
        this.order.updatedAt = new Date();
        this.order.temporary = false;
        //console.log("form: " + JSON.stringify(form.value))
    };
    OrderEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-edit',
            template: __webpack_require__(/*! ./order-edit.component.html */ "./src/app/order-edit/order-edit.component.html"),
            styles: [__webpack_require__(/*! ./order-edit.component.css */ "./src/app/order-edit/order-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrderEditComponent);
    return OrderEditComponent;
}());



/***/ }),

/***/ "./src/app/orders/order.ts":
/*!*********************************!*\
  !*** ./src/app/orders/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
        this.temporary = false;
    }
    Order.prototype.copyInto = function (order) {
        this.id = order.id;
        this.customerName = order.customerName;
        this.productCode = order.productCode;
        this.unitsOrdered = order.unitsOrdered;
        this.unitPrice = order.unitPrice;
        this.status = order.status;
        this.createdAt = order.createdAt;
        this.updatedAt = order.updatedAt;
        this.temporary = order.temporary;
    };
    return Order;
}());



/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';


var ordersRoutes = [
    { path: 'orders', component: _orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"] }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ordersRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n.floating-box {\n    \n    display: inline-block;\n    width: 250px;\n    margin: 10px; \n    vertical-align: top;\n}\n.ordersToolbar {\n  color: black;\n  background-color: white;\n}\n.add-order-button {\n  color: red;\n}\n\n"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<mat-toolbar class=\"ordersToolbar\" color=\"primary\">\n\t<p>Customer Order System</p>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"add-order-button\" mat-icon-button matTooltip=\"Add\"\n  (click)=\"addNewOrder()\">\n\t<mat-icon>add\n\t</mat-icon>\n  </button>\n\t<button mat-icon-button matTooltip=\"Options\"\n  [matMenuTriggerFor]=\"optionsMenu\">\n\t<mat-icon>menu\n\t</mat-icon>\n  </button>\n  <mat-menu #optionsMenu=\"matMenu\">\n  <button (click)=\"sortByOrderNumber()\" \n  mat-menu-item>Sort by Order Number</button>\n  <button (click)=\"sortByPrice()\"\n  mat-menu-item>Sort by Price</button>\n</mat-menu>\n</mat-toolbar>\n\n<section>\n\n\t<div class=\"floating-box\" *ngFor=\"let order of orders\">\n\t\t<mat-card>\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>Order #{{order.id}}\n\t\t\t\t</mat-card-title>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<table mat-table class=\"order-details\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Customer</th>\n\t\t\t\t\t\t<td>{{order.customerName}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Product code</th>\n\t\t\t\t\t\t<td>{{order.productCode}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Units ordered</th>\n\t\t\t\t\t\t<td>{{order.unitsOrdered}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Unit price (USD)</th>\n\t\t\t\t\t\t<td>{{order.unitPrice}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t<td>{{order.status}}</td>\n\t\t\t\t\t</tr>\n          <tr>\n\t\t\t\t\t\t<th>Created</th>\n\t\t\t\t\t\t<td>{{order.createdAt.toLocaleString('en-GB')}}</td>\n\t\t\t\t\t</tr>\n          <tr>\n\t\t\t\t\t\t<th>Updated</th>\n\t\t\t\t\t\t<td>{{order.updatedAt.toLocaleString('en-GB')}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-actions>\n\t\t\t\t<button mat-icon-button matTooltip=\"Edit\"\n        [routerLink]=\"['/edit', order.id]\">\n      <mat-icon>edit\n        </mat-icon>\n      </button>\n\t\t\t\t<button mat-icon-button matTooltip=\"Delete\"\n        (click)=\"onDelete(order.id)\">\n      <mat-icon>delete\n        </mat-icon>\n        </button>\n\t\t\t</mat-card-actions>\n\t\t</mat-card>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alasql */ "./node_modules/alasql/dist/alasql.min.js");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alasql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order */ "./src/app/orders/order.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.orders = new Array();
    }
    OrdersComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //console.log("onInit called");
                    return [4 /*yield*/, this.dataService.getOrders().subscribe(function (data) {
                            //console.log(JSON.stringify(data));
                            _this.jsonOrders = data;
                            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                var order = data_1[_i];
                                var o = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
                                o.copyInto(order);
                                _this.orders.push(o);
                                //console.log(JSON.stringify(order));
                            }
                        })];
                    case 1:
                        //console.log("onInit called");
                        _a.sent();
                        // I don't know if this is really needed because it's
                        // already in the orders array.
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_1__["promise"]("drop table if exists t_orders")];
                    case 2:
                        // I don't know if this is really needed because it's
                        // already in the orders array.
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_1__["promise"]("create table t_orders ("
                                + "id int NOT NULL PRIMARY KEY, "
                                + "customerName string, "
                                + "productCode string, "
                                + "unitsOrdered int, "
                                + "unitPrice number, "
                                + "status string, "
                                + "createdAt date, "
                                + "updatedAt date)")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, alasql__WEBPACK_IMPORTED_MODULE_1__["promise"]("insert into t_orders select * from ?", [this.jsonOrders])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersComponent.prototype.sortByOrderNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //console.log("sorting by order number");
                this.orders.sort(function (a, b) {
                    if (a.id > b.id)
                        return 1;
                    if (a.id < b.id)
                        return -1;
                    return 0;
                });
                return [2 /*return*/];
            });
        });
    };
    OrdersComponent.prototype.sortByPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //console.log("sorting by price");
                this.orders.sort(function (a, b) {
                    if (a.unitPrice > b.unitPrice)
                        return 1;
                    if (a.unitPrice < b.unitPrice)
                        return -1;
                    return 0;
                });
                return [2 /*return*/];
            });
        });
    };
    OrdersComponent.prototype.onDelete = function (orderId) {
        //console.log("deleting order " + orderId.toString());
        //console.log("length of orders before delete: " + this.orders.length.toString());
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id == orderId) {
                this.orders.splice(i, 1);
                this.dataService.deleteOrderByIndex(i);
            }
        }
        //console.log("length of orders after delete: " + this.orders.length.toString());
    };
    OrdersComponent.prototype.addNewOrder = function () {
        // find the first available order number
        var taken = new Array();
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            taken.push(order.id);
        }
        var id = 1;
        while (taken.indexOf(id) > -1) {
            id++;
        }
        //console.log("Adding new order number " + id.toString());
        var newOrder = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        newOrder.id = id;
        newOrder.customerName = "customer name";
        newOrder.productCode = "FO-100";
        newOrder.unitsOrdered = 0;
        newOrder.unitPrice = 0;
        newOrder.status = "NEW";
        newOrder.createdAt = new Date();
        newOrder.updatedAt = new Date();
        newOrder.temporary = true;
        this.orders.push(newOrder);
        this.dataService.addOrder(newOrder);
        this.router.navigate(["/edit", id]);
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OrdersComponent);
    return OrdersComponent;
}()); // end of OrdersComponent class



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _assets_json_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json-orders */ "./src/assets/json-orders.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService() {
        this.orders = new Array();
        var jo = new _assets_json_orders__WEBPACK_IMPORTED_MODULE_2__["JsonOrders"]();
        this.orders = jo.Orders;
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            if (order.temporary == undefined) {
                order.temporary = false;
            }
            //console.log("temp: " + order.temporary.toString());
        }
    }
    DataService.prototype.getOrders = function () {
        // Remove temporary orders. This removes orders where
        // New was called but then cancelled.
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].temporary == true) {
                this.orders.splice(i, 1);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.orders);
    };
    DataService.prototype.getOrder = function (id) {
        //console.log("id: " + id.toString());
        //let orders: Array<Order> = jsonOrders;
        var order = this.orders
            .filter(function (dataItem) { return (dataItem.id === id); })[0];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(order);
    };
    DataService.prototype.addOrder = function (order) {
        this.orders.push(order);
    };
    DataService.prototype.deleteOrderByIndex = function (index) {
        this.orders.splice(index, 1);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/assets/json-orders.ts":
/*!***********************************!*\
  !*** ./src/assets/json-orders.ts ***!
  \***********************************/
/*! exports provided: JsonOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonOrders", function() { return JsonOrders; });
/* harmony import */ var _app_orders_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/orders/order */ "./src/app/orders/order.ts");

var JsonOrders = /** @class */ (function () {
    function JsonOrders() {
        this.Orders = new Array();
        this.jsonOrders = [
            { "id": 1, "customerName": "Alice's Antiques", "productCode": "FOO-100", "unitsOrdered": 25, "unitPrice": 12.5, "status": "DELIVERED", "createdAt": "2016-05-09 14:39:12.849 +00:00", "updatedAt": "2016-05-09 15:15:15.922 +00:00" },
            { "id": 2, "customerName": "Bob's Brewery", "productCode": "FOO-200", "unitsOrdered": 60, "unitPrice": 18.75, "status": "SHIPPED", "createdAt": "2016-05-09 14:40:01.495 +00:00", "updatedAt": "2016-05-09 15:15:07.999 +00:00" },
            { "id": 3, "customerName": "Carol's Car Wash", "productCode": "FOO-100", "unitsOrdered": 100, "unitPrice": 9.25, "status": "SHIPPED", "createdAt": "2016-05-09 14:40:43.407 +00:00", "updatedAt": "2016-05-09 15:15:24.847 +00:00" },
            { "id": 4, "customerName": "David's Dog Grooming", "productCode": "FOO-250", "unitsOrdered": 15, "unitPrice": 29.95, "status": "PENDING", "createdAt": "2016-05-09 14:41:33.081 +00:00", "updatedAt": "2016-05-09 14:41:33.081 +00:00" },
            { "id": 5, "customerName": "Elizabeth's Eatery", "productCode": "FOO-100", "unitsOrdered": 35, "unitPrice": 10.95, "status": "PENDING", "createdAt": "2016-05-09 14:43:12.990 +00:00", "updatedAt": "2016-05-09 14:43:12.990 +00:00" }
        ];
        for (var _i = 0, _a = this.jsonOrders; _i < _a.length; _i++) {
            var jo = _a[_i];
            var o = new _app_orders_order__WEBPACK_IMPORTED_MODULE_0__["Order"]();
            o.id = jo.id;
            o.customerName = jo.customerName;
            o.productCode = jo.productCode;
            o.unitsOrdered = jo.unitsOrdered;
            o.unitPrice = jo.unitPrice;
            o.status = jo.status;
            o.createdAt = new Date(jo.createdAt);
            o.updatedAt = new Date(jo.updatedAt);
            o.temporary = false;
            this.Orders.push(o);
        }
    }
    return JsonOrders;
}());

/*

[
{"id":1,"customerName":"Alice's Antiques","productCode":"FOO-100","unitsOrdered":25,"unitPrice":12.5,"status":"DELIVERED","createdAt":"2016-05-09 14:39:12.849 +00:00","updatedAt":"2016-05-09 15:15:15.922 +00:00"},
{"id":2,"customerName":"Bob's Brewery","productCode":"FOO-200","unitsOrdered":60,"unitPrice":18.75,"status":"SHIPPED","createdAt":"2016-05-09 14:40:01.495 +00:00","updatedAt":"2016-05-09 15:15:07.999 +00:00"},
{"id":3,"customerName":"Carol's Car Wash","productCode":"FOO-100","unitsOrdered":100,"unitPrice":9.25,"status":"SHIPPED","createdAt":"2016-05-09 14:40:43.407 +00:00","updatedAt":"2016-05-09 15:15:24.847 +00:00"},
{"id":4,"customerName":"David's Dog Grooming","productCode":"FOO-250","unitsOrdered":15,"unitPrice":29.95,"status":"PENDING","createdAt":"2016-05-09 14:41:33.081 +00:00","updatedAt":"2016-05-09 14:41:33.081 +00:00"},
{"id":5,"customerName":"Elizabeth's Eatery","productCode":"FOO-100","unitsOrdered":35,"unitPrice":10.95,"status":"PENDING","createdAt":"2016-05-09 14:43:12.990 +00:00","updatedAt":"2016-05-09 14:43:12.990 +00:00"}
]

,"customerName":"Alice's Antiques","productCode":"FOO-100","unitsOrdered":25,"unitPrice":12.5,"status":"DELIVERED","createdAt":1462804752849,"updatedAt":1462806915922,"temporary":false



    */ 


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
// client id:
// 492755457190-ccvd44h31u9t4043g72jlvpk2dsel205.apps.googleusercontent.com 




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/david/local/dev/codelabs-sheetsapi-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map