webpackJsonp(["operational.module"],{

/***/ "../../../../../src/app/main/operational/add-bot/add-bot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-bot-popup{\r\n    position: absolute;\r\n    height:115px;\r\n    width:  165px;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    border-radius: 2px;\r\n}\r\n\r\n.btn-done{\r\n    width: 100%;\r\n    height: 22px;\r\n    line-height: 22px;\r\n}\r\n\r\n.add-bot-title.up{\r\n    border-bottom: 1px solid #CCC;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.add-bot-title{\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n}\r\n\r\n.add-bot-field{\r\n    width: 50px;\r\n    height: 27px;\r\n    margin: 3px 9px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\ninput.error{\r\n    background: #ff00003b;\r\n    border-color: #ff00003b;\r\n    color: red;\r\n}\r\n\r\n.disabled{\r\n    color: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/add-bot/add-bot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-bot-popup\">\r\n  <div class=\"add-bot-title up\">Spin More Bots</div>\r\n  <div class=\"flex flex-align-center flex-justify-center\">\r\n\r\n    <div>\r\n      <mat-icon class=\"pointer\" [ngClass]=\"{'disabled': (botsAdded==0)}\" (click)=\"updateBot('-')\">remove_circle_outline</mat-icon>\r\n    </div>\r\n\r\n    <div>\r\n      <input disabled class=\"add-bot-field\" [ngClass]=\"{'error': (availableBots==0)}\" type=\"text\" [ngModel]=\"botsAdded\">\r\n    </div>\r\n\r\n    <div>\r\n      <mat-icon class=\"pointer\" [ngClass]=\"{'disabled': (availableBots==0)}\" (click)=\"updateBot('+')\">add_circle_outline</mat-icon>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"add-bot-title\">Available Bots {{availableBots}}</div>\r\n  <div>\r\n    <button class=\"btn-done\" mat-button (click)=\"saveBots()\" ng-disabled=\"isSaving\">Done</button>\r\n  </div>\r\n</div>"

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

/***/ "../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-item-head{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 2% 0%;\r\n    height: 48px;\r\n}\r\n.index{\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    font-size: 12px;\r\n    z-index: 2;\r\n    margin-left:12px;\r\n}\r\n.bots{\r\n    padding: 0 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.bots-label{\r\n    text-decoration: none;\r\n}\r\n.bots-label mat-icon{\r\n    font-size: 12px;\r\n}\r\n.source-list-wrapper{\r\n    overflow: auto;\r\n}\r\napp-item-record{\r\n    display: block;\r\n    -webkit-transition: all 0.4s ease-in-out;\r\n    transition: all 0.4s ease-in-out;\r\n}\r\nhr{\r\n    width: 94%;\r\n    /* border-width: 0.5px; */\r\n    /* border-style: solid;\r\n    margin-left: 52px;\r\n    margin-right: 30px;\r\n    height: 1px; */\r\n    margin:0 auto;\r\n}\r\n.view-link-wrapper{\r\n    padding-left: 20px;\r\n}\r\na:hover{\r\n    color: #358CD5;\r\n    text-decoration: underline;\r\n}\r\n.highlight-darkgrey {\r\n   background-color:   #636574 !important;\r\n}\r\n.highlight-green {\r\n    /* background-color: #548235 !important; */\r\n    background-color: #626181 !important;\r\n\r\n}\r\n.highlight-red {\r\n    background-color: #c00000 !important;\r\n}\r\n.highlight-yellow {\r\n    background-color: #ffc000 !important;\r\n}\r\n.highlight-blue {\r\n    background-color: #4a90e2 !important;\r\n}\r\n.highlight-black {\r\n    background-color: #000000 !important;\r\n}\r\n.highlight-white {\r\n    background-color: #d9d9d9 !important;\r\n}\r\n.work-item-sec ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.pointer{\r\n    display:inline-block;\r\n}\r\n.work-item-sec ul li{\r\n        list-style: none;\r\n        /* padding: 0.8rem; */\r\n        padding: 0;\r\n        margin-bottom: 0.1rem;\r\n        /* display:none; */\r\n}\r\n.work-item-sec ul li .counter{\r\n            /* background-color: #35343e; */\r\n            background-color: #2a303f;\r\n            color: #fff;\r\n            /* padding: 0.1rem 0.6rem; */\r\n            padding: 0.3rem 0.6rem;\r\n            float: left;\r\n            width: 10%;\r\n        }\r\n.active-inactive-sec > li{\r\n            display:none;\r\n        }\r\n.active-inactive-sec > li .pointer{\r\n            display: inline-block;\r\n        }\r\n.title-headnig{\r\n    /* font-size: 1rem; */\r\n    color: #fff;\r\n    float: left;\r\n    margin-left: 0.4rem;\r\n    margin-top: 1px;\r\n    width:88%;\r\n}\r\n.procname{\r\n    white-space: nowrap; \r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    width:85%;\r\n    float: left;\r\n    color: #ffffff;\r\n    padding-top: 3px;\r\n}\r\n.procnamemeta{\r\n    white-space: nowrap; \r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    width:79%;\r\n    float: left;\r\n}\r\n.title-headnig  .fa{\r\n        margin-right: 0.5rem;\r\n    }\r\n.title-headnig  span{\r\n        color: #858490;\r\n        font-size: 0.8rem;\r\n        margin-left: 0.5rem;\r\n    }\r\n.running{\r\n        color: #858490;\r\n        font-size: 1rem;\r\n        text-align: right;\r\n        margin-top: 4px;\r\n        margin-right: 0.8rem;\r\n    }\r\n.running   span{\r\n            color: #fff;\r\n         font-size: 16px;\r\n\r\n      }\r\n.title-headnig-metdata{\r\n      color: #858490;\r\n      font-size: 12px;\r\n      padding-top: 3px;\r\n      }\r\n.material-icons {\r\n        /* font-family: 'Material Icons'; */\r\n        font-weight: normal;\r\n        font-style: normal;\r\n        font-size: 19px;\r\n        line-height: 1;\r\n        letter-spacing: normal;\r\n        text-transform: none;\r\n        display: inline-block;\r\n        white-space: nowrap;\r\n        word-wrap: normal;\r\n        direction: ltr;\r\n        -webkit-font-feature-settings: 'liga';\r\n        -webkit-font-smoothing: antialiased;\r\n    }\r\n.work-item-box{\r\n        /* border:solid 1px #35343e; */\r\n        /* padding-top: 0.5rem; */\r\n        border: solid 1px #282B49;\r\n        padding: 0;\r\n      }\r\n.work-item-box  .progress{\r\n            background-color: #35343e;\r\n            border-radius: 0px;\r\n            position: relative;\r\n            /* margin-top: 0.5rem; */\r\n            height: 1.4rem;\r\n            margin-top: 0 !important\r\n      }\r\n.progress{\r\n          margin-bottom:0px!important;\r\n      }\r\n.work-item-box  .progress .running-text{\r\n        position: absolute;\r\n        z-index: 5;\r\n        right: 2rem;\r\n        top: 0px;\r\n        color: #d8d8d8;\r\n        font-size: 1rem;\r\n            }\r\n.work-item-box .progress-bar-striped {\r\n            background-image: linear-gradient(-45deg,rgb(58,57,67) 25%,transparent 25%,transparent 50%,rgb(58,57,67) 50%,rgb(58,57,67) 75%,transparent 75%,transparent);\r\n            background-size: 2rem 2rem;\r\n        }\r\n.work-item-box .progress-bar {\r\n            display: -webkit-box;\r\n            display: -ms-flexbox;\r\n            display: flex;\r\n            -webkit-box-orient: vertical;\r\n            -webkit-box-direction: normal;\r\n                -ms-flex-direction: column;\r\n                    flex-direction: column;\r\n            -webkit-box-pack: center;\r\n                -ms-flex-pack: center;\r\n                    justify-content: center;\r\n            color: #fff;\r\n            text-align: center;\r\n            white-space: nowrap;\r\n            background-color: #898989;\r\n            -webkit-transition: width .6s ease;\r\n            transition: width .6s ease;\r\n        }\r\n.work-item-box .active-inactive-sec ul{\r\n                margin: 0px;\r\n                text-align: right;\r\n            }\r\n.active-inactive-sec .dot-circle {\r\n                height: 11px;\r\n                width: 11px;\r\n                margin-top:-2px;\r\n                /* background-color: #bbb; */\r\n                background-color: #605e80;\r\n                border-radius: 50%;\r\n                display: inline-block;\r\n                vertical-align: middle;\r\n            }\r\n.dot-circle-success{\r\n                /* background-color:green !important; */\r\n                background-color:#54a907 !important;\r\n\r\n            }\r\n.dot-circle-error{\r\n                /* background-color:red !important; */\r\n                background-color:#e72323 !important;\r\n            }\r\n.dot-circle-warning{\r\n                background-color:yellow !important;\r\n            }\r\n.work-item-box .active-inactive-sec  li{\r\n                display: inline-block;\r\n                list-style: none;\r\n                color: #fff;\r\n                font-size: 1rem;\r\n                border:none;\r\n                margin: 0;\r\n                padding: 0 3px;\r\n            }\r\n.Process-time-sec   ul{\r\n          \r\n                    padding: 0px;\r\n                   background-color: transparent;\r\n                 \r\n                    margin: 0px;\r\n                }\r\n.Process-time-sec   li{\r\n                        display: inline-block;\r\n                        list-style: none;\r\n                        padding: 0px;\r\n                        border:none;\r\n                        /* font-size: 1rem; */\r\n                        font-size: 10px;\r\n                        color: #858490;\r\n                }\r\n.Process-time-sec li span{\r\n                            color: #fff;\r\n                        }\r\n.dash-rightSidebar{\r\n                            /* background-color:#4b4a5b; */\r\n                            background-color:#222939;\r\n                           \r\n                            /* border-left: solid 1px #5d5c6b; */\r\n                            /* box-shadow: 0 2px 15px 1px rgba(0, 0, 0, 0.2); */\r\n                            -webkit-box-shadow: none;\r\n                                    box-shadow: none;\r\n                            margin-top: 15px !important;\r\n                        }\r\n.dash-rightSidebar   h2{\r\n                                font-size: 1rem;\r\n                                font-weight: 400;\r\n                                color: #fff;\r\n                                border-bottom: solid 1px #5d5c6b;\r\n                                margin: 0px;\r\n                                height: 50px;\r\n                                padding: 0.9rem 0.8rem 1rem 0.8rem;\r\n                        }\r\n.dash-rightSidebar   h2 span{\r\n                                    display: inline-block;\r\n                                    text-align: center;\r\n                                    width: 30px;\r\n                                    border-radius: 50%;\r\n                                    height: 30px;\r\n                                    color: #75747d;\r\n                                    background-color: #3c3b48;\r\n                                    float: right;\r\n                                    top: -4px;\r\n                                    position: relative;\r\n                                    line-height: 28px;\r\n                                }\r\n.dash-rightSidebar  .noitem-message{\r\n                                text-align: center;\r\n                                padding-top: 100px;\r\n                                color:#fff;\r\n                            }\r\n.metadata-key {\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    color: #747474;\r\n    padding: 4px 0 1px 6px;\r\n}\r\n.metadata-value {\r\n  opacity: 0.9;\r\n  font-size: 10px;\r\n  /* font-weight: bold; */\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n.padding-margin-0 {\r\n    padding: 0 2px;\r\n    margin: 0;\r\n}\r\n.started-sec {\r\n    border-right: 1px solid #979797;\r\n    padding-right: 5px;\r\n}\r\n.time-txt {\r\n    padding-left: 8px;\r\n}\r\n.time-sec {\r\n    padding-left:5px;\r\n}\r\n/deep/.toolt{\r\n    background: #171a20 !important;\r\n    color: #ffffff !important;\r\n}\r\n.lisize{\r\n    padding-top: 6px;\r\n }\r\n.ulist{\r\n    text-align: left !important;\r\n     /* padding-left:10px; */\r\n }\r\n.bottom2-sec {\r\n    float: right;\r\n    padding-top: 4px !important;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"dash-rightSidebar\" *ngIf=\"booleanActive\">\r\n  <div class=\"work-item-sec\">\r\n    <ul>\r\n      <li>\r\n     \r\n        <div class=\"work-item-box\">\r\n          <div class=\"row\">\r\n           \r\n            <div class=\"col-sm-7\" >\r\n              <div class=\"counter\">{{(index + 1)}}</div>\r\n              <div class=\"title-headnig-metdata procname\">\r\n                <ng-container>\r\n                    <span class=\"metadata-key\">{{workItem.metadata.key}} :</span>\r\n                 <span  matTooltip= \"{{workItem.metadata.value}}\" matTooltipPosition=\"above\" matTooltipClass=\"toolt\" class=\"metadata-value\">{{workItem.metadata.value}}</span>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-5 lisize\">\r\n              <div class=\"active-inactive-sec\">\r\n                <ul class=\"ulist\" [ngClass]=\"{'waiting-status' : (workItem && workItem.status == 'WAITING' ),'notindexed-status':(workItem && workItem.status == 'NOT_INDEXED'),'indexed-status':(workItem && workItem.status == 'INDEXED')}\">\r\n                  <ng-container *ngFor=\"let record of workItem.metrics; let i = index;\">\r\n                    <li class=\"col-sm-3\" (click)=\"workItem.sourceId!='NA' && workItem.status != 'NOT_INDEXED' && workItem.status != 'INDEXED' && record.clickable\"\r\n                      *ngIf=\"record.key == 'totalRecords' || record.key == 'totalProcessed'  || record.key== 'totalFailed' || record.key == 'totalAwaiting'\"\r\n                      [ngClass]=\"{'plain-error-value' : record.key == 'totalFailed' }\">\r\n                      <span matTooltip= \"{{ getFormattedValue(record.key) }}\" matTooltipPosition=\"above\" matTooltipClass=\"toolt\" class=\"dot-circle\" [ngClass]=\"{'dot-circle-success':record.key=='totalProcessed','dot-circle-error':record.key=='totalFailed','dot-circle-warning':record.key == 'totalAwaiting'}\"></span>\r\n                      <span> {{(workItem.sourceId=='NA' ||\r\n                        workItem.status == 'NOT_INDEXED' || workItem.status == 'INDEXED' || !record.value || record.value == '-') ? '0' :\r\n                        record.value}}</span>\r\n                    </li>\r\n                  </ng-container>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"progress progress-bar-striped\">\r\n            <div class=\"running-text\">{{calcProgress(workItem.metrics)}} %\r\n              \r\n            </div>\r\n            <div class=\"progress-bar\" [ngClass]=\"{'highlight-green' : (workItem && workItem.statusColor == 'ACTIVE_FLOWING' ),'highlight-yellow':(workItem && workItem.statusColor == 'ACTIVE_SLOW'),'highlight-white':(workItem && workItem.statusColor == 'INACTIVE'),'highlight-darkgrey' : (workItem && workItem.statusColor == 'INDEXED' ),'highlight-darkgrey' : (workItem && workItem.statusColor == 'NOT_INDEXED' ),'highlight-black' : (workItem && workItem.statusColor == 'FEATURE_OFFLINE' ),'highlight-red' : (workItem && workItem.statusColor == 'ACTIVE_NOT_FLOWING' )}\"\r\n              [style.width.%]=\"calcProgress(workItem.metrics)\"></div>\r\n          </div>\r\n         \r\n        </div>\r\n        \r\n      </li>\r\n\r\n      <div class=\"Process-time-sec row padding-margin-0\">\r\n        <ul>\r\n          <li class=\"col-sm-3\">\r\n              <div class=\"procname\" matTooltip= \"{{workItem.displayName}}\" matTooltipPosition=\"above\" matTooltipClass=\"toolt\"> {{workItem.displayName}} </div>\r\n          </li>\r\n          <li class=\"bottom2-sec\">\r\n            Started: &nbsp;\r\n            \r\n\r\n            <span class=\"started-value started-sec metadata-value\" [ngClass]=\"{'waiting-color' :  (workItem && workItem.status == 'WAITING')}\">\r\n              {{(workItem.tmStarted ?  workItem.tmStarted :\r\n              '-')}}\r\n            </span>\r\n            <span class=\"time-sec\">\r\n                <ng-container class=\"pull-right\" *ngFor=\"let record of workItem.metrics; let i = index;\">\r\n                  <li *ngIf=\"record.key =='avgProcessingTime'\" (click)=\"workItem.sourceId!='NA' && workItem.status != 'NOT_INDEXED' && workItem.status != 'INDEXED' && record.clickable && openWorkItemDetail(record.key)\">Avg\r\n                    Time/Record:<span class=\"metadata-value\"> &nbsp;{{(workItem.sourceId=='NA' || workItem.status== 'NOT_INDEXED' ||\r\n                      workItem.status ==\r\n                      'INDEXED' || !record.value || record.value == '-') ? '0' : record.value}}</span></li>\r\n                </ng-container>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n"

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
    function ListItemComponent(_router) {
        this._router = _router;
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
            styles: [__webpack_require__("../../../../../src/app/main/operational/operational-dashboard/list-item/list-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"operational-div\" [ngClass]=\"{'dash-wrapper':!subway ,'dash-wrappersubwa':subway}\" *ngIf=\"subwayDashboard\">\r\n  <div class=\"subway-map-new-filter-select\" *ngIf=\"true\">\r\n    <div class=\"filder-div\">\r\n      <span class=\"show-legend hand\" (click)=\"showLegend()\"> Show Legend</span>\r\n      <span class=\"position-relation\"></span>\r\n      <span class=\"apply-filter-symbol\" *ngIf=\"selectedStatus.length > 0\"></span>\r\n      <img src=\"assets/images/filter.png\" alt=\"filter-image\" class=\"filter-icon hand\" (click)=\"showFilters()\" >\r\n    </div>\r\n\r\n    <!-- show legend -->\r\n    <div class=\"legend-box\" *ngIf=\"showLegendBox\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"legend-head\">Processes Performance</div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4 legend-status \">\r\n              <img class=\"processes-icon gif_radius\" src=\"../assets/images/loader.gif\" alt=\"img\" />\r\n              <span class=\"status-desc\">Initiated, waiting</span>\r\n            </div>\r\n            <div class=\"col-lg-4 legend-status\">\r\n              <img class=\"processes-icon\" src=\"../assets/images/active- issues.png\" alt=\"img\" />\r\n              <span class=\"status-desc\">Active, issues</span>\r\n            </div>\r\n            <div class=\"col-lg-4 legend-status\">\r\n              <img class=\"processes-icon\" src=\"../assets/images/active-acceptable.png\" alt=\"img\" />\r\n              <span class=\"status-desc\">Active, acceptable</span>\r\n            </div>\r\n            <div class=\"col-lg-4 legend-status\">\r\n              <img class=\"processes-icon\" src=\"../assets/images/active-average.png\" alt=\"img\" />\r\n              <span class=\"status-desc\">Active, average</span>\r\n            </div>\r\n            <div class=\"col-lg-4 legend-status\">\r\n              <img class=\"processes-icon\" src=\"../assets/images/inactive.png\" alt=\"img\" />\r\n              <span class=\"status-desc\">Inactive</span>\r\n            </div>\r\n            <div class=\"col-lg-4 legend-status\">\r\n              <img class=\"processes-icon\" src=\"../assets/images/not-automated.png\" alt=\"img\" />\r\n              <span class=\"status-desc\">Not Automated</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 bots-health\">\r\n          <div class=\"legend-head\">Bots Health</div>\r\n          <div class=\"un-healthy\">\r\n            <span><img src=\"../assets/images/bitmapred.png\" alt=\"\" /></span>\r\n            <span class=\"status-desc\">Unhealthy</span>\r\n          </div>\r\n          <div>\r\n            <span><img src=\"../assets/images/bitmapgreen.png\" alt=\"\" /></span>\r\n            <span class=\"status-desc\">Healthy</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- show filters -->\r\n    <div (mouseleave)=\"showfilterBox=false;\">\r\n      <ul class=\"filter-dropdown-menu\" *ngIf=\"showfilterBox\">\r\n        <li class=\"all-cases\">\r\n          <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"allcases\" [checked]=\"checkedAll\"\r\n            (click)=\"toggleselection('All')\">\r\n          <span class=\"hand process-name\" (click)=\"toggleselection('All')\">All</span></li>\r\n        <li *ngFor=\"let item of participants \">\r\n          <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"{{item.name}}\"\r\n            [checked]=\"selectedStatus.indexOf(item.name)>-1\" (click)=\"toggleselection(item.name)\">\r\n          <span class=\"hand process-name\" (click)=\"toggleselection(item.name)\">{{item.name}}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"map-div\" *ngIf=\"participants.length > 0\">\r\n    <div *ngFor=\"let item of temporaryList;let idx=index;\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel [expanded]=\"allExpandState\" #example >\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <em *ngIf=\"!example.expanded\" class=\"material-icons arrow_icon\">\r\n                  arrow_right\r\n              </em>\r\n              <em *ngIf=\"example.expanded\" class=\"material-icons arrow_icon\">\r\n                arrow_drop_down\r\n              </em>\r\n              <span class=\"subway_name\">{{item.name}}</span>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <app-subway-viewer [bpmn_id]=\"item.name\" [xmlData]=\"item.bpmn\" name=\"item.name\"></app-subway-viewer>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n  <div class=\"map-div\" *ngIf=\"isProcesses\">\r\n      <p class=\"contentLob\" >Loading Processes Please wait....</p>\r\n  </div>\r\n  <div class=\"map-div\" *ngIf=\"isNotConfigured\">\r\n      <p class=\"contentLob\" >Processes not configured, please contact administrator.</p>\r\n      <app-subway-viewer></app-subway-viewer>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"sub-way-wrapper\" *ngIf=\"activedashborad\">\r\n  <div>\r\n    <div class=\"operational-dashboard-padding\"\r\n      [ngClass]=\"{'dash-headerbar':!activedashboard,'dash-headerbaractive':activedashboard}\">Active\r\n      Work Items\r\n      <span> ({{totalActiveWorkItem}})</span>\r\n      <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\r\n    </div>\r\n    <div class=\"operational-dashboard-padding work-item-list\"\r\n      [ngClass]=\"{'work-item-list':!activedashboard,'work-item-listActive':activedashboard}\">\r\n      <div *ngIf=\"(totalActiveWorkItem==0)\" class=\"no-data-wt\">There are no active workitems at the moment</div>\r\n      <span *ngIf=\"(totalActiveWorkItem>0)\">\r\n        <app-list-item *ngFor=\"let item of workItems; let idx=index;trackBy: trackByJobId\" [workItem]=\"item\"\r\n          [booleanActive]=\"true\" [index]=\"idx\"></app-list-item>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".operational-div {\n  background-color: #181c26 !important; }\n\n.dash-headerbar {\n  height: 48px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px; }\n\n.dash-headerbaractive {\n  /* height: 54px; */\n  height: 46px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  width: 100%; }\n\n.dash-headerbar span {\n  font-size: 12px;\n  margin: 2px 0 0 5px; }\n\n.gif_radius {\n  border-radius: 50%; }\n\n.work-item-list {\n  padding-top: 0px;\n  height: calc(100vh - 89px);\n  overflow: auto; }\n\n.work-item-listActive {\n  padding-top: 0px;\n  height: calc(100vh - 89px);\n  overflow: auto;\n  width: 100%; }\n\napp-list-item {\n  position: relative;\n  display: block;\n  margin-bottom: 25px; }\n\n/*new css for merging subway and dashboard*/\n\n.dash-wrapper {\n  /* width:calc(100vw - 420px); */\n  width: calc(100vw - 435px);\n  float: left;\n  margin: 0 !important;\n  margin-left: 1px !important;\n  -webkit-box-shadow: 0 0 4px 0 #131329;\n          box-shadow: 0 0 4px 0 #131329;\n  height: calc(100vh - 41px);\n  overflow: auto; }\n\n.dash-wrappersubway {\n  width: 100%;\n  float: left;\n  margin: 0 !important;\n  margin-left: 1px !important;\n  -webkit-box-shadow: 0 0 4px 0 #131329;\n          box-shadow: 0 0 4px 0 #131329;\n  height: calc(100vh - 41px);\n  overflow: auto; }\n\n.sub-way-wrapper {\n  background-color: #38374f;\n  -webkit-box-shadow: 0 0 4px 0 rgba(148, 148, 148, 0.5);\n          box-shadow: 0 0 4px 0 rgba(148, 148, 148, 0.5); }\n\n.operational-dashboard-padding {\n  opacity: 0.9;\n  padding: 4px 15px 0;\n  /* background-color: #4b4a5b; */\n  background-color: #222939;\n  /* border-bottom: solid 1px #979797; */\n  border-bottom: solid 1px rgba(151, 151, 151, 0.23);\n  overflow-x: hidden; }\n\n.subway_name {\n  margin-top: 6px; }\n\n.arrow_icon {\n  font-size: 35px; }\n\n.contentLob {\n  color: #fff;\n  text-align: center;\n  margin-top: 150px; }\n\n.map-div {\n  /* height: calc(100vh - 106px); */\n  height: calc(100vh - 79px);\n  overflow: auto; }\n\n.map-div .mat-expansion-panel {\n    margin-bottom: 10px;\n    background: #232A3C;\n    width: 98%;\n    margin-left: 9px; }\n\n.map-div .mat-expansion-panel .mat-expansion-panel-header {\n      background: #212839 !important; }\n\n.map-div .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-panel-header-description, .map-div .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-panel-header-title {\n        color: #a9a9a9;\n        margin-left: -10px; }\n\n.map-div .mat-expansion-panel /deep/.mat-expansion-panel-content {\n      width: auto !important;\n      resize: vertical !important;\n      overflow: auto hidden !important;\n      pointer-events: auto !important;\n      z-index: 0 !important;\n      position: relative; }\n\n.map-div .mat-expansion-panel /deep/.mat-expansion-panel-content::after {\n      content: \"\";\n      cursor: n-resize !important;\n      font-weight: 600;\n      font-size: 23px;\n      position: absolute;\n      height: 25px;\n      width: 25px;\n      text-align: center;\n      bottom: 0px;\n      right: 0px;\n      z-index: 2;\n      background-color: #212839;\n      color: white; }\n\n.no-data-wt {\n  text-align: center;\n  line-height: 175px;\n  color: #FFF !important; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_bpmn_bpmn_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/bpmn/bpmn.service.ts");
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
    function OperationalDashboardComponent(_eref, _workItemService, _configService, _bpmnService) {
        this._eref = _eref;
        this._workItemService = _workItemService;
        this._configService = _configService;
        this._bpmnService = _bpmnService;
        this.showfilterBox = false;
        this.showLegendBox = false;
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
    }
    OperationalDashboardComponent.prototype.ngOnInit = function () {
        this.getWorkItems();
        // const Quill = (quill as any).default ? (quill as any).default : quill;
        this.getWorkItemsInInterval();
        this.loadProcessMap();
    };
    OperationalDashboardComponent.prototype.BodyClick = function () {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showfilterBox = false;
        }
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
    OperationalDashboardComponent.prototype.getWorkItemsInInterval = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(this._configService.config.tmPollingInMs)
            .takeWhile(function () {
            return _this._alive;
        })
            .subscribe(function () {
            _this.getWorkItems();
        });
    };
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
    OperationalDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // host: {
            //   '(document:click)': 'BodyClick($event)'
            // },
            selector: 'app-operational-dashboard',
            template: __webpack_require__("../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/operational-dashboard/operational-dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_config_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_bpmn_bpmn_service__["a" /* BpmnService */]])
    ], OperationalDashboardComponent);
    return OperationalDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/operational-init/operational-init.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_shared_modules_subwaymap_drag_customdrag_directive__ = __webpack_require__("../../../../../src/app/shared/shared-modules/subwaymap-drag/customdrag.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { QuillModule } from 'ngx-quill';


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
                __WEBPACK_IMPORTED_MODULE_16_ng2_daterangepicker__["Daterangepicker"]
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
                __WEBPACK_IMPORTED_MODULE_17__shared_shared_modules_subwaymap_drag_customdrag_directive__["a" /* CustomdragDirective */]
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

/***/ "../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .subway-map-viewer{\r\n    /* height: calc(100vh - 55px - 40px - 60px) ; \r\n    height: calc(100vh - 25px - 40px - 60px) ;\r\n} */\r\n\r\n.subway-map-viewer{\r\n    height: calc(100vh - 160px - 40px - 60px);\r\n    /* height:250px; */\r\n    min-height: 150px;\r\n}\r\n\r\n#subway-map-filter-select{\r\n    height:40px;\r\n    background-color:#1c1b3b;\r\n    border-bottom:1px #acacb7;\r\n}\r\n\r\n.subway-map-custom-style marker[id^=\"sequenceflow-end-white-black\"] > :nth-child(1){\r\n    fill: #273043 !important;\r\n    stroke: #273043 !important;\r\n}\r\n\r\n.loader{\r\n    background-image: url('/assets/images/loader.gif');\r\n}\r\n\r\n.filter-subway-map{\r\n    width:20%;\r\n    height:36px;\r\n    margin-right:2%;\r\n    float:right;\r\n\r\n}\r\n\r\n/* .overalaybg {\r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    top: -12px;\r\n}\r\n.highlight1-green{\r\n    background-color: green;\r\n    border: 2px solid #4dff5c;\r\n}\r\n.highlight1-red{\r\n    background-color: red;\r\n    border: 3px solid #ff4d4d;\r\n}\r\n.highlight1-yellow{\r\n    background-color: yellow;\r\n    border: 3px solid #ccba15;\r\n}\r\n.highlight1-black{\r\n    background-color: #000000;\r\n}\r\n.highlight1-white{\r\n    background-color: #ffffff;\r\n}\r\n.highlight1-darkgrey {\r\n    background-color: darkgray;\r\n    border: 3px solid #dad0d0;\r\n}\r\n.fa-robot{\r\n    margin-top: 14px;\r\n    margin-left: 1px;\r\n\r\n} */\r\n\r\n.filter-subway-map .mat-form-field-label, .filter-subway-map .mat-select-value {\r\n    color:#acacb7 !important;\r\n}\r\n\r\n.filter-subway-map .mat-select-arrow{\r\n    color:#acacb7 !important;\r\n}\r\n\r\n.filter-subway-map .mat-form-field-underline{\r\n    background-color:#acacb7 !important;\r\n}\r\n\r\n.content-wrapper {\r\n   /* margin: 1px 174px;*/\r\n    margin:0 ;\r\n    width:100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border-width: 0px;\r\n    background-color: #1c1b3b;\r\n    -webkit-box-shadow: 0 0 0px 0 #ceced0;\r\n            box-shadow: 0 0 0px 0 #ceced0;\r\n}\r\n\r\n.content-wrapper .mat-toolbar-single-row{\r\n    background: none;\r\n    margin-bottom: -3px;\r\n    z-index: 2;\r\n    -webkit-box-shadow: 0 0 0px 0 rgba(148,148,148,0.5);\r\n            box-shadow: 0 0 0px 0 rgba(148,148,148,0.5);\r\n    position: relative;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    border-bottom: 1px solid #979797;\r\n}\r\n\r\n.content-wrapper .mat-toolbar-single-row > span{\r\n    margin-right: 15px;\r\n}\r\n\r\n.content-wrapper .mat-toolbar-single-row .spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.content-wrapper .mat-toolbar-single-row .mat-icon{\r\n    vertical-align: middle;\r\n}\r\n\r\n.mat-title{\r\n    font-size:20px;\r\n}\r\n\r\n.devider{\r\n    border:none;\r\n    border-left: 1px solid #979797;\r\n    height: 21px;\r\n    opacity: 0.26;\r\n    width:3px;\r\n}\r\n\r\n.map-title-font{\r\n    font-size:16px;\r\n    font-weight:normal;\r\n    color:#f6f6f6;\r\n    height:19px;\r\n}\r\n\r\n.map-toolbar{\r\n    height:54px;\r\n}\r\n\r\n.not_indexed_svg{\r\n    height: 13px;\r\n    width: 13px;\r\n    margin-left:3px;\r\n}\r\n\r\n.not_indexed_circle{\r\n    stroke-dasharray: 3;\r\n    stroke: #070707;\r\n    stroke-width: 3px;\r\n    fill: white;\r\n    fill-opacity: 1;\r\n    position: absolute;\r\n}\r\n\r\n/* new css */\r\n\r\n.subway-map-new-filter-select {\r\n    width: 100%;\r\n    height: 38px;\r\n    padding-top: 5px;\r\n    position:relative;\r\n    z-index: 1;\r\n\r\n}\r\n\r\n.filder-div {\r\n    float: right;\r\n    position: relative;\r\n    top: 5px;\r\n}\r\n\r\n.show-legend {\r\n    color: #f4f4f4;\r\n    font-size: 12px;\r\n    padding-right: 10px;\r\n    opacity: 0.8;\r\n}\r\n\r\n.filter-icon {\r\n    color: white;\r\n    margin: 0px 14px 0 6px;\r\n    font-size: 16px;\r\n}\r\n\r\n.hand {\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    right: 10px;\r\n    z-index: 1;\r\n    min-width: 170px;\r\n    padding: 4px 10px;\r\n    margin: 2px 0 0;\r\n    font-size: 12px;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-radius: 0px;\r\n}\r\n\r\n.filter-dropdown-menu li {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n/* input.input-checkbox[type=\"checkbox\"]{ \r\n    width: 18px;\r\n    height: 18px;\r\n    margin-right: 5px;\r\n    position: relative;\r\n    top: 4px;\r\n} */\r\n\r\ninput[type=checkbox] {\r\n    cursor: pointer;\r\n    width: 18px;\r\n    height: 18px;\r\n    visibility: hidden;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n}\r\n\r\ninput[type=checkbox]:after {\r\n    content: \" \";\r\n    background-color: #d8d8d8;\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 18px;\r\n    visibility: visible;\r\n    border: 1px solid #979797;\r\n}\r\n\r\ninput[type=checkbox]:checked:after {\r\n    content: \"\\2714\";\r\n}\r\n\r\n.process-name {\r\n    color: #4a4a4a;\r\n    position: relative;\r\n    bottom: 4px;\r\n}\r\n\r\n.legend-box {\r\n    color: #ffffff;\r\n    width: 555px;\r\n    /* height: 74px; */\r\n    border: 1px solid #273043 !important;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 125px;\r\n    /* background-color: #2b3349; */\r\n    background-color: #1E2435;\r\n    /* padding: 3px 0 5px 8px; */\r\n    padding: 4px 0 0 8px;\r\n}\r\n\r\n.legend-head {\r\n    opacity: 0.58;\r\n    font-size: 11px;\r\n    font-weight: 500;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    margin-bottom: 8px;\r\n    padding-top: 4px;\r\n  }\r\n\r\n.status-img {\r\n    color: #ffffff;\r\n  }\r\n\r\n.status-desc {\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    /* padding-right: 13px; */\r\n  }\r\n\r\n.bots-health {\r\n    height: 74px;\r\n    border-left: 2px solid #2F3443;\r\n  }\r\n\r\n.legend-status {\r\n    padding-right: 0;\r\n    padding-bottom: 4px;\r\n  }\r\n\r\n.processes-icon {\r\n    width: 18px;\r\n    height: 17px;\r\n  }\r\n\r\n.un-healthy {\r\n      margin-bottom: 3px;\r\n  }\r\n\r\n.position-relation {\r\n      /* position: relative; */\r\n      border-right: 1px solid #979797;\r\n      font-size: 15px;\r\n      margin-right: 3px;\r\n      margin-left: -4px;\r\n  }\r\n\r\n.apply-filter-symbol {\r\n    height: 8px;\r\n    width: 8px;\r\n    background-color: #ff5a11;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: absolute;\r\n    right: 8px;\r\n  }\r\n\r\n.zoom-icons {\r\n    color: gray;\r\n  }\r\n\r\n.textarea {\r\n    min-height: 150px;\r\n    border:1px solid #ddd;\r\n    padding:15px;\r\n    position:relative;\r\n }\r\n\r\n.grabber{\r\n      margin-left: -23px;\r\n    margin-right: -23px;\r\n    margin-bottom: -50px;\r\n    content:'';\r\n    cursor: pointer;\r\n    bottom:0 !important;\r\n    /* background-image: url('/assets/images/drag.png'),none; */\r\n    background-size: initial;\r\n    z-index: 99999;\r\n    background-repeat: no-repeat;\r\n }\r\n\r\n.pull-right1{\r\n    margin-top: -10px;\r\n    position: relative;\r\n    z-index: 9999;\r\n    margin-right: -13px;\r\n    float: right;\r\n }\r\n\r\n.map-sec {\r\n    /* background-color: #282b4b !important; */\r\n    background-color: #273043 !important;\r\n    /* border: 1px solid #282b4b; */\r\n    /* margin-left: -23px;\r\n    margin-right: -24px; */\r\n    /* margin: 0px 10px 10px 10px !important; */\r\n  }\r\n\r\n.process-heading {\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #a9a9a9;\r\n    padding-left: 6px;\r\n    position: relative;\r\n    bottom: 10px;\r\n    opacity: 0.83;\r\n  }\r\n\r\n.acc-arrow {\r\n    color: #ffffff;\r\n    font-size: 34px;\r\n  }\r\n\r\n.diagram-note{\r\n    /* margin-top: -11px;\r\n    margin-left: -6px; */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n }\r\n\r\n.diagram-note svg{\r\n    margin-top: -9px;\r\n    margin-left: -6px;\r\n }\r\n\r\n.fa-robot{\r\n    /* margin-top: 13px;\r\n    margin-left: -9.5px; */\r\n    width: 20px !important;\r\n    height: 18px !important;\r\n    margin-top: 3px;\r\n    margin-left: -8px;\r\n }\r\n\r\n.bot-count{\r\n    width: 45px;\r\n    height: 18px;\r\n    color: #fffefe;\r\n    border-radius: 5px;\r\n    font-size: 10px;\r\n    padding-left: 4px;\r\n    margin-top: 32px;\r\n    margin-left: -35px;\r\n }\r\n\r\n.bot-count-healthy{\r\n     background-color:#313a53;\r\n }\r\n\r\n.bot-count-unhealthy{\r\n    background-color:#d84f64;\r\n }\r\n\r\n/* .djs-element.djs-shape.highlight-white {\r\n    stroke: #282B4B !important;\r\n    fill: #282B4B !important;\r\n } */\r\n\r\n/* .djs-visual circle:nth-child(1) {\r\n    stroke-width: 3px;\r\n    fill: #ffffff;\r\n }\r\n .djs-visual circle:nth-child(2) {\r\n    stroke-width: 0px !important;\r\n } */\r\n\r\n.plus-icon {\r\n    font-size: 20px;\r\n    color: #FFFFFF;\r\n    opacity: 0.5;\r\n }\r\n\r\n.plus-icon:hover {\r\n    opacity: 1;\r\n }\r\n\r\n.minimize-icon {\r\n     position: relative;\r\n     bottom: 8px;\r\n }\r\n\r\n.active-btn {\r\n    opacity: 1;\r\n }\r\n\r\n.mat-icon-button {\r\n    width: 30px !important;\r\n}\r\n\r\n.mat-expansion-panel-content.mat-expanded{\r\n    background: #212839 !important;\r\n    min-height: 160px !important;\r\n    padding-bottom: 10px !important;\r\n}\r\n\r\n.djs-outline{\r\n    stroke-width: 0px !important\r\n}\r\n\r\n.active_slow{\r\n    background-color:#FFB600 !important;\r\n}\r\n\r\n.active_issues{\r\n    background-color: #C00000 !important;\r\n}\r\n\r\n.active_waiting{\r\n    background-color: #4A90E2 !important;\r\n}\r\n\r\n.active_acceptable{\r\n    background-color: #518B11 !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_bpmnService.participants && _bpmnService.participants.length > 0\">\r\n<div class=\"map-sec \" (mousemove)=\"selectedLOB(bpmn_id)\" id=\"subway_dblclick\">\r\n    <div class=\"head-part\">\r\n        <div class=\"pull-right1\">\r\n            <button mat-icon-button (click)=\"zoomOut('subway_map_viewer_'+ bpmn_id)\">\r\n                <em class=\"material-icons plus-icon minimize-icon\" [ngClass]=\"{'active-btn': minimize}\"\r\n                    (click)=\"minimize= true;zoom_out=false;add=false;\">minimize</em>\r\n            </button>\r\n            <button mat-icon-button (click)=\"zoomReset('subway_map_viewer_'+ bpmn_id)\">\r\n                <em class=\"material-icons plus-icon\" [ngClass]=\"{'active-btn': zoom_out}\"\r\n                    (click)=\"minimize= false;zoom_out=true;add=false;\">zoom_out</em>\r\n            </button>\r\n            <button mat-icon-button (click)=\"zoomIn('subway_map_viewer_'+ bpmn_id)\">\r\n                <em class=\"material-icons plus-icon\" [ngClass]=\"{'active-btn': add}\"\r\n                    (click)=\"minimize= false;zoom_out=false;add=true;\">add</em>\r\n            </button>\r\n        </div>\r\n    </div>\r\n   \r\n    <div class=\"grabber\" *ngIf=\"accordionheight\" appCustomdrag [lob_id]=\"bpmn_id\" [lob_height]=\"accordionheight\"\r\n        (onValueChanged)=\"onValueChanged($event)\" >\r\n        <div class=\"map-body dragdiv\"  contenteditable=\"true\">\r\n            <div class=\"content-wrapper subway-map-custom-style\">\r\n                <div class=\"subway-map-viewer\" id=\"{{'subway_map_viewer_'+ bpmn_id}}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"panel panel-default\" *ngIf=\"false\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">Panel title</h3>\r\n        <div class=\"content-wrapper subway-map-custom-style\">\r\n\r\n            <mat-toolbar class=\"subway-map-viewer-menu map-toolbar\">\r\n                <button mat-icon-button (click)=\"zoomIn()\">\r\n                    <mat-icon aria-label=\"Zoom In\">zoom_in</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"zoomReset()\">\r\n                    <mat-icon aria-label=\"Zoom In\">center_focus_strong</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"zoomOut()\">\r\n                    <mat-icon aria-label=\"Zoom Out\">zoom_out</mat-icon>\r\n                </button>\r\n            </mat-toolbar>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"content-wrapper subway-map-custom-style\" >\r\n            <div class=\"subway-map-viewer\" id=\"{{'subway_map_viewer_'+ bpmn_id}}\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- new subway map heading -->\r\n    <div class=\"subway-map-new-filter-select\" *ngIf=\"false\">\r\n        <div class=\"filder-div\">\r\n            <span class=\"show-legend hand\" (click)=\"showLegend()\"> Show Legend</span>\r\n            <span class=\"hand position-relation\" (click)=\"showFilters()\">\r\n                <span class=\"apply-filter-symbol\" *ngIf=\"selectedStatus.length > 0\"></span>\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </span>\r\n        </div>\r\n        <!-- show legend -->\r\n        <div class=\"legend-box\" *ngIf=\"showLegendBox\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-8\">\r\n                    <div class=\"legend-head\">Processes performance</div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 legend-status \">\r\n                            <img class=\"processes-icon\" src=\"../assets/images/Initiated-waiting-spinner.png\"\r\n                                alt=\"img\" />\r\n                            <span class=\"status-desc\">Initiated, waiting</span>\r\n                        </div>\r\n                        <div class=\"col-lg-4 legend-status\">\r\n                            <img class=\"processes-icon\" src=\"../assets/images/active-issues.png\" alt=\"img\" />\r\n                            <span class=\"status-desc\">Active, issues</span>\r\n                        </div>\r\n                        <div class=\"col-lg-4 legend-status\">\r\n                            <img class=\"processes-icon\" src=\"../assets/images/active-acceptable.png\"\r\n                                alt=\"img\" />\r\n                            <span class=\"status-desc\">Active, acceptable</span>\r\n                        </div>\r\n                        <div class=\"col-lg-4 legend-status\">\r\n                            <img class=\"processes-icon\" src=\"../assets/images/active-average.png\" alt=\"img\" />\r\n                            <span class=\"status-desc\">Active, average</span>\r\n                        </div>\r\n                        <div class=\"col-lg-4 legend-status\">\r\n                            <img class=\"processes-icon\" src=\"../assets/images/inactive.png\" alt=\"img\" />\r\n                            <span class=\"status-desc\">Inactive</span>\r\n                        </div>\r\n                        <div class=\"col-lg-4 legend-status\">\r\n                            <img class=\"processes-icon\" src=\"../assets/images/not-automated.png\" alt=\"img\" />\r\n                            <span class=\"status-desc\">Not Automated</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 bots-health\">\r\n                    <div class=\"legend-head\">Bots Health</div>\r\n                    <div class=\"un-healthy\">\r\n                        <span><img src=\"../assets/images/bitmapred.png\" alt=\"\" /></span>\r\n                        <span class=\"status-desc\">Unhealthy</span>\r\n                    </div>\r\n                    <div>\r\n                        <span><img src=\"../assets/images/bitmapgreen.png\" alt=\"\" /></span>\r\n                        <span class=\"status-desc\">Healthy</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- show filters -->\r\n        <div>\r\n            <ul class=\"filter-dropdown-menu\" *ngIf=\"showfilterBox\">\r\n                <li class=\"all-cases\">\r\n                    <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"allcases\" [checked]=\"checkedAll\"\r\n                        (click)=\"toggleselection('All')\">\r\n                    <span class=\"hand process-name\" (click)=\"toggleselection('All')\">All</span></li>\r\n                <li *ngFor=\"let item of participants \">\r\n                    <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"{{item.name}}\"\r\n                        [checked]=\"selectedStatus.indexOf(item.name)>-1\" (click)=\"toggleselection(item.name)\">\r\n                    <span class=\"hand process-name\" (click)=\"toggleselection(item.name)\">{{item.name}}</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<svg height=\"30\" width=\"30\">\r\n    <defs>\r\n        <marker id=\"marker-circle\" markerWidth=\"8\" markerHeight=\"8\" refx=\"4\" refy=\"4\">\r\n            <circle cx=\"4\" cy=\"4\" r=\"4\" stroke-width=\"3\" fill=\"#6269A2\" />\r\n        </marker>\r\n    </defs>\r\n</svg>\r\n</div>\r\n\r\n<div id=\"tooltip\" [style.position]=\"'fixed'\" [style.left]=\"tooltipLEFT\" [style.top]=\"tooltipTOP\" [innerHtml]=\"tooltipHTML\"></div>"

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
    function SubwayViewerComponent(_adminService, _bpmnService, _workItemService, _configService, router) {
        this._adminService = _adminService;
        this._bpmnService = _bpmnService;
        this._workItemService = _workItemService;
        this._configService = _configService;
        this.router = router;
        this._alive = true;
        this.isLoading = false;
        this.childProcess = [];
        this.participants = [];
        this.procgrp = [];
        // private viewer_0 = true;
        this.accordionheight = 365;
        this.yAxis = 0;
        this.resizesvg = false;
        this.isbottomshown = "visible";
        this.ishavingdata = "visible";
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
            var arrowMarker = '', arrowMarkerFail = '', arrowMarkerTotal = '';
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
            var tmpHtml = "\n    <div class=\"subway-viewer-nodes-tooltip\">\n      <div class=\"subway-tooltip-header " + headerclr + "\">\n        <span class=\"text\">Process Throughput : </span><span class=\"status\">" + statusMessage + "</span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 headercontent\">\n          <span class=\"headertext\"> Bots Health</span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-9 headercontent\">\n            <img class=\"icon\" src=\"/assets/images/bitmap" + img_clr + ".png\"><span class='" + clsName + "'>" + data.healthStatus + " </span>\n          </div>\n        </div>\n        <div class=\"hr\"></div>\n        <div class=\"subway-tooltip-label\">Active Bots :  <span class=\"subway-tooltip-value\">" + tooltipdata.active_bots + "</span>\n        Standby Bots  :  <span class=\"subway-tooltip-value\">" + tooltipdata.stand_by_bots + "</span></div>\n      </div>\n      <div class=\"subway-tooltip-main-container\">\n        <table class=\"table\">\n          <tr>\n            <th>   </th>\n            <th> Actuals </th>\n            <th> KPI </th>\n          </tr>\n          <tr>\n            <td> Avg Processing Time/Record</br>(in Seconds)</td>\n            <td class=\"timevalue\">" + tooltipdata.avg_processess_time_actual[1] + "<img src=\"/assets/images/" + arrowMarker + ".png\" class=\"tooltip_image\"></td>\n            <td class=\"timevalue\">" + tooltipdata.avg_processess_time_actual[2] + "</td>\n          <tr>\n          <tr>\n            <td> Failed Records</br>(in %)</td>\n            <td class=\"timevalue\">" + tooltipdata.failed_records_actual[0] + "<img src=\"/assets/images/" + arrowMarkerFail + ".png\" class=\"tooltip_image\"></td>\n            <td class=\"timevalue\">" + tooltipdata.failed_records_actual[2] + "</td>\n          <tr>\n          <tr>\n            <td> Total Records/day</td>\n            <td class=\"timevalue\">" + tooltipdata.total_records_per_day_actual[0] + "<img src=\"/assets/images/" + arrowMarkerTotal + ".png\" class=\"tooltip_image\"></td>\n            <td class=\"timevalue\">" + tooltipdata.total_records_per_day_actual[1] + "</td>\n          <tr>\n        </table>\n        <div class=\"row tooltip-bottom\">\n          <div class=\"col-lg-6 text-center\">\n            <span class=\"timeclass\"> Anticipated Time </span></br>\n            <span class=\"timevalue\">" + tooltipdata.anticipated_time + "</span>\n          </div>\n          <div class=\"col-lg-6 text-center\">\n            <span class=\"timeclass\"> Up Time </span></br>\n            <span class=\"timevalue\">" + tooltipdata.up_time + "</span>\n          </div>\n        </div>\n      </div>\n    </div>";
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
    }
    SubwayViewerComponent.prototype.loadSubWayMap = function () {
        var _this = this;
        this._viewer = new __WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["e" /* NavigatedViewer */]({
            container: '#subway_map_viewer_' + this.bpmn_id,
            width: '100%',
            height: '100%'
        });
        this._overlays = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].overlays);
        this._canvas = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].canvas);
        this._elementRegistry = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].elementRegistry);
        this._eventBus = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].eventBus);
        this._zoomScroll = this._viewer.get(__WEBPACK_IMPORTED_MODULE_2__shared_shared_modules_bpmn_js_bpmn_js__["c" /* InjectionNames */].zoomScroll);
        // this._eventBus.on('element.hover', (e) => {
        //   if ((e.element.type == 'bpmn:IntermediateThrowEvent') && (this._processesStatusData)) {
        //     let statusObject: any = this._processesStatusData[e.element.id];
        //     if (statusObject && statusObject.status != '' && statusObject.status != "INACTIVE") {
        //       let tooltipHTML = '';
        //       let pos: any = { "bottom": 0, "right": -10 }
        //       if (e.originalEvent.offsetX > 400) {
        //         pos.right = 450;
        //       }
        //       if (e.originalEvent.offsetY > 280) {
        //         pos.bottom = 280;
        //       } else {
        //         pos.bottom = e.originalEvent.offsetY - 30;
        //       }
        //       let tmptooltipHTML = this.generateTooltip(statusObject.attribute, statusObject);
        //       this._activeOverlayId = this._overlays.add(e.element.id, {
        //         position: {
        //           bottom: pos.bottom,
        //           right: pos.right,
        //         },
        //         html: '<div>' + tmptooltipHTML + '</div>'
        //       });
        //     }
        //   }
        // });
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
                _this.isLoading = false;
                _this.setLoader();
                setTimeout(function () {
                    _this.zoomReset();
                }, 500);
            }, 500);
        }
        setTimeout(function () {
            document.getElementById('subway_dblclick').onkeypress = function () { return false; };
        }, 1000);
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
        this.loadProcessStates();
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
    SubwayViewerComponent.prototype.loadProcessStates = function () {
        var _this = this;
        this.isLoading = true;
        this._workItemService.getWorkItems({ start: 1, limit: -1 })
            .subscribe(function (data) {
            _this._processesStatusData = data.result["subway_map"];
            setTimeout(function () {
                //this.zoomReset();
                _this.setRoundEdges();
                _this._repaintMap();
            }, 100);
            _this.setLoader();
            _this.isLoading = false;
        }, function (error) {
            console.log("Error in SubWay data call");
        });
    };
    SubwayViewerComponent.prototype.getProcessStatesInInterval = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(this._configService.config.subWayMapPollingTime)
            .takeWhile(function () {
            return _this._alive;
        })
            .subscribe(function () {
            _this.loadProcessStates();
        });
    };
    SubwayViewerComponent.prototype._repaintMap = function () {
        for (var p in this._processesStatusData) {
            this.setMarkers(p, this._processesStatusData[p].status, this._processesStatusData[p].healthStatus, this._processesStatusData[p]);
        }
    };
    SubwayViewerComponent.prototype.setRoundEdges = function () {
        var marker = document.getElementsByTagName('marker');
        for (var i = 0; i < marker.length; i++) {
            if (marker[i]) {
                marker[i].setAttribute('style', 'marker-end: url(#marker-circle)');
            }
        }
    };
    SubwayViewerComponent.prototype.setMarkers = function (canvasEl, styleVal, healthStatus, canvasObj) {
        // let marker = document.getElementsByTagName('marker');
        // for (let i = 0; i < marker.length; i++) {
        //   if (marker[i]) {
        //     marker[i].setAttribute('style', 'marker-end: url(#marker-circle)');
        //   }
        // }
        //const allCircleElms: any = document.getElementsByTagName("circle");
        // for (let i = 0; i <= allCircleElms.length; i++) {
        //   if (allCircleElms[i] && allCircleElms[i].style) {
        //     //  allCircleElms[i].style.strokeWidth = "2px";
        //     //  allCircleElms[i].style.stroke = "#1C1B3B";
        //   }
        // }
        var _this = this;
        /* to hide lob name */
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
                        activeCls = "#d0021b";
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
                if (inner_img_clr !== '') {
                    this._overlays.remove({ element: canvasEl });
                    var shape = this._elementRegistry.get(canvasEl); // to get the height and width of element
                    var $overlayHtml = $('<div class="diagram-note" data-canvas-id=' + canvasEl + '><svg height="16" width="16"> <circle cx="7" cy="7" r="5" stroke-width="3" fill=' + activeCls + ' stroke = ' + strokestyle + ' /> </svg><img class="fa-robot" src="/assets/images/' + inner_img_clr + '.png " alt = " " /></div>').css({
                        width: shape.width,
                        height: shape.height
                    });
                    var bot_count = canvasObj.attribute ? (canvasObj.attribute.active_bots ? canvasObj.attribute.active_bots : 0) : 0;
                    var $overBotCountHtml = $('<div class="bot-count bot-count-healthy">' + bot_count + ' Bot' + (bot_count == 1 ? '' : 's') + '</div>');
                    //var this = this;
                    $overlayHtml.click(function (e) {
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
                            console.log(e.originalEvent);
                        }
                    }.bind(this));
                    this._overlays.add(canvasEl, styleVal, {
                        position: {
                            bottom: 30,
                            right: 30
                        },
                        html: $overlayHtml
                    });
                }
                if (loadclass) {
                    this._overlays.add(canvasEl, styleVal, {
                        position: {
                            bottom: 30,
                            right: 30
                        },
                        html: '<div style="margin-top: -15px;margin-left: -6px;"><img src="/assets/images/loader.gif" style="width: 17px;border-radius:50%"></div>'
                    });
                }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('xmlData'),
        __metadata("design:type", Object)
    ], SubwayViewerComponent.prototype, "xmldata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bpmn_id'),
        __metadata("design:type", String)
    ], SubwayViewerComponent.prototype, "bpmn_id", void 0);
    SubwayViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subway-viewer',
            template: __webpack_require__("../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/operational/subway-viewer/subway-viewer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_shared_services_admin_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_5__shared_shared_services_bpmn_bpmn_service__["a" /* BpmnService */], __WEBPACK_IMPORTED_MODULE_7__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_config_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SubwayViewerComponent);
    return SubwayViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".log-item-wrapper{\r\n    position: relative;\r\n    margin-bottom: 50px;\r\n}\r\n.time-cell{\r\n    width: 110px;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 110px;\r\n            flex: 0 0 110px;\r\n    position: relative;\r\n}\r\n.log-cell{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 740px;\r\n            flex: 1 1 740px;\r\n    height: 50px;\r\n    font-size: 12px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 10px;\r\n}\r\n.vertical-line{\r\n    height: 110px;\r\n    width: 2px;\r\n    position: absolute;\r\n    left: 42px;\r\n    top: 25px;\r\n}\r\n.time-text{\r\n    text-align: center;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding-left: 30px;\r\n}\r\n.log-time-now{\r\n    width: 55px;\r\n    height: 20px;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    z-index: 4;\r\n    position: relative;\r\n    line-height: 20px;\r\n    left: 15px;\r\n}\r\n.time-dot{\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    width: 10px;\r\n    height: 10px;\r\n    top: 3px;\r\n    left: 38px;\r\n    z-index: 1;\r\n}\r\n.time-delay{\r\n    position: absolute;\r\n    top: 65px;\r\n    left: -30px;\r\n    width: 65px;\r\n    text-align: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/log-item/log-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-row flex-align-center flex-justify-center log-item-wrapper\">\r\n  <div class=\"time-cell\">\r\n    <div *ngIf=\"(idx === 0)\" class=\"log-time-now\">Now</div>\r\n    <div class=\"time-text plain-value-size\">{{tmFormatted}}</div>\r\n    <div class=\"time-dot\"  \r\n      *ngIf=\"(idx !== 0)\"\r\n      [ngClass]=\"{'error' : (logItem && logItem.status == 'ERROR') }\"\r\n      ></div>\r\n  </div>\r\n  <div class=\"log-cell flex flex-column\"\r\n   [ngClass]=\"{'error' : (logItem && logItem.status == 'ERROR') }\">\r\n    <div [innerHTML]=\"sanitizedLogMsg\"></div>\r\n    <div [innerHTML]=\"sanitizedExtraInfo\"></div>\r\n  </div>\r\n  <div class=\"vertical-line\"></div>\r\n  <div class=\"time-delay plain-value-size\">{{timeDelay}}</div>\r\n</div>\r\n"

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
exports.push([module.i, ".no-data-msg{\r\n  min-height: 60px;\r\n  width: 60%;\r\n}\r\n\r\nmat-spinner{\r\n  position: absolute;\r\n  margin-top: -20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/logs-timeline/logs-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-body-wrapper\">\r\n  <div [hidden]=\"(!logTimelineData || logTimelineData.length)\" class=\"no-data-msg\">\r\n    <hr/> There are no errors in the workitem processed <hr/>\r\n  </div>\r\n  <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\r\n  <app-log-item *ngFor=\"let logItem of logTimelineData, let idx =index\" [logItem]=\"logItem\" [idx]=\"idx\" [tmPreviousLog]=\"(logTimelineData[idx+1] ? logTimelineData[idx+1].tmLog : 0)\"></app-log-item>\r\n</div>\r\n"

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
        this._paramsSubscriber = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].combineLatest(this._activatedRoute.queryParams, this._activatedRoute.parent.params).subscribe(function (data) {
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
exports.push([module.i, "\r\n.process-dot{\r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 10px;\r\n    margin-bottom: 5px;\r\n    border: 2px solid transparent;\r\n}\r\n.process-loader{\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 10px;\r\n    border: 2px solid #F6F6F6;\r\n    margin-bottom: 5px;\r\n}\r\n.process-dot.active{\r\n    border: 2px solid #07FD6D;\r\n    -webkit-box-shadow: 0 0 14px 0px #07FD6D;\r\n            box-shadow: 0 0 14px 0px #07FD6D;\r\n}\r\n.active-process-line{\r\n    position: absolute;\r\n    height: 3px;\r\n    width: 100%;\r\n    top: 40px;\r\n    left: 98px;\r\n}\r\n.label-wrapper{\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 30%;\r\n            flex: 0 0 30%;\r\n    overflow: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/process-item/process-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-column flex-1-1-auto flex-align-center flex-justify-center full-height relative\">\r\n  <div class=\"loader\">\r\n    <div class=\"process-loader\" style=\"visibility: hidden;\">\r\n    </div>\r\n  </div>\r\n  <div class=\"dot\">\r\n    <div class=\"process-dot\" [ngClass]=\"{'active' : (processData.sources.length >= 1)}\"></div>\r\n  </div>\r\n  <div class=\"pre-process-label plain-label plain-label-size label-wrapper\">\r\n    <div  *ngFor=\"let source of processData.sources\">{{source}}</div>\r\n  </div>\r\n</div>\r\n"

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
exports.push([module.i, ".search-text{\r\n    width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/records/records.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-body-wrapper\">\r\n  <div class=\"filter-wrapper\">\r\n    <mat-form-field class=\"search-text\">\r\n      <input class=\"\" matInput [(ngModel)]=\"searchText\" placeholder=\"Search\" (keyup)=\"filterRecords()\" />\r\n    </mat-form-field>\r\n    <mat-icon>search</mat-icon>\r\n  </div>\r\n  <div class=\"recods-wrapper\" *ngIf=\"sourceLength == 0\">\r\n    <hr>\r\n    records Data Not Avaialable\r\n    <hr>\r\n  </div>\r\n  <div class=\"recods-wrapper\" *ngIf=\"sourceLength != 0\"> \r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let record\"> {{record.recordId}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- Message Column -->\r\n      <ng-container matColumnDef=\"message\">\r\n        <mat-header-cell *matHeaderCellDef> Log Message </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let record\" style=\"padding-right:10px;\"> {{record.message}} </mat-cell>\r\n      </ng-container>\r\n\r\n       <!-- Status Column -->\r\n      <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef  class=\"align-center\"> Status </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let record\" class=\"align-center\"> \r\n          <mat-icon color=\"warn\" *ngIf=\"record.status == 'FAILED'\" matTooltip=\"{{record.status}}\">warning</mat-icon>\r\n          <mat-icon color=\"primary\" *ngIf=\"record.status == 'COMPLETED'\" matTooltip=\"{{record.status}}\">check</mat-icon>\r\n          <mat-spinner color=\"accent\" [diameter]=\"20\" *ngIf=\"(record.status != 'COMPLETED' && record.status != 'FAILED')\" matTooltip=\"{{record.status}}\"></mat-spinner>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <!-- Time-taken Column -->\r\n      <ng-container matColumnDef=\"timeTaken\">\r\n        <mat-header-cell *matHeaderCellDef> Time Taken </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let record\"> {{record.processingTime}} SEC</mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n    </mat-paginator>\r\n  </div>\r\n</div>\r\n"

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
        this._paramsSubscriber = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].combineLatest(this._activatedRoute.queryParams, this._activatedRoute.parent.params).subscribe(function (data) {
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
exports.push([module.i, "/* .extended-dash-wrapper{\r\n    min-height: calc(100vh - 214px) !important;\r\n    background-color: #3f3e50;\r\n    margin: 1px 0px;\r\n}\r\n.extended-dash-wrapper .dash-wrapper{\r\n    min-height:0;\r\n}\r\n.extended-ty .dash-wrapper .record-wrapper{\r\n    margin:5px 1px 0;\r\n} */\r\n.work-item-header{\r\n    height: 215px;\r\n    padding: 10px 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\r\n}\r\n.work-item-sub-header{\r\n    height: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n.process,\r\n.type{\r\n    height: 30px;\r\n}\r\n.second-header{\r\n    margin-bottom: 20px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.work-item-side-wrapper,\r\n.bot-button-wrapper{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.bot-button-wrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n.record-head{\r\n    margin: 0 0 0 40px;\r\n}\r\n.avg-totals,\r\n.record-totals{\r\n    min-width: 167px;\r\n    height: 100px;\r\n    border-radius: 5px 0 0 5px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.record-totals{\r\n    margin-right: 3px;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n.work-item-process-header{\r\n    margin-top: 4px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: relative;\r\n}\r\n.post-processing,\r\n.processing,\r\n.pre-processing{\r\n    width: 185px;\r\n    height: 100px;\r\n    margin-right: 2px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.processing {\r\n    width: 360px;\r\n}\r\n.post-processing {\r\n    width: 225px;\r\n}\r\n.avg-totals{\r\n    width: 247px;\r\n    border-radius: 0 5px 5px 0;\r\n    margin-left: 1px;\r\n}\r\n.record-totals > .flex,\r\n.avg-totals > .flex {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    padding:0  2px;\r\n}\r\n.plain-value-big-size{\r\n    margin-top: 10px;\r\n}\r\n.pre-process-label{\r\n    margin-bottom: 5px;\r\n}\r\n.pre-processing .loader,\r\n.pre-processing .pre-process-label,\r\n.pre-processing .pre-process-bot-count,\r\n.pre-processing .dot{\r\n    margin-left: -75px;\r\n}\r\n.align-last{\r\n    margin-top: -12px;\r\n}\r\n.process-line{\r\n    position: absolute;\r\n    height: 3px;\r\n    width: 565px;\r\n    top: 40px;\r\n    left: 260px;\r\n}\r\n.metric-field{\r\n    max-width: 33%;\r\n}\r\n.metric-label{\r\n    min-height: 20px;\r\n}\r\n.tab-wrapper{\r\n    margin: 0 auto;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    min-height: inherit;\r\n}\r\n.tab-head{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    padding: 0;\r\n    height: auto;\r\n    min-width: auto;\r\n    margin: 0 10px;\r\n}\r\n.mat-tab-label-active{\r\n    font-weight: bold;\r\n}\r\nnav{\r\n    border-bottom: none;\r\n}\r\n.bot-edit{\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n.spacer{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.circle-wrapper{\r\n    width: 50px;\r\n    height: 50px;\r\n    position: relative;\r\n}\r\nmat-progress-spinner{\r\n    margin: 0 10px;\r\n}\r\n.circle-path{\r\n    width: 35px;\r\n    height: 35px;\r\n    position: absolute;\r\n    top: 3px;\r\n    border-radius: 40px;\r\n    left: 13px;\r\n    border: 2px solid #000;\r\n    -webkit-box-shadow: 0 0 3px 0px #000;\r\n            box-shadow: 0 0 3px 0px #000;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.processing-bottom-label{\r\n    height: 10px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    border-bottom-style: dashed;\r\n    border-bottom-width: 1px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n.processing-bottom-label span{\r\n    padding: 0 5px;\r\n    border-radius: 5px;\r\n    margin-top: 9px;\r\n}\r\n.processing-bottom-label.label-process{\r\n    border-left-width: 1px;\r\n    border-right-width: 1px;\r\n    border-right-style: solid;\r\n    border-left-style: solid;\r\n}\r\n.source-list-wrapper{\r\n    overflow: auto;\r\n}\r\napp-item-record{\r\n    margin-top: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/operational/work-item/work-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"extended-dash-wrapper\">\r\n<div class=\"dash-wrapper\">\r\n  <div class=\"work-item-header\">\r\n    <div class=\"work-item-sub-header\">\r\n      <div class=\"work-item-side-wrapper\">\r\n        <div class=\"flex second-header\">\r\n          <div class=\"back\" (click)=\"openOperationalDashboard()\">\r\n            <mat-icon>arrow_back</mat-icon>\r\n          </div>\r\n          <div class=\"process\">\r\n            <div class=\"list-item-label primary-label-color\">Process</div>\r\n            <div class=\"list-item-value\">{{recordItem?.processName || recordItem?.key}}</div>\r\n          </div>\r\n          <div class=\"type primary-border-color\">\r\n            <div class=\"list-item-label primary-label-color\">Work Item</div>\r\n            <div class=\"list-item-value\">{{recordItem?.triggeredBy}}</div>\r\n          </div>\r\n          <div class=\"status\">\r\n            <div class=\"status-indicator\" *ngIf=\"recordItem?.status === 'SUCCESS'\">COMPLETED</div>\r\n            <div class=\"status-indicator\" *ngIf=\"recordItem?.status === 'ACTIVE_FLOWING' ||recordItem?.status == 'ACTIVE_SLOW' || recordItem?.status === 'ACTIVE_NOT_FLOWING'\">RUNNING</div>\r\n\r\n            <div class=\"status-indicator\" *ngIf=\"recordItem?.status !== 'SUCCESS' && recordItem?.status !== 'ACTIVE_FLOWING' && recordItem?.status !== 'ACTIVE_SLOW' && recordItem?.status !== 'ACTIVE_NOT_FLOWING'\">NA</div>\r\n\r\n          </div>\r\n          <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\r\n          <span class=\"spacer\"></span>\r\n          <div class=\" flex flex-align-center flex-justify-center\">\r\n            <span class=\"list-item-value\">{{(recordItem?.botsRunning || recordItem?.botsAvailable || 0) }} {{(recordItem?.botsRunning || recordItem?.botsAvailable\r\n              || 0) == 1 ? 'Bot' : 'Bots'}}</span>\r\n            <a class=\"bots-label\" (click)=\"isShowAddBot = !isShowAddBot\" *ngIf=\"isPendingExists\">\r\n              <mat-icon class=\"bot-edit\">mode_edit</mat-icon>\r\n            </a>\r\n            <app-add-bot *ngIf=\"isShowAddBot\" [availableBots]=\"(recordItem?.availableBots || ((recordItem?.botsRunning ? recordItem?.botsRunning : (recordItem?.botsAvailable ? recordItem?.botsAvailable : 0 )) + 1))\"\r\n              [botsAdded]=\"(recordItem?.botsRunning || recordItem?.botsAvailable ||  0)\" class=\"add-bot\" [id]=\"recordItem?.jobId\"\r\n              (onClose)=\"closeAddBot($event)\"></app-add-bot>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"source-list-wrapper\">\r\n      <app-item-record [itemRecord]=\"source\" [showDetailLink]=\"false\"></app-item-record>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"dash-wrapper\">\r\n  <mat-card class=\"tab-wrapper\">\r\n    <nav mat-tab-nav-bar aria-label=\"weather navigation links\">\r\n      <a mat-tab-link routerLink=\"records\"  [active]=\"activeLinkIndex === 0\" (click)=\"activeLinkIndex = 0\" class=\"tab-head\">\r\n        Records\r\n      </a>\r\n      <a mat-tab-link routerLink=\"log-items\" (click)=\"activeLinkIndex = 1\" [active]=\"activeLinkIndex === 1\" class=\"tab-head\">\r\n        Errors Timeline\r\n      </a>\r\n    </nav>\r\n    <router-outlet *ngIf=\"source\"></router-outlet>\r\n  </mat-card>\r\n</div>\r\n"

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