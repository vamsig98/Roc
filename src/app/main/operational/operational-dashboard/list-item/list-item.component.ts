import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { WorkItem, WorkItemsService } from '../../../../shared/shared-services/work-items/work-items.service';
declare const moment: any;
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  private workItem: WorkItem;
  @Input('index') public ww: number;
  @Input('booleanActive') public booleanActive: boolean;
  // @Input('workItem') public workItem: WorkItem;
  @Input('index') public index: number;
  @Input('workItem') public set workItems(workItem: WorkItem) {
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
  };

  public isShowAddBot: boolean = false;
  public sourceMetadataKeys: Array<string> = [];

  public sourceDisplayLimit: number = 1;

  public showAllSource: boolean = false;

  public isPendingExists: boolean = false;
  public count = 0;
  public total_processed: number = 0;
  public total_failed: number = 0;
  public total_records: number = 0;
  public grand_Total: number = 50;
  public percent_total: string = "50";

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.booleanActive = true;
    this.isPendingExists = WorkItemsService.checkIfPendingExists(this.workItem);
    this.workItem.metrics.forEach(obj => {
      if (obj["key"] == 'totalRecords') {
        this.total_records = obj["value"];
      } else if (obj["key"] == 'totalProcessed') {
        this.total_processed = obj["value"];
      }
      else if (obj["key"] == 'totalFailed') {
        this.total_failed = obj["value"];
      }
    });
    this.grand_Total = ((this.total_processed + this.total_failed) / this.total_records) * 100;
  }

  public calcProgress(metrics) {
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
    if(isNaN(per)){ 
      per = 0;
    }
    return per.toFixed(0);
  }
  public closeAddBot(isClosed) {
    this.isShowAddBot = !isClosed;
  }
  openWorkItemDetail(key?: string) {
    let queryParam: any = {};
    if (key) {
      queryParam = {
        queryParams: {
          filter: key
        }
      }
    }

    if (this.workItem.sourceId == "NA") {
      return;
    }
    this._router.navigate(['app/operational/work-item/', this.workItem.sourceId, this.workItem.processName], queryParam);
  }

  // public limitSourceList() {
  //   this.sourceDisplayLimit = this.workItem.result.length && this.workItem.source.length > 1 ? 1 : this.workItem.source.length;
  //   this.showAllSource = false;
  // }
  // public viewAllSourceList() {
  //   this.sourceDisplayLimit = this.workItem.source.length;
  //   this.showAllSource = true;
  // }

  public openProcess() {
    this._router.navigate(['app', 'processes', this.workItem.key]);
  }

  private SecondsTohhmmss = function (totalSeconds: number) {
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100

    var result = (hours > 0 ? hours + "h:" : '');
    result += (minutes > 0 ? minutes + "m:" : '');
    result += (seconds > 0 ? seconds < 10 && seconds >= 1 ? "0" + seconds + "s:" : seconds + "s:" : seconds == 0 ? "0s:" : seconds + "s:");
    return result.trim().slice(0, -1);
  }

  getFormattedValue(key:string){
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  }

}
