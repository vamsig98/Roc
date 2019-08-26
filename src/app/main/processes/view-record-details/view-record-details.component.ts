import { Component, OnInit } from '@angular/core';
import { Source, WorkItemsService } from '../../../shared/shared-services/work-items/work-items.service';

@Component({
  selector: 'app-view-record-details',
  templateUrl: './view-record-details.component.html',
  styleUrls: ['./view-record-details.component.scss']
})
export class ViewRecordDetailsComponent implements OnInit {
  public orgUnits: any;
  // public selected: string = 'All';
  public recordsFilter = [];

  public page: number = 1;
  public itemsPerPage: number = 10;
  public total = 0;
  recordTemp = [];

  constructor(public _workItemService: WorkItemsService) { }

  ngOnInit() {
    this.recordsFilter = ['All', 'Failed - Attention Needed', 'Other Failures'];
    this.total = this.recordTemp ? this.recordTemp.length : 0;

    this.filterChanged(this._workItemService.workItemDetailsFilter);
  }
  filterrecords(issues) {
    if (issues === 'All') {
      this.recordTemp = this._workItemService.workItemDetails.recordDetails;
    } else {
      this.recordTemp = [];
      this._workItemService.workItemDetails.recordDetails.forEach((eachItem) => {
        if (eachItem.errorType === issues) {
          this.recordTemp.push(eachItem);
        }
      });
      this.total = this.recordTemp ? this.recordTemp.length : 0;
      this.page = 1;
    }
  }
  filterChanged(opt) {
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
  }

  pageChange(page) {
    this.page = page;
  }
}
