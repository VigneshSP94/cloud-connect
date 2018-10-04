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

/***/ "./src/app/account-filter.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/account-filter.pipe.ts ***!
  \****************************************/
/*! exports provided: AccountFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFilterPipe", function() { return AccountFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccountFilterPipe = /** @class */ (function () {
    function AccountFilterPipe() {
    }
    AccountFilterPipe.prototype.transform = function (instances, Ac_filter, In_filter) {
        if (instances && instances.length) {
            return instances.filter(function (instance) {
                if (Ac_filter && instance.Account_Name.toLowerCase().indexOf(Ac_filter.toLowerCase()) === -1) {
                    return false;
                }
                if (In_filter && instance.Instance_ID.toLowerCase().indexOf(In_filter.toLowerCase()) === -1) {
                    return false;
                }
                return true;
            });
        }
        /**
        if (!instances || !Ac_filter || !In_filter){
            return instances
        }
  
        if (Ac_filter.length > 0){
          return instances.filter(account => account.Account_Name.toLowerCase().
          indexOf(Ac_filter.toLowerCase()) !== -1);
        }
  
        if (In_filter.length > 0){
          return instances.filter(instance => instance.Instance_ID.toLowerCase().
          indexOf(Ac_filter.toLowerCase()) !== -1);
        }
  
    }*/
    };
    AccountFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'accountFilter'
        })
    ], AccountFilterPipe);
    return AccountFilterPipe;
}());



/***/ }),

