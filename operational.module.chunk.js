webpackJsonp(["operational.module"],{

/***/ "../../../../../src/app/main/operational/add-bot/add-bot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-bot-popup{\n    position: absolute;\n    height:115px;\n    width:  165px;\n    z-index: 1;\n    overflow: hidden;\n    border-radius: 2px;\n}\n\n.btn-done{\n    width: 100%;\n    height: 22px;\n    line-height: 22px;\n}\n\n.add-bot-title.up{\n    border-bottom: 1px solid #CCC;\n    margin-bottom: 4px;\n}\n\n.add-bot-title{\n    height: 25px;\n    line-height: 25px;\n    font-size: 12px;\n    text-align: center;\n}\n\n.add-bot-field{\n    width: 50px;\n    height: 27px;\n    margin: 3px 9px;\n    text-align: center;\n    font-size: 20px;\n}\n\ninput.error{\n    background: #ff00003b;\n    border-color: #ff00003b;\n    color: red;\n}\n\n.disabled{\n    color: gray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/add-bot/add-bot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-bot-popup\">\n  <div class=\"add-bot-title up\">Spin More Bots</div>\n  <div class=\"flex flex-align-center flex-justify-center\">\n\n    <div>\n      <mat-icon class=\"pointer\" [ngClass]=\"{'disabled': (botsAdded==0)}\" (click)=\"updateBot('-')\">remove_circle_outline</mat-icon>\n    </div>\n\n    <div>\n      <input disabled class=\"add-bot-field\" [ngClass]=\"{'error': (availableBots==0)}\" type=\"text\" [ngModel]=\"botsAdded\">\n    </div>\n\n    <div>\n      <mat-icon class=\"pointer\" [ngClass]=\"{'disabled': (availableBots==0)}\" (click)=\"updateBot('+')\">add_circle_outline</mat-icon>\n    </div>\n\n  </div>\n  <div class=\"add-bot-title\">Available Bots {{availableBots}}</div>\n  <div>\n    <button class=\"btn-done\" mat-button (click)=\"saveBots()\" ng-disabled=\"isSaving\">Done</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/operational/add-bot/add-bot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddBotComponent = /** @class */ (function () {
    function AddBotComponent(_workItemService) {
        this._workItemService = _workItemService;
        this.isSaving = false;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.availableBots = 0;
        this.botsAdded = 0;
        this._wasInside = false;
    }
    AddBotComponent.prototype.clickInside = function () {
        this._wasInside = true;
    };
    AddBotComponent.prototype.clickout = function (ev) {
        if (!this._wasInside
            && !ev.target.classList.contains('bots-label')
            && ev.target.nodeName != 'MAT-ICON') {
            this.onClose.emit(true);
            return;
        }
        this._wasInside = false;
    };
    AddBotComponent.prototype.ngOnInit = function () {
    };
    AddBotComponent.prototype.updateBot = function (type) {
        if (type == '-') {
            if (this.botsAdded - 1 < 0) {
                return;
            }
            this.botsAdded--;
            this.availableBots++;
            return;
        }
        if (type == '+') {
            if (this.availableBots <= 0) {
                return;
            }
            this.botsAdded++;
            this.availableBots--;
        }
    };
    AddBotComponent.prototype.saveBots = function () {
        var _this = this;
        this.isSaving = true;
        this._workItemService.updateBotsForWorkItem({
            processKey: this.processKey,
            qty: this.botsAdded
        }).subscribe(function (data) {
            _this.isSaving = false;
            _this.onClose.emit(true);
        }, function (error) {
            _this.isSaving = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddBotComponent.prototype, "onClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('availableBots'),
        __metadata("design:type", Number)
    ], AddBotComponent.prototype, "availableBots", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('botsAdded'),
        __metadata("design:type", Number)
    ], AddBotComponent.prototype, "botsAdded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('id'),
        __metadata("design:type", String)
    ], AddBotComponent.prototype, "processKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AddBotComponent.prototype, "clickInside", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AddBotComponent.prototype, "clickout", null);
    AddBotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-bot',
            template: __webpack_require__("../../../../../src/app/main/operational/add-bot/add-bot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/add-bot/add-bot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */]])
    ], AddBotComponent);
    return AddBotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dash-rightSidebar\" *ngIf=\"booleanActive\">\n  <div class=\"work-item-sec\">\n    <ul>\n      <li>\n     \n        <div class=\"work-item-box\">\n          <div class=\"row\">\n           \n            <div class=\"col-sm-2\" >\n              <div class=\"counter\">{{(index + 1)}}</div>\n              <div class=\"title-headnig-metdata procname\">\n                <ng-container>\n                    <span class=\"metadata-key\">{{workItem.metadata.key}}</span>\n                 <span  matTooltip= \"{{workItem.metadata.value}}\" matTooltipPosition=\"above\" matTooltipClass=\"toolt\" class=\"metadata-value\">{{workItem.metadata.value}}</span>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"col-sm-10 lisize\">\n              <div class=\"active-inactive-sec\">\n                <ul class=\"ulist\" [ngClass]=\"{'waiting-status' : (workItem && workItem.status == 'WAITING' ),'notindexed-status':(workItem && workItem.status == 'NOT_INDEXED'),'indexed-status':(workItem && workItem.status == 'INDEXED')}\">\n                  <ng-container *ngFor=\"let record of workItem.metrics; let i = index;\">\n                    <li class=\"col-md-2\" (click)=\"workItem.sourceId!='NA' && workItem.status != 'NOT_INDEXED' && workItem.status != 'INDEXED' && record.clickable\"\n                      *ngIf=\"record.key == 'dropCount' ||record.key == 'totalRecords' || record.key == 'totalProcessed'  || record.key== 'totalFailed' || record.key == 'totalAwaiting'\"\n                      [ngClass]=\"{'plain-error-value' : record.key == 'totalFailed' }\">\n                      <span matTooltip= \"{{ getFormattedValue(record.key) }}\" matTooltipPosition=\"above\" matTooltipClass=\"toolt\" class=\"dot-circle\" [ngClass]=\"{'dot-circle-count':record.key=='dropCount','dot-circle-success':record.key=='totalProcessed','dot-circle-error':record.key=='totalFailed','dot-circle-warning':record.key == 'totalAwaiting'}\"></span>\n                      <span> {{(workItem.sourceId=='NA' ||\n                        workItem.status == 'NOT_INDEXED' || workItem.status == 'INDEXED' || !record.value || record.value == '-') ? '0' :\n                        record.value | formatcount}}</span>\n                    </li>\n                  </ng-container>\n                </ul>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"progress progress-bar-striped\">\n            <div class=\"running-text\">{{calcProgress(workItem.metrics)}} %\n              \n            </div>\n            <div class=\"progress-bar\" [ngClass]=\"{'highlight-green' : (workItem && workItem.statusColor == 'ACTIVE_FLOWING' ),'highlight-yellow':(workItem && workItem.statusColor == 'ACTIVE_SLOW'),'highlight-white':(workItem && workItem.statusColor == 'INACTIVE'),'highlight-darkgrey' : (workItem && workItem.statusColor == 'INDEXED' ),'highlight-darkgrey' : (workItem && workItem.statusColor == 'NOT_INDEXED' ),'highlight-black' : (workItem && workItem.statusColor == 'FEATURE_OFFLINE' ),'highlight-red' : (workItem && workItem.statusColor == 'ACTIVE_NOT_FLOWING' )}\"\n              [style.width.%]=\"calcProgress(workItem.metrics)\"></div>\n          </div>\n         \n        </div>\n        \n      </li>\n\n      <div class=\"Process-time-sec row padding-margin-0\">\n        <ul>\n          <li class=\"col-sm-3\">\n              <div class=\"procname\" matTooltip= \"{{workItem.displayName}}\" matTooltipPosition=\"above\" matTooltipClass=\"toolt\"> {{workItem.displayName}} </div>\n          </li>\n          <li class=\"bottom2-sec\">\n            Started: &nbsp;\n            \n\n            <span class=\"started-value started-sec metadata-value\" [ngClass]=\"{'waiting-color' :  (workItem && workItem.status == 'WAITING')}\">\n              {{(workItem.tmStarted ?  workItem.tmStarted :\n              '-')}}\n            </span>\n            <span class=\"time-sec\">\n                <ng-container class=\"pull-right\" *ngFor=\"let record of workItem.metrics; let i = index;\">\n                  \n                  <li *ngIf=\"record.key =='avgProcessingTime'\" (click)=\"workItem.sourceId!='NA' && workItem.status != 'NOT_INDEXED' && workItem.status != 'INDEXED' && record.clickable && openWorkItemDetail(record.key)\">Avg\n                    Time/Record:<span class=\"metadata-value\"> &nbsp;{{(workItem.sourceId=='NA' || workItem.status== 'NOT_INDEXED' ||\n                      workItem.status ==\n                      'INDEXED' || !record.value || record.value == '-') ? '0' : record.value | formatcount}}</span></li>\n                </ng-container>\n            </span>\n          </li>\n        </ul>\n      </div>\n\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-item-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 2% 0%;\n  height: 48px; }\n\n.index {\n  width: 25px;\n  height: 25px;\n  border-radius: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 12px;\n  z-index: 2;\n  margin-left: 12px; }\n\n.bots {\n  padding: 0 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.bots-label {\n  text-decoration: none; }\n\n.bots-label mat-icon {\n  font-size: 12px; }\n\n.source-list-wrapper {\n  overflow: auto; }\n\napp-item-record {\n  display: block;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out; }\n\nhr {\n  width: 94%;\n  /* border-width: 0.5px; */\n  /* border-style: solid;\n    margin-left: 52px;\n    margin-right: 30px;\n    height: 1px; */\n  margin: 0 auto; }\n\n.view-link-wrapper {\n  padding-left: 20px; }\n\na:hover {\n  color: #358CD5;\n  text-decoration: underline; }\n\n.highlight-darkgrey {\n  background-color: #636574 !important; }\n\n.highlight-green {\n  /* background-color: #548235 !important; */\n  background-color: #508b11 !important; }\n\n.highlight-red {\n  background-color: #f56464 !important; }\n\n.highlight-yellow {\n  background-color: #ffc000 !important; }\n\n.highlight-blue {\n  background-color: #4a90e2 !important; }\n\n.highlight-black {\n  background-color: #000000 !important; }\n\n.highlight-white {\n  background-color: #d9d9d9 !important; }\n\n.work-item-sec ul {\n  margin: 0px;\n  padding: 0px; }\n\n.pointer {\n  display: inline-block; }\n\n.work-item-sec ul li {\n  list-style: none;\n  /* padding: 0.8rem; */\n  padding: 0;\n  margin-bottom: 0.1rem;\n  /* display:none; */ }\n\n.work-item-sec ul li .counter {\n  /* background-color: #35343e; */\n  background-color: #2a303f;\n  color: #fff;\n  /* padding: 0.1rem 0.6rem; */\n  padding: 0.3rem 0.6rem;\n  float: left;\n  width: 10%;\n  opacity: 0.6; }\n\n.active-inactive-sec > li {\n  display: none; }\n\n.active-inactive-sec > li .pointer {\n  display: inline-block; }\n\n.title-headnig {\n  /* font-size: 1rem; */\n  color: #fff;\n  float: left;\n  margin-left: 0.4rem;\n  margin-top: 1px;\n  width: 88%; }\n\n.procname {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  /* width:85%; */\n  color: #ffffff;\n  padding-top: 3px;\n  font-size: 12px; }\n\n.procnamemeta {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 79%;\n  float: left; }\n\n.title-headnig .fa {\n  margin-right: 0.5rem; }\n\n.title-headnig span {\n  color: #858490;\n  font-size: 0.8rem;\n  margin-left: 0.5rem; }\n\n.running {\n  color: #858490;\n  font-size: 1rem;\n  text-align: right;\n  margin-top: 4px;\n  margin-right: 0.8rem; }\n\n.running span {\n  color: #fff;\n  font-size: 16px; }\n\n.title-headnig-metdata {\n  color: #858490;\n  font-size: 12px;\n  padding-top: 3px; }\n\n.material-icons {\n  /* font-family: 'Material Icons'; */\n  font-weight: normal;\n  font-style: normal;\n  font-size: 19px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n.work-item-box {\n  /* border:solid 1px #35343e; */\n  /* padding-top: 0.5rem; */\n  border: solid 1px #282B49;\n  padding: 0; }\n\n.work-item-box .progress {\n  background-color: #35343e;\n  border-radius: 0px;\n  position: relative;\n  /* margin-top: 0.5rem; */\n  height: 1.4rem;\n  margin-top: 0 !important; }\n\n.progress {\n  margin-bottom: 0px !important; }\n\n.work-item-box .progress .running-text {\n  position: absolute;\n  z-index: 5;\n  right: 2rem;\n  top: 0px;\n  color: #ffffff;\n  font-size: 1rem; }\n\n.work-item-box .progress-bar-striped {\n  background-image: linear-gradient(-45deg, #3a3943 25%, transparent 25%, transparent 50%, #3a3943 50%, #3a3943 75%, transparent 75%, transparent);\n  background-size: 2rem 2rem; }\n\n.work-item-box .progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #898989;\n  -webkit-transition: width .6s ease;\n  transition: width .6s ease; }\n\n.work-item-box .active-inactive-sec ul {\n  margin: 0px;\n  text-align: right; }\n\n.active-inactive-sec .dot-circle {\n  height: 11px;\n  width: 11px;\n  margin-top: -2px;\n  /* background-color: #bbb; */\n  background-color: #605e80;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle; }\n\n.dot-circle-success {\n  /* background-color:green !important; */\n  background-color: #508b11 !important; }\n\n.dot-circle-count {\n  background-color: orange !important; }\n\n.dot-circle-error {\n  /* background-color:red !important; */\n  background-color: #f56464 !important; }\n\n.dot-circle-warning {\n  background-color: yellow !important; }\n\n.work-item-box .active-inactive-sec li {\n  display: inline-block;\n  list-style: none;\n  color: #fff;\n  font-size: 1rem;\n  border: none;\n  margin: 0;\n  padding: 0;\n  float: right; }\n\n.Process-time-sec ul {\n  padding: 0px;\n  background-color: transparent;\n  margin: 0px; }\n\n.Process-time-sec li {\n  display: inline-block;\n  list-style: none;\n  padding: 0px;\n  border: none;\n  /* font-size: 1rem; */\n  font-size: 10px;\n  color: #9c9c9c; }\n\n.Process-time-sec li span {\n  color: #ffffff; }\n\n.dash-rightSidebar {\n  /* background-color:#4b4a5b; */\n  background-color: #283343;\n  /* border-left: solid 1px #5d5c6b; */\n  /* box-shadow: 0 2px 15px 1px rgba(0, 0, 0, 0.2); */\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-top: 15px !important; }\n\n.dash-rightSidebar h2 {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #fff;\n  border-bottom: solid 1px #5d5c6b;\n  margin: 0px;\n  height: 50px;\n  padding: 0.9rem 0.8rem 1rem 0.8rem; }\n\n.dash-rightSidebar h2 span {\n  display: inline-block;\n  text-align: center;\n  width: 30px;\n  border-radius: 50%;\n  height: 30px;\n  color: #75747d;\n  background-color: #3c3b48;\n  float: right;\n  top: -4px;\n  position: relative;\n  line-height: 28px; }\n\n.dash-rightSidebar .noitem-message {\n  text-align: center;\n  padding-top: 100px;\n  color: #fff; }\n\n.metadata-key {\n  font-size: 11px;\n  font-weight: bold;\n  color: #747474;\n  padding: 4px 0 1px 6px; }\n\n.metadata-value {\n  opacity: 0.9;\n  font-size: 10px;\n  /* font-weight: bold; */\n  text-align: center;\n  color: #ffffff; }\n\n.padding-margin-0 {\n  padding: 0 2px;\n  margin: 0; }\n\n.started-sec {\n  border-right: 1px solid #979797;\n  padding-right: 5px; }\n\n.time-txt {\n  padding-left: 8px; }\n\n.time-sec {\n  padding-left: 5px; }\n\n/deep/.toolt {\n  background: #171a20 !important;\n  color: #ffffff !important; }\n\n.lisize {\n  padding-top: 6px; }\n\n.ulist {\n  text-align: left !important;\n  /* padding-left:10px; */ }\n\n.bottom2-sec {\n  float: right;\n  padding-top: 4px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(_router, _workitemService) {
        this._router = _router;
        this._workitemService = _workitemService;
        this.isShowAddBot = false;
        this.sourceMetadataKeys = [];
        this.sourceDisplayLimit = 1;
        this.showAllSource = false;
        this.isPendingExists = false;
        this.count = 0;
        this.total_processed = 0;
        this.total_failed = 0;
        this.total_records = 0;
        this.grand_Total = 50;
        this.percent_total = "50";
        this.SecondsTohhmmss = function (totalSeconds) {
            var hours = Math.floor(totalSeconds / 3600);
            var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
            var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
            seconds = Math.round(seconds * 100) / 100;
            var result = (hours > 0 ? hours + "h:" : '');
            result += (minutes > 0 ? minutes + "m:" : '');
            result += (seconds > 0 ? seconds < 10 && seconds >= 1 ? "0" + seconds + "s:" : seconds + "s:" : seconds == 0 ? "0s:" : seconds + "s:");
            return result.trim().slice(0, -1);
        };
    }
    Object.defineProperty(ListItemComponent.prototype, "workItems", {
        set: function (workItem) {
            if (workItem) {
                this.workItem = workItem;
                this.workItem["ETA"] = this.SecondsTohhmmss(Math.round(this.workItem["ETA"]));
                // this.workItem.tmStarted = workItem.tmStarted ? moment.utc(workItem.tmStarted,"YYYY-MM-DD HH").format('YYYY-MMM-DD h:mm A') : 'Waiting';
                this.sourceMetadataKeys = Object.keys(workItem.metadata);
                // this.workItem.tmStarted = workItem.tmStarted ? moment.utc(workItem.tmStarted,"YYYY-MM-DD HH").format('YYYY-MMM-DD h:mm A') : 'Waiting';
                // this.sourceMetadataKeys =this._itemRecord.hppread_key;
                // this.workItem["tmStarted"] = workItem.source[0]["tmStarted"] ? moment.utc(workItem.source[0]["tmStarted"]).local().fromNow() : 'Waiting';
                // this.workItem.tmStarted = workItem.tmStarted ? moment.utc(workItem.tmStarted).local().fromNow() : 'Waiting';
                // this.sourceMetadataKeys = Object.keys(workItem.metadata);
                // var metakeys = Object.keys(this.workItem["source"][0].metadata);
                // for(var i=0;i<metakeys.length;i++){
                //   this.workItem["metadata"].push({"key":metakeys[i],"name":this.workItem["source"][0].metadata[metakeys[i]]});
                // }
                //  this.workItem["metadata"][0].name= this.workItem["metadata"][0].name ? moment.utc(this.workItem["metadata"][0].name).local().fromNow() : 'Waiting';
                // this.sourceMetadataKeys = Object.keys(record.metadata);
                // this.sourceMetadataKeys =this._itemRecord.head_key;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booleanActive = true;
        this.isPendingExists = __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */].checkIfPendingExists(this.workItem);
        this.workItem.metrics.forEach(function (obj) {
            if (obj["key"] == 'totalRecords') {
                _this.total_records = obj["value"];
            }
            else if (obj["key"] == 'totalProcessed') {
                _this.total_processed = obj["value"];
            }
            else if (obj["key"] == 'totalFailed') {
                _this.total_failed = obj["value"];
            }
        });
        this.grand_Total = ((this.total_processed + this.total_failed) / this.total_records) * 100;
    };
    ListItemComponent.prototype.calcProgress = function (metrics) {
        var total, processed, failed;
        for (var i = 0; i < metrics.length; i++) {
            if (metrics[i].key === 'totalRecords') {
                total = metrics[i].value;
            }
            if (metrics[i].key === 'totalProcessed') {
                processed = metrics[i].value;
            }
            if (metrics[i].key === 'totalFailed') {
                failed = metrics[i].value;
            }
        }
        if (total == "-" || total == "")
            total = 0;
        if (processed == "-" || processed == "")
            processed = 0;
        if (failed == "-" || failed == "")
            failed = 0;
        if (isNaN(total))
            total = 0;
        if (isNaN(processed))
            processed = 0;
        if (isNaN(failed))
            failed = 0;
        if (total == 0) {
            return 0;
        }
        var per = ((100 * (parseInt(processed) + parseInt(failed))) / parseInt(total));
        //  var per = ((100 * ((parseInt(processed) + parseInt(failed)))) / parseInt(total));
        if (isNaN(per)) {
            per = 0;
        }
        return per.toFixed(0);
    };
    ListItemComponent.prototype.closeAddBot = function (isClosed) {
        this.isShowAddBot = !isClosed;
    };
    ListItemComponent.prototype.openWorkItemDetail = function (key) {
        var queryParam = {};
        if (key) {
            queryParam = {
                queryParams: {
                    filter: key
                }
            };
        }
        if (this.workItem.sourceId == "NA") {
            return;
        }
        this._router.navigate(['app/operational/work-item/', this.workItem.sourceId, this.workItem.processName], queryParam);
    };
    // public limitSourceList() {
    //   this.sourceDisplayLimit = this.workItem.result.length && this.workItem.source.length > 1 ? 1 : this.workItem.source.length;
    //   this.showAllSource = false;
    // }
    // public viewAllSourceList() {
    //   this.sourceDisplayLimit = this.workItem.source.length;
    //   this.showAllSource = true;
    // }
    ListItemComponent.prototype.openProcess = function () {
        this._router.navigate(['app', 'processes', this.workItem.key]);
    };
    ListItemComponent.prototype.getFormattedValue = function (key) {
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('index'),
        __metadata("design:type", Number)
    ], ListItemComponent.prototype, "ww", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('booleanActive'),
        __metadata("design:type", Boolean)
    ], ListItemComponent.prototype, "booleanActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('index'),
        __metadata("design:type", Number)
    ], ListItemComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('workItem'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListItemComponent.prototype, "workItems", null);
    ListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__("../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"operational-dash\" id=\"operational-dashboard\">\n  <div class=\"operational-div\" [ngClass]=\"{'dash-wrapper':!subway ,'dash-wrappersubway':subway}\"\n    *ngIf=\"subwayDashboard\">\n    <div class=\"subway-map-new-filter-select\" *ngIf=\"true\">\n      <div class=\"filder-div\">\n\n\n        <span class=\"show-legend hand-position hand\" (click)=\"showLegend()\"> Show Legend</span>\n        <!-- <button style=\"display: none\" id=\"toggleid\" (click)=\"toggle($event)\" class=\"show-legend hand\">\n            Toggle sidenav</button> -->\n        <span class=\"position-relation\"></span>\n        <span class=\"apply-filter-symbol\" *ngIf=\"selectedStatus.length > 0\"></span>\n        <img src=\"assets/images/filter.png\" alt=\"filter-image\" class=\"filter-icon hand\" (click)=\"showFilters()\">\n        <span class=\"show-legend hand\" (click)=\"showDatewise('days',-1)\"\n          [ngClass]=\"{'active': (ddSelected == '-1')}\">Today</span>\n        <span class=\"show-legend hand\" (click)=\"showDatewise('days',2)\" [ngClass]=\"{'active': (ddSelected == '2')}\">Last\n          2 Days</span>\n        <span class=\"show-legend hand\" (click)=\"showDatewise('days',5)\" [ngClass]=\"{'active': (ddSelected == '5')}\">Last\n          5 Days</span>\n        <span class=\"show-legend hand\" (click)=\"showDatewise('days',7)\" [ngClass]=\"{'active': (ddSelected == '7')}\">Last\n          7 Days</span>\n        <span class=\"show-legend hand\" (click)=\"showCustomdate(0)\"\n          [ngClass]=\"{'active1': (customactive == '0')}\">Custom</span>\n      </div>\n\n      <!-- show legend -->\n      <div class=\"legend-box\" *ngIf=\"showLegendBox\">\n        <div class=\"row\">\n          <div class=\"col-lg-8\">\n            <div class=\"legend-head\">Processes Performance</div>\n            <div class=\"row\">\n              <div class=\"col-lg-4 legend-status \">\n                <img class=\"processes-icon gif_radius\" src=\"../assets/images/loader.gif\" alt=\"img\" />\n                <span class=\"status-desc\">Initiated, waiting</span>\n              </div>\n              <div class=\"col-lg-4 legend-status\">\n                <img class=\"processes-icon\" src=\"../assets/images/active- issues.png\" alt=\"img\" />\n                <span class=\"status-desc\">Active, issues</span>\n              </div>\n              <div class=\"col-lg-4 legend-status\">\n                <img class=\"processes-icon\" src=\"../assets/images/active-acceptable.png\" alt=\"img\" />\n                <span class=\"status-desc\">Active, acceptable</span>\n              </div>\n              <div class=\"col-lg-4 legend-status\">\n                <img class=\"processes-icon\" src=\"../assets/images/active-average.png\" alt=\"img\" />\n                <span class=\"status-desc\">Active, average</span>\n              </div>\n              <div class=\"col-lg-4 legend-status\">\n                <img class=\"processes-icon\" src=\"../assets/images/inactive.png\" alt=\"img\" />\n                <span class=\"status-desc\">Inactive</span>\n              </div>\n              <div class=\"col-lg-4 legend-status\">\n                <img class=\"processes-icon\" src=\"../assets/images/not-automated.png\" alt=\"img\" />\n                <span class=\"status-desc\">Not Automated</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 bots-health\">\n            <div class=\"legend-head\">Bots Health</div>\n            <div class=\"un-healthy\">\n              <span><img src=\"../assets/images/bitmapred.png\" alt=\"\" /></span>\n              <span class=\"status-desc\">Unhealthy</span>\n            </div>\n            <div>\n              <span><img src=\"../assets/images/bitmapgreen.png\" alt=\"\" /></span>\n              <span class=\"status-desc\">Healthy</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"customDateMenu\" *ngIf=\"showcustomBox\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <mat-form-field>\n              <input [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"fromDate\" matInput placeholder=\"From\">\n              <mat-icon matSuffix [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" class=\"hand\">date_range</mat-icon>\n            </mat-form-field>\n            <owl-date-time #dt1></owl-date-time>\n          </div>\n          <div class=\"col-md-6\">\n            <mat-form-field>\n              <input [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [(ngModel)]=\"toDate\" matInput placeholder=\"To\">\n              <mat-icon matSuffix [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" class=\"hand\">date_range</mat-icon>\n            </mat-form-field>\n            <owl-date-time #dt2></owl-date-time>\n          </div>\n        </div>\n        <div class=\"row custom-data\">\n          <button type=\"button\" [disabled]=\"!fromDate || !toDate\" class=\"btn btn-primary send\"\n            (click)=\"sendDate(fromDate,toDate)\">Apply</button>\n          <button type=\"button\" class=\"btn btn-primary cancel\" (click)=\"closeCustomBox()\">Cancel</button>\n        </div>\n      </div>\n      <!-- show filters -->\n      <div (mouseleave)=\"showfilterBox=false;\">\n        <ul class=\"filter-dropdown-menu\" *ngIf=\"showfilterBox\">\n          <li class=\"all-cases\">\n            <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"allcases\" [checked]=\"checkedAll\"\n              (click)=\"toggleselection('All')\">\n            <span class=\"hand process-name\" (click)=\"toggleselection('All')\">All</span></li>\n          <li *ngFor=\"let item of participants \">\n            <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"{{item.name}}\"\n              [checked]=\"selectedStatus.indexOf(item.name)>-1\" (click)=\"toggleselection(item.name)\">\n            <span class=\"hand process-name\" (click)=\"toggleselection(item.name)\">{{item.name}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"map-div\" *ngIf=\"participants.length > 0\">\n      <div *ngFor=\"let item of temporaryList;let idx=index;first as isFirst\">\n        <mat-accordion>\n          <mat-expansion-panel (keydown)=\"handleSpacebar($event)\" (click)=\"$event.stopPropagation();\" [expanded]=\"idx.expanded || isFirst\" #matExpansionPanel>\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"justify\">\n                <div class=\"align_center\">\n                    <em *ngIf=\"!matExpansionPanel.expanded\" class=\"material-icons arrow_icon\">\n                        arrow_right\n                      </em>\n                      <em *ngIf=\"matExpansionPanel.expanded\" class=\"material-icons arrow_icon\">\n                        arrow_drop_down\n                      </em>\n                      <span class=\"subway_name hand\">{{item.name}}</span>\n                      <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\n\n                </div>\n                <div (click)=\"$event.stopPropagation(togglePanel($event,idx));\" class=\"zomm_filter\">\n                  <mat-form-field (click)=\"change()\">\n                    <mat-select (ngModelChange)=\"cliamSelected($event,data)\" placeholder=\"Workitem Types\"\n                      name=\"Select\" [(ngModel)]=\"selected[idx]\" multiple #selectionModel=\"ngModel\">\n                      <app-selectall [model]=\"selectionModel\" [values]=\"options\">\n                      </app-selectall>\n                      <hr>\n                      <input type=\"text\" class=\"subway-viewer-search-field\" placeholder=\"Search\"\n                        [(ngModel)]=\"searchProcess\" (ngModelChange)=\"valuechange($event)\">\n                      <i class=\"fa fa-search subway-viewer-search-icon\"></i>\n                      <mat-option *ngFor=\"let option of options |filterproc :searchProcess;\" [value]=\"option\">\n                        {{option}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <button mat-icon-button (click)=\"$event.stopPropagation(togglePanel($event,idx));zoomOut(idx)\">\n                    <em class=\"material-icons plus-icon minimize-icon\" [ngClass]=\"{'active-btn': hoverInd == idx && minimize }\"\n                      (click)=\"minimize= true;zoom_out=false;add=false;\">minimize</em>\n                  </button>\n                  <button mat-icon-button (click)=\"$event.stopPropagation(togglePanel($event,idx));zoomReset(idx)\">\n                    <em class=\"material-icons plus-icon\" [ngClass]=\"{'active-btn': hoverInd == idx && zoom_out}\"\n                      (click)=\"minimize= false;zoom_out=true;add=false;\">zoom_out</em>\n                  </button>\n                  <button mat-icon-button (click)=\"$event.stopPropagation(togglePanel($event,idx));zoomIn(idx)\">\n                    <em class=\"material-icons plus-icon\" [ngClass]=\"{'active-btn': hoverInd == idx && add}\"\n                      (click)=\"minimize= false;zoom_out=false;add=true;\">add</em>\n                  </button>\n                </div>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <app-subway-viewer *ngIf=\"workItems\" #subway [overlaydata]=\"subwayMap.result.subway_map\"\n              [bpmn_id]=\"item.name\" [xmlData]=\"item.bpmn\" name=\"item.name\">\n            </app-subway-viewer>\n          </mat-expansion-panel>\n        </mat-accordion>\n      </div>\n    </div>\n    <div class=\"map-div\" *ngIf=\"isProcesses\">\n      <p class=\"contentLob\">Loading Processes Please wait....</p>\n    </div>\n    <div class=\"map-div\" *ngIf=\"isNotConfigured\">\n      <p class=\"contentLob\">Processes not configured, please contact administrator.</p>\n      <app-subway-viewer></app-subway-viewer>\n    </div>\n\n  </div>\n  <div class=\"active-workitems\">\n    <div class=\"sub-way-wrapper\" *ngIf=\"activedashborad\">\n\n      <div>\n        <div class=\"operational-dashboard-padding\"\n          [ngClass]=\"{'dash-headerbar':!activedashboard,'dash-headerbaractive':activedashboard}\">Active\n          Work Items\n          <span> ({{totalActiveWorkItem}})</span>\n          <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\n        </div>\n        <div class=\"operational-dashboard-padding work-item-list\"\n          [ngClass]=\"{'work-item-list':!activedashboard,'work-item-listActive':activedashboard}\">\n          <div *ngIf=\"(totalActiveWorkItem==0)\" class=\"no-data-wt\">There are no active workitems at the moment</div>\n          <span *ngIf=\"(totalActiveWorkItem>0)\">\n            <app-list-item *ngFor=\"let item of workItems; let idx=index;trackBy: trackByJobId\" [workItem]=\"item\"\n              [booleanActive]=\"true\" [index]=\"idx\"></app-list-item>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".operational-dash {\n  background-color: #1c2431 !important;\n  /*new css for merging subway and dashboard*/ }\n  .operational-dash .operational-div {\n    background-color: #1c2431 !important; }\n  .operational-dash .operational-div mat-card {\n      margin: 5rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      min-height: 100px;\n      min-width: 100px; }\n  .operational-dash .operational-div .hand-position {\n      font-weight: bold !important;\n      padding-right: 20px !important; }\n  .operational-dash .justify {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .operational-dash .align_center {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .operational-dash .active-workitems {\n    padding-top: 10px;\n    background: #1c2431 !important; }\n  .operational-dash .dash-headerbar {\n    height: 48px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n    border-top-left-radius: 25px;\n    border-bottom: solid 1px rgba(151, 151, 151, 0.21); }\n  .operational-dash .dash-headerbaractive {\n    /* height: 54px; */\n    height: 46px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n    width: 100%; }\n  .operational-dash .dash-headerbar span {\n    font-size: 12px;\n    margin: 2px 0 0 5px; }\n  .operational-dash .gif_radius {\n    border-radius: 50%; }\n  .operational-dash .work-item-list {\n    padding-top: 0px;\n    height: calc(100vh - 105px);\n    overflow: auto;\n    border-bottom-left-radius: 25px; }\n  .operational-dash .work-item-listActive {\n    padding-top: 0px;\n    height: calc(100vh - 89px);\n    overflow: auto;\n    width: 100%; }\n  .operational-dash app-list-item {\n    position: relative;\n    display: block;\n    margin-bottom: 25px; }\n  .operational-dash .dash-wrapper {\n    /* width:calc(100vw - 420px); */\n    width: calc(100vw - 435px);\n    float: left;\n    margin: 0 !important;\n    margin-left: 1px !important;\n    overflow: auto; }\n  .operational-dash .dash-wrappersubway {\n    width: 100%;\n    float: left;\n    margin: 0 !important;\n    margin-left: 1px !important;\n    -webkit-box-shadow: 0 0 4px 0 #131329;\n            box-shadow: 0 0 4px 0 #131329;\n    height: calc(100vh - 41px);\n    overflow: auto; }\n  .operational-dash .sub-way-wrapper {\n    background-color: #1c2431 !important; }\n  .operational-dash .operational-dashboard-padding {\n    opacity: 0.9;\n    padding: 4px 15px 0;\n    background-color: #283343;\n    overflow-x: hidden;\n    font-family: 'Heebo' !important;\n    font-size: 16px !important; }\n  .operational-dash .subway_name {\n    margin-top: 6px; }\n  .operational-dash .arrow_icon {\n    font-size: 35px; }\n  .operational-dash .contentLob {\n    color: #ffff;\n    text-align: center;\n    margin-top: 150px; }\n  .operational-dash .map-div {\n    /* height: calc(100vh - 106px); */\n    height: calc(100vh - 91px);\n    overflow: auto; }\n  .operational-dash .map-div .mat-expansion-panel {\n      margin-bottom: 10px;\n      background: #232A3C;\n      width: 98%;\n      margin-left: 9px; }\n  .operational-dash .map-div .mat-expansion-panel .mat-expansion-panel-header {\n        background: #212839 !important;\n        padding: 0 10px !important; }\n  .operational-dash .map-div .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-panel-header-description, .operational-dash .map-div .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-panel-header-title {\n          color: #b2b2b2;\n          font-family: 'Heebo' !important; }\n  .operational-dash .map-div .mat-expansion-panel /deep/.mat-expansion-panel-content {\n        width: auto !important;\n        resize: vertical !important;\n        overflow: auto hidden !important;\n        pointer-events: auto !important;\n        cursor: pointer !important; }\n  .operational-dash .map-div .mat-expansion-panel /deep/.mat-expansion-panel-content::after {\n        content: \"\";\n        cursor: n-resize !important;\n        font-weight: 600;\n        font-size: 23px;\n        position: absolute;\n        height: 25px;\n        width: 25px;\n        text-align: center;\n        bottom: 0px;\n        right: 0px;\n        background-color: #212839;\n        color: #ffff; }\n  .operational-dash .no-data-wt {\n    text-align: center;\n    line-height: 175px;\n    color: #ffff !important; }\n  .operational-dash .datebtn {\n    margin-top: 10px;\n    margin-left: 60px; }\n  .operational-dash .date2 {\n    margin-top: 20px; }\n  .operational-dash span.active {\n    border-radius: 11px !important;\n    border: solid 1px #1cbbff !important;\n    pointer-events: none; }\n  .operational-dash span.active1 {\n    border-radius: 11px !important;\n    border: solid 1px #1cbbff !important; }\n  .operational-dash .custom-data {\n    margin-top: 4px;\n    text-align: center; }\n  .operational-dash .custom-data .btn-primary.send {\n      background-color: #1c2431;\n      border-color: #1c2431;\n      padding: 2px 13px;\n      margin-top: -13px !important; }\n  .operational-dash .custom-data .btn-primary.cancel {\n      background-color: #1c2431;\n      border-color: #1c2431;\n      padding: 2px 13px;\n      margin-top: -13px !important; }\n  .operational-dash .customDateMenu {\n    position: absolute;\n    top: 80%;\n    right: 7px;\n    z-index: 1;\n    min-width: 170px;\n    padding: 4px 10px;\n    margin: 2px 0 0;\n    font-size: 12px;\n    list-style: none;\n    background-color: #2c3545;\n    background-clip: padding-box;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    border-radius: 0px; }\n  .operational-dash .customDateMenu /deep/ .mat-form-field-empty.mat-form-field-label {\n      display: block;\n      color: #ffffff; }\n  .operational-dash .customDateMenu /deep/ .mat-form-field-suffix .mat-icon {\n      width: 1em;\n      color: #ffffff; }\n  .operational-dash .customDateMenu /deep/ .mat-form-field-underline {\n      background-color: #ffffff; }\n  .operational-dash .customDateMenu /deep/ input.mat-input-element {\n      color: #ffffff; }\n  .operational-dash .customDateMenu /deep/ .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label, .operational-dash .customDateMenu .mat-form-field-empty.mat-form-field-label {\n      display: block;\n      color: #ffffff; }\n  /deep/ .mat-select-placeholder {\n  color: #d3d7dd !important; }\n  /deep/ .owl-dt-container-inner {\n  background: #2c3545 !important; }\n  /deep/ .owl-dt-calendar-table .owl-dt-calendar-cell {\n  color: #d3d7dd !important;\n  font-size: 14px !important; }\n  /deep/ .owl-dt-control-button {\n  color: #d3d7dd !important;\n  font-size: 12px !important; }\n  /deep/ .owl-dt-calendar-table .owl-dt-calendar-header {\n  color: #d3d7dd !important;\n  font-size: 14px !important; }\n  /deep/ .owl-dt-control-button-arrow svg {\n  fill: #d3d7dd !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationalDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_bpmn_bpmn_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/bpmn/bpmn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service__ = __webpack_require__("../../../../../src/app/main/operational/services/sidenav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as quill from "quill";


var OperationalDashboardComponent = /** @class */ (function () {
    function OperationalDashboardComponent(_eref, _workItemService, _configService, _bpmnService, sidenavbarService) {
        var _this = this;
        this._eref = _eref;
        this._workItemService = _workItemService;
        this._configService = _configService;
        this._bpmnService = _bpmnService;
        this.sidenavbarService = sidenavbarService;
        this.showfilterBox = false;
        this.showLegendBox = false;
        this.showcustomBox = false;
        this.checkedAll = false;
        this.selectedStatus = [];
        this.selectedFilter = [];
        this.totalActiveWorkItem = 0;
        this.workItems = [];
        this.isLoading = false;
        this.subwayDashboard = true;
        this.activedashborad = true;
        this._alive = true;
        this.subway = false;
        this.activedashboard = false;
        this.participants = [];
        this.temporaryList = [];
        this.rightScreenHeight = screen.height + 'px';
        this.allExpandState = true;
        this.isNotConfigured = false;
        this.showSidenav = false;
        this.showFiller = false;
        this.selected = {};
        this.expanded = {};
        this.subscription = this._workItemService.sendObj.subscribe(function (message) {
            _this.event = message;
            console.log('operational', _this.event);
            $("#toggleid").trigger("click");
        });
    }
    OperationalDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTime = this._workItemService.selectedDate;
        if (this.selectedTime) {
            if (this.selectedTime.DURATION) {
                this.showDatewise(this.selectedTime.DURATION.timeline, this.selectedTime.DURATION.value);
            }
            else if (this.selectedTime.CUSTOM) {
                this.sendDate(this.selectedTime.CUSTOM.start, this.selectedTime.CUSTOM.end);
            }
        }
        else {
            this.ddSelected = -1;
            this.showDatewise("days", -1);
        }
        // this.ddSelected = -1;
        // const Quill = (quill as any).default ? (quill as any).default : quill;
        // this.getWorkItemsInInterval();
        this.loadProcessMap();
        this._workItemService.getClaimsData().subscribe(function (data) {
            _this.options = data["result"];
            setTimeout(function () {
                _this.matselect_colour_manipulatio();
            }, 2000);
        });
    };
    OperationalDashboardComponent.prototype.matselect_colour_manipulatio = function () {
        var mat_placeholder = document.getElementsByClassName("mat-select-placeholder");
        Array.from(mat_placeholder).forEach(function (el) {
            el["style"].color = "#d3d7dd";
        });
        var mat_form_underline = document.getElementsByClassName("mat-form-field-underline");
        Array.from(mat_form_underline).forEach(function (el) {
            el["style"].display = "none";
        });
        var mat_form_field_label = document.getElementsByClassName("mat-form-field-label");
        Array.from(mat_form_field_label).forEach(function (el) {
            el["style"].display = "none";
        });
        var mat_select_arrow = document.getElementsByClassName("mat-select-arrow");
        Array.from(mat_select_arrow).forEach(function (el) {
            el["style"].color = "#d3d7dd";
        });
        var mat_select_value = document.getElementsByClassName("mat-select-value");
        Array.from(mat_select_value).forEach(function (el) {
            el["style"].color = "#d3d7dd";
        });
        var mat_placeholder_hide = document.getElementsByClassName("mat-form-field-hide-placeholder");
        Array.from(mat_placeholder_hide).forEach(function (el) {
            el["style"].color = "#d3d7dd";
        });
    };
    // public BodyClick() {
    //   if (!this._eref.nativeElement.contains(event.target)) {
    //     this.showfilterBox = false;
    //   }
    // }
    OperationalDashboardComponent.prototype.toggle = function (event) {
        console.log('toggle event', event);
        this.showSidenav = !this.showSidenav;
    };
    OperationalDashboardComponent.prototype.leftactive = function () {
        this.activedashboard = true;
        this.subway = false;
        this.activedashborad = true;
        this.subwayDashboard = false;
    };
    OperationalDashboardComponent.prototype.Rightactive = function () {
        this.activedashboard = false;
        this.subway = true;
        this.activedashborad = false;
        this.subwayDashboard = true;
    };
    OperationalDashboardComponent.prototype.getWorkItems = function () {
        var _this = this;
        this.isLoading = true;
        // set the cached items.
        if (this._workItemService.workItems.length) {
            this.workItems = this._workItemService.workItems;
            this.totalActiveWorkItem = this.workItems.length;
        }
        this._workItemService.getWorkItems({ start: 1, limit: -1 })
            .subscribe(function (data) {
            _this.workItems = data.result["active_work_items"];
            _this.subwayMap = data;
            _this._workItemService.subwayMapDetails = data.result['subway_map'];
            _this._workItemService.putActivesubway(_this.subwayMap);
            _this._workItemService.workItems = _this.workItems;
            _this.totalActiveWorkItem = _this.workItems.length;
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            _this.errorMessage = error.error;
        });
    };
    OperationalDashboardComponent.prototype.handleSpacebar = function (ev) {
        if (ev.keyCode === 32) {
            // this._matExpansionPanel.close()
            ev.stopPropagation();
        }
        else if (ev.key == "Enter") {
            alert("enter");
        }
    };
    // getWorkItemsInInterval() {
    //   IntervalObservable.create(this._configService.config.tmPollingInMs)
    //     .takeWhile(() => {
    //       return this._alive;
    //     })
    //     .subscribe(() => {
    //       this.showDatewise(this.selectedDays, this.ddSelected);
    //     });
    // }
    OperationalDashboardComponent.prototype.ngOnDestroy = function () {
        this._alive = false;
    };
    OperationalDashboardComponent.prototype.trackByJobId = function (workItem) {
        return workItem ? workItem.jobId : undefined;
    };
    OperationalDashboardComponent.prototype.showFilters = function () {
        this.showfilterBox = !this.showfilterBox;
        this.showLegendBox = false;
    };
    OperationalDashboardComponent.prototype.showLegend = function () {
        this.showLegendBox = !this.showLegendBox;
        this.showfilterBox = false;
    };
    OperationalDashboardComponent.prototype.showCustomdate = function (value) {
        if (this.selectedTime) {
            this.customDateSelected = true;
        }
        this.ddSelected = -2;
        this.customactive = value;
        this.showcustomBox = !this.showcustomBox;
    };
    OperationalDashboardComponent.prototype.closeCustomBox = function () {
        this.showcustomBox = false;
        this.fromDate = '';
        this.toDate = '';
    };
    OperationalDashboardComponent.prototype.toggleselection = function (x) {
        if (x === 'All') {
            this.checkedAll = !this.checkedAll;
            if (this.checkedAll) {
                this.selectedStatus = [];
                for (var i = 0; i < this.participants.length; i++) {
                    this.selectedStatus.push(this.participants[i].name);
                }
                // this.temporaryList = this.bpmnList;
            }
            else {
                this.selectedStatus = [];
                // this.temporaryList = this.bpmnList;
            }
        }
        else {
            var index = this.selectedStatus.indexOf(x);
            if (index > -1) {
                this.selectedStatus.splice(index, 1);
                // this.rebuildMap();
            }
            else {
                this.selectedStatus.push(x);
                // this.rebuildMap();
            }
            if (this.participants.length === this.selectedStatus.length) {
                this.checkedAll = true;
            }
            else {
                this.checkedAll = false;
            }
        }
        if (this.selectedStatus.length === 0) {
            var participants = this.participants;
            this.participants = participants;
            // this.temporaryList = this.bpmnList;
        }
        this.rebuildMap();
    };
    OperationalDashboardComponent.prototype.rebuildMap = function () {
        var _this = this;
        this.temporaryList = [];
        if (this.selectedStatus.length > 0) {
            this.selectedStatus.forEach(function (eachstatus, idx) {
                _this.bpmnList.forEach(function (eachbpmn, ind) {
                    if (eachstatus === eachbpmn.name) {
                        _this.temporaryList.push(eachbpmn);
                    }
                });
            });
        }
        else {
            this.temporaryList = this.bpmnList;
        }
        setTimeout(function () {
            _this.isTimeOut();
        }, 1000);
    };
    OperationalDashboardComponent.prototype.loadProcessMap = function () {
        var _this = this;
        this.isProcesses = true;
        this._bpmnService.settingsPage = false;
        this._bpmnService.loadProcessMapxml().subscribe(function (response) {
            _this.bpmnList = response.result[0].bpmns;
            //comment
            _this.xmldata = '<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<bpmn:definitions id=\"Definitions_1\" targetNamespace=\"http://bpmn.io/schema/bpmn\" xmlns:bpmn=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:di=\"http://www.omg.org/spec/DD/20100524/DI\"><bpmn:collaboration id=\"Collaboration_0zl6pev\"><bpmn:participant id=\"Participant_0a95ni6\" name=\"CLAIMS\" processRef=\"Process_0qvvah3\"/></bpmn:collaboration><bpmn:process id=\"Process_0qvvah3\"><bpmn:intermediateThrowEvent id=\"EDI_837_INGESTION\" name=\"EDI 837 INGESTION\"><bpmn:outgoing>SequenceFlow_005tnzp</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id=\"File_Generation\" name=\"FILE GENERATION\"><bpmn:incoming>SequenceFlow_0asg3v7</bpmn:incoming><bpmn:outgoing>SequenceFlow_1a0xatk</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id=\"CLAIM_CREATION\" name=\"CLAIM CREATION\"><bpmn:incoming>SequenceFlow_005tnzp</bpmn:incoming><bpmn:outgoing>SequenceFlow_1v0ssk9</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id=\"ORCHESTRATION\" name=\"ORCHESTRATION\"><bpmn:incoming>SequenceFlow_1v0ssk9</bpmn:incoming><bpmn:outgoing>SequenceFlow_1onbvci</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id=\"Object_Generation\" name=\"OBJECT GENERATION\"><bpmn:incoming>SequenceFlow_1onbvci</bpmn:incoming><bpmn:outgoing>SequenceFlow_0asg3v7</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id=\"Postback_1\" name=\"POSTBACK 1\"><bpmn:incoming>SequenceFlow_1a0xatk</bpmn:incoming><bpmn:outgoing>SequenceFlow_0lgkbdy</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id=\"Postback_2\" name=\"POSTBACK 2\"><bpmn:incoming>SequenceFlow_0lgkbdy</bpmn:incoming><bpmn:outgoing>SequenceFlow_0zyi4xq</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:sequenceFlow id=\"SequenceFlow_1onbvci\" sourceRef=\"ORCHESTRATION\" targetRef=\"Object_Generation\"/><bpmn:sequenceFlow id=\"SequenceFlow_005tnzp\" sourceRef=\"EDI_837_INGESTION\" targetRef=\"CLAIM_CREATION\"/><bpmn:sequenceFlow id=\"SequenceFlow_1v0ssk9\" sourceRef=\"CLAIM_CREATION\" targetRef=\"ORCHESTRATION\"/><bpmn:sequenceFlow id=\"SequenceFlow_0asg3v7\" sourceRef=\"Object_Generation\" targetRef=\"File_Generation\"/><bpmn:sequenceFlow id=\"SequenceFlow_1a0xatk\" sourceRef=\"File_Generation\" targetRef=\"Postback_1\"/><bpmn:sequenceFlow id=\"SequenceFlow_0lgkbdy\" sourceRef=\"Postback_1\" targetRef=\"Postback_2\"/><bpmn:sequenceFlow id=\"SequenceFlow_0zyi4xq\" sourceRef=\"Postback_2\" targetRef=\"WGS_Mainframe_System\"/><bpmn:intermediateThrowEvent id=\"WGS_Mainframe_System\" name=\"WGS\"><bpmn:incoming>SequenceFlow_0zyi4xq</bpmn:incoming></bpmn:intermediateThrowEvent></bpmn:process><bpmndi:BPMNDiagram id=\"BPMNDiagram_1\"><bpmndi:BPMNPlane bpmnElement=\"Collaboration_0zl6pev\" id=\"BPMNPlane_1\"><bpmndi:BPMNShape bpmnElement=\"Participant_0a95ni6\" id=\"Participant_0a95ni6_di\"><dc:Bounds height=\"1185\" width=\"2653\" x=\"-1590\" y=\"-3655\"/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"EDI_837_INGESTION\" id=\"IntermediateThrowEvent_0tpkmek_di\"><dc:Bounds height=\"291\" width=\"284\" x=\"-1225\" y=\"-3499\"/><bpmndi:BPMNLabel><dc:Bounds height=\"27\" width=\"62\" x=\"-1113\" y=\"-3198\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement=\"CLAIM_CREATION\" id=\"IntermediateThrowEvent_1i90hfx_di\"><dc:Bounds height=\"286\" width=\"286\" x=\"-592\" y=\"-3496\"/><bpmndi:BPMNLabel><dc:Bounds height=\"27\" width=\"57\" x=\"-478\" y=\"-3189\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"SequenceFlow_005tnzp\" id=\"SequenceFlow_005tnzp_di\"><di:waypoint x=\"-941\" y=\"-3353\"/><di:waypoint x=\"-592\" y=\"-3353\"/></bpmndi:BPMNEdge><bpmndi:BPMNShape bpmnElement=\"ORCHESTRATION\" id=\"IntermediateThrowEvent_1neps8v_di\"><dc:Bounds height=\"286\" width=\"286\" x=\"46\" y=\"-3496\"/><bpmndi:BPMNLabel><dc:Bounds height=\"27\" width=\"78\" x=\"150\" y=\"-3210\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"SequenceFlow_1v0ssk9\" id=\"SequenceFlow_1v0ssk9_di\"><di:waypoint x=\"-306\" y=\"-3353\"/><di:waypoint x=\"46\" y=\"-3353\"/></bpmndi:BPMNEdge><bpmndi:BPMNShape bpmnElement=\"Object_Generation\" id=\"IntermediateThrowEvent_0e8vkcg_di\"><dc:Bounds height=\"286\" width=\"285\" x=\"667\" y=\"-3496\"/><bpmndi:BPMNLabel><dc:Bounds height=\"27\" width=\"72\" x=\"774\" y=\"-3533.5\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"SequenceFlow_1onbvci\" id=\"SequenceFlow_1onbvci_di\"><di:waypoint x=\"332\" y=\"-3353\"/><di:waypoint x=\"667\" y=\"-3353\"/></bpmndi:BPMNEdge><bpmndi:BPMNShape bpmnElement=\"File_Generation\" id=\"IntermediateThrowEvent_0hzbf2i_di\"><dc:Bounds height=\"289\" width=\"290\" x=\"-1204\" y=\"-2894\"/></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"SequenceFlow_0asg3v7\" id=\"SequenceFlow_0asg3v7_di\"><di:waypoint x=\"810\" y=\"-3211\"/><di:waypoint x=\"810\" y=\"-3113\"/><di:waypoint x=\"-1373\" y=\"-3113\"/><di:waypoint x=\"-1373\" y=\"-2749\"/><di:waypoint x=\"-1204\" y=\"-2749\"/></bpmndi:BPMNEdge><bpmndi:BPMNShape bpmnElement=\"Postback_1\" id=\"IntermediateThrowEvent_14qqacr_di\"><dc:Bounds height=\"286\" width=\"287\" x=\"-560\" y=\"-2892\"/></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"SequenceFlow_1a0xatk\" id=\"SequenceFlow_1a0xatk_di\"><di:waypoint x=\"-914\" y=\"-2749\"/><di:waypoint x=\"-560\" y=\"-2749\"/></bpmndi:BPMNEdge><bpmndi:BPMNShape bpmnElement=\"Postback_2\" id=\"IntermediateThrowEvent_1485rlb_di\"><dc:Bounds height=\"287\" width=\"288\" x=\"77\" y=\"-2893\"/></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"SequenceFlow_0lgkbdy\" id=\"SequenceFlow_0lgkbdy_di\"><di:waypoint x=\"-273\" y=\"-2749\"/><di:waypoint x=\"77\" y=\"-2749\"/></bpmndi:BPMNEdge><bpmndi:BPMNShape bpmnElement=\"WGS_Mainframe_System\" id=\"IntermediateThrowEvent_1wea4ev_di\"><dc:Bounds height=\"284\" width=\"284\" x=\"668\" y=\"-2891\"/><bpmndi:BPMNLabel><dc:Bounds height=\"14\" width=\"26\" x=\"797\" y=\"-2607\"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement=\"SequenceFlow_0zyi4xq\" id=\"SequenceFlow_0zyi4xq_di\"><di:waypoint x=\"365\" y=\"-2749\"/><di:waypoint x=\"668\" y=\"-2749\"/></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>';
            //  this.xmldata='<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn"><bpmn:collaboration id="Collaboration_14i8wlq"><bpmn:participant id="Participant_0uwxag7" name="CLAIMS" processRef="Process_1o50ekf" /><bpmn:participant id="Participant_0k51yma" name="test" processRef="Process_008x54f" /></bpmn:collaboration><bpmn:process id="Process_1o50ekf"><bpmn:intermediateThrowEvent id="EDI_837_INGESTION" name="EDI 837 INGESTION"><bpmn:outgoing>SequenceFlow_19l9pnm</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id="CLAIM_CREATION" name="CLAIM CREATION"><bpmn:incoming>SequenceFlow_19l9pnm</bpmn:incoming><bpmn:outgoing>SequenceFlow_0nd5bq5</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:sequenceFlow id="SequenceFlow_19l9pnm" sourceRef="EDI_837_INGESTION" targetRef="CLAIM_CREATION" /><bpmn:sequenceFlow id="SequenceFlow_0nd5bq5" sourceRef="CLAIM_CREATION" targetRef="ORCHESTRATION" /><bpmn:intermediateThrowEvent id="ORCHESTRATION" name="ORCHESTRATION"><bpmn:incoming>SequenceFlow_0nd5bq5</bpmn:incoming></bpmn:intermediateThrowEvent></bpmn:process><bpmn:process id="Process_008x54f"><bpmn:intermediateThrowEvent id="CDAI_ARR_Allocation_AllocateFromPullList_CDAI_ARR_PRP" name="test1"><bpmn:outgoing>SequenceFlow_0in0qgg</bpmn:outgoing></bpmn:intermediateThrowEvent><bpmn:intermediateThrowEvent id="CDAI_ARR_PRP_UploadToHealthSource_CDAI_ARR_PRP" name="test2"><bpmn:incoming>SequenceFlow_0in0qgg</bpmn:incoming></bpmn:intermediateThrowEvent><bpmn:sequenceFlow id="SequenceFlow_0in0qgg" sourceRef="CDAI_ARR_Allocation_AllocateFromPullList_CDAI_ARR_PRP" targetRef="CDAI_ARR_PRP_UploadToHealthSource_CDAI_ARR_PRP" /></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_14i8wlq"><bpmndi:BPMNShape id="Participant_0uwxag7_di" bpmnElement="Participant_0uwxag7"><dc:Bounds x="-508" y="0" width="1691" height="562" /></bpmndi:BPMNShape><bpmndi:BPMNShape id="IntermediateThrowEvent_1265d3w_di" bpmnElement="EDI_837_INGESTION"><dc:Bounds x="-454" y="133" width="284" height="284" /><bpmndi:BPMNLabel><dc:Bounds x="-389" y="75" width="61" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="IntermediateThrowEvent_11jh3br_di" bpmnElement="CLAIM_CREATION"><dc:Bounds x="104" y="130" width="290" height="289" /><bpmndi:BPMNLabel><dc:Bounds x="178" y="79" width="57" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="IntermediateThrowEvent_1r01wlo_di" bpmnElement="ORCHESTRATION"><dc:Bounds x="706" y="130" width="287" height="290" /><bpmndi:BPMNLabel><dc:Bounds x="777" y="73" width="79" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_19l9pnm_di" bpmnElement="SequenceFlow_19l9pnm"><di:waypoint x="-170" y="275" /><di:waypoint x="104" y="275" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0nd5bq5_di" bpmnElement="SequenceFlow_0nd5bq5"><di:waypoint x="394" y="275" /><di:waypoint x="706" y="275" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Participant_0k51yma_di" bpmnElement="Participant_0k51yma"><dc:Bounds x="-272.0515267175572" y="653.8053435114504" width="600" height="250" /></bpmndi:BPMNShape><bpmndi:BPMNShape id="IntermediateThrowEvent_0ih3oz4_di" bpmnElement="CDAI_ARR_Allocation_AllocateFromPullList_CDAI_ARR_PRP"><dc:Bounds x="-148.05152671755718" y="750.8053435114504" width="36" height="36" /></bpmndi:BPMNShape><bpmndi:BPMNShape id="IntermediateThrowEvent_19zm60i_di" bpmnElement="CDAI_ARR_PRP_UploadToHealthSource_CDAI_ARR_PRP"><dc:Bounds x="-9.05152671755718" y="751" width="36" height="36" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0in0qgg_di" bpmnElement="SequenceFlow_0in0qgg"><di:waypoint x="-112" y="769" /><di:waypoint x="-9" y="769" /></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>'
            _this.matselect_colour_manipulatio();
            _this.participants = response.result[0].filter;
            if (_this.participants.length === 0) {
                _this.isNotConfigured = true;
            }
            else {
                _this.isNotConfigured = false;
                _this.isProcesses = false;
            }
            _this.temporaryList = _this.bpmnList;
            _this._bpmnService.participants = response.result[0].filter;
        }, function (error) {
            console.log('Error in SubWay data call');
        });
        setTimeout(function () {
            _this.isTimeOut();
        }, 1000);
    };
    OperationalDashboardComponent.prototype.isTimeOut = function () {
        var doc = document.getElementsByClassName('operational-div');
        if (screen.height < doc[0].clientHeight) {
            this.rightScreenHeight = (doc[0].clientHeight - 26) + 'px';
        }
        else {
            this.rightScreenHeight = screen.height + 'px';
        }
    };
    OperationalDashboardComponent.prototype.formatDate = function (dateObj) {
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var hours = dateObj.getHours();
        var minutes = dateObj.getMinutes();
        var seconds = dateObj.getSeconds();
        return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    };
    OperationalDashboardComponent.prototype.sendDate = function (fromDate, toDate) {
        var _this = this;
        this.customactive = 0;
        var claimtype = this._workItemService.selectedClaimTypes;
        if (this.customDateSelected) {
            if (this.selectedTime) {
                var fDate = this.formatDate(fromDate);
                var tDate = this.formatDate(toDate);
                this.selectedTimeobj = { "CUSTOM": { "start": fDate, "end": tDate }, "claimtype": claimtype };
            }
        }
        else if (this.selectedTime) {
            var fDate = fromDate;
            var tDate = toDate;
            this.selectedTimeobj = { "CUSTOM": { "start": fDate, "end": tDate }, "claimtype": claimtype };
        }
        else {
            var fDate = this.formatDate(fromDate);
            var tDate = this.formatDate(toDate);
            this.selectedTimeobj = { "CUSTOM": { "start": fDate, "end": tDate }, "claimtype": claimtype };
        }
        this._workItemService.selectedDate = '';
        this._workItemService.selectedDate = this.selectedTimeobj;
        console.log(this.selectedTimeobj);
        this._workItemService.getDateWiseData(this.selectedTimeobj).subscribe(function (data) {
            // console.log(this.selectedTimeobj);
            _this.customDateSelected = false;
            _this.showcustomBox = false;
            _this.fromDate = '';
            _this.toDate = '';
            _this.workItems = data.result["active_work_items"];
            _this.subwayMap = data;
            _this._workItemService.subwayMapDetails = data.result['subway_map'];
            _this._workItemService.putActivesubway(_this.subwayMap);
            _this._workItemService.workItems = _this.workItems;
            _this.totalActiveWorkItem = _this.workItems.length;
            _this.isLoading = false;
            _this._workItemService.getsubway = false;
        }, function (error) {
            _this.isLoading = false;
            _this.errorMessage = error.error;
        });
    };
    OperationalDashboardComponent.prototype.showDatewise = function (days, value) {
        var _this = this;
        this.closeCustomBox();
        this.customactive = -3;
        this.ddSelected = value;
        this.selectedDays = days;
        var claimtype = this._workItemService.selectedClaimTypes;
        var obj = { "DURATION": { "timeline": "days", "value": value }, "claimtype": claimtype };
        this._workItemService.selectedDate = '';
        this._workItemService.selectedDate = obj;
        this.isLoading = true;
        // set the cached items.
        if (this._workItemService.workItems.length) {
            this.workItems = this._workItemService.workItems;
            this.totalActiveWorkItem = this.workItems.length;
        }
        console.log(obj);
        this._workItemService.getDateWiseData(obj).subscribe(function (data) {
            _this.workItems = data.result["active_work_items"];
            _this.subwayMap = data;
            _this._workItemService.subwayMapDetails = data.result['subway_map'];
            _this._workItemService.putActivesubway(_this.subwayMap);
            _this._workItemService.workItems = _this.workItems;
            _this.totalActiveWorkItem = _this.workItems.length;
            _this.isLoading = false;
            _this._workItemService.getsubway = false;
        }, function (error) {
            _this.isLoading = false;
            _this.errorMessage = error.error;
        });
    };
    OperationalDashboardComponent.prototype.cliamSelected = function (e, name, index) {
        var _this = this;
        this._workItemService.selectedClaimTypes = e;
        var select = this._workItemService.selectedDate;
        setTimeout(function () {
            if (select) {
                if (select.DURATION) {
                    _this.showDatewise(select.DURATION.timeline, select.DURATION.value);
                }
                else if (select.CUSTOM) {
                    _this.sendDate(select.CUSTOM.start, select.CUSTOM.end);
                }
            }
            else {
                _this.showDatewise("days", -1);
            }
        }, 2000);
    };
    OperationalDashboardComponent.prototype.zoomOut = function (index) {
        this.subwaychild["_results"][index].zoomOut();
        this.hoverInd == index;
    };
    OperationalDashboardComponent.prototype.zoomReset = function (index) {
        this.subwaychild["_results"][index].zoomReset();
        this.hoverInd == index;
    };
    OperationalDashboardComponent.prototype.zoomIn = function (index) {
        this.subwaychild["_results"][index].zoomIn();
        this.hoverInd == index;
    };
    OperationalDashboardComponent.prototype.togglePanel = function () {
        this._matExpansionPanel = !this._matExpansionPanel;
    };
    OperationalDashboardComponent.prototype.change = function () {
        // this._matExpansionPanel.open();
        var mat_select = document.getElementsByClassName("mat-select-content");
        mat_select[0]["style"].background = "#374760";
        var mat_checkbox = document.getElementsByClassName("mat-pseudo-checkbox");
        Array.from(mat_checkbox).forEach(function (el) {
            el["style"].color = "#2896cc";
        });
        var mat_option = document.getElementsByClassName("mat-option-text");
        Array.from(mat_option).forEach(function (el) {
            el["style"].color = "#d3d7dd";
        });
        var mat_placeholder = document.getElementsByClassName("mat-select-placeholder");
        mat_placeholder[0]["style"].color = "#d3d7dd";
    };
    OperationalDashboardComponent.prototype.valuechange = function () {
        var _this = this;
        setTimeout(function () {
            _this.change();
        }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('subway'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], OperationalDashboardComponent.prototype, "subwaychild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('matExpansionPanel'),
        __metadata("design:type", Object)
    ], OperationalDashboardComponent.prototype, "_matExpansionPanel", void 0);
    OperationalDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operational-dashboard',
            template: __webpack_require__("../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_config_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_bpmn_bpmn_service__["a" /* BpmnService */],
            __WEBPACK_IMPORTED_MODULE_4__services_sidenav_service__["a" /* SidenavService */]])
    ], OperationalDashboardComponent);
    return OperationalDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/operational-init/operational-init.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\n    background-color: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-init/operational-init.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-init/operational-init.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationalInitComponent; });
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

