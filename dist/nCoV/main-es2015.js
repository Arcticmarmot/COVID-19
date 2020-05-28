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
/* harmony import */ var _utils_trans_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/trans-data */ "./src/app/utils/trans-data.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _services_update_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/update.service */ "./src/app/services/update.service.ts");
/* harmony import */ var _statistic_related_num_related_num_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistic/related-num/related-num.component */ "./src/app/statistic/related-num/related-num.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _statistic_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistic/line-chart/line-chart.component */ "./src/app/statistic/line-chart/line-chart.component.ts");
/* harmony import */ var _statistic_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistic/pie-chart/pie-chart.component */ "./src/app/statistic/pie-chart/pie-chart.component.ts");
/* harmony import */ var _statistic_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statistic/bar-chart/bar-chart.component */ "./src/app/statistic/bar-chart/bar-chart.component.ts");
/* harmony import */ var _statistic_geo_bar_geo_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistic/geo-bar/geo-bar.component */ "./src/app/statistic/geo-bar/geo-bar.component.ts");
/* harmony import */ var _statistic_geo_scatter_geo_scatter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./statistic/geo-scatter/geo-scatter.component */ "./src/app/statistic/geo-scatter/geo-scatter.component.ts");














function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-geo-bar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("switch", ctx_r0.geoBarSwitch)("data", ctx_r0.geoBarData);
} }
function AppComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-geo-scatter", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("switch", ctx_r1.geoScatterSwitch)("data", ctx_r1.geoScatterData);
} }
class AppComponent {
    constructor(updateService) {
        this.updateService = updateService;
        this.geoSwitch = '2d';
        this.switch = 'china';
        this.geoBarSwitch = 'china';
        this.geoScatterSwitch = 'china';
        this.relatedNumData = {};
        this.parseData = {};
        this.times = 0;
        this.updateService.update().subscribe(data => {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["concatObject"])(this.parseData, JSON.parse(data.data));
            console.log(this.parseData);
            this.times++;
            if (this.times === 2) {
                this.update();
            }
        });
    }
    update() {
        if (this.geoSwitch === '3d') {
            this.geoBarData = Object(_utils_trans_data__WEBPACK_IMPORTED_MODULE_1__["trans2GeoBarData"])(this.geoBarSwitch, this.parseData);
        }
        else {
            this.geoScatterData = Object(_utils_trans_data__WEBPACK_IMPORTED_MODULE_1__["trans2GeoScatterData"])(this.geoScatterSwitch, this.parseData);
        }
        this.relatedNumData = Object(_utils_trans_data__WEBPACK_IMPORTED_MODULE_1__["trans2RelatedNumData"])(this.switch, this.parseData);
        this.lineChartData = Object(_utils_trans_data__WEBPACK_IMPORTED_MODULE_1__["trans2LineChartData"])(this.switch, this.parseData);
        this.barChartData = Object(_utils_trans_data__WEBPACK_IMPORTED_MODULE_1__["trans2BarChartData"])(this.switch, this.parseData);
        this.pieChartData = Object(_utils_trans_data__WEBPACK_IMPORTED_MODULE_1__["trans2PieChartData"])(this.switch, this.parseData);
    }
    geoSwitchChange($event) {
        if ($event.checked) {
            this.geoSwitch = '3d';
        }
        else {
            this.geoSwitch = '2d';
        }
        this.update();
    }
    geoWorldSwitchChange() {
        if (this.switch !== 'world') {
            this.switch = 'world';
            this.geoScatterSwitch = 'world';
            this.geoBarSwitch = 'world';
            this.update();
        }
    }
    geoChinaSwitchChange() {
        if (this.switch !== 'china') {
            this.switch = 'china';
            this.geoScatterSwitch = 'china';
            this.geoBarSwitch = 'china';
            this.update();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_update_service__WEBPACK_IMPORTED_MODULE_3__["UpdateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 28, vars: 6, consts: [["id", "app"], [1, "header"], [1, "title"], [1, "content"], [1, "left"], ["id", "related-num"], [3, "data"], ["id", "geo"], [1, "control"], [1, "area-control"], ["mat-stroked-button", "", 3, "click"], [1, "dimension-control"], [3, "change"], ["id", "geo-bar", 4, "ngIf"], ["id", "geo-scatter", 4, "ngIf"], [1, "right"], ["id", "line-chart"], ["id", "pie-chart"], ["id", "bar-chart"], ["id", "geo-bar"], [3, "switch", "data"], ["id", "geo-scatter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "COVID-19 Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-related-num", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.geoWorldSwitchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.geoChinaSwitchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-slide-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_mat_slide_toggle_change_17_listener($event) { return ctx.geoSwitchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_div_19_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_div_20_Template, 2, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-line-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-pie-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-bar-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.relatedNumData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.geoSwitch === "3d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.geoSwitch === "2d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.barChartData);
    } }, directives: [_statistic_related_num_related_num_component__WEBPACK_IMPORTED_MODULE_4__["RelatedNumComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _statistic_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_8__["LineChartComponent"], _statistic_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartComponent"], _statistic_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["BarChartComponent"], _statistic_geo_bar_geo_bar_component__WEBPACK_IMPORTED_MODULE_11__["GeoBarComponent"], _statistic_geo_scatter_geo_scatter_component__WEBPACK_IMPORTED_MODULE_12__["GeoScatterComponent"]], styles: ["#app[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 980px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #242A3F;\n  color: #edcd97;\n  height: 70px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n  font-size: 28px;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 910px;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 55%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   #related-num[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 18%;\n  padding: 20px;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   #geo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 82%;\n  display: -webkit-box;\n  display: flex;\n  padding: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   #geo[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 30px;\n  margin-left: 30px;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   #geo[_ngcontent-%COMP%]   #geo-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   #geo[_ngcontent-%COMP%]   #geo-scatter[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 42%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   #line-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 32%;\n  padding: 15px;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   #bar-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38%;\n  padding: 15px;\n}\n#app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   #pie-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  padding: 15px;\n  padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvYXJjdGkvRGVza3RvcC9Bbmd1bGFyL0NPVklELTE5L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7QURKQTtFQUtJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0VKO0FEWkE7RUFZTSxtQkFBQTtFQUNBLGVBQUE7QUNHTjtBRGhCQTtFQWlCSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VKO0FEckJBO0VBcUJNLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDR047QUQzQkE7RUEwQlEsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSVI7QURoQ0E7RUErQlEsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSVI7QUR2Q0E7RUFxQ1Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNLVjtBRDdDQTtFQWlEVSxXQUFBO0VBQ0EsWUFBQTtBQ0RWO0FEakRBO0VBcURVLFdBQUE7RUFDQSxZQUFBO0FDRFY7QURyREE7RUEyRE0sVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNITjtBRDNEQTtFQWdFUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGUjtBRGhFQTtFQXFFUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGUjtBRHJFQTtFQTBFUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5ODBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyQTNGO1xuICAgIGNvbG9yOiByZ2IoMjM3LDIwNSwxNTEpO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnRpdGxle1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG4gIH1cbiAgLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkxMHB4O1xuICAgIC5sZWZ0e1xuICAgICAgd2lkdGg6IDU1JTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgI3JlbGF0ZWQtbnVte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxOCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICB9XG4gICAgICAjZ2Vve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5jb250cm9se1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgLmFyZWEtY29udHJvbHtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAuZGltZW5zaW9uLWNvbnRyb2x7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgI2dlby1iYXJ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgICNnZW8tc2NhdHRlcntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0e1xuICAgICAgd2lkdGg6IDQyJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgI2xpbmUtY2hhcnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMyJTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cbiAgICAgICNiYXItY2hhcnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDM4JTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cbiAgICAgICNwaWUtY2hhcnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4iLCIjYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5ODBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNhcHAgLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDJBM0Y7XG4gIGNvbG9yOiAjZWRjZDk3O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2FwcCAuaGVhZGVyIC50aXRsZSB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbiNhcHAgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MTBweDtcbn1cbiNhcHAgLmNvbnRlbnQgLmxlZnQge1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jYXBwIC5jb250ZW50IC5sZWZ0ICNyZWxhdGVkLW51bSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4JTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiNhcHAgLmNvbnRlbnQgLmxlZnQgI2dlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNhcHAgLmNvbnRlbnQgLmxlZnQgI2dlbyAuY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4jYXBwIC5jb250ZW50IC5sZWZ0ICNnZW8gI2dlby1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI2FwcCAuY29udGVudCAubGVmdCAjZ2VvICNnZW8tc2NhdHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jYXBwIC5jb250ZW50IC5yaWdodCB7XG4gIHdpZHRoOiA0MiU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNhcHAgLmNvbnRlbnQgLnJpZ2h0ICNsaW5lLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzIlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuI2FwcCAuY29udGVudCAucmlnaHQgI2Jhci1jaGFydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM4JTtcbiAgcGFkZGluZzogMTVweDtcbn1cbiNhcHAgLmNvbnRlbnQgLnJpZ2h0ICNwaWUtY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _services_update_service__WEBPACK_IMPORTED_MODULE_3__["UpdateService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _statistic_statistic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistic/statistic.module */ "./src/app/statistic/statistic.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _statistic_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistic/pie-chart/pie-chart.component */ "./src/app/statistic/pie-chart/pie-chart.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _statistic_statistic_module__WEBPACK_IMPORTED_MODULE_5__["StatisticModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _statistic_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartComponent"]], imports: [_statistic_statistic_module__WEBPACK_IMPORTED_MODULE_5__["StatisticModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _statistic_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartComponent"],
                ],
                imports: [
                    _statistic_statistic_module__WEBPACK_IMPORTED_MODULE_5__["StatisticModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/update.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/update.service.ts ***!
  \********************************************/
/*! exports provided: UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_H5 = 'g2/getOnsInfo?name=disease_h5';
const API_OTHER = 'g2/getOnsInfo?name=disease_other';
const API_FOREIGN = 'g2/getOnsInfo?name=disease_foreign';
class UpdateService {
    constructor(http) {
        this.http = http;
    }
    update() {
        return this.update_h5().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concat"])(this.update_other().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concat"])(this.update_foreign()))));
    }
    update_h5() {
        return this.http.get(API_H5);
    }
    update_other() {
        return this.http.get(API_OTHER);
    }
    update_foreign() {
        return this.http.get(API_FOREIGN);
    }
}
UpdateService.ɵfac = function UpdateService_Factory(t) { return new (t || UpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UpdateService, factory: UpdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/statistic/bar-chart/bar-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/statistic/bar-chart/bar-chart.component.ts ***!
  \************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/config */ "./src/app/utils/config.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");




class BarChartComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.data && this.data) {
            this.options = Object(_utils_config__WEBPACK_IMPORTED_MODULE_1__["generateBarChartConfig"])(this.data);
        }
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["id", "chart", "echarts", "", 3, "options"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["#chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljL2Jhci1jaGFydC9DOi9Vc2Vycy9hcmN0aS9EZXNrdG9wL0FuZ3VsYXIvQ09WSUQtMTkvc3JjL2FwcC9zdGF0aXN0aWMvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3RhdGlzdGljL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcnR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIjY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.less']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/statistic/geo-bar/geo-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/statistic/geo-bar/geo-bar.component.ts ***!
  \********************************************************/
/*! exports provided: GeoBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoBarComponent", function() { return GeoBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts_map_js_world_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts/map/js/world.js */ "./node_modules/echarts/map/js/world.js");
/* harmony import */ var echarts_map_js_world_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts_map_js_world_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/map/js/china.js */ "./node_modules/echarts/map/js/china.js");
/* harmony import */ var echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var echarts_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts-gl */ "./node_modules/echarts-gl/dist/echarts-gl.js");
/* harmony import */ var echarts_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/app/utils/config.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");







class GeoBarComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.data && (changes.switch || changes.data)) {
            this.options = Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["generateGeoBarConfig"])(this.switch, this.data);
        }
    }
}
GeoBarComponent.ɵfac = function GeoBarComponent_Factory(t) { return new (t || GeoBarComponent)(); };
GeoBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeoBarComponent, selectors: [["app-geo-bar"]], inputs: { data: "data", switch: "switch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["id", "chart", "echarts", "", 3, "options"]], template: function GeoBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["ɵa"]], styles: ["#chart[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljL2dlby1iYXIvQzovVXNlcnMvYXJjdGkvRGVza3RvcC9Bbmd1bGFyL0NPVklELTE5L3NyYy9hcHAvc3RhdGlzdGljL2dlby1iYXIvZ2VvLWJhci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3RhdGlzdGljL2dlby1iYXIvZ2VvLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWMvZ2VvLWJhci9nZW8tYmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJ0e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiI2NoYXJ0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-geo-bar',
                templateUrl: './geo-bar.component.html',
                styleUrls: ['./geo-bar.component.less']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/statistic/geo-scatter/geo-scatter.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/statistic/geo-scatter/geo-scatter.component.ts ***!
  \****************************************************************/
/*! exports provided: GeoScatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoScatterComponent", function() { return GeoScatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/config */ "./src/app/utils/config.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");




class GeoScatterComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.data && (changes.switch || changes.data)) {
            this.options = Object(_utils_config__WEBPACK_IMPORTED_MODULE_1__["generateGeoScatterConfig"])(this.switch, this.data);
        }
    }
}
GeoScatterComponent.ɵfac = function GeoScatterComponent_Factory(t) { return new (t || GeoScatterComponent)(); };
GeoScatterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeoScatterComponent, selectors: [["app-geo-scatter"]], inputs: { data: "data", switch: "switch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["id", "chart", "echarts", "", 3, "options"]], template: function GeoScatterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["#chart[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljL2dlby1zY2F0dGVyL0M6L1VzZXJzL2FyY3RpL0Rlc2t0b3AvQW5ndWxhci9DT1ZJRC0xOS9zcmMvYXBwL3N0YXRpc3RpYy9nZW8tc2NhdHRlci9nZW8tc2NhdHRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3RhdGlzdGljL2dlby1zY2F0dGVyL2dlby1zY2F0dGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpYy9nZW8tc2NhdHRlci9nZW8tc2NhdHRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIiNjaGFydCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoScatterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-geo-scatter',
                templateUrl: './geo-scatter.component.html',
                styleUrls: ['./geo-scatter.component.less']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/statistic/line-chart/line-chart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/statistic/line-chart/line-chart.component.ts ***!
  \**************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/config */ "./src/app/utils/config.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");




class LineChartComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.data && this.data) {
            this.options = Object(_utils_config__WEBPACK_IMPORTED_MODULE_1__["generateLineChartConfig"])(this.data);
        }
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["id", "chart", "echarts", "", 3, "options"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["#chart[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljL2xpbmUtY2hhcnQvQzovVXNlcnMvYXJjdGkvRGVza3RvcC9Bbmd1bGFyL0NPVklELTE5L3NyYy9hcHAvc3RhdGlzdGljL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3RhdGlzdGljL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJ0e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiI2NoYXJ0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line-chart',
                templateUrl: './line-chart.component.html',
                styleUrls: ['./line-chart.component.less']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/statistic/pie-chart/pie-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/statistic/pie-chart/pie-chart.component.ts ***!
  \************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/config */ "./src/app/utils/config.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");




class PieChartComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.data && this.data) {
            this.options = Object(_utils_config__WEBPACK_IMPORTED_MODULE_1__["generatePieChartConfig"])(this.data);
        }
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(); };
PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-pie-chart"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["id", "chart", "echarts", "", 3, "options"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["#chart[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljL3BpZS1jaGFydC9DOi9Vc2Vycy9hcmN0aS9EZXNrdG9wL0FuZ3VsYXIvQ09WSUQtMTkvc3JjL2FwcC9zdGF0aXN0aWMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3RhdGlzdGljL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcnR7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIjY2hhcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pie-chart',
                templateUrl: './pie-chart.component.html',
                styleUrls: ['./pie-chart.component.less']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/statistic/related-num/related-num.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/statistic/related-num/related-num.component.ts ***!
  \****************************************************************/
/*! exports provided: RelatedNumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedNumComponent", function() { return RelatedNumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "color": a0 }; };
function RelatedNumComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u8F83\u6628\u65E5 : ", num_r3[2], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, num_r3[3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r3[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r3[0]);
} }
class RelatedNumComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RelatedNumComponent.ɵfac = function RelatedNumComponent_Factory(t) { return new (t || RelatedNumComponent)(); };
RelatedNumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelatedNumComponent, selectors: [["app-related-num"]], inputs: { data: "data" }, decls: 7, vars: 2, consts: [["id", "related-num"], [1, "update-time"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "add"], [1, "now", 3, "ngStyle"], [1, "item-name"]], template: function RelatedNumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RelatedNumComponent_div_5_Template, 9, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Updated at : ", ctx.data.lastUpdateTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.nums);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["#related-num[_ngcontent-%COMP%]   .update-time[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n#related-num[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n#related-num[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-family: \"Microsoft YaHei UI\";\n}\n#related-num[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n#related-num[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .now[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 20px;\n}\n#related-num[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljL3JlbGF0ZWQtbnVtL0M6L1VzZXJzL2FyY3RpL0Rlc2t0b3AvQW5ndWxhci9DT1ZJRC0xOS9zcmMvYXBwL3N0YXRpc3RpYy9yZWxhdGVkLW51bS9yZWxhdGVkLW51bS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3RhdGlzdGljL3JlbGF0ZWQtbnVtL3JlbGF0ZWQtbnVtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjtBREZBO0VBS0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNBSjtBRE5BO0VBUU0saUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ0NOO0FEWkE7RUFhUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEakJBO0VBa0JRLGVBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEckJBO0VBc0JRLGVBQUE7RUFDQSxtQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljL3JlbGF0ZWQtbnVtL3JlbGF0ZWQtbnVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlbGF0ZWQtbnVte1xuICAudXBkYXRlLXRpbWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAubGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC5pdGVte1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1pY3Jvc29mdCBZYUhlaSBVSVwiO1xuICAgICAgLmFkZHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLm5vd3tcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLml0ZW0tbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiI3JlbGF0ZWQtbnVtIC51cGRhdGUtdGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jcmVsYXRlZC1udW0gLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiNyZWxhdGVkLW51bSAubGlzdCAuaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJNaWNyb3NvZnQgWWFIZWkgVUlcIjtcbn1cbiNyZWxhdGVkLW51bSAubGlzdCAuaXRlbSAuYWRkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI3JlbGF0ZWQtbnVtIC5saXN0IC5pdGVtIC5ub3cge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jcmVsYXRlZC1udW0gLmxpc3QgLml0ZW0gLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatedNumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-related-num',
                templateUrl: './related-num.component.html',
                styleUrls: ['./related-num.component.less']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/statistic/statistic.module.ts":
/*!***********************************************!*\
  !*** ./src/app/statistic/statistic.module.ts ***!
  \***********************************************/
