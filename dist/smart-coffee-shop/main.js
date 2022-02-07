(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/home/home.component */ "./src/app/shared/components/home/home.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _shared_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/checkout.guard */ "./src/app/shared/guards/checkout.guard.ts");









const routes = [
    { path: '', component: _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'store', component: _store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"] },
    { path: 'admin', component: _store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutComponent"], canActivate: [_shared_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_6__["CheckoutGuard"]] },
    { path: '**', component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_shared_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_6__["CheckoutGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_shared_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_6__["CheckoutGuard"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["main[_ngcontent-%COMP%] {\r\n  \r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICAvKiBtYXJnaW4tdG9wOiAxMjBweDsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout/checkout.module */ "./src/app/checkout/checkout.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/home/home.component */ "./src/app/shared/components/home/home.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _store_store_module__WEBPACK_IMPORTED_MODULE_4__["StoreModule"],
            _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _store_store_module__WEBPACK_IMPORTED_MODULE_4__["StoreModule"],
        _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _store_store_module__WEBPACK_IMPORTED_MODULE_4__["StoreModule"],
                    _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                    _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/thanks/thanks.component */ "./src/app/checkout/components/thanks/thanks.component.ts");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/checkout/components/form/form.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/checkout/components/order/order.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");










class CheckoutComponent {
    constructor(orderService, customerGuidService, router) {
        this.orderService = orderService;
        this.customerGuidService = customerGuidService;
        this.router = router;
    }
    submit(form) {
        const checkoutOrder = {
            customerName: form.controls.customerName.value
        };
        if (form.controls.customerPhone.value !== null) {
            checkoutOrder.customerPhone = form.controls.customerPhone.value.toString();
        }
        this.orderService.checkoutByCustomerGuid(this.customerGuidService.getCustomerGuid(), checkoutOrder).subscribe(_ => this.thanks.show());
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_3__["CustomerGuidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], viewQuery: function CheckoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_1__["ThanksComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thanks = _t.first);
    } }, decls: 10, vars: 2, consts: [[1, "container"], [1, "title"], [1, "content"], ["formComponent", ""], [1, "button", 3, "fontSize", "disabled", "click"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add info about you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-form", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_Template_app_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.submit(_r0.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Confirm order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-thanks");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontSize", "1.75rem")("disabled", _r0.form.invalid);
    } }, directives: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _components_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _components_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_1__["ThanksComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  text-align: center;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  font-size: 3.3rem;\r\n  font-weight: 300;\r\n  margin-bottom: 60px;\r\n  text-shadow: 0 0 30px #333333;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  margin: 50px auto 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7O0FBRWhGO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMy4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggIzMzMzMzMztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }, { type: _shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_3__["CustomerGuidService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { thanks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_1__["ThanksComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/checkout/components/order/order.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/checkout/components/form/form.component.ts");
/* harmony import */ var _components_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/thanks/thanks.component */ "./src/app/checkout/components/thanks/thanks.component.ts");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/order.service */ "./src/app/shared/services/order.service.ts");











class CheckoutModule {
}
CheckoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CheckoutModule });
CheckoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CheckoutModule_Factory(t) { return new (t || CheckoutModule)(); }, providers: [_shared_services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckoutModule, { declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"],
        _components_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
        _components_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_8__["ThanksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"],
                    _components_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"],
                    _components_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                    _components_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_8__["ThanksComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                providers: [_shared_services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/checkout/components/form/form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/checkout/components/form/form.component.ts ***!
  \************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FormComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid phone format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormComponent {
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z]{1,30}$/)
            ]),
            customerPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d{7,12}$/)
            ])
        });
    }
    handlePhoneKeyDown(event) {
        const restrictedCharacters = ['e', '+', '-', '.'];
        if (restrictedCharacters.includes(event.key)) {
            event.preventDefault();
        }
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 17, vars: 9, consts: [[1, "container"], [3, "formGroup"], [1, "form-element"], [1, "control-header"], ["for", "name", 1, "form-label"], ["class", "invalid", 4, "ngIf"], ["formControlName", "customerName", "type", "text", "name", "name", "id", "name", "placeholder", "Andrew", "maxlength", "30", "autocomplete", "off"], ["for", "phone", 1, "form-label"], [1, "phone-control"], [1, "phone-plus-sign"], ["formControlName", "customerPhone", "type", "number", "name", "phone", "id", "phone", "placeholder", "14447775533", "autocomplete", "off", 3, "keydown"], [1, "invalid"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormComponent_span_6_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your phone (optionally)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormComponent_span_12_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FormComponent_Template_input_keydown_16_listener($event) { return ctx.handlePhoneKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.customerName.touched && ctx.form.controls.customerName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.form.controls.customerName.touched && ctx.form.controls.customerName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.customerPhone.touched && ctx.form.controls.customerPhone.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.form.controls.customerPhone.value !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.form.controls.customerPhone.touched && ctx.form.controls.customerPhone.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 560px;\r\n  background-color: #ffffff;\r\n  border-radius: 16px;\r\n  padding: 25px;\r\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  color: #333333;\r\n}\r\nspan.invalid[_ngcontent-%COMP%] {\r\n  color: #f28841;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"number\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.7em 1em;\r\n  border-radius: 0.3em;\r\n  border: 1px solid #cccccc;\r\n  font-size: 1rem;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 400;\r\n  outline: none;\r\n  transition: border 0.15s;\r\n  color: #333333;\r\n  line-height: 1;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]::placeholder, input[type=\"number\"][_ngcontent-%COMP%]::placeholder {\r\n  color: #aaaaaa;\r\n}\r\ninput[type=\"number\"][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus, input[type=\"number\"][_ngcontent-%COMP%]:focus {\r\n  border: 1px solid #999999;\r\n}\r\ninput[type=\"text\"].invalid[_ngcontent-%COMP%], input[type=\"number\"].invalid[_ngcontent-%COMP%] {\r\n  border: 1px solid #f28841;\r\n}\r\n.form-element[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.4rem;\r\n}\r\n.form-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.3rem;\r\n  margin-bottom: 10px;\r\n}\r\n.control-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n.phone-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.phone-plus-sign[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  color: #aaaaaa;\r\n  font-size: 1.1rem;\r\n  height: 100%;\r\n  left: 0.8em;\r\n  line-height: 1;\r\n  padding-top: 0.82em;\r\n}\r\n.phone-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  padding-left: 1.6em;\r\n}\r\n.phone-plus-sign.active[_ngcontent-%COMP%] {\r\n  color: #222222;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7QUFDaEYsOEVBQThFO0FBRTlFO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBOztFQUVFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA1NjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG5zcGFuLmludmFsaWQge1xyXG4gIGNvbG9yOiAjZjI4ODQxO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjdlbSAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cztcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06OnBsYWNlaG9sZGVyLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXS5pbnZhbGlkLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLmludmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMjg4NDE7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250cm9sLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5waG9uZS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5waG9uZS1wbHVzLXNpZ24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI2FhYWFhYTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMC44ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgcGFkZGluZy10b3A6IDAuODJlbTtcclxufVxyXG5cclxuLnBob25lLWNvbnRyb2wgaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogMS42ZW07XHJcbn1cclxuXHJcbi5waG9uZS1wbHVzLXNpZ24uYWN0aXZlIHtcclxuICBjb2xvcjogIzIyMjIyMjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/checkout/components/order/order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/checkout/components/order/order.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order-item.service */ "./src/app/shared/services/order-item.service.ts");
/* harmony import */ var src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _shared_components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/cart-item/cart-item.component */ "./src/app/shared/components/cart-item/cart-item.component.ts");









function OrderComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function OrderComponent_div_2_ng_template_3_hr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function OrderComponent_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cart-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_div_2_ng_template_3_hr_1_Template, 1, 0, "hr", 1);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3)("removable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 < ctx_r2.items.length - 1);
} }
function OrderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderComponent_div_2_ng_template_3_Template, 2, 3, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](9, 2, ctx_r1.totalPrice, "USD", "symbol", ".0-2"));
} }
class OrderComponent {
    constructor(orderItemService, customerGuidService) {
        this.items = [];
        this.orderItemService = orderItemService;
        this.customerGuidService = customerGuidService;
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.items = this.orderItemService.items;
        this.totalPrice = this.items.map(item => item.coffee.prices[0]).reduce((a, b) => a + b, 0);
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_1__["OrderItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_2__["CustomerGuidService"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 3, vars: 2, consts: [[1, "wrapper"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "title"], ["ngFor", "", 3, "ngForOf"], [1, "total"], ["routerLink", "/store", 1, "button"], [1, "item", 3, "item", "removable"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderComponent_div_2_Template, 13, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items !== null && ctx.items.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _shared_components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_7__["CartItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 380px;\r\n  min-height: 200px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #ffffff;\r\n  padding: 25px;\r\n  border-radius: 16px;\r\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  line-height: 1;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n  border: 0;\r\n  border-top: 1px solid #dddddd;\r\n  width: 100%;\r\n}\r\n\r\n.total[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin-top: 30px;\r\n  width: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlGQUF5Rjs7QUFFekY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzgwcHg7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_1__["OrderItemService"] }, { type: src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_2__["CustomerGuidService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/checkout/components/thanks/thanks.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/checkout/components/thanks/thanks.component.ts ***!
  \****************************************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/overlay/overlay.component */ "./src/app/shared/components/overlay/overlay.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");








function ThanksComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Thank you for your order!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " We are preparing it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " In the meantime you can go home. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Go home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", undefined);
} }
class ThanksComponent {
    constructor(router) {
        this.router = router;
        this.isVisible = false;
    }
    show() {
        this.overlay.show();
        this.isVisible = true;
    }
    goHome() {
        this.router.navigate(['/']);
    }
}
ThanksComponent.ɵfac = function ThanksComponent_Factory(t) { return new (t || ThanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ThanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThanksComponent, selectors: [["app-thanks"]], viewQuery: function ThanksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__["OverlayComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
    } }, decls: 2, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["routerLink", "/"], [1, "button"]], template: function ThanksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ThanksComponent_div_1_Template, 10, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [src_app_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__["OverlayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 600px;\r\n  top: 350px;\r\n  padding: 25px;\r\n  background-color: #ffffff;\r\n  border-radius: 15px;\r\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  z-index: 101;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY29tcG9uZW50cy90aGFua3MvdGhhbmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOztBQUVoRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY29tcG9uZW50cy90aGFua3MvdGhhbmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgdG9wOiAzNTBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHotaW5kZXg6IDEwMTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.75, 0.75)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, visibility: 'visible', transform: 'scale(1, 1)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.95, 0.95)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThanksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-thanks',
                templateUrl: './thanks.component.html',
                styleUrls: ['./thanks.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.75, 0.75)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, visibility: 'visible', transform: 'scale(1, 1)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.95, 0.95)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__["OverlayComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/button/button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ButtonComponent {
    constructor() {
        this.fontSize = '1.3rem';
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { disabled: "disabled", fontSize: "fontSize" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [[3, "disabled"], ["button", ""]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  background-color: #f2b041;\r\n  font-size: 1.3rem;\r\n  line-height: 1;\r\n  padding: 0.8em 1.26em;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 3em;\r\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\r\n  cursor: pointer;\r\n  transition: background-color 0.15s ease-out;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #e3991d;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #f2cc8d;\r\n  cursor: default;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjs7QUFFaEY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2FucyZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyYjA0MTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBwYWRkaW5nOiAwLjhlbSAxLjI2ZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMzk5MWQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyY2M4ZDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css']
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/cart-item/cart-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/cart-item/cart-item.component.ts ***!
  \********************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CartItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_div_9_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.handleButtonClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartItemComponent {
    constructor() {
        this.removable = true;
        this.removeButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleButtonClick(event) {
        event.stopPropagation();
        this.removeButtonClick.emit();
    }
}
CartItemComponent.ɵfac = function CartItemComponent_Factory(t) { return new (t || CartItemComponent)(); };
CartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartItemComponent, selectors: [["app-cart-item"]], inputs: { item: "item", removable: "removable" }, outputs: { removeButtonClick: "removeButtonClick" }, decls: 20, vars: 12, consts: [[1, "image"], [3, "src"], [1, "description"], [1, "description-title"], [1, "description-title-name"], [1, "description-title-volume"], ["class", "remove-button", 3, "click", 4, "ngIf"], [1, "description-body"], [1, "description-body-addins"], [1, "description-price"], [1, "remove-button", 3, "click"], [1, "remove-button-line-1"], [1, "remove-button-line-2"]], template: function CartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartItemComponent_div_9_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/images/", (ctx.item == null ? null : ctx.item.coffee == null ? null : ctx.item.coffee.image) || "default.webp", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.coffee == null ? null : ctx.item.coffee.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item == null ? null : ctx.item.coffee == null ? null : ctx.item.coffee.volume, " oz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.sugar > 0 ? ctx.item.sugar + " tsp of sugar" : "No sugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.cupCap ? "Cup cap" : "No cup cap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 7, ctx.item == null ? null : ctx.item.coffee == null ? null : ctx.item.coffee.price, "USD", "symbol", ".0-2"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n[_nghost-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  color: #333333;\r\n  width: 100%;\r\n  \r\n}\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 70px;\r\n  height: 65px;\r\n  border-radius: 4px;\r\n  margin-top: 2px;\r\n}\r\n.description[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  padding-left: 10px;\r\n}\r\n.description-title[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  line-height: 1.2;\r\n}\r\n.description-title-name[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  flex-grow: 1;\r\n  \r\n}\r\n.description-title-name[_ngcontent-%COMP%]::after {\r\n  content: \" \";\r\n}\r\n.description-title-volume[_ngcontent-%COMP%] {\r\n  \r\n  font-size: 1rem;\r\n  flex-shrink: unset;\r\n  white-space: nowrap;\r\n}\r\n.remove-button[_ngcontent-%COMP%] {\r\n  flex: 0 0 1.2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 1.2rem;\r\n  height: 1.2rem;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n  transition: opacity 0.15s ease-out;\r\n  \r\n}\r\n.remove-button[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n.remove-button-line-1[_ngcontent-%COMP%] {\r\n  height: 1.2rem;\r\n  width: 1px;\r\n  background-color: #444444;\r\n  transform: rotate(45deg);\r\n  \r\n}\r\n.remove-button-line-2[_ngcontent-%COMP%] {\r\n  height: 1.2rem;\r\n  width: 1px;\r\n  background-color: #444444;\r\n  transform: rotate(90deg);\r\n  \r\n}\r\n.description-body[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding-top: 3px;\r\n}\r\n.description-body-addins[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #4a4a4a;\r\n  line-height: 1.3;\r\n  flex-grow: 1;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 300;\r\n  \r\n}\r\n.description-body-addins[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  \r\n  list-style: none;\r\n}\r\n.description-body-addins[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\r\n  content: \"\\2022\";\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 0.8rem;\r\n  line-height: 1;\r\n  margin-right: 6px;\r\n}\r\n.description-price[_ngcontent-%COMP%] {\r\n  \r\n  align-self: flex-end;\r\n  font-size: 1.1rem;\r\n  line-height: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjtBQUNoRiw4RUFBOEU7QUFFOUU7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ3JlZW47ICovXHJcbn1cclxuXHJcbi5pbWFnZSBpbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNjVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGl0bGUge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHBlcnU7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRpdGxlLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7ICovXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10aXRsZS1uYW1lOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10aXRsZS12b2x1bWUge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZmxleC1zaHJpbms6IHVuc2V0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uIHtcclxuICBmbGV4OiAwIDAgMS4ycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMS4ycmVtO1xyXG4gIGhlaWdodDogMS4ycmVtO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlLW91dDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjsgKi9cclxufVxyXG5cclxuLnJlbW92ZS1idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uLWxpbmUtMSB7XHJcbiAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAvKiB6LWluZGV4OiAxOyAqL1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ1dHRvbi1saW5lLTIge1xyXG4gIGhlaWdodDogMS4ycmVtO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLyogei1pbmRleDogMjsgKi9cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWJvZHkge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWJvZHktYWRkaW5zIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTsgKi9cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWJvZHktYWRkaW5zIHVsIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBzZWFzaGVsbDsgKi9cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tYm9keS1hZGRpbnMgdWwgbGk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDIwMjJcIjtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXByaWNlIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBzYWRkbGVicm93bjsgKi9cclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-item',
                templateUrl: './cart-item.component.html',
                styleUrls: ['./cart-item.component.css']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeButtonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [[1, "body"], [1, "content"], ["routerLink", "/"], [1, "logo"], ["src", "/assets/images/logo.png"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CoffeeTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\r\n  height: 140px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 1400px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  align-items:flex-start;\r\n  margin-top: 10px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  color: #ffffff;\r\n  font-size: 2.2rem;\r\n  line-height: 1;\r\n  padding-left: 10px;\r\n  padding-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjs7QUFFaEY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtGQUFrRjtFQUNsRixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE0MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxvZ28gaW1nIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5sb2dvIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "./src/app/shared/components/button/button.component.ts");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "content"], [1, "title"], ["routerLink", "/store"], [1, "button", 3, "fontSize"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome to our coffee shop!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Press the button and choose your favorite coffee! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose coffee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontSize", "1.8rem");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 900px;\r\n  margin: 0 auto;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  height: 100%;\r\n  padding-top: 10%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  font-size: 3.5rem;\r\n  text-shadow: 0 0 30px rgba(0, 0, 0, 0.7);\r\n  margin-bottom: 60px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOztBQUVoRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingComponent {
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 5, vars: 0, consts: [[1, "spinner"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 5px;\r\n  border: 5px solid #fff;\r\n  border-radius: 50%;\r\n  animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #fff transparent transparent transparent;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  animation-delay: -0.45s;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  animation-delay: -0.3s;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  animation-delay: -0.15s;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMERBQTBEO0VBQzFELHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uc3Bpbm5lciBkaXYge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW4gMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNwaW5uZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XHJcbn1cclxuXHJcbi5zcGlubmVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuXHJcbi5zcGlubmVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "./src/app/shared/components/button/button.component.ts");




class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "content"], [1, "title"], ["routerLink", "/"], [3, "fontSize"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " It seems like this page is not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You can try to return home. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontSize", "1.8rem");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 900px;\r\n  margin: 0 auto;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  height: 100%;\r\n  padding-top: 10%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  font-size: 3.5rem;\r\n  text-shadow: 0 0 30px rgba(0, 0, 0, 0.7);\r\n  margin-bottom: 60px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjs7QUFFaEY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2FucyZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/overlay/overlay.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/overlay/overlay.component.ts ***!
  \****************************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class OverlayComponent {
    constructor() {
        this.isVisible = false;
    }
    show() {
        this.isVisible = true;
    }
    hide() {
        this.isVisible = false;
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(); };
OverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverlayComponent, selectors: [["app-overlay"]], decls: 1, vars: 1, template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", ctx.isVisible ? "shown" : "hidden");
    } }, styles: ["div[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.56);\r\n  z-index: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTYpO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    visibility: 'visible'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0,
                    visibility: 'hidden'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('shown <=> hidden', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in-out')
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-overlay',
                templateUrl: './overlay.component.html',
                styleUrls: ['./overlay.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 1,
                            visibility: 'visible'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0,
                            visibility: 'hidden'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('shown <=> hidden', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in-out')
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/checkout.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/guards/checkout.guard.ts ***!
  \*************************************************/
/*! exports provided: CheckoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function() { return CheckoutGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_order_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order-item.service */ "./src/app/shared/services/order-item.service.ts");
/* harmony import */ var _services_customer_guid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class CheckoutGuard {
    constructor(orderItemService, customerGuidService, router) {
        this.orderItemService = orderItemService;
        this.customerGuidService = customerGuidService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.orderItemService.getAllByCustomerGuid(this.customerGuidService.getCustomerGuid()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(orderItems => {
            if (orderItems.length > 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.router.createUrlTree(['/store']));
            }
        }));
    }
}
CheckoutGuard.ɵfac = function CheckoutGuard_Factory(t) { return new (t || CheckoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_order_item_service__WEBPACK_IMPORTED_MODULE_3__["OrderItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_4__["CustomerGuidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CheckoutGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckoutGuard, factory: CheckoutGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_order_item_service__WEBPACK_IMPORTED_MODULE_3__["OrderItemService"] }, { type: _services_customer_guid_service__WEBPACK_IMPORTED_MODULE_4__["CustomerGuidService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/customer-guid.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/customer-guid.service.ts ***!
  \**********************************************************/
/*! exports provided: CustomerGuidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerGuidService", function() { return CustomerGuidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// import { Guid } from 'guid-typescript';
class CustomerGuidService {
    constructor() {
        this.cookieName = 'customerGuid';
    }
    getCustomerGuid() {
        if (!this.cookieExists()) {
            this.writeCookie();
        }
        return this.readCookie();
    }
    cookieExists() {
        const matches = document.cookie.match(new RegExp("(?:^|; )" + this.cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches !== null;
    }
    readCookie() {
        const matches = document.cookie.match(new RegExp("(?:^|; )" + this.cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return decodeURIComponent(matches[1]);
    }
    writeCookie() {
        // document.cookie = `${this.cookieName}=${Guid.create()}`;
    }
}
CustomerGuidService.ɵfac = function CustomerGuidService_Factory(t) { return new (t || CustomerGuidService)(); };
CustomerGuidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerGuidService, factory: CustomerGuidService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerGuidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/order-item.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/order-item.service.ts ***!
  \*******************************************************/
/*! exports provided: OrderItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemService", function() { return OrderItemService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.service */ "./src/app/shared/services/order.service.ts");






class OrderItemService {
    constructor(http, orderService) {
        this.items = [];
        this.http = http;
        this.orderService = orderService;
        this.url = `/api/coffees`;
    }
    getAllByCustomerGuid(customerGuid) {
        const url = `${this.url}`;
        return this.http.get(url);
    }
    addForCustomerGuid(orderItem, customerGuid) {
        return this.orderService.addIfNotExist(customerGuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(_ => this.add(orderItem, customerGuid)));
    }
    updateById(orderItem, id) {
        const url = `${this.url}/${id}`;
        return this.http.patch(url, orderItem);
    }
    removeById(id) {
        const url = `${this.url}/${id}`;
        return this.http.delete(url);
    }
    add(orderItem, customerGuid) {
        orderItem.customerGuid = customerGuid;
        return this.http.post(this.url, orderItem, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        });
    }
}
OrderItemService.ɵfac = function OrderItemService_Factory(t) { return new (t || OrderItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"])); };
OrderItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderItemService, factory: OrderItemService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OrderService {
    constructor(http) {
        this.http = http;
        this.url = `/api/orders`;
    }
    getByCustomerGuid(customerGuid) {
        const url = `${this.url}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(orders => orders[0]));
    }
    addForCustomerGuid(customerGuid) {
        const newOrder = { customerGuid };
        return this.http.post(this.url, newOrder);
    }
    addIfNotExist(customerGuid) {
        return this.existsByCustomerGuid(customerGuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(exists => {
            if (!exists) {
                return this.addForCustomerGuid(customerGuid);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
        }));
    }
    existsByCustomerGuid(customerGuid) {
        const url = `${this.url}`;
        return this.http.head(url, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => +response.headers.get('Content-Length') > 0));
    }
    checkoutByCustomerGuid(customerGuid, checkoutOrder) {
        return this.getByCustomerGuid(customerGuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(order => this.checkoutById(order.id, checkoutOrder)));
    }
    checkoutById(id, checkoutOrder) {
        checkoutOrder.id = id;
        const url = `${this.url}:checkout`;
        return this.http.post(url, checkoutOrder);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart-item/cart-item.component */ "./src/app/shared/components/cart-item/cart-item.component.ts");
/* harmony import */ var _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/overlay/overlay.component */ "./src/app/shared/components/overlay/overlay.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
        _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"],
        _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]], exports: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
        _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"],
        _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
                    _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"],
                    _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"],
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
                ],
                exports: [
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"],
                    _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"],
                    _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"],
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store/components/cart/cart.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/components/cart/cart.component.ts ***!
  \*********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/order-item.service */ "./src/app/shared/services/order-item.service.ts");
/* harmony import */ var src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _shared_components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/cart-item/cart-item.component */ "./src/app/shared/components/cart-item/cart-item.component.ts");









function CartComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function CartComponent_div_2_ng_template_1_ng_template_2_hr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function CartComponent_div_2_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cart-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_ng_template_1_ng_template_2_Template_app_cart_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.handleItemClick(item_r5); })("removeButtonClick", function CartComponent_div_2_ng_template_1_ng_template_2_Template_app_cart_item_removeButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.removeItem(item_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_2_ng_template_1_ng_template_2_hr_1_Template, 1, 0, "hr", 1);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < ctx_r4.getItems().length - 1);
} }
function CartComponent_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_ng_template_1_ng_template_2_Template, 2, 2, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Proceed to checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getItems());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](8, 2, ctx_r2.totalPrice, "USD", "symbol", ".0-2"));
} }
function CartComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
} }
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_2_ng_template_1_Template, 12, 7, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_ng_template_2_Template, 3, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getItems() !== null && ctx_r1.getItems().length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.items && ctx_r1.items.length === 0);
} }
class CartComponent {
    constructor(orderItemService, customerGuidService) {
        this.orderItemService = orderItemService;
        this.customerGuidService = customerGuidService;
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.totalPrice = 0;
        this.isVisible = true;
    }
    ngOnInit() {
        this.updateTotalPrice();
    }
    updateItems(orderItem) {
        const itemIndex = this.orderItemService.items.findIndex(item => item.id === orderItem.id);
        this.orderItemService.items[itemIndex] = orderItem;
        this.updateTotalPrice();
        this.isVisible = true;
    }
    addItem(coffee) {
        coffee.id = new Date().valueOf().toString();
        this.orderItemService.items.push(coffee);
        this.updateTotalPrice();
        this.isVisible = true;
    }
    removeItem(id) {
        const ind = this.orderItemService.items.findIndex(item => item.id === id);
        this.orderItemService.items.splice(ind, 1);
    }
    getItems() {
        return this.orderItemService.items;
    }
    handleItemClick(item) {
        this.itemClicked.emit(item);
    }
    updateTotalPrice() {
        this.totalPrice = this.orderItemService.items.map(item => item.coffee.price).reduce((prev, cur) => prev + cur, 0);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_1__["OrderItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_2__["CustomerGuidService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], outputs: { itemClicked: "itemClicked" }, decls: 3, vars: 2, consts: [[1, "wrapper"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "ngIf"], [1, "title"], ["ngFor", "", 3, "ngForOf"], [1, "total"], ["routerLink", "/checkout"], [1, "button"], [1, "item", 3, "item", "click", "removeButtonClick"], [1, "empty-cart-title"], ["src", "/assets/icons/empty-cart-icon.svg", 1, "empty-cart-icon"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _shared_components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_7__["CartItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 340px;\r\n  min-height: 200px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #ffffff;\r\n  padding: 24px 22px;\r\n  border-radius: 16px;\r\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  color: #333333;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  line-height: 1;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n  border: 0;\r\n  border-top: 1px solid #dddddd;\r\n  width: 100%;\r\n}\r\n\r\n.total[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin-top: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 30px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.empty-cart-title[_ngcontent-%COMP%] {\r\n  color: #888888;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.empty-cart-icon[_ngcontent-%COMP%] {\r\n  height: 180px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RkFBeUY7O0FBRXpGO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOndnaHRANjAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzNDBweDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAyNHB4IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVtcHR5LWNhcnQtdGl0bGUge1xyXG4gIGNvbG9yOiAjODg4ODg4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5lbXB0eS1jYXJ0LWljb24ge1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_1__["OrderItemService"] }, { type: src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_2__["CustomerGuidService"] }]; }, { itemClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/store/components/coffee-customization/create-coffee/create-coffee.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/store/components/coffee-customization/create-coffee/create-coffee.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateCoffeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCoffeeComponent", function() { return CreateCoffeeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_coffee_edit_coffee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-coffee/edit-coffee.component */ "./src/app/store/components/coffee-customization/edit-coffee/edit-coffee.component.ts");
/* harmony import */ var src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/services/coffee.service */ "./src/app/store/services/coffee.service.ts");
/* harmony import */ var src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/order-item.service */ "./src/app/shared/services/order-item.service.ts");
/* harmony import */ var src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");
/* harmony import */ var _shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/overlay/overlay.component */ "./src/app/shared/components/overlay/overlay.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _range_control_range_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../range-control/range-control.component */ "./src/app/store/components/range-control/range-control.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");












function CreateCoffeeComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const volume_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", volume_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](volume_r2);
} }
function CreateCoffeeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCoffeeComponent_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.handleContainerClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCoffeeComponent_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CreateCoffeeComponent_div_2_div_12_Template, 4, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-range-control", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cup cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "app-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCoffeeComponent_div_2_Template_app_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.handleButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/images/", ctx_r0.image || "default.webp", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.volumes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", 0)("max", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.form.controls.sugar.value > 0 ? ctx_r0.form.controls.sugar.value + " tsp" : "No sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](26, 11, ctx_r0.price, "USD", "symbol", ".0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.buttonText);
} }
class CreateCoffeeComponent extends _edit_coffee_edit_coffee_component__WEBPACK_IMPORTED_MODULE_2__["EditCoffeeComponent"] {
    constructor(coffeeService, orderItemService, customerGuidService) {
        super(coffeeService, orderItemService, customerGuidService);
        this.orderItemCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buttonText = 'Add to order';
        this.isWaitingForResponse = false;
    }
    open(coffee) {
        this.coffee = coffee;
        const formInitials = {
            volume: coffee.volumes.length > 0 ? coffee.volumes[0] : '',
            sugar: 1,
            cupCap: true
        };
        if (this.initModel(coffee.volumes, formInitials, this.coffee)) {
            this.show();
        }
    }
    handleButtonClick() {
        const newOrderItem = {
            coffee: this.coffee,
            sugar: this.form.controls.sugar.value,
            cupCap: this.form.controls.cupCap.value
        };
        this.close();
        this.isWaitingForResponse = false;
        this.orderItemCreated.emit(newOrderItem);
    }
}
CreateCoffeeComponent.ɵfac = function CreateCoffeeComponent_Factory(t) { return new (t || CreateCoffeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__["OrderItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__["CustomerGuidService"])); };
CreateCoffeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateCoffeeComponent, selectors: [["app-create-coffee"]], outputs: { orderItemCreated: "orderItemCreated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[1, "wrapper", 3, "click"], ["class", "container", 3, "click", 4, "ngIf"], [1, "container", 3, "click"], [1, "close-button", 3, "click"], [1, "close-button-line-1"], [1, "close-button-line-2"], [1, "title"], [1, "image", 3, "src"], [1, "body-customization"], [1, "body-customization-form", 3, "formGroup"], [1, "form-element"], [1, "form-label"], ["class", "volume", 4, "ngFor", "ngForOf"], [1, "range"], ["formControlName", "sugar", 1, "range-input", 3, "min", "max"], [1, "range-label"], ["type", "checkbox", "formControlName", "cupCap", "id", "cupCap", 1, "checkbox"], ["for", "cupCap"], [1, "body-customization-price"], [1, "button", 3, "disabled", "click"], [1, "volume"], ["type", "radio", "formControlName", "volume", 3, "id", "value"], [3, "for"]], template: function CreateCoffeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCoffeeComponent_Template_div_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateCoffeeComponent_div_2_Template, 29, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__["OverlayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _range_control_range_control_component__WEBPACK_IMPORTED_MODULE_9__["RangeControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow-y: hidden;\r\n  z-index: 101;\r\n  pointer-events: none;\r\n}\r\n.wrapper.active[_ngcontent-%COMP%] {\r\n  overflow-y: overlay;\r\n  pointer-events: all;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  top: 7vh;\r\n  width: 440px;\r\n  padding: 20px 24px 24px;\r\n  background-color: #ffffff;\r\n  flex-direction: column;\r\n  border-radius: 15px;\r\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  z-index: 102;\r\n}\r\n.close-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-self: flex-end;\r\n  width: 1.6rem;\r\n  height: 1.6rem;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n  transition: opacity 0.15s ease-out;\r\n}\r\n.close-button[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n.close-button-line-1[_ngcontent-%COMP%] {\r\n  height: 1.6rem;\r\n  width: 2px;\r\n  background-color: #444444;\r\n  transform: rotate(45deg);\r\n  z-index: 1;\r\n}\r\n.close-button-line-2[_ngcontent-%COMP%] {\r\n  height: 1.6rem;\r\n  width: 2px;\r\n  background-color: #444444;\r\n  transform: rotate(90deg);\r\n  z-index: 2;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  line-height: 1.1;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  padding: 0 2rem;\r\n  margin-bottom: 15px;\r\n}\r\n.body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  \r\n}\r\n.image[_ngcontent-%COMP%] {\r\n  width: 340px;\r\n  height: 300px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  border-radius: 5px;\r\n  margin: 0 auto 25px;\r\n}\r\n.body-customization[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  padding-left: 15px;\r\n  \r\n}\r\n.body-customization-form[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  \r\n}\r\n.form-element[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.4rem;\r\n}\r\n.form-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.3rem;\r\n  margin-bottom: 10px;\r\n}\r\n.volume[_ngcontent-%COMP%] {\r\n  margin: 5px 0;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1;\r\n  opacity: 0;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 400;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  border: 1px solid #cccccc;\r\n  margin-right: 0.5em;\r\n  flex: 0 0 1.25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before {\r\n  border-radius: 4px;\r\n  background-size: 65% 65%;\r\n}\r\ninput[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before {\r\n  border-radius: 50%;\r\n  background-size: 60% 60%;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  border-color: #f2b041;\r\n  background-color: #f2b041;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");\r\n}\r\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  border-color: #f2b041;\r\n  background-color: #f2b041;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]::before, input[type=\"radio\"][_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]::before {\r\n  border-color: #f2cc8d;\r\n  background-color: #f2cc8d;\r\n}\r\n.form-element[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.range-input[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n.range-label[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n.body-customization-price[_ngcontent-%COMP%] {\r\n  font-size: 1.6rem;\r\n  text-align: end;\r\n  \r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  margin: 20px auto 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY29tcG9uZW50cy9jb2ZmZWUtY3VzdG9taXphdGlvbi9lZGl0LWNvZmZlZS9lZGl0LWNvZmZlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjtBQUNoRiw4RUFBOEU7QUFFOUU7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qiw2TUFBNk07QUFDL007QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsdUpBQXVKO0FBQ3pKO0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9jb21wb25lbnRzL2NvZmZlZS1jdXN0b21pemF0aW9uL2VkaXQtY29mZmVlL2VkaXQtY29mZmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDEwMTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLndyYXBwZXIuYWN0aXZlIHtcclxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogN3ZoO1xyXG4gIHdpZHRoOiA0NDBweDtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHggMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHotaW5kZXg6IDEwMjtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiAxLjZyZW07XHJcbiAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uLWxpbmUtMSB7XHJcbiAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uLWxpbmUtMiB7XHJcbiAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7ICovXHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDM0MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbn1cclxuXHJcbi5ib2R5LWN1c3RvbWl6YXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGN5YW47ICovXHJcbn1cclxuXHJcbi5ib2R5LWN1c3RvbWl6YXRpb24tZm9ybSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7ICovXHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi52b2x1bWUge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6OmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEuMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxuICBmbGV4OiAwIDAgMS4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDY1JSA2NSU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJSA2MCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjJiMDQxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmIwNDE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPSclMjNmZmYnIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2YyYjA0MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJiMDQxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyUyM2ZmZicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmFjdGl2ZSArIGxhYmVsOjpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTphY3RpdmUgKyBsYWJlbDo6YmVmb3JlIHtcclxuICBib3JkZXItY29sb3I6ICNmMmNjOGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyY2M4ZDtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCAucmFuZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJhbmdlLWlucHV0IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5yYW5nZS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5ib2R5LWN1c3RvbWl6YXRpb24tcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJra2hha2k7ICovXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.75, 0.75)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, visibility: 'visible', transform: 'scale(1, 1)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.95, 0.95)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateCoffeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-coffee',
                templateUrl: '../edit-coffee/edit-coffee.component.html',
                styleUrls: ['../edit-coffee/edit-coffee.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.75, 0.75)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, visibility: 'visible', transform: 'scale(1, 1)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.95, 0.95)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"] }, { type: src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__["OrderItemService"] }, { type: src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__["CustomerGuidService"] }]; }, { orderItemCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/store/components/coffee-customization/edit-coffee/edit-coffee.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/store/components/coffee-customization/edit-coffee/edit-coffee.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditCoffeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCoffeeComponent", function() { return EditCoffeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/overlay/overlay.component */ "./src/app/shared/components/overlay/overlay.component.ts");
/* harmony import */ var src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/services/coffee.service */ "./src/app/store/services/coffee.service.ts");
/* harmony import */ var src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/order-item.service */ "./src/app/shared/services/order-item.service.ts");
/* harmony import */ var src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");







class EditCoffeeComponent {
    constructor(coffeeService, orderItemService, customerGuidService) {
        this.coffeeService = coffeeService;
        this.orderItemService = orderItemService;
        this.customerGuidService = customerGuidService;
        this.closing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    close() {
        this.hide();
        this.closing.emit();
    }
    handleContainerClick(event) {
        // prevent event bubbling so that it would not trigger the wrapper's click handler
        event.stopPropagation();
    }
    show() {
        this.overlay.show();
        this.isVisible = true;
    }
    hide() {
        this.overlay.hide();
        this.isVisible = false;
    }
    initModel(volumes, formInitials, coffee) {
        this.coffee = JSON.parse(JSON.stringify(coffee));
        if (volumes.length === 0) {
            return false;
        }
        this.name = coffee.name;
        this.image = coffee.image;
        this.volumes = volumes;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            volume: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](formInitials.volume, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            sugar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](formInitials.sugar, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(3)
            ]),
            cupCap: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](formInitials.cupCap, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
        this.form.controls.volume.valueChanges.subscribe(this.updatePrice.bind(this));
        this.updatePrice();
        return true;
    }
    updatePrice() {
        const ind = this.coffee.volumes.findIndex(volume => volume === this.form.controls.volume.value);
        this.coffee.volume = this.form.controls.volume.value;
        this.price = this.coffee.price = this.coffee.prices[ind];
    }
}
EditCoffeeComponent.ɵfac = function EditCoffeeComponent_Factory(t) { return new (t || EditCoffeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__["OrderItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__["CustomerGuidService"])); };
EditCoffeeComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EditCoffeeComponent, viewQuery: function EditCoffeeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__["OverlayComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
    } }, outputs: { closing: "closing" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCoffeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"] }, { type: src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__["OrderItemService"] }, { type: src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__["CustomerGuidService"] }]; }, { overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__["OverlayComponent"]]
        }], closing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/store/components/coffee-customization/update-coffee/update-coffee.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/store/components/coffee-customization/update-coffee/update-coffee.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UpdateCoffeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCoffeeComponent", function() { return UpdateCoffeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit_coffee_edit_coffee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-coffee/edit-coffee.component */ "./src/app/store/components/coffee-customization/edit-coffee/edit-coffee.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/services/coffee.service */ "./src/app/store/services/coffee.service.ts");
/* harmony import */ var src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/order-item.service */ "./src/app/shared/services/order-item.service.ts");
/* harmony import */ var src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");
/* harmony import */ var _shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/overlay/overlay.component */ "./src/app/shared/components/overlay/overlay.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _range_control_range_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../range-control/range-control.component */ "./src/app/store/components/range-control/range-control.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");












function UpdateCoffeeComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const volume_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", volume_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volume_r2);
} }
function UpdateCoffeeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCoffeeComponent_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleContainerClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCoffeeComponent_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UpdateCoffeeComponent_div_2_div_12_Template, 4, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-range-control", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cup cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCoffeeComponent_div_2_Template_app_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.handleButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/images/", ctx_r0.image || "default.webp", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.volumes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.form.controls.sugar.value > 0 ? ctx_r0.form.controls.sugar.value + " tsp" : "No sugar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](26, 11, ctx_r0.price, "USD", "symbol", ".0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.buttonText);
} }
class UpdateCoffeeComponent extends _edit_coffee_edit_coffee_component__WEBPACK_IMPORTED_MODULE_1__["EditCoffeeComponent"] {
    constructor(coffeeService, orderItemService, customerGuidService) {
        super(coffeeService, orderItemService, customerGuidService);
        this.orderItemUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonText = 'Save';
    }
    open(orderItem) {
        this.orderItem = JSON.parse(JSON.stringify(orderItem));
        const formInitials = {
            volume: orderItem.coffee.volume,
            sugar: orderItem.sugar,
            cupCap: orderItem.cupCap
        };
        if (this.initModel(orderItem.coffee.volumes, formInitials, orderItem.coffee)) {
            this.show();
        }
    }
    handleButtonClick() {
        this.orderItem.coffee.price = this.price;
        this.orderItem.coffee.volume = this.form.controls.volume.value;
        this.orderItem.sugar = this.form.controls.sugar.value;
        this.orderItem.cupCap = this.form.controls.cupCap.value;
        this.orderItemUpdated.emit(this.orderItem);
        this.close();
    }
}
UpdateCoffeeComponent.ɵfac = function UpdateCoffeeComponent_Factory(t) { return new (t || UpdateCoffeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__["OrderItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__["CustomerGuidService"])); };
UpdateCoffeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateCoffeeComponent, selectors: [["app-update-coffee"]], outputs: { orderItemUpdated: "orderItemUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[1, "wrapper", 3, "click"], ["class", "container", 3, "click", 4, "ngIf"], [1, "container", 3, "click"], [1, "close-button", 3, "click"], [1, "close-button-line-1"], [1, "close-button-line-2"], [1, "title"], [1, "image", 3, "src"], [1, "body-customization"], [1, "body-customization-form", 3, "formGroup"], [1, "form-element"], [1, "form-label"], ["class", "volume", 4, "ngFor", "ngForOf"], [1, "range"], ["formControlName", "sugar", 1, "range-input", 3, "min", "max"], [1, "range-label"], ["type", "checkbox", "formControlName", "cupCap", "id", "cupCap", 1, "checkbox"], ["for", "cupCap"], [1, "body-customization-price"], [1, "button", 3, "disabled", "click"], [1, "volume"], ["type", "radio", "formControlName", "volume", 3, "id", "value"], [3, "for"]], template: function UpdateCoffeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCoffeeComponent_Template_div_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UpdateCoffeeComponent_div_2_Template, 29, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_shared_components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__["OverlayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _range_control_range_control_component__WEBPACK_IMPORTED_MODULE_9__["RangeControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow-y: hidden;\r\n  z-index: 101;\r\n  pointer-events: none;\r\n}\r\n.wrapper.active[_ngcontent-%COMP%] {\r\n  overflow-y: overlay;\r\n  pointer-events: all;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  top: 7vh;\r\n  width: 440px;\r\n  padding: 20px 24px 24px;\r\n  background-color: #ffffff;\r\n  flex-direction: column;\r\n  border-radius: 15px;\r\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  z-index: 102;\r\n}\r\n.close-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-self: flex-end;\r\n  width: 1.6rem;\r\n  height: 1.6rem;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n  transition: opacity 0.15s ease-out;\r\n}\r\n.close-button[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n.close-button-line-1[_ngcontent-%COMP%] {\r\n  height: 1.6rem;\r\n  width: 2px;\r\n  background-color: #444444;\r\n  transform: rotate(45deg);\r\n  z-index: 1;\r\n}\r\n.close-button-line-2[_ngcontent-%COMP%] {\r\n  height: 1.6rem;\r\n  width: 2px;\r\n  background-color: #444444;\r\n  transform: rotate(90deg);\r\n  z-index: 2;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  line-height: 1.1;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  padding: 0 2rem;\r\n  margin-bottom: 15px;\r\n}\r\n.body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  \r\n}\r\n.image[_ngcontent-%COMP%] {\r\n  width: 340px;\r\n  height: 300px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  border-radius: 5px;\r\n  margin: 0 auto 25px;\r\n}\r\n.body-customization[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  padding-left: 15px;\r\n  \r\n}\r\n.body-customization-form[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  \r\n}\r\n.form-element[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.4rem;\r\n}\r\n.form-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.3rem;\r\n  margin-bottom: 10px;\r\n}\r\n.volume[_ngcontent-%COMP%] {\r\n  margin: 5px 0;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1;\r\n  opacity: 0;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 400;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before, input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  border: 1px solid #cccccc;\r\n  margin-right: 0.5em;\r\n  flex: 0 0 1.25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before {\r\n  border-radius: 4px;\r\n  background-size: 65% 65%;\r\n}\r\ninput[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before {\r\n  border-radius: 50%;\r\n  background-size: 60% 60%;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  border-color: #f2b041;\r\n  background-color: #f2b041;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");\r\n}\r\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  border-color: #f2b041;\r\n  background-color: #f2b041;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]::before, input[type=\"radio\"][_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]::before {\r\n  border-color: #f2cc8d;\r\n  background-color: #f2cc8d;\r\n}\r\n.form-element[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.range-input[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n.range-label[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n.body-customization-price[_ngcontent-%COMP%] {\r\n  font-size: 1.6rem;\r\n  text-align: end;\r\n  \r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  margin: 20px auto 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY29tcG9uZW50cy9jb2ZmZWUtY3VzdG9taXphdGlvbi9lZGl0LWNvZmZlZS9lZGl0LWNvZmZlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjtBQUNoRiw4RUFBOEU7QUFFOUU7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qiw2TUFBNk07QUFDL007QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsdUpBQXVKO0FBQ3pKO0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9jb21wb25lbnRzL2NvZmZlZS1jdXN0b21pemF0aW9uL2VkaXQtY29mZmVlL2VkaXQtY29mZmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDEwMTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLndyYXBwZXIuYWN0aXZlIHtcclxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogN3ZoO1xyXG4gIHdpZHRoOiA0NDBweDtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHggMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHotaW5kZXg6IDEwMjtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiAxLjZyZW07XHJcbiAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uLWxpbmUtMSB7XHJcbiAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uLWxpbmUtMiB7XHJcbiAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7ICovXHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDM0MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbn1cclxuXHJcbi5ib2R5LWN1c3RvbWl6YXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGN5YW47ICovXHJcbn1cclxuXHJcbi5ib2R5LWN1c3RvbWl6YXRpb24tZm9ybSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7ICovXHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi52b2x1bWUge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6OmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEuMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxuICBmbGV4OiAwIDAgMS4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDY1JSA2NSU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJSA2MCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjJiMDQxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmIwNDE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPSclMjNmZmYnIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2YyYjA0MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJiMDQxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyUyM2ZmZicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmFjdGl2ZSArIGxhYmVsOjpiZWZvcmUsXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTphY3RpdmUgKyBsYWJlbDo6YmVmb3JlIHtcclxuICBib3JkZXItY29sb3I6ICNmMmNjOGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyY2M4ZDtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCAucmFuZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJhbmdlLWlucHV0IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5yYW5nZS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5ib2R5LWN1c3RvbWl6YXRpb24tcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJra2hha2k7ICovXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.75, 0.75)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, visibility: 'visible', transform: 'scale(1, 1)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.95, 0.95)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateCoffeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-coffee',
                templateUrl: '../edit-coffee/edit-coffee.component.html',
                styleUrls: ['../edit-coffee/edit-coffee.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.75, 0.75)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, visibility: 'visible', transform: 'scale(1, 1)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, visibility: 'hidden', transform: 'scale(0.95, 0.95)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_store_services_coffee_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"] }, { type: src_app_shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_4__["OrderItemService"] }, { type: src_app_shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_5__["CustomerGuidService"] }]; }, { orderItemUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/store/components/coffee-list/coffee-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/store/components/coffee-list/coffee-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: CoffeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeListComponent", function() { return CoffeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_coffee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/coffee.service */ "./src/app/store/services/coffee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");





function CoffeeListComponent_app_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function CoffeeListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoffeeListComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const coffee_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleClick(coffee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coffee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", (coffee_r2 == null ? null : coffee_r2.image) || "default.webp", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coffee_r2 == null ? null : coffee_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 3, coffee_r2 == null ? null : coffee_r2.prices[0], "USD", "symbol", ".0-2"));
} }
class CoffeeListComponent {
    constructor(productService) {
        this.coffeeService = productService;
        this.coffeeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.coffees = null;
    }
    ngOnInit() {
        this.coffeeService.getAllForDisplay()
            .subscribe(coffees => this.coffees = coffees);
    }
    handleClick(product) {
        this.coffeeClicked.emit(product);
    }
}
CoffeeListComponent.ɵfac = function CoffeeListComponent_Factory(t) { return new (t || CoffeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_coffee_service__WEBPACK_IMPORTED_MODULE_1__["CoffeeService"])); };
CoffeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoffeeListComponent, selectors: [["app-coffee-list"]], outputs: { coffeeClicked: "coffeeClicked" }, decls: 3, vars: 2, consts: [[1, "container"], [4, "ngIf"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], [1, "card-image", 3, "src"], [1, "card-title"], [1, "card-price"]], template: function CoffeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoffeeListComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CoffeeListComponent_div_2_Template, 7, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coffees === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coffees);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 720px;\r\n  min-height: 200px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  color: #333333;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 18px 22px;\r\n  width: 340px;\r\n  background-color: #ffffff;\r\n  border-radius: 15px;\r\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);\r\n  margin-bottom: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  width: 280px;\r\n  height: 260px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n  font-size: 1.6rem;\r\n  line-height: 2;\r\n  font-weight: 600;\r\n}\r\n\r\n.card-price[_ngcontent-%COMP%] {\r\n  font-size: 1.05rem;\r\n  line-height: 1;\r\n  font-weight: 300;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY29tcG9uZW50cy9jb2ZmZWUtbGlzdC9jb2ZmZWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjs7QUFFaEY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvY29tcG9uZW50cy9jb2ZmZWUtbGlzdC9jb2ZmZWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA3MjBweDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDE4cHggMjJweDtcclxuICB3aWR0aDogMzQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2FyZC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoffeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-coffee-list',
                templateUrl: './coffee-list.component.html',
                styleUrls: ['./coffee-list.component.css']
            }]
    }], function () { return [{ type: _services_coffee_service__WEBPACK_IMPORTED_MODULE_1__["CoffeeService"] }]; }, { coffeeClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/store/components/range-control/range-control.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/store/components/range-control/range-control.component.ts ***!
  \***************************************************************************/
/*! exports provided: RangeControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeControlComponent", function() { return RangeControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["input"];
const _c1 = ["track"];
const _c2 = ["fill"];
class RangeControlComponent {
    constructor() {
        this.min = 0;
        this.max = 100;
    }
    ngAfterViewInit() {
        this.updateFillWidth();
        this.updateTrackWidth();
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = (value) => {
            this.updateFillWidth();
            fn(value);
        };
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        this.updateFillStyle(isDisabled);
    }
    onChange(event) { }
    onTouched() { }
    onMouseDown() {
        this.updateFillStyle(true);
    }
    onMouseUp() {
        this.updateFillStyle(false);
    }
    updateFillWidth() {
        this.fill.nativeElement.style.width = this.input.nativeElement.offsetWidth / this.max * this.value + 'px';
    }
    updateTrackWidth() {
        this.track.nativeElement.style.width = this.input.nativeElement.offsetWidth + 'px';
    }
    updateFillStyle(isActive) {
        if (isActive) {
            this.fill.nativeElement.classList.add('active');
        }
        else {
            this.fill.nativeElement.classList.remove('active');
        }
    }
}
RangeControlComponent.ɵfac = function RangeControlComponent_Factory(t) { return new (t || RangeControlComponent)(); };
RangeControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangeControlComponent, selectors: [["app-range-control"]], viewQuery: function RangeControlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.track = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fill = _t.first);
    } }, inputs: { min: "min", max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RangeControlComponent),
                multi: true
            }])], decls: 6, vars: 4, consts: [[1, "track"], ["track", ""], [1, "fill"], ["fill", ""], ["type", "range", 3, "min", "max", "ngModel", "disabled", "ngModelChange", "blur", "mousedown", "mouseup"], ["input", ""]], template: function RangeControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RangeControlComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("ngModelChange", function RangeControlComponent_Template_input_ngModelChange_4_listener($event) { return ctx.onChange($event); })("blur", function RangeControlComponent_Template_input_blur_4_listener() { return ctx.onTouched(); })("mousedown", function RangeControlComponent_Template_input_mousedown_4_listener() { return ctx.onMouseDown(); })("mouseup", function RangeControlComponent_Template_input_mouseup_4_listener() { return ctx.onMouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.isDisabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  position: relative;\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n\r\n.track[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 0.3rem;\r\n  border-radius: 0.15rem;\r\n  border: 1px solid #dddddd;\r\n}\r\n\r\n.fill[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 0.3rem;\r\n  background-color: #f2b041;\r\n  border-radius: 0.15rem;\r\n}\r\n\r\n.fill.active[_ngcontent-%COMP%] {\r\n  background-color: #f2cc8d;\r\n}\r\n\r\ninput[type=\"range\"][_ngcontent-%COMP%] {\r\n  -webkit-appearance: none;\r\n  background-color: transparent;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"range\"][_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"range\"][_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  background-color: #ffffff;\r\n  border: 2px solid #f2b041;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"range\"][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\r\n  cursor: pointer;\r\n  background: transparent;\r\n}\r\n\r\ninput[type=\"range\"][_ngcontent-%COMP%]:active::-webkit-slider-thumb {\r\n  border-color: #f2cc8d;\r\n}\r\n\r\ninput[type=\"range\"][_ngcontent-%COMP%]:disabled::-webkit-slider-thumb {\r\n  border-color: #f2cc8d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY29tcG9uZW50cy9yYW5nZS1jb250cm9sL3JhbmdlLWNvbnRyb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL2NvbXBvbmVudHMvcmFuZ2UtY29udHJvbC9yYW5nZS1jb250cm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMC4zcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxufVxyXG5cclxuLmZpbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJiMDQxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XHJcbn1cclxuXHJcbi5maWxsLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyY2M4ZDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2YyYjA0MTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYW5nZVwiXTphY3RpdmU6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICBib3JkZXItY29sb3I6ICNmMmNjOGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYW5nZVwiXTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIGJvcmRlci1jb2xvcjogI2YyY2M4ZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-range-control',
                templateUrl: './range-control.component.html',
                styleUrls: ['./range-control.component.css'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RangeControlComponent),
                        multi: true
                    }]
            }]
    }], function () { return []; }, { min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: false }]
        }], track: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['track', { static: false }]
        }], fill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fill', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/store/services/coffee.service.ts":
/*!**************************************************!*\
  !*** ./src/app/store/services/coffee.service.ts ***!
  \**************************************************/
/*! exports provided: CoffeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeService", function() { return CoffeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CoffeeService {
    constructor(http) {
        this.http = http;
        this.url = `/api/coffees`;
    }
    getAllForDisplay() {
        const url = `${this.url}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(coffees => {
            // remove repeating names
            const distinctNames = new Set(coffees.map(c => c.name));
            // sort all coffees by price ascending
            const sorted = coffees.sort((a, b) => a.prices[0] - b.prices[0]);
            // take first item of each coffee, having lower prices first,
            // thus taking for each coffee only the one that has the lowest price
            const lowerPriceProducts = Array.from(distinctNames)
                .map(name => sorted.find(coffee => coffee.name === name));
            return lowerPriceProducts;
        }));
    }
    getVariants(name) {
        const url = `${this.url}?name=${name}`;
        return this.http.get(url);
    }
}
CoffeeService.ɵfac = function CoffeeService_Factory(t) { return new (t || CoffeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CoffeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoffeeService, factory: CoffeeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoffeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/store/components/cart/cart.component.ts");
/* harmony import */ var _components_coffee_customization_create_coffee_create_coffee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/coffee-customization/create-coffee/create-coffee.component */ "./src/app/store/components/coffee-customization/create-coffee/create-coffee.component.ts");
/* harmony import */ var _components_coffee_customization_update_coffee_update_coffee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/coffee-customization/update-coffee/update-coffee.component */ "./src/app/store/components/coffee-customization/update-coffee/update-coffee.component.ts");
/* harmony import */ var _components_coffee_list_coffee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/coffee-list/coffee-list.component */ "./src/app/store/components/coffee-list/coffee-list.component.ts");










class StoreComponent {
    ngAfterViewInit() {
        this.coffeeList.coffeeClicked.subscribe(coffee => {
            this.createCoffee.open(coffee);
            this.disableBodyScroll();
        });
        this.cart.itemClicked.subscribe(orderItem => {
            this.updateCoffee.open(orderItem);
            this.disableBodyScroll();
        });
        this.createCoffee.orderItemCreated.subscribe(coffee => this.cart.addItem(coffee));
        this.updateCoffee.orderItemUpdated.subscribe(orderItem => this.cart.updateItems(orderItem));
        this.createCoffee.closing.subscribe(_ => this.enableBodyScroll());
        this.updateCoffee.closing.subscribe(_ => this.enableBodyScroll());
    }
    enableBodyScroll() {
        const body = window.document.body;
        body.classList.remove('no-scroll');
    }
    disableBodyScroll() {
        const body = window.document.body;
        body.classList.add('no-scroll');
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(); };
StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["app-store"]], viewQuery: function StoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_coffee_list_coffee_list_component__WEBPACK_IMPORTED_MODULE_4__["CoffeeListComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_coffee_customization_create_coffee_create_coffee_component__WEBPACK_IMPORTED_MODULE_2__["CreateCoffeeComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components_coffee_customization_update_coffee_update_coffee_component__WEBPACK_IMPORTED_MODULE_3__["UpdateCoffeeComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.coffeeList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.createCoffee = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.updateCoffee = _t.first);
    } }, decls: 7, vars: 0, consts: [[1, "title"], [1, "content"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Take your favorite coffee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-coffee-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-create-coffee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-update-coffee");
    } }, directives: [_components_coffee_list_coffee_list_component__WEBPACK_IMPORTED_MODULE_4__["CoffeeListComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"], _components_coffee_customization_create_coffee_create_coffee_component__WEBPACK_IMPORTED_MODULE_2__["CreateCoffeeComponent"], _components_coffee_customization_update_coffee_update_coffee_component__WEBPACK_IMPORTED_MODULE_3__["UpdateCoffeeComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  text-align: center;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  font-size: 3.3rem;\r\n  font-weight: 300;\r\n  margin-bottom: 60px;\r\n  text-shadow: 0 0 30px #333333;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 1120px;\r\n  margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7O0FBRWhGO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMuM3JlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4ICMzMzMzMzM7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMTIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-store',
                templateUrl: './store.component.html',
                styleUrls: ['./store.component.css']
            }]
    }], null, { coffeeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_coffee_list_coffee_list_component__WEBPACK_IMPORTED_MODULE_4__["CoffeeListComponent"]]
        }], cart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"]]
        }], createCoffee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_coffee_customization_create_coffee_create_coffee_component__WEBPACK_IMPORTED_MODULE_2__["CreateCoffeeComponent"]]
        }], updateCoffee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components_coffee_customization_update_coffee_update_coffee_component__WEBPACK_IMPORTED_MODULE_3__["UpdateCoffeeComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _components_coffee_list_coffee_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/coffee-list/coffee-list.component */ "./src/app/store/components/coffee-list/coffee-list.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/store/components/cart/cart.component.ts");
/* harmony import */ var _components_range_control_range_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/range-control/range-control.component */ "./src/app/store/components/range-control/range-control.component.ts");
/* harmony import */ var _components_coffee_customization_create_coffee_create_coffee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/coffee-customization/create-coffee/create-coffee.component */ "./src/app/store/components/coffee-customization/create-coffee/create-coffee.component.ts");
/* harmony import */ var _components_coffee_customization_update_coffee_update_coffee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/coffee-customization/update-coffee/update-coffee.component */ "./src/app/store/components/coffee-customization/update-coffee/update-coffee.component.ts");
/* harmony import */ var _services_coffee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/coffee.service */ "./src/app/store/services/coffee.service.ts");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/order-item.service */ "./src/app/shared/services/order-item.service.ts");
/* harmony import */ var _shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/customer-guid.service */ "./src/app/shared/services/customer-guid.service.ts");

















