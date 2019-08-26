import { Component, OnInit, Input, Output } from '@angular/core';
import { FRecords } from '../../../../shared/shared-services/financial/financial.service';
import { EventEmitter } from '@angular/core';
import { FinancialService } from '../../../../shared/shared-services/financial/financial.service';

@Component({
  selector: 'app-finance-records',
  templateUrl: './finance-records.component.html',
  styleUrls: ['./finance-records.component.scss']
})
export class FinanceRecordsComponent implements OnInit {


  public dynamic: any;
  public searchString:string;
  public selectedRecord:string;
  public openedId: string = "0";

  @Input('records') public _frecords: Array<FRecords>;
  @Output() financeRecord = new EventEmitter<string>();


  constructor(private _financialservice: FinancialService) { }

  ngOnInit() {
  }

  onSelectRecord(selectedRecord){
    this.financeRecord.emit(selectedRecord);
  }

  public calPercentage(numb1: string, numb2: string) {
    var num1 = parseFloat(numb1);
    var num2 = parseFloat(numb2);
    var retpercentage = 0;
    if ((num1 == 0 && num2 == 0) || num1 == 0)
      return 0;
    retpercentage = (num2 / num1) * 100;
    if (retpercentage != 0)
      return Math.round(retpercentage);
    else
      return 0;
  }
  public openchildprocess(name) {
    this.openedId = name;
    this.setLeftNavHeight(1000);
  }

  setLeftNavHeight(sec) {
    setTimeout(() => {
      let doc = document.getElementsByClassName('rightDiv');
        if (screen.height < doc[0].clientHeight) {
          this._financialservice.leftScreenHeight = doc[0].clientHeight + "px";
        } else {
          this._financialservice.leftScreenHeight = screen.height + "px";
        }
      }, sec);
  }

  public getDynamicContent(item: any) {
    let FilterContent:any;
    this.dynamic = { "title": item.group.parent.displayName, "content": item.group.child,"keys":item.group.child[0].keys }
  }

  public getKey(item:any){
    return Object.keys(item);
  }

  public isBig(numb1: string, numb2: string) {
    var num1 = +numb1;
    var num2 = +numb2;
    var isBig: boolean = false;
    if (num1 > num2)
      isBig = true;
    return isBig;
  }

}
