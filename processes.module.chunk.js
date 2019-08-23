webpackJsonp(["processes.module"],{

/***/ "../../../../../src/app/main/processes/active-work-items/active-work-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"parentData ? 'col-md-12':'col-md-9'\" class=\"active-items\">\r\n    <div class=\"active-work-item\" *ngFor=\"let item of sources;  let idx=index;\">\r\n      <div class=\"status\">\r\n        {{(item ? (item && item.status.toUpperCase() == 'WAITING' ? 'Waiting' : ( item && item.status.toUpperCase()\r\n          == 'SUCCESS' ? 'Processed' : (item && item.status.toUpperCase() == 'INCOMPLETE' ? 'Incomplete' : (item && item.status.toUpperCase() == 'NOT_INDEXED'?'Started, Waiting': (item\r\n          && item.status.toUpperCase()=='INDEXED'?'Started, Waiting':'Currently Running'))))) : '')}}\r\n          <span  class=\"active_spinner\" *ngIf=\"selectedidx === idx\">\r\n              <mat-spinner color=\"accent\" diameter=\"20\" ></mat-spinner>\r\n            </span>\r\n      </div>\r\n      <div>\r\n        <div (mouseenter)=\"changeStyle($event, idx)\" (mouseleave)=\"changeStyle1($event, idx)\">\r\n          <div class=\"box\" [ngClass]=\"{'active-item': isHovered && hoverInd== idx}\">\r\n            <div class=\"row row1 \">\r\n              <div class=\"col-md-3 colum1_key_value\">\r\n                <span class=\"key\">Started:</span>\r\n                <span class=\"tmvalue\">{{ item.tmStarted }}</span>\r\n              </div>\r\n              <div class=\"col-md-3 colum1_key_value\">\r\n                <span class=\"key\" *ngIf=\"item.sourceType\">{{sourceKey}}:</span>\r\n                <span class=\"tmvalue\" *ngIf=\"item.sourceType\">{{ item.sourceType }}</span>\r\n              </div>\r\n              <div class=\"col-md-6\" *ngIf=\"isHovered && hoverInd== idx;\">\r\n                <button type=\"button\" class=\" button_records btn btn-primary\"\r\n                  (click)=\"openWorkItemDetail(item,item.processName, 'All', idx)\">\r\n                  <img class=\"fonticon2\" src=\"../../../../assets/images/view-details.png\" alt=\"\">\r\n                  View Records Details</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"hr\"></div>\r\n            <div class=\"row row2\">\r\n              <div >\r\n                <div class=\"record-box1\">\r\n                  <ng-container *ngFor=\"let metric of item.metrics\">\r\n                      <div calss=\"items-top\">\r\n                    <div class=\"record-box-item\" *ngIf='isObject(metric.value) !== \"object\"'>\r\n                      <div class=\"colum2_key_value\" *ngIf=\"metric['key'] !== 'processingIssues'\">\r\n                        <div>{{ metric.label }}</div>\r\n                        <div class=\"col1\">{{ metric.value }}</div>\r\n                      </div>\r\n                    </div>\r\n                      </div>\r\n                    <div *ngIf='isObject(metric.value) === \"object\"'>\r\n                      <fieldset>\r\n                        <legend>Processing issues <span>({{getSum(metric.value)}})</span></legend>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-6 padding0\" *ngFor=\"let pro_issue of metric.value\">\r\n                            <div class=\" attention-needed\" matTooltip=\"{{pro_issue.label}}\">{{ pro_issue.label }}</div>\r\n                            <div class=\"text-center process-issue-value\">\r\n                              <img class=\"fonticon pointer\" src=\"../../../../assets/images/high-priority.png\" alt=\"\"\r\n                                *ngIf=\"pro_issue.value > 0\" (click)=\"goToFailedRecords(item, item.processName,pro_issue.label, idx)\">\r\n                              <span *ngIf=\"pro_issue.value !== 0\" class=\"error pointer\" (click)=\"goToFailedRecords(item, item.processName,pro_issue.label, idx)\"><u>{{ pro_issue.value }}</u></span>\r\n                              <span *ngIf=\"pro_issue.value === 0\">{{ pro_issue.value }}</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </fieldset>\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/processes/active-work-items/active-work-items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active-items {\n  height: calc(100vh - 268px);\n  overflow: auto; }\n\n.active-work-item .status {\n  font-weight: bold;\n  color: #555555;\n  font-size: 12px;\n  padding: 10px 0px 6px;\n  position: relative; }\n\n.active-work-item .status .active_spinner {\n    position: absolute; }\n\n.active-work-item .active-item {\n  background-color: #E7F3FF !important;\n  border: 1px solid #4A90E2 !important; }\n\n.active-work-item .box {\n  height: auto;\n  background: #e6eef7;\n  border: 1px solid #dedee0;\n  border-radius: 6px; }\n\n.active-work-item .box .key {\n    color: #747474;\n    font-weight: bold; }\n\n.active-work-item .box .value {\n    color: #201f20;\n    font-size: 14px;\n    font-weight: normal; }\n\n.active-work-item .box .hr {\n    margin-right: 9px;\n    margin-left: 9px;\n    height: 2px;\n    margin-top: 4px;\n    border-bottom: 1px solid #cccccd; }\n\n.active-work-item .box .row {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n\n.active-work-item .box .row1 {\n    font-size: 12px;\n    height: 32px;\n    padding-top: 5px;\n    padding-bottom: 5px; }\n\n.active-work-item .box .colum1_key_value {\n    padding-left: 8px !important;\n    padding-top: 6px;\n    padding-right: 0; }\n\n.active-work-item .box .colum2_key_value {\n    font-size: 12px;\n    color: #4a4a4a;\n    margin-top: -16px; }\n\n.active-work-item .box .kill_btn {\n    float: right;\n    background: transparent;\n    font-size: 12px;\n    font-weight: bold;\n    height: 30px !important;\n    padding: 6px 12px;\n    margin-right: 10px; }\n\n.active-work-item .box .row2 {\n    font-size: 11px;\n    padding-top: 4px; }\n\n.active-work-item .box .row2 .record-box1 {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      border-radius: 5px;\n      height: 75px;\n      margin: 5px 10px; }\n\n.active-work-item .box .row2 .record-box1 .fonticon {\n        padding-right: 3px;\n        float: none !important; }\n\n.active-work-item .box .col1 {\n    font-size: 16px;\n    font-weight: bold;\n    color: #4a4a4a;\n    margin-top: 13px; }\n\n.active-work-item fieldset {\n  border: 1px solid #ef9898 !important;\n  background-color: #fef5f5;\n  margin-top: -11px !important;\n  width: 100%;\n  height: auto !important;\n  border-radius: 4px;\n  padding: 0 !important; }\n\n.active-work-item legend {\n  color: #4a4a4a;\n  font-size: 12px;\n  font-weight: 500;\n  width: auto !important;\n  border: 1px solid #ef9898 !important;\n  margin: 0 auto;\n  padding: 0 6px;\n  background-color: #fef5f5; }\n\n.active-work-item .system_issues-count {\n  color: #6b6b6b;\n  font-size: 16px;\n  font-weight: bold; }\n\n.active-work-item .padding0 {\n  padding: 4px 0 8px 9px !important; }\n\n.active-work-item .attention-needed {\n  font-size: 11px;\n  color: #4a4a4a;\n  width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.active-work-item .process-issue-value {\n  font-size: 16px;\n  font-weight: bold; }\n\n.active-work-item .error {\n  color: #f44337; }\n\n.active-work-item .fonticon2 {\n  padding-right: 6px; }\n\n.active-work-item .button_records {\n  float: right;\n  background: #4A90E2;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: bold;\n  border: none;\n  border-radius: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/active-work-items/active-work-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveWorkItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActiveWorkItemsComponent = /** @class */ (function () {
    function ActiveWorkItemsComponent(_workItemService, _router, toastr) {
        this._workItemService = _workItemService;
        this._router = _router;
        this.toastr = toastr;
        this.isHovered = false;
        this.isKillingProcess = false;
        this.queryParam = {};
    }
    ActiveWorkItemsComponent.prototype.ngOnInit = function () {
    };
    // kill(item, index) {
    //   console.log('item, key', item, index);
    //   const obj = {
    //     'job_id' : item.job_id ? item.job_id : ''
    //   };
    //   this.isKillingProcess = true;
    //   this._workItemService.killTheProcess(obj).subscribe((data: any) => {
    //       this.isKillingProcess = false;
    //       if (data['result']['status'] === 'Failed') {
    //         this.toastr.error(data['result']['message'], 'Information!');
    //       } else {
    //         this.toastr.success(data['result']['message'], 'Information!');
    //         this.sources.splice(index, 1);
    //       }
    //     },
    //     (error) => {
    //       this.isKillingProcess = false;
    //       this.toastr.error(error, 'Information!');
    //     }
    //   );
    // }
    ActiveWorkItemsComponent.prototype.changeStyle = function ($event, idx) {
        this.hoverInd = idx;
        this.isHovered = true;
    };
    ActiveWorkItemsComponent.prototype.changeStyle1 = function ($event, idx) {
        this.hoverInd = -1;
        this.isHovered = false;
    };
    ActiveWorkItemsComponent.prototype.goToFailedRecords = function (sourceId, key, filter, idx) {
        var passFilter = filter === 'Attention Needed' ? 'Failed - Attention Needed' : 'System Issues';
        this.selectedidx = idx;
        this._workItemService.workItemDetailsFilter = passFilter;
        this.openWorkItemDetail(sourceId, key, passFilter, idx);
    };
    ActiveWorkItemsComponent.prototype.openWorkItemDetail = function (item, key, filter, idx) {
        this.selectedidx = idx;
        if (key) {
            this.queryParam = {
                queryParams: {
                    filter: key
                }
            };
        }
        if (item.sourceId === 'NA') {
            return;
        }
        this.getRecordsBasedOnProcessName(item.sourceId, key, filter);
        this.getLogsBasedOnProcessName();
        // this._router.navigate(['app/operational/work-item/', item.status.toLowerCase(), item.sourceId, item.processName], queryParam);
    };
    ActiveWorkItemsComponent.prototype.getRecordsBasedOnProcessName = function (sourceId, key, filter) {
        var _this = this;
        // this.isLoading = true;
        this._workItemService.getWorkItemDetails(sourceId, key).subscribe(function (data) {
            _this._workItemService.workItemDetails = data['result'];
            _this._workItemService.workItemDetailsFilter = filter;
            _this._workItemService.isViewRecordDetails = true;
            _this._workItemService.activePage = 'Active Work items';
            // this.isLoading = false;
        }, function (error) {
            // this.isLoading = false;
        });
    };
    ActiveWorkItemsComponent.prototype.getLogsBasedOnProcessName = function () {
    };
    ActiveWorkItemsComponent.prototype.isObject = function (val) {
        return typeof (val);
    };
    ActiveWorkItemsComponent.prototype.getSum = function (values) {
        return values.map(function (item) { return item.value; }).reduce(function (prev, next) { return prev + next; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], ActiveWorkItemsComponent.prototype, "parentData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('workItems'),
        __metadata("design:type", Array)
    ], ActiveWorkItemsComponent.prototype, "sources", void 0);
    ActiveWorkItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-active-work-items',
            template: __webpack_require__("../../../../../src/app/main/processes/active-work-items/active-work-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/active-work-items/active-work-items.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], ActiveWorkItemsComponent);
    return ActiveWorkItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/completed-work-items/completed-work-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"complete-work-list\" (scroll)=\"onScroll($event)\">\r\n    <button mat-button color=\"primary\" class=\"refresh-btn\"  (click)=\"reloadItems()\">\r\n        <mat-icon inline=true>refresh</mat-icon>\r\n        Refresh\r\n    </button>\r\n    <button *ngIf=\"isLoadingProcessedWorkItems\" mat-button color=\"primary\" class=\"refresh-btn\">\r\n       <mat-spinner inline=true color=\"accent\" diameter=\"20\" ></mat-spinner>\r\n    </button>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n    <table class=\"table table-hover complete-table\">\r\n      <thead class=\"table-head\" *ngIf=\"sources&& sources.length > 0\">\r\n        <tr>\r\n          <th class=\"started_td_width\">Started</th>\r\n          <th class=\"text-center\" *ngFor=\"let metric of sources[0].metrics\" class=\"text-center\" (click)=\"sort(metric.label)\">\r\n          {{metric.label}}\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"table-body\" *ngIf=\"sources && sources.length > 0\">\r\n          <tr *ngIf=\"isLoading\" class=\"text-center\">\r\n            <td [attr.colspan]=\"colspan\"><mat-spinner color=\"accent\" diameter=\"20\" ></mat-spinner></td>\r\n          </tr>\r\n          <ng-container *ngIf=\"!isLoading\">\r\n            <tr *ngFor=\"let source of sources;let i=index;\" class=\"pointer\">\r\n              <td class=\"started_td_width\" (click)=\"openWorkItemDetail(source,source.tmStarted, 'All')\">{{ source.tmStarted? source.tmStarted: '-' }}</td>\r\n              <td class=\"text-center\" *ngFor=\"let metric of source.metrics; let id=index\" class=\"text-center\">\r\n                <span (click)=\"openWorkItemDetail(source,source.tmStarted,metric.label,id)\" [ngStyle]=\"{'pointer-events': (metric.label === 'Avg. Processing Time (secs)' || metric.label === 'Total Time Taken (mins)') ? 'none' : 'inherit'}\" >{{metric.value}}</span>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"sources && sources.length === 0\">\r\n              <td>There is no Data to display.</td>\r\n            </tr>\r\n          </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/processes/completed-work-items/completed-work-items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".complete-work-list {\n  padding-top: 15px;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  height: calc(100vh - 268px);\n  overflow: auto; }\n  .complete-work-list .table {\n    width: 100%; }\n  .complete-work-list .complete-table {\n    border: 1px solid #cccccd;\n    min-height: 100px; }\n  .complete-work-list .table > thead > tr > th {\n    border-bottom: 1px solid #ddd !important;\n    vertical-align: middle !important;\n    padding: 8px 8px 8px 8px !important;\n    white-space: initial !important; }\n  .complete-work-list .table-head {\n    background-color: #e6eef7;\n    font-size: 12px;\n    color: #5f6061; }\n  .complete-work-list .row {\n    margin-right: 0px !important;\n    margin-left: 0px !important; }\n  .complete-work-list .table-body {\n    background-color: #ecf1f7;\n    font-size: 12px;\n    color: #4a4a4a; }\n  .started_td_width {\n  width: 18%; }\n  .metric_width {\n  width: 15%; }\n  .refresh-btn {\n  float: right;\n  margin: 0px 15px 4px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/completed-work-items/completed-work-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedWorkItemsComponent; });
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


var CompletedWorkItemsComponent = /** @class */ (function () {
    function CompletedWorkItemsComponent(_workItemService) {
        this._workItemService = _workItemService;
        this.title = 'app works!';
        this.isLoadingProcessedWorkItems = false;
        this.sendScrollEventToProcessInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLoading = false;
        this.queryParam = {};
        //sorting
        this.key = 'RMO';
        this.reverse = false;
    }
    CompletedWorkItemsComponent.prototype.ngOnInit = function () {
        if (this.sources.length > 0) {
            this.processName = this.sources[0]["processName"];
        }
    };
    CompletedWorkItemsComponent.prototype.sort = function (key, number) {
        //  this.key = key;
        //  this.reverse = !this.reverse;
    };
    CompletedWorkItemsComponent.prototype.getRecordsBasedOnProcessName = function (item, key, filter) {
        var _this = this;
        // this._router.navigate(['app/operational/work-item/',this._itemRecord.status.toLowerCase(),
        // this._itemRecord.sourceId,this._itemRecord.processName], queryParam);
        this.isLoading = true;
        this.colspan = (this.sources ? (this.sources[0]['metadata'] ? (this.sources[0]['metadata']['key'] ? '9' : '8') : '7') : '7');
        console.log('this.colspan', this.colspan);
        // this._workItemService.getWorkItemDetails(item.sourceId, key).subscribe(
        this._workItemService.getWorkItemDetails(item.sourceId, item.processName).subscribe(function (data) {
            _this._workItemService.workItemDetails = data['result'];
            _this._workItemService.workItemDetailsFilter = filter;
            _this._workItemService.isViewRecordDetails = true;
            _this._workItemService.activePage = 'Completed Work items';
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    CompletedWorkItemsComponent.prototype.openWorkItemDetail = function (item, key, filterKey) {
        if (key) {
            this.queryParam = {
                queryParams: {
                    filter: key
                }
            };
        }
        if (this.key['sourceId'] === 'NA' || this.key['sourceId'] === '') {
            return;
        }
        this.getRecordsBasedOnProcessName(item, key, filterKey);
        // this.getLogsBasedOnProcessName();
        // this._router.navigate(['app/operational/work-item/',this._itemRecord.status.toLowerCase() ,this._itemRecord.sourceId,this._itemRecord.processName], queryParam);
    };
    CompletedWorkItemsComponent.prototype.reloadItems = function () {
        this.isLoadingProcessedWorkItems = true;
        this.getCompletedWorkItems();
    };
    CompletedWorkItemsComponent.prototype.getCompletedWorkItems = function () {
        var _this = this;
        this.completedWorkItems = [];
        this._workItemService.getProcessedWorkItemsByProcessName({
            start: 0,
            limit: 10,
            processName: this.processName,
            keyvalue: "",
            selectedmetakey: "",
        }).subscribe(function (data) {
            if (data["result"].length === 0) {
                _this.completedWorkItems = [];
            }
            for (var i = 0; i < data.result.length; i++) {
                _this.completedWorkItems.push(data.result[i]);
            }
            _this.isLoadingProcessedWorkItems = false;
        }, function (error) {
            console.log("ERROR: ", error);
            _this.isLoadingProcessedWorkItems = false;
        });
        this.sources = this.completedWorkItems;
    };
    CompletedWorkItemsComponent.prototype.onScroll = function (event) {
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            this.sendScrollEventToProcessInit.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CompletedWorkItemsComponent.prototype, "sendScrollEventToProcessInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('workItems'),
        __metadata("design:type", Array)
    ], CompletedWorkItemsComponent.prototype, "sources", void 0);
    CompletedWorkItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-completed-work-items',
            template: __webpack_require__("../../../../../src/app/main/processes/completed-work-items/completed-work-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/completed-work-items/completed-work-items.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */]])
    ], CompletedWorkItemsComponent);
    return CompletedWorkItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/incompleted-work-items/incompleted-work-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/incompleted-work-items/incompleted-work-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"source-list-wrapper\" [ngClass]=\"{'auto-height': showAllSource}\" *ngIf=\"sources.length\">\r\n  <app-item-record *ngFor=\"let record of sources;trackBy: trackById\" [itemRecord]=\"record\" [showDetailLink]=\"true\"></app-item-record>\r\n</div>\r\n\r\n<div *ngIf=\"!sources.length\"><p>0 records!</p></div>"

/***/ }),

/***/ "../../../../../src/app/main/processes/incompleted-work-items/incompleted-work-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncompletedWorkItemsComponent; });
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

var IncompletedWorkItemsComponent = /** @class */ (function () {
    function IncompletedWorkItemsComponent() {
    }
    IncompletedWorkItemsComponent.prototype.ngOnInit = function () {
    };
    IncompletedWorkItemsComponent.prototype.trackById = function (source) {
        return source ? source.sourceId : undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('workItems'),
        __metadata("design:type", Array)
    ], IncompletedWorkItemsComponent.prototype, "sources", void 0);
    IncompletedWorkItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incompleted-work-items',
            template: __webpack_require__("../../../../../src/app/main/processes/incompleted-work-items/incompleted-work-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/incompleted-work-items/incompleted-work-items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncompletedWorkItemsComponent);
    return IncompletedWorkItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/proccesses.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__processes_init_processes_init_component__ = __webpack_require__("../../../../../src/app/main/processes/processes-init/processes-init.component.ts");


var routes = [{
        path: ':processId',
        component: __WEBPACK_IMPORTED_MODULE_1__processes_init_processes_init_component__["b" /* ProcessesInitComponent */]
    }];
var routeRoot = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/main/processes/process-header/process-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".work-item-side-wrapper{\r\n    height: 55px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: -20px;\r\n}\r\n.work_item_title_color{\r\n    color: #fff !important;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n.work-item-label{\r\n    color: #b6b6b6 !important;\r\n    height: 11px;\r\n    font-size: 12px !important;\r\n    font-weight: bold;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/process-header/process-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"work-item-side-wrapper\">\r\n  <div class=\"flex second-header\">\r\n    <div class=\" primary-border-color\">\r\n      <div class=\"list-item-label primary-label-color work-item-label\">Work Item: <span class=\"list-item-value work_item_title_color\">{{triggeredBy ? triggeredBy: ''}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/processes/process-header/process-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessHeaderComponent = /** @class */ (function () {
    function ProcessHeaderComponent(_router) {
        this._router = _router;
    }
    ProcessHeaderComponent.prototype.ngOnInit = function () {
    };
    ProcessHeaderComponent.prototype.openOperationalDashboard = function () {
        this._router.navigate(['app/operational/dashboard']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('process'),
        __metadata("design:type", Object)
    ], ProcessHeaderComponent.prototype, "process", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('triggeredBy'),
        __metadata("design:type", Array)
    ], ProcessHeaderComponent.prototype, "triggeredBy", void 0);
    ProcessHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-process-header',
            template: __webpack_require__("../../../../../src/app/main/processes/process-header/process-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/process-header/process-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProcessHeaderComponent);
    return ProcessHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/processes-init/processes-init.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-wrapper flex\">\r\n  <div class=\"sidenav \">\r\n    <app-processes-list></app-processes-list>\r\n  </div>\r\n  <div class=\"sidecontent sidecontent_bg\">\r\n    <div class=\" processes\" [ngStyle]=\"{'width': table_col_processes ? '76%' : '97%'}\">\r\n      <div class=\"active_process\" style=\"height:20px;\">\r\n        <span *ngIf=\"_workItemService.isViewRecordDetails\">\r\n          <span (click)=\"goToActiveWorkItems()\" class=\"pointer\">\r\n            <u>{{ _workItemService.activeProcess }}</u>\r\n          </span> >\r\n          <span class=\"active_process\"><u> {{ _workItemService.activePage }}</u></span>\r\n        </span>\r\n        <div>\r\n            <div *ngIf=\"disableKillAndSchedule\">\r\n            <div class=\"pull-right scheduleCls\" [ngStyle]=\"{'right': table_col_resources ? '280px' : '41px'}\"\r\n            *ngIf=\"!isAdmin\">\r\n            \r\n            <div class=\"pull-left toggle-left\" [ngStyle]=\"{'border-right': activeWorkItems.length > 0 ? '2px solid #435272' : 'none'}\">\r\n              <span>Schedule <strong> {{isScheduleChecked?'On':'Off'}}</strong> &nbsp;\r\n                <label class=\"switch\">\r\n                  <input type=\"checkbox\" [disabled]=\"isScheduleLoader\" [checked]=\"isScheduleChecked\"\r\n                    (change)=\"schedule()\">\r\n                  <span class=\"slider round\"></span>\r\n                </label>\r\n              </span>\r\n            </div>\r\n            <div class=\"pull-right toggle-right\" *ngIf=\"activeWorkItems.length > 0\">\r\n              <button *ngIf=\"!processKillInProgress\" class=\"btn btn-primary kill-btn\" (click)=\"kill()\">\r\n                <em class=\"fas fa-stop-circle  stop-circle_icon\"></em>\r\n                Stop Process\r\n              </button>\r\n              <button *ngIf=\"processKillInProgress\" [disabled]=\"true\" class=\"btn btn-primary kill-btn\">\r\n                <em class=\"fas fa-spinner stop-circle_icon\"></em>Stopping...\r\n              </button>\r\n          </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <app-process-header [process]=\"process\" [triggeredBy]=\"triggeredBy\"></app-process-header>\r\n      <div *ngIf=\"metaData\">\r\n        <app-work-item-metadata [data]=\"table_col_processes\" [metadata]=\"metaData\" [showFilterMenu]=\"true\"\r\n          [ddSelected]=\"'ALL'\"></app-work-item-metadata>\r\n      </div>\r\n      \r\n      <mat-card (scroll)=\"onScroll($event)\" class=\"tab-wrapper mat-elevation-z0 tab-card-wrapper\"\r\n        *ngIf=\"process && !_workItemService.isViewRecordDetails\">\r\n\r\n        <mat-tab-group class=\"demo-tab-group\" (selectedTabChange)=\"onTabChange($event)\">\r\n          <mat-tab>\r\n            <ng-template mat-tab-label>\r\n              Active Work Items {{ (totalActiveWorkItems ? '(' + totalActiveWorkItems + ')' : '(0)') }}\r\n            </ng-template>\r\n            <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoadingActiveWorkItems\"></mat-spinner>\r\n            <app-active-work-items [data]=\"table_col_processes\" [workItems]=\"activeWorkItems\"\r\n              *ngIf=\"!isLoadingActiveWorkItems\"></app-active-work-items>\r\n          </mat-tab>\r\n          <mat-tab>\r\n            <ng-template mat-tab-label>\r\n              Completed Work Items &nbsp;\r\n              <span *ngIf=\"!totalCompletedWorkItemsLoader\">\r\n                {{ (totalCompletedWorkItems ? '(' + totalCompletedWorkItems + ')' : '(0)')}}</span>\r\n              <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"totalCompletedWorkItemsLoader\"></mat-spinner>\r\n            </ng-template>\r\n            <ng-container *ngIf=\"completedItems\">\r\n              <ng-container *ngFor=\"let keys of  completedItems\">\r\n                <div class=\"filter-wrapper margito\">\r\n                  <mat-icon class=\"completed-search\" (click)=\"filerkey(keyvalue,keys)\">search</mat-icon>\r\n                  <mat-form-field class=\"search-text\">\r\n                    <input matInput placeholder=\"Filter by {{keys}}\" (keyup.enter)=\"filerkey(keyvalue,keys)\"\r\n                      [(ngModel)]=\"keyvalue\" />\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n            <app-completed-work-items (sendScrollEventToProcessInit)=\"eventFromCompletedWorkItems($event)\"\r\n              [workItems]=\"completedWorkItems\" *ngIf=\"!isLoadingProcessedWorkItems\"></app-completed-work-items>\r\n            <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoadingProcessedWorkItems\"></mat-spinner>\r\n          </mat-tab>\r\n\r\n        \r\n        </mat-tab-group>\r\n      </mat-card>\r\n\r\n      <!-- view record details -->\r\n      <mat-card class=\"tab-wrapper mat-elevation-z0 tab-card-wrapper\" *ngIf=\"_workItemService.isViewRecordDetails\">\r\n        <mat-tab-group class=\"demo-tab-group\" (selectedTabChange)=\"onViewTabChange($event)\">\r\n          <mat-tab>\r\n            <ng-template mat-tab-label>\r\n              Records\r\n            </ng-template>\r\n            <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoadingActiveWorkItems\"></mat-spinner>\r\n            <app-view-record-details *ngIf=\"!isLoadingActiveWorkItems\"></app-view-record-details>\r\n          </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"resources\" [ngStyle]=\"{'width': table_col_resources ? '24%' : '3%'}\">\r\n      <app-resourcesandsupport *ngIf=\"showStakeholder\" (ResourceEvent)=\"receiveMessage($event)\" (ResourceShowEvent)=\"showMessage($event)\" [stakeholderInformation]=\"stakeholderInformation\">\r\n      </app-resourcesandsupport>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/processes/processes-init/processes-init.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidecontent {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  /* padding: 10px; */\n  padding-top: 12px;\n  padding-left: 8px; }\n\n.sidenav {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 190px;\n          flex: 0 0 190px;\n  background: #273043 !important;\n  border-right: 2px solid #373E4E !important; }\n\n.tab-wrapper {\n  margin-top: 8px;\n  padding: 0px !important;\n  background: #F9F9F9 !important; }\n\nmat-spinner {\n  margin: 5px; }\n\n.margito {\n  margin-top: -44px; }\n\n/deep/ .mat-tab-label-active {\n  color: #ff5a11;\n  background: none; }\n\n/deep/ .mat-tab-header {\n  background: #dfe3e5 !important; }\n\n/deep/ .mat-tab-body-wrapper {\n  padding: 0 15px !important;\n  margin: 0 !important;\n  background: #F9F9F9; }\n\n.sidecontent_bg {\n  background: #232939 !important; }\n\n.active_process {\n  color: #a7a7a8;\n  font-size: 12px;\n  font-weight: normal; }\n\n.processes {\n  padding-right: 6px !important;\n  float: left; }\n\n.resources {\n  padding-right: 10px;\n  float: right; }\n\n/deep/ .mat-tab-label {\n  font-weight: bold !important;\n  min-width: 25px !important;\n  padding: 5px; }\n\n/deep/ .mat-tab-label.mat-tab-label-active {\n  background: transparent !important; }\n\n/deep/.range-bar.relative {\n  height: 35px !important; }\n\n/deep/ .record-item-value {\n  padding-top: 7px !important; }\n\n.scheduleCls {\n  float: right;\n  color: #B7AFB3;\n  height: 25px;\n  position: absolute;\n  /* right: 17px; */\n  top: 25px; }\n\n.schedule-spinner {\n  display: inline !important; }\n\n.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #ff5a11; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 18px;\n  margin-top: 2px;\n  margin-right: 5px; }\n\n.switch input {\n  opacity: 0; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 4px;\n  top: 2px;\n  background-color: #ffff;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #ff5a11;\n  border: 1px solid; }\n\ninput:checked + .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: -8px;\n  top: 1px;\n  background-color: #ffff;\n  -webkit-transition: .4s;\n  transition: .4s;\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #ff5a11;\n          box-shadow: 0 0 1px #ff5a11; }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\ninput[type=checkbox] {\n  height: 9px !important; }\n\n.toggle-left {\n  padding: 0px 5px; }\n\n.toggle-right {\n  padding-left: 5px; }\n\n.kill-btn {\n  height: 25px;\n  padding: 4px 10px;\n  font-size: 12px;\n  border-radius: 2px !important; }\n\n.stop-circle_icon {\n  font-size: 14px !important;\n  padding-right: 5px; }\n\n/* .tab-wrapper.mat-elevation-z0.tab-card-wrapper {\r\n  padding: 0;\r\n  height: calc(100vh - 280px);\r\n  overflow: auto;\r\n }*/\n\n.dash-wrapper .tab-wrapper {\n  min-height: 0 !important; }\n\n/* .tab-wrapper.mat-elevation-z0.tab-card-wrapper.mat-card.ng-star-inserted{\r\n  height: calc(100vh - 220px);\r\n  overflow: auto;\r\n } */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/processes-init/processes-init.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProcessesInitComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmationDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ProcessesInitComponent = /** @class */ (function () {
    function ProcessesInitComponent(_workItemService, _configService, _activatedRoute, toastr, _authService, dialog) {
        this._workItemService = _workItemService;
        this._configService = _configService;
        this._activatedRoute = _activatedRoute;
        this.toastr = toastr;
        this._authService = _authService;
        this.dialog = dialog;
        this.navIsFixed = false;
        this.activeWorkItems = [];
        this.completedWorkItems = [];
        this.incompleteWorkItems = [];
        this.totalActiveWorkItems = 0;
        this.totalCompletedWorkItems = 0;
        this.totalIncompleteWorkItems = 0;
        this.completedItems = [];
        this._alive = true;
        this.isLoadingActiveWorkItems = false;
        this.isLoadingProcessedWorkItems = false;
        this.isLoadingInProcessedWorkItems = false;
        this.processKillInProgress = false;
        this.processedPaginationStart = 0;
        this.PROCESSED_PAGINATION_LIMIT = 10;
        this.isShowLoadMoreProcessedItems = false;
        this.isShowLoadMoreProcesseincompletedItems = false;
        this._isProcessedTabActive = false;
        this.totalCompletedWorkItemsLoader = false;
        this.isRecordTabActive = false;
        this.isViewTabActive = false;
        this.isScheduleChecked = false;
        this.isKillChecked = false;
        this.isScheduleLoader = false;
        this.isAdmin = false;
        this.table_col_processes = true;
        this.table_col_resources = true;
        this.showStakeholder = false;
        this.isAdmin = this._authService.isAdmin;
        // window.onscroll = () => {
        //   if (!this._isProcessedTabActive) {
        //     return false;
        //   }
        //   let status = "not reached";
        //   let windowHeight = "innerHeight" in window ? window.innerHeight
        //     : document.documentElement.offsetHeight;
        //   let body = document.body, html = document.documentElement;
        //   let docHeight = Math.max(body.scrollHeight,
        //     body.offsetHeight, html.clientHeight,
        //     html.scrollHeight, html.offsetHeight);
        //   let windowBottom = windowHeight + window.pageYOffset;
        //   if (Math.ceil(windowBottom) >= docHeight) {
        //     status = 'bottom reached';
        //     if (this.isShowLoadMoreProcessedItems) {
        //       this.getCompletedWorkItems();
        //     }
        //   }
        // };
    }
    ProcessesInitComponent.prototype.ngOnInit = function () {
        this._workItemService.isViewRecordDetails = false;
        this.getWorkItems();
        this.keyvalue = "";
        this.selectedmetakey = "";
        this.getWorkItemsByInterval();
        this.data = JSON.parse(localStorage.getItem("_u"));
        if (this.data.client == "ciox") {
            this.disableKillAndSchedule = false;
        }
        else {
            this.disableKillAndSchedule = true;
            this.getScheduleDetails();
        }
    };
    ProcessesInitComponent.prototype.getScheduleDetails = function () {
        var _this = this;
        this._workItemService.getSchedule(this.process.name).subscribe(function (data) {
            _this.isScheduleLoader = false;
            _this.isScheduleChecked = data['result']['status'];
            if (data['result']['message']) {
                _this.toastr.info(data['result']['message'], 'Information!');
            }
        }, function (error) {
            _this.toastr.error(error, 'Information!');
            _this.isScheduleLoader = false;
        });
    };
    ProcessesInitComponent.prototype.schedule = function () {
        var _this = this;
        this.isScheduleChecked = !this.isScheduleChecked;
        var obj = {
            is_scheduled: this.isScheduleChecked,
            process_name: this.process.name,
            user: this.data.firstname + " " + this.data.lastname
        };
        // this.isScheduleLoader = true;
        if (this.isScheduleChecked === true) {
            this.scheduleMessage = "Are you sure want to Switch On the Process ? ";
        }
        else {
            this.scheduleMessage = "Are you sure want to Switch Off the Process ? ";
        }
        var dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
            width: '350px',
            data: { name: this.scheduleMessage, title: 'Confirm' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._workItemService.updateSchedule(obj, _this.process["hostedOn"]).subscribe(function (data) {
                    // this.isScheduleLoader = false;
                    if (data['result']['status'] === 'Failed') {
                        _this.toastr.error(data['result']['message'], 'Information!');
                        _this.isScheduleChecked = !_this.isScheduleChecked;
                    }
                    else {
                        _this.toastr.success(data['result']['message'], 'Information!');
                    }
                }, function (error) {
                    _this.isScheduleChecked = !_this.isScheduleChecked;
                    _this.toastr.error(error, 'Information!');
                    _this.isScheduleLoader = false;
                });
            }
            else {
                _this.isScheduleChecked = !_this.isScheduleChecked;
            }
        });
    };
    ProcessesInitComponent.prototype.kill = function () {
        var _this = this;
        var item = this.activeWorkItems[0];
        var obj = {
            'job_id': item.job_id ? item.job_id : '',
            'stop_id': item.stop_id ? item.stop_id : '',
            'process_name': item.processName ? item.processName : ''
        };
        var dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
            width: '350px',
            data: { name: 'Are you sure to Kill the Process ?', title: 'Confirm' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.processKillInProgress = true;
                _this._workItemService.killTheProcess(obj).subscribe(function (data) {
                    _this.processKillInProgress = false;
                    if (data['result']['status'] === 'Failed') {
                        _this.toastr.error(data['result']['message'], 'Information!');
                    }
                    else {
                        _this.toastr.success(data['result']['message'], 'Information!');
                        _this.getActiveWorkItems().subscribe(function (data) {
                            _this.processKillInProgress = false;
                        }, function (error) {
                            _this.toastr.error(error, 'Information!');
                            _this.processKillInProgress = false;
                        });
                    }
                }, function (error) {
                    _this.processKillInProgress = false;
                    _this.toastr.error(error, 'Information!');
                });
            }
        });
    };
    ProcessesInitComponent.prototype.filerkey = function (value, selectedkey) {
        this.keyvalue = value;
        this.selectedmetakey = selectedkey;
        this._isProcessedTabActive = true;
        this.completedWorkItems = [];
        this.processedPaginationStart = 1;
        this.getCompletedWorkItems();
        this._alive = false;
    };
    ProcessesInitComponent.prototype.getWorkItems = function () {
        var _this = this;
        this._subHandler = this._workItemService.processesListObserver.subscribe(function (data) {
            _this.metaData = {
                botCount: '-',
                failed: '-',
                files: '-',
                Key: '-',
                processed: '-',
                processKey: '-',
                totalFailed: '-'
            };
            _this.totalActiveWorkItems = '';
            _this.totalCompletedWorkItems = '';
            _this.totalIncompleteWorkItems = '';
            if (data) {
                _this.process = data;
                // this.getScheduleDetails();
                _this.isLoadingActiveWorkItems = true;
                _this.completedWorkItems = [];
                _this.incompleteWorkItems = [];
                _this.processedPaginationStart = 1;
                _this.getCompletedWorkItems();
                _this.getMetadata();
                _this.getActiveWorkItems();
                _this.getStakeholderData();
            }
        });
    };
    ProcessesInitComponent.prototype.getMetadata = function () {
        var _this = this;
        this._workItemService.getWorkItemMetaDataByIdAndTime({
            key: this.process.name,
            aggType: 'ALL',
            tmStart: '',
            tmEnd: ''
        }).subscribe(function (data) {
            _this.metaData = data;
        }, function (error) {
        });
    };
    ProcessesInitComponent.prototype.getWorkItemsByInterval = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__["a" /* IntervalObservable */].create(this._configService.config.tmPollingInMs)
            .takeWhile(function () {
            return _this._alive;
        })
            .subscribe(function () {
            _this.getActiveWorkItems();
        });
    };
    ProcessesInitComponent.prototype.getStakeholderData = function () {
        var _this = this;
        this._workItemService.getStakeholderData(this.process.name).subscribe(function (data) {
            _this.stakeholderInformation = data["result"][0];
            _this.showStakeholder = true;
        });
    };
    ProcessesInitComponent.prototype.getActiveWorkItems = function () {
        var _this = this;
        var _httpObservable = this._workItemService.getActiveWorkItemsByProcessName(this.process.name);
        _httpObservable.subscribe(function (data) {
            _this.activeWorkItems = data.result["active_work_items"];
            _this.totalActiveWorkItems = _this.activeWorkItems ? _this.activeWorkItems.length : 0;
            _this.isLoadingActiveWorkItems = false;
            if (data.result["active_work_items"] && data.result["active_work_items"].length > 0) {
                if (data.result["active_work_items"][0].items) {
                    _this.triggeredBy = data.result["active_work_items"][0].triggeredBy;
                }
            }
        }, function (error) {
            _this.isLoadingActiveWorkItems = false;
        });
        return _httpObservable;
    };
    ProcessesInitComponent.prototype.getCompletedWorkItems = function () {
        var _this = this;
        this.totalCompletedWorkItemsLoader = true;
        if (this.isLoadingProcessedWorkItems) {
            return;
        }
        this.isLoadingProcessedWorkItems = true;
        this.completedItems = [];
        this._workItemService.getProcessedWorkItemsByProcessName({
            start: this.processedPaginationStart,
            limit: this.PROCESSED_PAGINATION_LIMIT,
            processName: this.process.name,
            keyvalue: this.keyvalue,
            selectedmetakey: this.selectedmetakey,
        }).subscribe(function (data) {
            _this.processedPaginationStart += (_this.PROCESSED_PAGINATION_LIMIT);
            _this.totalCompletedWorkItemsLoader = false;
            if (data.sourceTypes) {
                _this.completedItems = data.sourceTypes;
            }
            if (data["result"].length === 0) {
                _this.isShowLoadMoreProcessedItems = false;
            }
            for (var i = 0; i < data.result.length; i++) {
                _this.completedWorkItems.push(data.result[i]);
            }
            if (_this.completedWorkItems.length >= data.sourceTotal || data.result.length == 0) {
                _this.isShowLoadMoreProcessedItems = false;
            }
            else {
                _this.isShowLoadMoreProcessedItems = true;
            }
            _this.totalCompletedWorkItems = data.sourceTotal ? data.sourceTotal : data["result"].length;
            _this.isLoadingProcessedWorkItems = false;
            if (_this.completedWorkItems > _this.totalCompletedWorkItems) {
                _this.isLoadingProcessedWorkItems = false;
            }
            if (data.result.length > 0) {
                if (data.result[0].items) {
                    _this.triggeredBy = data.result[0].triggeredBy;
                }
            }
        }, function (error) {
            _this.isLoadingProcessedWorkItems = false;
        });
    };
    ProcessesInitComponent.prototype.getCompletdworkitemsBytabChange = function () {
        this.isLoadingProcessedWorkItems = false;
    };
    ProcessesInitComponent.prototype.getActiveWorkItemsBytabChange = function () {
        this.isLoadingActiveWorkItems = false;
    };
    ProcessesInitComponent.prototype.ngOnDestroy = function () {
        this._alive = false;
        if (this._subHandler) {
            this._subHandler.unsubscribe();
        }
    };
    ProcessesInitComponent.prototype.onTabChange = function (ev) {
        if (ev.index == 0) {
            this._alive = true;
            this.isLoadingActiveWorkItems = true;
            this.getActiveWorkItemsBytabChange();
            this.getWorkItemsByInterval();
            this._isProcessedTabActive = false;
        }
        else if (ev.index == 1) {
            this._isProcessedTabActive = true;
            this.getCompletdworkitemsBytabChange();
            this._alive = false;
        }
        else if (ev.index == 2) {
            this._isProcessedTabActive = true;
            this.incompleteWorkItems = [];
            this._alive = false;
        }
    };
    ProcessesInitComponent.prototype.onViewTabChange = function (ev) {
        if (ev.index === 0) {
            this.isRecordTabActive = true;
            this.getRecordDetails();
        }
        else if (ev.index === 1) {
            this.isViewTabActive = true;
            this.getViewDetails();
        }
    };
    ProcessesInitComponent.prototype.getRecordDetails = function () {
        this._workItemService.isViewRecordDetails = true;
    };
    ProcessesInitComponent.prototype.getViewDetails = function () {
        this._workItemService.isViewRecordDetails = true;
    };
    ProcessesInitComponent.prototype.goToActiveWorkItems = function () {
        this._workItemService.isViewRecordDetails = false;
    };
    ProcessesInitComponent.prototype.receiveMessage = function (event) {
        this.table_col_processes = false;
        this.table_col_resources = false;
        // this.table_col_processes = 'col-md-10';
        // this.table_col_resources = 'col-md-2';
        console.log('event', event);
    };
    ProcessesInitComponent.prototype.showMessage = function (event) {
        this.table_col_processes = true;
        this.table_col_resources = true;
        // this.table_col_processes = 'col-md-9';
        // this.table_col_resources = 'col-md-3';
    };
    ProcessesInitComponent.prototype.eventFromCompletedWorkItems = function (event) {
        if (!this._isProcessedTabActive) {
            return false;
        }
        if (this.isShowLoadMoreProcessedItems) {
            this.getCompletedWorkItems();
        }
    };
    ProcessesInitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-processes-init',
            template: __webpack_require__("../../../../../src/app/main/processes/processes-init/processes-init.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/processes-init/processes-init.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_config_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatDialog */]])
    ], ProcessesInitComponent);
    return ProcessesInitComponent;
}());

