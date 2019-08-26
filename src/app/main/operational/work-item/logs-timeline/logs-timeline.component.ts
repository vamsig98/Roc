import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Observer } from 'rxjs/Observer';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { WorkItemsService, TimelineLog } from '../../../../shared/shared-services/work-items/work-items.service';

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { ConfigService } from '../../../../shared/shared-services/config/config.service';

@Component({
  selector: 'app-logs-timeline',
  templateUrl: './logs-timeline.component.html',
  styleUrls: ['./logs-timeline.component.css']
})
export class LogsTimelineComponent implements OnInit, OnDestroy {

  public sourceId: string;
  public filterId: string;
  public logTimelineData: Array<TimelineLog>;

  private _paramsSubscriber: Subscription;
  private _alive: boolean = true;

  public isLoading: boolean;

  public errorMessage: string;

  constructor(
    public _workItemService: WorkItemsService,
    private _activatedRoute: ActivatedRoute,
    private _configService: ConfigService
  ) {

    this._paramsSubscriber = Observable.combineLatest(this._activatedRoute.queryParams, this._activatedRoute.parent.params).subscribe((data) => {
      this.filterId = data[0] && data[0].filter ? data[0].filter : '';
      this.sourceId = data[1] && data[1].jobId ? data[1].jobId : '';
    });
  }

  ngOnInit() {
    this.getLogs();
    this.getLogsInInterval();

  }

  ngOnDestroy() {
    if (this._paramsSubscriber) {
      this._paramsSubscriber.unsubscribe();
    }
    this._alive = false;
  }

  getLogs() {
    this.isLoading = true;
    this._workItemService.getLogsForTimelineBySourceId(this.sourceId, {
      start: 1, limit: -1
    }).subscribe((data: { result: Array<TimelineLog>, total: number }) => {
      this.logTimelineData = data.result;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error;
    })
  }

  getLogsInInterval() {
    IntervalObservable.create(this._configService.config.tmPollingInMs)
      .takeWhile(() => {
        return this._alive;
      })
      .subscribe(() => {
        this.getLogs();
      });
  }

}
