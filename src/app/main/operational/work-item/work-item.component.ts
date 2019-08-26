import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { WorkItem, WorkItemsService, ProcessData, Source } from '../../../shared/shared-services/work-items/work-items.service';
import { ConfigService } from '../../../shared/shared-services/config/config.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

declare const moment: any;

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit, OnDestroy {

  public recordItem: WorkItem;
  public sourceMetadataKeys: any;

  public activeLinkIndex: number = 0;

  public isShowAddBot: boolean = false;

  public processedType: string = '';
  public processedPercent: number = 0;

  public preProcessingInfo: ProcessData = {
    sources: []
  };
  public processingInfo: ProcessData = {
    sources: []
  };
  public postProcessingInfo: ProcessData = {
    sources: []
  };

  public startTime: string;

  public isPendingExists: boolean = false;

  private _routerParamSub: any;
  private _routerPathSub: any;

  private _filter: string;
  private _sourceId: string;
  private _process:string;

  private _alive: boolean = true;

  public isLoading: boolean;

  public source: Source;
  public _status:string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _workItemsService: WorkItemsService,
    private _configService: ConfigService
  ) {
    if (this._router.url.indexOf('log-items') != -1) {
      this.activeLinkIndex = 1;
    }
    this._routerParamSub = this._activatedRoute.queryParams.subscribe(
      (params) => {
        this._filter = params.filter || '';
      }
    );
    this._routerPathSub = this._activatedRoute.params.subscribe(
      (params) => {
        this._sourceId = params.jobId;
        this._process = params.processName;
        this._status = params.status;
      }
    );
  }

  ngOnInit() { 
    setTimeout(() => {
      this.getWorkItemDetails();
    }, 200);
    // this.getCurrentAllProcessingInfo();
}

  ngOnDestroy() {
    this._alive = false;
    if (this._routerParamSub) {
      this._routerParamSub.unsubscribe();
      this._routerParamSub = null;
    }
    if (this._routerPathSub) {
      this._routerPathSub.unsubscribe();
    }
  }
  getWorkItemDetails() {
    this.isLoading = true;
    this._workItemsService.getWorkItemDetails(this._sourceId,this._process).subscribe(
      (data: any) => {
        this._workItemsService.workItemDetails = data["result"];
        console.log(this._workItemsService.workItemDetails);
        this._workItemsService.hasChanged.next(true);
        this.startTime = moment.utc(data.tmStarted).local().fromNow();
        this.recordItem = data["result"];
        this.source = data["result"];
        this.sourceMetadataKeys = Object.keys(data["result"].metadata);
        // this.processingInfo.sources = data["result"].details.processing;
        // this.preProcessingInfo.sources = data["result"].details.preProcess;
        // this.postProcessingInfo.sources = data["result"].details.postProcessing;
        this.isPendingExists = WorkItemsService.checkIfPendingExists([this.recordItem]);
        // this._alive = (this.recordItem.status !== 'PROCESSED');
        this._alive = (this.recordItem.status !== 'SUCCESS');
        this.setProcessedType(this.recordItem);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }


  closeAddBot(isClose) {
    this.isShowAddBot = !isClose;
  }

  openOperationalDashboard() {
    window.history.back();
    // this._router.navigate(['app/operational/dashboard']);
  }

  setProcessedType(recordItem) {
    this.processedType = 'Files Processed';
    let total: number = 0;
    let processed: number = 0;
    recordItem.metrics.forEach((metric) => {
      if (metric.label.indexOf('Record') != -1) {
        this.processedType = 'Records Processed';
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
  }

  private getCurrentAllProcessingInfo() { 
    console.log(this._configService.config.tmPollingInMs,"times");
    IntervalObservable.create(this._configService.config.tmPollingInMs)
      .takeWhile(() => { 
       console.log(this._alive," this._alive ");
        return this._alive;
      })
      .subscribe(() => { 
        console.log("get work item details");
        this.getWorkItemDetails();
      });
  }

  private getCurrentPreProcessing() {
    this._workItemsService.getCurrentPreProcessingInfo(this._sourceId).subscribe(
      (data: { result: Array<string>, total: 0 }) => {
        this.preProcessingInfo.sources = data.result;
      },
      (error) => {

      }
    );
  }
  private getCurrentProcessing() {
    this._workItemsService.getCurrentProcessingInfo(this._sourceId).subscribe(
      (data: { result: Array<string>, total: 0 }) => {
        this.processingInfo.sources = data.result;
      },
      (error) => {

      }
    );
  }
  private getCurrentPostProcessing() {
    this._workItemsService.getCurrentPostProcessingInfo(this._sourceId).subscribe(
      (data: { result: Array<string>, total: 0 }) => {
        this.postProcessingInfo.sources = data.result;
      },
      (error) => {

      }
    );
  }

}
