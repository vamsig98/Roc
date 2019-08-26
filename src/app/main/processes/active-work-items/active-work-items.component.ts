import { Component, OnInit, Input } from '@angular/core';
import { Source, WorkItemsService } from '../../../shared/shared-services/work-items/work-items.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare const moment: any;

@Component({
  selector: 'app-active-work-items',
  templateUrl: './active-work-items.component.html',
  styleUrls: ['./active-work-items.component.scss']
})
export class ActiveWorkItemsComponent implements OnInit {
  @Input('data') public parentData;
  @Input('workItems') public sources: Array<Source>;
  public active_work_items: any;
  public totalActiveWorkItems: any;
  hoverInd: any;
  isHovered = false;
  startTime: any;
  recordItem: any;
  selectedidx: any;
  isKillingProcess = false;
  queryParam: any = {};
  constructor(private _workItemService: WorkItemsService, private _router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

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

  changeStyle($event, idx) {
    this.hoverInd = idx;
    this.isHovered = true;
  }
  changeStyle1($event, idx) {
    this.hoverInd = -1;
    this.isHovered = false;
  }

  goToFailedRecords(sourceId, key, filter, idx) {
   
    var passFilter = filter==='Attention Needed'?'Failed - Attention Needed':'System Issues';
   
    this.selectedidx = idx;
    this._workItemService.workItemDetailsFilter = passFilter;
    this.openWorkItemDetail(sourceId, key, passFilter, idx);

  }


  openWorkItemDetail(item, key, filter, idx) {
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
  }

  getRecordsBasedOnProcessName(sourceId, key, filter) {
    // this.isLoading = true;
    this._workItemService.getWorkItemDetails(sourceId, key).subscribe(
      (data: any) => {
        this._workItemService.workItemDetails = data['result'];
        this._workItemService.workItemDetailsFilter = filter;
        this._workItemService.isViewRecordDetails = true;
        this._workItemService.activePage = 'Active Work items';
        // this.isLoading = false;
      },
      (error) => {
        // this.isLoading = false;
      }
    );
  }
  getLogsBasedOnProcessName() {

  }


  isObject(val) {
      return typeof(val);
  }

  getSum(values:any){
   return values.map(item => item.value).reduce((prev, next) => prev + next);
  }

}