/***/ "./src/app/accounts/accounts.component.css":
/*!*************************************************!*\
  !*** ./src/app/accounts/accounts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accounts/accounts.component.html":
/*!**************************************************!*\
  !*** ./src/app/accounts/accounts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    #funcs {\n            position: absolute;\n            right:0;\n            top:0;\n        }\n    </style>\n    \n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n          rel=\"stylesheet\">\n    <p></p>\n    \n    <div id=\"funcs\">\n        <button class=\"btn btn-sm btn-primary mr-2\" data-toggle=\"modal\" data-target=\"#addModal\"><i class=\"material-icons\">add</i></button>\n        <button class=\"btn btn-sm btn-primary mr-2\"><i class=\"material-icons\">autorenew</i></button>\n    </div>\n    \n    <table class=\"table table-inverse table-hover\" id=\"accounts_table\">\n        <thead>\n          <tr>\n            <th scope=\"col\"><font color=\"#007BFF\">#</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\">Account Name</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\">Location</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\">AWSID</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\">Secret Key</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\"></font></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of Accounts\">\n            <td>{{data[\"Account_ID\"]}}</td>\n            <td>{{data[\"Account_Name\"]}}</td>\n            <td>{{data[\"Region\"]}}</td>\n            <td>{{data[\"AWS_ID\"]}}</td>\n            <td>{{data[\"AWS_KEY\"]}}</td>\n            <td><button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#editModal\"\n                (click)=\"getTabledata(data)\"><i class=\"material-icons\">edit</i></button></td>\n          </tr>\n        </tbody>\n        <button class=\"btn btn-primary\" (click)=\"getAccs()\" >checkit</button>\n      </table>\n    \n      <!-- The Modal -->\n    <div class=\"modal\" id=\"editModal\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n    \n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit Account</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n    \n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label for=\"\">Account Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]='acdetails.Account_Name' name=\"Account_Name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Location</label>\n                    <select class=\"form-control\" [(ngModel)]=\"acdetails.Region\" name=\"Region\" required>\n                        <option *ngFor=\"let region of endPoints\">{{region}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">ID</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]='acdetails.AWS_ID' name=\"AWS_ID\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Key</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]='acdetails.AWS_KEY' name=\"AWS_KEY\">\n                </div>\n            </div>\n    \n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary btn-lg mr-2\" data-dismiss=\"modal\">Close</button>\n                <button (click)=\"summafunc()\" type=\"button\" class=\"btn btn-primary btn-lg\">Update</button>\n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n      <!-- Add Account Modal -->\n    \n      <div class=\"modal\" id=\"addModal\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n    \n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Add Account</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n    \n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                    <form>\n                    <div class=\"form-group\">\n                        <label for=\"\">Account Name</label>\n                        <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"newaccount.Account_Name\" name=\"Account_Name\" required>\n                    </div>\n                    <!--\n                        <div class=\"form-group\">\n                        <label for=\"\">Location</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newaccount.Region\" name=\"Region\" required>\n                    </div>\n                    -->\n                    <div class=\"form-group\">\n                        <label for=\"\">Location</label>\n                        <select class=\"form-control\" [(ngModel)]=\"newaccount.Region\" name=\"Region\" required>\n                            <option *ngFor=\"let region of endPoints\">{{region}}</option>\n                        </select>\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <label for=\"\">ID</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newaccount.AWS_ID\" name=\"AWS_ID\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Key</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newaccount.AWS_KEY\" name=\"AWS_KEY\" required>\n                    </div>\n                    </form>\n                </div>\n    \n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-secondary btn-lg mr-2\" data-dismiss=\"modal\">Close</button>\n                    <button (click)=\"addAcc()\" type=\"button\" class=\"btn btn-primary btn-lg\">Add</button>\n                </div>\n    \n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ "./src/app/accounts/accounts.component.ts":
/*!************************************************!*\
  !*** ./src/app/accounts/accounts.component.ts ***!
  \************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpda.service */ "./src/app/httpda.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountsComponent = /** @class */ (function () {
    function AccountsComponent(http, router) {
        this.http = http;
        this.router = router;
        this.acdetails = {};
        this.newaccount = {};
        /** List of Available AWS Endpoint and their Regions*/
        this.endPoints = ["us-east-2", "us-east-1", "us-west-1", "us-west-2",
            "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2",
            "ap-northeast-1", "ca-central-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-west-3",
            "sa-east-1"];
    }
    AccountsComponent.prototype.ngOnInit = function () {
        this.getAccs();
    };
    /** This funtions gets the Accounts from the Backend server and store/represents to the users. */
    AccountsComponent.prototype.getAccs = function () {
        var _this = this;
        if (this.http.loggedIn() === false) {
            this.router.navigate(['/login']);
        }
        this.observableAccounts = this.http.getAccounts();
        this.observableAccounts.subscribe(function (Accounts) { return _this.Accounts = Accounts; });
        if (this.Accounts['message']) {
            this.router.navigate(['/login']);
        }
    };
    AccountsComponent.prototype.getTabledata = function (data) {
        this.acdetails = data;
    };
    /** This funtion is used to post a new AWS account to the Backend. */
    AccountsComponent.prototype.addAcc = function () {
        this.http.addAcc(this.newaccount).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    AccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(/*! ./accounts.component.html */ "./src/app/accounts/accounts.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.css */ "./src/app/accounts/accounts.component.css")]
        }),
        __metadata("design:paramtypes", [_httpda_service__WEBPACK_IMPORTED_MODULE_1__["HttpdaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-routing></app-routing>\n<router-outlet></router-outlet>\n\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _networks_networks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./networks/networks.component */ "./src/app/networks/networks.component.ts");
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _instances_instances_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instances/instances.component */ "./src/app/instances/instances.component.ts");
/* harmony import */ var _routing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing.component */ "./src/app/routing.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _account_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account-filter.pipe */ "./src/app/account-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { InstanceFilterPipe } from './instance-filter.pipe'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _networks_networks_component__WEBPACK_IMPORTED_MODULE_6__["NetworksComponent"],
                _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_7__["AccountsComponent"],
                _instances_instances_component__WEBPACK_IMPORTED_MODULE_8__["InstancesComponent"],
                _routing_component__WEBPACK_IMPORTED_MODULE_9__["RoutingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _account_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["AccountFilterPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _instances_instances_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instances/instances.component */ "./src/app/instances/instances.component.ts");
/* harmony import */ var _networks_networks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networks/networks.component */ "./src/app/networks/networks.component.ts");
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");






var APP_ROUTES = [
    { path: '', redirectTo: '/instances', pathMatch: 'full' },
    { path: "instances", component: _instances_instances_component__WEBPACK_IMPORTED_MODULE_1__["InstancesComponent"] },
    { path: "networks", component: _networks_networks_component__WEBPACK_IMPORTED_MODULE_2__["NetworksComponent"] },
    { path: "accounts", component: _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "users", component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/httpda.service.ts":
/*!***********************************!*\
  !*** ./src/app/httpda.service.ts ***!
  \***********************************/
/*! exports provided: HttpdaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpdaService", function() { return HttpdaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpdaService = /** @class */ (function () {
    function HttpdaService(http, httpC, _router) {
        this.http = http;
        this.httpC = httpC;
        this._router = _router;
        this.serverUrl = 'http://your-backend-url/';
    }
    HttpdaService.prototype.getNetworks = function () {
        return this.httpC.get(this.serverUrl + 'networks');
    };
    HttpdaService.prototype.getInstances = function () {
        return this.httpC.get(this.serverUrl + 'instances');
    };
    HttpdaService.prototype.insControls = function (instancelist, action) {
        return this.httpC.post(this.serverUrl + 'instances/control', { "instance_id": instancelist, "action": action }).map(this.extractData);
    };
    HttpdaService.prototype.login = function (user) {
        return this.http.post(this.serverUrl + 'login', user).map(this.extractData);
    };
    HttpdaService.prototype.getToken = function () {
        return localStorage.getItem('cctoken');
    };
    HttpdaService.prototype.loggedIn = function () {
        return !!localStorage.getItem('cctoken');
    };
    HttpdaService.prototype.getAccounts = function () {
        return this.httpC.get(this.serverUrl + 'accounts');
    };
    HttpdaService.prototype.getUsers = function () {
        return this.httpC.get(this.serverUrl + 'get_users');
    };
    HttpdaService.prototype.addAcc = function (accdet) {
        return this.httpC.post(this.serverUrl + 'add_aws_acc', accdet);
    };
    HttpdaService.prototype.addUser = function (userdet) {
        return this.httpC.post(this.serverUrl + 'add_user', userdet);
    };
    HttpdaService.prototype.updateUSer = function (userdet) {
        return this.httpC.post(this.serverUrl + 'edit_user', userdet);
    };
    HttpdaService.prototype.checkErr = function (err) {
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            if (err.status === 401) {
                this._router.navigate(['/login']);
                localStorage.removeItem('cctoken');
            }
        }
    };
    HttpdaService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    HttpdaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpdaService);
    return HttpdaService;
}());



/***/ }),