class StoreModule {
}
StoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoreModule });
StoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoreModule_Factory(t) { return new (t || StoreModule)(); }, providers: [
        _services_coffee_service__WEBPACK_IMPORTED_MODULE_12__["CoffeeService"],
        _shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_14__["OrderItemService"],
        _shared_services_order_service__WEBPACK_IMPORTED_MODULE_13__["OrderService"],
        _shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_15__["CustomerGuidService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreModule, { declarations: [_store_component__WEBPACK_IMPORTED_MODULE_6__["StoreComponent"],
        _components_coffee_list_coffee_list_component__WEBPACK_IMPORTED_MODULE_7__["CoffeeListComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _components_range_control_range_control_component__WEBPACK_IMPORTED_MODULE_9__["RangeControlComponent"],
        _components_coffee_customization_create_coffee_create_coffee_component__WEBPACK_IMPORTED_MODULE_10__["CreateCoffeeComponent"],
        _components_coffee_customization_update_coffee_update_coffee_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCoffeeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
                declarations: [
                    _store_component__WEBPACK_IMPORTED_MODULE_6__["StoreComponent"],
                    _components_coffee_list_coffee_list_component__WEBPACK_IMPORTED_MODULE_7__["CoffeeListComponent"],
                    _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                    _components_range_control_range_control_component__WEBPACK_IMPORTED_MODULE_9__["RangeControlComponent"],
                    _components_coffee_customization_create_coffee_create_coffee_component__WEBPACK_IMPORTED_MODULE_10__["CreateCoffeeComponent"],
                    _components_coffee_customization_update_coffee_update_coffee_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCoffeeComponent"]
                ],
                providers: [
                    _services_coffee_service__WEBPACK_IMPORTED_MODULE_12__["CoffeeService"],
                    _shared_services_order_item_service__WEBPACK_IMPORTED_MODULE_14__["OrderItemService"],
                    _shared_services_order_service__WEBPACK_IMPORTED_MODULE_13__["OrderService"],
                    _shared_services_customer_guid_service__WEBPACK_IMPORTED_MODULE_15__["CustomerGuidService"]
                ]
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rashmiray/Work/POC/node-mongoDB/smart-coffee-shop/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map