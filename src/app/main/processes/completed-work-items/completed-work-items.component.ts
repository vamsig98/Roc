import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkItem, Source, WorkItemsService } from '../../../shared/shared-services/work-items/work-items.service';

@Component({
  selector: 'app-completed-work-items',
  templateUrl: './completed-work-items.component.html',
  styleUrls: ['./completed-work-items.component.scss']
})

export class CompletedWorkItemsComponent implements OnInit {
  title = 'app works!';
  TotalRecords: any;
  processName: string;
  completedWorkItems: any;
  isLoadingProcessedWorkItems: boolean = false;
  @Output() sendScrollEventToProcessInit = new EventEmitter<string>();
  @Input('workItems') public sources: Array<Source>;
  isLoading = false;
  colspan: string;
  queryParam: any = {};

  constructor(private _workItemService: WorkItemsService) { }

  ngOnInit() {
    if (this.sources.length > 0) {
      this.processName = this.sources[0]["processName"];
    }
  }

  //sorting
  key: string = 'RMO';
  reverse: boolean = false;
  sort(key, number) {
    //  this.key = key;
    //  this.reverse = !this.reverse;
  }


  getRecordsBasedOnProcessName(item, key, filter) {
    // this._router.navigate(['app/operational/work-item/',this._itemRecord.status.toLowerCase(),
    // this._itemRecord.sourceId,this._itemRecord.processName], queryParam);
    this.isLoading = true;
    this.colspan = (this.sources ? (this.sources[0]['metadata'] ? (this.sources[0]['metadata']['key'] ? '9' : '8') : '7') : '7');
    console.log('this.colspan', this.colspan);

    // this._workItemService.getWorkItemDetails(item.sourceId, key).subscribe(
    this._workItemService.getWorkItemDetails(item.sourceId, item.processName).subscribe(
      (data: any) => {
        this._workItemService.workItemDetails = data['result'];
        this._workItemService.workItemDetailsFilter = filter;
        this._workItemService.isViewRecordDetails = true;
        this._workItemService.activePage = 'Completed Work items';
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  openWorkItemDetail(item, key, filterKey) {
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
  }

  reloadItems() {
    this.isLoadingProcessedWorkItems = true;
    this.getCompletedWorkItems();
  }

  getCompletedWorkItems() {
    this.completedWorkItems = [];
    this._workItemService.getProcessedWorkItemsByProcessName({
      start: 0,
      limit: 10,
      processName: this.processName,
      keyvalue: "",
      selectedmetakey: "",
    }).subscribe((data: { result: Array<WorkItem>, total: number, sourceTotal: number, sourceTypes: Array<string> }) => {

      if (data["result"].length === 0) {
        this.completedWorkItems = [];
      }
      for (let i = 0; i < data.result.length; i++) {
        this.completedWorkItems.push(data.result[i]);
      }
      this.isLoadingProcessedWorkItems = false;
    }, (error) => {
      console.log("ERROR: ", error);
      this.isLoadingProcessedWorkItems = false;
    });

    this.sources = this.completedWorkItems;
  }
  onScroll(event) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.sendScrollEventToProcessInit.emit(event);
    }
  }
}
