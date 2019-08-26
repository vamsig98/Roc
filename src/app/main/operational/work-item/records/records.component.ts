import { Component, ViewChild, OnInit, Input, OnDestroy } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WorkItemsService, Record } from '../../../../shared/shared-services/work-items/work-items.service';
import { Observable } from "rxjs/Rx";
import { Observer } from 'rxjs/Observer';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { ConfigService } from '../../../../shared/shared-services/config/config.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit, OnDestroy {

  public sourceId: string;
  public filterId: string;

  public displayedColumns = ['name', 'status', 'message', 'timeTaken'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _paramsSubscriber: Subscription;
  private _recordSubscriber: Subscription;
  public sourceLength:number;

  private _alive: boolean = true;
  public processName;

  private _afterInit: boolean = false;

  public searchText: string = "";

  public errorMessage: string;
  public isLoading:boolean = true;

  constructor(
    private _workItemService: WorkItemsService,
    private _activatedRoute: ActivatedRoute,
    private _configService: ConfigService
  ) {
    this._paramsSubscriber = Observable.combineLatest(this._activatedRoute.queryParams, this._activatedRoute.parent.params).subscribe((data) => {
      this.filterId = data[0] && data[0].filter ? data[0].filter : '';
      this.sourceId = data[1] && data[1].jobId ? data[1].jobId : '';
      this.processName = data[1]&& data[1].processName ? data[1].processName : '';
    });

    this._recordSubscriber = this._workItemService.hasChangedObserver.subscribe(() => {
      setTimeout(() => {
        this.getRecords();
      }, 200);
    });
  }

  ngOnInit() {

  }


  ngOnDestroy() {
    if (this._paramsSubscriber) {
      this._paramsSubscriber.unsubscribe();
    }

    if (this._recordSubscriber) {
      this._recordSubscriber.unsubscribe();
    }


    this._alive = false;
  }

  ngAfterViewInit() {
    this._afterInit = true;
    setTimeout(() => {
      this.getRecords();
    }, 100);
  }
  getRecords() { 
    this.isLoading = true;
    if (!this._afterInit) {
      return;
    }
    this._workItemService.getRecordsBySourceId(this.sourceId,{start: 1, limit: -1}).subscribe((
      data: { result: Array<Record>, total: number }) => {
      this.dataSource = new MatTableDataSource<Record>(data.result || []);
      this.dataSource.paginator = this.paginator;
      console.log( this.dataSource);
      // this.sourceLength = data.result.length;
      this.checkFilter();
    }, (error) => {
      this.errorMessage = error.error;
    })
  }

  getRecordsInInterval() {
    IntervalObservable.create(this._configService.config.tmPollingInMs)
      .takeWhile(() => {
        return this._alive;
      })
      .subscribe(() => {
        this.getRecords();
      });
  }

  checkFilter() {
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
  }

  filterRecords() {
    if (this.dataSource) {
      this.dataSource.filter = this.searchText;
    }
  }

}
