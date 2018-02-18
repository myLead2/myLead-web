webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n.ng-invalid.ng-touched:not(form){\n    border: 1px solid red;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_defaults_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/defaults/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_defaults_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/defaults/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_defaults_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/defaults/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_defaults_navbar_dash_navbar_dash_component__ = __webpack_require__("../../../../../src/app/components/defaults/navbar-dash/navbar-dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_defaults_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/defaults/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_send_csv_send_csv_component__ = __webpack_require__("../../../../../src/app/components/dashboard/send-csv/send-csv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//pages


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_defaults_sidebar_sidebar_component__["b" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_defaults_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_defaults_navbar_dash_navbar_dash_component__["a" /* NavbarDashComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_dashboard_send_csv_send_csv_component__["a" /* SendCsvComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_defaults_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_defaults_auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_file_upload__["FileSelectDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_20_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__authguard_guard__["a" /* AuthguardGuard */], __WEBPACK_IMPORTED_MODULE_14_ngx_cookie_service__["a" /* CookieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_defaults_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/defaults/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_send_csv_send_csv_component__ = __webpack_require__("../../../../../src/app/components/dashboard/send-csv/send-csv.component.ts");






var APP_ROUTS = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_defaults_auth_auth_component__["a" /* AuthComponent */]
    },
    {
        path: 'perfil',
        component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_user_profile_user_profile_component__["a" /* UserProfileComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'enviar',
        component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_send_csv_send_csv_component__["a" /* SendCsvComponent */]
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTS);


/***/ }),