/***/ "./src/app/instances/instances.component.css":
/*!***************************************************!*\
  !*** ./src/app/instances/instances.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/instances/instances.component.html":
/*!****************************************************!*\
  !*** ./src/app/instances/instances.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n        #refresh {\n        position: absolute;\n        right:0;\n        top:0;\n        }\n        #search {\n        border-right: 2px;\n        border-left: 2px;\n        }\n     </style>\n     <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n        rel=\"stylesheet\">\n     <div id=\"filters\">\n     </div>\n     <div id=\"search\" class=\"form-group\">\n        <div style=\"display: flex;\" >\n           <input name=\"search\" type=\"text\" class=\"form-control col-xs-2 mr-5 ml-5\" [(ngModel)]='Ac_filter' placeholder=\"Search by Account\"\n           style=\"width: 500px;\">\n           <input name=\"search\" type=\"text\" class=\"form-control col-xs-2\" [(ngModel)]='In_filter' placeholder=\"Search by Instance\"\n           style=\"width: 500px;\">\n        </div>\n     </div>\n     <div id=\"refresh\">\n        <!--<button class=\"btn btn-sm btn-primary mr-2\" (click)=\"filters()\">Show Filter</button>-->\n        <button class=\"btn btn-sm btn-primary mr-2\" (click)=\"getIns()\"><i class=\"material-icons\">autorenew</i></button>\n        <select class=\"btn btn-primary mr-2\" id=\"req_type\" [(ngModel)]=\"action\" name=\"action\">\n            <option value=\"terminate\">Terminate</option>\n            <option value=\"start\">Start</option>\n            <option value=\"stop\">Stop</option>\n            <option value=\"reboot\">Reboot</option>\n        </select>\n        <!--\n           <button *ngIf=\"action_instances.length > 0\" class=\"btn btn-primary btn-sm\"><i class=\"material-icons\">done</i></button>\n           <button *ngIf=\"action_instances.length == 0\" class=\"btn btn-primary btn-sm\" disabled><i class=\"material-icons\">done</i></button>\n           -->\n        <button (click)=\"onSelect()\" [disabled]=\"action == ''\" class=\"btn btn-primary btn-sm\"><i class=\"material-icons\">done</i></button>\n     </div>\n     <table class=\"table table-inverse table-hover\" id=\"instance_table\">\n        <thead>\n           <tr>\n              <th scope=\"col\"><font color=\"#007BFF\">Select</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">IP Addr</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">Instance Type</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">Instance ID</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">Public IP</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">Private DNS</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">Subnet ID</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">Status</font></th>\n              <th scope=\"col\"><font color=\"#007BFF\">Account</font></th>\n           </tr>\n        </thead>\n        <tbody>\n           <tr *ngFor=\"let data of instances | accountFilter: Ac_filter:In_filter\">\n              <td><input type=\"checkbox\"></td>\n              <td>{{data[\"IP\"]}}</td>\n              <td>{{data[\"Instance Type\"]}}</td>\n              <td>{{data[\"Instance_ID\"]}}</td>\n              <td>{{data[\"Public IP\"]}}</td>\n              <td>{{data[\"Private DNS\"]}}</td>\n              <td>{{data[\"Subnet ID\"]}}</td>\n              <td>{{data[\"Status\"]}}</td>\n              <td>{{data[\"Account_Name\"]}}</td>\n           </tr>\n        </tbody>\n     </table>"

/***/ }),