var OperationalInitComponent = /** @class */ (function () {
    function OperationalInitComponent() {
    }
    OperationalInitComponent.prototype.ngOnInit = function () {
    };
    OperationalInitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operational-init',
            template: __webpack_require__("../../../../../src/app/main/operational/operational-init/operational-init.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/operational-init/operational-init.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OperationalInitComponent);
    return OperationalInitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/operational.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationalModule", function() { return OperationalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operational_init_operational_init_component__ = __webpack_require__("../../../../../src/app/main/operational/operational-init/operational-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operational_dashboard_operational_dashboard_component__ = __webpack_require__("../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_item_work_item_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/work-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_item_records_records_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/records/records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_item_logs_timeline_logs_timeline_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subway_viewer_subway_viewer_component__ = __webpack_require__("../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operational_routes__ = __webpack_require__("../../../../../src/app/main/operational/operational.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_modules_shared_modules_module__ = __webpack_require__("../../../../../src/app/shared/shared-modules/shared-modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_components_shared_components_module__ = __webpack_require__("../../../../../src/app/shared/shared-components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__operational_dashboard_list_item_list_item_component__ = __webpack_require__("../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__work_item_process_item_process_item_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/process-item/process-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_bot_add_bot_component__ = __webpack_require__("../../../../../src/app/main/operational/add-bot/add-bot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__work_item_logs_timeline_log_item_log_item_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_sidenav_service__ = __webpack_require__("../../../../../src/app/main/operational/services/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_shared_modules_subwaymap_drag_customdrag_directive__ = __webpack_require__("../../../../../src/app/shared/shared-modules/subwaymap-drag/customdrag.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__subway_viewer_selectall_selectall_component__ = __webpack_require__("../../../../../src/app/main/operational/subway-viewer/selectall/selectall.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { SlicePipe } from '../../shared/shared-modules/pipes/slice.pipe';








// import { QuillModule } from 'ngx-quill';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';




var OperationalModule = /** @class */ (function () {
    function OperationalModule() {
    }
    OperationalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__operational_routes__["a" /* routeRoot */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_modules_shared_modules_module__["a" /* SharedModulesModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_components_shared_components_module__["a" /* SharedComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng2_daterangepicker__["Daterangepicker"],
                // OwlDateTimeModule, 
                // OwlNativeDateTimeModule,
                __WEBPACK_IMPORTED_MODULE_19__angular_material__["x" /* MatSidenavModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__operational_init_operational_init_component__["a" /* OperationalInitComponent */],
                __WEBPACK_IMPORTED_MODULE_4__operational_dashboard_operational_dashboard_component__["a" /* OperationalDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__work_item_work_item_component__["a" /* WorkItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__work_item_records_records_component__["a" /* RecordsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__work_item_logs_timeline_logs_timeline_component__["a" /* LogsTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_12__operational_dashboard_list_item_list_item_component__["a" /* ListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_13__work_item_process_item_process_item_component__["a" /* ProcessItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__add_bot_add_bot_component__["a" /* AddBotComponent */],
                __WEBPACK_IMPORTED_MODULE_15__work_item_logs_timeline_log_item_log_item_component__["a" /* LogItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__subway_viewer_subway_viewer_component__["a" /* SubwayViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_shared_modules_subwaymap_drag_customdrag_directive__["a" /* CustomdragDirective */],
                __WEBPACK_IMPORTED_MODULE_20__subway_viewer_selectall_selectall_component__["a" /* SelectallComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_sidenav_service__["a" /* SidenavService */]],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"],
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], OperationalModule);
    return OperationalModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/operational.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operational_dashboard_operational_dashboard_component__ = __webpack_require__("../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operational_init_operational_init_component__ = __webpack_require__("../../../../../src/app/main/operational/operational-init/operational-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_item_work_item_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/work-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_item_logs_timeline_logs_timeline_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_item_records_records_component__ = __webpack_require__("../../../../../src/app/main/operational/work-item/records/records.component.ts");






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__operational_init_operational_init_component__["a" /* OperationalInitComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__operational_dashboard_operational_dashboard_component__["a" /* OperationalDashboardComponent */] },
            {
                path: 'work-item/:status/:jobId/:processName', component: __WEBPACK_IMPORTED_MODULE_3__work_item_work_item_component__["a" /* WorkItemComponent */],
                children: [
                    { path: '', redirectTo: 'records', pathMatch: 'full' },
                    { path: 'records', component: __WEBPACK_IMPORTED_MODULE_5__work_item_records_records_component__["a" /* RecordsComponent */] },
                    { path: 'log-items', component: __WEBPACK_IMPORTED_MODULE_4__work_item_logs_timeline_logs_timeline_component__["a" /* LogsTimelineComponent */] }
                ]
            }
        ]
    }
];
var routeRoot = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/main/operational/services/sidenav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavService = /** @class */ (function () {
    function SidenavService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    SidenavService.prototype.sendMessage = function (event) {
        this.subject.next({ text: event });
    };
    SidenavService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    SidenavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SidenavService);
    return SidenavService;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/subway-viewer/selectall/selectall.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-selectall .mat-checkbox-layout,\napp-selectall .mat-checkbox-label {\n  width:100% !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/subway-viewer/selectall/selectall.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-checkbox class=\"mat-option\"\n                [disableRipple]=\"true\"\n                [indeterminate]=\"isIndeterminate()\"\n                [checked]=\"isChecked()\"\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"toggleSelection($event)\">\n      {{text}}\n    </mat-checkbox>"

/***/ }),

/***/ "../../../../../src/app/main/operational/subway-viewer/selectall/selectall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectallComponent = /** @class */ (function () {
    function SelectallComponent() {
        this.values = [];
        this.text = 'Select All';
    }
    SelectallComponent.prototype.ngOnInit = function () {
    };
    SelectallComponent.prototype.isChecked = function () {
        return this.model.value && this.values.length
            && this.model.value.length === this.values.length;
    };
    SelectallComponent.prototype.isIndeterminate = function () {
        return this.model.value && this.values.length && this.model.value.length
            && this.model.value.length < this.values.length;
    };
    SelectallComponent.prototype.toggleSelection = function (change) {
        if (change.checked) {
            this.model.update.emit(this.values);
        }
        else {
            this.model.update.emit([]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* NgModel */])
    ], SelectallComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectallComponent.prototype, "values", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectallComponent.prototype, "text", void 0);
    SelectallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-selectall',
            template: __webpack_require__("../../../../../src/app/main/operational/subway-viewer/selectall/selectall.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/subway-viewer/selectall/selectall.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SelectallComponent);
    return SelectallComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_bpmnService.participants && _bpmnService.participants.length > 0\">\n    <div class=\"map-sec\" (mousemove)=\"selectedLOB(bpmn_id)\" id=\"subway_dblclick\">\n        <div class=\"grabber\" *ngIf=\"accordionheight\" appCustomdrag [lob_id]=\"bpmn_id\" [lob_height]=\"accordionheight\"\n            (onValueChanged)=\"onValueChanged($event)\">\n            <div class=\"map-body dragdiv\" contenteditable=\"true\">\n                <div class=\"content-wrapper subway-map-custom-style\">\n                    <div class=\"subway-map-viewer\" id=\"{{'subway_map_viewer_'+ bpmn_id}}\">\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <svg height=\"30\" width=\"30\">\n        <defs>\n            <marker id=\"marker-circle\" markerWidth=\"16\" markerHeight=\"16\" refx=\"8\" refy=\"8\">\n                <!-- <circle cx=\"4\" cy=\"4\" r=\"4\" stroke-width=\"3\" fill=\"#6269A2\" /> -->\n            </marker>\n        </defs>\n    </svg>\n</div>\n\n<div id=\"tooltip\" [style.position]=\"'fixed'\" [style.left]=\"tooltipLEFT\" [style.top]=\"tooltipTOP\"\n    [innerHtml]=\"tooltipHTML\"></div>"

/***/ }),

/***/ "../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .subway-map-viewer{\n    /* height: calc(100vh - 55px - 40px - 60px) ; \n    height: calc(100vh - 25px - 40px - 60px) ;\n} */\n.subway-map-viewer {\n  height: calc(100vh - 160px - 40px - 60px);\n  /* height:250px; */\n  min-height: 150px; }\n#subway-map-filter-select {\n  height: 40px;\n  background-color: #1c1b3b;\n  border-bottom: 1px #acacb7; }\n.subway-map-custom-style marker[id^=\"sequenceflow-end-white-black\"] > :nth-child(1) {\n  fill: #737abc !important;\n  stroke: #737abc !important;\n  stroke-width: 2px !important; }\n.loader {\n  background-image: url(\"/assets/images/loader.gif\"); }\n.filter-subway-map {\n  width: 20%;\n  height: 36px;\n  margin-right: 2%;\n  float: right; }\n/* .overalaybg {\n    width: 12px;\n    height: 12px;\n    border-radius: 10px;\n    position: absolute;\n    top: -12px;\n}\n.highlight1-green{\n    background-color: green;\n    border: 2px solid #4dff5c;\n}\n.highlight1-red{\n    background-color: red;\n    border: 3px solid #ff4d4d;\n}\n.highlight1-yellow{\n    background-color: yellow;\n    border: 3px solid #ccba15;\n}\n.highlight1-black{\n    background-color: #000000;\n}\n.highlight1-white{\n    background-color: #ffffff;\n}\n.highlight1-darkgrey {\n    background-color: darkgray;\n    border: 3px solid #dad0d0;\n}\n.fa-robot{\n    margin-top: 14px;\n    margin-left: 1px;\n\n} */\n.filter-subway-map .mat-form-field-label, .filter-subway-map .mat-select-value {\n  color: #acacb7 !important; }\n.filter-subway-map .mat-select-arrow {\n  color: #acacb7 !important; }\n.filter-subway-map .mat-form-field-underline {\n  background-color: #acacb7 !important; }\n.content-wrapper {\n  /* margin: 1px 174px;*/\n  margin: 0;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-width: 0px;\n  background-color: #1c1b3b;\n  -webkit-box-shadow: 0 0 0px 0 #ceced0;\n          box-shadow: 0 0 0px 0 #ceced0; }\n.content-wrapper .mat-toolbar-single-row {\n  background: none;\n  margin-bottom: -3px;\n  z-index: 2;\n  -webkit-box-shadow: 0 0 0px 0 rgba(148, 148, 148, 0.5);\n          box-shadow: 0 0 0px 0 rgba(148, 148, 148, 0.5);\n  position: relative;\n  color: #fff;\n  font-size: 12px;\n  border-bottom: 1px solid #979797; }\n.content-wrapper .mat-toolbar-single-row > span {\n  margin-right: 15px; }\n.content-wrapper .mat-toolbar-single-row .spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n.content-wrapper .mat-toolbar-single-row .mat-icon {\n  vertical-align: middle; }\n.mat-title {\n  font-size: 20px; }\n.devider {\n  border: none;\n  border-left: 1px solid #979797;\n  height: 21px;\n  opacity: 0.26;\n  width: 3px; }\n.map-title-font {\n  font-size: 16px;\n  font-weight: normal;\n  color: #f6f6f6;\n  height: 19px; }\n.map-toolbar {\n  height: 54px; }\n.not_indexed_svg {\n  height: 13px;\n  width: 13px;\n  margin-left: 3px; }\n.not_indexed_circle {\n  stroke-dasharray: 3;\n  stroke: #070707;\n  stroke-width: 3px;\n  fill: white;\n  fill-opacity: 1;\n  position: absolute; }\n/* new css */\n.subway-map-new-filter-select {\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  position: relative;\n  padding-right: 10px !important; }\n.filder-div {\n  float: right;\n  position: relative;\n  top: 5px;\n  font-family: 'Heebo' !important; }\n.show-legend {\n  color: #f4f4f4;\n  font-size: 12px;\n  opacity: 0.8;\n  width: 60px;\n  padding: 4px !important; }\n.filter-icon {\n  color: white;\n  font-size: 16px; }\n.hand {\n  cursor: pointer;\n  padding: 0 10px !important; }\n.filter-dropdown-menu {\n  position: absolute;\n  top: 100%;\n  right: 245px;\n  z-index: 1;\n  min-width: 170px;\n  padding: 4px 10px;\n  margin: 2px 0 0;\n  font-size: 12px;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0px; }\n.filter-dropdown-menu li {\n  margin-bottom: 8px; }\n/* input.input-checkbox[type=\"checkbox\"]{ \n    width: 18px;\n    height: 18px;\n    margin-right: 5px;\n    position: relative;\n    top: 4px;\n} */\ninput[type=checkbox] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  visibility: hidden;\n  margin-right: 5px;\n  text-align: center; }\ninput[type=checkbox]:after {\n  content: \" \";\n  background-color: #d8d8d8;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  visibility: visible;\n  border: 1px solid #979797; }\ninput[type=checkbox]:checked:after {\n  content: \"\\2714\"; }\n.process-name {\n  color: #4a4a4a;\n  position: relative;\n  bottom: 4px; }\n.legend-box {\n  color: #ffffff;\n  width: 555px;\n  /* height: 74px; */\n  border: 1px solid #273043 !important;\n  position: absolute;\n  top: 28px;\n  right: 125px;\n  /* background-color: #2b3349; */\n  background-color: #1E2435;\n  /* padding: 3px 0 5px 8px; */\n  padding: 4px 0 0 8px;\n  z-index: 1; }\n.legend-head {\n  opacity: 0.58;\n  font-size: 11px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-bottom: 8px;\n  padding-top: 4px; }\n.status-img {\n  color: #ffffff; }\n.status-desc {\n  font-size: 10px;\n  color: #ffffff;\n  /* padding-right: 13px; */ }\n.bots-health {\n  height: 74px;\n  border-left: 2px solid #2F3443; }\n.legend-status {\n  padding-right: 0;\n  padding-bottom: 4px; }\n.processes-icon {\n  width: 18px;\n  height: 17px; }\n.un-healthy {\n  margin-bottom: 3px; }\n.position-relation {\n  /* position: relative; */\n  border-right: 1px solid #979797;\n  font-size: 15px;\n  margin-right: 3px;\n  margin-left: -4px; }\n.apply-filter-symbol {\n  height: 8px;\n  width: 8px;\n  background-color: #ff5a11;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  position: absolute;\n  right: 8px; }\n.zoom-icons {\n  color: gray; }\n.textarea {\n  min-height: 150px;\n  border: 1px solid #ddd;\n  padding: 15px;\n  position: relative; }\n.grabber {\n  margin-top: 23px;\n  margin-left: -23px;\n  margin-right: -23px;\n  margin-bottom: -50px;\n  content: '';\n  cursor: pointer;\n  bottom: 0 !important;\n  font-family: 'Heebo' !important;\n  /* background-image: url('/assets/images/drag.png'),none; */\n  background-size: initial;\n  z-index: 99999;\n  background-repeat: no-repeat; }\n.pull-right1 {\n  margin-top: -10px;\n  position: relative;\n  z-index: 9999;\n  margin-right: -13px;\n  float: right; }\n.pull-right1 .mat-form-field-underline {\n    display: none !important; }\n.pull-right1 .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper {\n    display: none; }\n.pull-right1 .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-select .mat-select-trigger .mat-select-value {\n    color: #ffff; }\n.pull-right1 .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-select .mat-select-trigger .mat-select-value .mat-select-value-text {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: #d3d7dd; }\n.pull-right1 .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-select .mat-select-trigger .mat-select-value .mat-select-placeholder {\n      color: #d3d7dd !important; }\n.pull-right1 .mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-select .mat-select-trigger .mat-select-arrow-wrapper .mat-select-arrow {\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid;\n    margin: 0 4px;\n    color: #d3d7dd; }\n.map-sec {\n  /* background-color: #282b4b !important; */\n  background-color: #273043 !important;\n  /* border: 1px solid #282b4b; */\n  /* margin-left: -23px;\n    margin-right: -24px; */\n  /* margin: 0px 10px 10px 10px !important; */ }\n.process-heading {\n  font-size: 15px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #a9a9a9;\n  padding-left: 6px;\n  position: relative;\n  bottom: 10px;\n  opacity: 0.83; }\n.acc-arrow {\n  color: #ffffff;\n  font-size: 34px; }\n.diagram-note {\n  /* margin-top: -11px;\n    margin-left: -6px; */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.fa-robot {\n  /* margin-top: 13px;\n    margin-left: -9.5px; */\n  width: 20px !important;\n  height: 18px !important;\n  margin-top: 3px;\n  margin-left: -8px; }\n.bot-count {\n  width: 45px;\n  height: 18px;\n  color: #fffefe;\n  border-radius: 5px;\n  font-size: 10px;\n  padding-left: 4px;\n  margin-top: 32px;\n  margin-left: -35px; }\n.bot-count-healthy {\n  background-color: #313a53; }\n.bot-count-unhealthy {\n  background-color: #d84f64; }\n/* .djs-element.djs-shape.highlight-white {\n    stroke: #282B4B !important;\n    fill: #282B4B !important;\n } */\n/* .djs-visual circle:nth-child(1) {\n    stroke-width: 3px;\n    fill: #ffffff;\n }\n .djs-visual circle:nth-child(2) {\n    stroke-width: 0px !important;\n } */\n.plus-icon {\n  font-size: 20px;\n  color: #FFFFFF;\n  opacity: 0.5; }\n.plus-icon:hover {\n  opacity: 1; }\n.minimize-icon {\n  position: relative;\n  bottom: 8px; }\n.active-btn {\n  opacity: 1; }\n.mat-icon-button {\n  width: 30px !important; }\n.mat-expansion-panel-content.mat-expanded {\n  background: #212839 !important;\n  min-height: 160px !important;\n  padding-bottom: 10px !important; }\n.djs-outline {\n  stroke-width: 0px !important; }\n.active_slow {\n  background-color: #FFB600 !important; }\n.active_issues {\n  background-color: #f56464 !important; }\n.active_waiting {\n  background-color: #4A90E2 !important; }\n.active_acceptable {\n  background-color: #508b11 !important; }\n.drop_count {\n  text-align: center !important; }\n.dot-circle {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 9px;\n  margin-top: 24px; }\n.circle-data {\n  padding-left: 4px;\n  width: 1.5em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.active-data {\n  padding-left: 30px; }\n.exception-data {\n  padding-left: 30px; }\n.exception-data:hover {\n  text-decoration: underline !important; }\n.exception-data:link {\n  text-decoration: none; }\n.exception-data:visited {\n  text-decoration: none; }\n.dot-active {\n  height: 9px;\n  width: 9px;\n  margin-top: 4px;\n  background-color: #6cb654;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle; }\n.dot-failed {\n  height: 9px;\n  width: 9px;\n  margin-top: 4px;\n  background-color: #f56464;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle; }\nspan.instance-number, span.instance-name {\n  font-size: 0.95em !important;\n  margin-left: 6px;\n  /* font-family: Heebo !important; */ }\nspan.instance-name {\n  margin-left: 14px !important;\n  position: absolute;\n  top: 73px;\n  left: 115px; }\n.diagram-data {\n  color: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  padding: 2.9em 11.7mm;\n  font-size: 1.8em; }\nspan.instance-number img {\n  margin-top: -4px !important; }\nhr {\n  border-top-style: solid #979797;\n  border-top-width: 1px;\n  margin: 4px 0 4px 0 !important; }\nhr.instance-line {\n  border-top: 1px solid #979797;\n  margin: 12px 0 12px 0 !important; }\n.circle-in {\n  font-size: 18px;\n  text-align: center;\n  min-width: 55px;\n  color: #ffffff;\n  padding: 5px;\n  position: absolute;\n  border-radius: 4px;\n  border: solid 1px #313e5a;\n  background-color: #303d53;\n  /* border-left: solid 3px #626aa3; */ }\n.circle-in:before {\n  content: '';\n  position: relative;\n  border-left: solid 3px #626aa3;\n  top: 0;\n  left: -5px;\n  padding: 4px; }\n.circle-out {\n  font-size: 18px;\n  text-align: center;\n  min-width: 55px;\n  color: #ffffff;\n  padding: 5px;\n  position: absolute;\n  border-radius: 4px;\n  border: solid 1px #313e5a;\n  background-color: #303d53;\n  /* border-right: solid 3px #626aa3; */ }\n.circle-out:after {\n  content: '';\n  position: relative;\n  border-left: solid 3px #626aa3;\n  top: 0;\n  right: -14px;\n  padding: 4px; }\n.circle-in-count {\n  font-size: 18px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  min-width: 45px;\n  margin: 18px 0px; }\n.circle-out-count {\n  font-size: 18px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  min-width: 45px;\n  margin: 18px 0px; }\n.drop {\n  font-size: 18px;\n  min-width: 45px;\n  border-radius: 7px;\n  border: solid 1px #626aa3;\n  background-color: #f56464;\n  color: #ffffff;\n  padding: 1px 8px; }\n.nodrop {\n  padding: 1px 8px;\n  border-radius: 7px;\n  border: solid 1px #626aa3;\n  background-color: #508b11;\n  color: #ffffff; }\n.process_key {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 24px;\n  margin-left: -39px;\n  width: 228px;\n  text-align: center; }\n.mat-option-text {\n  font-size: 12px;\n  display: inline-block;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n.mat-pseudo-checkbox {\n  width: 15px !important;\n  height: 15px !important;\n  border: 2px solid;\n  border-radius: 2px;\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1); }\n.mat-checkbox-layout .mat-checkbox-label {\n  font-weight: normal;\n  color: #d3d7dd; }\n.mat-checkbox-inner-container {\n  width: 15px !important;\n  height: 15px !important; }\n.mat-checkbox-frame {\n  -webkit-transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);\n  border-width: 2px;\n  border-style: solid;\n  border-color: #2896cc; }\n.subway-viewer-search-field {\n  margin-left: 10px;\n  margin-top: 10px;\n  border: 1px solid #2c394e;\n  border-radius: 4px;\n  background-color: #2c394e;\n  display: inline-block;\n  z-index: 100;\n  color: #d3d7dd;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding: .375rem 3.0rem .375rem .75rem;\n  width: 90%; }\n.subway-viewer-search-icon {\n  color: #d3d7dd;\n  position: absolute;\n  z-index: 1000;\n  right: 25px;\n  padding: 2px;\n  font-size: 18px;\n  margin-top: 15px; }\n.mat-form-field-infix {\n  width: 136px !important; }\n.button_border {\n  border-left: 1px solid #b2b2b2; }\n#tooltip {\n  z-index: 9999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubwayViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__ = __webpack_require__("../../../../../src/app/shared/shared-modules/bpmn-js/bpmn-js.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_services_bpmn_bpmn_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/bpmn/bpmn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_services_admin_admin_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sidenav_service__ = __webpack_require__("../../../../../src/app/main/operational/services/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_modules_pipes_format_count__ = __webpack_require__("../../../../../src/app/shared/shared-modules/pipes/format-count.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SubwayViewerComponent = /** @class */ (function () {
    function SubwayViewerComponent(_adminService, _bpmnService, _workItemService, _configService, router, sidenavbarService) {
        this._adminService = _adminService;
        this._bpmnService = _bpmnService;
        this._workItemService = _workItemService;
        this._configService = _configService;
        this.router = router;
        this.sidenavbarService = sidenavbarService;
        this.saveRangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.am_select = document.getElementById("subwaySelect");
        this._alive = true;
        this.isLoading = false;
        this.childProcess = [];
        this.participants = [];
        this.procgrp = [];
        this.showSidenav = false;
        // private viewer_0 = true;
        this.accordionheight = 700;
        this.yAxis = 0;
        this.resizesvg = false;
        this.isbottomshown = "visible";
        this.ishavingdata = "visible";
        this.showfilterBox = false;
        this.generateTooltip = function (tooltipdata, data) {
            var img_clr = '';
            if (data.healthStatus) {
                switch (data.healthStatus) {
                    case 'healthy':
                        img_clr = 'green';
                        break;
                    case 'unhealthy':
                        img_clr = 'red';
                        break;
                }
            }
            var statusMessage = '';
            if (data.status) {
                switch (data.status) {
                    case 'ACTIVE_NOT_FLOWING':
                        statusMessage = "Active, issues";
                        break;
                    case 'ACTIVE_FLOWING':
                        statusMessage = "Active, acceptable";
                        break;
                    case 'ACTIVE_SLOW':
                        statusMessage = "Active, average";
                        break;
                    case 'INDEXED':
                        statusMessage = "Initiated, waiting";
                        break;
                    case 'NOT_INDEXED':
                        statusMessage = "Initiated, waiting";
                        break;
                    case 'WAITING':
                        statusMessage = "Initiated, waiting";
                        break;
                    default:
                        statusMessage = "";
                }
            }
            // let isbottomshown = "visible";
            // let ishavingdata = "visible";
            if (tooltipdata && tooltipdata.failed_records_actual && tooltipdata.failed_records_actual[0] == 0 && tooltipdata.failed_records_actual[1] == 0 && tooltipdata.failed_records_actual[2] == 0) {
                this.ishavingdata = "hidden";
            }
            if (tooltipdata.anticipated_time == undefined || tooltipdata.anticipated_time == "") {
                this.isbottomshown = "hidden";
            }
            var arrowMarker = '', arrowMarkerFail = '', arrowMarkerTotal = '', arrowMarkerFailedPending = '', arrowMarkerResolvedDenied = '', arrowMarkerResolvedComplete;
            if (tooltipdata.avg_processess_time_actual[1] > tooltipdata.avg_processess_time_actual[2]) {
                arrowMarker = 'arrowdown';
            }
            else {
                arrowMarker = 'arrowup';
            }
            if (tooltipdata.failed_records_actual[0] > tooltipdata.failed_records_actual[2]) {
                arrowMarkerFail = 'arrowdown';
            }
            else {
                arrowMarkerFail = 'arrowup';
            }
            if (tooltipdata.total_records_per_day_actual[0] > tooltipdata.total_records_per_day_actual[1]) {
                arrowMarkerTotal = 'arrowdown';
            }
            else {
                arrowMarkerTotal = 'arrowup';
            }
            if (tooltipdata.failed_pending[0] > tooltipdata.failed_pending[1]) {
                arrowMarkerFailedPending = 'arrowdown';
            }
            else {
                arrowMarkerFailedPending = 'arrowup';
            }
            if (tooltipdata.reolved_complete[0] < tooltipdata.reolved_complete[1]) {
                arrowMarkerResolvedComplete = 'arrowdown';
            }
            else {
                arrowMarkerResolvedComplete = 'arrowup';
            }
            if (tooltipdata.resolved_denied[0] > tooltipdata.resolved_denied[1]) {
                arrowMarkerResolvedDenied = 'arrowdown';
            }
            else {
                arrowMarkerResolvedDenied = 'arrowup';
            }
            if (tooltipdata && tooltipdata.avg_processess_time_actual && tooltipdata.avg_processess_time_actual[1] === null) {
                tooltipdata.avg_processess_time_actual[1] = '-';
            }
            if (tooltipdata && tooltipdata.avg_processess_time_actual && tooltipdata.avg_processess_time_actual[2] === null) {
                tooltipdata.avg_processess_time_actual[2] = '-';
            }
            if (tooltipdata && tooltipdata.failed_records_actual && tooltipdata.failed_records_actual[0] === null) {
                tooltipdata.failed_records_actual[0] = '-';
            }
            if (tooltipdata && tooltipdata.failed_records_actual && tooltipdata.failed_records_actual[2] === null) {
                tooltipdata.failed_records_actual[2] = '-';
            }
            if (tooltipdata && tooltipdata.total_records_per_day_actual && tooltipdata.total_records_per_day_actual[0] === null) {
                tooltipdata.total_records_per_day_actual[0] = '-';
            }
            if (tooltipdata && tooltipdata.total_records_per_day_actual && tooltipdata.total_records_per_day_actual[1] === null) {
                tooltipdata.total_records_per_day_actual[1] = '-';
            }
            var clsName = data.healthStatus === "unhealthy" ? 'content' : 'health_green';
            var headerclr = data.status === "WAITING" ? 'active_waiting' : data.status === "NOT_INDEXED" ? 'active_waiting' : data.status === "ACTIVE_SLOW" ? 'active_slow' : data.status === "ACTIVE_NOT_FLOWING" ? 'active_issues' : data.status === "ACTIVE_FLOWING" ? 'active_acceptable' : data.status === "INDEXED" ? 'active_waiting' : 'active_issues';
            this.exception_records = " <tr>\n    <td> Exceptions Records</br>(in %)</td>\n    <td class=\"timevalue\">" + tooltipdata.failed_records_actual[0] + " %<img src=\"/assets/images/" + arrowMarkerFail + ".png\" class=\"tooltip_image\"></td>\n    <td class=\"timevalue\">" + tooltipdata.failed_records_actual[2] + " %</td>\n  <tr>";
            this.avg_process = "<td> Avg Processing Time/Record</br>(in Seconds)</td>";
            var avg_processingtime_minutes = "<td> Avg Processing Time/Record</br>(in Minutes)</td>";
            if (data.display_name.startsWith("WGS")) {
                this.Failed_Pending_Investigation = " <tr>\n    <td> Failed - Pending Investigation</br>(in %)</td>\n    <td class=\"timevalue\">" + tooltipdata.failed_pending[0] + " %<img src=\"/assets/images/" + arrowMarkerFailedPending + ".png\" class=\"tooltip_image\"></td>\n    <td class=\"timevalue\">" + tooltipdata.failed_pending[1] + " %</td>\n  <tr>";
                this.Resolved = " <tr>\n    <td> Resolved - Denied</br>(in %) </td>\n    <td class=\"timevalue\">" + tooltipdata.resolved_denied[0] + "%<img src=\"/assets/images/" + arrowMarkerResolvedDenied + ".png\" class=\"tooltip_image\"></td>\n    <td class=\"timevalue\">" + tooltipdata.resolved_denied[1] + "%</td>\n  <tr>\n  <tr>\n  <td> Resolved paid/complete</br>(in %) </td>\n  <td class=\"timevalue\">" + tooltipdata.reolved_complete[0] + "%<img src=\"/assets/images/" + arrowMarkerResolvedComplete + ".png\" class=\"tooltip_image\"></td>\n  <td class=\"timevalue\">" + tooltipdata.reolved_complete[1] + "%</td>\n  <tr>\n  ";
                // this.exception_records = '<tr style="display:none;"></tr>'
            }
            else {
                this.Failed_Pending_Investigation = '<tr style="display:none;"></tr>';
                this.Resolved = '<tr style="display:none;"></tr>';
            }
            if (data.display_name == "POSTBACK 1" || data.display_name == "POSTBACK 2" || data.display_name.startsWith("WGS")) {
                this.avg_process = "<td> Avg Processing Time/Record</br>(in Minutes)</td>";
            }
            else {
                this.avg_process = "<td> Avg Processing Time/Record</br>(in Seconds)</td>";
            }
            var tmpHtml = "\n    <div class=\"subway-viewer-nodes-tooltip\">\n      <div class=\"subway-tooltip-header " + headerclr + "\">\n        <span class=\"text\">Process Throughput : </span><span class=\"status\">" + statusMessage + "</span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 headercontent\">\n          <span class=\"headertext\"> Bots Health : <img class=\"icon\" src=\"/assets/images/bitmap" + img_clr + ".png\"><span class='" + clsName + "'>" + data.healthStatus + " </span> </span>\n        </div>\n        <div class=\"subway-tooltip-label\">Active Bots :  <span class=\"subway-tooltip-value\">" + tooltipdata.active_bots + "</span>\n        Standby Bots  :  <span class=\"subway-tooltip-value\">" + tooltipdata.stand_by_bots + "</span></div>\n      </div>\n      <div class=\"subway-tooltip-main-container\">\n        <table class=\"table\">\n          <tr>\n            <th> KPI Name   </th>\n            <th> Actuals </th>\n            <th> KPI </th>\n          </tr>\n          <tr>\n            " + this.avg_process + "\n            <td class=\"timevalue\">" + tooltipdata.avg_processess_time_actual[1] + "<img src=\"/assets/images/" + arrowMarker + ".png\" class=\"tooltip_image\"></td>\n            <td class=\"timevalue\">" + tooltipdata.avg_processess_time_actual[2] + "</td>\n          <tr>\n             " + this.exception_records + "\n          <tr>\n          " + this.Failed_Pending_Investigation + "\n          <tr>\n          " + this.Resolved + "\n          <tr>\n            <td> Total Records/day</td>\n            <td class=\"timevalue\">" + tooltipdata.total_records_per_day_actual[0] + "<img src=\"/assets/images/" + arrowMarkerTotal + ".png\" class=\"tooltip_image\"></td>\n            <td class=\"timevalue\">" + tooltipdata.total_records_per_day_actual[1] + "</td>\n         \n         <tr>\n        </table>\n        <div class=\"row tooltip-bottom\">\n          <div class=\"col-lg-6 text-center\">\n            <span class=\"timeclass\"> Anticipated Time </span></br>\n            <span class=\"timevalue\">" + tooltipdata.anticipated_time + "</span>\n          </div>\n          <div class=\"col-lg-6 text-center\">\n            <span class=\"timeclass\"> Up Time </span></br>\n            <span class=\"timevalue\">" + tooltipdata.up_time + "</span>\n          </div>\n        </div>\n      </div>\n    </div>";
            return tmpHtml;
        };
        this.SecondsTohhmmss = function (totalSeconds) {
            var hours = Math.floor(totalSeconds / 3600);
            var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
            var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
            seconds = Math.round(seconds * 100) / 100;
            var result = (hours > 0 ? hours + "h:" : '');
            result += (minutes > 0 ? minutes + "m:" : '');
            result += (seconds > 0 ? seconds < 10 && seconds >= 1 ? "0" + seconds + "s:" : seconds + "s:" : seconds == 0 ? "0s:" : seconds + "s:");
            return result.trim().slice(0, -1);
        };
        this._workItemService.getObj.subscribe(function (data) {
        });
    }
    SubwayViewerComponent.prototype.loadSubWayMap = function () {
        var _this = this;
        this._viewer = new __WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["e" /* NavigatedViewer */].default({
            container: '#subway_map_viewer_' + this.bpmn_id,
            width: '100%',
            height: '100%'
        });
        this._overlays = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].overlays);
        this._canvas = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].canvas);
        this._elementRegistry = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].elementRegistry);
        this._eventBus = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].eventBus);
        this._zoomScroll = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].zoomScroll);
        this._eventBus.on('element.out', function (e) {
            if ((e.element.type == 'bpmn:IntermediateThrowEvent') && (_this._activeOverlayId)) {
                //this._overlays.remove(this._activeOverlayId);
                // this._activeOverlayId = "";
                _this.tooltipHTML = HTMLElement.apply('<div style="display:none;"></div>');
            }
        });
        this._eventBus.on('element.click', function (e) {
            if (_this._processesStatusData) {
                var data = _this._processesStatusData[e.element.id];
                if (data && data.key) {
                    var key = data.key;
                    _this.router.navigate(['app', 'processes', key]);
                }
            }
        });
        this.loadProcessMap();
    };
    SubwayViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._workItemService.exceptionrecords = false;
        this._processesStatusData = this.overlaydata;
        this._statusCssCls = ['highlight-white', 'highlight-green', 'highlight-red', 'highlight-yellow', 'highlight-blue', 'highlight-black', 'highlight-darkgrey'];
        this._status_css_mapping = {
            'ACTIVE_FLOWING': 'highlight-green',
            'ACTIVE_SLOW': 'highlight-yellow',
            'INACTIVE': 'highlight-white',
            'ACTIVE_NOT_FLOWING': 'highlight-red',
            'FEATURE_OFFLINE': 'highlight-black',
            'NOT_INDEXED': 'highlight-darkgrey',
            'INDEXED': 'highlight-darkgrey',
            'WAITING': 'highlight-darkgrey'
        };
        /* API call for get subprocess list to block the click on subprocess on subwaymap */
        this._adminService.getProcessList().subscribe(function (data) {
            var processes = data.result;
            for (var i = 0; i < processes.length; i++) {
                if (processes[i].children && processes[i].children.length != 0) {
                    for (var j = 0; j < processes[i].children.length; j++) {
                        _this.childProcess.push(processes[i].children[j]["name"]);
                    }
                }
            }
        }, function (error) {
            console.log(error);
        });
        if (this._bpmnService.participants && this._bpmnService.participants.length > 0) {
            setTimeout(function () {
                _this.loadSubWayMap();
                setTimeout(function () {
                    //this.zoomReset();
                    _this.setRoundEdges();
                    _this._repaintMap();
                    var els = document.querySelectorAll('text');
                    for (var x = 0; x < els.length; x++)
                        els[x].style.display = 'none';
                    var mat_placeholder = document.getElementsByClassName("mat-select-placeholder");
                    mat_placeholder[0]["style"].color = "#d3d7dd";
                }, 100);
                _this.isLoading = false;
                _this.setLoader();
                setTimeout(function () {
                    _this.zoomReset();
                }, 500);
            }, 500);
            this._workItemService.getClaimsData().subscribe(function (data) {
                _this.options = data["result"];
            });
        }
        setTimeout(function () {
            document.getElementById('subway_dblclick').onkeydown = function () { return false; };
            var edit_disable = document.getElementsByClassName('process_key');
            Array.from(edit_disable).forEach(function (el) {
                el["contentEditable"] = "false";
            });
            var edit_disable_instance = document.getElementsByClassName('diagram-note');
            Array.from(edit_disable_instance).forEach(function (el) {
                el["contentEditable"] = "false";
            });
        }, 2000);
        // if(this._workItemService.exceptionrecords){
        //   this._workItemService.exceptionrecords = false;
        // }
    };
    SubwayViewerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this._processesStatusData = this.overlaydata;
        setTimeout(function () {
            //this.zoomReset();
            _this.setRoundEdges();
            _this._repaintMap();
            setTimeout(function () {
                var edit_disable = document.getElementsByClassName('process_key');
                Array.from(edit_disable).forEach(function (el) {
                    el["contentEditable"] = "false";
                });
                var edit_disable_instance = document.getElementsByClassName('diagram-note');
                Array.from(edit_disable_instance).forEach(function (el) {
                    el["contentEditable"] = "false";
                });
            }, 2000);
        }, 100);
    };
    SubwayViewerComponent.prototype.ngOnDestroy = function () {
        this._alive = false;
        if (this._activeOverlayId) {
            this._overlays.remove(this._activeOverlayId);
            this._activeOverlayId = "";
        }
    };
    SubwayViewerComponent.prototype.setXML = function (procesId) {
        // var len = procesId.length;
        if (procesId.length === 0) {
            this.participants.forEach(function (obj) {
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].style.visibility = 'visible';
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].style.display = "block";
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].nextSibling.style.display = "block";
            });
        }
        this.participants.forEach(function (obj) {
            var isexist = procesId.indexOf(obj.key);
            if (isexist > -1) {
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].style.visibility = 'visible';
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].style.display = "block";
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].nextSibling.style.display = "block";
            }
            else if (procesId.length !== 0) {
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].style.visibility = 'hidden';
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].style.display = "none";
                document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].nextSibling.style.display = "none";
            }
        });
    };
    SubwayViewerComponent.prototype.handleError = function (err) {
        if (err) {
            console.warn('Ups, error: ', err);
        }
    };
    SubwayViewerComponent.prototype.loadProcessMap = function () {
        this._bpmnService.settingsPage = false;
        //this._bpmnService.loadProcessMapxml().subscribe((data: any) => {
        //data.result[0].bpmn
        this._viewer.importXML(this.xmldata, this.handleError);
        // this.loadProcessStates();
        this.participants = this._bpmnService.participants; //data.result[0].filter;
        this.getProcessStatesInInterval();
        //}, 
        // (error) => {
        //   console.log("Error in SubWay data call");
        // });
    };
    SubwayViewerComponent.prototype.setLoader = function () {
        this.setDefaultWidth();
        var parent = document.getElementsByClassName("highlight-darkgrey");
        if (parent.length != 0) {
            for (var i = 0; i <= parent.length; i++) {
                if (parent[i] && parent[i]) {
                    var parentchild = parent[i].getElementsByClassName("djs-visual");
                    for (var j = 0; j <= parentchild.length; j++) {
                        if (parentchild[j]) {
                            var parentchildchild = parentchild[j].querySelectorAll('circle');
                            for (var k = 0; k <= parentchildchild.length; k++) {
                                var animationCircle = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
                                if (parentchildchild[k]) {
                                    var circleheight = parentchildchild[k].getAttribute("cx");
                                    parentchildchild[k].style.strokeWidth = "3px";
                                    if (k == 1) {
                                        parentchildchild[k].style.strokeWidth = "0px";
                                    }
                                    parentchildchild[k].style.strokeDasharray = "5";
                                    var circleheightNmr = parseInt(circleheight);
                                    animationCircle.innerHTML = '<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="' + 0 + ' ' + circleheightNmr + ' ' + circleheightNmr + ';360' + ' ' + circleheightNmr + ' ' + circleheightNmr + '" keyTimes="0;1" dur="3s" begin="0s" repeatCount="indefinite"></animateTransform>';
                                    // let Animationelement = animationCircle.firstElementChild;
                                    parentchildchild[k].innerHTML = "";
                                    parentchildchild[k].appendChild(animationCircle.firstElementChild);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    SubwayViewerComponent.prototype.setDefaultWidth = function () {
        var allCircleElms = document.getElementsByTagName("circle");
        for (var i = 0; i <= allCircleElms.length; i++) {
            if (allCircleElms[i] && allCircleElms[i].style) {
                var circleStrokeWidth = allCircleElms[i].style.strokeDasharray;
                if (circleStrokeWidth != null && circleStrokeWidth != "" && circleStrokeWidth === "5") {
                    allCircleElms[i].style.strokeWidth = "1px";
                    allCircleElms[i].style.strokeDasharray = "0";
                }
            }
        }
    };
    SubwayViewerComponent.prototype.compareValues = function (firstNumber, secondNumber) {
        if (firstNumber <= secondNumber)
            return "ok";
        else
            return "notok";
    };
    // private loadProcessStates() {
    //   this.isLoading = true;
    //   this._workItemService.getWorkItems({ start: 1, limit: -1 })
    //     .subscribe((data: any) => {
    //       console.log(data);
    //       this._processesStatusData = data.result["subway_map"];
    //       this.setLoader();
    //       this.isLoading = false;
    //     }, (error) => {
    //       console.log("Error in SubWay data call");
    //     });
    // }
    SubwayViewerComponent.prototype.getProcessStatesInInterval = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(this._configService.config.subWayMapPollingTime)
            .takeWhile(function () {
            return _this._alive;
        })
            .subscribe(function () {
            // this.loadProcessStates();
        });
    };
    SubwayViewerComponent.prototype._repaintMap = function () {
        for (var p in this._processesStatusData) {
            var statusObject = this._processesStatusData[p];
            var data = statusObject.attribute;
            this.setMarkers(p, this._processesStatusData[p].status, this._processesStatusData[p].healthStatus, this._processesStatusData[p], data);
        }
    };
    SubwayViewerComponent.prototype.setRoundEdges = function () {
        var marker = document.getElementsByTagName('marker');
        for (var i = 0; i < marker.length; i++) {
            if (marker[i]) {
                marker[i].setAttribute('style', 'marker-end: url(#marker-circle)');
                marker[i].setAttribute('style', 'fill: red');
            }
        }
    };
    SubwayViewerComponent.prototype.setMarkers = function (canvasEl, styleVal, healthStatus, canvasObj, Circledata) {
        var _this = this;
        if (document.querySelectorAll("[data-element-id='" + canvasEl + "']") && document.querySelectorAll("[data-element-id='" + canvasEl + "']")[0]) {
            var custom_circls = Array.from(document.querySelectorAll("[data-element-id='" + canvasEl + "']")[0].querySelectorAll("circle"));
            custom_circls.forEach(function (item) {
                item.style.strokeDasharray = '0';
            });
        }
        var tspan = document.getElementsByTagName('tspan');
        this._bpmnService.participants.forEach(function (item) {
            for (var i = 0; i < tspan.length; i++) {
                if (tspan[i].innerHTML === item.name) {
                    tspan[i].style.display = 'none';
                }
            }
        });
        try {
            this._statusCssCls.forEach(function (cls) {
                if (cls) {
                    _this._canvas.removeMarker(canvasEl, cls);
                }
            });
            if (styleVal) {
                var inner_img_clr = 'bitmapgreen';
                if (healthStatus) {
                    switch (healthStatus) {
                        case 'healthy':
                            inner_img_clr = 'bitmapgreen';
                            break;
                        case 'unhealthy':
                            inner_img_clr = 'bitmapred';
                            break;
                    }
                }
                var activeCls = '';
                var strokestyle = '';
                var loadclass = '';
                switch (styleVal) {
                    case 'ACTIVE_FLOWING':
                        activeCls = "#518b11";
                        strokestyle = "#red";
                        break;
                    case "ACTIVE_NOT_FLOWING":
                        activeCls = "#f56464";
                        strokestyle = "#f85f71";
                        break;
                    case "ACTIVE_SLOW":
                        activeCls = "#ffb600";
                        strokestyle = "#fedd74";
                        break;
                    case "FEATURE_OFFLINE":
                        activeCls = "#000000";
                        strokestyle = "#4d4d4d";
                        break;
                    case "INACTIVE":
                        activeCls = "#686868";
                        strokestyle = "#bfbfbf";
                        break;
                    case "INDEXED":
                    case "NOT_INDEXED":
                    case "WAITING":
                        loadclass = "loader";
                        break;
                }
                //if (inner_img_clr !== '') {
                this._overlays.remove({ element: canvasEl });
                var shape = this._elementRegistry.get(canvasEl); // to get the height and width of element
                var circlewidth = (shape.width / 2) > (shape.height / 2) ? shape.width / 2 : shape.height / 2;
                var circleleft = (shape.width / 2) > (shape.height / 2) ? (shape.height - shape.width) / 2 : (shape.width - shape.height) / 2;
                var formatCountPipe = new __WEBPACK_IMPORTED_MODULE_9__shared_shared_modules_pipes_format_count__["a" /* FormatCountPipe */]();
                var instancesCount = formatCountPipe.transform(canvasObj.instances ? canvasObj.instances : '0');
                var $overlayHtml = $('<div class="diagram-note" data-canvas-id=' + canvasEl + '><svg height="' + (shape.height + 40) + '" width="' + (shape.width + 40) + '"> \
      <circle cx="' + circlewidth + '" cy="' + circlewidth + '" r="' + ((((shape.width / 2) + (shape.height / 2)) / 2) - 2) + '" stroke-width="8" fill="rgb(46, 53, 90)" stroke = ' + activeCls + ' /> \
    </svg>\
    <div class="diagram-data"> \
    <span class="instance-number"> <img style="width:20px; height:20px" src="../../../../assets/images/boot.png"/> ' + instancesCount + '</span> \
     <span class="instance-name">Instances</span><hr class="instance-line"/> \
     <div class="dot-circle"> <span class="dot-active"></span> <span class="circle-data">' + (canvasObj.active_count ? canvasObj.active_count : '0') + '</span><span class="active-data"> Active</span></div>\
     <div class="dot-circle"> <span class="dot-active"></span> <span class="circle-data">' + (canvasObj.failed_count ? canvasObj.failed_count : '0') + '</span><span class="exception-data"> Exceptions</span></div>\
      <div class="dot-circle"> <span class="dot-failed"></span> <span class="circle-data">' + (canvasObj.failed_count ? canvasObj.failed_count : '0') + '</span><span class="exception-data"> InActive</span></div> </div> </div>')
                    .css({
                    width: shape.width + 40,
                    height: shape.width + 40
                });
                var bot_count = canvasObj.attribute ? (canvasObj.attribute.active_bots ? canvasObj.attribute.active_bots : 0) : 0;
                var $overBotCountHtml = $('<div class="bot-count bot-count-healthy">' + bot_count + ' Bot' + (bot_count == 1 ? '' : 's') + '</div>');
                var that = this;
                $overlayHtml.click(function (e) {
                    var _this = this;
                    if (e["target"].className == "exception-data") {
                        var obj = {
                            "processName": canvasObj.key,
                            "recordId": canvasObj.failed_records
                        };
                        this._workItemService.exceptionrecords = true;
                        var processId_1 = e.currentTarget.dataset.canvasId;
                        this.router.navigate(['app', 'processes', processId_1]);
                        this._workItemService.isViewRecordDetails = true;
                        // console.log(canvasObj.dropped_records);
                        this._workItemService.getExceptionssData(obj).subscribe(function (data) {
                            _this._workItemService.exceptionrecords = true;
                            _this._workItemService.workItemDetails = data['result'];
                            _this._workItemService.activePage = 'Exceptions Records';
                        });
                        return;
                    }
                    var processId = e.currentTarget.dataset.canvasId;
                    this.router.navigate(['app', 'processes', processId]);
                }.bind(this));
                $overlayHtml.mouseleave(function (e) {
                    this.tooltipHTML = '<div style="display:none;"></div>';
                }.bind(this));
                $overlayHtml.mouseover(function (e) {
                    var processId = e.currentTarget.dataset.canvasId;
                    var statusObject = this._processesStatusData[processId];
                    if (statusObject && statusObject.status != '' && statusObject.status != "INACTIVE") {
                        var tooltipHTML = '';
                        var pos = { "bottom": 0, "right": -10 };
                        if (e.pageX > 400) {
                            pos.left = e.pageX - 400 - 40;
                        }
                        else {
                            pos.left = e.pageX + 40;
                        }
                        if (e.pageY > 250 && e.pageY < 400) {
                            pos.top = e.pageY - 200 - 40;
                        }
                        else if (e.pageY > 400) {
                            pos.top = e.pageY - 400;
                        }
                        else {
                            pos.top = e.pageY - 5;
                        }
                        var tmptooltipHTML = this.generateTooltip(statusObject.attribute, statusObject);
                        this.tooltipHTML = '<div class="subway-map-custom-style">' + tmptooltipHTML + '</div>';
                        this.tooltipTOP = pos.top + "px";
                        this.tooltipLEFT = pos.left + "px";
                    }
                }.bind(this));
                this._overlays.add(canvasEl, styleVal, {
                    position: {
                        top: 0,
                        left: circleleft
                    },
                    html: $overlayHtml
                });
                // circle in count
                this._overlays.add(canvasEl, styleVal, {
                    position: {
                        top: shape.height / 2 - 14,
                        left: circleleft - 75
                    },
                    html: "<div class='circle-in'>" + (canvasObj.in ? canvasObj.in : '0') + "</div><br><div class='circle-in-count'>IN</div>"
                });
                // circle out count
                this._overlays.add(canvasEl, styleVal, {
                    position: {
                        top: shape.height / 2 - 14,
                        left: shape.width + 15
                    },
                    html: "<div class='circle-out'>" + (canvasObj.out ? canvasObj.out : '0') + "</div><br><div class='circle-out-count'>OUT</div> "
                });
                //dropcount
                var that = this;
                if (canvasObj.drop_counts != '-') {
                    if (canvasObj.drop_counts !== 0) {
                        var obj_1 = {
                            "pname": canvasObj.key,
                            "recordId": canvasObj.dropped_records
                        };
                        var $canvas_dropdown_count_Html = $("<div class='drop'><img style='width:16px;height:16px' src='../../../../assets/images/redimg.png'/>" + (canvasObj.drop_counts ? canvasObj.drop_counts : '0') + "</div>");
                        $canvas_dropdown_count_Html.click(function (e) {
                            that._workItemService.dropCountsLoader = true;
                            that.router.navigate(['/app/workitems']);
                            that._workItemService.getDropcountsData(obj_1).subscribe(function (data) {
                                that._workItemService.sendObj.next(data);
                                that._workItemService.dropCountsLoader = false;
                            });
                        });
                        this._overlays.add(canvasEl, styleVal, {
                            position: {
                                top: shape.height / 2 - 14,
                                left: circleleft - 190
                            },
                            html: $canvas_dropdown_count_Html
                        });
                    }
                    else {
                        this._overlays.add(canvasEl, styleVal, {
                            position: {
                                top: shape.height / 2 - 14,
                                left: circleleft - 145
                            },
                            html: "<div class='nodrop'><img style='width:16px;height:16px' src='../../../../assets/images/greenimg.png'/></div>"
                        });
                    }
                }
                this._overlays.add(canvasEl, styleVal, {
                    position: {
                        top: shape.width / 2 - 195,
                        left: shape.width / 2 - 82
                    },
                    html: '<div class="process_key"> ' + canvasObj.display_name + ' </div>'
                });
                // }
                // if (loadclass) {
                //   this._overlays.add(canvasEl, styleVal, {
                //     position: {
                //       bottom: 60,
                //       right: 60
                //     },
                //     html: '<div style="margin-top: -15px;margin-left: -6px;"><img src="/assets/images/loader.gif" style="width: 17px;border-radius:50%"></div>'
                //   });
                // }
                this._canvas.addMarker(canvasEl, styleVal);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    SubwayViewerComponent.prototype.zoomIn = function () {
        this._zoomScroll.stepZoom(1);
    };
    SubwayViewerComponent.prototype.zoomOut = function (id) {
        this._zoomScroll.stepZoom(-1);
    };
    SubwayViewerComponent.prototype.zoomReset = function () {
        this._zoomScroll.reset();
    };
    SubwayViewerComponent.prototype.zoomup = function (delta) {
        this._zoomScroll.scroll(delta);
    };
    SubwayViewerComponent.prototype.onValueChanged = function (event) {
        this.accordionheight = event;
        var parent_lob = $("#subway_map_viewer_" + this.selectedLOB_str).parents()[6];
        parent_lob.setAttribute('style', 'height:' + (this.accordionheight) + ';margin-bottom:10px');
        var subway_map_viewer = document.getElementById("subway_map_viewer_" + this.selectedLOB_str);
        if (subway_map_viewer) {
            subway_map_viewer.style.height = (this.accordionheight) + "px";
        }
        // setTimeout(() => {
        //   this.zoomReset();
        // }, 300);
    };
    SubwayViewerComponent.prototype.selectedLOB = function (lob) {
        this.selectedLOB_str = lob;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SubwayViewerComponent.prototype, "saveRangeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('xmlData'),
        __metadata("design:type", Object)
    ], SubwayViewerComponent.prototype, "xmldata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bpmn_id'),
        __metadata("design:type", String)
    ], SubwayViewerComponent.prototype, "bpmn_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('overlaydata'),
        __metadata("design:type", Object)
    ], SubwayViewerComponent.prototype, "overlaydata", void 0);
    SubwayViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subway-viewer',
            template: __webpack_require__("../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_shared_services_admin_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_5__shared_shared_services_bpmn_bpmn_service__["a" /* BpmnService */], __WEBPACK_IMPORTED_MODULE_7__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_config_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_8__services_sidenav_service__["a" /* SidenavService */]])
    ], SubwayViewerComponent);
    return SubwayViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".log-item-wrapper{\n    position: relative;\n    margin-bottom: 50px;\n}\n.time-cell{\n    width: 110px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 110px;\n            flex: 0 0 110px;\n    position: relative;\n}\n.log-cell{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 740px;\n            flex: 1 1 740px;\n    height: 50px;\n    font-size: 12px;\n    border-radius: 5px;\n    margin: 5px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 10px;\n}\n.vertical-line{\n    height: 110px;\n    width: 2px;\n    position: absolute;\n    left: 42px;\n    top: 25px;\n}\n.time-text{\n    text-align: center;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-left: 30px;\n}\n.log-time-now{\n    width: 55px;\n    height: 20px;\n    border-radius: 4px;\n    text-align: center;\n    z-index: 4;\n    position: relative;\n    line-height: 20px;\n    left: 15px;\n}\n.time-dot{\n    position: absolute;\n    border-radius: 100%;\n    width: 10px;\n    height: 10px;\n    top: 3px;\n    left: 38px;\n    z-index: 1;\n}\n.time-delay{\n    position: absolute;\n    top: 65px;\n    left: -30px;\n    width: 65px;\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-row flex-align-center flex-justify-center log-item-wrapper\">\n  <div class=\"time-cell\">\n    <div *ngIf=\"(idx === 0)\" class=\"log-time-now\">Now</div>\n    <div class=\"time-text plain-value-size\">{{tmFormatted}}</div>\n    <div class=\"time-dot\"  \n      *ngIf=\"(idx !== 0)\"\n      [ngClass]=\"{'error' : (logItem && logItem.status == 'ERROR') }\"\n      ></div>\n  </div>\n  <div class=\"log-cell flex flex-column\"\n   [ngClass]=\"{'error' : (logItem && logItem.status == 'ERROR') }\">\n    <div [innerHTML]=\"sanitizedLogMsg\"></div>\n    <div [innerHTML]=\"sanitizedExtraInfo\"></div>\n  </div>\n  <div class=\"vertical-line\"></div>\n  <div class=\"time-delay plain-value-size\">{{timeDelay}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogItemComponent = /** @class */ (function () {
    function LogItemComponent(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
        this.tmFormatted = '';
        this.sanitizedLogMsg = '';
        this.sanitizedExtraInfo = '';
        this.timeDelay = '2s';
    }
    LogItemComponent.prototype.ngOnInit = function () {
        if (!this.tmPreviousLog) {
            this.timeDelay = '0s';
        }
        else {
            this.timeDelay = (this.logItem.tmLog - this.tmPreviousLog) + 's';
        }
        this.sanitizedLogMsg = this._domSanitizer.bypassSecurityTrustHtml(this.logItem.logMessage);
        this.sanitizedExtraInfo = this.logItem.extraInfo ? this._domSanitizer.bypassSecurityTrustHtml(this.logItem.extraInfo) : '';
        this.tmFormatted = this.logItem.logTimeFormatted ? this.logItem.logTimeFormatted : moment(this.logItem.tmLog).format('hh:mm A');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('logItem'),
        __metadata("design:type", Object)
    ], LogItemComponent.prototype, "logItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('idx'),
        __metadata("design:type", Number)
    ], LogItemComponent.prototype, "idx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tmPreviousLog'),
        __metadata("design:type", Number)
    ], LogItemComponent.prototype, "tmPreviousLog", void 0);
    LogItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-item',
            template: __webpack_require__("../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LogItemComponent);
    return LogItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-data-msg{\n  min-height: 60px;\n  width: 60%;\n}\n\nmat-spinner{\n  position: absolute;\n  margin-top: -20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-body-wrapper\">\n  <div [hidden]=\"(!logTimelineData || logTimelineData.length)\" class=\"no-data-msg\">\n    <hr/> There are no errors in the workitem processed <hr/>\n  </div>\n  <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\n  <app-log-item *ngFor=\"let logItem of logTimelineData, let idx =index\" [logItem]=\"logItem\" [idx]=\"idx\" [tmPreviousLog]=\"(logTimelineData[idx+1] ? logTimelineData[idx+1].tmLog : 0)\"></app-log-item>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogsTimelineComponent = /** @class */ (function () {
    function LogsTimelineComponent(_workItemService, _activatedRoute, _configService) {
        var _this = this;
        this._workItemService = _workItemService;
        this._activatedRoute = _activatedRoute;
        this._configService = _configService;
        this._alive = true;
        this._paramsSubscriber = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Observable */].combineLatest(this._activatedRoute.queryParams, this._activatedRoute.parent.params).subscribe(function (data) {
            _this.filterId = data[0] && data[0].filter ? data[0].filter : '';
            _this.sourceId = data[1] && data[1].jobId ? data[1].jobId : '';
        });
    }
    LogsTimelineComponent.prototype.ngOnInit = function () {
        this.getLogs();
        this.getLogsInInterval();
    };
    LogsTimelineComponent.prototype.ngOnDestroy = function () {
        if (this._paramsSubscriber) {
            this._paramsSubscriber.unsubscribe();
        }
        this._alive = false;
    };
    LogsTimelineComponent.prototype.getLogs = function () {
        var _this = this;
        this.isLoading = true;
        this._workItemService.getLogsForTimelineBySourceId(this.sourceId, {
            start: 1, limit: -1
        }).subscribe(function (data) {
            _this.logTimelineData = data.result;
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            _this.errorMessage = error.error;
        });
    };
    LogsTimelineComponent.prototype.getLogsInInterval = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(this._configService.config.tmPollingInMs)
            .takeWhile(function () {
            return _this._alive;
        })
            .subscribe(function () {
            _this.getLogs();
        });
    };
    LogsTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logs-timeline',
            template: __webpack_require__("../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_services_config_config_service__["a" /* ConfigService */]])
    ], LogsTimelineComponent);
    return LogsTimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/process-item/process-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.process-dot{\n    width: 12px;\n    height: 12px;\n    border-radius: 10px;\n    margin-bottom: 5px;\n    border: 2px solid transparent;\n}\n.process-loader{\n    width: 6px;\n    height: 6px;\n    border-radius: 10px;\n    border: 2px solid #F6F6F6;\n    margin-bottom: 5px;\n}\n.process-dot.active{\n    border: 2px solid #07FD6D;\n    -webkit-box-shadow: 0 0 14px 0px #07FD6D;\n            box-shadow: 0 0 14px 0px #07FD6D;\n}\n.active-process-line{\n    position: absolute;\n    height: 3px;\n    width: 100%;\n    top: 40px;\n    left: 98px;\n}\n.label-wrapper{\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    overflow: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/process-item/process-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-column flex-1-1-auto flex-align-center flex-justify-center full-height relative\">\n  <div class=\"loader\">\n    <div class=\"process-loader\" style=\"visibility: hidden;\">\n    </div>\n  </div>\n  <div class=\"dot\">\n    <div class=\"process-dot\" [ngClass]=\"{'active' : (processData.sources.length >= 1)}\"></div>\n  </div>\n  <div class=\"pre-process-label plain-label plain-label-size label-wrapper\">\n    <div  *ngFor=\"let source of processData.sources\">{{source}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/process-item/process-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessItemComponent; });
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

var ProcessItemComponent = /** @class */ (function () {
    function ProcessItemComponent() {
    }
    ProcessItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('processData'),
        __metadata("design:type", Object)
    ], ProcessItemComponent.prototype, "processData", void 0);
    ProcessItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-process-item',
            template: __webpack_require__("../../../../../src/app/main/operational/work-item/process-item/process-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/work-item/process-item/process-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessItemComponent);
    return ProcessItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/records/records.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-text{\n    width: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/records/records.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-body-wrapper\">\n  <div class=\"filter-wrapper\">\n    <mat-form-field class=\"search-text\">\n      <input class=\"\" matInput [(ngModel)]=\"searchText\" placeholder=\"Search\" (keyup)=\"filterRecords()\" />\n    </mat-form-field>\n    <mat-icon>search</mat-icon>\n  </div>\n  <div class=\"recods-wrapper\" *ngIf=\"sourceLength == 0\">\n    <hr>\n    records Data Not Avaialable\n    <hr>\n  </div>\n  <div class=\"recods-wrapper\" *ngIf=\"sourceLength != 0\"> \n      <mat-table #table [dataSource]=\"dataSource\">\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let record\"> {{record.recordId}} </mat-cell>\n      </ng-container>\n\n      <!-- Message Column -->\n      <ng-container matColumnDef=\"message\">\n        <mat-header-cell *matHeaderCellDef> Log Message </mat-header-cell>\n        <mat-cell *matCellDef=\"let record\" style=\"padding-right:10px;\"> {{record.message}} </mat-cell>\n      </ng-container>\n\n       <!-- Status Column -->\n      <ng-container matColumnDef=\"status\">\n        <mat-header-cell *matHeaderCellDef  class=\"align-center\"> Status </mat-header-cell>\n        <mat-cell *matCellDef=\"let record\" class=\"align-center\"> \n          <mat-icon color=\"warn\" *ngIf=\"record.status == 'FAILED'\" matTooltip=\"{{record.status}}\">warning</mat-icon>\n          <mat-icon color=\"primary\" *ngIf=\"record.status == 'COMPLETED'\" matTooltip=\"{{record.status}}\">check</mat-icon>\n          <mat-spinner color=\"accent\" [diameter]=\"20\" *ngIf=\"(record.status != 'COMPLETED' && record.status != 'FAILED')\" matTooltip=\"{{record.status}}\"></mat-spinner>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Time-taken Column -->\n      <ng-container matColumnDef=\"timeTaken\">\n        <mat-header-cell *matHeaderCellDef> Time Taken </mat-header-cell>\n        <mat-cell *matCellDef=\"let record\"> {{record.processingTime}} SEC</mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/records/records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(_workItemService, _activatedRoute, _configService) {
        var _this = this;
        this._workItemService = _workItemService;
        this._activatedRoute = _activatedRoute;
        this._configService = _configService;
        this.displayedColumns = ['name', 'status', 'message', 'timeTaken'];
        this._alive = true;
        this._afterInit = false;
        this.searchText = "";
        this.isLoading = true;
        this._paramsSubscriber = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["b" /* Observable */].combineLatest(this._activatedRoute.queryParams, this._activatedRoute.parent.params).subscribe(function (data) {
            _this.filterId = data[0] && data[0].filter ? data[0].filter : '';
            _this.sourceId = data[1] && data[1].jobId ? data[1].jobId : '';
            _this.processName = data[1] && data[1].processName ? data[1].processName : '';
        });
        this._recordSubscriber = this._workItemService.hasChangedObserver.subscribe(function () {
            setTimeout(function () {
                _this.getRecords();
            }, 200);
        });
    }
    RecordsComponent.prototype.ngOnInit = function () {
    };
    RecordsComponent.prototype.ngOnDestroy = function () {
        if (this._paramsSubscriber) {
            this._paramsSubscriber.unsubscribe();
        }
        if (this._recordSubscriber) {
            this._recordSubscriber.unsubscribe();
        }
        this._alive = false;
    };
    RecordsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._afterInit = true;
        setTimeout(function () {
            _this.getRecords();
        }, 100);
    };
    RecordsComponent.prototype.getRecords = function () {
        var _this = this;
        this.isLoading = true;
        if (!this._afterInit) {
            return;
        }
        this._workItemService.getRecordsBySourceId(this.sourceId, { start: 1, limit: -1 }).subscribe(function (data) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatTableDataSource */](data.result || []);
            _this.dataSource.paginator = _this.paginator;
            console.log(_this.dataSource);
            // this.sourceLength = data.result.length;
            _this.checkFilter();
        }, function (error) {
            _this.errorMessage = error.error;
        });
    };
    RecordsComponent.prototype.getRecordsInInterval = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(this._configService.config.tmPollingInMs)
            .takeWhile(function () {
            return _this._alive;
        })
            .subscribe(function () {
            _this.getRecords();
        });
    };
    RecordsComponent.prototype.checkFilter = function () {
        if (this.filterId) {
            switch (this.filterId) {
                case 'totalFailed':
                    this.searchText = 'ERROR';
                    this.filterRecords();
                    break;
                case 'totalProcessed':
                    this.searchText = 'COMPLETE';
                    this.filterRecords();
                    break;
                case 'totalAwaiting':
                    this.searchText = 'PENDING';
                    this.filterRecords();
                    break;
            }
        }
    };
    RecordsComponent.prototype.filterRecords = function () {
        if (this.dataSource) {
            this.dataSource.filter = this.searchText;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginator */])
    ], RecordsComponent.prototype, "paginator", void 0);
    RecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-records',
            template: __webpack_require__("../../../../../src/app/main/operational/work-item/records/records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/work-item/records/records.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_services_config_config_service__["a" /* ConfigService */]])
    ], RecordsComponent);
    return RecordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/work-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .extended-dash-wrapper{\n    min-height: calc(100vh - 214px) !important;\n    background-color: #3f3e50;\n    margin: 1px 0px;\n}\n.extended-dash-wrapper .dash-wrapper{\n    min-height:0;\n}\n.extended-ty .dash-wrapper .record-wrapper{\n    margin:5px 1px 0;\n} */\n.work-item-header{\n    height: 215px;\n    padding: 10px 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n\n}\n.work-item-sub-header{\n    height: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n}\n.process,\n.type{\n    height: 30px;\n}\n.second-header{\n    margin-bottom: 20px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.work-item-side-wrapper,\n.bot-button-wrapper{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.bot-button-wrapper{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.record-head{\n    margin: 0 0 0 40px;\n}\n.avg-totals,\n.record-totals{\n    min-width: 167px;\n    height: 100px;\n    border-radius: 5px 0 0 5px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.record-totals{\n    margin-right: 3px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.work-item-process-header{\n    margin-top: 4px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n}\n.post-processing,\n.processing,\n.pre-processing{\n    width: 185px;\n    height: 100px;\n    margin-right: 2px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.processing {\n    width: 360px;\n}\n.post-processing {\n    width: 225px;\n}\n.avg-totals{\n    width: 247px;\n    border-radius: 0 5px 5px 0;\n    margin-left: 1px;\n}\n.record-totals > .flex,\n.avg-totals > .flex {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    padding:0  2px;\n}\n.plain-value-big-size{\n    margin-top: 10px;\n}\n.pre-process-label{\n    margin-bottom: 5px;\n}\n.pre-processing .loader,\n.pre-processing .pre-process-label,\n.pre-processing .pre-process-bot-count,\n.pre-processing .dot{\n    margin-left: -75px;\n}\n.align-last{\n    margin-top: -12px;\n}\n.process-line{\n    position: absolute;\n    height: 3px;\n    width: 565px;\n    top: 40px;\n    left: 260px;\n}\n.metric-field{\n    max-width: 33%;\n}\n.metric-label{\n    min-height: 20px;\n}\n.tab-wrapper{\n    margin: 0 auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height: inherit;\n}\n.tab-head{\n    text-transform: uppercase;\n    font-size: 14px;\n    padding: 0;\n    height: auto;\n    min-width: auto;\n    margin: 0 10px;\n}\n.mat-tab-label-active{\n    font-weight: bold;\n}\nnav{\n    border-bottom: none;\n}\n.bot-edit{\n    font-size: 15px;\n    line-height: 15px;\n    height: 15px;\n    width: 15px;\n}\n.spacer{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.circle-wrapper{\n    width: 50px;\n    height: 50px;\n    position: relative;\n}\nmat-progress-spinner{\n    margin: 0 10px;\n}\n.circle-path{\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    top: 3px;\n    border-radius: 40px;\n    left: 13px;\n    border: 2px solid #000;\n    -webkit-box-shadow: 0 0 3px 0px #000;\n            box-shadow: 0 0 3px 0px #000;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.processing-bottom-label{\n    height: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-bottom-style: dashed;\n    border-bottom-width: 1px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.processing-bottom-label span{\n    padding: 0 5px;\n    border-radius: 5px;\n    margin-top: 9px;\n}\n.processing-bottom-label.label-process{\n    border-left-width: 1px;\n    border-right-width: 1px;\n    border-right-style: solid;\n    border-left-style: solid;\n}\n.source-list-wrapper{\n    overflow: auto;\n}\napp-item-record{\n    margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/work-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"extended-dash-wrapper\">\n<div class=\"dash-wrapper\">\n  <div class=\"work-item-header\">\n    <div class=\"work-item-sub-header\">\n      <div class=\"work-item-side-wrapper\">\n        <div class=\"flex second-header\">\n          <div class=\"back\" (click)=\"openOperationalDashboard()\">\n            <mat-icon>arrow_back</mat-icon>\n          </div>\n          <div class=\"process\">\n            <div class=\"list-item-label primary-label-color\">Process</div>\n            <div class=\"list-item-value\">{{recordItem?.processName || recordItem?.key}}</div>\n          </div>\n          <div class=\"type primary-border-color\">\n            <div class=\"list-item-label primary-label-color\">Work Item</div>\n            <div class=\"list-item-value\">{{recordItem?.triggeredBy}}</div>\n          </div>\n          <div class=\"status\">\n            <div class=\"status-indicator\" *ngIf=\"recordItem?.status === 'SUCCESS'\">COMPLETED</div>\n            <div class=\"status-indicator\" *ngIf=\"recordItem?.status === 'ACTIVE_FLOWING' ||recordItem?.status == 'ACTIVE_SLOW' || recordItem?.status === 'ACTIVE_NOT_FLOWING'\">RUNNING</div>\n\n            <div class=\"status-indicator\" *ngIf=\"recordItem?.status !== 'SUCCESS' && recordItem?.status !== 'ACTIVE_FLOWING' && recordItem?.status !== 'ACTIVE_SLOW' && recordItem?.status !== 'ACTIVE_NOT_FLOWING'\">NA</div>\n\n          </div>\n          <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\n          <span class=\"spacer\"></span>\n          <div class=\" flex flex-align-center flex-justify-center\">\n            <span class=\"list-item-value\">{{(recordItem?.botsRunning || recordItem?.botsAvailable || 0) }} {{(recordItem?.botsRunning || recordItem?.botsAvailable\n              || 0) == 1 ? 'Bot' : 'Bots'}}</span>\n            <a class=\"bots-label\" (click)=\"isShowAddBot = !isShowAddBot\" *ngIf=\"isPendingExists\">\n              <mat-icon class=\"bot-edit\">mode_edit</mat-icon>\n            </a>\n            <app-add-bot *ngIf=\"isShowAddBot\" [availableBots]=\"(recordItem?.availableBots || ((recordItem?.botsRunning ? recordItem?.botsRunning : (recordItem?.botsAvailable ? recordItem?.botsAvailable : 0 )) + 1))\"\n              [botsAdded]=\"(recordItem?.botsRunning || recordItem?.botsAvailable ||  0)\" class=\"add-bot\" [id]=\"recordItem?.jobId\"\n              (onClose)=\"closeAddBot($event)\"></app-add-bot>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"source-list-wrapper\">\n      <app-item-record [itemRecord]=\"source\" [showDetailLink]=\"false\"></app-item-record>\n    </div>\n\n  </div>\n</div>\n<div class=\"dash-wrapper\">\n  <mat-card class=\"tab-wrapper\">\n    <nav mat-tab-nav-bar aria-label=\"weather navigation links\">\n      <a mat-tab-link routerLink=\"records\"  [active]=\"activeLinkIndex === 0\" (click)=\"activeLinkIndex = 0\" class=\"tab-head\">\n        Records\n      </a>\n      <a mat-tab-link routerLink=\"log-items\" (click)=\"activeLinkIndex = 1\" [active]=\"activeLinkIndex === 1\" class=\"tab-head\">\n        Errors Timeline\n      </a>\n    </nav>\n    <router-outlet *ngIf=\"source\"></router-outlet>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/work-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkItemComponent = /** @class */ (function () {
    function WorkItemComponent(_activatedRoute, _router, _workItemsService, _configService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._workItemsService = _workItemsService;
        this._configService = _configService;
        this.activeLinkIndex = 0;
        this.isShowAddBot = false;
        this.processedType = '';
        this.processedPercent = 0;
        this.preProcessingInfo = {
            sources: []
        };
        this.processingInfo = {
            sources: []
        };
        this.postProcessingInfo = {
            sources: []
        };
        this.isPendingExists = false;
        this._alive = true;
        if (this._router.url.indexOf('log-items') != -1) {
            this.activeLinkIndex = 1;
        }
        this._routerParamSub = this._activatedRoute.queryParams.subscribe(function (params) {
            _this._filter = params.filter || '';
        });
        this._routerPathSub = this._activatedRoute.params.subscribe(function (params) {
            _this._sourceId = params.jobId;
            _this._process = params.processName;
            _this._status = params.status;
        });
    }
    WorkItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getWorkItemDetails();
        }, 200);
        // this.getCurrentAllProcessingInfo();
    };
    WorkItemComponent.prototype.ngOnDestroy = function () {
        this._alive = false;
        if (this._routerParamSub) {
            this._routerParamSub.unsubscribe();
            this._routerParamSub = null;
        }
        if (this._routerPathSub) {
            this._routerPathSub.unsubscribe();
        }
    };
    WorkItemComponent.prototype.getWorkItemDetails = function () {
        var _this = this;
        this.isLoading = true;
        this._workItemsService.getWorkItemDetails(this._sourceId, this._process).subscribe(function (data) {
            _this._workItemsService.workItemDetails = data["result"];
            console.log(_this._workItemsService.workItemDetails);
            _this._workItemsService.hasChanged.next(true);
            _this.startTime = moment.utc(data.tmStarted).local().fromNow();
            _this.recordItem = data["result"];
            _this.source = data["result"];
            _this.sourceMetadataKeys = Object.keys(data["result"].metadata);
            // this.processingInfo.sources = data["result"].details.processing;
            // this.preProcessingInfo.sources = data["result"].details.preProcess;
            // this.postProcessingInfo.sources = data["result"].details.postProcessing;
            _this.isPendingExists = __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */].checkIfPendingExists([_this.recordItem]);
            // this._alive = (this.recordItem.status !== 'PROCESSED');
            _this._alive = (_this.recordItem.status !== 'SUCCESS');
            _this.setProcessedType(_this.recordItem);
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    WorkItemComponent.prototype.closeAddBot = function (isClose) {
        this.isShowAddBot = !isClose;
    };
    WorkItemComponent.prototype.openOperationalDashboard = function () {
        window.history.back();
        // this._router.navigate(['app/operational/dashboard']);
    };
    WorkItemComponent.prototype.setProcessedType = function (recordItem) {
        var _this = this;
        this.processedType = 'Files Processed';
        var total = 0;
        var processed = 0;
        recordItem.metrics.forEach(function (metric) {
            if (metric.label.indexOf('Record') != -1) {
                _this.processedType = 'Records Processed';
            }
            if (metric.key == 'totalRecords') {
                total = metric.value;
            }
            if (metric.key == 'totalProcessed') {
                processed += metric.value;
            }
            if (metric.key == 'avgProcessingTime') {
                processed += metric.value;
            }
            if (metric.key == 'totalAwaiting') {
                processed += metric.value;
            }
        });
        this.processedPercent = Math.round(processed * 100 / total);
    };
    WorkItemComponent.prototype.getCurrentAllProcessingInfo = function () {
        var _this = this;
        console.log(this._configService.config.tmPollingInMs, "times");
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(this._configService.config.tmPollingInMs)
            .takeWhile(function () {
            console.log(_this._alive, " this._alive ");
            return _this._alive;
        })
            .subscribe(function () {
            console.log("get work item details");
            _this.getWorkItemDetails();
        });
    };
    WorkItemComponent.prototype.getCurrentPreProcessing = function () {
        var _this = this;
        this._workItemsService.getCurrentPreProcessingInfo(this._sourceId).subscribe(function (data) {
            _this.preProcessingInfo.sources = data.result;
        }, function (error) {
        });
    };
    WorkItemComponent.prototype.getCurrentProcessing = function () {
        var _this = this;
        this._workItemsService.getCurrentProcessingInfo(this._sourceId).subscribe(function (data) {
            _this.processingInfo.sources = data.result;
        }, function (error) {
        });
    };
    WorkItemComponent.prototype.getCurrentPostProcessing = function () {
        var _this = this;
        this._workItemsService.getCurrentPostProcessingInfo(this._sourceId).subscribe(function (data) {
            _this.postProcessingInfo.sources = data.result;
        }, function (error) {
        });
    };
    WorkItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-item',
            template: __webpack_require__("../../../../../src/app/main/operational/work-item/work-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/work-item/work-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_config_config_service__["a" /* ConfigService */]])
    ], WorkItemComponent);
    return WorkItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-modules/subwaymap-drag/customdrag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomdragDirective; });
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