var DeleteConfirmationDialogComponent = /** @class */ (function () {
    function DeleteConfirmationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteConfirmationDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteConfirmationDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'delete-confirmation-dialog',
            template: __webpack_require__("../../../../../src/app/shared/shared-components/confirm-dialog/delete-confirmation-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDialogRef */], Object])
    ], DeleteConfirmationDialogComponent);
    return DeleteConfirmationDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/processes-list/processes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\r\n<div>\r\n  <div class=\"input-container\" *ngIf=\"allProcessesTemp && allProcessesTemp.length !== 0\">\r\n\r\n    <input class=\"input-field\" type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"searchString\" />\r\n    <img class=\"icon\" alt=\"search-image\" src=\"../../../../assets/images/search.png\" alt=\"\">\r\n    <span class=\"sidenav_filter_icon pointer\"><img (click)=\"openLobFilter()\" class=\"filter-icon hand\"\r\n        src=\"assets/images/filter1.png\" alt=\"filter-img\" style=\"position: relative\">\r\n      <ul class=\"filter-dropdown-menu\" *ngIf=\"showLobFilter\">\r\n        <li class=\"all-cases\">\r\n          <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"allcases\" [checked]=\"checkedAll\"\r\n            (click)=\"toggleselection('All')\">\r\n          <span class=\"hand process_name\" (click)=\"toggleselection('All')\">All</span></li>\r\n        <li *ngFor=\"let item of participants \">\r\n          <input class=\"input-checkbox hand\" type=\"checkbox\" value=\"{{item}}\"\r\n            [checked]=\"selectedStatus.indexOf(item)>-1\" (click)=\"toggleselection(item)\">\r\n          <span class=\"hand process_name\" (click)=\"toggleselection(item)\">{{item}}</span>\r\n        </li>\r\n      </ul>\r\n    </span>\r\n    <!-- show filters -->\r\n\r\n  </div>\r\n\r\n  <div class=\"sidenav_accordion\" *ngIf=\"true\">\r\n    <mat-accordion *ngFor=\"let process of allProcessesTemp | filterproc :searchString; first as isFirst; \">\r\n      <mat-expansion-panel [expanded]=\"isFirst || process.group.parent.display_name ==  parent_name ? true : false\" #example (click)=\"hideLobFilter()\">\r\n        <mat-expansion-panel-header [collapsedHeight]=\"customCollapsedHeight\" [expandedHeight]=\"customExpandedHeight\">\r\n          <mat-panel-title>\r\n            <span>\r\n              <mat-icon *ngIf=\"!example.expanded\">arrow_right</mat-icon>\r\n              <mat-icon *ngIf=\"example.expanded\">arrow_drop_down</mat-icon>\r\n            </span>\r\n            {{process.group.parent.display_name }}\r\n          </mat-panel-title>\r\n\r\n        </mat-expansion-panel-header>\r\n\r\n        <ul class=\"acc_ul\">\r\n          <li class=\"acc_li\" *ngFor=\"let eachchild of process.group.child | filterproc :searchString; first as isFirst;\"\r\n            [ngClass]=\"{'active-process' : _workItemService.activeProcess === eachchild.displayName}\"\r\n            [routerLink]=\"['/app','processes', eachchild.name]\" [routerLinkActive]=\"['active','remove-cursor-event']\"\r\n            (click)=\"changeSelectedProcess(eachchild.name); activeSelectedProcess(eachchild.displayName)\">\r\n            <span matTooltip=\"{{ eachchild.displayName }}\">{{eachchild.displayName  }}</span>\r\n          </li>\r\n        </ul>\r\n\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/processes/processes-list/processes-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head-text {\n  height: 25px;\n  line-height: 25px;\n  padding: 0 15px; }\n\nul {\n  padding: 0;\n  list-style: none; }\n\n::-webkit-input-placeholder {\n  color: #ffffff;\n  opacity: 0.38;\n  font-size: 14px; }\n\n:-ms-input-placeholder {\n  color: #ffffff;\n  opacity: 0.38;\n  font-size: 14px; }\n\n::-ms-input-placeholder {\n  color: #ffffff;\n  opacity: 0.38;\n  font-size: 14px; }\n\n::placeholder {\n  color: #ffffff;\n  opacity: 0.38;\n  font-size: 14px; }\n\n.input-container {\n  display: -ms-flexbox;\n  /* IE10 */\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  /* width: 82%; */\n  width: 78%;\n  margin-bottom: 15px;\n  padding-left: 10px;\n  position: relative;\n  padding-top: 8px; }\n\n.input-container .input-field {\n    width: 100%;\n    padding: 10px;\n    outline: none;\n    background: #202636;\n    border-radius: 4px 0 0 4px;\n    color: #ffff;\n    border: 1px solid #3a4663;\n    height: 26px;\n    border-right-style: hidden; }\n\n.input-container .icon {\n    padding: 5px;\n    background: #202636;\n    color: #ffff;\n    text-align: center;\n    font-size: 16px;\n    opacity: 0.8;\n    height: 26px;\n    border: 1px solid #3a4663;\n    border-left-style: hidden;\n    border-radius: 0 4px 4px 0; }\n\n.input-container .sidenav_filter_icon {\n    padding-left: 4px; }\n\n.input-container .sidenav_filter_icon .filter-icon {\n      position: absolute !important;\n      top: 13px !important;\n      left: 166px; }\n\n.input-container .sidenav_filter_icon .filter-dropdown-menu {\n      position: absolute;\n      top: 100%;\n      /* right: 10px; */\n      left: 170px !important;\n      z-index: 2;\n      min-width: 170px;\n      padding: 4px 10px;\n      margin: 2px 0 0;\n      font-size: 12px;\n      list-style: none;\n      background-color: #ffff;\n      background-clip: padding-box;\n      border: 1px solid #000000;\n      border-radius: 0px; }\n\n.input-container .sidenav_filter_icon .filter-dropdown-menu li {\n      margin-bottom: 8px; }\n\n.input-container .sidenav_filter_icon .filter-dropdown-menu li input[type=checkbox] {\n        cursor: pointer;\n        width: 18px;\n        height: 18px;\n        visibility: hidden;\n        margin-right: 5px;\n        text-align: center; }\n\n.input-container .sidenav_filter_icon .filter-dropdown-menu li input[type=checkbox]:after {\n        content: \" \";\n        background-color: #d8d8d8;\n        display: inline-block;\n        width: 18px;\n        height: 18px;\n        visibility: visible;\n        border: 1px solid #979797; }\n\n.input-container .sidenav_filter_icon .filter-dropdown-menu li input[type=checkbox]:checked:after {\n        content: \"\\2714\"; }\n\n.input-container .sidenav_filter_icon .filter-dropdown-menu li .process_name {\n        color: #4a4a4a;\n        position: relative;\n        bottom: -4px; }\n\n.input-container .sidenav_filter_icon .filter-dropdown-menu li .process-menu li {\n        width: 190px;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        height: 42px;\n        line-height: 42px;\n        cursor: pointer;\n        outline: none;\n        padding: 0 15px;\n        -webkit-transition: all .3s ease 0s;\n        transition: all .3s ease 0s;\n        font-size: 12px; }\n\n.sidenav_accordion {\n  padding: 0 10px 0 10px !important; }\n\n.sidenav_accordion .mat-expansion-panel {\n    background: #273043 !important;\n    color: #ffff;\n    margin-bottom: 24px;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.sidenav_accordion .mat-expansion-panel .mat-expansion-panel-header {\n      padding: 0 !important;\n      background: #273043;\n      border-left-color: #273043;\n      border-right-color: #273043; }\n\n.sidenav_accordion .mat-expansion-panel .mat-expansion-panel-header-title {\n      border-bottom: 1px solid #373E4E !important;\n      border-top: 1px solid #373E4E !important;\n      padding: 6px 0 !important;\n      color: #ffff !important;\n      margin-right: 0 !important; }\n\n.sidenav_accordion .mat-expansion-panel .mat-expansion-panel-header-description {\n      margin-right: 0 !important; }\n\n.sidenav_accordion .mat-expansion-panel .mat-expansion-panel-content {\n      background: #273043 !important; }\n\n.sidenav_accordion .mat-expansion-panel .acc_ul {\n      padding: 10px 0 0 0; }\n\n.sidenav_accordion .mat-expansion-panel .acc_ul .active-process {\n        background: #424f6f; }\n\n.sidenav_accordion .mat-expansion-panel .acc_ul .acc_li {\n        padding: 8px 0 10px 10px !important;\n        margin-left: 20px;\n        cursor: pointer;\n        font-size: 14px;\n        opacity: 0.8;\n        width: 165px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n\n.sidenav_accordion .mat-expansion-panel .acc_ul .acc_li:focus {\n        outline: none; }\n\n/deep/.sidenav_accordion .mat-expansion-panel-content > .mat-expansion-panel-body {\n  padding: 0 !important;\n  color: #ffff !important;\n  background: #273043 !important; }\n\n/deep/.sidenav_accordion .mat-expansion-panel-content.mat-expanded {\n  background: #273043 !important;\n  min-height: 0 !important; }\n\n.sidenav_accordion .mat-expansion-panel .acc_ul .acc_li:nth-child(1) {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/processes-list/processes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_admin_admin_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProcessesListComponent = /** @class */ (function () {
    function ProcessesListComponent(_workItemService, _activeRouter, _adminService, _router, _eref) {
        this._workItemService = _workItemService;
        this._activeRouter = _activeRouter;
        this._adminService = _adminService;
        this._router = _router;
        this._eref = _eref;
        this.toppingList = ['CDAI', 'FINANCE', 'CRI', 'HR', 'Not Associated'];
        this.showLobFilter = false;
        this.showLegendBox = false;
        this.checkedAll = false;
        this.selectedStatus = [];
        this.selectedFilter = [];
        this.participants = [];
        this.customCollapsedHeight = '22px';
        this.customExpandedHeight = '22px';
        this.processes = [];
        this.totalProcesses = 0;
        this.showfilterBox = false;
        // this.getWorkItemsProcess();
        this.getWorkItemsLobsProcesses();
        this.checkProcessIdInRoute();
        this.leftMenuHeight = window.innerHeight - 45;
    }
    ProcessesListComponent.prototype.BodyClick = function () {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showLobFilter = false;
        }
    };
    ProcessesListComponent.prototype.checkProcessIdInRoute = function () {
        var _this = this;
        if (this._subHandle) {
            this._subHandle.unsubscribe();
        }
        this._subHandle = this._activeRouter.params.subscribe(function (params) {
            console.log('params.processId', params.processId);
            _this.changeSelectedProcess(params.processId);
        });
    };
    ProcessesListComponent.prototype.ngOnInit = function () {
        console.log('', this.allProcesses);
        // console.log('qqqqq', this.allProcesses[0].group.parent.display_name);
        // this.isActiveProcess = this.allProcesses.length > 0 ? this.allProcesses[0].group.child[0].displayName : '';
        // console.log('this.isActiveProcess', this.isActiveProcess);
    };
    ProcessesListComponent.prototype.closeOtherPanels = function (openPanel) {
        this.panels.forEach(function (panel) {
            if (panel !== openPanel) {
                panel.close();
            }
        });
    };
    ProcessesListComponent.prototype.ngOnChanges = function () {
        this.updateSideContentView();
    };
    ProcessesListComponent.prototype.getWorkItemsLobsProcesses = function () {
        var _this = this;
        this.isLoading = true;
        // this.processes = [];
        this.allProcesses = [];
        this.participants = [];
        this._adminService.getLOBProcessList().subscribe(function (data) {
            console.log('data', data);
            _this._workItemService.activeProcess = data[0].group.child[0]['displayName'];
            _this.allProcesses = data;
            _this.allProcessesTemp = _this.allProcesses;
            // this.totalProcesses = this.processes.length;
            _this.allProcesses.forEach(function (eachtemp, ind) {
                console.log(eachtemp['group']['parent']['display_name']);
                _this.participants.push(_this.allProcesses[ind]['group']['parent']['display_name']);
            });
            console.log('this.participants', _this.participants);
            _this.isLoading = false;
            _this.updateSideContentView();
        }, function (error) {
            _this.errorMessage = error.error;
            _this.isLoading = false;
        });
    };
    ProcessesListComponent.prototype.getWorkItemsProcess = function () {
        var _this = this;
        this.isLoading = true;
        this.processes = [];
        this._adminService.operationgetProcessList().subscribe(function (data) {
            _this.processes = data.result;
            _this.totalProcesses = _this.processes.length;
            _this.isLoading = false;
            _this.updateSideContentView();
        }, function (error) {
            _this.errorMessage = error.error;
            _this.isLoading = false;
        });
        // public getWorkItems() {
        //   this.isLoading = true;
        //   this.processes = [];
        //   this._workItemService.getUserProcesses()
        //     .subscribe((data: { result: Array<ProcessItem>, total: number }) => {
        //       this.processes = data.result;
        //       this.totalProcesses = data.total;
        //       this.isLoading = false;
        //       this.updateSideContentView();
        //     }, (error) => {
        //       this.isLoading = false;
        //       this.errorMessage = error.error;
        //     });
    };
    // private updateSideContentView() {
    //   if (!this.processes.length) {
    //     return;
    //   }
    //   let process: ProcessItem;
    //   for (let i = 0; i < this.processes.length; i++) {
    //     if (this.processes[i].name == this._selectedProcessId) {
    //       process = this.processes[i];
    //       break;
    //     }
    //   }
    //   if (!process && this.processes.length) {
    //     this._router.navigate(['app', 'processes', this.processes[0].name]);
    //     return;
    //   }
    //   this._workItemService.processesListSubject.next(process);
    // }
    ProcessesListComponent.prototype.updateSideContentView = function () {
        if (!this.allProcesses.length) {
            return;
        }
        var process;
        for (var k = 0; k < this.allProcesses.length; k++) {
            for (var i = 0; i < this.allProcesses[k].group.child.length; i++) {
                if (this.allProcesses[k].group.child[i].name === this._selectedProcessId) {
                    process = this.allProcesses[k].group.child[i];
                    this.parent_name = this.allProcesses[k].group.parent.display_name;
                    console.log('this.allProcesses[k]', this.allProcesses[k], k);
                    this._workItemService.activeProcess = process['displayName'];
                    break;
                }
            }
        }
        if (!process && this.allProcesses[0].group.child.length) {
            this._router.navigate(['app', 'processes', this.allProcesses[0].group.child[0].name]);
            return;
        }
        this._workItemService.processesListSubject.next(process);
    };
    ProcessesListComponent.prototype.ngOnDestroy = function () {
        console.log(this._subHandle, "1111");
        console.log(this._subRouteHandle, "2222");
        if (this._subHandle) {
            this._subHandle.unsubscribe();
        }
        if (this._subRouteHandle) {
            this._subRouteHandle.unsubscribe();
        }
    };
    ProcessesListComponent.prototype.activeSelectedProcess = function (processDisplayName) {
        console.log('processDisplayName', processDisplayName);
        this._workItemService.activeProcess = processDisplayName;
    };
    ProcessesListComponent.prototype.hideLobFilter = function () {
        this.showLobFilter = false;
    };
    ProcessesListComponent.prototype.changeSelectedProcess = function (processKey) {
        console.log(processKey);
        this._selectedProcessId = processKey;
        this.updateSideContentView();
    };
    ProcessesListComponent.prototype.setLobFilter = function (filterLOB) {
        var _this = this;
        console.log('filterLOB', filterLOB);
        this.allProcessesTemp = [];
        this.filterLOB.forEach(function (eachLob, index) {
            if (eachLob === 'ALL') {
                _this.allProcessesTemp = _this.allProcesses;
                return;
            }
            else {
                _this.allProcesses.forEach(function (eachtemp, ind) {
                    console.log(_this.allProcesses[ind]['group']['parent']['display_name']);
                    if (eachLob === _this.allProcesses[ind]['group']['parent']['display_name']) {
                        _this.allProcessesTemp.push(_this.allProcesses[ind]);
                    }
                });
            }
        });
    };
    ProcessesListComponent.prototype.openLobFilter = function () {
        this.showLobFilter = !this.showLobFilter;
    };
    ProcessesListComponent.prototype.toggleselection = function (x) {
        if (x === 'All') {
            this.checkedAll = !this.checkedAll;
            if (this.checkedAll) {
                this.selectedStatus = [];
                for (var i = 0; i < this.participants.length; i++) {
                    this.selectedStatus.push(this.participants[i]);
                }
            }
            else {
                this.selectedStatus = [];
            }
        }
        else {
            var index = this.selectedStatus.indexOf(x);
            if (index > -1) {
                this.selectedStatus.splice(index, 1);
            }
            else {
                this.selectedStatus.push(x);
            }
            if (this.participants.length === this.selectedStatus.length) {
                this.checkedAll = true;
            }
            else {
                this.checkedAll = false;
            }
        }
        if (this.selectedStatus.length === 0) {
            // this.participants = this.participants;
            this.allProcessesTemp = this.allProcesses;
        }
        this.reRuildLeftMenu();
    };
    ProcessesListComponent.prototype.reRuildLeftMenu = function () {
        var _this = this;
        this.allProcessesTemp = [];
        if (this.selectedStatus.length === 0) {
            this.allProcessesTemp = this.allProcesses;
        }
        else {
            this.selectedStatus.forEach(function (eachLob, index) {
                _this.allProcesses.forEach(function (eachtemp, ind) {
                    if (eachLob === _this.allProcesses[ind]['group']['parent']['display_name']) {
                        _this.allProcessesTemp.push(_this.allProcesses[ind]);
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatExpansionPanel */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], ProcessesListComponent.prototype, "panels", void 0);
    ProcessesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            host: {
                '(document:click)': 'BodyClick($event)'
            },
            selector: 'app-processes-list',
            template: __webpack_require__("../../../../../src/app/main/processes/processes-list/processes-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/processes-list/processes-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_services_admin_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ProcessesListComponent);
    return ProcessesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/processes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessesModule", function() { return ProcessesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__processes_init_processes_init_component__ = __webpack_require__("../../../../../src/app/main/processes/processes-init/processes-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__processes_list_processes_list_component__ = __webpack_require__("../../../../../src/app/main/processes/processes-list/processes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__active_work_items_active_work_items_component__ = __webpack_require__("../../../../../src/app/main/processes/active-work-items/active-work-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__completed_work_items_completed_work_items_component__ = __webpack_require__("../../../../../src/app/main/processes/completed-work-items/completed-work-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proccesses_routes__ = __webpack_require__("../../../../../src/app/main/processes/proccesses.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_modules_shared_modules_module__ = __webpack_require__("../../../../../src/app/shared/shared-modules/shared-modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_components_shared_components_module__ = __webpack_require__("../../../../../src/app/shared/shared-components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__process_header_process_header_component__ = __webpack_require__("../../../../../src/app/main/processes/process-header/process-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__incompleted_work_items_incompleted_work_items_component__ = __webpack_require__("../../../../../src/app/main/processes/incompleted-work-items/incompleted-work-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_log_details_view_log_details_component__ = __webpack_require__("../../../../../src/app/main/processes/view-log-details/view-log-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_record_details_view_record_details_component__ = __webpack_require__("../../../../../src/app/main/processes/view-record-details/view-record-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resourcesandsupport_resourcesandsupport_component__ = __webpack_require__("../../../../../src/app/main/processes/resourcesandsupport/resourcesandsupport.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















 //importing the module

 //importing the module
var ProcessesModule = /** @class */ (function () {
    function ProcessesModule() {
    }
    ProcessesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_modules_shared_modules_module__["a" /* SharedModulesModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_components_shared_components_module__["a" /* SharedComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__proccesses_routes__["a" /* routeRoot */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__["a" /* NgxPaginationModule */], __WEBPACK_IMPORTED_MODULE_16_ng2_search_filter__["a" /* Ng2SearchPipeModule */], __WEBPACK_IMPORTED_MODULE_17_ng2_order_pipe__["Ng2OrderModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__processes_init_processes_init_component__["b" /* ProcessesInitComponent */], __WEBPACK_IMPORTED_MODULE_4__processes_list_processes_list_component__["a" /* ProcessesListComponent */], __WEBPACK_IMPORTED_MODULE_3__processes_init_processes_init_component__["a" /* DeleteConfirmationDialogComponent */], __WEBPACK_IMPORTED_MODULE_5__active_work_items_active_work_items_component__["a" /* ActiveWorkItemsComponent */], __WEBPACK_IMPORTED_MODULE_6__completed_work_items_completed_work_items_component__["a" /* CompletedWorkItemsComponent */], __WEBPACK_IMPORTED_MODULE_11__process_header_process_header_component__["a" /* ProcessHeaderComponent */], __WEBPACK_IMPORTED_MODULE_12__incompleted_work_items_incompleted_work_items_component__["a" /* IncompletedWorkItemsComponent */], __WEBPACK_IMPORTED_MODULE_13__view_log_details_view_log_details_component__["a" /* ViewLogDetailsComponent */], __WEBPACK_IMPORTED_MODULE_14__view_record_details_view_record_details_component__["a" /* ViewRecordDetailsComponent */], __WEBPACK_IMPORTED_MODULE_18__resourcesandsupport_resourcesandsupport_component__["a" /* ResourcesandsupportComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__processes_init_processes_init_component__["a" /* DeleteConfirmationDialogComponent */]],
        })
    ], ProcessesModule);
    return ProcessesModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/resourcesandsupport/resourcesandsupport.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card-data\">\r\n\r\n  <div class=\"row resource-header\">\r\n    <p class=\"resources-support\" [ngStyle]=\"{'display': this.arrow_back ? 'none':'inline'}\">Resources and Support</p>\r\n    <span *ngIf=\"arrow_forward\"><em class=\"material-icons arrow-forward\" (click)=\"hideResource($event)\">\r\n        arrow_forward_ios\r\n      </em></span>\r\n    <span *ngIf=\"arrow_back\"><em class=\"material-icons arrow-back\" (click)=\"showResource($event)\">\r\n        arrow_back_ios\r\n      </em></span>\r\n  </div>\r\n  <div [ngClass]=\"this.arrow_back ? 'resource-comp':''\">\r\n    <div class=\"row info\">\r\n      <p class=\"about\">About</p>\r\n      <p class=\"automateinfo\" *ngIf=\"stakeholderInformation.onboarding == null\">No Information found</p>\r\n      <p class=\"automate\" *ngIf=\"stakeholderInformation.onboarding != null\" innerHTML={{stakeholderInformation.onboarding}}>{{stakeholderInformation.onboarding}}</p>\r\n    </div>\r\n    <div class=\"row stakeholder-data\">\r\n      <p class=\"stakeholder-header\">Stakeholders ({{ getStakeholderCount(stakeholderInformation.stakeholder_information)}})</p>\r\n      <div class=\"stake-holders\" *ngIf=\"stakeholderInformation.stakeholder_information\">\r\n        <ng-container *ngFor=\"let item of stakeholderInformation.stakeholder_information | keyvalue\">\r\n            <p class=\"business\">{{item.key}} ({{item.val.length}})</p>\r\n            <mat-card-header class=\"mat-card-header\" *ngFor=\"let user of item.val; let id=index\">\r\n              <mat-card-title class=\"mat-card-title\">{{user.name}}</mat-card-title>\r\n              <mat-card-subtitle class=\"subtitle\">{{user.phonenum}} </mat-card-subtitle>\r\n              <mat-card-subtitle class=\"subtitle\">{{user.email}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n        </ng-container>\r\n      </div>\r\n      <div class=\"stake-holders no-holder\" *ngIf=\"!stakeholderInformation.stakeholder_information\">\r\n            <img src=\"../../../../assets/images/no-stakeholder.png\" alt=\"\">\r\n            <p>No Stakeholders found</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row data\">\r\n      <p class=\"general-info\">General Information</p>\r\n      <div class=\"general\">\r\n       <p> <strong>LOB:</strong> {{stakeholderInformation.general_information.lob}}</p>\r\n       <p><strong>Operations Start Date:</strong> {{stakeholderInformation.general_information.operations_start_date ? stakeholderInformation.general_information.operations_start_date : \"-\" }}</p>\r\n       <p *ngIf=\"false\">Mode: {{stakeholderInformation.general_information.Mode}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/main/processes/resourcesandsupport/resourcesandsupport.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  margin: 0; }\n\n.mat-card-data {\n  padding: 0 0 0 15px;\n  margin: 54px 0 0 0 !important;\n  overflow: hidden; }\n\n.mat-card-data .resource-header {\n    height: 35px;\n    background: #dfe3e5;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    margin: 0 0 0 -15px; }\n\n.mat-card-data .resource-header .resources-support {\n      color: #646464;\n      font-weight: bold;\n      font-size: 14px;\n      margin: 10px 0 9px 10px; }\n\n.mat-card-data .resource-header .arrow-forward {\n      font-size: 11px;\n      cursor: pointer;\n      background-color: #BFC3C5;\n      padding: 6px;\n      border-radius: 10px;\n      position: absolute;\n      right: 5px;\n      top: 6px; }\n\n.mat-card-data .resource-header .arrow-back {\n      margin: 4px 4px;\n      font-size: 11px;\n      cursor: pointer;\n      background-color: #BFC3C5;\n      padding: 6px 4px 6px 8px;\n      border-radius: 10px; }\n\n.mat-card-data .info .about {\n    font-size: 12px;\n    font-weight: bold;\n    margin-top: 14px;\n    margin-bottom: 0; }\n\n.mat-card-data .info .automate {\n    font-size: 11px;\n    padding: 5px 18px 30px 10px;\n    background: #F2F2F2;\n    opacity: 0.8;\n    color: #646464;\n    width: 95%;\n    margin-top: 9px;\n    height: calc(100vh - 540px);\n    overflow: auto; }\n\n.mat-card-data .info .automateinfo {\n    font-size: 14px;\n    background: #F2F2F2;\n    opacity: 0.8;\n    color: #181616;\n    width: 95%;\n    margin-top: 9px !important;\n    min-height: 80px;\n    text-align: center;\n    padding-top: 28px; }\n\n.mat-card-data .stakeholder-data .stakeholder-header {\n    color: #646464;\n    font-size: 12px;\n    font-weight: 600;\n    margin-bottom: 0 !important;\n    margin-top: 20px; }\n\n.mat-card-data .stakeholder-data .stake-holders {\n    width: 95%;\n    padding-left: 10px;\n    margin-top: 5px;\n    height: calc(100vh - 469px);\n    overflow: auto;\n    background: #F2F2F2; }\n\n.mat-card-data .stakeholder-data .stake-holders .business {\n      padding: 10px 0 0;\n      font-size: 11px;\n      font-weight: 600; }\n\n.mat-card-data .stakeholder-data .stake-holders .mat-card-header {\n      font-size: 12px; }\n\n.mat-card-data .stakeholder-data .stake-holders .mat-card-header .mat-card-title {\n        font-size: 12px; }\n\n.mat-card-data .stakeholder-data .stake-holders .mat-card-header .example-header-image {\n        background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n        background-size: cover;\n        width: 38px; }\n\n.mat-card-data .stakeholder-data .stake-holders .mat-card-header .mat-card-subtitle:not(:first-child) {\n      margin-top: -11px !important;\n      font-size: 11px !important;\n      color: #646464; }\n\n.mat-card-data .stakeholder-data .no-holder {\n    text-align: center;\n    padding-top: 20%; }\n\n.mat-card-data .data .general-info {\n    font-size: 12px !important;\n    font-weight: 700 !important;\n    margin-top: 22px;\n    margin-bottom: 0;\n    color: #646464; }\n\n.mat-card-data .data .general {\n    color: #646464;\n    font-size: 12px;\n    padding: 10px 0 10px 10px;\n    background: #F2F2F2;\n    width: 92%;\n    margin: 6px 6px;\n    min-height: 95px; }\n\n.mat-card-data .resource-comp {\n    z-index: 1000;\n    background: #8B8E95;\n    margin-left: -15px;\n    opacity: 0.9;\n    overflow: hidden; }\n\n.mat-card-data .resource-comp .info .about {\n      margin: 0; }\n\n.mat-card-data .resource-comp .info .automate {\n      z-index: 1000;\n      background: #8B8E95;\n      overflow: hidden;\n      opacity: 1.0;\n      color: #181616;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 10px; }\n\n.mat-card-data .resource-comp .info .automateinfo {\n      font-size: 14px;\n      background: #8B8E95;\n      opacity: 0.8;\n      color: #181616;\n      width: 95%;\n      min-height: 80px;\n      padding: 3px 0 0 11px; }\n\n.mat-card-data .resource-comp .stake-holders {\n      z-index: 1000;\n      background: #8B8E95;\n      opacity: 0.9;\n      overflow: hidden;\n      height: calc(120vh - 950px); }\n\n.mat-card-data .resource-comp .stake-holders .example-header-image {\n        z-index: 1000;\n        background: #8B8E95;\n        opacity: 0.9;\n        overflow: hidden;\n        background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n        background-size: cover;\n        width: 38px;\n        margin: 0 0 0 7px; }\n\n.mat-card-data .resource-comp .stake-holders .mat-card-header .mat-card-title {\n        z-index: 1000;\n        background: #8B8E95;\n        opacity: 0.9;\n        overflow: hidden;\n        font-size: 12px; }\n\n.mat-card-data .resource-comp .no-holder {\n      margin-top: 101px !important;\n      text-align: center;\n      padding-top: 20%; }\n\n.mat-card-data .resource-comp .data .general-info,\n    .mat-card-data .resource-comp .data .general {\n      margin-left: 14px;\n      z-index: 1000;\n      background: #8B8E95;\n      opacity: 0.9;\n      overflow: hidden;\n      min-height: 41px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/resourcesandsupport/resourcesandsupport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesandsupportComponent; });
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

var ResourcesandsupportComponent = /** @class */ (function () {
    function ResourcesandsupportComponent() {
        this.arrow_back = false;
        this.arrow_forward = true;
        this.ResourceEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ResourceShowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ResourcesandsupportComponent.prototype.ngOnInit = function () { };
    ResourcesandsupportComponent.prototype.getStakeholderCount = function (user) {
        if (user === undefined) {
            return 0;
        }
        else {
            return user["Business Owners"].length + user["Process Owners"].length + user["Technical Support"].length;
        }
    };
    ResourcesandsupportComponent.prototype.hideResource = function (event) {
        this.arrow_back = true;
        this.arrow_forward = false;
        this.ResourceEvent.emit(event);
    };
    ResourcesandsupportComponent.prototype.showResource = function (event) {
        this.arrow_back = false;
        this.arrow_forward = true;
        this.ResourceShowEvent.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ResourcesandsupportComponent.prototype, "stakeholderInformation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ResourcesandsupportComponent.prototype, "ResourceEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ResourcesandsupportComponent.prototype, "ResourceShowEvent", void 0);
    ResourcesandsupportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resourcesandsupport',
            template: __webpack_require__("../../../../../src/app/main/processes/resourcesandsupport/resourcesandsupport.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/resourcesandsupport/resourcesandsupport.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesandsupportComponent);
    return ResourcesandsupportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/view-log-details/view-log-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"log_list\">\r\n    <span class=\"logs\">Logs: \r\n      <span class=\"pointer\">\r\n          <span class=\"menu_item_value\">{{selected}}</span>\r\n          <i [matMenuTriggerFor]=\"menu\" class=\"fa fa-angle-down pointer icon_custom\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </span>\r\n     \r\n\r\n         <mat-menu #menu=\"matMenu\">\r\n        <ng-container *ngFor=\"let opt of orgUnits\">\r\n        <button class=\"menu_width pointer\" mat-menu-item (click)=\"lobChanged(opt)\">{{opt}}</button>\r\n      </ng-container>\r\n      </mat-menu>\r\n      \r\n    <table   class=\"table table-responsive table-hover record-table\">\r\n        <thead class=\"table_header\">\r\n          <tr>\r\n            <td class=\"time_td_width\">Time</td>\r\n            <td class=\"time_sec_td_width\">Time Taken(secs)</td>\r\n            <td>Message</td>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"table_body\">\r\n          <tr>\r\n            <td >today 3:40P</td>\r\n            <td class=\"data\">5</td>\r\n            <td class=\"data1\">5</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/main/processes/view-log-details/view-log-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".log_list {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n  .log_list .logs {\n    float: right;\n    color: #989699;\n    padding: 15px 0;\n    font-size: 12px; }\n  .log_list .icon_custom {\n    color: #0000;\n    font-size: 16px;\n    font-weight: bold; }\n  .log_list .table_header {\n    background-color: #e7eff7;\n    font-size: 12px;\n    color: #5f6061; }\n  .log_list .table_header .time_sec_td_width {\n      width: 17%; }\n  .log_list .table_header .time_td_width {\n      width: 12%; }\n  .log_list .table_body {\n    background-color: #ecf1f7;\n    font-size: 12px;\n    color: #5f6061; }\n  .log_list .table_body .data {\n      padding-left: 42px; }\n  .log_list .table_body .data1 {\n      padding-left: 27px; }\n  .log_list .record-table {\n    border: 1px solid #cccccd; }\n  .log_list .table > thead > tr > th {\n    border-bottom: 1px solid #ddd !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/view-log-details/view-log-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLogDetailsComponent; });
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

var ViewLogDetailsComponent = /** @class */ (function () {
    function ViewLogDetailsComponent() {
        this.selected = "All";
    }
    ViewLogDetailsComponent.prototype.ngOnInit = function () {
        this.orgUnits = ['All', 'CDAI', 'CRI', 'Financial', 'HR'];
    };
    ViewLogDetailsComponent.prototype.lobChanged = function (opt) {
        this.selected = opt;
    };
    ViewLogDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-log-details',
            template: __webpack_require__("../../../../../src/app/main/processes/view-log-details/view-log-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/view-log-details/view-log-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewLogDetailsComponent);
    return ViewLogDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/processes/view-record-details/view-record-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"record_list\">\r\n  <span class=\"records\">Records:\r\n    <span [matMenuTriggerFor]=\"menu\" class=\"pointer\">\r\n      <span  class=\"menu_item_value\">{{this._workItemService.workItemDetailsFilter}}</span>\r\n      <i class=\"fa fa-angle-down pointer icon_custom\" aria-hidden=\"true\"></i>\r\n    </span>\r\n  </span>\r\n\r\n  <mat-menu #menu=\"matMenu\">\r\n    <ng-container *ngFor=\"let opt of recordsFilter\">\r\n      <button class=\"menu_width pointer\" mat-menu-item (click)=\"filterChanged(opt)\" \r\n      [ngClass]=\"{'failed': (opt == 'Failed - Attention Needed') }\" >{{opt}}</button>\r\n    </ng-container>\r\n  </mat-menu>\r\n  <div class=\"table-wrapper\">\r\n  <table  class=\"table table-responsive table-hover record-table \">\r\n    <thead class=\"table_header\">\r\n      <tr class=\"thead_height\">\r\n        <th class=\"name\">Record Id</th>\r\n        <th class=\"status\">Status</th>\r\n        <th class=\"time-taken\">Time Taken(secs)</th>\r\n        <th>Messages</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody  class=\"table_body\" *ngIf=\"_workItemService.workItemDetails && _workItemService.workItemDetails.recordDetails\">\r\n        <tr *ngFor=\"let record of recordTemp | paginate: { itemsPerPage: itemsPerPage, currentPage: page , totalItems: total}; let ind=index;\">\r\n          <td class=\"name\">\r\n              <div  class=\"td_data_hidden\" matTooltip= {{record.recordId}}>{{record.recordId}} </div>\r\n             </td>\r\n        <td>\r\n            <div class=\"tbody_status\">\r\n              <img src= \"{{(record && record.status.toUpperCase()) == 'FAILED' ? '../../../../assets/images/high-priority.png' : (record && record.status.toUpperCase()) == 'COMPLETED' ? '../../../../assets/images/checkmark.png' : (record && record.status.toUpperCase()) == 'RUNNING' ? '../../../../assets/images/loader.gif' : '' }}\" [ngClass]= \"{ 'loaderGif': (record && record.status.toUpperCase()) == 'RUNNING' }\" alt=\"loader-image\"/>\r\n            </div>\r\n        </td>\r\n        <td class=\"data\"> {{ record.processingTime}}</td>\r\n        <td class=\"message\" [ngClass]=\"{'msg_err': (record.status == 'FAILED') }\">{{ record.message}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"recordTemp && recordTemp.length === 0\">\r\n          <td colspan=\"4\" class=\"text-center\"> There is no record to display</td>\r\n        </tr>\r\n      <tr *ngIf=\"recordTemp && recordTemp.length > 0\">\r\n          <th colspan='4' class=\"pagination-sec text-center\">\r\n            <pagination-controls (pageChange)=\"pageChange($event)\"></pagination-controls>\r\n          </th>\r\n        </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/processes/view-record-details/view-record-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".record_list {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n  .record_list .records {\n    float: right;\n    color: #989699;\n    padding: 8px 0;\n    font-size: 12px; }\n  .record_list .menu_item_value {\n    font-size: 12px;\n    font-weight: bold;\n    color: #454446; }\n  .record_list .icon_custom {\n    color: #0000;\n    font-size: 16px;\n    font-weight: bold; }\n  .record_list .table-wrapper {\n    height: 350px;\n    overflow: auto;\n    width: 100%; }\n  .record_list .table-wrapper .record-table {\n      border: 1px solid #cccccd; }\n  .record_list .table-wrapper .record-table .table_header {\n        background-color: #e6eef7;\n        color: #4a4a4a !important;\n        font-size: 12px !important;\n        border-bottom: solid 1px #cccccd !important; }\n  .record_list .table-wrapper .record-table .table_header .thead_height > th {\n          height: 41px !important;\n          vertical-align: middle !important;\n          font-weight: normal !important; }\n  .record_list .table-wrapper .record-table .table_header .status {\n          width: 13%; }\n  .record_list .table-wrapper .record-table .table_header .time-taken {\n          width: 18%; }\n  .record_list .table-wrapper .record-table .table_body {\n        background-color: #ECF1F7;\n        font-size: 12px;\n        color: #4a4a4a; }\n  .record_list .table-wrapper .record-table .table_body .td_data_hidden {\n          width: 255px;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap; }\n  .record_list .table-wrapper .record-table .table_body .data {\n          padding-left: 42px; }\n  .record_list .table-wrapper .record-table .table_body .tbody_status {\n          padding-left: 9px; }\n  .record_list .table-wrapper .record-table .table_body .msg_err {\n          color: #d0021b; }\n  .record_list .table-wrapper .record-table .table_body .loaderGif {\n          width: 17px;\n          height: 17px;\n          background: transparent; }\n  .record_list .table-wrapper .record-table .name {\n        width: 30%; }\n  .record_list .table > thead > tr > th {\n    border-bottom: 1px solid #ddd !important; }\n  /deep/.mat-tab-body.mat-tab-body-active {\n  overflow: initial !important; }\n  .name {\n  width: 30%; }\n  .failed {\n  color: #d0021b; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/processes/view-record-details/view-record-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRecordDetailsComponent; });
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


var ViewRecordDetailsComponent = /** @class */ (function () {
    function ViewRecordDetailsComponent(_workItemService) {
        this._workItemService = _workItemService;
        // public selected: string = 'All';
        this.recordsFilter = [];
        this.page = 1;
        this.itemsPerPage = 10;
        this.total = 0;
        this.recordTemp = [];
    }
    ViewRecordDetailsComponent.prototype.ngOnInit = function () {
        this.recordsFilter = ['All', 'Failed - Attention Needed', 'Other Failures'];
        this.total = this.recordTemp ? this.recordTemp.length : 0;
        this.filterChanged(this._workItemService.workItemDetailsFilter);
    };
    ViewRecordDetailsComponent.prototype.filterrecords = function (issues) {
        var _this = this;
        if (issues === 'All') {
            this.recordTemp = this._workItemService.workItemDetails.recordDetails;
        }
        else {
            this.recordTemp = [];
            this._workItemService.workItemDetails.recordDetails.forEach(function (eachItem) {
                if (eachItem.errorType === issues) {
                    _this.recordTemp.push(eachItem);
                }
            });
            this.total = this.recordTemp ? this.recordTemp.length : 0;
            this.page = 1;
        }
    };
    ViewRecordDetailsComponent.prototype.filterChanged = function (opt) {
        this._workItemService.workItemDetailsFilter = opt;
        switch (opt) {
            case 'Failed - Attention Needed':
                this.filterrecords(402);
                break;
            case 'Other Failures':
                this.filterrecords(401);
                break;
            case 'Total Records':
                this.filterrecords('All');
                break;
            case 'Records Processed':
                this.filterrecords('All');
                break;
            case 'All':
                this.filterrecords('All');
                break;
        }
    };
    ViewRecordDetailsComponent.prototype.pageChange = function (page) {
        this.page = page;
    };
    ViewRecordDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-record-details',
            template: __webpack_require__("../../../../../src/app/main/processes/view-record-details/view-record-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/processes/view-record-details/view-record-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_work_items_work_items_service__["a" /* WorkItemsService */]])
    ], ViewRecordDetailsComponent);
    return ViewRecordDetailsComponent;
}());



/***/ }),

/***/ "../../../../ng2-order-pipe/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * Created by vadimdez on 20/01/2017.
 */
__export(__webpack_require__("../../../../ng2-order-pipe/dist/src/ng2-order.module.js"));
__export(__webpack_require__("../../../../ng2-order-pipe/dist/src/ng2-order.pipe.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-order-pipe/dist/src/ng2-order.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vadimdez on 20/01/2017.
 */
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_order_pipe_1 = __webpack_require__("../../../../ng2-order-pipe/dist/src/ng2-order.pipe.js");
var Ng2OrderModule = (function () {
    function Ng2OrderModule() {
    }
    return Ng2OrderModule;
}());
Ng2OrderModule = __decorate([
    core_1.NgModule({
        declarations: [ng2_order_pipe_1.Ng2OrderPipe],
        exports: [ng2_order_pipe_1.Ng2OrderPipe]
    })
], Ng2OrderModule);
exports.Ng2OrderModule = Ng2OrderModule;
//# sourceMappingURL=ng2-order.module.js.map

/***/ }),

/***/ "../../../../ng2-order-pipe/dist/src/ng2-order.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Ng2OrderPipe = Ng2OrderPipe_1 = (function () {
    function Ng2OrderPipe() {
    }
    Ng2OrderPipe.prototype.transform = function (value, expression, reverse) {
        if (!value) {
            return value;
        }
        var isArray = value instanceof Array;
        if (isArray) {
            return this.sortArray(value, expression, reverse);
        }
        if (typeof value === 'object') {
            return this.transformObject(value, expression, reverse);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    Ng2OrderPipe.prototype.sortArray = function (value, expression, reverse) {
        var array = value.sort(function (a, b) {
            if (!expression) {
                return a > b ? 1 : -1;
            }
            return a[expression] > b[expression] ? 1 : -1;
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    Ng2OrderPipe.prototype.transformObject = function (value, expression, reverse) {
        var parsedExpression = Ng2OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);
        if (!(oldValue instanceof Array)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = Ng2OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        var newValue = this.transform(oldValue, lastPredicate, reverse);
        Ng2OrderPipe_1.setValue(value, newValue, parsedExpression);
        return value;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    Ng2OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    Ng2OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    Ng2OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    return Ng2OrderPipe;
}());
Ng2OrderPipe = Ng2OrderPipe_1 = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    })
], Ng2OrderPipe);
exports.Ng2OrderPipe = Ng2OrderPipe;
var Ng2OrderPipe_1;
//# sourceMappingURL=ng2-order.pipe.js.map

/***/ }),

/***/ "../../../../ng2-search-filter/ng2-search-filter.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2SearchPipeModule; });
/* unused harmony export Ng2SearchPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var Ng2SearchPipe = /** @class */ (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = /** @class */ (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ })

});
//# sourceMappingURL=processes.module.chunk.js.map