/***/ "./src/app/instances/instances.component.ts":
/*!**************************************************!*\
  !*** ./src/app/instances/instances.component.ts ***!
  \**************************************************/
/*! exports provided: InstancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstancesComponent", function() { return InstancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpda.service */ "./src/app/httpda.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstancesComponent = /** @class */ (function () {
    function InstancesComponent(httpservice, _router) {
        this.httpservice = httpservice;
        this._router = _router;
        this.action_instances = [];
        this.action = '';
        this.Ac_filter = '';
        this.In_filter = '';
    }
    InstancesComponent.prototype.ngOnInit = function () {
        this.getIns();
    };
    InstancesComponent.prototype.getIns = function () {
        var _this = this;
        if (this.httpservice.loggedIn() === false) {
            this._router.navigate(['/login']);
        }
        this.observableInstances = this.httpservice.getInstances();
        this.observableInstances.subscribe(function (instances) { return _this.instances = instances; }, function (err) { return _this.httpservice.checkErr(err); });
    };
    InstancesComponent.prototype.controlIns = function () {
        var _this = this;
        this.obsInsControl = this.httpservice.insControls(this.action_instances, this.action);
        this.obsInsControl.subscribe(function (wtf) { return _this.wtf = wtf; });
    };
    InstancesComponent.prototype.onSelect = function () {
        // We get the table data from the html and find if the checkbox is active.
        // The rows of the tables can be accessed by "rows" object and cells can be accessed using "cells" object.
        this.table_data = document.getElementById('instance_table');
        // this.checkbool = <HTMLInputElement>this.table_data.rows[1].cells[0]
        // console.log(this.checkbool.checked)
        /**if (this.table_data.rows[1].cells[0].children[0].checked){
          console.log("it is checked")
        }
    
        else{
          console.log("It isn't checked")
        }*/
        for (var i = 1, row = void 0; row = this.table_data.rows[i]; i++) {
            // console.log(row.cells[2][1])
            if (i === this.table_data.rows.length) {
                break;
            }
            if (row.cells[0].children[0].checked) {
                // this.ins = row.cells[3]["innerText"]
                // this.action_instances.push(this.ins)
                this.action_instances.push(row.cells[3]['innerText']);
            }
        }
        console.log(this.action_instances);
        this.controlIns();
        this.action_instances = [];
    };
    InstancesComponent.prototype.filterit = function () {
        console.log(this.Ac_filter);
    };
    InstancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instances',
            template: __webpack_require__(/*! ./instances.component.html */ "./src/app/instances/instances.component.html"),
            styles: [__webpack_require__(/*! ./instances.component.css */ "./src/app/instances/instances.component.css")]
        }),
        __metadata("design:paramtypes", [_httpda_service__WEBPACK_IMPORTED_MODULE_1__["HttpdaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InstancesComponent);
    return InstancesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n        <div class=\"row\">\n          <div class=\"col-md-6 mx-auto\">\n            <span class=\"anchor\" id=\"formLogin\"></span>\n      \n            <!-- form card login -->\n            <div class=\"card rounded-0\">\n              <div class=\"card-header\">\n                <h3 class=\"mb-0\">Login</h3>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"uname1\">Username</label>\n                    <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.email\" name=\"username\" required>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Password</label>\n                    <input type=\"password\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.password\" name=\"password\" required>\n                  </div>\n                  <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-primary btn-lg float-right\">Login</button>\n                </form>\n              </div>\n              <!--/card-block-->\n            </div>\n            <!-- /form card login -->\n      \n          </div>\n      \n      \n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpda.service */ "./src/app/httpda.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpservice, router) {
        this.httpservice = httpservice;
        this.router = router;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.httpservice.login(this.loginUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('cctoken', res.cctoken);
            _this.router.navigate(['/instances']);
        }, function (err) { return console.log(err); });
    };
    LoginComponent.prototype.getToken = function () {
        return localStorage.getItem('cctoken');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_httpda_service__WEBPACK_IMPORTED_MODULE_1__["HttpdaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/networks/networks.component.css":
/*!*************************************************!*\
  !*** ./src/app/networks/networks.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/networks/networks.component.html":
/*!**************************************************!*\
  !*** ./src/app/networks/networks.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .right-menu{\n    border-left:0px;\n    border-right:100px;\n  }\n</style>\n\n<div class=\"right-menu\">\n  <button class=\"btn btn-sm btn-primary\" (click)=\"getIt()\">Refresh</button>\n</div>\n\n<table class=\"table table-inverse table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\"><font color=\"#007BFF\">#</font></th>\n      <th scope=\"col\"><font color=\"#007BFF\">Network</font></th>\n      <th scope=\"col\"><font color=\"#007BFF\">Subnet ID</font></th>\n      <th scope=\"col\"><font color=\"#007BFF\">VPC ID</font></th>\n      <th scope=\"col\"><font color=\"#007BFF\">Account Name</font></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of networks\">\n      <td>{{data[\"SNO\"]}}</td>\n      <td>{{data[\"Network\"]}}</td>\n      <td>{{data[\"Subnet ID\"]}}</td>\n      <td>{{data[\"VPC ID\"]}}</td>\n      <td>{{data[\"Account Name\"]}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/networks/networks.component.ts":
/*!************************************************!*\
  !*** ./src/app/networks/networks.component.ts ***!
  \************************************************/
/*! exports provided: NetworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworksComponent", function() { return NetworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpda.service */ "./src/app/httpda.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworksComponent = /** @class */ (function () {
    function NetworksComponent(httpservice, _router) {
        this.httpservice = httpservice;
        this._router = _router;
        this.yoNets = [];
    }
    NetworksComponent.prototype.ngOnInit = function () {
        this.getIt();
    };
    NetworksComponent.prototype.getIt = function () {
        var _this = this;
        if (this.httpservice.loggedIn() === false) {
            this._router.navigate(['/login']);
        }
        this.observableNetworks = this.httpservice.getNetworks();
        this.observableNetworks.subscribe(function (networks) { return _this.networks = networks; }, function (err) { return _this.httpservice.checkErr(err); });
        for (var _i = 0, _a = this.networks; _i < _a.length; _i++) {
            var i = _a[_i];
            this.yoNets.push(i["SNO"], i["Network"], i["Subnet ID"], i["VPC ID"]);
        }
        /*
        for (let i of this.yoNets) {
          console.log(i)
        }*/
    };
    NetworksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-networks',
            template: __webpack_require__(/*! ./networks.component.html */ "./src/app/networks/networks.component.html"),
            styles: [__webpack_require__(/*! ./networks.component.css */ "./src/app/networks/networks.component.css")]
        }),
        __metadata("design:paramtypes", [_httpda_service__WEBPACK_IMPORTED_MODULE_1__["HttpdaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NetworksComponent);
    return NetworksComponent;
}());



/***/ }),

