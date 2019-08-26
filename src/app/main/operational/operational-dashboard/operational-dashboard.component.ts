import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { WorkItem, WorkItemsService } from '../../../shared/shared-services/work-items/work-items.service';

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { ConfigService } from '../../../shared/shared-services/config/config.service';
// import * as quill from "quill";
import { BpmnService } from '../../../shared/shared-services/bpmn/bpmn.service';

@Component({
  // host: {
  //   '(document:click)': 'BodyClick($event)'
  // },
  selector: 'app-operational-dashboard',
  templateUrl: './operational-dashboard.component.html',
  styleUrls: ['./operational-dashboard.component.scss'],
})

export class OperationalDashboardComponent implements OnInit, OnDestroy {
  public showfilterBox = false;
  public showLegendBox = false;
  public checkedAll = false;
  public selectedStatus = [];
  public selectedFilter = [];

  public totalActiveWorkItem: number = 0;

  public workItems: Array<WorkItem> = [];
  public isLoading: boolean = false;
  public subwayMap: object;

  public errorMessage: string;
  public subwayDashboard: boolean = true;
  public activedashborad: boolean = true;

  private _alive: boolean = true;
  public subway: boolean = false;
  public activedashboard: boolean = false;
  public bpmn1: string;
  public bpmn2: string;
  public bpmn3: string;
  public bpmn4: string;
  public participants = [];
  public bpmnList: any;
  public temporaryList = [];
  public rightScreenHeight = screen.height + 'px';
  public allExpandState = true;
  public isProcesses : boolean;
  public isNotConfigured = false;
  constructor(
    private _eref: ElementRef,
    public _workItemService: WorkItemsService,
    private _configService: ConfigService,
    public _bpmnService: BpmnService
  ) { }

  ngOnInit() {

    this.getWorkItems();
    // const Quill = (quill as any).default ? (quill as any).default : quill;
    this.getWorkItemsInInterval();

    this.loadProcessMap();
  }
  public BodyClick() {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showfilterBox = false;
    }
  }

  public leftactive() {
    this.activedashboard = true;
    this.subway = false;
    this.activedashborad = true;
    this.subwayDashboard = false;
  }
  public Rightactive() {
    this.activedashboard = false;
    this.subway = true;
    this.activedashborad = false;
    this.subwayDashboard = true;

  }
  private getWorkItems() {
    this.isLoading = true;
    // set the cached items.
    if (this._workItemService.workItems.length) {
      this.workItems = this._workItemService.workItems;
      this.totalActiveWorkItem = this.workItems.length;
    }
    this._workItemService.getWorkItems({ start: 1, limit: -1 })
      .subscribe((data: { result: Array<WorkItem>, total: number }) => {
        this.workItems = data.result["active_work_items"];
        this.subwayMap = data;
        this._workItemService.subwayMapDetails = data.result['subway_map'];
        this._workItemService.putActivesubway(this.subwayMap);
        this._workItemService.workItems = this.workItems;
        this.totalActiveWorkItem = this.workItems.length;
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
        this.errorMessage = error.error;
      })
  }

  getWorkItemsInInterval() {
    IntervalObservable.create(this._configService.config.tmPollingInMs)
      .takeWhile(() => {
        return this._alive;
      })
      .subscribe(() => {
        this.getWorkItems();
      });
  }

  ngOnDestroy() {
    this._alive = false;
  }

  public trackByJobId(workItem: WorkItem) {
    return workItem ? workItem.jobId : undefined;
  }

  showFilters() {
    this.showfilterBox = !this.showfilterBox;
    this.showLegendBox = false;
  }
  showLegend() {
    this.showLegendBox = !this.showLegendBox;
    this.showfilterBox = false;
  }

  public toggleselection(x) {
    if (x === 'All') {
      this.checkedAll = !this.checkedAll;
      if (this.checkedAll) {
        this.selectedStatus = [];
        for (let i = 0; i < this.participants.length; i++) {
          this.selectedStatus.push(this.participants[i].name);
        }
        // this.temporaryList = this.bpmnList;
      } else {
        this.selectedStatus = [];
        // this.temporaryList = this.bpmnList;
      }
    } else {
      const index = this.selectedStatus.indexOf(x);
      if (index > -1) {
        this.selectedStatus.splice(index, 1);
        // this.rebuildMap();
      } else {
        this.selectedStatus.push(x);
        // this.rebuildMap();
      }

      if (this.participants.length === this.selectedStatus.length) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    }
    if (this.selectedStatus.length === 0) {
      var participants = this.participants;
      this.participants=participants;
      // this.temporaryList = this.bpmnList;
    }
    this.rebuildMap();

  }

  rebuildMap() {
    this.temporaryList = [];
    if (this.selectedStatus.length > 0) {
      this.selectedStatus.forEach((eachstatus, idx) => {
        this.bpmnList.forEach((eachbpmn, ind) => {
          if (eachstatus === eachbpmn.name) {
            this.temporaryList.push(eachbpmn);
          }
        });
      });
    } else {
      this.temporaryList = this.bpmnList;
    }
    setTimeout(() => {
      this.isTimeOut();
    }, 1000);
  }


  private loadProcessMap() {
    this.isProcesses =true;
    this._bpmnService.settingsPage = false;
    this._bpmnService.loadProcessMapxml().subscribe((response: any) => {
      this.bpmnList = response.result[0].bpmns;
      this.participants = response.result[0].filter;
      if(this.participants.length === 0 ){
        this.isNotConfigured = true;
      }
      else{
        this.isNotConfigured = false;
        this.isProcesses = false;
      }
      this.temporaryList = this.bpmnList;
      this._bpmnService.participants = response.result[0].filter;
    }, (error) => {
      console.log('Error in SubWay data call');
    });


    setTimeout(() => {
      this.isTimeOut();
    }, 1000);
  }
  isTimeOut() {
    const doc = document.getElementsByClassName('operational-div');
      if (screen.height < doc[0].clientHeight) {
        this.rightScreenHeight = (doc[0].clientHeight - 26) + 'px';
      } else {
        this.rightScreenHeight = screen.height + 'px';
      }
  }
}
