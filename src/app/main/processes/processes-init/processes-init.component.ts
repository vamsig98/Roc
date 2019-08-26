import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { WorkItem, WorkItemsService, ProcessMetadata } from '../../../shared/shared-services/work-items/work-items.service';
import { Subscription } from 'rxjs';

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { ConfigService } from '../../../shared/shared-services/config/config.service';
import { ActivatedRoute } from '@angular/router';
import { ProcessItem } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/shared-services/auth/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

declare const moment: any;

@Component({
  selector: 'app-processes-init',
  templateUrl: './processes-init.component.html',
  styleUrls: ['./processes-init.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProcessesInitComponent implements OnInit, OnDestroy {

  public navIsFixed: boolean = false;
  public selectedmetakey: string;
  public keyvalue: string;
  public process: ProcessItem;

  public activeWorkItems: Array<any> = [];
  public completedWorkItems: Array<any> = [];
  public incompleteWorkItems: Array<any> = [];
  private _subHandler: Subscription;

  public totalActiveWorkItems: number | any = 0;
  public totalCompletedWorkItems: number | any = 0;
  public totalIncompleteWorkItems: number | any = 0;
  public completedItems: Array<any> = [];
  private _alive: boolean = true;

  public metaData: ProcessMetadata;

  public isLoadingActiveWorkItems: boolean = false;
  public isLoadingProcessedWorkItems: boolean = false;
  public isLoadingInProcessedWorkItems: boolean = false;
  public triggeredBy: any;
  public processKillInProgress: boolean = false;
  scheduleMessage: string;

  public processedPaginationStart: number = 0;
  public PROCESSED_PAGINATION_LIMIT: number = 10

  public isShowLoadMoreProcessedItems: boolean = false;
  public isShowLoadMoreProcesseincompletedItems: boolean = false

  private _isProcessedTabActive: boolean = false;
  private totalCompletedWorkItemsLoader = false;

  public isRecordTabActive = false;
  public isViewTabActive = false;

  public isScheduleChecked = false;
  public isKillChecked = false;
  public isScheduleLoader = false;
  public isAdmin: boolean = false;
  public table_col_processes: boolean = true;
  public table_col_resources: boolean = true;
  public disableKillAndSchedule: boolean;
  public stakeholderInformation: any;
  public showStakeholder: boolean = false;
  public data:any;
  constructor(
    public _workItemService: WorkItemsService,
    private _configService: ConfigService,
    private _activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _authService: AuthService, public dialog: MatDialog

  ) {
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

  ngOnInit() {
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

  }


  getScheduleDetails() {
    this._workItemService.getSchedule(this.process.name).subscribe((data) => {
      this.isScheduleLoader = false;
      this.isScheduleChecked = data['result']['status'];
      if (data['result']['message']) {
        this.toastr.info(data['result']['message'], 'Information!');
      }
    }, (error) => {
      this.toastr.error(error, 'Information!');
      this.isScheduleLoader = false;
    });

  }
  schedule() {
    this.isScheduleChecked = !this.isScheduleChecked;
    const obj = {
      is_scheduled: this.isScheduleChecked,
      process_name: this.process.name,
      user : this.data.firstname + " " + this.data.lastname
    };
    // this.isScheduleLoader = true;
    if (this.isScheduleChecked === true) {
      this.scheduleMessage = "Are you sure want to Switch On the Process ? "
    }
    else {
      this.scheduleMessage = "Are you sure want to Switch Off the Process ? "
    }
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: { name: this.scheduleMessage, title: 'Confirm' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._workItemService.updateSchedule(obj, this.process["hostedOn"]).subscribe((data) => {
          // this.isScheduleLoader = false;
          if (data['result']['status'] === 'Failed') {
            this.toastr.error(data['result']['message'], 'Information!');
            this.isScheduleChecked = !this.isScheduleChecked;
          } else {
            this.toastr.success(data['result']['message'], 'Information!');
          }
        }, (error) => {
          this.isScheduleChecked = !this.isScheduleChecked;
          this.toastr.error(error, 'Information!');
          this.isScheduleLoader = false;
        });
      }
      else {
        this.isScheduleChecked = !this.isScheduleChecked;
      }
    });
  }

  kill() {

    let item = this.activeWorkItems[0];
    const obj = {
      'job_id': item.job_id ? item.job_id : '',
      'stop_id': item.stop_id ? item.stop_id : '',
      'process_name': item.processName ? item.processName : ''
    };
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: { name: 'Are you sure to Kill the Process ?', title: 'Confirm' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.processKillInProgress = true;
        this._workItemService.killTheProcess(obj).subscribe((data: any) => {
          this.processKillInProgress = false;
          if (data['result']['status'] === 'Failed') {
            this.toastr.error(data['result']['message'], 'Information!');
          } else {
            this.toastr.success(data['result']['message'], 'Information!');
            this.getActiveWorkItems().subscribe((data) => {
              this.processKillInProgress = false;
            }, (error) => {
              this.toastr.error(error, 'Information!');
              this.processKillInProgress = false;
            });
          }
        },
          (error) => {
            this.processKillInProgress = false;
            this.toastr.error(error, 'Information!');
          });
      }
    });

  }


  public filerkey(value, selectedkey) {

    this.keyvalue = value;
    this.selectedmetakey = selectedkey;
    this._isProcessedTabActive = true;
    this.completedWorkItems = [];
    this.processedPaginationStart = 1;
    this.getCompletedWorkItems();
    this._alive = false;

  }
  private getWorkItems() {
    this._subHandler = this._workItemService.processesListObserver.subscribe((data: ProcessItem) => {
      this.metaData = {
        botCount: '-',
        failed: '-',
        files: '-',
        Key: '-',
        processed: '-',
        processKey: '-',
        totalFailed: '-'
      };
      this.totalActiveWorkItems = '';
      this.totalCompletedWorkItems = '';
      this.totalIncompleteWorkItems = '';
      if (data) {
        this.process = data;
        // this.getScheduleDetails();
        this.isLoadingActiveWorkItems = true;
        this.completedWorkItems = [];
        this.incompleteWorkItems = [];
        this.processedPaginationStart = 1;
        this.getCompletedWorkItems();
        this.getMetadata();
        this.getActiveWorkItems();
        this.getStakeholderData();
      }
    });
  }

  private getMetadata() {
    this._workItemService.getWorkItemMetaDataByIdAndTime({
      key: this.process.name,
      aggType: 'ALL',
      tmStart: '',
      tmEnd: ''
    }).subscribe((data: any) => {
      this.metaData = data;
    }, (error) => {
    });
  }

  private getWorkItemsByInterval() {
    IntervalObservable.create(this._configService.config.tmPollingInMs)
      .takeWhile(() => {
        return this._alive;
      })
      .subscribe(() => {
        this.getActiveWorkItems();
      });
  }
  private getStakeholderData(){
    this._workItemService.getStakeholderData(this.process.name).subscribe((data)=>{
      this.stakeholderInformation = data["result"][0];
      this.showStakeholder = true;
    })
  }
  private getActiveWorkItems() {
    var _httpObservable =
      this._workItemService.getActiveWorkItemsByProcessName(this.process.name)
    _httpObservable.subscribe((data: { result: Array<WorkItem>, total: number }) => {
      this.activeWorkItems = data.result["active_work_items"];
      this.totalActiveWorkItems = this.activeWorkItems ? this.activeWorkItems.length : 0;
      this.isLoadingActiveWorkItems = false;
      if (data.result["active_work_items"] && data.result["active_work_items"].length > 0) {
        if (data.result["active_work_items"][0].items) {
          this.triggeredBy = data.result["active_work_items"][0].triggeredBy;
        }
      }
    }, (error) => {
      this.isLoadingActiveWorkItems = false;
    });
    return _httpObservable
  }

  private getCompletedWorkItems() {
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
    }).subscribe((data: { result: Array<WorkItem>, total: number, sourceTotal: number, sourceTypes: Array<string>  }) => {
      this.processedPaginationStart += (this.PROCESSED_PAGINATION_LIMIT);
      this.totalCompletedWorkItemsLoader = false;
      
      if (data.sourceTypes) {
        this.completedItems = data.sourceTypes;
      }
      if (data["result"].length === 0) {
        this.isShowLoadMoreProcessedItems = false;

      }
      for (let i = 0; i < data.result.length; i++) {
        this.completedWorkItems.push(data.result[i]);
      }
      if (this.completedWorkItems.length >= data.sourceTotal || data.result.length == 0) {
        this.isShowLoadMoreProcessedItems = false;
      } else {
        this.isShowLoadMoreProcessedItems = true;
      }
      this.totalCompletedWorkItems = data.sourceTotal ? data.sourceTotal : data["result"].length;
      this.isLoadingProcessedWorkItems = false;
      if (this.completedWorkItems > this.totalCompletedWorkItems) {
        this.isLoadingProcessedWorkItems = false;

      }
      if (data.result.length > 0) {
        if (data.result[0].items) {
          this.triggeredBy = data.result[0].triggeredBy;
        }
      }
    }, (error) => {
      this.isLoadingProcessedWorkItems = false;
    });
  }

  getCompletdworkitemsBytabChange() {
    this.isLoadingProcessedWorkItems = false;
  }
  getActiveWorkItemsBytabChange() {
    this.isLoadingActiveWorkItems = false;
  }

  ngOnDestroy() {
    this._alive = false;
    if (this._subHandler) {
      this._subHandler.unsubscribe();
    }
  }

  public onTabChange(ev) {
    if (ev.index == 0) {
      this._alive = true;
      this.isLoadingActiveWorkItems = true;
      this.getActiveWorkItemsBytabChange();
      this.getWorkItemsByInterval();
      this._isProcessedTabActive = false;
    } else if (ev.index == 1) {
      this._isProcessedTabActive = true;
      this.getCompletdworkitemsBytabChange();
      this._alive = false;
    }
    else if (ev.index == 2) {
      this._isProcessedTabActive = true;
      this.incompleteWorkItems = [];
      this._alive = false;
    }
  }

  public onViewTabChange(ev) {
    if (ev.index === 0) {
      this.isRecordTabActive = true;
      this.getRecordDetails();
    } else if (ev.index === 1) {
      this.isViewTabActive = true;
      this.getViewDetails();
    }
  }

  getRecordDetails() {
    this._workItemService.isViewRecordDetails = true;
  }

  getViewDetails() {
    this._workItemService.isViewRecordDetails = true;
  }
  goToActiveWorkItems() {
    this._workItemService.isViewRecordDetails = false;
  }
  receiveMessage(event) {
    this.table_col_processes = false;
    this.table_col_resources = false;
    // this.table_col_processes = 'col-md-10';
    // this.table_col_resources = 'col-md-2';
    console.log('event', event);
  }
  showMessage(event) {
    this.table_col_processes = true;
    this.table_col_resources = true;
    // this.table_col_processes = 'col-md-9';
    // this.table_col_resources = 'col-md-3';
  }

  eventFromCompletedWorkItems(event) {
    if (!this._isProcessedTabActive) {
      return false;
    }
    if (this.isShowLoadMoreProcessedItems) {
      this.getCompletedWorkItems();

    }
  }
}
@Component({
  selector: 'delete-confirmation-dialog',
  templateUrl: '../../../shared/shared-components/confirm-dialog/delete-confirmation-dialog.html',
})
export class DeleteConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