/***/ "./src/app/routing.component.css":
/*!***************************************!*\
  !*** ./src/app/routing.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routing.component.html":
/*!****************************************!*\
  !*** ./src/app/routing.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-secondary ml-2\" *ngIf='loginstatus' (click)='logout()'><i class=\"material-icons\">\n    power_settings_new\n    </i></button>\n\n<div class=\"row\">\n    <div class=\"container\">\n        <ul class=\"nav nav-pills\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]='[\"/networks\"]'>Networks</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]='[\"/instances\"]'>Instances</a>\n            </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" href=\"#\">S3 Buckets</a>\n            </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]='[\"/accounts\"]'>Accounts</a>\n            </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]='[\"/users\"]'>Users</a>\n            </li>\n        </ul>\n    </div>\n</div>\n<p></p>"

/***/ }),

/***/ "./src/app/routing.component.ts":
/*!**************************************!*\
  !*** ./src/app/routing.component.ts ***!
  \**************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _httpda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpda.service */ "./src/app/httpda.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoutingComponent = /** @class */ (function () {
    function RoutingComponent(router, httpservice) {
        this.router = router;
        this.httpservice = httpservice;
    }
    RoutingComponent.prototype.ngOnInit = function () {
        if (this.httpservice.loggedIn() === true) {
            this.loginstatus = true;
        }
        else {
            this.loginstatus = false;
        }
    };
    RoutingComponent.prototype.logout = function () {
        localStorage.removeItem('cctoken');
        this.router.navigate(['/login']);
        this.ngOnInit();
    };
    RoutingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-routing',
            template: __webpack_require__(/*! ./routing.component.html */ "./src/app/routing.component.html"),
            styles: [__webpack_require__(/*! ./routing.component.css */ "./src/app/routing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _httpda_service__WEBPACK_IMPORTED_MODULE_2__["HttpdaService"]])
    ], RoutingComponent);
    return RoutingComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpda.service */ "./src/app/httpda.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var auth = this.injector.get(_httpda_service__WEBPACK_IMPORTED_MODULE_1__["HttpdaService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                "x-access-token": auth.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    #funcs {\n            position: absolute;\n            right:0;\n            top:0;\n        }\n    </style>\n    \n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n          rel=\"stylesheet\">\n    <p></p>\n    \n    <div id=\"funcs\">\n        <button class=\"btn btn-sm btn-primary mr-2\" data-toggle=\"modal\" data-target=\"#addModal\"><i class=\"material-icons\">add</i></button>\n        <button class=\"btn btn-sm btn-primary mr-2\"><i class=\"material-icons\">autorenew</i></button>\n    </div>\n    \n    <table class=\"table table-inverse table-hover\" id=\"accounts_table\">\n        <thead>\n          <tr>\n            <th scope=\"col\"><font color=\"#007BFF\">Username</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\">Email</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\">Password</font></th>\n            <th scope=\"col\"><font color=\"#007BFF\"></font></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of Users\">\n            <td>{{data[\"Username\"]}}</td>\n            <td>{{data[\"Email\"]}}</td>\n            <td>{{data[\"Password\"]}}</td>\n            <td><button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#editModal\"\n                (click)=\"getTabledata(data)\"><i class=\"material-icons\">edit</i></button></td>\n          </tr>\n        </tbody>\n        <button class=\"btn btn-primary\" (click)=\"getTabledata()\" >checkit</button>\n      </table>\n    \n    <div class=\"modal\" id=\"editModal\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n    \n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit Account</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n    \n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label for=\"\">Username</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]='eUsers.Username' name=\"Username\">\n                </div>\n                \n                <div class=\"form-group\">\n                    <label for=\"\">Email</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]='eUsers.Email' name=\"Email\" disabled>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Password</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]='eUsers.Password' name=\"Password\">\n                </div>\n            </div>\n    \n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary btn-lg mr-2\" data-dismiss=\"modal\">Close</button>\n                <button (click)=\"editUser()\" type=\"button\" class=\"btn btn-primary btn-lg\">Update</button>\n            </div>\n    \n          </div>\n        </div>\n      </div>\n    \n    \n    \n      <!-- Add Account Modal -->\n    \n      <div class=\"modal\" id=\"addModal\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n    \n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Add Account</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n    \n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                    <form>\n                    <div class=\"form-group\">\n                        <label for=\"\">Account Name</label>\n                        <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"userDetails.username\" name=\"Username\" required>\n                    </div>\n                    <!--\n                        <div class=\"form-group\">\n                        <label for=\"\">Location</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newaccount.Region\" name=\"Region\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Location</label>\n                        <select class=\"form-control\" [(ngModel)]=\"newaccount.Region\" name=\"Region\" required>\n                            <option *ngFor=\"let region of endPoints\">{{region}}</option>\n                        </select>\n                    </div>\n                    -->\n                    \n                    \n                    <div class=\"form-group\">\n                        <label for=\"\">ID</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.email\" name=\"email\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"\">Password</label>\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userDetails.password\" name=\"password\" required>\n                    </div>\n                    </form>\n                </div>\n    \n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-secondary btn-lg mr-2\" data-dismiss=\"modal\">Close</button>\n                    <button (click)=\"addUser()\" type=\"button\" class=\"btn btn-primary btn-lg\">Add</button>\n                </div>\n    \n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpda.service */ "./src/app/httpda.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, router) {
        this.http = http;
        this.router = router;
        this.userDetails = {}; /** New user details */
        this.eUsers = {}; /** EXisting user data from the selected table */
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        if (this.http.loggedIn() === false) {
            this.router.navigate(['/login']);
        }
        this.observableUsers = this.http.getUsers();
        this.observableUsers.subscribe(function (users) { return _this.Users = users; });
        if (this.Users['message']) {
            this.router.navigate(['/login']);
        }
    };
    UsersComponent.prototype.getTabledata = function (data) {
        this.eUsers = data;
    };
    UsersComponent.prototype.addUser = function () {
        this.http.addUser(this.userDetails).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    UsersComponent.prototype.editUser = function () {
        this.http.updateUSer(this.eUsers).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_httpda_service__WEBPACK_IMPORTED_MODULE_1__["HttpdaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersComponent);
    return UsersComponent;
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

module.exports = __webpack_require__(/*! /root/awsmanage/cc4/forgit/cloud-connect/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map