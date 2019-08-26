import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { WorkItem } from '../../shared-services/work-items/work-items.service';

declare const moment: any;

@Component({
  selector: 'app-item-record',
  templateUrl: './item-record.component.html',
  styleUrls: ['./item-record.component.css']
})
export class ItemRecordComponent implements OnInit {

  private _itemRecord: WorkItem;

  @Input('showDetailLink') public showDetailLink: boolean;

  @Input('itemRecord') public set itemRecord(record: WorkItem) {
    if (record) {
      this._itemRecord = record;
      console.log('this._itemRecord', this._itemRecord);
      // moment.utc("2015-10-24 20:00", "YYYY-MM-DD HH").format('YYYY-MMM-DD h:mm A');
      // this._itemRecord.tmStarted = record.tmStarted ? moment.utc(record.tmStarted,"YYYY-MM-DD HH").format('YYYY-MMM-DD h:mm A') : 'Waiting';
      this.sourceMetadataKeys = Object.keys(record.metadata);
    }
  };

  public get itemRecord() {
    return this._itemRecord;
  }

  public sourceMetadataKeys: Array<string> = [];

  constructor(
    private _router: Router
  ) { }

  ngOnInit() { }


  openWorkItemDetail(key?: string) {
    let queryParam: any = {};
    if (key) {
      queryParam = {
        queryParams: {
          filter: key
        }
      }
    }
    if(this._itemRecord.sourceId=="NA"){
      return;
    }
    this._router.navigate(['app/operational/work-item/',this._itemRecord.status.toLowerCase() ,this._itemRecord.sourceId,this._itemRecord.processName], queryParam);
  }

  public setCamelcase(itemRecord:any){
    let result="";
    let returnresult="";
    if(itemRecord && itemRecord.status){
        result = itemRecord.status.toLowerCase();
        let arrayresult = result.split("");
        arrayresult[0] = arrayresult[0].toUpperCase();
        returnresult = arrayresult.join("");
        returnresult = returnresult.replace("_"," ");
    }
    return returnresult;
  }

}