/***/ "../../../../../src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardGuard = (function () {
    function AuthguardGuard(user) {
        this.user = user;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        if (this.user.getUserLoggedIn()) {
            return true;
        }
        return false;
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-sidebar></app-sidebar>\n  <div class=\"main-panel\" style=\"overflow-x:hidden\">\n    <div class=\"main-content\">\n\n      <app-navbar-dash></app-navbar-dash>\n\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n\n          <div *ngIf=\"showNumberRequets()\" class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header\" data-background-color=\"orange\">\n                <i class=\"material-icons\">insert_drive_file</i>\n              </div>\n              <div class=\"card-content\">\n                <p class=\"category\">Bases enviadas</p>\n                <h3 class=\"title\"> {{user.number_requests}} </h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">access_time</i>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"showNumberResults()\" class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header\" data-background-color=\"orange\">\n                <i class=\"material-icons\">done_all</i>\n              </div>\n              <div class=\"card-content\">\n                <p class=\"category\">Resultados</p>\n                <h3 class=\"title\"> {{user.number_results}} </h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">access_time</i>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"showProcessing()\" class=\"col-md-9\">\n            <div class=\"card\">\n              <div class=\"card-header\" data-background-color=\"blue\">\n                <h2> Sua base está sendo processada...</h2>\n              </div>\n              <!-- <div class=\"card-content\">\n                <h4 class=\"title\">Daily Sales</h4>\n                <p class=\"category\">\n                  <span class=\"text-success\">\n                    <i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n              </div> -->\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">access_time</i> Um email será enviado quando o processo terminar\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"showSend()\" class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\" data-background-color=\"blue\">\n                <h2> Envie sua base de Leads para análise</h2>\n              </div>\n              <div class=\"card-content\">\n                <h4>\n                  <p class=\"category\" style=\"cursor: pointer; text-transform: none; text-decoration: none;\">\n                    <a routerLink=\"/enviar\" class=\"text-success\">\n                      <i class=\"material-icons\">backup</i> Enviar base\n                    </a>\n                  </p>\n                </h4>\n              </div>\n              <!-- <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                </div>\n              </div> -->\n            </div>\n          </div>\n\n        </div>\n\n        <div *ngIf=\"showNumberResults()\" class=\"row\">\n          <div class=\"col-lg-12 col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\" data-background-color=\"orange\">\n                <h4 class=\"title\">SuperLeads</h4>\n                <p class=\"category\">Conheça quais são os seus leads que tem um grande potencial para se tornarem futuros clientes.</p>\n              </div>\n              <div class=\"card-content table-responsive\">\n                <table class=\"table table-hover\">\n                  <thead class=\"text-warning\">\n                    <tr>\n                      <th>Email</th>\n                      <th>Nome</th>\n                      \n                      <th style=\"text-align: right\">Chance de ser um cliente</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    \n                    <tr *ngFor=\"let item of leads\">\n                      <td>{{item.email}}</td>\n                      <td>{{item.name}}</td>\n                      \n                      <td style=\"text-align: right\">{{item.result * 100 | number : '1.2-2' }}%</td>\n                    </tr>\n\n\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as _ from "lodash";

var DashboardComponent = (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.user = {
            'number_results': 0,
            'number_requests': 0,
            'not_declarete': true
        };
    }
    DashboardComponent.prototype.showNumberRequets = function () {
        return this.user.number_requests && !this.user.not_declarete;
    };
    DashboardComponent.prototype.showNumberResults = function () {
        return this.user.number_results && !this.user.not_declarete;
    };
    DashboardComponent.prototype.showProcessing = function () {
        return !this.user.number_results && !this.user.not_declarete && this.user.number_requests;
    };
    DashboardComponent.prototype.showSend = function () {
        return !this.user.number_results && this.user.not_declarete && !this.user.number_requests;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserRequestData().then(function (res) {
            if (res.result[0].count) {
                _this.user.not_declarete = false;
                _this.user.number_requests = res.result[0].count;
            }
            _this.userService.getUserAnalitycData().then(function (resp) {
                console.log(resp);
                if (resp.result[0].count) {
                    _this.user.not_declarete = false;
                    _this.user.number_results = resp.result[0].count;
                    _this.userService.getSuperLeads().then(function (data) {
                        console.log(data.data[0].result);
                        _this.leads = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"])(data.data[0].result, ['name', 'result'], ['asc', 'desc']);
                    });
                }
            });
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/assets/sass/material-dashboard.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/send-csv/send-csv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-sidebar></app-sidebar>\n  <div class=\"main-panel\" style=\"overflow-x:hidden\">\n\n    <div class=\"main-content\">\n      <app-navbar-dash></app-navbar-dash>\n\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\" data-background-color=\"purple\">\n                <h2 class=\"title\">Envie sua base da Leads para análise</h2>\n                <p class=\"category\">Nossos algorítimos irão analisar sua base e calcular a chance que um futuro lead tem de ser um superLead</p>\n              </div>\n              <div class=\"card-content\">\n                <form method=\"POST\" id=\"form-csv-upload\" enctype=\"multipart/form-data\" >\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group form-black label-floating is-empty\">\n                        <label  style=\"width: 100%; color: #fff; font-weight: 700; cursor: pointer\" for=\"input\" class=\"btn lable-disable btn-success\">\n                          Selecionar Arquivo +\n                        </label>\n                        <input type=\"file\" [disabled]=\"status.isComplete || status.isUploading \" name=\"csvsendfile\" ng2FileSelect [uploader]=\"uploader\" style=\"cursor: pointer\"/>\n\n                      </div>\n                    </div>\n                  </div>\n                    <div class=\"clearfix\"></div>\n                </form>\n                <table class=\"table\">\n                    <thead>\n                    <tr>\n                        <th width=\"50%\">Nome do arquivo</th>\n                        <th style=\"text-align: right\">Ações</th>\n                        \n                    </tr>\n                    </thead>\n                    <tbody>\n                     \n                    <tr *ngFor=\"let item of uploader.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                        <td nowrap style=\"text-align: right\">\n                            <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                    (click)=\"upload()\" [disabled]=\"status.isComplete || status.isUploading \">\n                                    <i _ngcontent-c2=\"\" class=\"material-icons\">backup</i> Enviar\n                            </button>\n                \n                            <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                    (click)=\"item.remove()\">\n                                    <i _ngcontent-c2=\"\" class=\"material-icons\">delete</i> Deletar\n                            </button>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n\n                <div style=\"margin-top: 20px;\">\n                    <div>\n                        <span *ngIf=\"!status.isComplete\">Progresso:</span>\n                        <span *ngIf=\"status.isComplete\">Upload Completo</span>\n                        <div class=\"progress\" >\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                        </div>                        \n                    </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/send-csv/send-csv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendCsvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendCsvComponent = (function () {
    function SendCsvComponent(user, router, _service) {
        this.user = user;
        this.router = router;
        this._service = _service;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: this.user.getUploadUrl() });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.status = {
            'isComplete': false,
            'isUploading': false
        };
    }
    SendCsvComponent.prototype.ngOnInit = function () {
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
    };
    SendCsvComponent.prototype.upload = function () {
        var _this = this;
        var type = this.uploader.queue[0].file.type.split('/')[1];
        if (type == "csv") {
            this.status.isUploading = true;
            console.log();
            var form = '#form-csv-upload';
            this.user.uploadFile(form).then(function (res) {
                _this.uploader.queue.forEach(function (element) {
                    _this.status.isComplete = true;
                    _this.uploader.progress = 100;
                    $('.lable-disable ').addClass('disabled');
                    // this.router.navigate(['/dashboard']);
                    console.log(res);
                });
            });
        }
        else {
            alert('Formato de arquivo inválido, por favor selecione um arquivo do tipo "CSV"');
            this.uploader.queue[0].remove();
        }
    };
    SendCsvComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    SendCsvComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    SendCsvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-send-csv',
            template: __webpack_require__("../../../../../src/app/components/dashboard/send-csv/send-csv.component.html"),
            styles: [__webpack_require__("../../../../../src/assets/sass/material-dashboard.scss")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[ng2FileSelect]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], SendCsvComponent);
    return SendCsvComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-sidebar></app-sidebar>\n    <div class=\"main-panel\" style=\"overflow-x:hidden\">\n  \n      <div class=\"main-content\">\n        <app-navbar-dash></app-navbar-dash>\n  \n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                  <h4 class=\"title\">Profile</h4>\n                  <p class=\"category\">Complete your profile</p>\n                </div>\n                <div class=\"card-content\">\n                  <form>\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <div class=\"form-group form-black label-floating is-empty\">\n                          <input style=\"width: 100%\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"enterprise.nome\" type=\"text\" placeholder=\"Company\" class=\"form-control\" disabled>\n                        </div>\n                      </div>\n                      <div class=\"col-md-7\">\n                        <div class=\"form-group form-black label-floating is-empty\">\n                          <input style=\"width: 100%\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"enterprise.email\" type=\"email\" placeholder=\"Email\" class=\"form-control\" disabled>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <!-- <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group form-black label-floating is-empty\">\n                          <input style=\"width: 100%\" type=\"text\" placeholder=\"Endereço\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"row\">\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group form-black label-floating is-empty\">\n                          <input style=\"width: 100%\"type=\"text\" placeholder=\"Cidade\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group form-black label-floating is-empty\">\n                          <input style=\"width: 100%\"type=\"text\" placeholder=\"País\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group form-black label-floating is-empty\">\n                          <input style=\"width: 100%\"type=\"text\" placeholder=\"CEP\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label>Observações</label>\n                          <div class=\"form-group form-black label-floating is-empty\">\n                            <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                            <textarea class=\"form-control\" rows=\"5\"></textarea>\n                          </div>\n                        </div>\n                      </div>\n                    </div> -->\n  \n                    <button type=\"submit\" class=\"btn btn-danger pull-right hidden\">Update Profile</button>\n                    <div class=\"clearfix\"></div>\n\n\n                  </form>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                  <a href=\"\">\n                    <img class=\"img\" src=\"../../../../assets/imgs/pictures/man.png\" />\n                  </a>\n                </div>\n  \n                <div class=\"content\">\n                  <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\n                  <h4 class=\"card-title\">Alec Thompson</h4>\n                  <p class=\"card-content\">\n                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye\n                    I love Rick Owens’ bed design but the back is...\n                  </p>\n                  <a href=\"\" class=\"btn btn-danger btn-round\">Follow</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/dashboard/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(user) {
        this.user = user;
        this.enterprise = {};
        this.enterprise = user.getUserLoggedIn();
        console.log(this.enterprise);
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/components/dashboard/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/assets/sass/material-dashboard.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/defaults/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@import url(https://fonts.googleapis.com/css?family=Oswald|Roboto);\n@charset \"UTF-8\";\nbody {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #5356ad;\n  overflow: hidden;\n  overflow-x: visible!important;\n  \n}\n.table {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.table-cell {\n  display: table-cell;\n  vertical-align: middle;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont {\n  position: relative;\n  width: 600px;\n  margin: 30px auto 0;\n  background-color: #5B86E5;\n  margin-top: 20%;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont .box {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.cont .box:before, .cont .box:after {\n  content: \" \";\n  position: absolute;\n  left: 152px;\n  top: 50px;\n  background-color: #36D1DC;\n  -webkit-transform: rotateX(52deg) rotateY(15deg) rotateZ(-38deg);\n          transform: rotateX(52deg) rotateY(15deg) rotateZ(-38deg);\n  width: 300px;\n  height: 285px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont .box:after {\n  background-color: #5EE9F3;\n  top: -10px;\n  left: 80px;\n  width: 320px;\n  height: 180px;\n}\n.cont .container-forms {\n  position: relative;\n}\n.cont .btn {\n  cursor: pointer;\n  text-align: center;\n  margin: 0 auto;\n  color: #fff;\n  background-color: #ff73b3;\n  opacity: 1;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont .btn.loading{\n  cursor: wait;\n  background: #ccc;\n  text-align: center;\n  margin: 0 auto;\n  color: #fff;\n  opacity: 1;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont .btn:hover {\n  opacity: 0.7;\n}\n.cont .btn, .cont input {\n  padding: 10px 15px;\n}\n.cont input {\n  margin: 0 auto 15px;\n  display: block;\n  width: 220px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.cont .container-forms .container-info {\n  text-align: left;\n  font-size: 0;\n}\n.cont .container-forms .container-info .info-item {\n  text-align: center;\n  font-size: 16px;\n  width: 300px;\n  height: 320px;\n  display: inline-block;\n  vertical-align: top;\n  color: #fff;\n  opacity: 1;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.cont .container-forms .container-info .info-item p {\n  font-size: 20px;\n  margin: 20px;\n}\n.cont .container-forms .container-info .info-item .btn {\n  background-color: transparent;\n  border: 1px solid #fff;\n}\n.cont .container-forms .container-info .info-item .table-cell {\n  padding-right: 35px;\n}\n.cont .container-forms .container-info .info-item:nth-child(2) .table-cell {\n  padding-left: 35px;\n  padding-right: 0;\n}\n.cont .container-form {\n  overflow: hidden;\n  position: absolute;\n  left: 30px;\n  top: -30px;\n  width: 305px;\n  height: 380px;\n  background-color: #fff;\n  -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont .container-form:before {\n  content: \"\\2714\";\n  position: absolute;\n  left: 160px;\n  top: -50px;\n  color: #5356ad;\n  font-size: 130px;\n  opacity: 0;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont .container-form .btn {\n  position: relative;\n  margin-top: 30px;\n}\n.cont .form-item {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.cont .form-item.sign-up {\n  position: absolute;\n  left: -100%;\n  opacity: 0;\n}\n.container.log-in .box:before {\n  position: absolute;\n  left: 180px;\n  top: 62px;\n  height: 265px;\n}\n.container.log-in .box:after {\n  top: 22px;\n  left: 192px;\n  width: 324px;\n  height: 220px;\n}\n.container.log-in .container-form {\n  left: 265px;\n}\n.container.log-in .container-form .form-item.sign-up {\n  left: 0;\n  opacity: 1;\n}\n.container.log-in .container-form .form-item.log-in {\n  left: -100%;\n  opacity: 0;\n}\n.container.active {\n  width: 260px;\n  height: 140px;\n  margin-top: -70px;\n}\n.container.active .container-form {\n  left: 30px;\n  width: 200px;\n  height: 200px;\n}\n.container.active .container-form:before {\n  content: \"\\2714\";\n  position: absolute;\n  left: 51px;\n  top: 5px;\n  color: #5356ad;\n  font-size: 130px;\n  opacity: 1;\n}\n.container.active input, .container.active .btn, .container.active .info-item {\n  display: none;\n  opacity: 0;\n  padding: 0px;\n  margin: 0 auto;\n  height: 0;\n}\n.container.active .form-item {\n  height: 100%;\n}\n.container.active .container-forms .container-info .info-item {\n  height: 0%;\n  opacity: 0;\n}\n.rabbit {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  z-index: 3;\n  fill: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/defaults/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\n<app-navbar></app-navbar>\n<!-- endmenu -->\n\n\n<!-- form   -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"cont\">\n                <div class=\"box\"></div>\n                <div class=\"container-forms\">\n                  <div class=\"container-info\">\n                    <div class=\"info-item\">\n                      <div class=\"table\">\n                        <div class=\"table-cell\">\n                          <p>\n                            Possui uma conta? \n                          </p>\n                          <div (click)=\"toLoggin()\" class=\"btn\">\n                            Entrar\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"info-item\">\n                      <div class=\"table\">\n                        <div class=\"table-cell\">\n                          <p>\n                            Não possui uma conta? \n                          </p>\n\n                          <div (click)=\"toRegister()\" class=\"btn\">\n                            Criar\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"container-form\">\n                    <div class=\"form-item log-in\">\n                      <div class=\"table\">\n                        <div class=\"table-cell\">\n                              <input required [(ngModel)]=\"login.email\" name=\"Username\" placeholder=\"Email\" type=\"email\" />\n                              <input required [(ngModel)]=\"login.senha\" name=\"Password\" placeholder=\"Senha\" type=\"Password\" />\n                              <div class=\"row\">\n                                <div class=\"col-md-12 text-center\">\n                                  <button (click)=\"loginAccount()\" class=\"btn\">\n                                    Entrar\n                                  </button>\n                                </div>\n                              </div>\n                          \n                          \n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-item sign-up\">\n                      <div class=\"table\">\n                        <div class=\"table-cell\">\n                          <input required [(ngModel)]=\"register.nameEnterprise\" name=\"Username\" placeholder=\"Nome da Empresa\" type=\"text\" />\n                          <input required [(ngModel)]=\"register.email\" name=\"Username\" placeholder=\"Email\" type=\"email\" />\n                          <input required [(ngModel)]=\"register.senha\" name=\"Password\" placeholder=\"Senha\" type=\"Password\" />\n                          <input required [(ngModel)]=\"register.senhaR\" name=\"Password\" placeholder=\"Repita a Senha\" type=\"Password\" />\n                          \n                          <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                              <div (click)=\"registerAccount()\" class=\"btn\">\n                                Criar\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            \n        </div>\n    </div>\n</div>\n<!-- endform  -->\n\n<simple-notifications [options]=\"options\"></simple-notifications>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/defaults/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(user, router, _service) {
        this.user = user;
        this.router = router;
        this._service = _service;
        this.login = { "email": null, "senha": null };
        this.register = { "email": null, "senha": null, "senhaR": null, "nameEnterprise": null };
        this.options = {
            position: ["bottom", "right"],
            timeOut: 5000,
            showProgressBar: false,
            pauseOnHover: true,
            clickToClose: true
        };
    }
    AuthComponent.prototype.ngOnInit = function () {
        if (this.user.isLogged()) {
            this.router.navigate(['/dashboard']);
        }
    };
    AuthComponent.prototype.toRegister = function () {
        $(".container").addClass("log-in");
    };
    AuthComponent.prototype.toLoggin = function () {
        $(".container").removeClass("log-in");
    };
    AuthComponent.prototype.loginAccount = function () {
        var _this = this;
        if (this.login.email && this.login.senha) {
            if (!$(".form-item.log-in .btn").hasClass("loading")) {
                $(".form-item.log-in .btn").addClass("loading");
                return new Promise(function (resolve, reject) {
                    _this.user.login(_this.login).then(function (result) {
                        if (result) {
                            if (result.status == "success") {
                                _this._service.success('Sucesso', result.message);
                                _this.user.setUserloggedIn(result);
                                $(".form-item.log-in .btn").removeClass("loading");
                                _this.router.navigate(['/dashboard']);
                            }
                            else {
                                _this._service.error('Erro', result.message);
                                $(".form-item.log-in .btn").removeClass("loading");
                            }
                        }
                    });
                });
            }
        }
    };
    AuthComponent.prototype.validatePasswords = function () {
        return true;
    };
    AuthComponent.prototype.clearFormRegister = function () {
        this.register = { "email": null, "senha": null, "senhaR": null, "nameEnterprise": null };
    };
    AuthComponent.prototype.registerAccount = function () {
        var _this = this;
        if (this.register.email && this.validatePasswords() && this.register.nameEnterprise) {
            if (!$(".form-item.sign-up .btn").hasClass("loading")) {
                $(".form-item.sign-up .btn").addClass("loading");
                {
                    return new Promise(function (resolve, reject) {
                        _this.user.register(_this.register).then(function (result) {
                            if (result) {
                                if (result.status == "success") {
                                    _this._service.success('Sucesso', result.message);
                                    _this.toLoggin();
                                    _this.clearFormRegister();
                                    $(".form-item.sign-up .btn").removeClass("loading");
                                }
                                else {
                                    _this._service.error('Erro', result.message);
                                    $(".form-item.sign-up .btn").removeClass("loading");
                                }
                            }
                        });
                    });
                }
            }
        }
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/components/defaults/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/defaults/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/defaults/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/defaults/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center py-3\">\n        <h5>MyLead2 © {{test | date: 'yyyy'}}.</h5>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/defaults/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/defaults/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/defaults/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/defaults/navbar-dash/navbar-dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarDashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/defaults/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarDashComponent = (function () {
    function NavbarDashComponent(location, element, user) {
        this.element = element;
        this.user = user;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarDashComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarDashComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarDashComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarDashComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarDashComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarDashComponent.prototype.logout = function () {
        this.user.logout();
    };
    NavbarDashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar-dash',
            template: __webpack_require__("../../../../../src/app/components/defaults/navbar-dash/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/assets/sass/material-dashboard.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], NavbarDashComponent);
    return NavbarDashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/defaults/navbar-dash/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" >{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                    <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"cursor: pointer\">\n                        <i class=\"material-icons\">person</i>\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a (click)=\"logout()\" style=\"cursor: pointer\">Sair</a></li>\n                    </ul>\n                </li>\n            </ul>\n\n            <!-- <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>-->\n        </div> \n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/defaults/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/defaults/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\n<div>\n  <nav id=\"navbar\" class=\"navbar navbar-default navbar-fixed-top \">\n    <div class=\"container header-container\">\n      <div class=\"col-md-11\">\n        <div class=\"navbar-brand svg-container logo-nav\">\n          <a class=\"a--container\" routerLink=\"/\">\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              viewBox=\"0 0 199 58.8\" style=\"enable-background:new 0 0 199 58.8;\" xml:space=\"preserve\">\n              <style type=\"text/css\">\n                .st0 {\n                  fill: #ED1C24;\n                }\n\n              </style>\n              <g id=\"XMLID_4_\">\n                <path id=\"XMLID_135_\" class=\"st0\" d=\"M5.3,37.9c-0.2,0.1-0.5,0.1-0.8,0.2c-0.3,0-0.9,0.1-1.7,0.1c-0.8,0-1.3,0-1.6-0.1\n                      C1,38,0.9,37.9,0.9,37.7c0-0.4,1-1.6,3.1-3.5c1.4-1.3,2.5-2.4,3.4-3.2l0.8-0.8c4.7-4.6,7.1-7.2,7.1-7.9c0-0.2-0.1-0.4-0.1-0.5\n                      c-0.1-0.1-0.2-0.1-0.2-0.1c-0.7,0-1.5,0.3-2.5,0.9S9.9,24.4,8.1,26c-0.5,0.4-1,0.9-1.7,1.5c-0.9,0.8-1.4,1.2-1.7,1.2\n                      c-0.2,0-0.3-0.1-0.4-0.2C4.1,28.4,4,28.3,4,28.1c0-0.3,0.9-1.3,2.6-2.8c0.3-0.3,0.6-0.5,0.7-0.7c2.1-1.8,3.9-3.1,5.3-4\n                      s2.6-1.2,3.7-1.2c0.8,0,1.3,0.2,1.7,0.7c0.4,0.5,0.6,1.2,0.6,2.2c0,0.2,0,0.4,0,0.6c0,0.2-0.1,0.6-0.1,1c3.2-2,5.4-3.3,6.5-3.8\n                      s2.1-0.8,2.9-0.8c0.6,0,1.1,0.3,1.5,0.8c0.4,0.5,0.5,1.2,0.5,2.2c0,0.2,0,0.4,0,0.6c0,0.2,0,0.6-0.1,1c2.9-1.8,4.9-3,6.2-3.6\n                      c1.3-0.6,2.3-0.9,3.1-0.9c0.8,0,1.5,0.2,2,0.7c0.5,0.5,0.7,1.1,0.7,1.9c0,1.4-1.5,3.6-4.4,6.5l-0.1,0.1c-0.5,0.5-1.2,1.1-2.1,2\n                      c-2.9,2.7-4.3,4.3-4.3,4.9c0,0.3,0.1,0.5,0.3,0.6c0.2,0.2,0.5,0.2,0.8,0.2c1,0,2.5-0.5,4.6-1.5c2-1,4.1-2.3,6.4-4.1\n                      c1-0.7,2-1.5,3.1-2.5c1.1-0.9,1.7-1.4,1.9-1.4c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.1,0.3,0.1,0.5c0,0.4-1.3,1.7-3.9,3.8l-0.2,0.2\n                      c-2.6,2-5,3.6-7.4,4.9c-2.4,1.2-4.2,1.8-5.5,1.8c-1,0-1.9-0.3-2.5-0.9c-0.7-0.6-1-1.3-1-2.3c0-1.1,0.4-2.4,1.3-3.7\n                      c0.9-1.3,2.1-2.7,3.7-4.1c0.5-0.4,1.2-1,2.1-1.8c2.2-1.8,3.3-2.9,3.3-3.2c0-0.2-0.1-0.3-0.3-0.4c-0.2-0.1-0.4-0.2-0.6-0.2\n                      c-1.3,0-3.8,1.5-7.6,4.4s-8.1,6.9-13,11.8c-0.2,0.1-0.5,0.1-0.8,0.2c-0.3,0-0.9,0.1-1.6,0.1c-0.8,0-1.4,0-1.7-0.1s-0.4-0.2-0.4-0.4\n                      c0-0.4,1-1.6,3.1-3.5c0.8-0.8,1.4-1.3,1.9-1.8c3.4-3.2,5.8-5.5,7.3-7.1c1.5-1.6,2.2-2.5,2.2-2.8c0-0.2-0.1-0.4-0.2-0.6\n                      c-0.2-0.2-0.3-0.2-0.5-0.2c-1.3,0-3.9,1.5-7.7,4.5C14.3,29.2,10.1,33.1,5.3,37.9z\" />\n                <path id=\"XMLID_137_\" class=\"st0\" d=\"M61.2,39.1c-5.1,6.4-9.4,11.2-12.9,14.4s-6.2,4.8-8,4.8c-1,0-1.8-0.3-2.4-0.9\n                      c-0.6-0.6-0.9-1.5-0.9-2.5c0-2.6,1.9-5.4,5.6-8.4c3.7-3.1,8.7-5.8,14.8-8.1l1.5-2.5c-1.2,0.8-2.3,1.4-3.5,1.8\n                      c-1.2,0.4-2.3,0.6-3.4,0.6c-1.1,0-1.9-0.3-2.6-0.9c-0.7-0.6-1-1.3-1-2.3c0-1.1,0.4-2.4,1.3-3.7s2.1-2.7,3.7-4.1\n                      c0.4-0.4,1.1-0.9,1.8-1.6c2.3-1.9,3.5-3.1,3.5-3.4c0-0.2-0.1-0.3-0.2-0.4c-0.2-0.1-0.3-0.2-0.5-0.2c-0.4,0-0.9,0.2-1.7,0.5\n                      c-0.8,0.4-1.6,0.8-2.5,1.5c-1.4,1-2.8,2.1-4.2,3.3s-2.2,1.8-2.4,1.8c-0.1,0-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.3-0.2-0.4\n                      c0-0.2,0.3-0.7,1-1.4c0.7-0.7,1.6-1.4,2.7-2.3c2.2-1.7,4-2.9,5.6-3.7c1.6-0.8,2.9-1.2,4-1.2c0.8,0,1.3,0.2,1.8,0.7\n                      c0.4,0.4,0.7,1.1,0.7,1.8c0,0.8-0.3,1.7-0.9,2.6c-0.6,0.9-1.8,2.2-3.7,4c-0.7,0.6-1.5,1.4-2.6,2.5c-2.5,2.4-3.8,3.8-3.8,4.4\n                      c0,0.3,0.2,0.5,0.4,0.7c0.3,0.2,0.6,0.3,1,0.3c0.8,0,1.7-0.3,2.8-0.8c1-0.5,2.2-1.3,3.4-2.4l10.2-8.8c1-0.9,2-1.7,3-2.5\n                      c1-0.8,1.9-1.5,2.9-2.1H76c0.6,0,1,0,1.3,0.1c0.2,0.1,0.4,0.3,0.4,0.5c0,0.2-1.8,2.1-5.4,5.6s-7,7.3-10.3,11.4\n                      c2.3-0.4,4.4-1,6.5-1.8c2-0.9,4.2-2,6.4-3.6c1.4-1,2.8-2.1,4.2-3.3c1.4-1.2,2.2-1.8,2.4-1.8c0.2,0,0.3,0.1,0.4,0.2\n                      c0.1,0.1,0.2,0.3,0.2,0.5c0,0.3-0.5,0.9-1.5,1.8c-1,0.9-2.3,2-4,3.2c-2.5,1.8-5,3.3-7.5,4.3S64,38.7,61.2,39.1z M55.9,40.7\n                      c-5.4,2.4-9.6,4.8-12.6,7.2s-4.5,4.7-4.5,6.6c0,0.6,0.2,1.2,0.5,1.6c0.3,0.4,0.7,0.6,1.1,0.6c1.2,0,3.1-1.3,5.5-3.8\n                      C48.4,50.4,51.8,46.3,55.9,40.7z\" />\n              </g>\n              <g id=\"XMLID_1_\">\n                <path id=\"XMLID_2_\" d=\"M82.4,2.1H86v32.4h13.8V38H82.4V2.1z\" />\n                <path id=\"XMLID_141_\" d=\"M127.3,29.2l2.9,1.5c-0.9,1.9-2,3.4-3.3,4.5c-1.2,1.1-2.6,2-4.2,2.6c-1.5,0.6-3.3,0.9-5.3,0.9\n                      c-4.3,0-7.7-1.4-10.2-4.3c-2.4-2.8-3.7-6.1-3.7-9.6c0-3.4,1-6.4,3.1-9c2.6-3.4,6.1-5,10.5-5c4.5,0,8.1,1.7,10.8,5.2\n                      c1.9,2.4,2.9,5.5,2.9,9.1h-23.9c0.1,3.1,1.1,5.6,3,7.6s4.3,3,7.1,3c1.4,0,2.7-0.2,3.9-0.7c1.3-0.5,2.4-1.1,3.3-1.9\n                      C125.3,32.2,126.2,31,127.3,29.2z M127.3,22.1c-0.5-1.8-1.1-3.3-2-4.4c-0.9-1.1-2-2-3.5-2.6c-1.4-0.7-2.9-1-4.5-1\n                      c-2.6,0-4.8,0.8-6.7,2.5c-1.4,1.2-2.4,3.1-3.1,5.5H127.3z\" />\n                <path id=\"XMLID_144_\" d=\"M163.9,11.5V38h-3.4v-4.6c-1.4,1.7-3,3.1-4.8,3.9s-3.7,1.3-5.8,1.3c-3.8,0-7-1.4-9.6-4.1\n                      c-2.7-2.7-4-6-4-9.9c0-3.8,1.3-7.1,4-9.8c2.7-2.7,5.9-4.1,9.7-4.1c2.2,0,4.2,0.5,5.9,1.4c1.8,0.9,3.3,2.3,4.7,4.2v-4.9H163.9z\n                        M150.2,14.1c-1.9,0-3.7,0.5-5.3,1.4c-1.6,0.9-2.9,2.2-3.8,3.9c-1,1.7-1.4,3.5-1.4,5.4c0,1.9,0.5,3.7,1.4,5.4c1,1.7,2.2,3,3.9,4\n                      c1.6,1,3.4,1.4,5.2,1.4c1.9,0,3.6-0.5,5.3-1.4s3-2.2,3.9-3.8c0.9-1.6,1.4-3.4,1.4-5.4c0-3.1-1-5.6-3-7.7\n                      C155.7,15.1,153.2,14.1,150.2,14.1z\" />\n                <path id=\"XMLID_147_\" d=\"M198.1,1.2V38h-3.4v-4.6c-1.4,1.7-3,3.1-4.8,3.9c-1.8,0.9-3.7,1.3-5.8,1.3c-3.8,0-7-1.4-9.6-4.1\n                      c-2.7-2.7-4-6-4-9.9c0-3.8,1.3-7.1,4-9.8c2.7-2.7,5.9-4.1,9.7-4.1c2.2,0,4.2,0.5,5.9,1.4c1.8,0.9,3.3,2.3,4.7,4.2V1.2H198.1z\n                        M184.4,14.1c-1.9,0-3.7,0.5-5.3,1.4c-1.6,0.9-2.9,2.2-3.8,3.9c-1,1.7-1.4,3.5-1.4,5.4c0,1.9,0.5,3.7,1.4,5.4c1,1.7,2.2,3,3.9,4\n                      c1.6,1,3.4,1.4,5.2,1.4c1.9,0,3.6-0.5,5.3-1.4s3-2.2,3.9-3.8c0.9-1.6,1.4-3.4,1.4-5.4c0-3.1-1-5.6-3-7.7\n                      C189.9,15.1,187.4,14.1,184.4,14.1z\" />\n              </g>\n            </svg>\n          </a>\n        </div>\n        <div class=\"navbar-header text-center\">\n          <a type=\"button\" class=\"navbar-toggle  collapsed\" data-toggle=\"collapse\" data-target=\"#loso-navbar-collapse-1\" aria-expanded=\"false\">\n            <span></span>\n          </a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"loso-navbar-collapse-1\">\n          <ul *ngIf=\"showHomeBtn()\" class=\"nav navbar-nav navbar-left\">\n            <li>\n              <a routerLink=\"/\" class=\"nav-item nav-item-to-close\">HOME</a>\n            </li>\n          </ul>\n          <div *ngIf=\"showLoginBtn()\" class=\"collapse navbar-collapse in\" id=\"loso-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                <a class=\"nav-link\" routerLink=\"/login\" >LOGIN</a>\n              </li>\n            </ul>\n          </div>\n          <div *ngIf=\"isLogged()\" class=\"collapse navbar-collapse in\" id=\"loso-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                <a class=\"nav-link\" routerLink=\"/dashboard\" >PERFIL</a>\n              </li>\n              <li>\n                  <a class=\"nav-link\" style=\"cursor:pointer\" (click)=\"logout()\">SAIR</a>\n                </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n</div>\n<!-- endmenu -->\n"

/***/ }),

/***/ "../../../../../src/app/components/defaults/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, user) {
        this.location = location;
        this.user = user;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.isLogged = function () {
        return this.user.isLogged();
    };
    NavbarComponent.prototype.showLoginBtn = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        var showLogin = true;
        var isLogged = this.isLogged();
        if (titlee === '/login') {
            showLogin = false;
        }
        return !isLogged && showLogin;
    };
    NavbarComponent.prototype.showHomeBtn = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        var showHome = true;
        if (titlee === '/') {
            showHome = false;
        }
        return showHome;
    };
    NavbarComponent.prototype.logout = function () {
        this.user.logout();
        location.reload();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/defaults/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/defaults/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/defaults/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color='blue' data-image=\"\">\n    \n    <div class=\"logo\">\n        <a class=\"simple-text text-center\" style=\"cursor: pointer; text-align:center\">\n            {{enterprise.name}}\n        </a>\n    </div>\n    <div class=\"sidebar-wrapper\">\n        <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\n            <div class=\"form-group form-black is-empty\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                <span class=\"material-input\"></span>\n            </div>\n            <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n            </button>\n        </form>\n\n        <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\n            <li>\n                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"material-icons\">dashboard</i>\n                    <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                </a>\n            </li>\n            <li class=\"dropdown\">\n                <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"material-icons\">notifications</i>\n                    <span class=\"notification\">5</span>\n                    <p class=\"hidden-lg hidden-md\">Notifications</p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a >Mike John responded to your email</a></li>\n                    <li><a >You have 5 new tasks</a></li>\n                    <li><a >You're now friend with Andrew</a></li>\n                    <li><a >Another Notification</a></li>\n                    <li><a >Another One</a></li>\n                </ul>\n            </li>\n            <li>\n                <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">person</i>\n                <p class=\"hidden-lg hidden-md\">Profile</p>\n                </a>\n            </li>\n        </ul>\n\n        <div class=\"nav-container\">\n            <ul class=\"nav\">\n                <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n                    <a  [routerLink]=\"[menuItem.path]\" href=\"\">\n                        <i class=\"material-icons\">{{menuItem.icon}}</i>\n                        <p>{{menuItem.title}}</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/defaults/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/enviar', title: 'Enviar Base', icon: 'backup', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent(user) {
        this.user = user;
        this.enterprise = { "name": null };
        this.enterprise.name = this.user.getUserLoggedIn().nome;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/defaults/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/assets/sass/material-dashboard.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\n<app-navbar></app-navbar>\n<!-- endmenu -->\n\n<!-- Banner -->\n<section style=\" overflow: hidden;\">\n  <div class=\"container-fluid\" id=\"banner\">\n    <div class=\"\">\n      <div class=\"text-center text\">\n        <h1>Os melhores clientes para a sua empresa</h1>\n        <h3>Não perca tempo arriscando</h3>\n      </div>\n      <div class=\"col-md-6 hidden\">\n        <figure>\n          <img src=\"assets/imgs/Funil-de-vendas.png\" class=\"img-responsive\" alt=\"\">\n        </figure>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- endbanner -->\n\n\n<!-- Apresentation -->\n<section style=\" overflow: hidden;\">\n  <div class=\"container\" id=\"project\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"text-center\">O QUE RESOLVEMOS</h1>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"item text-center\" data-aos=\"fade-right\">\n          <div class=\"col-md-4\">\n            <figure>\n              <img src=\"assets/svg/analytics.svg\" />\n              <figcaption>\n                <h2>Baixa conversão de Leads</h2>\n                <p></p>\n              </figcaption>\n            </figure>\n\n          </div>\n        </div>\n        <div class=\"item text-center\" data-aos=\"fade-down\">\n          <div class=\"col-md-4\">\n            <figure>\n              <img src=\"assets/svg/employee.svg\" />\n              <figcaption>\n                <h2>Mapeamento de perfil dos Leads</h2>\n              </figcaption>\n            </figure>\n\n          </div>\n        </div>\n        <div class=\"item text-center\" data-aos=\"fade-left\">\n          <div class=\"col-md-4\">\n            <figure>\n              <img src=\"assets/svg/search.svg\" />\n              <figcaption>\n                <h2>Encontrar o cliente ideal</h2>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"text-center\">COMO FUNCIONAMOS</h1>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"item text-center\" data-aos=\"fade-right\">\n          <div class=\"col-md-3\">\n            <figure>\n              <img src=\"assets/svg/cloud-computing.svg\" />\n              <figcaption>\n                <h2>Dados</h2>\n                <p class=\"text-center\">\n                  Sua base de dados em nossas mãos vira ouro.\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n        <div class=\"item text-center\" data-aos=\"fade-up\">\n          <div class=\"col-md-3\">\n            <figure>\n              <img src=\"assets/svg/team.svg\" />\n              <figcaption>\n                <h2>Analytics</h2>\n                <p class=\"text-center\">\n                  Analisamos de maneira automática e inteligente seu Lead.\n                </p>\n              </figcaption>\n            </figure>\n\n          </div>\n        </div>\n        <div class=\"item text-center\" data-aos=\"fade-down\">\n          <div class=\"col-md-3\">\n            <figure>\n              <img src=\"assets/svg/tasks.svg\" />\n              <figcaption>\n                <h2>Perfil</h2>\n                <p class=\"text-center\">\n                  Recuperamos dados de redes sociais para traçar o melhor perfil possível para o seu futuro cliente.\n                </p>\n              </figcaption>\n            </figure>\n\n          </div>\n        </div>\n        <div class=\"item text-center\" data-aos=\"fade-left\">\n          <div class=\"col-md-3\">\n            <figure>\n              <img src=\"assets/svg/funnel.svg\" />\n              <figcaption>\n                <h2>Lucro</h2>\n                <p class=\"text-center\">\n                  Não perca tempo e dinheiro, diminua suas despesas sendo objetivo na hora de impactar seu cliente.\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n<!-- endapresentation -->\n\n<simple-notifications [options]=\"options\"></simple-notifications>\n\n\n<!-- Footer -->\n<app-footer></app-footer>\n<!-- endfooter  -->\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_service) {
        this._service = _service;
        this.title = 'MyLead';
        this.options = {
            position: ["bottom", "right"],
            timeOut: 5000,
            showProgressBar: false,
            pauseOnHover: true,
            clickToClose: true
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    // private API_URL = this.API_UPLOAD_URL;
    function UserService(_http, router) {
        this._http = _http;
        this.router = router;
        this.API_UPLOAD_URL = "http://localhost:3000/api";
        this.API_URL = "https://mylead2-api.herokuapp.com/api";
    }
    UserService.prototype.isLogged = function () {
        return (JSON.parse(sessionStorage.getItem('user')) && true);
    };
    UserService.prototype.getUploadUrl = function () {
        // return this.API_UPLOAD_URL + "/upload"
        return this.API_URL + "/upload";
    };
    ;
    UserService.prototype.setUserloggedIn = function (user) {
        sessionStorage.clear();
        sessionStorage.setItem('user', JSON.stringify({
            'nome': user.data.name,
            'email': user.data.email,
            'id': user.data.id
        }));
    };
    UserService.prototype.getUserLoggedIn = function () {
        return JSON.parse(sessionStorage.getItem('user'));
    };
    UserService.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/']);
    };
    UserService.prototype.login = function (login) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_URL + '/enterprise/login', login).subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UserService.prototype.uploadFile = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData($(form)[0]);
            $.ajax({
                url: _this.getUploadUrl() + '?' + $.param({ 'id': _this.getUserLoggedIn().id }),
                type: 'POST',
                data: formData,
                success: function (data) {
                    resolve(data);
                },
                cache: false,
                contentType: false,
                processData: false
            });
        });
    };
    UserService.prototype.getUserRequestData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_URL + '/request/data', { 'id': _this.getUserLoggedIn().id }).subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UserService.prototype.getUserAnalitycData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_URL + '/result/data', { 'id': _this.getUserLoggedIn().id }).subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UserService.prototype.getSuperLeads = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_URL + '/result/result', { 'id_user': _this.getUserLoggedIn().id }).subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UserService.prototype.register = function (register) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(_this.API_URL + '/enterprise', register).subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/assets/sass/material-dashboard.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n\n  =========================================================\n  * Material Dashboard Angular CLI - V1.4.2\n  =========================================================\n\n  * Product Page: https://www.creative-tim.com/product/material-dashboard-angular2\n  * Copyright 2017 Creative Tim (https://www.creative-tim.com)\n  * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular/blob/master/LICENSE.md)\n\n  =========================================================\n\n  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n  */\n/* ANIMATION */\n/* SHADOWS */\n/* Shadows (from mdl http://www.getmdl.io/) */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -ms-touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.noUi-base {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n.noUi-origin {\n  position: absolute;\n  right: 0;\n  top: 0;\n  left: 0;\n  bottom: 0; }\n.noUi-handle {\n  position: relative;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.noUi-stacking .noUi-handle {\n  z-index: 10; }\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: left 0.3s, top 0.3s;\n  transition: left 0.3s, top 0.3s; }\n.noUi-state-drag * {\n  cursor: inherit !important; }\n.noUi-horizontal {\n  height: 10px; }\n.noUi-handle {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  left: -10px;\n  top: -6px;\n  cursor: pointer;\n  border-radius: 100%;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  border: 1px solid;\n  background: #FFFFFF;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n.noUi-vertical .noUi-handle {\n  margin-left: 5px;\n  cursor: ns-resize; }\n.noUi-horizontal.noUi-extended {\n  padding: 0 15px; }\n.noUi-horizontal.noUi-extended .noUi-origin {\n  right: -15px; }\n.noUi-background {\n  height: 2px;\n  margin: 20px 0; }\n.noUi-origin {\n  margin: 0;\n  border-radius: 0;\n  height: 2px;\n  background: #c8c8c8; }\n.noUi-origin[style^=\"left: 0\"] .noUi-handle {\n    background-color: #fff;\n    border: 2px solid #c8c8c8; }\n.noUi-origin[style^=\"left: 0\"] .noUi-handle.noUi-active {\n      border-width: 1px; }\n.noUi-target {\n  border-radius: 3px; }\n.noUi-horizontal {\n  height: 2px;\n  margin: 15px 0; }\n.noUi-vertical {\n  height: 100%;\n  width: 2px;\n  margin: 0 15px;\n  display: inline-block; }\n.noUi-handle.noUi-active {\n  -webkit-transform: scale3d(2, 2, 1);\n          transform: scale3d(2, 2, 1); }\n[disabled].noUi-slider {\n  opacity: 0.5; }\n[disabled] .noUi-handle {\n  cursor: not-allowed; }\n.slider {\n  background: #c8c8c8; }\n.slider.noUi-connect {\n  background-color: #9c27b0; }\n.slider .noUi-handle {\n  border-color: #9c27b0; }\n.slider.slider-info .noUi-connect, .slider.slider-info.noUi-connect {\n  background-color: #00bcd4; }\n.slider.slider-info .noUi-handle {\n  border-color: #00bcd4; }\n.slider.slider-success .noUi-connect, .slider.slider-success.noUi-connect {\n  background-color: #4caf50; }\n.slider.slider-success .noUi-handle {\n  border-color: #4caf50; }\n.slider.slider-warning .noUi-connect, .slider.slider-warning.noUi-connect {\n  background-color: #ff9800; }\n.slider.slider-warning .noUi-handle {\n  border-color: #ff9800; }\n.slider.slider-danger .noUi-connect, .slider.slider-danger.noUi-connect {\n  background-color: #f44336; }\n.slider.slider-danger .noUi-handle {\n  border-color: #f44336; }\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n.animated.flipOutX,\n.animated.flipOutY {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake; }\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n@keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown; }\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n@keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\nh1, .h1 {\n  font-size: 3.8em;\n  line-height: 1.15em; }\nh2, .h2 {\n  font-size: 2.6em; }\nh3, .h3 {\n  font-size: 1.825em;\n  line-height: 1.4em;\n  margin: 20px 0 10px; }\nh4, .h4 {\n  font-size: 1.3em;\n  line-height: 1.4em; }\nh5, .h5 {\n  font-size: 1.25em;\n  line-height: 1.4em;\n  margin-bottom: 15px; }\nh6, .h6 {\n  font-size: 1em;\n  text-transform: uppercase;\n  font-weight: 500; }\n/*.title,\n.card-title,\n.info-title,\n.footer-brand,\n.footer-big h5,\n.footer-big h4,\n.media .media-heading{\n    font-weight: $font-weight-extra-bold;\n    font-family: $font-family-serif;\n\n    &,\n    a{\n        color: $black-color;\n        text-decoration: none;\n    }\n}*/\nh2.title {\n  margin-bottom: 30px; }\n.description,\n.card-description,\n.footer-big p {\n  color: #999999; }\n.text-warning {\n  color: #ff9800; }\n.text-primary {\n  color: #9c27b0; }\n.text-danger {\n  color: #f44336; }\n.text-success {\n  color: #4caf50; }\n.text-info {\n  color: #00bcd4; }\n.text-rose {\n  color: #e91e63; }\n.text-gray {\n  color: #999999; }\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh; }\n.bootstrap-navbar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 260px;\n  display: block;\n  z-index: 1;\n  color: #fff;\n  font-weight: 200;\n  background-size: cover;\n  background-position: center center; }\n.sidebar,\n.off-canvas-sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  -webkit-box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n.sidebar .sidebar-wrapper,\n  .off-canvas-sidebar .sidebar-wrapper {\n    position: relative;\n    height: calc(100vh - 75px);\n    overflow: auto;\n    width: 260px;\n    z-index: 4; }\n.sidebar .logo-img,\n  .off-canvas-sidebar .logo-img {\n    width: 30px;\n    display: inline-block;\n    max-height: 30px;\n    margin-left: 10px;\n    margin-right: 15px; }\n.sidebar .logo-img img,\n    .off-canvas-sidebar .logo-img img {\n      width: 35px;\n      top: 16px;\n      position: absolute; }\n.sidebar .logo-tim,\n  .off-canvas-sidebar .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n.sidebar .logo-tim img,\n    .off-canvas-sidebar .logo-tim img {\n      width: 60px;\n      height: 60px; }\n.sidebar .nav,\n  .off-canvas-sidebar .nav {\n    margin-top: 20px; }\n.sidebar .nav li > a,\n    .off-canvas-sidebar .nav li > a {\n      margin: 10px 15px;\n      border-radius: 3px;\n      color: #3C4858; }\n.sidebar .nav li:hover > a,\n    .off-canvas-sidebar .nav li:hover > a {\n      background: rgba(200, 200, 200, 0.2);\n      color: #3C4858; }\n.sidebar .nav li.active > a,\n    .off-canvas-sidebar .nav li.active > a {\n      color: #FFFFFF; }\n.sidebar .nav li.active > a i,\n      .off-canvas-sidebar .nav li.active > a i {\n        color: #FFFFFF; }\n.sidebar .nav p,\n    .off-canvas-sidebar .nav p {\n      margin: 0;\n      line-height: 30px;\n      font-size: 14px; }\n.sidebar .nav i,\n    .off-canvas-sidebar .nav i {\n      font-size: 24px;\n      float: left;\n      margin-right: 15px;\n      line-height: 30px;\n      width: 30px;\n      text-align: center;\n      color: #a9afbb; }\n.sidebar .sidebar-background,\n  .off-canvas-sidebar .sidebar-background {\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center center; }\n.sidebar .sidebar-background:after,\n    .off-canvas-sidebar .sidebar-background:after {\n      position: absolute;\n      z-index: 3;\n      width: 100%;\n      height: 100%;\n      content: \"\";\n      display: block;\n      background: #FFFFFF;\n      opacity: .93; }\n.sidebar .logo,\n  .off-canvas-sidebar .logo {\n    position: relative;\n    padding: 15px 15px;\n    z-index: 4; }\n.sidebar .logo:after,\n    .off-canvas-sidebar .logo:after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      right: 10%;\n      height: 1px;\n      width: 80%;\n      background-color: rgba(180, 180, 180, 0.3); }\n.sidebar .logo p,\n    .off-canvas-sidebar .logo p {\n      float: left;\n      font-size: 20px;\n      margin: 10px 10px;\n      color: #FFFFFF;\n      line-height: 20px;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n.sidebar .logo .simple-text,\n    .off-canvas-sidebar .logo .simple-text {\n      text-transform: uppercase;\n      padding: 5px 0px;\n      display: block;\n      font-size: 18px;\n      color: #3C4858;\n      text-align: left;\n      font-weight: 400;\n      line-height: 30px; }\n.sidebar .logo-tim,\n  .off-canvas-sidebar .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n.sidebar .logo-tim img,\n    .off-canvas-sidebar .logo-tim img {\n      width: 60px;\n      height: 60px; }\n.sidebar:after, .sidebar:before,\n  .off-canvas-sidebar:after,\n  .off-canvas-sidebar:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2; }\n.sidebar:before,\n  .off-canvas-sidebar:before {\n    opacity: .33; }\n.sidebar:after,\n  .off-canvas-sidebar:after {\n    z-index: 3;\n    opacity: 1; }\n.sidebar[data-image]:after, .sidebar.has-image:after,\n  .off-canvas-sidebar[data-image]:after,\n  .off-canvas-sidebar.has-image:after {\n    opacity: .77; }\n.sidebar[data-color=\"blue\"] .nav li.active a,\n  .off-canvas-sidebar[data-color=\"blue\"] .nav li.active a {\n    background-color: #00bcd4;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2); }\n.sidebar[data-color=\"green\"] .nav li.active a,\n  .off-canvas-sidebar[data-color=\"green\"] .nav li.active a {\n    background-color: #4caf50;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n.sidebar[data-color=\"orange\"] .nav li.active a,\n  .off-canvas-sidebar[data-color=\"orange\"] .nav li.active a {\n    background-color: #ff9800;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2); }\n.sidebar[data-color=\"red\"] .nav li.active a,\n  .off-canvas-sidebar[data-color=\"red\"] .nav li.active a {\n    background-color: #f44336;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2); }\n.sidebar[data-color=\"purple\"] .nav li.active a,\n  .off-canvas-sidebar[data-color=\"purple\"] .nav li.active a {\n    background-color: #9c27b0;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n.off-canvas-sidebar .nav > li > a,\n.off-canvas-sidebar .nav > li > a:hover {\n  color: #FFFFFF; }\n.off-canvas-sidebar .nav > li > a:focus {\n  background: rgba(200, 200, 200, 0.2); }\n.main-panel {\n  position: relative;\n  float: right;\n  min-height: 100%;\n  width: calc(100% - 260px); }\n.main-panel .main-content {\n    margin-top: 70px;\n    padding: 30px 15px;\n    min-height: calc(100% - 123px); }\n.main-panel div .footer {\n    border-top: 1px solid #e7e7e7; }\n.main-panel > .navbar {\n    margin-bottom: 0; }\n.bootstrap-navbar .nav {\n  margin-top: 20px;\n  float: none; }\n.main-panel {\n  position: relative;\n  height: 100%; }\n.sidebar,\n.main-panel {\n  -webkit-transition-property: top,bottom,width;\n  transition-property: top,bottom,width;\n  -webkit-transition-duration: .2s,.2s,.35s;\n  transition-duration: .2s,.2s,.35s;\n  -webkit-transition-timing-function: linear,linear,ease;\n  transition-timing-function: linear,linear,ease;\n  -webkit-overflow-scrolling: touch; }\n.btn,\n.navbar .navbar-nav > li > a.btn {\n  border: none;\n  border-radius: 3px;\n  position: relative;\n  padding: 12px 30px;\n  margin: 10px 1px;\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  will-change: box-shadow, transform;\n  -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1); }\n.btn::-moz-focus-inner,\n  .navbar .navbar-nav > li > a.btn::-moz-focus-inner {\n    border: 0; }\n.btn, .btn.btn-default,\n  .navbar .navbar-nav > li > a.btn,\n  .navbar .navbar-nav > li > a.btn.btn-default {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12); }\n.btn, .btn:hover, .btn:focus, .btn:active, .btn.active, .btn:active:focus, .btn:active:hover, .btn.active:focus, .btn.active:hover,\n    .open > .btn.dropdown-toggle,\n    .open > .btn.dropdown-toggle:focus,\n    .open > .btn.dropdown-toggle:hover, .btn.btn-default, .btn.btn-default:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default.active, .btn.btn-default:active:focus, .btn.btn-default:active:hover, .btn.btn-default.active:focus, .btn.btn-default.active:hover,\n    .open > .btn.btn-default.dropdown-toggle,\n    .open > .btn.btn-default.dropdown-toggle:focus,\n    .open > .btn.btn-default.dropdown-toggle:hover,\n    .navbar .navbar-nav > li > a.btn,\n    .navbar .navbar-nav > li > a.btn:hover,\n    .navbar .navbar-nav > li > a.btn:focus,\n    .navbar .navbar-nav > li > a.btn:active,\n    .navbar .navbar-nav > li > a.btn.active,\n    .navbar .navbar-nav > li > a.btn:active:focus,\n    .navbar .navbar-nav > li > a.btn:active:hover,\n    .navbar .navbar-nav > li > a.btn.active:focus,\n    .navbar .navbar-nav > li > a.btn.active:hover,\n    .open >\n    .navbar .navbar-nav > li > a.btn.dropdown-toggle,\n    .open >\n    .navbar .navbar-nav > li > a.btn.dropdown-toggle:focus,\n    .open >\n    .navbar .navbar-nav > li > a.btn.dropdown-toggle:hover,\n    .navbar .navbar-nav > li > a.btn.btn-default,\n    .navbar .navbar-nav > li > a.btn.btn-default:hover,\n    .navbar .navbar-nav > li > a.btn.btn-default:focus,\n    .navbar .navbar-nav > li > a.btn.btn-default:active,\n    .navbar .navbar-nav > li > a.btn.btn-default.active,\n    .navbar .navbar-nav > li > a.btn.btn-default:active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-default:active:hover,\n    .navbar .navbar-nav > li > a.btn.btn-default.active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-default.active:hover,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:focus,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-default.dropdown-toggle:hover {\n      background-color: #999999;\n      color: #FFFFFF; }\n.btn:focus, .btn:active, .btn:hover, .btn.btn-default:focus, .btn.btn-default:active, .btn.btn-default:hover,\n    .navbar .navbar-nav > li > a.btn:focus,\n    .navbar .navbar-nav > li > a.btn:active,\n    .navbar .navbar-nav > li > a.btn:hover,\n    .navbar .navbar-nav > li > a.btn.btn-default:focus,\n    .navbar .navbar-nav > li > a.btn.btn-default:active,\n    .navbar .navbar-nav > li > a.btn.btn-default:hover {\n      -webkit-box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2); }\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active,\n    fieldset[disabled] .btn,\n    fieldset[disabled] .btn:hover,\n    fieldset[disabled] .btn:focus,\n    fieldset[disabled] .btn.focus,\n    fieldset[disabled] .btn:active,\n    fieldset[disabled] .btn.active, .btn.btn-default.disabled, .btn.btn-default.disabled:hover, .btn.btn-default.disabled:focus, .btn.btn-default.disabled.focus, .btn.btn-default.disabled:active, .btn.btn-default.disabled.active, .btn.btn-default:disabled, .btn.btn-default:disabled:hover, .btn.btn-default:disabled:focus, .btn.btn-default:disabled.focus, .btn.btn-default:disabled:active, .btn.btn-default:disabled.active, .btn.btn-default[disabled], .btn.btn-default[disabled]:hover, .btn.btn-default[disabled]:focus, .btn.btn-default[disabled].focus, .btn.btn-default[disabled]:active, .btn.btn-default[disabled].active,\n    fieldset[disabled] .btn.btn-default,\n    fieldset[disabled] .btn.btn-default:hover,\n    fieldset[disabled] .btn.btn-default:focus,\n    fieldset[disabled] .btn.btn-default.focus,\n    fieldset[disabled] .btn.btn-default:active,\n    fieldset[disabled] .btn.btn-default.active,\n    .navbar .navbar-nav > li > a.btn.disabled,\n    .navbar .navbar-nav > li > a.btn.disabled:hover,\n    .navbar .navbar-nav > li > a.btn.disabled:focus,\n    .navbar .navbar-nav > li > a.btn.disabled.focus,\n    .navbar .navbar-nav > li > a.btn.disabled:active,\n    .navbar .navbar-nav > li > a.btn.disabled.active,\n    .navbar .navbar-nav > li > a.btn:disabled,\n    .navbar .navbar-nav > li > a.btn:disabled:hover,\n    .navbar .navbar-nav > li > a.btn:disabled:focus,\n    .navbar .navbar-nav > li > a.btn:disabled.focus,\n    .navbar .navbar-nav > li > a.btn:disabled:active,\n    .navbar .navbar-nav > li > a.btn:disabled.active,\n    .navbar .navbar-nav > li > a.btn[disabled],\n    .navbar .navbar-nav > li > a.btn[disabled]:hover,\n    .navbar .navbar-nav > li > a.btn[disabled]:focus,\n    .navbar .navbar-nav > li > a.btn[disabled].focus,\n    .navbar .navbar-nav > li > a.btn[disabled]:active,\n    .navbar .navbar-nav > li > a.btn[disabled].active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn:hover,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn:focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn:active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.active,\n    .navbar .navbar-nav > li > a.btn.btn-default.disabled,\n    .navbar .navbar-nav > li > a.btn.btn-default.disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-default.disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-default.disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-default.disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-default.disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-default:disabled,\n    .navbar .navbar-nav > li > a.btn.btn-default:disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-default:disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-default:disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-default:disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-default:disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-default[disabled],\n    .navbar .navbar-nav > li > a.btn.btn-default[disabled]:hover,\n    .navbar .navbar-nav > li > a.btn.btn-default[disabled]:focus,\n    .navbar .navbar-nav > li > a.btn.btn-default[disabled].focus,\n    .navbar .navbar-nav > li > a.btn.btn-default[disabled]:active,\n    .navbar .navbar-nav > li > a.btn.btn-default[disabled].active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-default,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-default:hover,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-default:focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-default.focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-default:active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-default.active {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-simple, .btn.btn-default.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-default.btn-simple {\n      background-color: transparent;\n      color: #999999;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-default.btn-simple:hover, .btn.btn-default.btn-simple:focus, .btn.btn-default.btn-simple:active,\n      .navbar .navbar-nav > li > a.btn.btn-simple:hover,\n      .navbar .navbar-nav > li > a.btn.btn-simple:focus,\n      .navbar .navbar-nav > li > a.btn.btn-simple:active,\n      .navbar .navbar-nav > li > a.btn.btn-default.btn-simple:hover,\n      .navbar .navbar-nav > li > a.btn.btn-default.btn-simple:focus,\n      .navbar .navbar-nav > li > a.btn.btn-default.btn-simple:active {\n        background-color: transparent;\n        color: #999999; }\n.btn.btn-primary,\n  .navbar .navbar-nav > li > a.btn.btn-primary {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12); }\n.btn.btn-primary, .btn.btn-primary:hover, .btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary.active, .btn.btn-primary:active:focus, .btn.btn-primary:active:hover, .btn.btn-primary.active:focus, .btn.btn-primary.active:hover,\n    .open > .btn.btn-primary.dropdown-toggle,\n    .open > .btn.btn-primary.dropdown-toggle:focus,\n    .open > .btn.btn-primary.dropdown-toggle:hover,\n    .navbar .navbar-nav > li > a.btn.btn-primary,\n    .navbar .navbar-nav > li > a.btn.btn-primary:hover,\n    .navbar .navbar-nav > li > a.btn.btn-primary:focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary:active,\n    .navbar .navbar-nav > li > a.btn.btn-primary.active,\n    .navbar .navbar-nav > li > a.btn.btn-primary:active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary:active:hover,\n    .navbar .navbar-nav > li > a.btn.btn-primary.active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary.active:hover,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:focus,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-primary.dropdown-toggle:hover {\n      background-color: #9c27b0;\n      color: #FFFFFF; }\n.btn.btn-primary:focus, .btn.btn-primary:active, .btn.btn-primary:hover,\n    .navbar .navbar-nav > li > a.btn.btn-primary:focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary:active,\n    .navbar .navbar-nav > li > a.btn.btn-primary:hover {\n      -webkit-box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2); }\n.btn.btn-primary.disabled, .btn.btn-primary.disabled:hover, .btn.btn-primary.disabled:focus, .btn.btn-primary.disabled.focus, .btn.btn-primary.disabled:active, .btn.btn-primary.disabled.active, .btn.btn-primary:disabled, .btn.btn-primary:disabled:hover, .btn.btn-primary:disabled:focus, .btn.btn-primary:disabled.focus, .btn.btn-primary:disabled:active, .btn.btn-primary:disabled.active, .btn.btn-primary[disabled], .btn.btn-primary[disabled]:hover, .btn.btn-primary[disabled]:focus, .btn.btn-primary[disabled].focus, .btn.btn-primary[disabled]:active, .btn.btn-primary[disabled].active,\n    fieldset[disabled] .btn.btn-primary,\n    fieldset[disabled] .btn.btn-primary:hover,\n    fieldset[disabled] .btn.btn-primary:focus,\n    fieldset[disabled] .btn.btn-primary.focus,\n    fieldset[disabled] .btn.btn-primary:active,\n    fieldset[disabled] .btn.btn-primary.active,\n    .navbar .navbar-nav > li > a.btn.btn-primary.disabled,\n    .navbar .navbar-nav > li > a.btn.btn-primary.disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-primary.disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary.disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary.disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-primary.disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-primary:disabled,\n    .navbar .navbar-nav > li > a.btn.btn-primary:disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-primary:disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary:disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary:disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-primary:disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-primary[disabled],\n    .navbar .navbar-nav > li > a.btn.btn-primary[disabled]:hover,\n    .navbar .navbar-nav > li > a.btn.btn-primary[disabled]:focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary[disabled].focus,\n    .navbar .navbar-nav > li > a.btn.btn-primary[disabled]:active,\n    .navbar .navbar-nav > li > a.btn.btn-primary[disabled].active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-primary,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-primary:hover,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-primary:focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-primary.focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-primary:active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-primary.active {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-primary.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-primary.btn-simple {\n      background-color: transparent;\n      color: #9c27b0;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-primary.btn-simple:hover, .btn.btn-primary.btn-simple:focus, .btn.btn-primary.btn-simple:active,\n      .navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:hover,\n      .navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:focus,\n      .navbar .navbar-nav > li > a.btn.btn-primary.btn-simple:active {\n        background-color: transparent;\n        color: #9c27b0; }\n.btn.btn-info,\n  .navbar .navbar-nav > li > a.btn.btn-info {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12); }\n.btn.btn-info, .btn.btn-info:hover, .btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info.active, .btn.btn-info:active:focus, .btn.btn-info:active:hover, .btn.btn-info.active:focus, .btn.btn-info.active:hover,\n    .open > .btn.btn-info.dropdown-toggle,\n    .open > .btn.btn-info.dropdown-toggle:focus,\n    .open > .btn.btn-info.dropdown-toggle:hover,\n    .navbar .navbar-nav > li > a.btn.btn-info,\n    .navbar .navbar-nav > li > a.btn.btn-info:hover,\n    .navbar .navbar-nav > li > a.btn.btn-info:focus,\n    .navbar .navbar-nav > li > a.btn.btn-info:active,\n    .navbar .navbar-nav > li > a.btn.btn-info.active,\n    .navbar .navbar-nav > li > a.btn.btn-info:active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-info:active:hover,\n    .navbar .navbar-nav > li > a.btn.btn-info.active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-info.active:hover,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:focus,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-info.dropdown-toggle:hover {\n      background-color: #00bcd4;\n      color: #FFFFFF; }\n.btn.btn-info:focus, .btn.btn-info:active, .btn.btn-info:hover,\n    .navbar .navbar-nav > li > a.btn.btn-info:focus,\n    .navbar .navbar-nav > li > a.btn.btn-info:active,\n    .navbar .navbar-nav > li > a.btn.btn-info:hover {\n      -webkit-box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2); }\n.btn.btn-info.disabled, .btn.btn-info.disabled:hover, .btn.btn-info.disabled:focus, .btn.btn-info.disabled.focus, .btn.btn-info.disabled:active, .btn.btn-info.disabled.active, .btn.btn-info:disabled, .btn.btn-info:disabled:hover, .btn.btn-info:disabled:focus, .btn.btn-info:disabled.focus, .btn.btn-info:disabled:active, .btn.btn-info:disabled.active, .btn.btn-info[disabled], .btn.btn-info[disabled]:hover, .btn.btn-info[disabled]:focus, .btn.btn-info[disabled].focus, .btn.btn-info[disabled]:active, .btn.btn-info[disabled].active,\n    fieldset[disabled] .btn.btn-info,\n    fieldset[disabled] .btn.btn-info:hover,\n    fieldset[disabled] .btn.btn-info:focus,\n    fieldset[disabled] .btn.btn-info.focus,\n    fieldset[disabled] .btn.btn-info:active,\n    fieldset[disabled] .btn.btn-info.active,\n    .navbar .navbar-nav > li > a.btn.btn-info.disabled,\n    .navbar .navbar-nav > li > a.btn.btn-info.disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-info.disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-info.disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-info.disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-info.disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-info:disabled,\n    .navbar .navbar-nav > li > a.btn.btn-info:disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-info:disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-info:disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-info:disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-info:disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-info[disabled],\n    .navbar .navbar-nav > li > a.btn.btn-info[disabled]:hover,\n    .navbar .navbar-nav > li > a.btn.btn-info[disabled]:focus,\n    .navbar .navbar-nav > li > a.btn.btn-info[disabled].focus,\n    .navbar .navbar-nav > li > a.btn.btn-info[disabled]:active,\n    .navbar .navbar-nav > li > a.btn.btn-info[disabled].active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-info,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-info:hover,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-info:focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-info.focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-info:active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-info.active {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-info.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-info.btn-simple {\n      background-color: transparent;\n      color: #00bcd4;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-info.btn-simple:hover, .btn.btn-info.btn-simple:focus, .btn.btn-info.btn-simple:active,\n      .navbar .navbar-nav > li > a.btn.btn-info.btn-simple:hover,\n      .navbar .navbar-nav > li > a.btn.btn-info.btn-simple:focus,\n      .navbar .navbar-nav > li > a.btn.btn-info.btn-simple:active {\n        background-color: transparent;\n        color: #00bcd4; }\n.btn.btn-success,\n  .navbar .navbar-nav > li > a.btn.btn-success {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12); }\n.btn.btn-success, .btn.btn-success:hover, .btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success.active, .btn.btn-success:active:focus, .btn.btn-success:active:hover, .btn.btn-success.active:focus, .btn.btn-success.active:hover,\n    .open > .btn.btn-success.dropdown-toggle,\n    .open > .btn.btn-success.dropdown-toggle:focus,\n    .open > .btn.btn-success.dropdown-toggle:hover,\n    .navbar .navbar-nav > li > a.btn.btn-success,\n    .navbar .navbar-nav > li > a.btn.btn-success:hover,\n    .navbar .navbar-nav > li > a.btn.btn-success:focus,\n    .navbar .navbar-nav > li > a.btn.btn-success:active,\n    .navbar .navbar-nav > li > a.btn.btn-success.active,\n    .navbar .navbar-nav > li > a.btn.btn-success:active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-success:active:hover,\n    .navbar .navbar-nav > li > a.btn.btn-success.active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-success.active:hover,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:focus,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-success.dropdown-toggle:hover {\n      background-color: #4caf50;\n      color: #FFFFFF; }\n.btn.btn-success:focus, .btn.btn-success:active, .btn.btn-success:hover,\n    .navbar .navbar-nav > li > a.btn.btn-success:focus,\n    .navbar .navbar-nav > li > a.btn.btn-success:active,\n    .navbar .navbar-nav > li > a.btn.btn-success:hover {\n      -webkit-box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2); }\n.btn.btn-success.disabled, .btn.btn-success.disabled:hover, .btn.btn-success.disabled:focus, .btn.btn-success.disabled.focus, .btn.btn-success.disabled:active, .btn.btn-success.disabled.active, .btn.btn-success:disabled, .btn.btn-success:disabled:hover, .btn.btn-success:disabled:focus, .btn.btn-success:disabled.focus, .btn.btn-success:disabled:active, .btn.btn-success:disabled.active, .btn.btn-success[disabled], .btn.btn-success[disabled]:hover, .btn.btn-success[disabled]:focus, .btn.btn-success[disabled].focus, .btn.btn-success[disabled]:active, .btn.btn-success[disabled].active,\n    fieldset[disabled] .btn.btn-success,\n    fieldset[disabled] .btn.btn-success:hover,\n    fieldset[disabled] .btn.btn-success:focus,\n    fieldset[disabled] .btn.btn-success.focus,\n    fieldset[disabled] .btn.btn-success:active,\n    fieldset[disabled] .btn.btn-success.active,\n    .navbar .navbar-nav > li > a.btn.btn-success.disabled,\n    .navbar .navbar-nav > li > a.btn.btn-success.disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-success.disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-success.disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-success.disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-success.disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-success:disabled,\n    .navbar .navbar-nav > li > a.btn.btn-success:disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-success:disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-success:disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-success:disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-success:disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-success[disabled],\n    .navbar .navbar-nav > li > a.btn.btn-success[disabled]:hover,\n    .navbar .navbar-nav > li > a.btn.btn-success[disabled]:focus,\n    .navbar .navbar-nav > li > a.btn.btn-success[disabled].focus,\n    .navbar .navbar-nav > li > a.btn.btn-success[disabled]:active,\n    .navbar .navbar-nav > li > a.btn.btn-success[disabled].active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-success,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-success:hover,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-success:focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-success.focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-success:active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-success.active {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-success.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-success.btn-simple {\n      background-color: transparent;\n      color: #4caf50;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-success.btn-simple:hover, .btn.btn-success.btn-simple:focus, .btn.btn-success.btn-simple:active,\n      .navbar .navbar-nav > li > a.btn.btn-success.btn-simple:hover,\n      .navbar .navbar-nav > li > a.btn.btn-success.btn-simple:focus,\n      .navbar .navbar-nav > li > a.btn.btn-success.btn-simple:active {\n        background-color: transparent;\n        color: #4caf50; }\n.btn.btn-warning,\n  .navbar .navbar-nav > li > a.btn.btn-warning {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12); }\n.btn.btn-warning, .btn.btn-warning:hover, .btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning.active, .btn.btn-warning:active:focus, .btn.btn-warning:active:hover, .btn.btn-warning.active:focus, .btn.btn-warning.active:hover,\n    .open > .btn.btn-warning.dropdown-toggle,\n    .open > .btn.btn-warning.dropdown-toggle:focus,\n    .open > .btn.btn-warning.dropdown-toggle:hover,\n    .navbar .navbar-nav > li > a.btn.btn-warning,\n    .navbar .navbar-nav > li > a.btn.btn-warning:hover,\n    .navbar .navbar-nav > li > a.btn.btn-warning:focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning:active,\n    .navbar .navbar-nav > li > a.btn.btn-warning.active,\n    .navbar .navbar-nav > li > a.btn.btn-warning:active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning:active:hover,\n    .navbar .navbar-nav > li > a.btn.btn-warning.active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning.active:hover,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:focus,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-warning.dropdown-toggle:hover {\n      background-color: #ff9800;\n      color: #FFFFFF; }\n.btn.btn-warning:focus, .btn.btn-warning:active, .btn.btn-warning:hover,\n    .navbar .navbar-nav > li > a.btn.btn-warning:focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning:active,\n    .navbar .navbar-nav > li > a.btn.btn-warning:hover {\n      -webkit-box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2); }\n.btn.btn-warning.disabled, .btn.btn-warning.disabled:hover, .btn.btn-warning.disabled:focus, .btn.btn-warning.disabled.focus, .btn.btn-warning.disabled:active, .btn.btn-warning.disabled.active, .btn.btn-warning:disabled, .btn.btn-warning:disabled:hover, .btn.btn-warning:disabled:focus, .btn.btn-warning:disabled.focus, .btn.btn-warning:disabled:active, .btn.btn-warning:disabled.active, .btn.btn-warning[disabled], .btn.btn-warning[disabled]:hover, .btn.btn-warning[disabled]:focus, .btn.btn-warning[disabled].focus, .btn.btn-warning[disabled]:active, .btn.btn-warning[disabled].active,\n    fieldset[disabled] .btn.btn-warning,\n    fieldset[disabled] .btn.btn-warning:hover,\n    fieldset[disabled] .btn.btn-warning:focus,\n    fieldset[disabled] .btn.btn-warning.focus,\n    fieldset[disabled] .btn.btn-warning:active,\n    fieldset[disabled] .btn.btn-warning.active,\n    .navbar .navbar-nav > li > a.btn.btn-warning.disabled,\n    .navbar .navbar-nav > li > a.btn.btn-warning.disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-warning.disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning.disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning.disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-warning.disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-warning:disabled,\n    .navbar .navbar-nav > li > a.btn.btn-warning:disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-warning:disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning:disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning:disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-warning:disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-warning[disabled],\n    .navbar .navbar-nav > li > a.btn.btn-warning[disabled]:hover,\n    .navbar .navbar-nav > li > a.btn.btn-warning[disabled]:focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning[disabled].focus,\n    .navbar .navbar-nav > li > a.btn.btn-warning[disabled]:active,\n    .navbar .navbar-nav > li > a.btn.btn-warning[disabled].active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-warning,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-warning:hover,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-warning:focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-warning.focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-warning:active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-warning.active {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-warning.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-warning.btn-simple {\n      background-color: transparent;\n      color: #ff9800;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-warning.btn-simple:hover, .btn.btn-warning.btn-simple:focus, .btn.btn-warning.btn-simple:active,\n      .navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:hover,\n      .navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:focus,\n      .navbar .navbar-nav > li > a.btn.btn-warning.btn-simple:active {\n        background-color: transparent;\n        color: #ff9800; }\n.btn.btn-danger,\n  .navbar .navbar-nav > li > a.btn.btn-danger {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12); }\n.btn.btn-danger, .btn.btn-danger:hover, .btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger.active, .btn.btn-danger:active:focus, .btn.btn-danger:active:hover, .btn.btn-danger.active:focus, .btn.btn-danger.active:hover,\n    .open > .btn.btn-danger.dropdown-toggle,\n    .open > .btn.btn-danger.dropdown-toggle:focus,\n    .open > .btn.btn-danger.dropdown-toggle:hover,\n    .navbar .navbar-nav > li > a.btn.btn-danger,\n    .navbar .navbar-nav > li > a.btn.btn-danger:hover,\n    .navbar .navbar-nav > li > a.btn.btn-danger:focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger:active,\n    .navbar .navbar-nav > li > a.btn.btn-danger.active,\n    .navbar .navbar-nav > li > a.btn.btn-danger:active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger:active:hover,\n    .navbar .navbar-nav > li > a.btn.btn-danger.active:focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger.active:hover,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:focus,\n    .open >\n    .navbar .navbar-nav > li > a.btn.btn-danger.dropdown-toggle:hover {\n      background-color: #f44336;\n      color: #FFFFFF; }\n.btn.btn-danger:focus, .btn.btn-danger:active, .btn.btn-danger:hover,\n    .navbar .navbar-nav > li > a.btn.btn-danger:focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger:active,\n    .navbar .navbar-nav > li > a.btn.btn-danger:hover {\n      -webkit-box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2); }\n.btn.btn-danger.disabled, .btn.btn-danger.disabled:hover, .btn.btn-danger.disabled:focus, .btn.btn-danger.disabled.focus, .btn.btn-danger.disabled:active, .btn.btn-danger.disabled.active, .btn.btn-danger:disabled, .btn.btn-danger:disabled:hover, .btn.btn-danger:disabled:focus, .btn.btn-danger:disabled.focus, .btn.btn-danger:disabled:active, .btn.btn-danger:disabled.active, .btn.btn-danger[disabled], .btn.btn-danger[disabled]:hover, .btn.btn-danger[disabled]:focus, .btn.btn-danger[disabled].focus, .btn.btn-danger[disabled]:active, .btn.btn-danger[disabled].active,\n    fieldset[disabled] .btn.btn-danger,\n    fieldset[disabled] .btn.btn-danger:hover,\n    fieldset[disabled] .btn.btn-danger:focus,\n    fieldset[disabled] .btn.btn-danger.focus,\n    fieldset[disabled] .btn.btn-danger:active,\n    fieldset[disabled] .btn.btn-danger.active,\n    .navbar .navbar-nav > li > a.btn.btn-danger.disabled,\n    .navbar .navbar-nav > li > a.btn.btn-danger.disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-danger.disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger.disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger.disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-danger.disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-danger:disabled,\n    .navbar .navbar-nav > li > a.btn.btn-danger:disabled:hover,\n    .navbar .navbar-nav > li > a.btn.btn-danger:disabled:focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger:disabled.focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger:disabled:active,\n    .navbar .navbar-nav > li > a.btn.btn-danger:disabled.active,\n    .navbar .navbar-nav > li > a.btn.btn-danger[disabled],\n    .navbar .navbar-nav > li > a.btn.btn-danger[disabled]:hover,\n    .navbar .navbar-nav > li > a.btn.btn-danger[disabled]:focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger[disabled].focus,\n    .navbar .navbar-nav > li > a.btn.btn-danger[disabled]:active,\n    .navbar .navbar-nav > li > a.btn.btn-danger[disabled].active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-danger,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-danger:hover,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-danger:focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-danger.focus,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-danger:active,\n    fieldset[disabled]\n    .navbar .navbar-nav > li > a.btn.btn-danger.active {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-danger.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-danger.btn-simple {\n      background-color: transparent;\n      color: #f44336;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-danger.btn-simple:hover, .btn.btn-danger.btn-simple:focus, .btn.btn-danger.btn-simple:active,\n      .navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:hover,\n      .navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:focus,\n      .navbar .navbar-nav > li > a.btn.btn-danger.btn-simple:active {\n        background-color: transparent;\n        color: #f44336; }\n.btn.btn-white, .btn.btn-white:focus, .btn.btn-white:hover,\n  .navbar .navbar-nav > li > a.btn.btn-white,\n  .navbar .navbar-nav > li > a.btn.btn-white:focus,\n  .navbar .navbar-nav > li > a.btn.btn-white:hover {\n    background-color: #FFFFFF;\n    color: #999999; }\n.btn.btn-white.btn-simple,\n  .navbar .navbar-nav > li > a.btn.btn-white.btn-simple {\n    color: #FFFFFF;\n    background: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.btn.btn-facebook,\n  .navbar .navbar-nav > li > a.btn.btn-facebook {\n    background-color: #3b5998;\n    color: #fff;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12); }\n.btn.btn-facebook:focus, .btn.btn-facebook:active, .btn.btn-facebook:hover,\n    .navbar .navbar-nav > li > a.btn.btn-facebook:focus,\n    .navbar .navbar-nav > li > a.btn.btn-facebook:active,\n    .navbar .navbar-nav > li > a.btn.btn-facebook:hover {\n      background-color: #3b5998;\n      color: #fff;\n      -webkit-box-shadow: 0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2); }\n.btn.btn-facebook.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-facebook.btn-simple {\n      color: #3b5998;\n      background-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-twitter,\n  .navbar .navbar-nav > li > a.btn.btn-twitter {\n    background-color: #55acee;\n    color: #fff;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12); }\n.btn.btn-twitter:focus, .btn.btn-twitter:active, .btn.btn-twitter:hover,\n    .navbar .navbar-nav > li > a.btn.btn-twitter:focus,\n    .navbar .navbar-nav > li > a.btn.btn-twitter:active,\n    .navbar .navbar-nav > li > a.btn.btn-twitter:hover {\n      background-color: #55acee;\n      color: #fff;\n      -webkit-box-shadow: 0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2); }\n.btn.btn-twitter.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-twitter.btn-simple {\n      color: #55acee;\n      background-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-pinterest,\n  .navbar .navbar-nav > li > a.btn.btn-pinterest {\n    background-color: #cc2127;\n    color: #fff;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12); }\n.btn.btn-pinterest:focus, .btn.btn-pinterest:active, .btn.btn-pinterest:hover,\n    .navbar .navbar-nav > li > a.btn.btn-pinterest:focus,\n    .navbar .navbar-nav > li > a.btn.btn-pinterest:active,\n    .navbar .navbar-nav > li > a.btn.btn-pinterest:hover {\n      background-color: #cc2127;\n      color: #fff;\n      -webkit-box-shadow: 0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2); }\n.btn.btn-pinterest.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-pinterest.btn-simple {\n      color: #cc2127;\n      background-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-google,\n  .navbar .navbar-nav > li > a.btn.btn-google {\n    background-color: #dd4b39;\n    color: #fff;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12); }\n.btn.btn-google:focus, .btn.btn-google:active, .btn.btn-google:hover,\n    .navbar .navbar-nav > li > a.btn.btn-google:focus,\n    .navbar .navbar-nav > li > a.btn.btn-google:active,\n    .navbar .navbar-nav > li > a.btn.btn-google:hover {\n      background-color: #dd4b39;\n      color: #fff;\n      -webkit-box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2); }\n.btn.btn-google.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-google.btn-simple {\n      color: #dd4b39;\n      background-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn.btn-instagram,\n  .navbar .navbar-nav > li > a.btn.btn-instagram {\n    background-color: #125688;\n    color: #fff;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12); }\n.btn.btn-instagram:focus, .btn.btn-instagram:active, .btn.btn-instagram:hover,\n    .navbar .navbar-nav > li > a.btn.btn-instagram:focus,\n    .navbar .navbar-nav > li > a.btn.btn-instagram:active,\n    .navbar .navbar-nav > li > a.btn.btn-instagram:hover {\n      background-color: #125688;\n      color: #fff;\n      -webkit-box-shadow: 0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2);\n              box-shadow: 0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2); }\n.btn.btn-instagram.btn-simple,\n    .navbar .navbar-nav > li > a.btn.btn-instagram.btn-simple {\n      color: #125688;\n      background-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.btn:focus, .btn:active, .btn:active:focus,\n  .navbar .navbar-nav > li > a.btn:focus,\n  .navbar .navbar-nav > li > a.btn:active,\n  .navbar .navbar-nav > li > a.btn:active:focus {\n    outline: 0; }\n.btn.btn-round,\n  .navbar .navbar-nav > li > a.btn.btn-round {\n    border-radius: 30px; }\n.btn:not(.btn-just-icon):not(.btn-fab) .fa,\n  .navbar .navbar-nav > li > a.btn:not(.btn-just-icon):not(.btn-fab) .fa {\n    font-size: 18px;\n    margin-top: -2px;\n    position: relative;\n    top: 2px; }\n.btn.btn-fab,\n  .navbar .navbar-nav > li > a.btn.btn-fab {\n    border-radius: 50%;\n    font-size: 24px;\n    height: 56px;\n    margin: auto;\n    min-width: 56px;\n    width: 56px;\n    padding: 0;\n    overflow: hidden;\n    position: relative;\n    line-height: normal; }\n.btn.btn-fab .ripple-container,\n    .navbar .navbar-nav > li > a.btn.btn-fab .ripple-container {\n      border-radius: 50%; }\n.btn.btn-fab.btn-fab-mini,\n    .btn-group-sm .btn.btn-fab,\n    .navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini,\n    .btn-group-sm\n    .navbar .navbar-nav > li > a.btn.btn-fab {\n      height: 40px;\n      min-width: 40px;\n      width: 40px; }\n.btn.btn-fab.btn-fab-mini.material-icons,\n      .btn-group-sm .btn.btn-fab.material-icons,\n      .navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini.material-icons,\n      .btn-group-sm\n      .navbar .navbar-nav > li > a.btn.btn-fab.material-icons {\n        top: -3.5px;\n        left: -3.5px; }\n.btn.btn-fab.btn-fab-mini .material-icons,\n      .btn-group-sm .btn.btn-fab .material-icons,\n      .navbar .navbar-nav > li > a.btn.btn-fab.btn-fab-mini .material-icons,\n      .btn-group-sm\n      .navbar .navbar-nav > li > a.btn.btn-fab .material-icons {\n        font-size: 17px; }\n.btn.btn-fab i.material-icons,\n    .navbar .navbar-nav > li > a.btn.btn-fab i.material-icons {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-12px, -12px);\n              transform: translate(-12px, -12px);\n      line-height: 24px;\n      width: 24px;\n      font-size: 24px; }\n.btn.btn-lg,\n  .btn-group-lg .btn,\n  .navbar .navbar-nav > li > a.btn.btn-lg,\n  .btn-group-lg\n  .navbar .navbar-nav > li > a.btn {\n    font-size: 14px;\n    padding: 18px 36px; }\n.btn.btn-sm,\n  .btn-group-sm .btn,\n  .navbar .navbar-nav > li > a.btn.btn-sm,\n  .btn-group-sm\n  .navbar .navbar-nav > li > a.btn {\n    padding: 5px 20px;\n    font-size: 11px; }\n.btn.btn-xs,\n  .btn-group-xs .btn,\n  .navbar .navbar-nav > li > a.btn.btn-xs,\n  .btn-group-xs\n  .navbar .navbar-nav > li > a.btn {\n    padding: 4px 15px;\n    font-size: 10px; }\n.btn.btn-just-icon,\n  .navbar .navbar-nav > li > a.btn.btn-just-icon {\n    font-size: 20px;\n    padding: 12px 12px;\n    line-height: 1em; }\n.btn.btn-just-icon i,\n    .navbar .navbar-nav > li > a.btn.btn-just-icon i {\n      width: 20px; }\n.btn.btn-just-icon.btn-lg,\n    .navbar .navbar-nav > li > a.btn.btn-just-icon.btn-lg {\n      font-size: 22px;\n      padding: 13px 18px; }\n.btn .material-icons {\n  vertical-align: middle;\n  font-size: 17px;\n  top: -1px;\n  position: relative; }\n.navbar .navbar-nav > li > a.btn {\n  margin-top: 2px;\n  margin-bottom: 2px; }\n.navbar .navbar-nav > li > a.btn.btn-fab {\n    margin: 5px 2px; }\n.navbar .navbar-nav > li > a:not(.btn) .material-icons {\n  margin-top: -3px;\n  top: 0px;\n  position: relative;\n  margin-right: 3px; }\n.navbar .navbar-nav > li > .profile-photo {\n  margin: 5px 2px; }\n.navbar-default:not(.navbar-transparent) .navbar-nav > li > a.btn.btn-white.btn-simple {\n  color: #555555; }\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  margin: 10px 1px; }\n.btn-group.open > .dropdown-toggle.btn, .btn-group.open > .dropdown-toggle.btn.btn-default,\n  .btn-group-vertical.open > .dropdown-toggle.btn,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-default {\n    background-color: #FFFFFF; }\n.btn-group.open > .dropdown-toggle.btn.btn-inverse,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-inverse {\n    background-color: #212121; }\n.btn-group.open > .dropdown-toggle.btn.btn-primary,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-primary {\n    background-color: #9c27b0; }\n.btn-group.open > .dropdown-toggle.btn.btn-success,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-success {\n    background-color: #4caf50; }\n.btn-group.open > .dropdown-toggle.btn.btn-info,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-info {\n    background-color: #00bcd4; }\n.btn-group.open > .dropdown-toggle.btn.btn-warning,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-warning {\n    background-color: #ff9800; }\n.btn-group.open > .dropdown-toggle.btn.btn-danger,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-danger {\n    background-color: #f44336; }\n.btn-group.open > .dropdown-toggle.btn.btn-rose,\n  .btn-group-vertical.open > .dropdown-toggle.btn.btn-rose {\n    background-color: #e91e63; }\n.btn-group .dropdown-menu,\n  .btn-group-vertical .dropdown-menu {\n    border-radius: 0 0 3px 3px; }\n.btn-group.btn-group-raised,\n  .btn-group-vertical.btn-group-raised {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n.btn-group .btn + .btn,\n  .btn-group .btn,\n  .btn-group .btn:active,\n  .btn-group .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn,\n  .btn-group-vertical .btn:active,\n  .btn-group-vertical .btn-group {\n    margin: 0; }\n.close {\n  font-size: inherit;\n  color: #FFFFFF;\n  opacity: .9;\n  text-shadow: none; }\n.close:hover, .close:focus {\n    opacity: 1;\n    color: #FFFFFF; }\n.close i {\n    font-size: 20px; }\n.loader {\n  margin: 0 auto;\n  width: 60px;\n  position: absolute;\n  display: block;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  -webkit-transform: translate3d(0, -50%, 0);\n  transform: translate3d(0, -50%, 0);\n  text-align: center;\n  top: 50%; }\n.loader:before {\n    content: '';\n    display: block;\n    padding-top: 100%; }\n.circular {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  height: 100%;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto; }\n.path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite, color 2s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite, color 2s ease-in-out infinite;\n  stroke-linecap: round; }\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px; }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px; } }\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px; }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px; } }\n@-webkit-keyframes color {\n  100%,\n  0% {\n    stroke: #9c27b0; }\n  50% {\n    stroke: #ff9800; }\n  100% {\n    stroke: #9c27b0; } }\n@keyframes color {\n  100%,\n  0% {\n    stroke: #9c27b0; }\n  50% {\n    stroke: #ff9800; }\n  100% {\n    stroke: #9c27b0; } }\nbody {\n  background-color: #EEEEEE;\n  color: #3C4858;\n  min-height: 100vh; }\nbody.inverse {\n    background: #333333; }\nbody.inverse, body.inverse .form-control {\n      color: #ffffff; }\nbody.inverse .modal,\n    body.inverse .modal .form-control,\n    body.inverse .panel-default,\n    body.inverse .panel-default .form-control,\n    body.inverse .card,\n    body.inverse .card .form-control {\n      background-color: initial;\n      color: initial; }\n.wrapper.wrapper-full-page {\n  height: auto;\n  min-height: 100vh; }\nblockquote p {\n  font-style: italic; }\n.life-of-material-dashboard {\n  background: #FFFFFF; }\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1.5em; }\n.serif-font {\n  font-family: \"Roboto Slab\", \"Times New Roman\", serif; }\n.page-header {\n  height: 60vh;\n  background-position: center center;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px; }\na {\n  color: #9c27b0; }\na:hover, a:focus {\n    color: #89229b;\n    text-decoration: none; }\na.text-info:hover, a.text-info:focus {\n    color: #00a5bb; }\na .material-icons {\n    vertical-align: middle; }\n/*           Animations              */\n.animation-transition-general, .sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear; }\n.animation-transition-slow {\n  -webkit-transition: all 370ms linear;\n  transition: all 370ms linear; }\n.animation-transition-fast, .navbar {\n  -webkit-transition: all 150ms ease 0s;\n  transition: all 150ms ease 0s; }\nlegend {\n  border-bottom: 0; }\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent; }\n*:focus {\n    outline: 0; }\na:focus, a:active,\nbutton:active, button:focus, button:hover,\nbutton::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0 !important; }\nlegend {\n  margin-bottom: 20px;\n  font-size: 21px; }\noutput {\n  padding-top: 8px;\n  font-size: 14px;\n  line-height: 1.42857143; }\n.form-control {\n  height: 36px;\n  padding: 7px 0;\n  font-size: 14px;\n  line-height: 1.42857143; }\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 36px; }\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 24px; }\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 44px; } }\n.radio label,\n.checkbox label {\n  min-height: 20px; }\n.form-control-static {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: 34px; }\n.input-sm .input-sm {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n  border-radius: 0; }\n.input-sm select.input-sm {\n  height: 24px;\n  line-height: 24px; }\n.input-sm textarea.input-sm,\n.input-sm select[multiple].input-sm {\n  height: auto; }\n.form-group-sm .form-control {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5; }\n.form-group-sm select.form-control {\n  height: 24px;\n  line-height: 24px; }\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n.form-group-sm .form-control-static {\n  height: 24px;\n  min-height: 31px;\n  padding: 4px 0;\n  font-size: 11px;\n  line-height: 1.5; }\n.input-lg .input-lg {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0; }\n.input-lg select.input-lg {\n  height: 44px;\n  line-height: 44px; }\n.input-lg textarea.input-lg,\n.input-lg select[multiple].input-lg {\n  height: auto; }\n.form-group-lg .form-control {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.3333333; }\n.form-group-lg select.form-control {\n  height: 44px;\n  line-height: 44px; }\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n.form-group-lg .form-control-static {\n  height: 44px;\n  min-height: 38px;\n  padding: 10px 0;\n  font-size: 18px;\n  line-height: 1.3333333; }\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 8px; }\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 28px; }\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 8px; } }\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 12.9999997px;\n    font-size: 18px; } }\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 4px;\n    font-size: 11px; } }\n.label {\n  border-radius: 2px; }\n.label, .label.label-default {\n    background-color: #FFFFFF; }\n.label.label-inverse {\n    background-color: #212121; }\n.label.label-primary {\n    background-color: #9c27b0; }\n.label.label-success {\n    background-color: #4caf50; }\n.label.label-info {\n    background-color: #00bcd4; }\n.label.label-warning {\n    background-color: #ff9800; }\n.label.label-danger {\n    background-color: #f44336; }\n.label.label-rose {\n    background-color: #e91e63; }\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#9c27b0), to(#9c27b0)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: transparent;\n  -webkit-transition: background 0s ease-out;\n  transition: background 0s ease-out;\n  float: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 0;\n  font-weight: 400; }\n.form-control::-moz-placeholder,\n  .form-group .form-control::-moz-placeholder {\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-control:-ms-input-placeholder,\n  .form-group .form-control:-ms-input-placeholder {\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-control::-webkit-input-placeholder,\n  .form-group .form-control::-webkit-input-placeholder {\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-control[readonly], .form-control[disabled],\n  fieldset[disabled] .form-control,\n  .form-group .form-control[readonly],\n  .form-group .form-control[disabled],\n  fieldset[disabled]\n  .form-group .form-control {\n    background-color: transparent; }\n.form-control[disabled],\n  fieldset[disabled] .form-control,\n  .form-group .form-control[disabled],\n  fieldset[disabled]\n  .form-group .form-control {\n    background-image: none;\n    border-bottom: 1px dotted #D2D2D2; }\n.form-group {\n  position: relative; }\n.form-group.label-static label.control-label, .form-group.label-placeholder label.control-label, .form-group.label-floating label.control-label {\n    position: absolute;\n    pointer-events: none;\n    -webkit-transition: 0.3s ease all;\n    transition: 0.3s ease all; }\n.form-group.label-floating label.control-label {\n    will-change: left, top, contents; }\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n    display: none; }\n.form-group .help-block {\n    position: absolute;\n    display: none; }\n.form-group.is-focused .form-control {\n    outline: none;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#9c27b0), to(#9c27b0)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n    background-size: 100% 2px, 100% 1px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s; }\n.form-group.is-focused .form-control .material-input:after {\n      background-color: #9c27b0; }\n.form-group.is-focused.form-info .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#00bcd4), to(#00bcd4)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.is-focused.form-success .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#4caf50), to(#4caf50)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.is-focused.form-warning .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#ff9800), to(#ff9800)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.is-focused.form-danger .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#f44336), to(#f44336)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.is-focused.form-rose .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#e91e63), to(#e91e63)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#e91e63, #e91e63), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.is-focused.form-white .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#FFFFFF)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.is-focused.form-black .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#555555), to(#555555)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#555555, #555555), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.is-focused.label-placeholder label,\n  .form-group.is-focused.label-placeholder label.control-label {\n    color: #AAAAAA; }\n.form-group.is-focused .help-block {\n    display: block; }\n.form-group.has-warning .form-control {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.form-group.has-warning.is-focused .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#ff9800), to(#ff9800)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#ff9800, #ff9800), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.has-warning label.control-label,\n  .form-group.has-warning .help-block {\n    color: #ff9800; }\n.form-group.has-error .form-control {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.form-group.has-error.is-focused .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#f44336), to(#f44336)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.has-error label.control-label,\n  .form-group.has-error .help-block {\n    color: #f44336; }\n.form-group.has-success .form-control {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.form-group.has-success.is-focused .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#4caf50), to(#4caf50)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.has-success label.control-label,\n  .form-group.has-success .help-block {\n    color: #4caf50; }\n.form-group.has-info .form-control {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.form-group.has-info.is-focused .form-control {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#00bcd4), to(#00bcd4)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: linear-gradient(#00bcd4, #00bcd4), linear-gradient(#D2D2D2, #D2D2D2); }\n.form-group.has-info label.control-label,\n  .form-group.has-info .help-block {\n    color: #00bcd4; }\n.form-group textarea {\n    resize: none; }\n.form-group textarea ~ .form-control-highlight {\n      margin-top: -11px; }\n.form-group select {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none; }\n.form-group select ~ .material-input:after {\n      display: none; }\n.form-control {\n  margin-bottom: 7px; }\n.form-control::-moz-placeholder {\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-control:-ms-input-placeholder {\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-control::-webkit-input-placeholder {\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #AAAAAA;\n    font-weight: 400; }\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #AAAAAA;\n  font-weight: 400; }\nlabel.control-label {\n  font-size: 11px;\n  line-height: 1.07142857;\n  color: #AAAAAA;\n  font-weight: 400;\n  margin: 16px 0 0 0; }\n.help-block {\n  margin-top: 0;\n  font-size: 11px; }\n.form-group {\n  padding-bottom: 7px;\n  margin: 27px 0 0 0; }\n.form-group .form-control {\n    margin-bottom: 7px; }\n.form-group .form-control::-moz-placeholder {\n      font-size: 14px;\n      line-height: 1.42857143;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group .form-control:-ms-input-placeholder {\n      font-size: 14px;\n      line-height: 1.42857143;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group .form-control::-webkit-input-placeholder {\n      font-size: 14px;\n      line-height: 1.42857143;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group .checkbox label,\n  .form-group .radio label,\n  .form-group label {\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-group label.control-label {\n    font-size: 11px;\n    line-height: 1.07142857;\n    color: #AAAAAA;\n    font-weight: 400;\n    margin: 16px 0 0 0; }\n.form-group .help-block {\n    margin-top: 0;\n    font-size: 11px; }\n.form-group.label-floating label.control-label, .form-group.label-placeholder label.control-label {\n    top: -7px;\n    font-size: 14px;\n    line-height: 1.42857143; }\n.form-group.label-static label.control-label, .form-group.label-floating.is-focused label.control-label, .form-group.label-floating:not(.is-empty) label.control-label {\n    top: -28px;\n    left: 0;\n    font-size: 11px;\n    line-height: 1.07142857; }\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n    top: -28px;\n    left: 0;\n    font-size: 11px;\n    line-height: 1.07142857; }\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0; }\n.form-group.form-group-sm .form-control {\n    margin-bottom: 3px; }\n.form-group.form-group-sm .form-control::-moz-placeholder {\n      font-size: 11px;\n      line-height: 1.5;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n      font-size: 11px;\n      line-height: 1.5;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n      font-size: 11px;\n      line-height: 1.5;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group.form-group-sm .checkbox label,\n  .form-group.form-group-sm .radio label,\n  .form-group.form-group-sm label {\n    font-size: 11px;\n    line-height: 1.5;\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-group.form-group-sm label.control-label {\n    font-size: 9px;\n    line-height: 1.125;\n    color: #AAAAAA;\n    font-weight: 400;\n    margin: 16px 0 0 0; }\n.form-group.form-group-sm .help-block {\n    margin-top: 0;\n    font-size: 9px; }\n.form-group.form-group-sm.label-floating label.control-label, .form-group.form-group-sm.label-placeholder label.control-label {\n    top: -11px;\n    font-size: 11px;\n    line-height: 1.5; }\n.form-group.form-group-sm.label-static label.control-label, .form-group.form-group-sm.label-floating.is-focused label.control-label, .form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n    top: -25px;\n    left: 0;\n    font-size: 9px;\n    line-height: 1.125; }\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n    top: -25px;\n    left: 0;\n    font-size: 9px;\n    line-height: 1.125; }\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0; }\n.form-group.form-group-lg .form-control {\n    margin-bottom: 9px; }\n.form-group.form-group-lg .form-control::-moz-placeholder {\n      font-size: 18px;\n      line-height: 1.3333333;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n      font-size: 18px;\n      line-height: 1.3333333;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n      font-size: 18px;\n      line-height: 1.3333333;\n      color: #AAAAAA;\n      font-weight: 400; }\n.form-group.form-group-lg .checkbox label,\n  .form-group.form-group-lg .radio label,\n  .form-group.form-group-lg label {\n    font-size: 18px;\n    line-height: 1.3333333;\n    color: #AAAAAA;\n    font-weight: 400; }\n.form-group.form-group-lg label.control-label {\n    font-size: 14px;\n    line-height: 0.99999998;\n    color: #AAAAAA;\n    font-weight: 400;\n    margin: 16px 0 0 0; }\n.form-group.form-group-lg .help-block {\n    margin-top: 0;\n    font-size: 14px; }\n.form-group.form-group-lg.label-floating label.control-label, .form-group.form-group-lg.label-placeholder label.control-label {\n    top: -5px;\n    font-size: 18px;\n    line-height: 1.3333333; }\n.form-group.form-group-lg.label-static label.control-label, .form-group.form-group-lg.label-floating.is-focused label.control-label, .form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n    top: -32px;\n    left: 0;\n    font-size: 14px;\n    line-height: 0.99999998; }\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n    top: -32px;\n    left: 0;\n    font-size: 14px;\n    line-height: 0.99999998; }\nselect.form-control {\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 0; }\n.form-group.is-focused select.form-control {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-color: #D2D2D2; }\nselect.form-control[multiple],\n  .form-group.is-focused select.form-control[multiple] {\n    height: 85px; }\n.input-group-btn .btn {\n  margin: 0 0 7px 0; }\n.form-group.form-group-sm .input-group-btn .btn {\n  margin: 0 0 3px 0; }\n.form-group.form-group-lg .input-group-btn .btn {\n  margin: 0 0 9px 0; }\n.input-group .input-group-btn {\n  padding: 0 12px; }\n.input-group .input-group-addon {\n  border: 0;\n  background: transparent;\n  padding: 6px 15px 0px; }\n.form-group input[type=file] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100; }\n.form-control-feedback {\n  opacity: 0; }\n.has-success .form-control-feedback {\n    color: #4caf50;\n    opacity: 1; }\n.has-error .form-control-feedback {\n    color: #f44336;\n    opacity: 1; }\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 0; }\n.form-horizontal .radio {\n  margin-bottom: 10px; }\n.form-horizontal label {\n  text-align: right; }\n.form-horizontal label.control-label {\n  margin: 0; }\n.form-newsletter .input-group,\n.form-newsletter .form-group {\n  float: left;\n  width: 78%;\n  margin-right: 2%;\n  margin-top: 9px; }\n.form-newsletter .btn {\n  float: left;\n  width: 20%;\n  margin: 9px 0 0; }\n.alert {\n  border: 0;\n  border-radius: 0;\n  position: relative;\n  padding: 20px 15px;\n  line-height: 20px; }\n.alert b {\n    font-weight: 500;\n    text-transform: uppercase;\n    font-size: 12px; }\n.alert, .alert.alert-default {\n    background-color: white;\n    color: #555555;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2); }\n.alert a, .alert .alert-link, .alert.alert-default a, .alert.alert-default .alert-link {\n      color: #555555; }\n.alert.alert-inverse {\n    background-color: #2e2e2e;\n    color: #fff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2); }\n.alert.alert-inverse a, .alert.alert-inverse .alert-link {\n      color: #fff; }\n.alert.alert-primary {\n    background-color: #af2cc5;\n    color: #ffffff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n.alert.alert-primary a, .alert.alert-primary .alert-link {\n      color: #ffffff; }\n.alert.alert-success {\n    background-color: #5cb860;\n    color: #ffffff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n.alert.alert-success a, .alert.alert-success .alert-link {\n      color: #ffffff; }\n.alert.alert-info {\n    background-color: #00d3ee;\n    color: #ffffff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2); }\n.alert.alert-info a, .alert.alert-info .alert-link {\n      color: #ffffff; }\n.alert.alert-warning {\n    background-color: #ffa21a;\n    color: #ffffff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2); }\n.alert.alert-warning a, .alert.alert-warning .alert-link {\n      color: #ffffff; }\n.alert.alert-danger {\n    background-color: #f55a4e;\n    color: #ffffff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2); }\n.alert.alert-danger a, .alert.alert-danger .alert-link {\n      color: #ffffff; }\n.alert.alert-rose {\n    background-color: #eb3573;\n    color: #ffffff;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2); }\n.alert.alert-rose a, .alert.alert-rose .alert-link {\n      color: #ffffff; }\n.alert-info, .alert-danger, .alert-warning, .alert-success {\n    color: #ffffff; }\n.alert-default a, .alert-default .alert-link {\n    color: rgba(0,0,0, 0.87); }\n.alert i[data-notify=\"icon\"] {\n    font-size: 30px;\n    display: block;\n    left: 15px;\n    position: absolute;\n    top: 50%;\n    margin-top: -15px; }\n.alert span {\n    display: block;\n    max-width: 89%; }\n.alert .alert-icon {\n    display: block;\n    float: left;\n    margin-right: 15px; }\n.alert .alert-icon i {\n      margin-top: -7px;\n      top: 5px;\n      position: relative; }\n.alert.alert-with-icon {\n  padding-left: 65px; }\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 1em;\n  font-weight: 300; }\n.table .radio,\n.table .checkbox {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 10px;\n  padding: 0;\n  width: 15px; }\n.table .radio .icons,\n  .table .checkbox .icons {\n    position: relative; }\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle; }\n.table > thead > tr > th {\n  padding-bottom: 4px; }\n.table .td-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.table .td-actions .btn {\n    margin: 0px;\n    padding: 5px; }\n.table > tbody > tr {\n  position: relative; }\n.checkbox label {\n  cursor: pointer;\n  padding-left: 0;\n  color: rgba(0,0,0, 0.26); }\n.form-group.is-focused .checkbox label {\n    color: rgba(0,0,0, 0.26); }\n.form-group.is-focused .checkbox label:hover, .form-group.is-focused .checkbox label:focus {\n      color: rgba(0,0,0, .54); }\nfieldset[disabled] .form-group.is-focused .checkbox label {\n      color: rgba(0,0,0, 0.26); }\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  left: 0;\n  pointer-events: none; }\n.checkbox .checkbox-material {\n  vertical-align: middle;\n  position: relative;\n  top: 3px;\n  padding-right: 5px; }\n.checkbox .checkbox-material:before {\n    display: block;\n    position: absolute;\n    left: 0;\n    content: \"\";\n    background-color: rgba(0, 0, 0, 0.84);\n    height: 20px;\n    width: 20px;\n    border-radius: 100%;\n    z-index: 1;\n    opacity: 0;\n    margin: 0;\n    -webkit-transform: scale3d(2.3, 2.3, 1);\n            transform: scale3d(2.3, 2.3, 1); }\n.checkbox .checkbox-material .check {\n    position: relative;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border: 1px solid rgba(0,0,0, .54);\n    overflow: hidden;\n    z-index: 1;\n    border-radius: 3px; }\n.checkbox .checkbox-material .check:before {\n    position: absolute;\n    content: \"\";\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    display: block;\n    margin-top: -3px;\n    margin-left: 7px;\n    width: 0;\n    height: 0;\n    background: red;\n    -webkit-box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;\n            box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;\n    -webkit-animation: checkbox-off 0.3s forwards;\n            animation: checkbox-off 0.3s forwards; }\n.checkbox input[type=checkbox]:focus + .checkbox-material .check:after {\n  opacity: 0.2; }\n.checkbox input[type=checkbox]:checked + .checkbox-material .check {\n  background: #9c27b0; }\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:before {\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n          box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  -webkit-animation: checkbox-on 0.3s forwards;\n          animation: checkbox-on 0.3s forwards; }\n.checkbox input[type=checkbox]:checked + .checkbox-material:before {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms; }\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:after {\n  -webkit-animation: rippleOn 500ms forwards;\n          animation: rippleOn 500ms forwards; }\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material:before {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms; }\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms; }\nfieldset[disabled] .checkbox,\nfieldset[disabled] .checkbox input[type=checkbox],\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check,\n.checkbox input[type=checkbox][disabled] + .circle {\n  opacity: 0.5; }\n.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check {\n  border-color: #000000;\n  opacity: .26; }\n.checkbox input[type=checkbox][disabled] + .checkbox-material .check:after {\n  background-color: rgba(0,0,0, 0.87);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n@-webkit-keyframes checkbox-on {\n  0% {\n    -webkit-box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n            box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px; }\n  50% {\n    -webkit-box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n            box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px; }\n  100% {\n    -webkit-box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n            box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px; } }\n@keyframes checkbox-on {\n  0% {\n    -webkit-box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n            box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px; }\n  50% {\n    -webkit-box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n            box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px; }\n  100% {\n    -webkit-box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n            box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px; } }\n@-webkit-keyframes rippleOn {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 0; } }\n@keyframes rippleOn {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 0; } }\n@-webkit-keyframes rippleOff {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 0; } }\n@keyframes rippleOff {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 0; } }\n.radio label {\n  cursor: pointer;\n  padding-left: 35px;\n  position: relative;\n  color: rgba(0,0,0, 0.26); }\n.form-group.is-focused .radio label {\n    color: rgba(0,0,0, 0.26); }\n.form-group.is-focused .radio label:hover, .form-group.is-focused .radio label:focus {\n      color: rgba(0,0,0, .54); }\nfieldset[disabled] .form-group.is-focused .radio label {\n      color: rgba(0,0,0, 0.26); }\n.radio label span {\n    display: block;\n    position: absolute;\n    left: 10px;\n    top: 2px;\n    -webkit-transition-duration: 0.2s;\n            transition-duration: 0.2s; }\n.radio label .circle {\n    border: 1px solid rgba(0,0,0, .54);\n    height: 15px;\n    width: 15px;\n    border-radius: 100%; }\n.radio label .check {\n    height: 15px;\n    width: 15px;\n    border-radius: 100%;\n    background-color: #9c27b0;\n    -webkit-transform: scale3d(0, 0, 0);\n            transform: scale3d(0, 0, 0); }\n.radio label .check:after {\n    display: block;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(0,0,0, 0.87);\n    left: -18px;\n    top: -18px;\n    height: 50px;\n    width: 50px;\n    border-radius: 100%;\n    z-index: 1;\n    opacity: 0;\n    margin: 0;\n    -webkit-transform: scale3d(1.5, 1.5, 1);\n            transform: scale3d(1.5, 1.5, 1); }\n.radio label input[type=radio]:not(:checked) ~ .check:after {\n    -webkit-animation: rippleOff 500ms;\n            animation: rippleOff 500ms; }\n.radio label input[type=radio]:checked ~ .check:after {\n    -webkit-animation: rippleOn 500ms;\n            animation: rippleOn 500ms; }\n.radio input[type=radio] {\n  opacity: 0;\n  height: 0;\n  width: 0;\n  overflow: hidden; }\n.radio input[type=radio]:checked ~ .check,\n  .radio input[type=radio]:checked ~ .circle {\n    opacity: 1; }\n.radio input[type=radio]:checked ~ .check {\n    background-color: #9c27b0; }\n.radio input[type=radio]:checked ~ .circle {\n    border-color: #9c27b0; }\n.radio input[type=radio]:checked ~ .check {\n    -webkit-transform: scale3d(0.65, 0.65, 1);\n            transform: scale3d(0.65, 0.65, 1); }\n.radio input[type=radio][disabled] ~ .check,\n.radio input[type=radio][disabled] ~ .circle {\n  opacity: 0.26; }\n.radio input[type=radio][disabled] ~ .check {\n  background-color: #000000; }\n.radio input[type=radio][disabled] ~ .circle {\n  border-color: #000000; }\n@keyframes rippleOn {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 0; } }\n@keyframes rippleOff {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 0; } }\n.togglebutton {\n  vertical-align: middle; }\n.togglebutton, .togglebutton label, .togglebutton input, .togglebutton .toggle {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.togglebutton label {\n    cursor: pointer;\n    color: rgba(0,0,0, 0.26); }\n.form-group.is-focused .togglebutton label {\n      color: rgba(0,0,0, 0.26); }\n.form-group.is-focused .togglebutton label:hover, .form-group.is-focused .togglebutton label:focus {\n        color: rgba(0,0,0, .54); }\nfieldset[disabled] .form-group.is-focused .togglebutton label {\n        color: rgba(0,0,0, 0.26); }\n.togglebutton label input[type=checkbox] {\n      opacity: 0;\n      width: 0;\n      height: 0; }\n.togglebutton label .toggle {\n      text-align: left;\n      margin-left: 5px; }\n.togglebutton label .toggle,\n    .togglebutton label input[type=checkbox][disabled] + .toggle {\n      content: \"\";\n      display: inline-block;\n      width: 30px;\n      height: 15px;\n      background-color: rgba(80, 80, 80, 0.7);\n      border-radius: 15px;\n      margin-right: 15px;\n      -webkit-transition: background 0.3s ease;\n      transition: background 0.3s ease;\n      vertical-align: middle; }\n.togglebutton label .toggle:after {\n      content: \"\";\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      background-color: #FFFFFF;\n      border-radius: 20px;\n      position: relative;\n      -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n              box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n      left: -5px;\n      top: -3px;\n      border: 1px solid rgba(0,0,0, .54);\n      -webkit-transition: left 0.3s ease, background 0.3s ease, -webkit-box-shadow 0.1s ease;\n      transition: left 0.3s ease, background 0.3s ease, -webkit-box-shadow 0.1s ease;\n      transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\n      transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease; }\n.togglebutton label input[type=checkbox][disabled] + .toggle:after,\n    .togglebutton label input[type=checkbox][disabled]:checked + .toggle:after {\n      background-color: #BDBDBD; }\n.togglebutton label input[type=checkbox] + .toggle:active:after,\n    .togglebutton label input[type=checkbox][disabled] + .toggle:active:after {\n      -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1);\n              box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1); }\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n      left: 15px; }\n.togglebutton label input[type=checkbox]:checked + .toggle {\n      background-color: rgba(156, 39, 176, 0.7); }\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n      border-color: #9c27b0; }\n.togglebutton label input[type=checkbox]:checked + .toggle:active:after {\n      -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(156, 39, 176, 0.1);\n              box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(156, 39, 176, 0.1); }\n.withripple {\n  position: relative; }\n.ripple-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n  pointer-events: none; }\n.disabled .ripple-container {\n    display: none; }\n.ripple {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin-left: -10px;\n  margin-top: -10px;\n  border-radius: 100%;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.05);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  opacity: 0;\n  pointer-events: none; }\n.ripple.ripple-on {\n  -webkit-transition: opacity 0.15s ease-in 0s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: opacity 0.15s ease-in 0s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  opacity: 0.1; }\n.ripple.ripple-out {\n  -webkit-transition: opacity 0.1s linear 0s !important;\n  transition: opacity 0.1s linear 0s !important;\n  opacity: 0; }\n.section-dark .nav-pills > li > a,\n.section-image .nav-pills > li > a {\n  color: #999999; }\n.section-dark .nav-pills > li > a:hover,\n.section-dark .nav-pills > li > a:focus,\n.section-image .nav-pills > li > a:hover,\n.section-image .nav-pills > li > a:focus {\n  background-color: #EEEEEE; }\n.nav-pills > li > a {\n  line-height: 24px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  text-align: center;\n  color: #555555;\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n.nav-pills > li > a:hover {\n    background-color: rgba(200, 200, 200, 0.2); }\n.nav-pills > li i {\n  display: block;\n  font-size: 30px;\n  padding: 15px 0; }\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\n  background-color: #9c27b0;\n  color: #FFFFFF;\n  -webkit-box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n          box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n.nav-pills:not(.nav-pills-icons) > li > a {\n  border-radius: 30px; }\n.nav-pills.nav-stacked > li + li {\n  margin-top: 5px; }\n.nav-pills.nav-pills-info > li.active > a, .nav-pills.nav-pills-info > li.active > a:focus, .nav-pills.nav-pills-info > li.active > a:hover {\n  background-color: #00bcd4;\n  -webkit-box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n          box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2); }\n.nav-pills.nav-pills-success > li.active > a, .nav-pills.nav-pills-success > li.active > a:focus, .nav-pills.nav-pills-success > li.active > a:hover {\n  background-color: #4caf50;\n  -webkit-box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n          box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n.nav-pills.nav-pills-warning > li.active > a, .nav-pills.nav-pills-warning > li.active > a:focus, .nav-pills.nav-pills-warning > li.active > a:hover {\n  background-color: #ff9800;\n  -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n          box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2); }\n.nav-pills.nav-pills-danger > li.active > a, .nav-pills.nav-pills-danger > li.active > a:focus, .nav-pills.nav-pills-danger > li.active > a:hover {\n  background-color: #f44336;\n  -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n          box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2); }\n.tab-space {\n  padding: 20px 0 50px 0px; }\n.modal-content {\n  -webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n          box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n  border-radius: 6px;\n  border: none; }\n.modal-content .modal-header {\n    border-bottom: none;\n    padding-top: 24px;\n    padding-right: 24px;\n    padding-bottom: 0;\n    padding-left: 24px; }\n.modal-content .modal-body {\n    padding-top: 24px;\n    padding-right: 24px;\n    padding-bottom: 16px;\n    padding-left: 24px; }\n.modal-content .modal-footer {\n    border-top: none;\n    padding: 7px; }\n.modal-content .modal-footer.text-center {\n      text-align: center; }\n.modal-content .modal-footer button {\n      margin: 0;\n      padding-left: 16px;\n      padding-right: 16px;\n      width: auto; }\n.modal-content .modal-footer button.pull-left {\n        padding-left: 5px;\n        padding-right: 5px;\n        position: relative;\n        left: -5px; }\n.modal-content .modal-footer button + button {\n      margin-bottom: 16px; }\n.modal-content .modal-body + .modal-footer {\n    padding-top: 0; }\n.modal-backdrop {\n  background: rgba(0, 0, 0, 0.3); }\n.modal .modal-dialog {\n  margin-top: 100px; }\n.modal .modal-header .close {\n  color: #999999; }\n.modal .modal-header .close:hover, .modal .modal-header .close:focus {\n    opacity: 1; }\n.modal .modal-header .close i {\n    font-size: 16px; }\n.modal-notice .instruction {\n  margin-bottom: 25px; }\n.modal-notice .picture {\n  max-width: 150px; }\n.modal-notice .modal-content .btn-raised {\n  margin-bottom: 15px; }\n.modal-small {\n  width: 300px; }\n.modal-small .modal-body {\n    margin-top: 20px; }\n.navbar {\n  border: 0;\n  border-radius: 3px;\n  border-bottom: 1px solid #ededf3;\n  padding: 10px 0; }\n.navbar .navbar-brand {\n    position: relative;\n    height: 50px;\n    line-height: 30px;\n    color: inherit;\n    padding: 10px 15px; }\n.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n      color: inherit;\n      background-color: transparent; }\n.navbar .notification {\n    position: absolute;\n    top: 5px;\n    border: 1px solid #FFF;\n    right: 10px;\n    font-size: 9px;\n    background: #f44336;\n    color: #FFFFFF;\n    min-width: 20px;\n    padding: 0px 5px;\n    height: 20px;\n    border-radius: 10px;\n    text-align: center;\n    line-height: 19px;\n    vertical-align: middle;\n    display: block; }\n.navbar .navbar-text {\n    color: inherit;\n    margin-top: 15px;\n    margin-bottom: 15px; }\n.navbar .navbar-nav > li > a {\n    color: inherit;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    font-weight: 400;\n    font-size: 12px;\n    text-transform: uppercase;\n    border-radius: 3px; }\n.navbar .navbar-nav > li > a:hover, .navbar .navbar-nav > li > a:focus {\n      color: inherit;\n      background-color: transparent; }\n.navbar .navbar-nav > li > a .material-icons,\n    .navbar .navbar-nav > li > a .fa {\n      font-size: 20px; }\n.navbar .navbar-nav > li > a.btn:not(.btn-just-icon) .fa {\n      position: relative;\n      top: 2px;\n      margin-top: -4px;\n      margin-right: 4px; }\n.navbar .navbar-nav > li > .dropdown-menu {\n    margin-top: -20px; }\n.navbar .navbar-nav > li.open > .dropdown-menu {\n    margin-top: 0; }\n.navbar .navbar-nav > .active > a, .navbar .navbar-nav > .active > a:hover, .navbar .navbar-nav > .active > a:focus {\n    color: inherit;\n    background-color: rgba(255, 255, 255, 0.1); }\n.navbar .navbar-nav > .disabled > a, .navbar .navbar-nav > .disabled > a:hover, .navbar .navbar-nav > .disabled > a:focus {\n    color: inherit;\n    background-color: transparent;\n    opacity: 0.9; }\n.navbar .navbar-nav .profile-photo {\n    padding: 0 5px 0; }\n.navbar .navbar-nav .profile-photo .profile-photo-small {\n      height: 40px;\n      width: 40px; }\n.navbar .navbar-toggle {\n    border: 0; }\n.navbar .navbar-toggle:hover, .navbar .navbar-toggle:focus {\n      background-color: transparent; }\n.navbar .navbar-toggle .icon-bar {\n      background-color: inherit;\n      border: 1px solid; }\n.navbar .navbar-default .navbar-toggle,\n  .navbar .navbar-inverse .navbar-toggle {\n    border-color: transparent; }\n.navbar .navbar-collapse,\n  .navbar .navbar-form {\n    border-top: none;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.navbar .navbar-nav > .open > a, .navbar .navbar-nav > .open > a:hover, .navbar .navbar-nav > .open > a:focus {\n    background-color: transparent;\n    color: inherit; }\n@media (max-width: 767px) {\n    .navbar .navbar-nav .navbar-text {\n      color: inherit;\n      margin-top: 15px;\n      margin-bottom: 15px; }\n    .navbar .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border: 0;\n      color: inherit; }\n    .navbar .navbar-nav .open .dropdown-menu .divider {\n      border-bottom: 1px solid;\n      opacity: 0.08; }\n    .navbar .navbar-nav .open .dropdown-menu > li > a {\n      color: inherit; }\n      .navbar .navbar-nav .open .dropdown-menu > li > a:hover, .navbar .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: inherit;\n        background-color: transparent; }\n    .navbar .navbar-nav .open .dropdown-menu > .active > a, .navbar .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: inherit;\n      background-color: transparent; }\n    .navbar .navbar-nav .open .dropdown-menu > .disabled > a, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: inherit;\n      background-color: transparent; } }\n.navbar.navbar-default .logo-container .brand {\n    color: #555555; }\n.navbar .navbar-link {\n    color: inherit; }\n.navbar .navbar-link:hover {\n      color: inherit; }\n.navbar .btn {\n    margin-top: 0;\n    margin-bottom: 0; }\n.navbar .btn-link {\n    color: inherit; }\n.navbar .btn-link:hover, .navbar .btn-link:focus {\n      color: inherit; }\n.navbar .btn-link[disabled]:hover, .navbar .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar .btn-link:hover,\n    fieldset[disabled] .navbar .btn-link:focus {\n      color: inherit; }\n.navbar .navbar-form {\n    margin: 4px 0 0; }\n.navbar .navbar-form .form-group {\n      margin: 0;\n      padding: 0; }\n.navbar .navbar-form .form-group .material-input:before,\n      .navbar .navbar-form .form-group.is-focused .material-input:after {\n        background-color: inherit; }\n.navbar .navbar-form .form-group .form-control,\n    .navbar .navbar-form .form-control {\n      border-color: inherit;\n      color: inherit;\n      padding: 0;\n      margin: 0;\n      height: 28px;\n      font-size: 14px;\n      line-height: 1.42857143; }\n.navbar, .navbar.navbar-default {\n    background-color: #FFFFFF;\n    color: #555555; }\n.navbar .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar .navbar-form input.form-control::-moz-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-default .navbar-form input.form-control::-moz-placeholder {\n      color: #555555; }\n.navbar .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar .navbar-form input.form-control:-ms-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-default .navbar-form input.form-control:-ms-input-placeholder {\n      color: #555555; }\n.navbar .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar .navbar-form input.form-control::-webkit-input-placeholder, .navbar.navbar-default .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-default .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #555555; }\n.navbar .dropdown-menu, .navbar.navbar-default .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar .dropdown-menu li > a:hover, .navbar .dropdown-menu li > a:focus, .navbar.navbar-default .dropdown-menu li > a:hover, .navbar.navbar-default .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #FFFFFF;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2); }\n.navbar .dropdown-menu .active > a, .navbar.navbar-default .dropdown-menu .active > a {\n        background-color: #FFFFFF;\n        color: #555555;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2); }\n.navbar .dropdown-menu .active > a:hover, .navbar .dropdown-menu .active > a:focus, .navbar.navbar-default .dropdown-menu .active > a:hover, .navbar.navbar-default .dropdown-menu .active > a:focus {\n          color: #555555; }\n.navbar.navbar-inverse {\n    background-color: #212121;\n    color: #fff; }\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-inverse .navbar-form input.form-control::-moz-placeholder {\n      color: #fff; }\n.navbar.navbar-inverse .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-inverse .navbar-form input.form-control:-ms-input-placeholder {\n      color: #fff; }\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-inverse .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #fff; }\n.navbar.navbar-inverse .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar.navbar-inverse .dropdown-menu li > a:hover, .navbar.navbar-inverse .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #212121;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2); }\n.navbar.navbar-inverse .dropdown-menu .active > a {\n        background-color: #212121;\n        color: #fff;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(33, 33, 33, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(33, 33, 33, 0.2); }\n.navbar.navbar-inverse .dropdown-menu .active > a:hover, .navbar.navbar-inverse .dropdown-menu .active > a:focus {\n          color: #fff; }\n.navbar.navbar-primary {\n    background-color: #9c27b0;\n    color: #ffffff; }\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-primary .navbar-form input.form-control::-moz-placeholder {\n      color: #ffffff; }\n.navbar.navbar-primary .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-primary .navbar-form input.form-control:-ms-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-primary .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-primary .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar.navbar-primary .dropdown-menu li > a:hover, .navbar.navbar-primary .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #9c27b0;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n.navbar.navbar-primary .dropdown-menu .active > a {\n        background-color: #9c27b0;\n        color: #ffffff;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n.navbar.navbar-primary .dropdown-menu .active > a:hover, .navbar.navbar-primary .dropdown-menu .active > a:focus {\n          color: #ffffff; }\n.navbar.navbar-success {\n    background-color: #4caf50;\n    color: #ffffff; }\n.navbar.navbar-success .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-success .navbar-form input.form-control::-moz-placeholder {\n      color: #ffffff; }\n.navbar.navbar-success .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-success .navbar-form input.form-control:-ms-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-success .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-success .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-success .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar.navbar-success .dropdown-menu li > a:hover, .navbar.navbar-success .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #4caf50;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n.navbar.navbar-success .dropdown-menu .active > a {\n        background-color: #4caf50;\n        color: #ffffff;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n.navbar.navbar-success .dropdown-menu .active > a:hover, .navbar.navbar-success .dropdown-menu .active > a:focus {\n          color: #ffffff; }\n.navbar.navbar-info {\n    background-color: #00bcd4;\n    color: #ffffff; }\n.navbar.navbar-info .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-info .navbar-form input.form-control::-moz-placeholder {\n      color: #ffffff; }\n.navbar.navbar-info .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-info .navbar-form input.form-control:-ms-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-info .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-info .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-info .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar.navbar-info .dropdown-menu li > a:hover, .navbar.navbar-info .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #00bcd4;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2); }\n.navbar.navbar-info .dropdown-menu .active > a {\n        background-color: #00bcd4;\n        color: #ffffff;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2); }\n.navbar.navbar-info .dropdown-menu .active > a:hover, .navbar.navbar-info .dropdown-menu .active > a:focus {\n          color: #ffffff; }\n.navbar.navbar-warning {\n    background-color: #ff9800;\n    color: #ffffff; }\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-warning .navbar-form input.form-control::-moz-placeholder {\n      color: #ffffff; }\n.navbar.navbar-warning .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-warning .navbar-form input.form-control:-ms-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-warning .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-warning .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar.navbar-warning .dropdown-menu li > a:hover, .navbar.navbar-warning .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #ff9800;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2); }\n.navbar.navbar-warning .dropdown-menu .active > a {\n        background-color: #ff9800;\n        color: #ffffff;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2); }\n.navbar.navbar-warning .dropdown-menu .active > a:hover, .navbar.navbar-warning .dropdown-menu .active > a:focus {\n          color: #ffffff; }\n.navbar.navbar-danger {\n    background-color: #f44336;\n    color: #ffffff; }\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-danger .navbar-form input.form-control::-moz-placeholder {\n      color: #ffffff; }\n.navbar.navbar-danger .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-danger .navbar-form input.form-control:-ms-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-danger .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-danger .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar.navbar-danger .dropdown-menu li > a:hover, .navbar.navbar-danger .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #f44336;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2); }\n.navbar.navbar-danger .dropdown-menu .active > a {\n        background-color: #f44336;\n        color: #ffffff;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2); }\n.navbar.navbar-danger .dropdown-menu .active > a:hover, .navbar.navbar-danger .dropdown-menu .active > a:focus {\n          color: #ffffff; }\n.navbar.navbar-rose {\n    background-color: #e91e63;\n    color: #ffffff; }\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-moz-placeholder,\n    .navbar.navbar-rose .navbar-form input.form-control::-moz-placeholder {\n      color: #ffffff; }\n.navbar.navbar-rose .navbar-form .form-group input.form-control:-ms-input-placeholder,\n    .navbar.navbar-rose .navbar-form input.form-control:-ms-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-rose .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n    .navbar.navbar-rose .navbar-form input.form-control::-webkit-input-placeholder {\n      color: #ffffff; }\n.navbar.navbar-rose .dropdown-menu {\n      border-radius: 3px !important; }\n.navbar.navbar-rose .dropdown-menu li > a:hover, .navbar.navbar-rose .dropdown-menu li > a:focus {\n        color: #FFFFFF;\n        background-color: #e91e63;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2); }\n.navbar.navbar-rose .dropdown-menu .active > a {\n        background-color: #e91e63;\n        color: #ffffff;\n        -webkit-box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2);\n                box-shadow: 0 12px 20px -10px rgba(233, 30, 99, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(233, 30, 99, 0.2); }\n.navbar.navbar-rose .dropdown-menu .active > a:hover, .navbar.navbar-rose .dropdown-menu .active > a:focus {\n          color: #ffffff; }\n.navbar-inverse {\n    background-color: #3f51b5; }\n.navbar.navbar-transparent {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-bottom: 0; }\n.navbar.navbar-transparent .logo-container .brand {\n      color: #FFFFFF; }\n.navbar-fixed-top {\n    border-radius: 0; }\n@media (max-width: 1199px) {\n    .navbar {\n      /*\n    .navbar-form {\n      margin-top: 10px;\n    }\n*/ }\n      .navbar .navbar-brand {\n        height: 50px;\n        padding: 10px 15px; }\n      .navbar .navbar-nav > li > a {\n        padding-top: 15px;\n        padding-bottom: 15px; } }\n.navbar .alert {\n    border-radius: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 85px;\n    width: 100%;\n    z-index: 3;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n.nav-align-center {\n  text-align: center; }\n.nav-align-center .nav-pills {\n    display: inline-block; }\n.navbar-absolute {\n  position: absolute;\n  width: 100%;\n  padding-top: 10px;\n  z-index: 1029;\n  top: 0; }\n@media (max-width: 991px) {\n  .nav-container {\n    position: relative; } }\n.popover, .tooltip-inner {\n  color: #555555;\n  line-height: 1.5em;\n  background: #FFFFFF;\n  border: none;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); }\n.popover {\n  padding: 0;\n  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n.popover.left > .arrow, .popover.right > .arrow, .popover.top > .arrow, .popover.bottom > .arrow {\n    border: none; }\n.popover-title {\n  background-color: #FFFFFF;\n  border: none;\n  padding: 15px 15px 5px;\n  font-size: 1.3em; }\n.popover-content {\n  padding: 10px 15px 15px;\n  line-height: 1.4; }\n.tooltip.in {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0px, 0);\n  transform: translate3d(0, 0px, 0); }\n.tooltip {\n  opacity: 0;\n  -webkit-transition: opacity, -webkit-transform .2s ease;\n  transition: opacity, -webkit-transform .2s ease;\n  transition: opacity, transform .2s ease;\n  transition: opacity, transform .2s ease, -webkit-transform .2s ease;\n  -webkit-transform: translate3d(0, 5px, 0);\n  transform: translate3d(0, 5px, 0); }\n.tooltip.left .tooltip-arrow {\n    border-left-color: #FFFFFF; }\n.tooltip.right .tooltip-arrow {\n    border-right-color: #FFFFFF; }\n.tooltip.top .tooltip-arrow {\n    border-top-color: #FFFFFF; }\n.tooltip.bottom .tooltip-arrow {\n    border-bottom-color: #FFFFFF; }\n.tooltip-inner {\n  padding: 10px 15px;\n  min-width: 130px; }\nfooter {\n  border-top: 1px solid #e7e7e7; }\nfooter ul {\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none; }\nfooter ul li {\n      display: inline-block; }\nfooter ul li a {\n        color: inherit;\n        padding: 15px;\n        font-weight: 500;\n        font-size: 12px;\n        text-transform: uppercase;\n        border-radius: 3px;\n        text-decoration: none;\n        position: relative;\n        display: block; }\nfooter ul li a:hover {\n          text-decoration: none; }\nfooter .copyright {\n    padding: 15px 0;\n    margin: 0; }\nfooter .copyright .material-icons {\n      font-size: 18px;\n      position: relative;\n      top: 3px; }\nfooter .btn {\n    margin-top: 0;\n    margin-bottom: 0; }\n.dropdown-menu {\n  border: 0;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n.dropdown-menu .divider {\n    background-color: rgba(0, 0, 0, 0.12); }\n.dropdown-menu li > a {\n    font-size: 13px;\n    padding: 10px 20px;\n    margin: 0 5px;\n    border-radius: 2px;\n    -webkit-transition: all 150ms linear;\n    transition: all 150ms linear; }\n.dropdown-menu li > a:hover, .dropdown-menu li > a:focus {\n      -webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n              box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); }\n.dropdown-menu.dropdown-with-icons li > a {\n    padding: 12px 20px 12px 12px; }\n.dropdown-menu.dropdown-with-icons li > a .material-icons {\n      vertical-align: middle;\n      font-size: 24px;\n      position: relative;\n      margin-top: -4px;\n      top: 1px;\n      margin-right: 12px;\n      opacity: .5; }\n.dropdown-menu li {\n    position: relative; }\n.dropdown-menu li a:hover,\n    .dropdown-menu li a:focus,\n    .dropdown-menu li a:active {\n      background-color: #9c27b0;\n      color: #FFFFFF; }\n.dropdown-menu .divider {\n    margin: 5px 0; }\n.navbar .dropdown-menu li a:hover,\n  .navbar .dropdown-menu li a:focus,\n  .navbar .dropdown-menu li a:active,\n  .navbar.navbar-default .dropdown-menu li a:hover,\n  .navbar.navbar-default .dropdown-menu li a:focus,\n  .navbar.navbar-default .dropdown-menu li a:active {\n    background-color: #9c27b0;\n    color: #FFFFFF;\n    -webkit-box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n.card {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0,0,0, 0.87);\n  background: #fff; }\n.card .card-height-indicator {\n    margin-top: 100%; }\n.card .title {\n    margin-top: 0;\n    margin-bottom: 5px; }\n.card .card-image {\n    height: 60%;\n    position: relative;\n    overflow: hidden;\n    margin-left: 15px;\n    margin-right: 15px;\n    margin-top: -30px;\n    border-radius: 6px; }\n.card .card-image img {\n      width: 100%;\n      height: 100%;\n      border-radius: 6px;\n      pointer-events: none; }\n.card .card-image .card-title {\n      position: absolute;\n      bottom: 15px;\n      left: 15px;\n      color: #fff;\n      font-size: 1.3em;\n      text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5); }\n.card .category:not([class*=\"text-\"]) {\n    color: #999999; }\n.card .card-content {\n    padding: 15px 20px; }\n.card .card-content .category {\n      margin-bottom: 0; }\n.card .card-header {\n    -webkit-box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n    margin: -20px 15px 0;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #999999; }\n.card .card-header .title {\n      color: #FFFFFF; }\n.card .card-header .category {\n      margin-bottom: 0;\n      color: rgba(255, 255, 255, 0.62); }\n.card .card-header.card-chart {\n      padding: 0;\n      min-height: 160px; }\n.card .card-header.card-chart + .content h4 {\n        margin-top: 0; }\n.card .card-header .ct-label {\n      color: rgba(255, 255, 255, 0.7); }\n.card .card-header .ct-grid {\n      stroke: rgba(255, 255, 255, 0.2); }\n.card .card-header .ct-series-a .ct-point,\n    .card .card-header .ct-series-a .ct-line,\n    .card .card-header .ct-series-a .ct-bar,\n    .card .card-header .ct-series-a .ct-slice-donut {\n      stroke: rgba(255, 255, 255, 0.8); }\n.card .card-header .ct-series-a .ct-slice-pie,\n    .card .card-header .ct-series-a .ct-area {\n      fill: rgba(255, 255, 255, 0.4); }\n.card .chart-title {\n    position: absolute;\n    top: 25px;\n    width: 100%;\n    text-align: center; }\n.card .chart-title h3 {\n      margin: 0;\n      color: #FFFFFF; }\n.card .chart-title h6 {\n      margin: 0;\n      color: rgba(255, 255, 255, 0.4); }\n.card .card-footer {\n    margin: 0 20px 10px;\n    padding-top: 10px;\n    border-top: 1px solid #eeeeee; }\n.card .card-footer .content {\n      display: block; }\n.card .card-footer div {\n      display: inline-block; }\n.card .card-footer .author {\n      color: #999999; }\n.card .card-footer .stats {\n      line-height: 22px;\n      color: #999999;\n      font-size: 12px; }\n.card .card-footer .stats .material-icons {\n        position: relative;\n        top: 4px;\n        font-size: 16px; }\n.card .card-footer h6 {\n      color: #999999; }\n.card img {\n    width: 100%;\n    height: auto; }\n.card .category .material-icons {\n    position: relative;\n    top: 6px;\n    line-height: 0; }\n.card .category-social .fa {\n    font-size: 24px;\n    position: relative;\n    margin-top: -4px;\n    top: 2px;\n    margin-right: 5px; }\n.card .author .avatar {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 5px; }\n.card .author a {\n    color: #3C4858;\n    text-decoration: none; }\n.card .author a .ripple-container {\n      display: none; }\n.card .table {\n    margin-bottom: 0; }\n.card .table tr:first-child td {\n      border-top: none; }\n.card [data-background-color=\"purple\"] {\n    background: linear-gradient(60deg, #ab47bc, #8e24aa);\n    -webkit-box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2); }\n.card [data-background-color=\"blue\"] {\n    background: linear-gradient(60deg, #26c6da, #00acc1);\n    -webkit-box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2); }\n.card [data-background-color=\"green\"] {\n    background: linear-gradient(60deg, #66bb6a, #43a047);\n    -webkit-box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n.card [data-background-color=\"orange\"] {\n    background: linear-gradient(60deg, #ffa726, #fb8c00);\n    -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2); }\n.card [data-background-color=\"red\"] {\n    background: linear-gradient(60deg, #ef5350, #e53935);\n    -webkit-box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\n            box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2); }\n.card [data-background-color] {\n    color: #FFFFFF; }\n.card [data-background-color] a {\n      color: #FFFFFF; }\n.card-stats .title {\n  margin: 0; }\n.card-stats .card-header {\n  float: left;\n  text-align: center; }\n.card-stats .card-header i {\n    font-size: 36px;\n    line-height: 56px;\n    width: 56px;\n    height: 56px; }\n.card-stats .card-content {\n  text-align: right;\n  padding-top: 10px; }\n.card-nav-tabs .header-raised {\n  margin-top: -30px; }\n.card-nav-tabs .nav-tabs {\n  background: transparent;\n  padding: 0; }\n.card-nav-tabs .nav-tabs-title {\n  float: left;\n  padding: 10px 10px 10px 0;\n  line-height: 24px; }\n.card-plain {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n.card-plain .card-header {\n    margin-left: 0;\n    margin-right: 0; }\n.card-plain .content {\n    padding-left: 5px;\n    padding-right: 5px; }\n.card-plain .card-image {\n    margin: 0;\n    border-radius: 3px; }\n.card-plain .card-image img {\n      border-radius: 3px; }\n.iframe-container {\n  margin: 0 -20px 0; }\n.iframe-container iframe {\n    width: 100%;\n    height: 500px;\n    border: 0;\n    -webkit-box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n.card-profile,\n.card-testimonial {\n  margin-top: 30px;\n  text-align: center; }\n.card-profile .btn-just-icon.btn-raised,\n  .card-testimonial .btn-just-icon.btn-raised {\n    margin-left: 6px;\n    margin-right: 6px; }\n.card-profile .card-avatar,\n  .card-testimonial .card-avatar {\n    max-width: 130px;\n    max-height: 130px;\n    margin: -50px auto 0;\n    border-radius: 50%;\n    overflow: hidden;\n    -webkit-box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n.card-profile .card-avatar + .content,\n    .card-testimonial .card-avatar + .content {\n      margin-top: 15px; }\n.card-profile.card-plain .card-avatar,\n  .card-testimonial.card-plain .card-avatar {\n    margin-top: 0; }\n.nav-tabs {\n  background: #9c27b0;\n  border: 0;\n  border-radius: 3px;\n  padding: 0 15px; }\n.nav-tabs > li > a {\n    color: #FFFFFF;\n    border: 0;\n    margin: 0;\n    border-radius: 3px;\n    line-height: 24px;\n    text-transform: uppercase;\n    font-size: 12px; }\n.nav-tabs > li > a:hover {\n      background-color: transparent;\n      border: 0; }\n.nav-tabs > li > a,\n  .nav-tabs > li > a:hover,\n  .nav-tabs > li > a:focus {\n    background-color: transparent;\n    border: 0 !important;\n    color: #FFFFFF !important;\n    font-weight: 500; }\n.nav-tabs > li.disabled > a,\n  .nav-tabs > li.disabled > a:hover {\n    color: rgba(255, 255, 255, 0.5); }\n.nav-tabs > li .material-icons {\n    margin: -1px 5px 0 0; }\n.nav-tabs > li.active > a,\n  .nav-tabs > li.active > a:hover,\n  .nav-tabs > li.active > a:focus {\n    background-color: rgba(255, 255, 255, 0.2);\n    -webkit-transition: background-color .1s .2s;\n    transition: background-color .1s .2s; }\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.3rem;\n  line-height: 1; }\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end; }\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n.ct-point {\n  stroke-width: 8px;\n  stroke-linecap: round; }\n.ct-line {\n  fill: none;\n  stroke-width: 3px; }\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.8; }\n.ct-bar {\n  fill: none;\n  stroke-width: 10px; }\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px; }\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #00bcd4; }\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00bcd4; }\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f44336; }\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #f44336; }\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #ff9800; }\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #ff9800; }\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #9c27b0; }\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #9c27b0; }\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #4caf50; }\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #4caf50; }\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #9C9B99; }\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #9C9B99; }\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #999999; }\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #999999; }\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #dd4b39; }\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #dd4b39; }\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #35465c; }\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #35465c; }\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #e52d27; }\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #e52d27; }\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #55acee; }\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #55acee; }\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #cc2127; }\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #cc2127; }\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #1769ff; }\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #1769ff; }\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2; }\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2; }\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca; }\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca; }\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-square:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%; }\n.ct-square:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%; }\n.ct-minor-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.88888889%; }\n.ct-major-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.33333333%; }\n.ct-minor-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%; }\n.ct-major-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%; }\n.ct-perfect-fourth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.66666667%; }\n.ct-perfect-fifth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%; }\n.ct-minor-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-golden-section:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.80469716%; }\n.ct-golden-section:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%; }\n.ct-major-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%; }\n.ct-minor-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.33333333%; }\n.ct-major-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%; }\n.ct-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%; }\n.ct-major-tenth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%; }\n.ct-major-eleventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.33333333%; }\n.ct-major-twelfth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-double-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%; }\n.ct-double-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-blue {\n  stroke: #9c27b0 !important; }\n.ct-azure {\n  stroke: #00bcd4 !important; }\n.ct-green {\n  stroke: #4caf50 !important; }\n.ct-orange {\n  stroke: #ff9800 !important; }\n.ct-red {\n  stroke: #f44336 !important; }\n.ct-white {\n  stroke: #FFFFFF !important; }\n.ct-rose {\n  stroke: #e91e63 !important; }\n@media (min-width: 992px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .navbar-nav > li > .dropdown-menu,\n  .dropdown .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget {\n    -webkit-transition: all 150ms linear;\n    transition: all 150ms linear;\n    margin-top: -20px;\n    visibility: hidden;\n    display: block;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .navbar-nav > li.open > .dropdown-menu,\n  .dropdown.open .dropdown-menu,\n  .dropdown-menu.bootstrap-datetimepicker-widget.open {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible;\n    margin-top: 0px; }\n  /*.navbar-nav > li > .dropdown-menu:before{\n        border-bottom: 11px solid rgba(0, 0, 0, 0.2);\n        border-left: 11px solid rgba(0, 0, 0, 0);\n        border-right: 11px solid rgba(0, 0, 0, 0);\n        content: \"\";\n        display: inline-block;\n        position: absolute;\n        left: 12px;\n        top: -11px;\n    }\n    .navbar-nav > li > .dropdown-menu:after {\n        border-bottom: 11px solid #FFFFFF;\n        border-left: 11px solid rgba(0, 0, 0, 0);\n        border-right: 11px solid rgba(0, 0, 0, 0);\n        content: \"\";\n        display: inline-block;\n        position: absolute;\n        left: 12px;\n        top: -10px;\n    }*/\n  .navbar-nav.navbar-right > li > .dropdown-menu:before {\n    left: auto;\n    right: 12px; }\n  .navbar-nav.navbar-right > li > .dropdown-menu:after {\n    left: auto;\n    right: 12px; }\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0; }\n  body > .navbar-collapse.collapse {\n    display: none !important; }\n  .card form [class*=\"col-\"] {\n    padding: 6px; }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px; }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px; }\n  .sidebar .navbar-form {\n    display: none !important; }\n  .sidebar .nav-mobile-menu {\n    display: none; } }\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .sidebar {\n    display: none;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n    .sidebar .sidebar-wrapper {\n      padding-bottom: 60px; }\n    .sidebar .nav-mobile-menu {\n      margin-top: 0; }\n      .sidebar .nav-mobile-menu .notification {\n        float: left;\n        line-height: 30px;\n        margin-right: 8px; }\n      .sidebar .nav-mobile-menu .open .dropdown-menu {\n        position: static;\n        float: none;\n        width: auto;\n        margin-top: 0;\n        background-color: transparent;\n        border: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none; }\n  .main-panel {\n    width: 100%; }\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45); }\n  body {\n    position: relative; }\n  .main-panel {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n    -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0; }\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative; }\n  .navbar .navbar-collapse.collapse,\n  .navbar .navbar-collapse.collapse.in,\n  .navbar .navbar-collapse.collapsing {\n    display: none !important; }\n  .navbar-nav > li {\n    float: none;\n    position: relative;\n    display: block; }\n  .sidebar,\n  .off-canvas-sidebar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100vh;\n    width: 260px;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #9A9A9A;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding-right: 0px;\n    padding-left: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n    -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n    .sidebar > ul,\n    .off-canvas-sidebar > ul {\n      position: relative;\n      z-index: 4;\n      overflow-y: scroll;\n      height: calc(100vh - 61px);\n      width: 100%; }\n    .sidebar::before,\n    .off-canvas-sidebar::before {\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      background-color: #282828;\n      display: block;\n      content: \"\";\n      z-index: 1; }\n    .sidebar .logo,\n    .off-canvas-sidebar .logo {\n      position: relative;\n      z-index: 4; }\n    .sidebar .navbar-form,\n    .off-canvas-sidebar .navbar-form {\n      margin: 10px 15px;\n      float: none !important; }\n      .sidebar .navbar-form .btn,\n      .off-canvas-sidebar .navbar-form .btn {\n        position: absolute;\n        top: 25px;\n        right: 15px; }\n    .sidebar .table-responsive,\n    .off-canvas-sidebar .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-x: scroll;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      -webkit-overflow-scrolling: touch; }\n  .nav-open .navbar-collapse {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0); }\n  .nav-open .navbar .container {\n    left: -250px; }\n  .nav-open .main-panel {\n    left: 0;\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0); }\n  .nav-open .sidebar {\n    -webkit-box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n  .nav-open .off-canvas-sidebar,\n  .nav-open .sidebar {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .close-layer {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    right: 260px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n    -webkit-transition: all 370ms ease-in;\n    transition: all 370ms ease-in; }\n    .close-layer.visible {\n      opacity: 1; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto; }\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px; }\n  .icon-bar:nth-child(2),\n  .icon-bar:nth-child(3),\n  .icon-bar:nth-child(4) {\n    outline: 1px solid transparent; }\n  .icon-bar:nth-child(2) {\n    top: 0px;\n    -webkit-animation: topbar-back 500ms linear 0s;\n    animation: topbar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .icon-bar:nth-child(3) {\n    opacity: 1; }\n  .icon-bar:nth-child(4) {\n    bottom: 0px;\n    -webkit-animation: bottombar-back 500ms linear 0s;\n    animation: bottombar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .toggled .icon-bar:nth-child(2) {\n    top: 6px;\n    -webkit-animation: topbar-x 500ms linear 0s;\n    animation: topbar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .toggled .icon-bar:nth-child(3) {\n    opacity: 0; }\n  .toggled .icon-bar:nth-child(4) {\n    bottom: 6px;\n    -webkit-animation: bottombar-x 500ms linear 0s;\n    animation: bottombar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg);\n              transform: rotate(145deg); }\n    75% {\n      -webkit-transform: rotate(130deg);\n              transform: rotate(130deg); }\n    100% {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); } }\n  @-webkit-keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg); }\n    75% {\n      -webkit-transform: rotate(130deg); }\n    100% {\n      -webkit-transform: rotate(135deg); } }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n    45% {\n      -webkit-transform: rotate(-10deg);\n              transform: rotate(-10deg); }\n    75% {\n      -webkit-transform: rotate(5deg);\n              transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0); } }\n  @-webkit-keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg); }\n    45% {\n      -webkit-transform: rotate(-10deg); }\n    75% {\n      -webkit-transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0); } }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg);\n              transform: rotate(-145deg); }\n    75% {\n      -webkit-transform: rotate(-130deg);\n              transform: rotate(-130deg); }\n    100% {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); } }\n  @-webkit-keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg); }\n    75% {\n      -webkit-transform: rotate(-130deg); }\n    100% {\n      -webkit-transform: rotate(-135deg); } }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); }\n    45% {\n      -webkit-transform: rotate(10deg);\n              transform: rotate(10deg); }\n    75% {\n      -webkit-transform: rotate(-5deg);\n              transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0); } }\n  @-webkit-keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg); }\n    45% {\n      -webkit-transform: rotate(10deg); }\n    75% {\n      -webkit-transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0); } }\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent; }\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15); }\n  .navbar-nav {\n    margin: 1px 0; }\n    .navbar-nav .open .dropdown-menu > li > a {\n      padding: 15px 15px 5px 50px; }\n    .navbar-nav .open .dropdown-menu > li:first-child > a {\n      padding: 5px 15px 5px 50px; }\n    .navbar-nav .open .dropdown-menu > li:last-child > a {\n      padding: 15px 15px 25px 50px; }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .active > a,\n  [class*=\"navbar-\"] .navbar-nav .active > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .active > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .navbar-nav .open .dropdown-menu > li > a:active {\n    color: white; }\n  [class*=\"navbar-\"] .navbar-nav > li > a,\n  [class*=\"navbar-\"] .navbar-nav > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav > li > a:focus,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:hover,\n  [class*=\"navbar-\"] .navbar-nav .open .dropdown-menu > li > a:focus {\n    opacity: .7;\n    background: transparent; }\n  [class*=\"navbar-\"] .navbar-nav.navbar-nav .open .dropdown-menu > li > a:active {\n    opacity: 1; }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:hover .caret {\n    border-bottom-color: #777;\n    border-top-color: #777; }\n  [class*=\"navbar-\"] .navbar-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white; }\n  .dropdown-menu {\n    display: none; }\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden; }\n  .social-line .btn {\n    margin: 0 0 10px 0; }\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0; }\n  .social-line.pull-right {\n    float: none; }\n  .footer:not(.footer-big) nav > ul li {\n    float: none; }\n  .social-area.pull-right {\n    float: none !important; }\n  .form-control + .form-control-feedback {\n    margin-top: -8px; }\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important; }\n  .btn.dropdown-toggle {\n    margin-bottom: 0; }\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px; }\n  .media-post .media-body {\n    width: 100%; }\n  .navbar-collapse.collapse {\n    height: 100% !important; }\n  .navbar-collapse.collapse.in {\n    display: block; }\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important; }\n  .navbar-header {\n    float: none; }\n  .navbar-collapse .nav p {\n    font-size: 14px;\n    margin: 0; }\n  .navbar-collapse [class^=\"pe-7s-\"] {\n    float: left;\n    font-size: 20px;\n    margin-right: 10px; }\n  .bootstrap-navbar {\n    position: fixed;\n    color: white;\n    display: block;\n    top: 0;\n    height: 100%;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #999;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n    -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n    .bootstrap-navbar > ul {\n      position: relative;\n      z-index: 4;\n      overflow-y: scroll;\n      height: calc(100vh - 61px);\n      width: 100%; }\n    .bootstrap-navbar a {\n      color: #fff; }\n    .bootstrap-navbar .nav p {\n      margin: 0;\n      line-height: 30px;\n      font-size: 12px;\n      font-weight: 600;\n      text-transform: uppercase;\n      margin-left: 45px;\n      color: #fff; }\n    .bootstrap-navbar .nav li > a {\n      color: #FFFFFF;\n      margin: 5px 15px;\n      opacity: .86;\n      border-radius: 4px;\n      display: block; } }\n@media (min-width: 768px) {\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: 0; } }\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -20px;\n    margin-right: -20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map