/*! exports provided: StatisticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticModule", function() { return StatisticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _geo_bar_geo_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geo-bar/geo-bar.component */ "./src/app/statistic/geo-bar/geo-bar.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _related_num_related_num_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./related-num/related-num.component */ "./src/app/statistic/related-num/related-num.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _geo_scatter_geo_scatter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geo-scatter/geo-scatter.component */ "./src/app/statistic/geo-scatter/geo-scatter.component.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/statistic/line-chart/line-chart.component.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/statistic/bar-chart/bar-chart.component.ts");










class StatisticModule {
}
StatisticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StatisticModule });
StatisticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StatisticModule_Factory(t) { return new (t || StatisticModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatisticModule, { declarations: [_geo_bar_geo_bar_component__WEBPACK_IMPORTED_MODULE_2__["GeoBarComponent"], _related_num_related_num_component__WEBPACK_IMPORTED_MODULE_4__["RelatedNumComponent"], _geo_scatter_geo_scatter_component__WEBPACK_IMPORTED_MODULE_6__["GeoScatterComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]], exports: [_geo_bar_geo_bar_component__WEBPACK_IMPORTED_MODULE_2__["GeoBarComponent"],
        _related_num_related_num_component__WEBPACK_IMPORTED_MODULE_4__["RelatedNumComponent"],
        _geo_scatter_geo_scatter_component__WEBPACK_IMPORTED_MODULE_6__["GeoScatterComponent"],
        _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"],
        _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_geo_bar_geo_bar_component__WEBPACK_IMPORTED_MODULE_2__["GeoBarComponent"], _related_num_related_num_component__WEBPACK_IMPORTED_MODULE_4__["RelatedNumComponent"], _geo_scatter_geo_scatter_component__WEBPACK_IMPORTED_MODULE_6__["GeoScatterComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"]],
                exports: [
                    _geo_bar_geo_bar_component__WEBPACK_IMPORTED_MODULE_2__["GeoBarComponent"],
                    _related_num_related_num_component__WEBPACK_IMPORTED_MODULE_4__["RelatedNumComponent"],
                    _geo_scatter_geo_scatter_component__WEBPACK_IMPORTED_MODULE_6__["GeoScatterComponent"],
                    _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"],
                    _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/config.ts":
/*!*********************************!*\
  !*** ./src/app/utils/config.ts ***!
  \*********************************/
/*! exports provided: generateBarChartConfig, generateLineChartConfig, generateGeoBarConfig, generateGeoScatterConfig, generatePieChartConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBarChartConfig", function() { return generateBarChartConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLineChartConfig", function() { return generateLineChartConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGeoBarConfig", function() { return generateGeoBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGeoScatterConfig", function() { return generateGeoScatterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePieChartConfig", function() { return generatePieChartConfig; });
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts/lib/echarts */ "./node_modules/echarts/lib/echarts.js");
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ "./src/app/utils/translate.ts");


function generateBarChartConfig(queryData) {
    return {
        title: {
            text: 'Rank by Patients',
            left: 10
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            bottom: 90
        },
        dataZoom: [{
                type: 'inside',
                start: 0,
                end: 20
            }, {
                start: 0,
                end: 20,
                // tslint:disable-next-line:max-line-length
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
        xAxis: {
            data: queryData.xAxis,
            silent: false,
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            }
        },
        yAxis: {
            splitArea: {
                show: false
            }
        },
        series: [
            {
                name: 'Current confirmed',
                type: 'bar',
                data: queryData.yAxisNowComfirm,
                stack: 'one',
                color: 'lightcoral'
            },
            {
                name: 'Death',
                type: 'bar',
                data: queryData.yAxisDead,
                stack: 'one',
                color: 'crimson'
            },
            {
                name: 'Heal',
                type: 'bar',
                data: queryData.yAxisHeal,
                stack: 'one',
                color: 'darkseagreen',
            }
        ]
    };
}
function generateLineChartConfig(queryData) {
    return {
        tooltip: {
            trigger: 'axis',
        },
        title: {
            left: 'center',
            text: 'Trend of Daily Increased Cases',
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: queryData.xAxis
        },
        yAxis: {
            type: 'value',
        },
        dataZoom: [{
                type: 'inside',
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
        series: [
            {
                name: '新增病例',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                data: queryData.yAxis
            }
        ]
    };
}
function generateGeoBarConfig(switchMap, queryData) {
    return {
        title: {
            text: (switchMap === 'china' ? '中国' : '世界') + '疫情累计确诊病例柱状图',
            left: 'right'
        },
        toolbox: {
            show: true,
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        backgroundColor: '#cdcfd5',
        geo3D: {
            map: switchMap,
            shading: 'lambert',
            light: {
                main: {
                    intensity: 0.7,
                    shadow: true,
                    shadowQuality: 'ultra',
                    alpha: 30
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    texture: '../../assets/hdr/demo3.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5
                }
            },
            environment: new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: '#00aaff' // 天空颜色
                }, {
                    offset: 0.6, color: '#cdcfd5'
                }, {
                    offset: 1, color: '#cdcfd5'
                }], false),
            viewControl: {
                distance: 70,
                panMouseButton: 'left',
                rotateMouseButton: 'right',
                maxDistance: 100,
                panSensitivity: 1.5
            },
            groundPlane: {
                show: true,
                color: '#cdcfd5'
            },
            postEffect: {
                enable: true,
                bloom: {
                    enable: false
                },
                SSAO: {
                    radius: 1,
                    intensity: 1,
                    enable: true
                },
                depthOfField: {
                    enable: false,
                    focalRange: 10,
                    blurRadius: 10,
                    fstop: 1
                },
            },
            temporalSuperSampling: {
                enable: true
            },
            regionHeight: 1
        },
        visualMap: {
            max: 10,
            calculable: true,
            realtime: false,
            text: ['high', 'low'],
            inRange: {
                color: [
                    '#313695', '#4575b4', '#fdae61',
                    '#f46d43', '#d73027', '#a50026'
                ]
            },
            outOfRange: {
                colorAlpha: 0
            }
        },
        legend: {
            right: true,
            bottom: true,
            orient: 'vertical',
            data: ['现存确诊', '累计确诊', '治愈', '死亡'],
            selectedMode: 'single',
            selected: {
                '现存确诊': true,
                '累计确诊': false,
                '治愈': false,
                '死亡': false
            }
        },
        series: [
            {
                name: '现存确诊',
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                shading: 'lambert',
                data: queryData['nowConfirm'],
                barSize: 0.3,
                minHeight: 0.5,
                silent: true,
                animation: true,
                itemStyle: {
                    opacity: 0.8,
                }
            },
            {
                name: '累计确诊',
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                shading: 'lambert',
                data: queryData['confirm'],
                barSize: 0.3,
                minHeight: 0.5,
                silent: true,
                animation: true,
                itemStyle: {
                    opacity: 0.8,
                },
            },
            {
                name: '治愈',
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                shading: 'lambert',
                data: queryData['heal'],
                barSize: 0.3,
                minHeight: 0.5,
                silent: true,
                animation: true,
                itemStyle: {
                    opacity: 0.8,
                }
            },
            {
                name: '死亡',
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                shading: 'lambert',
                data: queryData['dead'],
                barSize: 0.3,
                minHeight: 0.5,
                silent: true,
                animation: true,
                itemStyle: {
                    opacity: 0.8,
                }
            }
        ]
    };
}
function generateGeoScatterConfig(switchMap, queryData) {
    return {
        title: {
            text: (switchMap === 'china' ? '中国' : '世界') + '疫情累计确诊病例密度图',
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
        },
        visualMap: {
            type: 'piecewise',
            left: 'right',
            pieces: [
                { min: 10000 },
                { min: 1000, max: 9999 },
                { min: 100, max: 999 },
                { min: 10, max: 99 },
                { min: 1, max: 9 },
                { max: 1 } // 不指定 min，表示 min 为无限大（-Infinity）。
            ],
            inRange: {
                color: ['#e0f3f8', '#abd9e9', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027']
            },
            calculable: true
        },
        toolbox: {
            show: true,
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            left: true,
            bottom: true,
            orient: 'vertical',
            data: ['现存确诊', '累计确诊', '治愈', '死亡'],
            selectedMode: 'single',
            selected: {
                '现存确诊': true,
                '累计确诊': false,
                '治愈': false,
                '死亡': false
            }
        },
        series: [
            {
                name: '现存确诊',
                type: 'map',
                roam: true,
                map: switchMap,
                label: {
                    show: true,
                    fontFamily: 'Microsoft YaHei',
                },
                nameMap: _translate__WEBPACK_IMPORTED_MODULE_1__["SIMPLE_WORLD"],
                itemStyle: {
                    areaColor: '#eee',
                    borderWidth: 2,
                    borderType: 'solid'
                },
                zoom: 1.2,
                selectedMode: 'multiple',
                emphasis: {
                    label: {
                        show: true,
                        fontWeight: 'bold',
                    }
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data: queryData['nowConfirm']
            },
            {
                name: '累计确诊',
                type: 'map',
                roam: true,
                map: switchMap,
                label: {
                    show: true,
                    fontFamily: 'Microsoft YaHei',
                },
                nameMap: _translate__WEBPACK_IMPORTED_MODULE_1__["SIMPLE_WORLD"],
                itemStyle: {
                    areaColor: '#eee',
                    borderWidth: 2,
                    borderType: 'solid'
                },
                zoom: 1.2,
                emphasis: {
                    label: {
                        show: true,
                        fontWeight: 'bold',
                    }
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data: queryData['confirm']
            },
            {
                name: '治愈',
                type: 'map',
                roam: true,
                map: switchMap,
                label: {
                    show: true,
                    fontFamily: 'Microsoft YaHei',
                },
                itemStyle: {
                    areaColor: '#eee',
                    borderWidth: 2,
                    borderType: 'solid'
                },
                nameMap: _translate__WEBPACK_IMPORTED_MODULE_1__["SIMPLE_WORLD"],
                zoom: 1.2,
                selectedMode: 'multiple',
                emphasis: {
                    label: {
                        show: true,
                        fontWeight: 'bold',
                    }
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data: queryData['heal']
            },
            {
                name: '死亡',
                type: 'map',
                roam: true,
                map: switchMap,
                label: {
                    show: true,
                    fontFamily: 'Microsoft YaHei',
                },
                itemStyle: {
                    areaColor: '#eee',
                    borderWidth: 2,
                    borderType: 'solid'
                },
                nameMap: _translate__WEBPACK_IMPORTED_MODULE_1__["SIMPLE_WORLD"],
                zoom: 1.2,
                selectedMode: 'multiple',
                emphasis: {
                    label: {
                        show: true,
                        fontWeight: 'bold',
                    }
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data: queryData['dead']
            },
        ]
    };
}
function generatePieChartConfig(queryData) {
    return {
        title: {
            text: "The Radio of Patients' type",
            right: true,
            top: true,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['现存确诊', '治愈', '死亡'],
        },
        series: [
            {
                name: '病患占比',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: queryData['situation']
            }
        ]
    };
}


/***/ }),

/***/ "./src/app/utils/coordinate.ts":
/*!*************************************!*\
  !*** ./src/app/utils/coordinate.ts ***!
  \*************************************/
/*! exports provided: WORLD, CHINA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORLD", function() { return WORLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHINA", function() { return CHINA; });
const WORLD = {
    "阿富汗": [67.709953, 33.93911],
    "安哥拉": [17.873887, -11.202692],
    "阿尔巴尼亚": [20.168331, 41.153332],
    "阿联酋": [53.847818, 23.424076],
    "阿根廷": [-63.61667199999999, -38.416097],
    "亚美尼亚": [45.038189, 40.069099],
    "法属南半球和南极领地": [69.348557, -49.280366],
    "澳大利亚": [133.775136, -25.274398],
    "奥地利": [14.550072, 47.516231],
    "阿塞拜疆": [47.576927, 40.143105],
    "布隆迪": [29.918886, -3.373056],
    "比利时": [4.469936, 50.503887],
    "贝宁": [2.315834, 9.30769],
    "布基纳法索": [-1.561593, 12.238333],
    "孟加拉国": [90.356331, 23.684994],
    "保加利亚": [25.48583, 42.733883],
    "巴哈马": [-77.39627999999999, 25.03428],
    "波斯尼亚和黑塞哥维那": [17.679076, 43.915886],
    "白俄罗斯": [27.953389, 53.709807],
    "伯利兹": [-88.49765, 17.189877],
    "百慕大": [-64.7505, 32.3078],
    "玻利维亚": [-63.58865299999999, -16.290154],
    "巴西": [-51.92528, -14.235004],
    "文莱": [114.727669, 4.535277],
    "不丹": [90.433601, 27.514162],
    "博茨瓦纳": [24.684866, -22.328474],
    "中非共和国": [20.939444, 6.611110999999999],
    "加拿大": [-106.346771, 56.130366],
    "瑞士": [8.227511999999999, 46.818188],
    "智利": [-71.542969, -35.675147],
    "中国": [104.195397, 35.86166],
    "象牙海岸": [-5.547079999999999, 7.539988999999999],
    "喀麦隆": [12.354722, 7.369721999999999],
    "刚果民主共和国": [21.758664, -4.038333],
    "刚果共和国": [15.827659, -0.228021],
    "哥伦比亚": [-74.297333, 4.570868],
    "哥斯达黎加": [-83.753428, 9.748916999999999],
    "古巴": [-77.781167, 21.521757],
    "北塞浦路斯": [33.429859, 35.126413],
    "塞浦路斯": [33.429859, 35.126413],
    "捷克共和国": [15.472962, 49.81749199999999],
    "德国": [10.451526, 51.165691],
    "吉布提": [42.590275, 11.825138],
    "丹麦": [9.501785, 56.26392],
    "多明尼加共和国": [-70.162651, 18.735693],
    "阿尔及利亚": [1.659626, 28.033886],
    "厄瓜多尔": [-78.18340599999999, -1.831239],
    "埃及": [30.802498, 26.820553],
    "厄立特里亚": [39.782334, 15.179384],
    "西班牙": [-3.74922, 40.46366700000001],
    "爱沙尼亚": [25.013607, 58.595272],
    "埃塞俄比亚": [40.489673, 9.145000000000001],
    "芬兰": [25.748151, 61.92410999999999],
    "斐": [178.065032, -17.713371],
    "福克兰群岛": [-59.523613, -51.796253],
    "法国": [2.213749, 46.227638],
    "加蓬": [11.609444, -0.803689],
    "英国": [-3.435973, 55.378051],
    "格鲁吉亚": [-82.9000751, 32.1656221],
    "加纳": [-1.023194, 7.946527],
    "几内亚": [-9.696645, 9.945587],
    "冈比亚": [-15.310139, 13.443182],
    "几内亚比绍": [-15.180413, 11.803749],
    "赤道几内亚": [10.267895, 1.650801],
    "希腊": [21.824312, 39.074208],
    "格陵兰": [-42.604303, 71.706936],
    "危地马拉": [-90.23075899999999, 15.783471],
    "法属圭亚那": [-53.125782, 3.933889],
    "圭亚那": [-58.93018, 4.860416],
    "洪都拉斯": [-86.241905, 15.199999],
    "克罗地亚": [15.2, 45.1],
    "海地": [-72.285215, 18.971187],
    "匈牙利": [19.503304, 47.162494],
    "印尼": [113.921327, -0.789275],
    "印度": [78.96288, 20.593684],
    "爱尔兰": [-8.24389, 53.41291],
    "伊朗": [53.688046, 32.427908],
    "伊拉克": [43.679291, 33.223191],
    "冰岛": [-19.020835, 64.963051],
    "以色列": [34.851612, 31.046051],
    "意大利": [12.56738, 41.87194],
    "牙买加": [-77.297508, 18.109581],
    "约旦": [36.238414, 30.585164],
    "日本本土": [138.252924, 36.204824],
    "钻石号邮轮": [137.252924, 36.204824],
    "哈萨克斯坦": [66.923684, 48.019573],
    "肯尼亚": [37.906193, -0.023559],
    "吉尔吉斯斯坦": [74.766098, 41.20438],
    "柬埔寨": [104.990963, 12.565679],
    "韩国": [127.766922, 35.907757],
    "科索沃": [20.902977, 42.6026359],
    "科威特": [47.481766, 29.31166],
    "老挝": [102.495496, 19.85627],
    "黎巴嫩": [35.862285, 33.854721],
    "利比里亚": [-9.429499000000002, 6.428055],
    "利比亚": [17.228331, 26.3351],
    "斯里兰卡": [80.77179699999999, 7.873053999999999],
    "莱索托": [28.233608, -29.609988],
    "立陶宛": [23.881275, 55.169438],
    "卢森堡": [6.129582999999999, 49.815273],
    "拉脱维亚": [24.603189, 56.879635],
    "摩洛哥": [-7.092619999999999, 31.791702],
    "摩尔多瓦": [28.369885, 47.411631],
    "马达加斯加": [46.869107, -18.766947],
    "墨西哥": [-102.552784, 23.634501],
    "北马其顿": [21.745275, 41.608635],
    "马里": [-3.996166, 17.570692],
    "缅甸": [95.956223, 21.913965],
    "黑山": [19.37439, 42.708678],
    "蒙古": [103.846656, 46.862496],
    "莫桑比克": [35.529562, -18.665695],
    "毛里塔尼亚": [-10.940835, 21.00789],
    "马拉维": [34.301525, -13.254308],
    "马来西亚": [101.975766, 4.210484],
    "纳米比亚": [18.49041, -22.95764],
    "新喀里多尼亚": [165.618042, -20.904305],
    "尼日尔": [8.081666, 17.607789],
    "尼日利亚": [8.675277, 9.081999],
    "尼加拉瓜": [-85.207229, 12.865416],
    "荷兰": [5.291265999999999, 52.132633],
    "挪威": [8.468945999999999, 60.47202399999999],
    "尼泊尔": [84.12400799999999, 28.394857],
    "新西兰": [174.885971, -40.900557],
    "阿曼": [55.923255, 21.512583],
    "巴基斯坦": [69.34511599999999, 30.375321],
    "巴拿马": [-80.782127, 8.537981],
    "秘鲁": [-75.015152, -9.189967],
    "菲律宾": [121.774017, 12.879721],
    "巴布亚新几内亚": [143.95555, -6.314992999999999],
    "巴林": [50.36, 26.12],
    "新加坡": [103.51, 1.18],
    "波兰": [19.145136, 51.919438],
    "波多黎各": [-66.590149, 18.220833],
    "北朝鲜": [127.510093, 40.339852],
    "葡萄牙": [-8.224454, 39.39987199999999],
    "巴拉圭": [-58.443832, -23.442503],
    "卡塔尔": [51.183884, 25.354826],
    "罗马尼亚": [24.96676, 45.943161],
    "俄罗斯": [105.318756, 61.52401],
    "卢旺达": [29.873888, -1.940278],
    "西撒哈拉": [-12.885834, 24.215527],
    "沙特阿拉伯": [45.079162, 23.885942],
    "苏丹": [30.217636, 12.862807],
    "南苏丹": [31.3069788, 6.876991899999999],
    "塞内加尔": [-14.452362, 14.497401],
    "所罗门群岛": [160.156194, -9.64571],
    "塞拉利昂": [-11.779889, 8.460555],
    "萨尔瓦多": [-88.89653, 13.794185],
    "索马里兰": [46.8252838, 9.411743399999999],
    "索马里": [46.199616, 5.152149],
    "塞尔维亚共和国": [21.005859, 44.016521],
    "苏里南": [-56.027783, 3.919305],
    "斯洛伐克": [19.699024, 48.669026],
    "斯洛文尼亚": [14.995463, 46.151241],
    "瑞典": [18.643501, 60.12816100000001],
    "斯威士兰": [31.465866, -26.522503],
    "叙利亚": [38.996815, 34.80207499999999],
    "乍得": [18.732207, 15.454166],
    "多哥": [0.824782, 8.619543],
    "泰国": [100.992541, 15.870032],
    "塔吉克斯坦": [71.276093, 38.861034],
    "土库曼斯坦": [59.556278, 38.969719],
    "东帝汶": [125.727539, -8.874217],
    "特里尼达和多巴哥": [-61.222503, 10.691803],
    "突尼斯": [9.537499, 33.886917],
    "土耳其": [35.243322, 38.963745],
    "坦桑尼亚联合共和国": [34.888822, -6.369028],
    "乌干达": [32.290275, 1.373333],
    "乌克兰": [31.16558, 48.379433],
    "乌拉圭": [-55.765835, -32.522779],
    "美国": [-95.712891, 37.09024],
    "乌兹别克斯坦": [64.585262, 41.377491],
    "委内瑞拉": [-66.58973, 6.42375],
    "越南": [108.277199, 14.058324],
    "瓦努阿图": [166.959158, -15.376706],
    "西岸": [35.3027226, 31.9465703],
    "也门": [48.516388, 15.552727],
    "南非": [22.937506, -30.559482],
    "赞比亚": [27.849332, -13.133897],
    "津巴布韦": [29.154857, -19.015438]
};
const CHINA = { "北京": [116.46, 39.92], "平谷": [117.1, 40.13], "密云": [116.85, 40.37], "顺义": [116.65, 40.13], "通县": [116.67, 39.92], "怀柔": [116.62, 40.32], "大兴": [116.33, 39.73], "房山": [115.98, 39.72], "延庆": [115.97, 40.47], "昌平": [116.2, 40.22], "上海": [121.48, 31.22], "嘉定": [121.24, 31.4], "宝山": [121.48, 31.41], "川沙": [121.7, 31.19], "南汇": [121.76, 31.05], "奉贤": [121.46, 30.92], "松江": [121.24, 31.0], "金山": [121.16, 30.89], "青浦": [121.1, 31.15], "崇明": [121.4, 31.73], "天津": [117.2, 39.13], "宁河": [117.83, 39.33], "静海": [116.92, 38.93], "蓟县": [117.4, 40.05], "宝坻": [117.3, 39.75], "武清": [117.05, 39.4], "重庆": [106.54, 29.59], "綦江": [106.56, 29.41], "长寿": [106.64, 29.01], "南桐": [107.04, 29.86], "合川": [106.28, 29.26], "潼南": [106.22, 30.03], "铜梁": [105.8, 30.16], "壁山": [106.03, 29.86], "荣昌": [106.21, 29.62], "大足": [105.59, 29.4], "永川": [105.71, 29.75], "万盛": [105.91, 29.38], "河北": [114.48, 38.03], "石家庄": [114.48, 38.03], "唐山": [118.02, 39.63], "行唐": [114.54, 38.42], "灵寿": [114.38, 38.31], "束鹿": [115.18, 37.94], "晋县": [115.03, 38.03], "藁城": [114.84, 38.03], "高邑": [114.58, 37.62], "赵县": [114.78, 37.76], "井陉": [114.13, 38.03], "获鹿": [114.03, 38.08], "新乐": [114.67, 38.33], "正定": [114.56, 38.13], "深泽": [115.2, 38.2], "无极": [114.96, 38.16], "赞皇": [114.35, 37.65], "元氏": [114.5, 37.74], "栾城": [114.64, 38.87], "平山": [114.24, 38.2], "邯郸": [114.47, 36.6], "永年": [114.5, 36.77], "曲周": [114.92, 36.78], "馆陶": [115.4, 36.47], "魏县": [114.94, 36.37], "成安": [114.68, 36.43], "大名": [115.14, 36.28], "涉县": [113.67, 36.57], "鸡泽": [113.85, 36.95], "丘县": [115.18, 36.84], "广平": [114.94, 36.49], "肥乡": [114.8, 36.56], "临漳": [114.62, 36.35], "磁县": [114.37, 36.37], "武安": [114.2, 36.7], "邢台": [114.48, 37.05], "柏乡": [114.68, 37.49], "宁普": [114.9, 37.62], "隆尧": [114.75, 37.35], "临西": [115.5, 36.87], "南官": [115.37, 37.37], "巨鹿": [115.03, 37.22], "任县": [114.68, 37.11], "沙河": [114.52, 36.94], "临城": [114.5, 37.43], "内丘": [114.5, 37.28], "新河": [115.22, 37.53], "清河": [115.67, 37.07], "威县": [115.08, 36.97], "广宗": [115.14, 37.06], "平乡": [115.02, 37.06], "南和": [114.71, 37.0], "保定": [115.48, 38.85], "涞水": [115.71, 39.39], "涿县": [115.98, 39.48], "定兴": [115.78, 39.28], "容城": [115.86, 39.06], "安新": [115.92, 38.92], "蠡县": [115.58, 38.49], "博野": [115.46, 38.46], "定县": [114.02, 38.52], "阜平": [114.18, 38.85], "唐县": [114.97, 38.75], "涞源": [114.67, 39.37], "易县": [115.49, 39.35], "新城": [115.84, 39.34], "雄县": [116.1, 38.98], "徐水": [115.65, 39.02], "高阳": [115.78, 38.68], "安国": [115.3, 38.41], "清苑": [115.47, 38.76], "望都": [115.14, 38.71], "曲阳": [114.68, 38.62], "完县": [115.12, 38.84], "满城": [115.45, 38.95], "张家口": [114.87, 40.82], "康保": [114.6, 41.87], "赤城": [115.82, 40.92], "怀来": [115.54, 40.4], "蔚县": [114.53, 39.83], "宣化": [115.03, 40.63], "张北": [114.7, 41.15], "沽源": [115.68, 41.68], "崇礼": [115.25, 40.98], "涿鹿": [115.2, 40.37], "阳原": [114.15, 40.12], "怀安": [114.38, 40.67], "尚义": [113.95, 41.05], "万全": [114.73, 40.84], "承德": [117.93, 40.97], "围场": [117.72, 41.95], "平泉": [118.68, 41.02], "宽城": [118.47, 40.62], "兴隆": [117.48, 40.42], "滦平": [117.53, 40.95], "隆化": [117.7, 41.32], "青龙": [118.93, 40.43], "丰宁": [116.63, 41.2], "秦皇岛": [119.57, 39.95], "迁西": [118.3, 40.15], "迁安": [118.69, 40.02], "昌黎": [119.15, 39.72], "卢龙": [118.85, 39.89], "滦南": [118.67, 39.49], "玉田": [117.9, 39.9], "唐海": [118.54, 39.31], "遵化": [117.97, 40.2], "抚宁": [119.22, 39.88], "乐亭": [118.9, 39.43], "滦县": [118.73, 39.74], "丰南": [118.1, 39.58], "丰润": [118.13, 39.82], "廊坊": [116.7, 39.53], "安次": [116.69, 39.52], "三河": [117.06, 39.97], "香河": [117.0, 39.76], "霸县": [116.38, 39.12], "固安": [116.29, 39.44], "大城": [116.63, 38.7], "文安": [116.45, 38.87], "永清": [116.48, 39.32], "大厂": [116.98, 39.98], "沧州": [116.83, 38.33], "黄骅": [117.33, 38.4], "盐山": [117.22, 38.07], "吴桥": [116.37, 37.65], "东光": [116.52, 37.89], "肃宁": [115.82, 38.43], "河间": [116.07, 38.45], "泊头": [116.56, 38.08], "交河": [116.27, 38.02], "青县": [116.8, 38.58], "海兴": [117.85, 38.17], "南皮": [116.7, 38.05], "任丘": [116.08, 38.72], "献县": [116.12, 38.2], "孟村": [117.1, 38.06], "衡水": [115.72, 37.72], "饶阳": [115.74, 38.24], "阜城": [116.14, 37.87], "景县": [116.26, 37.69], "枣强": [115.72, 37.52], "深县": [115.56, 38.02], "安平": [115.5, 38.22], "武强": [115.96, 38.03], "武邑": [115.9, 37.81], "故城": [115.96, 37.36], "冀县": [115.56, 37.59], "山西": [112.53, 37.87], "太原": [112.53, 37.87], "阳曲": [112.65, 38.05], "娄烦": [111.78, 38.05], "清徐": [112.33, 37.62], "大同": [113.3, 40.12], "阳泉": [113.57, 37.85], "长治": [113.08, 36.18], "天镇": [114.08, 40.42], "灵丘": [114.2, 39.47], "怀仁": [113.1, 39.82], "山阴": [112.82, 39.52], "平鲁": [112.12, 39.53], "右玉": [112.33, 40.18], "阳高": [113.72, 40.38], "广灵": [113.27, 39.75], "浑源": [113.68, 39.7], "应县": [113.18, 39.58], "朔县": [112.42, 39.32], "左云": [112.67, 40.02], "忻县": [112.7, 38.38], "代县": [112.97, 39.07], "五台": [113.32, 38.72], "静乐": [111.9, 38.37], "保德": [111.09, 38.01], "河曲": [111.17, 39.38], "神池": [112.17, 39.1], "原平": [112.7, 38.73], "繁峙": [113.28, 39.2], "定襄": [112.95, 38.5], "岢岚": [111.58, 38.7], "五寨": [111.82, 38.93], "偏关": [111.47, 39.45], "宁武": [112.28, 39.0], "榆次": [112.72, 37.68], "孟县": [112.77, 34.92], "昔阳": [113.68, 37.62], "左权": [113.35, 37.07], "太谷": [112.53, 37.42], "平遥": [112.18, 37.2], "灵石": [111.77, 36.83], "寿阳": [113.17, 37.88], "平定": [113.62, 37.79], "和顺": [113.55, 37.33], "榆社": [112.97, 37.08], "祁县": [112.33, 37.36], "介休": [111.88, 37.03], "离石": [111.13, 37.53], "兴县": [111.22, 38.47], "方由": [111.24, 37.86], "岚县": [111.62, 38.28], "交城": [112.14, 37.55], "文水": [112.02, 37.42], "汾阳": [111.75, 37.27], "孝义": [111.8, 37.12], "交口": [111.2, 36.97], "石楼": [110.83, 37.0], "中阳": [111.17, 37.37], "临县": [110.95, 37.95], "柳林": [110.85, 37.45], "襄垣": [113.02, 36.55], "黎城": [113.4, 36.56], "壶关": [113.23, 35.11], "高平": [112.88, 35.48], "阳城": [112.38, 35.84], "长子": [112.87, 36.13], "沁源": [112.32, 36.5], "潞城": [113.22, 36.33], "武乡": [112.83, 36.83], "平顺": [113.43, 36.19], "陵川": [113.27, 35.78], "晋城": [112.83, 35.52], "沁水": [112.15, 35.67], "屯留": [112.87, 36.32], "沁县": [112.68, 36.75], "临汾": [111.5, 36.08], "汾西": [111.53, 36.63], "安泽": [112.2, 36.15], "古县": [111.9, 36.29], "翼城": [111.68, 35.73], "曲沃": [111.33, 35.63], "吉县": [110.65, 36.12], "大宁": [110.72, 36.47], "侯马": [111.45, 35.03], "永和": [110.64, 36.62], "洪洞": [111.68, 36.25], "霍县": [111.72, 36.57], "浮山": [111.83, 35.97], "襄汾": [111.43, 35.86], "乡宁": [110.8, 35.97], "蒲县": [111.07, 36.42], "运城": [110.97, 35.03], "闻喜": [111.2, 35.37], "垣曲": [111.63, 35.3], "芮城": [110.68, 34.71], "临猗": [110.78, 35.15], "新绛": [111.22, 35.62], "河津": [110.7, 35.58], "夏县": [111.22, 35.12], "绛县": [111.58, 35.48], "平陆": [111.2, 34.12], "永济": [110.42, 34.88], "万荣": [110.83, 110.83], "稷山": [110.97, 35.6], "辽宁": [123.38, 41.8], "沈阳": [123.38, 41.8], "新民": [122.83, 42.0], "辽中": [122.7, 41.52], "大连": [121.62, 38.92], "金县": [121.7, 39.13], "复县": [121.97, 39.63], "新金": [121.95, 39.55], "庄河": [22.97, 39.7], "长海": [122.58, 39.28], "鞍山": [122.85, 41.12], "海城": [122.75, 40.85], "台安": [122.4, 41.4], "抚顺": [123.97, 41.97], "新宾": [125.02, 41.72], "清原": [124.9, 42.13], "本溪": [123.73, 41.3], "垣仁": [125.33, 41.28], "锦州": [121.15, 41.13], "锦县": [121.35, 41.17], "义县": [121.22, 41.55], "黑山": [122.12, 41.7], "北镇": [121.8, 41.6], "锦西": [120.83, 40.77], "兴城": [120.68, 40.63], "绥中": [120.32, 40.35], "丹东": [124.37, 40.13], "东沟": [124.13, 39.97], "岫岩": [123.25, 40.3], "凤城": [124.05, 40.47], "宽甸": [124.77, 40.75], "阜新": [121.65, 42.0], "彰武": [122.52, 42.42], "营口": [122.18, 40.65], "盖县": [122.37, 40.42], "盘山": [122.03, 41.02], "大洼": [122.06, 41.0], "辽阳": [123.17, 41.28], "灯塔": [123.34, 41.43], "铁岭": [123.85, 42.32], "开原": [124.03, 42.53], "昌图": [124.13, 42.8], "铁法": [123.5, 42.48], "康平": [123.33, 42.75], "法库": [123.37, 42.52], "西丰": [124.7, 42.77], "朝阳": [120.42, 41.58], "建昌": [119.78, 40.82], "北票": [120.75, 41.82], "凌源": [119.37, 41.27], "建平": [119.63, 41.38], "吉林": [126.57, 43.87], "长春": [125.35, 43.88], "农安": [125.15, 44.45], "德惠": [125.68, 44.52], "榆树": [126.55, 44.83], "九台": [126.83, 44.15], "双阳": [125.68, 43.53], "永吉": [126.57, 43.87], "舒兰": [126.97, 44.4], "蛟河": [127.33, 43.75], "桦甸": [126.72, 42.97], "磐石": [126.03, 42.93], "延吉": [129.52, 42.93], "汪清": [129.75, 43.32], "珲春": [130.35, 42.85], "图们": [129.83, 42.98], "和龙": [129.0, 42.52], "安图": [128.3, 42.58], "敦化": [128.18, 43.35], "通化": [125.92, 41.49], "柳河": [125.7, 40.88], "海龙": [125.65, 42.53], "辉南": [126.03, 42.68], "靖宇": [126.8, 42.38], "浑江": [126.4, 41.97], "抚松": [127.27, 42.33], "集安": [126.17, 41.15], "长白": [128.17, 41.43], "四平": [124.37, 43.17], "梨树": [124.33, 43.32], "怀德": [124.82, 43.5], "伊通": [125.32, 43.33], "辽源": [125.15, 42.97], "东丰": [125.5, 42.68], "双辽": [123.5, 43.52], "白城": [122.82, 45.63], "大安": [124.18, 45.5], "扶余": [124.82, 45.2], "乾安": [124.02, 45.0], "长岭": [123.97, 44.3], "通榆": [123.13, 44.82], "洮安": [122.75, 45.35], "黑龙江": [126.63, 45.75], "哈尔滨": [126.63, 45.75], "齐齐哈尔": [123.97, 47.33], "鹤岗": [130.3, 47.33], "双鸭山": [131.17, 46.65], "鸡四": [130.97, 45.3], "大庆": [125.03, 46.58], "伊春": [128.92, 47.73], "嘉荫": [130.0, 48.93], "铁力": [128.08, 47.98], "绥化": [127.0, 46.63], "绥棱": [127.12, 47.22], "海伦": [126.97, 47.47], "庆安": [127.5, 46.87], "兰西": [126.3, 46.28], "肇东": [125.98, 46.07], "肇州": [125.25, 45.72], "肇源": [125.07, 45.53], "安达": [125.33, 46.42], "明水": [125.88, 47.18], "青岗": [126.13, 46.68], "望奎": [126.5, 46.83], "黑河": [127.53, 50.22], "爱辉": [127.53, 50.22], "德都": [126.17, 48.5], "通北": [126.8, 49.76], "北安": [126.5, 48.22], "孙吴": [127.5, 49.22], "逊克": [128.42, 49.57], "嫩江": [125.2, 49.17], "佳木斯": [130.35, 46.83], "桦川": [130.68, 47.02], "萝北": [130.83, 47.58], "绥滨": [131.83, 47.3], "富锦": [132.02, 47.23], "同江": [132.5, 47.67], "抚远": [134.15, 48.33], "饶河": [134.0, 46.78],
    "七台河": [130.83, 45.82], "宝清": [132.17, 46.33], "集贤": [131.13, 46.7], "勃利": [130.53, 45.75], "桦南": [130.53, 46.25], "依兰": [129.55, 46.33], "汤源": [129.92, 46.73], "牡丹江": [129.58, 44.6], "林口": [130.23, 45.3], "鸡东": [131.04, 45.27], "密山": [131.85, 45.53], "虎林": [133.97, 45.75], "绥芬河": [131.17, 44.38], "东宁": [131.12, 44.07], "穆棱": [130.5, 44.9], "宁安": [129.47, 44.35], "海林": [129.35, 44.57], "阿城": [126.95, 45.52], "呼兰": [126.58, 46.0], "巴彦": [127.38, 46.08], "宾县": [127.48, 45.75], "木兰": [128.03, 45.95], "通河": [128.7, 45.98], "方正": [128.8, 45.83], "延寿": [128.35, 45.47], "尚志": [127.95, 45.22], "五常": [127.17, 44.93], "双城": [126.32, 45.53], "富裕": [124.4, 47.8], "讷河": [124.85, 48.48], "克山": [125.87, 48.03], "克东": [126.22, 48.03], "拜泉": [126.07, 47.62], "依安": [125.3, 47.92], "林甸": [124.87, 47.18], "泰来": [123.45, 46.4], "龙江": [123.18, 47.35], "甘南": [123.48, 47.9], "杜尔伯特": [124.44, 46.86], "加格达奇": [124.07, 50.42], "呼玛": [126.6, 51.72], "塔河": [124.7, 52.32], "漠河": [122.37, 53.48], "浙江": [120.19, 30.26], "杭州": [120.19, 30.26], "余杭": [120.3, 30.43], "富阳": [119.95, 30.07], "建德": [119.27, 29.49], "临安": [119.72, 30.23], "萧山": [120.25, 30.16], "桐庐": [119.64, 29.8], "淳安": [119.05, 29.61], "宁波": [121.56, 29.86], "镇海": [121.72, 29.96], "温州": [120.65, 28.01], "瓯海": [120.65, 28.01], "永喜": [120.68, 28.16], "洞头": [121.12, 27.84], "平阳": [120.55, 27.68], "泰顺": [119.7, 27.57], "乐清": [120.94, 28.14], "瑞安": [120.62, 27.8], "文成": [120.08, 27.08], "苍南": [120.36, 27.53], "湖州": [120.1, 30.86], "平湖": [121.02, 30.7], "桐乡": [120.54, 30.64], "安吉": [119.68, 30.68], "嘉善": [120.92, 30.84], "嘉兴": [120.76, 30.77], "海盐": [120.92, 30.53], "海宁": [120.69, 30.53], "德清": [120.08, 30.54], "长兴": [119.91, 30.01], "定海": [122.11, 30.03], "岱山": [122.2, 30.26], "嵊四": [122.45, 30.72], "普陀": [122.3, 29.97], "鄞县": [121.56, 29.86], "象山": [121.8, 29.48], "奉化": [121.41, 29.66], "慈溪": [121.23, 30.18], "宁海": [121.42, 29.3], "余姚": [121.16, 30.04], "绍兴": [120.58, 30.01], "新昌": [120.89, 29.49], "诸暨": [120.23, 29.71], "上虞": [120.87, 30.03], "嵊县": [120.81, 29.6], "椒江": [121.44, 28.67], "临海": [121.13, 28.8], "三门": [121.38, 29.11], "温岭": [121.36, 28.36], "仙居": [120.73, 28.85], "天台": [121.03, 29.15], "黄岩": [121.27, 28.64], "玉环": [121.23, 28.14], "丽水": [119.92, 28.45], "青田": [120.28, 28.45], "庆无": [119.06, 27.61], "遂昌": [119.25, 28.59], "缙云": [120.6, 28.66], "云和": [119.56, 28.12], "龙泉": [119.13, 28.08], "松阳": [119.48, 28.46], "金华": [119.64, 29.12], "浦江": [119.88, 29.46], "东阳": [120.23, 29.27], "武义": [119.81, 28.9], "江山": [118.61, 28.74], "开化": [118.39, 29.15], "衢州": [118.88, 28.97], "兰溪": [119.48, 29.19], "义乌": [120.06, 29.32], "永康": [120.02, 28.92], "常山": [118.5, 28.9], "福建": [119.3, 26.08], "福州": [119.3, 26.08], "闽侯": [119.14, 26.16], "厦门": [118.1, 24.46], "同安": [118.15, 24.74], "南平": [118.11, 27.34], "建瓯": [118.32, 27.05], "浦城": [118.55, 27.92], "邵武": [117.48, 27.34], "顺昌": [117.8, 26.8], "崇安": [118.02, 27.76], "光泽": [117.34, 27.54], "松溪": [118.77, 27.53], "政和": [118.85, 27.38], "宁德": [119.52, 26.65], "福安": [119.65, 27.09], "连江": [119.53, 26.2], "福鼎": [120.2, 27.34], "霞浦": [120.0, 26.89], "吉田": [118.74, 26.59], "罗源": [119.55, 26.49], "寿宁": [119.5, 27.47], "周宁": [119.36, 27.12], "屏南": [118.98, 26.92], "柘荣": [119.89, 27.25], "莆田": [119.0, 25.44], "仙游": [118.7, 25.37], "福清": [119.39, 25.73], "长乐": [119.52, 25.96], "永泰": [118.95, 25.88], "平潭": [119.78, 25.51], "闽清": [118.86, 26.21], "泉州": [118.58, 24.93], "晋江": [118.57, 24.82], "南安": [118.39, 24.96], "惠安": [118.78, 25.04], "安溪": [118.18, 25.07], "永春": [118.3, 25.34], "德化": [118.24, 25.5], "金门": [118.34, 24.43], "漳州": [117.35, 24.52], "龙海": [117.79, 24.44], "漳浦": [117.61, 24.12], "诏安": [117.16, 23.73], "平和": [117.3, 24.38], "云霄": [117.34, 23.99], "南靖": [117.35, 24.51], "长泰": [117.75, 24.62], "东山": [117.4, 23.72], "华安": [117.53, 25.0], "龙岩": [117.01, 25.12], "上杭": [116.41, 25.43], "永定": [116.81, 24.76], "长汀": [116.37, 25.85], "武平": [116.1, 25.11], "连城": [116.75, 25.72], "漳平": [117.4, 25.3], "三明": [117.61, 26.23], "龙溪": [118.17, 26.18], "宁化": [116.64, 26.26], "大田": [117.83, 25.69], "永安": [117.37, 25.97], "沙县": [117.77, 26.41], "将乐": [117.45, 26.73], "清流": [116.81, 26.12], "建宁": [116.82, 26.85], "泰宁": [117.15, 26.92], "明溪": [117.18, 26.36], "山东": [106.54, 29.59], "济南": [117.0, 36.65], "历城": [117.07, 36.69], "长清": [116.73, 36.55], "章丘": [117.53, 36.72], "青岛": [120.33, 36.07], "崂山": [120.42, 36.15], "胶南": [119.97, 35.88], "即墨": [120.45, 36.38], "胶县": [120.0, 36.28], "淄博": [118.05, 36.78], "枣庄": [117.57, 34.86], "滕县": [117.17, 35.09], "东营": [118.49, 37.46], "垦利": [118.54, 37.59], "利津": [118.25, 37.49], "德州": [116.29, 37.45], "宁津": [116.8, 37.64], "乐陵": [117.22, 37.74], "商河": [117.15, 37.31], "济阳": [117.2, 36.97], "禹城": [116.66, 36.95], "夏津": [116.0, 36.95], "陵县": [116.58, 37.34], "庆云": [117.37, 37.37], "临邑": [116.86, 37.2], "齐河": [116.76, 36.79], "平原": [116.44, 37.16], "武城": [116.08, 37.2], "滨州": [118.03, 37.36], "滨县": [117.97, 37.47], "广饶": [118.41, 37.04], "桓台": [118.12, 36.95],
    "邹平": [117.75, 36.89], "阳信": [117.58, 37.65], "沾化": [118.14, 37.7], "博兴": [118.12, 37.12], "高青": [117.66, 37.18], "惠民": [117.51, 17.49], "无棣": [117.58, 37.73], "潍坊": [119.1, 36.62], "潍县": [119.22, 36.77], "平度": [119.97, 36.77], "诸城": [119.42, 35.99], "安丘": [119.2, 36.42], "临朐": [118.53, 36.5], "寿光": [118.73, 36.86], "昌邑": [119.41, 36.86], "高密": [119.75, 36.38], "五莲": [119.2, 35.74], "昌乐": [118.83, 36.69], "高都": [118.47, 36.69], "烟台": [121.39, 37.52], "牟平": [121.59, 37.38], "文登": [122.05, 37.2], "海阳": [121.17, 36.76], "莱阳": [120.71, 36.97], "栖霞": [120.83, 37.28], "掖县": [119.93, 37.18], "长岛": [120.73, 37.91], "威海": [122.1, 37.5], "福山": [121.27, 37.49], "荣成": [122.41, 37.16], "乳山": [121.52, 36.89], "莱西": [120.53, 36.86], "招远": [120.38, 37.35], "黄县": [120.51, 37.64], "蓬莱": [120.75, 37.8], "临沂": [118.35, 35.05], "沂水": [118.64, 35.78], "日照": [119.46, 35.42], "临沭": [118.73, 34.89], "仓山": [118.03, 34.84], "平邑": [117.63, 35.49], "沂源": [118.17, 36.18], "沂南": [118.47, 35.54], "营县": [118.83, 35.57], "莒南": [118.83, 35.17], "郯城": [118.35, 34.61], "费县": [117.97, 35.26], "蒙阴": [117.95, 35.7], "泰安": [117.13, 36.18], "莱芜": [117.67, 36.19], "肥城": [116.76, 36.24], "平阴": [116.46, 36.29], "新汶": [117.67, 35.86], "新泰": [117.76, 35.91], "宁阳": [116.8, 35.76], "东平": [116.3, 35.91], "济宁": [116.59, 35.38], "兖州": [116.83, 35.54], "泗水": [117.27, 35.65], "鱼台": [116.65, 35.0], "嘉祥": [116.34, 35.41], "汶上": [116.49, 35.71], "曲阜": [116.98, 35.59], "邹县": [116.97, 35.39], "微山": [117.12, 34.8], "金乡": [116.32, 35.07], "荷泽": [115.43, 35.24], "郓城": [115.94, 35.59], "巨野": [116.08, 35.38], "单县": [116.07, 34.82], "曹县": [115.53, 34.83], "鄄城": [115.5, 35.57], "梁山": [116.1, 35.8], "成武": [115.88, 34.97], "定陶": [115.57, 35.07], "东明": [115.08, 35.31], "聊城": [115.97, 36.45], "高唐": [116.23, 36.86], "东阿": [116.23, 36.32], "莘县": [115.67, 36.24], "临清": [115.72, 36.68], "茌平": [116.27, 36.58], "阳谷": [115.78, 36.11],
    "冠县": [115.45, 35.47], "河南": [101.62, 34.75], "郑州": [113.65, 34.76], "荥阳": [113.35, 34.79], "开封": [114.35, 34.79], "平顶山": [113.29, 33.75], "洛阳": [112.44, 34.7], "焦作": [113.21, 35.24], "鹤壁": [114.17, 35.9], "杞县": [114.77, 34.56], "尉氏": [114.17, 34.41], "新郑": [113.71, 34.4], "登封": [113.02, 34.46], "通许": [114.46, 34.48], "中牟": [114.0, 34.73], "密县": [113.35, 34.51], "巩县": [112.96, 34.76], "兰考": [114.81, 34.69], "新乡": [113.85, 35.31], "汲县": [114.05, 35.44], "封丘": [114.04, 35.03], "获嘉": [113.63, 35.27], "温贺": [113.06, 34.94], "济源": [112.57, 35.08], "博爱": [113.05, 35.16], "辉县": [113.77, 35.46], "延津": [114.19, 35.14], "原阳": [113.96, 35.05], "武陟": [113.38, 35.1], "沁阳": [112.92, 35.08], "修武": [113.42, 35.24], "安阳": [114.35, 36.1], "南乐": [115.21, 36.08], "范县": [115.46, 35.9], "台前": [115.83, 36.0], "滑县": [114.52, 35.57], "浚县": [114.54, 35.67], "淇县": [114.17, 35.6], "内黄": [114.88, 35.95], "清丰": [115.1, 35.89], "濮阳": [114.98, 35.71], "长垣": [114.67, 35.19], "汤阴": [114.35, 35.92], "林县": [113.81, 36.06], "商丘": [115.65, 34.44], "夏邑": [116.13, 34.22], "柘城": [115.29, 34.08], "睢县": [115.04, 34.46], "虞城": [115.87, 34.4], "永城": [116.37, 33.94], "宁陵": [115.31, 34.44], "民权": [115.13, 34.65], "周口": [114.63, 33.63], "商水": [114.59, 33.54], "扶沟": [114.38, 34.05], "鹿邑": [115.48, 33.86], "淮阳": [114.88, 33.74], "沈丘": [115.06, 33.41], "西华": [114.5, 33.79], "太康": [114.85, 34.06], "郸城": [115.17, 33.63], "项城": [114.9, 33.44], "许昌": [113.81, 34.02], "鄢县": [114.17, 34.11], "郾城": [113.98, 33.6], "襄城": [113.46, 33.86], "鲁山": [112.88, 33.74], "郏县": [113.19, 33.98], "漯河": [114.02, 33.56], "长葛": [113.77, 34.22], "临颖": [113.94, 33.81], "舞阳": [113.58, 33.44], "叶县": [113.35, 33.62], "宝丰": [113.04, 33.86], "禹县": [113.47, 34.16], "驻马店": [114.02, 32.98], "确山": [114.02, 32.83], "西平": [114.0, 33.38], "汝南": [114.35, 33.0], "新蔡": [114.97, 32.75], "泌阳": [113.31, 32.72], "遂平": [113.98, 33.15], "上蔡": [114.26, 33.25], "平舆": [114.62, 32.97], "正阳": [114.38, 32.62], "信阳": [114.08, 32.13], "息县": [114.72, 32.35], "固始": [115.68, 32.17], "潢川": [115.04, 32.13], "新县": [114.83, 31.62], "罗山": [114.53, 32.21], "淮滨": [115.41, 32.44], "商城": [115.42, 31.81], "光山": [114.91, 32.02], "南阳": [112.53, 33.01], "方城": [112.98, 33.25], "唐河": [112.83, 32.7], "新野": [112.36, 32.51], "邓县": [112.08, 32.68], "淅川": [111.47, 33.14], "南召": [112.4, 33.49], "社旗": [112.92, 33.05], "桐柏": [113.4, 32.37], "镇平": [112.23, 33.03], "内乡": [111.83, 33.05], "西峡": [111.5, 33.31], "三门峡": [111.19, 34.76], "孟津": [112.42, 34.84], "临汝": [112.83, 34.17], "汝阳": [112.46, 34.16], "嵩县": [112.07, 34.14], "栾川": [111.6, 33.81], "灵宝": [110.85, 34.52], "渑池": [111.75, 34.76], "义马": [111.92, 34.73], "偃师": [112.77, 34.73], "伊川": [112.42, 34.43], "宜阳": [112.15, 34.51], "洛宁": [111.65, 34.39], "卢氏": [111.03, 34.06], "陕县": [111.19, 34.76], "新安": [112.14, 34.75], "湖北": [114.31, 30.52], "武汉": [114.31, 30.52], "武昌": [114.33, 30.35], "汉阳": [114.02, 30.57], "黄石": [115.09, 30.2], "十堰": [110.79, 32.65], "沙市": [112.24, 30.32], "宜昌": [111.3, 30.7], "襄樊": [112.14, 30.02], "孝感": [113.91, 31.92], "黄陂": [114.36, 30.88], "汉川": [113.59, 30.63], "云梦": [113.73, 31.02], "应山": [113.81, 31.62], "大悟": [114.09, 31.56], "应城": [113.6, 30.94], "安陆": [113.69, 31.25], "鄂城": [114.87, 30.38], "黄冈": [114.87, 30.44], "新洲": [114.8, 31.84], "红安": [114.61, 31.29], "麻城": [115.0, 31.17], "罗川": [115.37, 30.79], "浠水": [115.22, 30.46], "蕲春": [115.3, 30.24], "黄梅": [115.93, 30.09], "广济": [115.56, 29.85], "英山": [115.57, 30.75], "咸宁": [114.28, 29.87], "阳新": [115.22, 29.83], "通山": [114.52, 29.6], "通城": [113.8, 29.23], "嘉鱼": [113.91, 29.97], "崇阳": [114.04, 29.54], "蒲圻": [113.85, 29.71], "荆门": [112.19, 31.02], "江陵": [112.18, 30.35], "钟祥": [112.58, 31.17], "京山": [113.11, 31.03], "监利": [112.9, 29.83], "石首": [112.41, 29.73], "湖南": [113.0, 28.21], "长沙": [113.0, 28.21], "望城": [112.8, 28.37], "株洲": [113.16, 27.83], "湘潭": [112.91, 27.87], "衡阳": [112.39, 26.98], "邵阳": [111.5, 27.22], "岳阳": [113.09, 29.37], "临湘": [113.42, 29.48], "平江": [113.56, 29.71], "泪罗": [113.05, 28.8], "湘阴": [112.87, 28.68], "华容": [112.55, 29.52], "浏阳": [113.63, 28.16], "醴陵": [113.5, 27.67], "攸县": [113.32, 27.01], "茶陵": [113.54, 26.79], "酃县": [113.77, 26.49], "湘乡": [112.5, 27.75], "郴州": [113.0, 25.79], "郴县": [113.0, 25.79], "安仁": [113.27, 26.71], "永兴": [113.11, 26.13], "资兴": [113.39, 25.95], "桂东": [113.91, 25.08], "汝城": [113.68, 25.54], "宜章": [113.96, 25.41], "临武": [112.55, 25.27], "嘉禾": [112.35, 25.56], "桂阳": [112.72, 25.73], "来阳": [112.84, 26.41], "衡南": [112.61, 26.89], "衡山": [112.86, 27.25], "衡东": [112.95, 27.1], "常宁": [112.39, 26.38], "祁阳": [111.85, 26.59], "祁东": [112.14, 26.8], "永州": [111.63, 26.22], "零陵": [111.63, 26.22], "新田": [112.21, 25.91], "宁远": [111.95, 25.6], "蓝山": [112.16, 25.37], "双牌": [111.64, 25.96], "江永": [111.33, 25.41], "道县": [111.57, 25.52], "东安": [111.28, 26.41], "江华": [111.79, 24.97], "新宁": [110.84, 26.44], "武冈": [110.61, 26.73], "隆回": [111.04, 27.13], "绥宁": [110.14, 25.59], "洞口": [110.57, 27.06], "城步": [110.3, 26.37], "娄底": [111.96, 27.71], "涟源": [111.66, 27.68], "新邵": [111.46, 27.33], "双峰": [112.18, 27.44], "冷水江": [111.41, 27.68], "邵东": [111.73, 27.25], "新化": [111.29, 27.73], "怀化": [109.95, 27.52], "黔阳": [110.14, 27.33], "辰溪": [110.18, 28.02], "沅陵": [110.39, 28.46], "溆浦": [110.57, 27.92], "会同": [109.71, 26.86], "靖县": [109.68, 26.57], "洪江": [110.38, 21.2], "芷江": [109.78, 27.44], "麻阳": [109.79, 27.87], "通道": [109.77, 26.16],
    "新晃": [109.16, 27.37], "吉首": [109.71, 28.3], "永顺": [109.84, 29.0], "桑植": [110.16, 29.38], "大庸": [110.48, 29.13], "古丈": [109.91, 28.62], "泸溪": [110.73, 28.29], "凤凰": [109.43, 27.92], "花垣": [109.46, 28.59], "保靖": [109.64, 28.7], "龙山": [109.42, 29.64], "常德": [111.69, 29.05], "临澧": [111.64, 29.44], "澧县": [111.75, 29.65], "安乡": [112.16, 29.41], "津市": [111.87, 29.64], "汉寿": [111.97, 28.9], "桃源": [111.47, 28.9], "慈利": [111.09, 29.41], "石门": [111.35, 29.59], "益阳": [112.33, 28.6], "南县": [112.39, 29.37], "沅江": [112.36, 28.83], "宁乡": [112.55, 28.27], "安化": [111.2, 28.38], "桃江": [112.11, 28.51], "广东": [113.23, 23.16], "广州": [113.23, 23.16], "花县": [113.19, 23.4], "新十": [114.2, 24.09], "增城": [113.81, 23.13], "从化": [113.55, 23.57], "龙门": [114.25, 23.75], "番禺": [113.36, 22.95], "海口": [110.35, 20.02], "汕头": [116.69, 23.39], "茂名": [110.88, 21.68], "佛山": [113.11, 23.05], "江门": [113.06, 22.61], "深圳": [114.07, 22.62], "宝安": [113.85, 22.58], "珠海": [113.52, 22.3], "韶关": [113.62, 24.84], "曲江": [113.58, 24.68], "乐昌": [113.35, 25.14], "仁化": [113.73, 25.11], "南雄": [114.33, 25.14], "始兴": [114.08, 24.78], "翁源": [114.13, 24.36], "佛岗": [113.52, 23.86], "英德": [113.38, 24.17], "清远": [113.01, 23.7], "阳山": [112.65, 24.48], "连县": [112.4, 24.77], "连山": [112.07, 24.59], "连南": [112.28, 24.77], "惠州": [114.4, 23.09], "惠阳": [114.4, 23.09], "博罗": [114.28, 23.18], "河源": [114.68, 23.73], "连平": [114.48, 24.39], "和平": [114.89, 24.45], "龙川": [115.25, 24.09], "紫金": [115.18, 23.64], "惠东": [114.7, 22.97], "东莞": [113.75, 23.04], "梅州": [116.1, 24.55], "梅县": [116.1, 24.55], "平远": [117.9, 24.59], "蕉岭": [116.18, 24.66], "大埔": [116.7, 24.34], "丰顺": [116.18, 23.78], "五华": [115.75, 23.93], "兴宁": [115.75, 24.15], "潮州": [116.63, 23.68], "澄海": [116.8, 23.48], "潮安": [116.63, 23.68], "饶平": [117.01, 23.7], "南澳": [117.03, 23.44], "潮阳": [116.61, 23.27], "惠来": [116.29, 23.07], "陆丰": [117.64, 22.95], "海丰": [117.33, 22.98], "普宁": [116.17, 23.29], "揭西": [115.82, 23.45], "揭阳": [116.35, 23.55], "南海": [113.11, 23.05], "三水": [112.89, 23.18], "顺德": [113.24, 22.84], "中山": [113.38, 22.52], "斗门": [113.25, 22.2], "新会": [113.02, 22.52], "鹤山": [112.94, 22.76], "开平": [112.68, 22.36], "台山": [112.78, 22.27], "恩平": [112.29, 22.21], "高明": [112.76, 21.71], "廉江": [110.27, 21.63], "化州": [110.59, 21.64], "高州": [110.83, 21.95], "信宜": [110.9, 22.36], "阳春": [111.78, 22.16], "阳江": [111.95, 21.85], "电白": [110.99, 21.52], "吴川": [110.78, 21.43], "徐闻": [110.17, 20.34], "海康": [110.07, 20.91], "遂溪": [110.24, 21.39], "肇庆": [112.44, 23.05], "高要": [112.44, 23.05], "怀集": [112.18, 23.93], "广宁": [112.43, 23.14], "四会": [112.68, 23.36], "新兴": [112.2, 22.68], "云浮": [112.02, 22.93], "罗定": [111.56, 22.77], "郁南": [111.51, 23.23], "德庆": [111.75, 23.15], "封开": [111.48, 23.45], "海南": [110.35, 20.02], "琼山": [110.33, 19.98], "文昌": [110.72, 19.61], "定安": [110.31, 19.68], "琼海": [110.46, 19.25], "万宁": [110.39, 18.8], "屯昌": [110.1, 19.36], "澄迈": [110.0, 19.75], "儋县": [109.57, 19.52], "临高": [109.69, 19.91], "保亭": [109.7, 18.64], "白沙": [109.44, 19.23], "琼中": [109.83, 19.05], "陵水": [110.02, 18.48], "崖县": [109.5, 18.25], "乐东": [109.17, 18.73], "东方": [108.64, 19.09], "昌江": [109.03, 19.25], "四川": [104.06, 30.67], "成都": [104.06, 30.67], "金堂": [104.32, 30.88], "双流": [104.94, 30.57], "蒲江": [103.29, 30.2], "郫县": [103.86, 30.8], "新都": [104.13, 30.82], "来易": [102.15, 26.9], "盐边": [101.56, 26.9], "温江": [103.81, 30.97], "灌县": [103.61, 31.04], "彭县": [103.94, 30.99], "什邡": [104.16, 31.13], "广汉": [104.25, 30.99], "新津": [103.78, 30.42], "邛崃": [103.47, 30.42], "大邑": [103.53, 30.58], "崇庆": [103.69, 30.63], "绵阳": [104.73, 31.48], "江油": [104.7, 31.8], "青川": [105.21, 32.59], "平武": [104.52, 32.42], "光元": [105.86, 32.44], "旺苍": [106.33, 32.25], "剑阁": [105.45, 32.03], "梓潼": [105.16, 31.64], "三台": [105.06, 31.1], "盐亭": [105.35, 31.23], "射洪": [105.31, 30.9], "遂宁": [105.58, 30.52], "蓬溪": [105.74, 30.78], "中江": [104.68, 31.06], "德阳": [104.37, 31.13], "绵竹": [104.19, 31.32], "安县": [104.41, 31.64], "北川": [104.44, 31.89], "内江": [105.04, 29.59], "乐至": [105.02, 30.3], "安岳": [105.3, 30.12], "威远": [104.7, 29.57], "资中": [104.85, 29.81], "资阳": [104.6, 30.19], "简阳": [104.53, 30.38], "隆昌": [105.25, 29.64], "宜宾": [104.56, 29.77], "富顺": [104.97, 29.24], "南溪": [104.96, 28.87], "江安": [105.06, 28.71], "纳溪": [105.38, 28.77], "泸县": [105.46, 28.96], "合江": [105.78, 28.79], "泸州": [105.39, 28.91], "古蔺": [105.79, 28.03], "叙水": [105.44, 28.19], "长宁": [104.91, 28.6], "兴文": [105.06, 28.36], "琪县": [104.81, 28.38], "高县": [104.52, 28.4], "筠连": [104.53, 28.16], "屏由": [104.15, 28.68], "乐由": [103.73, 29.59], "夹江": [103.59, 29.75], "洪雅": [103.38, 29.95], "丹棱": [103.53, 30.04], "青神": [103.81, 29.86], "眉由": [103.81, 30.05], "彭由": [103.83, 30.22], "井研": [104.06, 29.67], "仁寿": [104.09, 30.0], "犍为": [103.93, 29.21], "沐川": [103.98, 28.96], "娥眉": [103.5, 29.62], "马边": [103.53, 28.87], "峨边": [103.25, 29.23], "金口": [103.13, 29.24], "涪陵": [107.36, 29.7], "垫江": [107.34, 30.36], "丰都": [107.7, 29.89], "石柱": [108.13, 29.98], "秀山": [108.97, 28.47], "西阳": [108.75, 28.85], "黔江": [108.81, 29.53], "彭水": [108.19, 29.29], "武隆": [108.72, 29.29], "南川": [107.13, 29.15], "万县": [108.35, 30.83], "开县": [108.39, 31.23], "城口": [108.67, 31.98], "巫溪": [109.6, 31.42], "巫山": [109.86, 31.1], "奉节": [109.52, 31.06], "云阳": [108.89, 30.99], "忠县": [108.03, 30.33], "梁平": [107.78, 30.66], "南允": [106.06, 30.8], "苍溪": [105.96, 31.75], "阆中": [105.97, 31.75], "仪陇": [106.38, 31.52], "南部": [106.03, 31.34], "西允": [105.84, 31.01], "营山": [106.57, 31.07], "蓬安": [106.44, 31.04], "广安": [106.61, 30.48], "岳池": [106.43, 30.55], "武胜": [106.3, 30.38], "华云": [106.74, 30.41], "达县": [107.49, 31.23], "万源": [108.06, 32.07], "宜汉": [107.71, 31.39], "开江": [107.87, 31.1], "邻水": [106.91, 30.36], "大竹": [107.21, 30.75], "渠县": [106.94, 30.85], "南江": [106.83, 32.36], "巴中": [106.73, 31.86], "平昌": [107.11, 31.59], "通江": [108.24, 31.95], "百沙": [108.18, 32.0], "雅安": [102.97, 29.97], "芦山": [102.91, 30.17], "名山": [103.06, 30.09], "荣经": [102.81, 29.79], "汉源": [102.66, 29.4], "石棉": [102.38, 29.21], "天全": [102.78, 30.09], "宝兴": [102.84, 30.36], "马尔康": [102.22, 31.92], "红原": [102.55, 31.79], "阿坝": [101.72, 31.93], "若尔盖": [102.94, 33.62], "黑水": [102.95, 32.06], "松潘": [103.61, 32.64], "南坪": [104.19, 33.23], "汶川": [103.61, 31.46], "理县": [103.16, 31.42], "小金": [102.34, 30.97], "金川 ": [102.03, 31.48], "壤塘": [100.97, 32.3], "茂汶": [103.89, 31.67],
    "康定": [101.95, 30.04], "炉霍": [100.65, 31.38], "甘孜": [99.96, 31.64], "新龙": [100.28, 30.96], "白玉": [98.83, 32.23], "德格": [98.57, 31.81], "石渠": [98.06, 33.01], "色达": [100.35, 32.3], "泸定": [102.25, 29.92], "丹巴": [101.87, 30.85], "九龙": [101.53, 29.01], "雅江": [101.0, 30.03], "道孚": [101.14, 30.99], "理塘": [100.28, 30.03], "乡城": [99.78, 28.93], "稻城": [100.31, 29.04], "巴塘": [99.0, 30.0], "得荣": [99.25, 28.71], "西昌": [102.29, 27.92], "昭觉": [102.83, 28.03], "甘洛": [102.74, 28.96], "雷波": [103.62, 28.21], "宁南": [102.76, 27.07], "会东": [102.55, 26.74], "会理": [102.21, 26.67], "德昌": [102.15, 27.4], "美姑": [103.14, 28.33], "金阳": [103.22, 27.73], "布拖": [102.8, 27.7], "普格": [102.52, 27.38], "喜德": [102.42, 28.33], "越西": [102.49, 28.66], "盐源": [101.51, 27.42], "冕宁": [102.15, 28.58], "木里": [101.25, 27.9], "贵州": [106.71, 26.57], "贵阳": [106.71, 26.57], "六盘水": [104.82, 26.58], "水城": [104.82, 26.58], "盘县": [104.64, 25.81], "六枝": [105.47, 26.21], "遵义": [106.9, 27.7], "绥阳": [107.19, 27.95], "道真": [107.6, 28.89], "凤冈": [107.72, 27.97], "余庆": [107.88, 27.22], "赤水": [105.69, 28.57], "桐梓": [106.8, 28.16], "正安": [107.43, 28.56], "务川": [107.87, 28.54], "湄潭": [107.5, 27.76], "仁怀": [106.41, 27.81], "习水": [106.2, 28.33], "铜仁": [109.21, 27.73], "玉屏": [108.91, 27.24], "思南": [108.23, 27.94], "德江": [108.13, 28.27], "万山": [109.2, 27.52], "江口": [108.82, 27.68], "师阡": [108.24, 27.52], "印江": [108.41, 28.02], "沿河": [108.48, 28.57], "松桃": [109.18, 28.17], "毕节": [105.29, 27.32], "黔西": [106.04, 27.03], "织金": [105.76, 26.66], "赫章": [104.71, 27.13], "大方": [105.61, 27.16], "金沙": [106.22, 27.46], "钠雍": [105.38, 26.77], "威宁": [104.28, 26.87], "安顺": [105.92, 26.25], "息烽": [106.73, 27.1], "清镇": [106.46, 26.56], "普定": [105.75, 26.32], "开阳": [106.95, 27.06], "修文": [106.59, 26.84], "平坝": [106.26, 26.42], "镇宁": [105.75, 26.08], "紫云": [106.06, 25.75], "关岭": [105.62, 25.94], "兴义": [104.91, 25.1], "普安": [104.96, 25.79], "贞丰": [105.63, 25.39], "望谟": [106.09, 25.17], "册亭": [105.79, 25.0], "安龙": [105.49, 25.11], "兴仁": [105.18, 25.44], "晴龙": [105.21, 25.83], "凯里": [107.97, 26.59], "施秉": [108.11, 27.03], "镇远": [108.41, 27.06], "天柱": [109.2, 26.89], "剑河": [108.58, 26.64], "黎平": [109.14, 26.24], "从江": [108.9, 25.76], "麻江": [107.58, 26.49], "黄平": [107.89, 26.89], "三穗": [108.68, 26.98], "岑巩": [108.72, 27.21], "锦屏": [109.18, 26.7], "台江": [108.32, 26.68], "榕江": [108.5, 25.94], "雷山": [108.07, 26.38], "丹寨": [107.79, 26.21], "都匀": [107.53, 26.72], "贵定": [107.22, 26.58], "瓮安": [107.48, 27.08], "平塘": [107.55, 25.83], "长顺": [106.45, 26.03], "惠水": [106.66, 26.14], "荔波": [107.88, 25.42], "福泉": [107.51, 26.7], "独山": [107.54, 25.84], "罗甸": [106.74, 25.43], "龙里": [106.98, 26.46], "三都": [107.86, 26.0], "云南": [102.73, 25.04], "昆明": [102.73, 25.04], "富民": [102.48, 25.21], "晋宁": [102.58, 24.68], "呈贡": [102.79, 24.9], "安宁": [102.44, 24.95], "昭通": [103.7, 29.32], "永善": [103.63, 28.22], "大关": [103.91, 27.74], "彝良": [104.06, 27.61], "鲁甸": [103.54, 27.21], "绥江": [103.97, 28.58], "盐津": [104.28, 28.08], "威信": [105.05, 27.85], "镇雄": [104.86, 27.42], "巧家": [102.92, 26.9], "永富": [104.38, 28.62], "曲靖": [103.79, 25.51], "宣威": [104.09, 26.24], "富源": [104.24, 25.67], "师宗": [103.97, 24.85], "嵩明": [103.03, 25.35], "会泽": [103.27, 26.41], "沽益": [103.82, 25.62], "罗平": [104.3, 24.88], "陆良": [104.64, 25.04], "宜良": [103.12, 24.9], "马龙": [103.61, 25.41], "路南": [103.24, 24.77], "寻甸": [103.25, 25.56], "玉溪": [102.52, 24.35], "华宁": [102.93, 24.26], "通海": [102.75, 24.09], "澄江": [102.91, 24.68], "江川": [102.73, 24.27], "易门": [102.15, 24.67], "元江": [102.0, 23.59], "新平": [101.98, 24.06], "峨山": [102.38, 24.16], "思茅": [101.0, 22.79], "普洱": [101.03, 23.07], "镇沅": [100.88, 23.9], "景东": [100.82, 24.42], "景谷": [100.71, 23.5], "黑江": [101.71, 23.4], "澜沦": [99.97, 22.55], "西盟": [99.47, 22.73], "江城": [101.88, 22.58], "孟连": [99.55, 22.32], "临沦": [100.09, 23.88], "云县": [100.12, 24.44], "镇康": [99.02, 23.92], "永德": [99.25, 24.03], "凤庆": [99.92, 24.58], "双江": [99.85, 23.45], "沧源": [99.24, 23.15], "耿马": [99.41, 23.56], "保由": [99.18, 25.12], "施甸": [99.15, 24.69], "腾冲": [98.51, 25.01], "昌宁": [99.61, 24.82], "龙陵": [98.7, 24.58], "丽江": [100.25, 26.86], "华坪": [101.24, 26.63], "永胜": [100.76, 26.71], "宁蒗": [100.82, 27.29], "文山": [104.24, 23.37], "广南": [105.09, 24.05], "西畴": [104.68, 23.42], "麻栗坡": [104.71, 23.12], "马关": [104.4, 23.01], "丘北": [104.19, 24.03], "砚山": [104.35, 23.62], "富宁": [105.6, 23.62], "个旧": [102.43, 23.35], "弥勒": [103.43, 24.41], "蒙自": [103.41, 23.36], "元阳": [102.81, 23.17], "红河": [102.42, 23.35], "石屏": [102.48, 23.73], "泸西": [103.76, 24.52], "金平": [103.24, 22.77], "开远": [103.23, 23.7], "绿春": [102.42, 23.01], "建水": [102.79, 23.64], "河口": [103.98, 22.52], "屏边": [103.67, 22.68], "景淇": [100.79, 22.0], "勐海": [100.5, 21.95], "勐腊": [101.56, 21.48], "楚雄": [101.54, 25.01], "元谋": [101.85, 25.7], "武定": [102.36, 25.55], "禄丰": [102.08, 25.15], "南华": [101.26, 25.21], "大姚": [101.34, 25.73], "永仁": [101.7, 26.07], "禄劝": [102.45, 25.58], "牟定": [101.58, 25.32], "双柏": [101.67, 24.68], "姚安": [101.24, 25.4], "下关": [100.24, 25.45], "剑川": [99.88, 26.53], "洱源": [99.94, 26.1], "宾川": [100.55, 25.82], "弥渡": [100.52, 25.34], "永平": [99.52, 25.45], "鹤庆": [100.18, 26.55], "大理": [100.19, 25.69], "漾濞": [99.98, 25.68], "云龙": [99.39, 25.9], "祥云": [100.56, 25.48], "巍山": [100.33, 25.23], "南涧": [100.51, 25.04], "潞西": [98.6, 24.41], "陇川": [97.96, 24.33], "盈江": [97.93, 24.69], "畹町": [98.08, 24.08], "瑞丽": [97.83, 24.0], "梁河": [98.3, 24.78], "泸水": [98.82, 25.97], "碧江": [98.95, 26.55], "福贡": [98.92, 26.89], "兰坪": [99.29, 26.49], "贡山": [98.65, 27.73], "中甸": [99.72, 27.78], "德钦": [98.93, 28.49], "维西": [99.27, 27.15], "江西": [115.89, 28.68], "南昌": [115.89, 28.68], "新建": [115.8, 28.69], "景德镇": [117.22, 29.3], "萍乡": [113.85, 27.6], "九江": [115.97, 29.71], "彭泽": [116.56, 29.9], "湖口": [116.23, 29.75], "都昌": [116.19, 29.29], "星子": [116.03, 29.47], "永修": [115.82, 29.04], "德安": [115.75, 29.33], "瑞昌": [115.65, 29.68], "武宁": [115.09, 29.26], "修永": [114.55, 29.04], "上饶": [117.97, 28.47], "婺源": [117.83, 29.25], "德兴": [117.58, 28.96], "玉山": [118.25, 28.68], "广丰": [118.2, 28.45], "铅山": [117.71, 28.32], "横峰": [117.62, 28.42], "鹰潭": [117.02, 28.23], "贵溪": [117.2, 28.3], "余江": [116.82, 28.22], "万年": [117.08, 28.7], "乐平": [117.12, 28.97], "波阳": [116.68, 29.0], "于干": [116.69, 28.7], "弋阳": [117.43, 28.42], "宜春": [114.38, 27.81], "万载": [114.44, 28.11], "铜鼓": [114.37, 28.53], "宜丰": [114.78, 28.4], "上高": [114.91, 28.25], "安义": [115.55, 28.86], "奉新": [115.38, 28.71], "高安": [115.38, 28.42], "丰城": [115.7, 28.19], "清江": [119.02, 33.59], "新余": [114.92, 27.81], "分宜": [114.68, 27.82], "靖安": [115.37, 28.88], "抚州": [116.34, 28.0], "临川": [116.29, 27.95], "金溪": [116.77, 27.92], "资溪": [117.06, 27.7], "黎川": [116.91, 27.3], "南丰": [116.52, 27.22], "南城": [116.62, 27.56], "宜黄": [116.2, 27.55], "崇仁": [116.05, 27.75], "乐安": [115.82, 27.44], "东乡": [103.39, 35.68], "进贤": [116.26, 28.37], "吉安": [114.97, 27.12], "新干": [115.4, 27.77], "峡江": [115.15, 27.56], "吉水": [115.14, 27.22], "永丰": [115.42, 27.33], "泰和": [114.88, 26.81], "万安": [114.77, 26.47], "遂川": [114.5, 26.33], "宁冈": [113.97, 26.71], "永新": [114.23, 26.96], "莲花": [113.94, 27.14], "安福": [114.62, 27.39], "井冈山": [114.17, 26.57], "赣州": [114.92, 25.85], "广昌": [116.32, 26.84], "石城": [116.32, 26.34], "宁都": [116.0, 26.46], "兴国": [115.33, 26.32], "于都": [115.39, 25.96], "瑞金": [116.02, 25.89], "会昌": [115.79, 25.58], "安远": [115.41, 25.15], "寻乌": [115.64, 24.96], "定南": [115.02, 24.7], "龙南": [114.79, 24.91], "全南": [114.53, 24.76], "信丰": [114.94, 25.39], "赣县": [114.02, 25.85], "南康": [114.75, 25.66], "上犹": [114.55, 25.8], "崇义": [114.31, 25.69], "大余": [114.36, 25.39], "陕西": [108.95, 34.27], "西安": [108.95, 34.27], "长安": [108.97, 34.18], "铜川": [109.11, 35.09], "耀县": [108.98, 34.91], "宝鸡": [107.15, 34.38], "凤翔": [107.39, 34.53], "千阳": [107.13, 34.65], "陇县": [106.86, 34.91], "麟游": [107.8, 34.69], "岐山": [107.63, 34.46], "浮风": [107.87, 34.38], "武功": [108.22, 34.28], "眉县": [107.76, 34.29], "太白": [107.3, 34.09], "凤县": [106.51, 33.93], "榆林": [109.77, 38.3], "神木": [110.51, 38.83],
    "府谷": [111.07, 39.05], "佳县": [110.48, 38.04], "米脂": [110.23, 37.78], "吴堡": [110.73, 37.49], "绥德": [110.24, 37.49], "清涧": [110.15, 37.11], "子洲": [110.05, 37.45], "横山": [109.32, 37.97], "靖边": [108.79, 37.61], "定边": [107.59, 37.6], "延安": [109.47, 36.6], "安寨": [109.34, 36.88], "子长": [109.65, 37.16], "延川": [110.18, 36.87], "延长": [110.02, 36.59], "宜川": [110.15, 36.04], "黄龙": [109.86, 35.6], "洛川": [109.42, 35.76], "宜君": [109.11, 35.43], "黄陵": [109.27, 35.6], "富县": [109.37, 36.0], "甘泉": [109.37, 36.29], "志丹": [108.78, 36.84], "吴旗": [108.22, 36.93], "咸阳": [108.72, 34.36], "礼泉": [108.43, 34.5], "永寿": [108.14, 34.71], "彬县": [108.09, 35.04], "长武": [107.8, 35.22], "旬邑": [108.33, 35.13], "淳化": [108.57, 34.81], "泾阳": [108.84, 34.53], "三原": [108.94, 34.62], "高陵": [109.1, 34.55], "户县": [108.61, 34.12], "周至": [108.22, 34.18], "兴平": [108.49, 34.32], "乾县": [108.25, 34.54], "渭南": [109.5, 34.52], "蒲城": [109.59, 34.97], "白水": [109.6, 35.18], "成城": [109.93, 35.2], "韩城": [110.45, 35.47], "合阳": [110.15, 35.24], "人荔": [109.96, 34.82], "潼关": [110.25, 34.56], "华阴": [110.09, 34.58], "华县": [109.77, 34.53], "蓝田": [109.32, 34.17], "临潼": [109.22, 34.38], "富平": [109.17, 34.76], "商县": [109.96, 33.88], "洛南": [110.15, 34.11], "丹凤": [110.35, 33.71], "商南": [110.88, 33.54], "山阳": [109.91, 33.55], "镇安": [109.16, 33.45], "柞水": [109.14, 33.69], "安康": [109.02, 32.7], "旬阳": [109.35, 32.83], "白河": [110.06, 32.83], "平利": [109.37, 32.41], "镇坪": [109.51, 31.91], "岚皋": [108.89, 32.3], "紫阳": [108.55, 32.56], "汉阴": [108.53, 32.9], "石泉": [108.26, 33.05], "宁陕": [108.33, 33.34], "汉中": [108.04, 33.07], "留坝": [106.95, 33.65], "城固": [107.32, 33.16], "洋县": [107.56, 33.23], "佛坪": [108.0, 33.55], "西乡": [107.77, 33.0], "镇巴": [107.91, 32.56], "南郑": [106.93, 33.0], "宁强": [106.25, 32.82], "勉县": [106.68, 33.16], "略阳": [106.16, 33.34], "青海": [101.74, 36.56], "西宁": [101.74, 36.56], "大通": [101.67, 36.92], "平安": [102.09, 36.47], "湟中": [101.57, 36.49], "乐都": [102.38, 36.49], "民和": [102.8, 36.3], "湟源": [101.28, 36.72], "互助": [101.95, 36.84], "化隆": [102.3, 36.11], "循化": [102.46, 35.84], "门源": [101.62, 37.37], "海晏": [100.99, 36.89], "刚察": [100.17, 37.32], "祁连": [100.22, 38.2], "同仁": [102.0, 35.54], "尖扎": [102.0, 35.92], "泽库": [101.5, 35.03], "共和": [100.61, 36.27], "贵德": [101.47, 36.02], "贵南": [100.75, 35.57], "同德": [100.63, 35.24], "兴海": [99.99, 35.6], "玛沁": [100.26, 34.49], "甘德": [99.89, 33.95], "久治": [101.47, 33.46], "班玛": [100.73, 32.92], "达日": [99.68, 33.74], "玛多": [98.26, 34.92], "玉树": [96.97, 33.03], "称多": [97.12, 33.35], "囊谦": [96.47, 32.23], "杂多": [95.3, 32.92], "治多": [95.6, 33.86], "曲麻菜": [95.5, 34.52], "格尔木": [94.9, 36.41], "乌兰": [98.46, 36.9], "都兰": [98.13, 36.3], "天峻": [99.03, 37.28], "甘肃": [103.73, 36.03], "兰州": [103.73, 36.03], "永登": [103.25, 36.73], "榆中": [104.09, 35.87], "永昌": [101.94, 38.23], "皋兰": [103.97, 36.32], "定西": [104.57, 35.57], "会宁": [105.08, 35.72], "陇西": [104.61, 34.98], "临洮": [103.88, 35.39], "靖远": [104.71, 36.54], "通渭": [105.27, 35.24], "渭源": [104.19, 35.17], "平凉": [106.68, 35.51], "灵台": [107.61, 35.1], "华亭": [106.65, 35.21], "静宁": [105.73, 35.51], "泾川": [107.38, 35.31], "崇信": [107.05, 35.27], "庄浪": [106.06, 35.2], "庆阳": [107.88, 36.03], "华池": [108.0, 36.44], "庄宁": [108.43, 35.5], "镇源": [107.22, 35.7], "环县": [107.33, 36.57], "合水": [108.02, 35.81], "宁县": [107.94, 35.17], "天水": [105.69, 34.6], "徽县": [106.11, 33.78], "礼县": [105.15, 34.22], "武山": [104.88, 34.69], "秦安": [105.69, 34.89], "清水": [106.12, 34.73], "两当": [106.28, 33.9], "西和": [105.28, 34.02], "甘谷": [105.35, 34.7], "漳县": [104.48, 34.87], "张家川": [106.23, 35.0], "武都": [104.94, 33.43], "宕昌": [104.38, 34.06], "康县": [105.58, 33.33], "成县": [105.7, 33.75], "文县": [104.7, 32.95], "临潭": [103.35, 34.69], "舟曲": [104.38, 33.81], "玛曲": [102.04, 33.97], "下河": [102.46, 35.21], "卓尼": [103.54, 34.61], "迭部": [103.23, 34.08], "碌曲": [102.5, 34.6], "临夏": [103.22, 35.62], "永靖": [103.34, 35.97], "和政": [103.31, 35.43], "康乐": [103.68, 35.39], "广河": [103.54, 35.46], "岷县": [104.04, 34.41], "积石山": [102.85, 35.74], "武威": [102.61, 37.94], "民勤": [103.08, 38.62], "古浪": [102.86, 37.43], "景泰": [104.05, 37.14], "天祝": [102.84, 37.24], "张掖": [100.46, 38.93], "民乐": [100.85, 38.43], "临泽": [100.17, 39.14], "山丹": [101.19, 38.79], "高台": [99.84, 39.14], "肃南": [99.57, 38.86], "玉门": [97.58, 39.81], "酒泉": [98.5, 39.71], "敦煌": [94.71, 40.13], "金塔": [98.92, 39.97], "安西": [95.77, 40.51], "阿克塞": [94.25, 38.46], "肃北": [94.89, 39.49], "广西": [106.54, 29.59], "南宁": [108.33, 22.84], "柳州": [109.4, 24.33], "桂林": [110.28, 25.29], "梧州": [111.34, 23.51], "凭祥": [106.75, 22.11], "邕宁": [108.49, 22.74], "武鸣": [108.27, 23.17], "马山": [108.2, 23.73], "上林": [108.59, 23.44], "宾阳": [108.8, 23.22], "横县": [109.2, 22.69], "扶绥": [107.92, 22.65], "崇左": [107.37, 22.42], "宁明": [107.08, 22.12], "龙州": [106.84, 22.36], "大新": [107.21, 22.85], "天等": [107.12, 23.08], "隆安": [107.68, 23.18], "河池": [108.06, 24.7], "环江": [108.26, 24.83], "罗城": [108.9, 24.79], "宜山": [108.64, 24.47], "东兰": [107.36, 24.53], "凤山": [107.05, 24.55], "天峨": [107.16, 25.01], "南丹": [107.54, 24.98], "都安": [108.09, 23.94], "巴马": [107.25, 24.15], "合山": [108.89, 23.82], "柳城": [109.24, 24.67], "融安": [109.37, 24.24], "鹿寨": [109.74, 24.49], "象州": [109.7, 23.98], "武宜": [109.66, 23.6], "柳江": [109.34, 24.27], "来宾": [109.24, 23.76], "忻城": [108.66, 24.07], "融水": [109.24, 25.07], "三江": [109.58, 25.8], "金秀": [110.18, 24.14], "临桂": [110.22, 25.22], "灵川": [110.33, 25.42], "兴安": [110.66, 25.6], "资源": [110.66, 26.03], "全州": [111.06, 25.96], "灌阳": [111.14, 25.49], "恭城": [110.81, 24.85], "平乐": [110.66, 24.64], "荔浦": [110.38, 24.51], "永福": [109.98, 24.99], "龙胜": [110.02, 25.78], "苍悟": [111.22, 23.51], "钟山": [111.3, 24.53], "富川": [110.26, 24.83], "贺县": [111.54, 24.44], "岑溪": [111.0, 22.95], "藤县": [110.9, 23.36], "蒙山": [110.54, 24.22], "昭平": [110.8, 24.18], "玉林": [110.14, 22.64], "桂平": [110.07, 23.38], "平南": [110.4, 23.55], "容县": [110.53, 22.87], "北流": [110.33, 22.71], "陆川": [110.25, 22.33], "博白": [109.98, 22.27], "贵县": [109.6, 23.11], "北海": [109.12, 21.49], "钦州": [108.61, 21.96], "灵山": [109.29, 22.44], "浦北": [109.56, 22.27], "合浦": [109.2, 21.33], "上思": [107.98, 22.16], "防城": [108.35, 21.78], "百色": [106.62, 23.91], "凌云": [106.55, 24.35], "乐业": [106.56, 24.78], "田阳": [106.9, 23.75], "田东": [107.12, 23.62], "平果": [107.59, 23.33], "德保": [106.6, 23.34], "靖西": [106.41, 23.15], "那坡": [105.85, 23.42], "西林": [105.08, 24.51], "田林": [106.24, 24.31], "隆林": [105.34, 24.8], "新疆": [87.68, 43.77], "乌鲁木齐": [87.68, 43.77], "克拉玛依": [84.77, 45.59], "石河子": [85.94, 44.27], "吐鲁番": [89.19, 42.91], "托克逊": [88.63, 42.77], "鄯善": [90.25, 42.82], "哈密": [93.44, 42.78], "伊吾": [94.65, 43.28], "巴里坤": [93.0, 43.6], "库尔勒": [86.06, 41.68], "和静": [86.35, 42.31], "和硕": [86.84, 42.23], "博湖": [86.53, 41.95], "尉梨": [86.24, 41.36], "轮台": [84.25, 41.77], "焉耆": [86.55, 42.05], "和田": [79.94, 37.12], "民丰": [82.63, 37.07], "策勒": [80.78, 37.04], "于田": [81.63, 36.86], "洛浦": [80.17, 37.12], "皮山": [78.29, 37.06], "墨玉": [79.74, 37.31], "阿克苏": [80.29, 41.15], "温宿": [80.24, 41.29], "拜城": [81.84, 41.82], "库车": [82.97, 41.68], "新和": [82.63, 41.55], "沙雅": [82.9, 41.25], "阿瓦提": [80.34, 40.64], "柯平": [79.06, 40.55], "乌什": [79.25, 41.22], "咯什": [75.94, 39.52], "巴楚": [78.59, 39.78], "枷师": [76.78, 39.46], "乐普湖": [76.67, 39.23], "麦盖提": [77.62, 38.95], "莎车": [77.25, 38.45], "泽普": [77.26, 38.2], "叶城": [77.42, 37.89], "疏勒": [76.05, 39.41], "英吉沙": [76.17, 38.91], "疏附": [75.83, 39.42], "塔什库尔干": [75.22, 75.22], "阿图什": [76.12, 39.73], "阿合奇": [78.42, 41.91], "阿克陶": [75.94, 39.14], "乌恰": [75.18, 39.7], "昌吉": [87.31, 44.05], "阜康": [87.94, 44.14], "奇台": [89.52, 44.02], "吉木萨尔": [89.14, 44.0], "米泉": [87.68, 43.97], "玛纳斯": [86.22, 44.28], "呼图壁": [86.92, 44.18], "木垒": [90.34, 43.8], "博乐": [82.1, 44.93], "精河": [82.92, 44.67], "温泉": [81.08, 44.95], "伊宁": [81.33, 43.91], "尼勒克": [82.53, 43.82], "新源": [83.27, 43.41], "巩留": [82.23, 43.35], "奎屯": [84.89, 44.45], "特克斯": [81.81, 43.23], "昭苏": [81.08, 43.15], "霍城": [80.87, 44.07],
    "察布察尔": [81.12, 43.82], "恩施州": [109.5, 30.27], "鄂州": [115, 30.4],
    "荆州": [112, 30.33], "随州": [113.4, 31.7], "襄阳": [112, 32],
    "塔城": [82.96, 46.74], "额敏": [83.62, 46.52], "乌苏": [84.62, 44.45], "托里": [83.59, 45.92], "裕民": [82.94, 46.21], "沙湾": [85.56, 44.29], "和布克赛尔": [85.13, 46.78], "阿勒泰": [88.14, 47.86], "青河": [90.37, 46.71], "富蕴": [89.44, 47.05], "福海": [87.51, 47.15], "吉木乃": [85.84, 47.42], "布尔津": [86.92, 47.7], "哈巴河": [86.41, 48.05], "内蒙古": [111.65, 40.82], "呼和浩特": [111.65, 40.82], "上默特左旗": [111.13, 40.72], "托克托": [111.15, 40.28], "包头": [110.0, 40.58], "上默特右旗": [110.52, 40.55], "固阳": [110.03, 41.03], "乌海": [106.82, 39.67], "集宁": [113.08, 41.03], "兴和": [113.97, 40.88], "清水河": [111.65, 39.92], "武川": [111.42, 41.12], "卓资": [112.52, 40.93], "商都": [113.53, 41.58], "丰镇": [113.15, 40.45], "凉城": [112.48, 40.52], "和林格尔": [111.8, 40.4], "化德": [114.0, 41.9], "察哈尔右翼后旗": [113.15, 41.85], "察哈尔右翼中旗": [112.62, 41.28], "察哈尔右翼前旗": [113.18, 40.78], "四子王旗": [111.68, 41.37], "达尔罕茂明安联合旗": [110.42, 41.72], "二连浩特": [111.96, 43.65], "阿巴哈纳尔旗": [116.08, 43.95], "多伦": [116.48, 42.18], "阿巴嘎旗": [114.97, 44.03], "西乌珠穆沁旗": [117.58, 44.6], "东乌珠穆沁旗": [116.97, 45.53], "苏尼特左旗": [113.7, 43.85], "苏尼特右旗": [112.95, 42.47], "太仆寺旗": [115.3, 41.9], "正镶白旗": [115.0, 42.32], "正蓝旗": [116.02, 42.25], "镶黄旗": [113.83, 42.25], "海拉尔": [119.73, 29.22], "满洲里": [117.47, 49.58], "陈巴尔虎旗": [119.45, 49.33], "额尔古纳右旗": [120.08, 50.45], "额尔古纳左旗": [121.52, 50.8], "喜桂图旗": [120.73, 49.3], "阿荣旗": [123.5, 48.13], "布特哈旗": [122.78, 47.98], "新巴尔虎左旗": [116.82, 48.67], "新巴尔虎右旗": [118.23, 48.22], "鄂伦春自治旗": [123.7, 50.58], "莫力达瓦达斡尔族自治旗": [124.5, 48.47], "鄂温克族自治旗": [119.75, 49.13], "通辽": [122.28, 43.63], "开鲁": [121.32, 43.62], "科尔沁左翼后旗": [122.35, 42.97], "科尔沁左翼中旗": [123.28, 44.13], "库伦旗": [121.75, 42.72], "奈曼旗": [120.65, 42.85], "扎鲁特旗": [120.87, 44.55], "赤峰": [118.87, 42.28], "宁城": [119.32, 41.62], "林西": [118.02, 43.62], "喀喇沁旗": [118.67, 41.95], "敖汉旗": [119.87, 42.3], "翁牛特旗": [119.0, 42.97], "巴林": [118.65, 43.52], "阿鲁科尔沁旗": [120.05, 43.97], "克什克腾旗": [117.48, 43.28], "伊克昭盟": [110.0, 39.83], "东胜县": [110.0, 39.83], "准格尔旗": [111.13, 39.68], "乌审旗": [109.03, 38.38], "伊金霍洛旗": [109.77, 39.25], "鄂托克旗": [107.97, 39.12], "鄂托克前旗": [107.43, 38.18], "杭锦旗": [108.7, 39.83], "达拉特旗": [110.02, 40.42], "临河": [107.37, 40.78], "五原": [108.28, 41.12], "磴口": [106.98, 40.33], "杭锦后旗": [107.12, 40.88], "乌拉特中旗": [108.52, 41.55], "乌拉特前旗": [108.65, 40.75], "乌拉特后旗": [108.52, 40.88], "阿拉善左旗": [105.68, 38.85], "阿拉善右旗": [101.68, 39.2], "额济纳旗": [100.88, 41.9], "乌兰浩特": [122.08, 46.07], "突泉": [121.5, 45.4], "科尔沁右翼前旗": [122.03, 46.12], "科尔沁右翼中旗": [121.47, 45.05], "西藏": [91.11, 29.97], "拉萨": [91.11, 29.97], "林周": [91.24, 30.2], "当雄": [91.05, 30.51], "墨竹工卡": [91.77, 29.77], "尼木": [90.14, 29.44], "米林": [94.13, 29.18], "墨脱": [95.26, 29.22], "达孜": [91.39, 29.63], "曲水": [90.7, 29.39], "堆龙德庆": [90.96, 29.67], "林芝": [94.25, 29.59], "工布江达": [93.25, 29.92], "那曲": [92.1, 31.47], "巴青": [94.1, 31.96], "比如": [93.68, 31.53], "班戈": [90.05, 31.35], "嘉黎": [93.46, 30.63], "聂荣": [92.3, 31.08], "索县": [93.71, 31.92], "安多": [91.68, 32.29], "申扎": [88.7, 30.94], "吕都": [97.14, 31.18], "贡觉": [98.29, 30.86], "左贡": [97.9, 29.68], "察隅": [97.49, 28.62], "洛隆": [95.76, 30.81], "丁青": [95.63, 31.42], "波密": [95.75, 29.92], "江达": [89.19, 31.53], "察雅": [97.56, 30.69], "芒康": [98.68, 29.64], "八宿": [96.95, 30.04], "边坝": [94.69, 30.94], "类乌齐": [96.57, 31.2], "乃东": [91.76, 29.18], "加查": [92.6, 29.09], "曲松": [92.11, 29.08], "错那": [91.91, 27.98], "穷结": [91.65, 29.04], "贡嘎": [90.96, 29.25], "浪卡子": [90.33, 29.96], "桑日": [92.0, 29.26], "朗县": [93.11, 29.06], "隆子": [92.42, 28.46], "措美": [91.4, 28.49], "洛扎": [90.83, 28.42], "扎囊": [91.26, 29.22], "日喀则": [88.82, 29.28], "定结": [87.77, 28.38], "拉孜": [87.62, 29.1], "聂拉木": [85.94, 28.19], "谢通门": [88.25, 29.43], "仲巴": [84.15, 29.66], "康马": [89.67, 28.57], "亚东": [88.93, 27.55], "岗巴": [88.5, 28.29], "南木林": [89.02, 29.71], "萨迦": [88.0, 28.87], "定日": [87.11, 28.57], "吉隆": [85.29, 28.94], "昂仁": [87.22, 29.3], "江孜": [89.63, 28.94], "仁布": [89.77, 29.21], "白朗": [89.16, 29.11], "萨嘎": [85.3, 29.38], "噶尔": [80.0, 32.08], "革吉": [81.13, 32.45], "扎达": [79.76, 31.47], "措勤": [85.16, 31.06], "日上": [79.61, 33.44], "改则": [84.1, 32.33], "普兰": [81.18, 30.37], "宁夏": [106.27, 38.47], "银川": [106.27, 38.47], "永宁": [106.24, 38.28], "贺兰": [106.35, 38.55], "石嘴山": [106.39, 39.04], "平罗": [106.54, 38.91], "陶乐": [106.69, 38.82], "吴忠": [106.21, 37.99], "同心": [105.94, 36.97], "灵武": [106.34, 38.1], "中宁": [105.66, 37.48], "盐池": [107.41, 37.78], "中卫": [105.18, 37.51], "青铜峡": [106.07, 38.02], "固原": [106.28, 36.01], "西吉": [105.7, 35.97], "泾源": [106.33, 35.5], "海原": [105.64, 36.56], "隆德": [106.11, 35.63], "台湾": [121.5, 25.14], "香港": [114.1, 22.2], "澳门": [113.33, 22.13], "安徽": [117.27, 31.86], "合肥": [117.27, 31.86], "长丰": [117.16, 32.47], "淮南": [116.98, 32.62], "凤台": [116.71, 32.68], "淮北": [116.77, 33.97], "濉溪": [116.76, 33.92], "芜湖": [118.38, 31.33], "铜陵": [117.82, 30.93], "蚌埠": [117.34, 32.93], "马鞍山": [118.48, 31.56], "安庆": [117.03, 30.52], "宿州": [116.97, 33.63], "宿县": [116.97, 33.63], "砀山": [116.34, 34.42], "萧县": [116.93, 34.19], "吴壁": [117.55, 33.55], "泗县": [117.89, 33.49], "五河": [117.87, 33.14], "固镇": [117.32, 33.33], "怀远": [117.19, 32.95], "滁州": [118.31, 32.33], "嘉山": [117.98, 32.78], "天长": [119.0, 32.68], "来安": [118.44, 32.44], "全椒": [118.27, 32.1], "定远": [117.68, 32.52], "凤阳": [117.4, 32.86], "巢湖": [117.87, 31.62], "巢县": [117.87, 31.62], "肥东": [117.47, 31.89], "含山": [118.11, 31.7], "和县": [118.37, 31.7], "无为": [117.75, 31.3], "卢江": [117.29, 31.23], "宣城": [118.73, 31.95], "当涂": [118.49, 31.55], "郎溪": [119.17, 31.14], "广德": [119.41, 30.89], "泾县": [118.41, 30.68], "南陵": [118.32, 30.91], "繁昌": [118.21, 31.07], "宁国": [118.95, 30.62], "青阳": [117.84, 30.64], "屯溪": [118.31, 29.72], "休宁": [118.19, 29.81], "旌得": [118.53, 30.28], "绩溪": [118.57, 30.07], "歙县": [118.44, 29.88], "祁门": [117.7, 29.86], "黟县": [117.92, 29.93], "太平": [118.13, 30.28], "石台": [117.48, 30.19], "桐城": [116.94, 31.04], "纵阳": [117.21, 30.69], "怀宁": [116.63, 30.41], "望江": [116.69, 30.12], "宿松": [116.13, 30.15], "太湖": [116.27, 30.42], "岳西": [116.36, 30.84], "潜山": [116.53, 30.62], "东至": [116.99, 30.08], "贵池": [117.48, 30.66], "六安": [116.49, 31.73], "霍丘": [116.27, 32.32], "寿县": [116.78, 32.57], "肥西": [117.15, 31.7], "舒城": [116.94, 31.45], "霍山": [116.32, 31.38], "金寨": [115.87, 31.67], "阜阳": [115.81, 32.89], "毫县": [116.76, 33.86], "涡阳": [116.21, 33.49], "蒙城": [116.55, 33.25], "利辛": [116.19, 33.12], "颖上": [116.26, 32.62], "阜南": [115.6, 32.63], "临泉": [115.24, 33.06], "界首": [115.34, 33.24], "太和": [115.61, 33.16], "江苏": [118.78, 32.04], "南京": [118.78, 32.04], "江宁": [118.83, 31.95], "六合": [118.83, 32.36], "江浦": [118.62, 32.07], "徐州": [117.2, 34.26], "连云港": [119.16, 34.59], "南通": [121.05, 32.08], "苏州": [120.62, 31.32], "无锡": [120.29, 31.59], "常州": [119.95, 31.79], "丰县": [116.57, 34.79], "沛县": [116.93, 34.73], "赣榆": [119.11, 34.83], "东海": [118.75, 34.54], "新沂": [118.33, 34.38], "邳县": [117.97, 34.3], "睢宁": [117.94, 33.89], "铜山": [117.2, 34.26], "灌云": [119.23, 34.3], "灌南": [119.36, 34.09], "沭阳": [118.79, 34.12], "宿迁": [118.3, 33.96], "泗阳": [118.68, 33.73], "盱眙": [118.05, 33.0], "涟水": [119.26, 33.77], "淮阴": [119.02, 33.62], "淮安": [119.15, 33.5], "洪泽": [118.85, 33.28], "泗洪": [118.23, 33.46], "金湖": [119.02, 33.01], "盐城": [120.13, 33.38], "滨海": [119.84, 34.01], "阜宁": [119.79, 33.78], "射阳": [120.26, 33.77], "建湖": [119.77, 33.46], "响水": [119.56, 34.2], "大丰": [120.45, 33.19], "东台": [120.31, 32.84], "海安": [120.45, 32.57], "如皋": [120.56, 32.39], "如东": [121.18, 32.33], "启东": [121.66, 31.8], "海门": [121.15, 31.89], "扬州": [119.42, 32.39], "宝应": [119.32, 33.23], "兴化": [119.82, 32.93], "高邮": [119.45, 32.78], "泰兴": [120.02, 32.16], "泰县": [120.15, 32.51], "泰州": [119.9, 32.49], "靖江": [120.26, 32.03], "江都": [119.55, 32.43], "邗江": [119.42, 32.39], "仪征": [119.16, 32.27], "镇江": [119.44, 32.2], "丹徒": [119.44, 32.2], "扬中": [119.81, 32.24], "丹阳": [119.55, 32.0], "武进": [119.95, 31.78], "宜兴": [119.82, 31.36], "金坛": [119.56, 31.74], "溧阳": [119.48, 31.43], "句容": [119.16, 31.95], "溧水": [119.02, 31.65], "高淳": [118.87, 31.32], "江阴": [120.26, 31.91], "沙洲": [120.55, 31.86], "常熟": [120.74, 31.64], "太仓": [121.1, 31.45], "昆山": [120.95, 31.39], "吴县": [120.62, 31.32], "吴江": [120.63, 31.16] };


/***/ }),

/***/ "./src/app/utils/trans-data.ts":
/*!*************************************!*\
  !*** ./src/app/utils/trans-data.ts ***!
  \*************************************/
/*! exports provided: trans2BarChartData, trans2LineChartData, trans2RelatedNumData, trans2GeoScatterData, trans2GeoBarData, trans2PieChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans2BarChartData", function() { return trans2BarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans2LineChartData", function() { return trans2LineChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans2RelatedNumData", function() { return trans2RelatedNumData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans2GeoScatterData", function() { return trans2GeoScatterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans2GeoBarData", function() { return trans2GeoBarData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans2PieChartData", function() { return trans2PieChartData; });
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ "./src/app/utils/coordinate.ts");
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ "./src/app/utils/translate.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/app/utils/utils.ts");



const transChinese = {
    confirm: '累计确诊',
    heal: '治愈',
    dead: '死亡',
    nowConfirm: '现存确诊',
    suspect: '现存疑似',
    nowSevere: '现存重症',
    importedCase: '境外流入',
    noInfect: '无症状感染者'
};
const transColor = {
    confirm: 'deepskyblue',
    heal: 'darkseagreen',
    dead: 'black',
    nowConfirm: 'red',
    suspect: 'lightcoral',
    nowSevere: 'crimson',
    importedCase: 'cornflowerblue',
    noInfect: 'crimson'
};
function trans2BarChartData(switchArea, data) {
    const result = { xAxis: [], yAxisNowComfirm: [], yAxisHeal: [], yAxisDead: [] };
    if (switchArea === 'world') {
        data.foreignList.forEach(country => {
            result.xAxis.push(country.name);
            result.yAxisNowComfirm.push(country.confirm - country.heal);
            result.yAxisHeal.push(country.heal);
            result.yAxisDead.push(country.dead);
        });
    }
    else if (switchArea === 'china') {
        data.areaTree[0].children.forEach(province => {
            result.xAxis.push(province.name);
            result.yAxisNowComfirm.push(province.total.confirm - province.total.heal - province.total.dead);
            result.yAxisHeal.push(province.total.heal);
            result.yAxisDead.push(province.total.dead);
        });
    }
    return result;
}
function trans2LineChartData(switchArea, data) {
    const today = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getDate"])();
    const result = { xAxis: [], yAxis: [] };
    if (switchArea === 'world') {
        data.globalDailyHistory.forEach(day => {
            if (day.date !== today && day.date !== '05.15') {
                result.xAxis.push(day.date);
                result.yAxis.push(day.all.newAddConfirm);
            }
        });
    }
    else if (switchArea === 'china') {
        data.dailyNewAddHistory.forEach(day => {
            if (day.date !== today && day.date !== '05.15') {
                result.xAxis.push(day.date);
                result.yAxis.push(day.country);
            }
        });
    }
    return result;
}
function trans2RelatedNumData(switchArea, data) {
    const result = [];
    if (switchArea === 'china') {
        // tslint:disable-next-line:forin
        for (const i in data.chinaTotal) {
            result.push([
                transChinese[i],
                data.chinaTotal[i],
                data.chinaAdd[i] > 0 ? '+' + data.chinaAdd[i] : data.chinaAdd[i],
                transColor[i]
            ]);
        }
    }
    else if (switchArea === 'world') {
        // nowConfirm: 32779
        // confirm: 38448
        // heal: 4536
        // dead: 1133
        // nowConfirmAdd: 2303
        // confirmAdd: 2783
        // healAdd: 324
        // deadAdd: 156
        // tslint:disable-next-line:forin
        for (const i in data.globalStatis) {
            if (transChinese[i]) {
                result.push([
                    transChinese[i],
                    data.globalStatis[i],
                    data.globalStatis[i + 'Add'] > 0 ? '+' + data.globalStatis[i + 'Add'] : data.globalStatis[i + 'Add'],
                    transColor[i]
                ]);
            }
        }
    }
    return {
        lastUpdateTime: data.lastUpdateTime,
        nums: result
    };
}
function trans2GeoScatterData(switchMap, data) {
    function trans2GeoScatterChinaData(subData) {
        const geoScatterData = {
            nowConfirm: [],
            confirm: [],
            heal: [],
            dead: []
        };
        subData.areaTree[0].children.forEach(province => {
            geoScatterData['nowConfirm'].push({ name: province.name, value: province.total.nowConfirm });
            geoScatterData['confirm'].push({ name: province.name, value: province.total.confirm });
            geoScatterData['heal'].push({ name: province.name, value: province.total.heal });
            geoScatterData['dead'].push({ name: province.name, value: province.total.dead });
        });
        return geoScatterData;
    }
    function trans2GeoScatterWorldData(subData) {
        const geoScatterData = {
            nowConfirm: [],
            confirm: [],
            heal: [],
            dead: []
        };
        subData.foreignList.forEach(country => {
            const countryName = _translate__WEBPACK_IMPORTED_MODULE_1__["SIMPLE_WORLD"][_translate__WEBPACK_IMPORTED_MODULE_1__["COUNTRY_NAME"][country.name]];
            if (countryName) {
                /*if (COUNTRY_NAME[country.name] === 'Japen') {
                  jp += country.confirm;
                  geoScatterData['nowConfirm'].push({name: COUNTRY_NAME[country.name], value: jp});
                  geoScatterData['confirm'].push({name: COUNTRY_NAME[country.name], value: jp});
                  geoScatterData['heal'].push({name: COUNTRY_NAME[country.name], value: jp});
                  geoScatterData['dead'].push({name: COUNTRY_NAME[country.name], value: jp});
                } else {
                  geoScatterData['nowConfirm'].push({name: COUNTRY_NAME[country.name], value: country.nowConfirm});
                  geoScatterData['confirm'].push({name: COUNTRY_NAME[country.name], value: country.confirm});
                  geoScatterData['heal'].push({name: COUNTRY_NAME[country.name], value: country.heal});
                  geoScatterData['dead'].push({name: COUNTRY_NAME[country.name], value: country.dead});
                }*/
                geoScatterData['nowConfirm'].push({ name: countryName, value: country.nowConfirm });
                geoScatterData['confirm'].push({ name: countryName, value: country.confirm });
                geoScatterData['heal'].push({ name: countryName, value: country.heal });
                geoScatterData['dead'].push({ name: countryName, value: country.dead });
            }
        });
        geoScatterData['nowConfirm'].push({ name: 'CN', value: subData.chinaTotal.nowConfirm });
        geoScatterData['confirm'].push({ name: 'CN', value: subData.chinaTotal.confirm });
        geoScatterData['heal'].push({ name: 'CN', value: subData.chinaTotal.heal });
        geoScatterData['dead'].push({ name: 'CN', value: subData.chinaTotal.dead });
        return geoScatterData;
    }
    switch (switchMap) {
        case 'china':
            return trans2GeoScatterChinaData(data);
        case 'world':
            return trans2GeoScatterWorldData(data);
    }
}
function trans2GeoBarData(switchMap, data) {
    function trans2GeoBarWorldData(subData) {
        const geoBarData = {
            nowConfirm: [],
            confirm: [],
            heal: [],
            dead: []
        };
        subData.foreignList.forEach(area => {
            if (_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name]) {
                geoBarData['nowConfirm'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][1], Math.log(area.nowConfirm + 1)]);
                geoBarData['confirm'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][1], Math.log(area.confirm + 1)]);
                geoBarData['heal'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][1], Math.log(area.heal + 1)]);
                geoBarData['dead'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"][area.name][1], Math.log(area.dead + 1)]);
            }
        });
        geoBarData['nowConfirm'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][1], Math.log(subData.chinaTotal.nowConfirm + 1)]);
        geoBarData['confirm'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][1], Math.log(subData.chinaTotal.confirm + 1)]);
        geoBarData['heal'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][1], Math.log(subData.chinaTotal.heal + 1)]);
        geoBarData['dead'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["WORLD"]['中国'][1], Math.log(subData.chinaTotal.dead + 1)]);
        return geoBarData;
    }
    function trans2GeoBarChinaData(subData) {
        const geoBarData = {
            nowConfirm: [],
            confirm: [],
            heal: [],
            dead: []
        };
        subData.areaTree[0].children.forEach(prov => {
            prov.children.forEach(area => {
                const name = area.name
                    .replace('县', '')
                    .replace('区', '')
                    .replace('市', '');
                if (_coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name]) {
                    geoBarData['nowConfirm'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][1], Math.log(area.total.nowConfirm + 5)]);
                    geoBarData['confirm'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][1], Math.log(area.total.confirm + 5)]);
                    geoBarData['heal'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][1], Math.log(area.total.heal + 5)]);
                    geoBarData['dead'].push([_coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][0], _coordinate__WEBPACK_IMPORTED_MODULE_0__["CHINA"][name][1], Math.log(area.total.dead + 5)]);
                }
            });
        });
        return geoBarData;
    }
    switch (switchMap) {
        case 'china':
            return trans2GeoBarChinaData(data);
        case 'world':
            return trans2GeoBarWorldData(data);
    }
}
function trans2PieChartData(switchArea, data) {
    const result = {
        situation: []
    };
    if (switchArea === 'china') {
        result['situation'].push({ value: data.chinaTotal['nowConfirm'], name: '现存确诊' });
        result['situation'].push({ value: data.chinaTotal['heal'], name: '治愈' });
        result['situation'].push({ value: data.chinaTotal['dead'], name: '死亡' });
    }
    else if (switchArea === 'world') {
        result['situation'].push({ value: data.globalStatis['nowConfirm'], name: '现存确诊' });
        result['situation'].push({ value: data.globalStatis['heal'], name: '治愈' });
        result['situation'].push({ value: data.globalStatis['dead'], name: '死亡' });
    }
    return result;
}