var CustomdragDirective = /** @class */ (function () {
    function CustomdragDirective(_el) {
        this._el = _el;
        this.height = 150;
        this.y = 100;
        this.oldY = 0;
        this.grabber = false;
        this.onValueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CustomdragDirective.prototype.onMouseMove = function (event) {
        if (!this.grabber) {
            return;
        }
        // this.resizer(event.clientY - this.oldY);
        this.oldY = event.clientY;
        $('.grabber').addClass('changeCursor');
    };
    CustomdragDirective.prototype.onMouseUp = function (event) {
        $('.grabber').removeClass('changeCursor');
        this.grabber = false;
        // this.onValueChanged.emit(this.height);
    };
    // resizer(offsetY: number) {
    //   this.height += offsetY;
    //   setTimeout(() => {
    //     this.onValueChanged.emit(this.height);
    //   }, 0);
    // }
    CustomdragDirective.prototype.onMouseDown = function (event) {
        $('.grabber').removeClass('changeCursor');
        this.grabber = true;
        this.oldY = event.clientY;
        this.height = this.lob_height;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lob_id'),
        __metadata("design:type", String)
    ], CustomdragDirective.prototype, "lob_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lob_height'),
        __metadata("design:type", Number)
    ], CustomdragDirective.prototype, "lob_height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CustomdragDirective.prototype, "onValueChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], CustomdragDirective.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], CustomdragDirective.prototype, "onMouseUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], CustomdragDirective.prototype, "onMouseDown", null);
    CustomdragDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appCustomdrag]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], CustomdragDirective);
    return CustomdragDirective;
}());



/***/ })

});
//# sourceMappingURL=operational.module.chunk.js.map