/***/ }),

/***/ "./src/app/utils/translate.ts":
/*!************************************!*\
  !*** ./src/app/utils/translate.ts ***!
  \************************************/
/*! exports provided: COUNTRY_NAME, SIMPLE_WORLD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY_NAME", function() { return COUNTRY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMPLE_WORLD", function() { return SIMPLE_WORLD; });
const COUNTRY_NAME = {
    "阿富汗": "Afghanistan",
    "奥兰群岛": "Aland Islands",
    "阿尔巴尼亚": "Albania",
    "阿尔及利亚": "Algeria",
    "美属萨摩亚": "American Samoa",
    "安道尔": "Andorra",
    "安哥拉": "Angola",
    "安圭拉": "Anguilla",
    "安提瓜和巴布达": "Antigua and Barbuda",
    "阿根廷": "Argentina",
    "亚美尼亚": "Armenia",
    "阿鲁巴": "Aruba",
    "澳大利亚": "Australia",
    "奥地利": "Austria",
    "阿塞拜疆": "Azerbaijan",
    "孟加拉": "Bangladesh",
    "巴林": "Bahrain",
    "巴哈马": "Bahamas",
    "巴巴多斯": "Barbados",
    "白俄罗斯": "Belarus",
    "比利时": "Belgium",
    "伯利兹": "Belize",
    "贝宁": "Benin",
    "百慕大": "Bermuda",
    "不丹": "Bhutan",
    "玻利维亚": "Bolivia",
    "波斯尼亚和黑塞哥维那": "Bosnia and Herzegovina",
    "博茨瓦纳": "Botswana",
    "布维岛": "Bouvet Island",
    "巴西": "Brazil",
    "文莱": "Brunei",
    "保加利亚": "Bulgaria",
    "布基纳法索": "Burkina Faso",
    "布隆迪": "Burundi",
    "柬埔寨": "Cambodia",
    "喀麦隆": "Cameroon",
    "加拿大": "Canada",
    "佛得角": "Cape Verde",
    "中非": "Central African Republic",
    "乍得": "Chad",
    "智利": "Chile",
    "圣诞岛": "Christmas Islands",
    "科科斯（基林）群岛": "Cocos (keeling) Islands",
    "哥伦比亚": "Colombia",
    "科摩罗": "Comoros",
    "刚果（金）": "Congo (Congo-Kinshasa)",
    "刚果": "Congo",
    "库克群岛": "Cook Islands",
    "哥斯达黎加": "Costa Rica",
    "科特迪瓦": "Cote D’Ivoire",
    "中国": "China",
    "克罗地亚": "Croatia",
    "古巴": "Cuba",
    "捷克": "Czech",
    "塞浦路斯": "Cyprus",
    "丹麦": "Denmark",
    "吉布提": "Djibouti",
    "多米尼加": "Dominica",
    "东帝汶": "Timor-Leste",
    "厄瓜多尔": "Ecuador",
    "埃及": "Egypt",
    "赤道几内亚": "Equatorial Guinea",
    "厄立特里亚": "Eritrea",
    "爱沙尼亚": "Estonia",
    "埃塞俄比亚": "Ethiopia",
    "法罗群岛": "Faroe Islands",
    "斐济": "Fiji",
    "芬兰": "Finland",
    "法国": "France",
    "法国大都会": "Franch Metropolitan",
    "法属圭亚那": "Franch Guiana",
    "法属波利尼西亚": "French Polynesia",
    "加蓬": "Gabon",
    "冈比亚": "Gambia",
    "格鲁吉亚": "Georgia",
    "德国": "Germany",
    "加纳": "Ghana",
    "直布罗陀": "Gibraltar",
    "希腊": "Greece",
    "格林纳达": "Grenada",
    "瓜德罗普岛": "Guadeloupe",
    "关岛": "Guam",
    "危地马拉": "Guatemala",
    "根西岛": "Guernsey",
    "几内亚比绍": "Guinea-Bissau",
    "几内亚": "Guinea",
    "圭亚那": "Guyana",
    "香港 （中国）": "Hong Kong",
    "海地": "Haiti",
    "洪都拉斯": "Honduras",
    "匈牙利": "Hungary",
    "冰岛": "Iceland",
    "印度": "India",
    "印度尼西亚": "Indonesia",
    "伊朗": "Iran",
    "伊拉克": "Iraq",
    "爱尔兰": "Ireland",
    "马恩岛": "Isle of Man",
    "以色列": "Israel",
    "意大利": "Italy",
    "牙买加": "Jamaica",
    "日本本土": "Japan",
    "钻石号邮轮": "Japan",
    "泽西岛": "Jersey",
    "约旦": "Jordan",
    "哈萨克斯坦": "Kazakhstan",
    "肯尼亚": "Kenya",
    "基里巴斯": "Kiribati",
    "韩国": "Korea",
    "朝鲜": "Korea (North)",
    "科威特": "Kuwait",
    "吉尔吉斯斯坦": "Kyrgyzstan",
    "老挝": "Laos",
    "拉脱维亚": "Latvia",
    "黎巴嫩": "Lebanon",
    "莱索托": "Lesotho",
    "利比里亚": "Liberia",
    "利比亚": "Libya",
    "列支敦士登": "Liechtenstein",
    "立陶宛": "Lithuania",
    "卢森堡": "Luxembourg",
    "澳门（中国）": "Macau",
    "北马其顿": "Macedonia",
    "马拉维": "Malawi",
    "马来西亚": "Malaysia",
    "马达加斯加": "Madagascar",
    "马尔代夫": "Maldives",
    "马里": "Mali",
    "马耳他": "Malta",
    "马绍尔群岛": "Marshall Islands",
    "马提尼克岛": "Martinique",
    "毛里塔尼亚": "Mauritania",
    "毛里求斯": "Mauritius",
    "马约特": "Mayotte",
    "墨西哥": "Mexico",
    "密克罗尼西亚": "Micronesia",
    "摩尔多瓦": "Moldova",
    "摩纳哥": "Monaco",
    "蒙古": "Mongolia",
    "黑山": "Montenegro",
    "蒙特塞拉特": "Montserrat",
    "摩洛哥": "Morocco",
    "莫桑比克": "Mozambique",
    "缅甸": "Myanmar",
    "纳米比亚": "Namibia",
    "瑙鲁": "Nauru",
    "尼泊尔": "Nepal",
    "荷兰": "Netherlands",
    "新喀里多尼亚": "New Caledonia",
    "新西兰": "New Zealand",
    "尼加拉瓜": "Nicaragua",
    "尼日尔": "Niger",
    "尼日利亚": "Nigeria",
    "纽埃": "Niue",
    "诺福克岛": "Norfolk Island",
    "挪威": "Norway",
    "阿曼": "Oman",
    "巴基斯坦": "Pakistan",
    "帕劳": "Palau",
    "巴勒斯坦": "Palestine",
    "巴拿马": "Panama",
    "巴布亚新几内亚": "Papua New Guinea",
    "巴拉圭": "Paraguay",
    "秘鲁": "Peru",
    "菲律宾": "Philippines",
    "皮特凯恩群岛": "Pitcairn Islands",
    "波兰": "Poland",
    "葡萄牙": "Portugal",
    "波多黎各": "Puerto Rico",
    "卡塔尔": "Qatar",
    "留尼汪岛": "Reunion",
    "罗马尼亚": "Romania",
    "卢旺达": "Rwanda",
    "俄罗斯": "Russia",
    "圣赫勒拿": "Saint Helena",
    "圣基茨和尼维斯": "Saint Kitts-Nevis",
    "圣卢西亚": "Saint Lucia",
    "圣文森特和格林纳丁斯": "Saint Vincent and the Grenadines",
    "萨尔瓦多": "El Salvador",
    "萨摩亚": "Samoa",
    "圣马力诺": "San Marino",
    "圣多美和普林西比": "Sao Tome and Principe",
    "沙特阿拉伯": "Saudi Arabia",
    "塞内加尔": "Senegal",
    "塞舌尔": "Seychelles",
    "塞拉利昂": "Sierra Leone",
    "新加坡": "Singapore",
    "塞尔维亚": "Serbia",
    "斯洛伐克": "Slovakia",
    "斯洛文尼亚": "Slovenia",
    "所罗门群岛": "Solomon Islands",
    "索马里": "Somalia",
    "南非": "South Africa",
    "西班牙": "Spain",
    "斯里兰卡": "Sri Lanka",
    "苏丹": "Sudan",
    "苏里南": "Suriname",
    "斯威士兰": "Swaziland",
    "瑞典": "Sweden",
    "瑞士": "Switzerland",
    "叙利亚": "Syria",
    "塔吉克斯坦": "Tajikistan",
    "坦桑尼亚": "Tanzania",
    "台湾 （中国）": "Taiwan",
    "泰国": "Thailand",
    "特立尼达和多巴哥": "Trinidad and Tobago",
    "多哥": "Togo",
    "托克劳": "Tokelau",
    "汤加": "Tonga",
    "突尼斯": "Tunisia",
    "土耳其": "Turkey",
    "土库曼斯坦": "Turkmenistan",
    "图瓦卢": "Tuvalu",
    "乌干达": "Uganda",
    "乌克兰": "Ukraine",
    "阿联酋": "United Arab Emirates",
    "英国": "United Kingdom",
    "美国": "United States",
    "乌拉圭": "Uruguay",
    "乌兹别克斯坦": "Uzbekistan",
    "瓦努阿图": "Vanuatu",
    "梵蒂冈": "Vatican City",
    "委内瑞拉": "Venezuela",
    "越南": "Vietnam",
    "瓦利斯群岛和富图纳群岛": "Wallis and Futuna",
    "西撒哈拉": "Western Sahara",
    "也门": "Yemen",
    "南斯拉夫": "Yugoslavia",
    "赞比亚": "Zambia",
    "津巴布韦": "Zimbabwe",
};
const SIMPLE_WORLD = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL', 'Georgia': 'GA', 'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA', 'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD', 'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO', 'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH', 'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT', 'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY', 'District of Columbia': 'D.C.', 'Unassigned Location (From Diamond Princess)': 'Unassigned Location (From Diamond Princess)', 'Grand Princess Cruise Ship': 'Grand Princess Cruise Ship', 'Alberta': 'Alberta', 'British Columbia': 'British Columbia', 'Manitoba': 'MB', 'New Brunswick': 'NB', 'Newfoundland and Labrador': 'NL', 'Nova Scotia': 'NS', 'Northwest Territories': 'NT', 'Nunavut': 'NU', 'Ontario': 'ON', 'Prince Edward Island': 'PE', 'Quebec': 'QC', 'Saskatchewan': 'SK', 'Yukon': 'YT',
    'Andorra': 'AD',
    'United Arab Emirates': 'AE',
    'Afghanistan': 'AF',
    'Antigua and Barbuda': 'AG',
    'Anguilla': 'AI',
    'Albania': 'AL',
    'Armenia': 'AM',
    'Angola': 'AO',
    'Argentina': 'AR',
    'Austria': 'AT',
    'Australia': 'AU',
    'Bhutan': 'BT',
    'Dominica': 'DM',
    'Azerbaijan': 'AZ',
    'Barbados': 'BB',
    'Bangladesh': 'BD',
    'Belgium': 'BE',
    'Burkina-faso': 'BF',
    'Bulgaria': 'BG',
    'Bahrain': 'BH',
    'Burundi': 'BI',
    'Benin': 'BJ',
    'Palestine': 'BL',
    'Bermuda Is.': 'BM',
    'Brunei': 'BN',
    'Bolivia': 'BO',
    'Brazil': 'BR',
    'Bahamas': 'BS',
    'Botswana': 'BW',
    'Belarus': 'BY',
    'Belize': 'BZ',
    'Canada': 'CA',
    'Central African Republic': 'CF',
    'Congo': 'CG',
    'Switzerland': 'CH',
    'Cook Is.': 'CK',
    'Chile': 'CL',
    'Cameroon': 'CM',
    'China': 'CN',
    'Colombia': 'CO',
    'Costa Rica': 'CR',
    'Czech': 'CS',
    'Cuba': 'CU',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Germany': 'DE',
    'Djibouti': 'DJ',
    'Denmark': 'DK',
    'Dominica Rep.': 'DO',
    'Algeria': 'DZ',
    'Ecuador': 'EC',
    'Estonia': 'EE',
    'Egypt': 'EG',
    'Spain': 'ES',
    'Ethiopia': 'ET',
    'Finland': 'FI',
    'Fiji': 'FJ',
    'France': 'FR',
    'Gabon': 'GA',
    'United Kingdom': 'UK',
    'Grenada': 'GD',
    'French Guiana': 'GF',
    'Ghana': 'GH',
    'Gibraltar': 'GI',
    'Gambia': 'GM',
    'Guinea': 'GN',
    'Greece': 'GR',
    'Guatemala': 'GT',
    'Guam': 'GU',
    'Guyana': 'GY',
    'Hongkong': 'HK',
    'Honduras': 'HN',
    'Haiti': 'HT',
    'Hungary': 'HU',
    'Indonesia': 'ID',
    'Ireland': 'IE',
    'Israel': 'IL',
    'India': 'IN',
    'Iraq': 'IQ',
    'Iran': 'IR',
    'Iceland': 'IS',
    'Italy': 'IT',
    'Jamaica': 'JM',
    'Jordan': 'JO',
    'Japan': 'JP',
    'Kenya': 'KE',
    'Kyrgyzstan': 'KG',
    'Cambodia': 'KH',
    'North Korea': 'KP',
    'Korea': 'KR',
    'Republic of Ivory Coast': 'KT',
    'Kuwait': 'KW',
    'Kazakstan': 'KZ',
    'Laos': 'LA',
    'Lebanon': 'LB',
    'St.Lucia': 'LC',
    'Liechtenstein': 'LI',
    'Sri Lanka': 'LK',
    'Liberia': 'LR',
    'Lesotho': 'LS',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Latvia': 'LV',
    'Libya': 'LY',
    'Morocco': 'MA',
    'Monaco': 'MC',
    'Moldova Republic of': 'MD',
    'Madagascar': 'MG',
    'Mali': 'ML',
    'Burma': 'MM',
    'Mongolia': 'MN',
    'Macao': 'MO',
    'Croatia': 'HR',
    'Montserrat Is': 'MS',
    'Malta': 'MT',
    'Mauritius': 'MU',
    'Maldives': 'MV',
    'Malawi': 'MW',
    'Mexico': 'MX',
    'Malaysia': 'MY',
    'Mozambique': 'MZ',
    'Niger': 'NE',
    'Nigeria': 'NG',
    'Nicaragua': 'NI',
    'Netherlands': 'NL',
    'Norway': 'NO',
    'Nepal': 'NP',
    'Nauru': 'NR',
    'New Zealand': 'NZ',
    'Oman': 'OM',
    'Panama': 'PA',
    'Peru': 'PE',
    'French Polynesia': 'PF',
    'Papua New Cuinea': 'PG',
    'Philippines': 'PH',
    'Pakistan': 'PK',
    'Poland': 'PL',
    'Puerto Rico': 'PR',
    'Portugal': 'PT',
    'Paraguay': 'PY',
    'Qatar': 'QA',
    'Romania': 'RO',
    'Russia': 'RU',
    'Saudi Arabia': 'SA',
    'Solomon Is': 'SB',
    'Seychelles': 'SC',
    'Sudan': 'SD',
    'Sweden': 'SE',
    'Singapore': 'SG',
    'Slovenia': 'SI',
    'Slovakia': 'SK',
    'Sierra Leone': 'SL',
    'San Marino': 'SM',
    'Senegal': 'SN',
    'Somali': 'SO',
    'Suriname': 'SR',
    'Sao Tome and Principe': 'ST',
    'EI Salvador': 'SV',
    'Syria': 'SY',
    'Swaziland': 'SZ',
    'Chad': 'TD',
    'Togo': 'TG',
    'Thailand': 'TH',
    'Tajikstan': 'TJ',
    'Turkmenistan': 'TM',
    'Tunisia': 'TN',
    'Tonga': 'TO',
    'Turkey': 'TR',
    'Trinidad and Tobago': 'TT',
    'Taiwan': 'TW',
    'Tanzania': 'TZ',
    'Ukraine': 'UA',
    'Uganda': 'UG',
    'United States': 'US',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Saint Vincent': 'VC',
    'Venezuela': 'VE',
    'Vietnam': 'VN',
    'Yemen': 'YE',
    'Yugoslavia': 'YU',
    'South Africa': 'ZA',
    'Zambia': 'ZM',
    'Zaire': 'ZR',
    'Zimbabwe': 'ZW'
};


/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: concatObject, getDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatObject", function() { return concatObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
function concatObject(obj1, obj2) {
    // tslint:disable-next-line:forin
    for (const i in obj2) {
        obj1[i] = obj2[i];
    }
}
function getDate() {
    // 获取今日日期
    const today = new Date().toLocaleDateString().split('/');
    const temp = [];
    temp.push(today[1]);
    temp.push(today[2]);
    const result = [];
    temp.forEach(e => {
        if (Number(e) < 10) {
            result.push('0' + e);
        }
        else {
            result.push('' + e);
        }
    });
    return result.join('.');
}


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

module.exports = __webpack_require__(/*! C:\Users\arcti\Desktop\Angular\COVID-19\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map