import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FinancialService, FRecords, FSummary, FLiveSummary } from '../../../shared/shared-services/financial/financial.service';


declare const moment: any;
@Component({
  selector: 'app-financial-viewer',
  templateUrl: './financial-viewer.component.html',
  styleUrls: ['./financial-viewer.component.scss']
})
export class FinancialViewerComponent implements OnInit {

  @ViewChild('datePlaceholder') public datePlaceholder: ElementRef;
  @Input('ddSelected') public ddSelected: string;
  public selectedRecord = '';
  public dateoptions: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    ranges: {
      'Last Month': [moment().subtract(1, 'month'), moment()],
      'Last 3 Months': [moment().subtract(4, 'month'), moment()],
      'Last 6 Months': [moment().subtract(6, 'month'), moment()],
      'Last 12 Months': [moment().subtract(12, 'month'), moment()],
    },
    opens: 'left'
  };
  public financial_drill_data: any = {};
  public daterange: any = {};
  public isLoading: boolean = false;
  public isdrillLoading:boolean = false;
  public options: any;
  public data: any;
  public errorMessage: any;
  public fsummary: FSummary;
  public flivesummary: FLiveSummary;
  public frecords: FRecords;
  public fgraphdata: any;
  public dataResult: any;
  public lobs: string;
  public lobslist: any;
  screenHeight: string;
  public lobsboolean: boolean = true;
  public processes_count: any;
  public selectedLob = 'All LOBs';

  constructor(public _financialservice: FinancialService) {
    this.isLoading = true;
    this.showDatewiseFilter('YTD');
    // this.getFinancialData();
  }

  ngOnInit() {
   this.lobs = 'all';
   this.getlobsdata();
   this.screenHeight = screen.height + 'px';
  }

  public getSelectedRecord(selectedrecord) {
    this.isdrillLoading = true;
    this._financialservice.getdrillDownData(selectedrecord.processName).subscribe((data)=>{
      this.financial_drill_data = data["result"];
      this.isdrillLoading = false;
      this.setLeftNavHeight();
    })
    this.selectedRecord = selectedrecord.displayName;
  }
  public backtoDashboard() {
    this.selectedRecord = '';
  }
  public getlobsdata = function() {
    this.lobsboolean = true;
    this._financialservice.loadLobsdata().subscribe((data: any) => {
      this.lobslist = data["result"];
      this.processes_count = data.processes_count;
      this.lobsboolean = false;
    });
  }

  public getFinancialData = function () {
    this.isLoading = true;
    this._financialservice.selectedFilter = this.ddSelected;

    this._financialservice.loadFinancaildata({
      aggType: this.apiDDType(),
      tmStart: this.daterange ? this.daterange.start : '',
      tmEnd: this.daterange ? this.daterange.end : '',
      lob:this.lobs
    }).subscribe((data:any) => {
      this.processes_count = data.result.processes_count ? data.result.processes_count : 0;
      this.fsummary = data.result["summary"];
      this.frecords = data.result["records"];
      this.fgraphdata = data.result["graphdata"];
      this.flivesummary = data.result["live_summary"];
      this.isLoading = false;
    }, (error:any) => {
      this.errorMessage = error.error;
      this.isLoading = false;
    });
  }
  public changeSelectedLob( name:any){ 
    this.selectedRecord = "";
    this.selectedLob = name;
    this.lobs =name;
   
    this.isLoading = true;
//  Object.keys(this.fsummary).forEach(function(key) {
//   if(key){ 
//   delete this.fsummary[key];
//   }
//  });
// Object.keys(this.frecords).forEach(function(key) { 
//   if(key){
//   delete this.frecords[key];
//  } });
// Object.keys(this.flivesummary).forEach(function(key) { 
//   if(key){
//    delete this.flivesummary[key];
//  } });
    this.fgraphdata ={};
    this.getFinancialData();
  }

  public selectedDate(value: any, datepicker?: any) {
    this.options = {
      locale: { format: 'YYYY-MM-DD HH:mm:ss' },
      alwaysShowCalendars: false,
      ranges: {
        'Last Month': [moment().subtract(1, 'month'), moment()],
        'Last 3 Months': [moment().subtract(4, 'month'), moment()],
        'Last 6 Months': [moment().subtract(6, 'month'), moment()],
        'Last 12 Months': [moment().subtract(12, 'month'), moment()],
      }
    };

    this.ddSelected = 'Range';

    this.daterange = {};
    // or manupulat your own internal property
    this.daterange.start = value.start.format('YYYY-MM-DD HH:mm:ss');
    this.daterange.end = value.end.format('YYYY-MM-DD HH:mm:ss');

    this.isLoading = true;
    this.getFinancialData();
  }

  showDatePicker() {
    this.datePlaceholder.nativeElement.click();
  }

  public showDatewiseFilter(type: string) {
    this.ddSelected = type;

    this.daterange = null;

    this.getFinancialData();
  }

  private apiDDType(): string {
    let typ: string = '';
    switch (this.ddSelected) {
      case 'LIFE':
        typ = 'LIFE';
        break;
      case 'YTD':
        typ = 'YEAR';
        break;
      case 'MTD':
        typ = 'MONTH';
        break;
      case 'WTD':
        typ = 'WEEK';
        break;
      case 'Range':
        typ = 'CUSTOM';
        break;
    }

    return typ;
  }

  public formatTimestamp(timestamp:any){
    return moment.utc(timestamp).local().fromNow();
  }

  setLeftNavHeight() {
    setTimeout(() => {
      let doc = document.getElementsByClassName('rightDiv');
        if (screen.height < doc[0].clientHeight) {
          this._financialservice.leftScreenHeight = doc[0].clientHeight + "px";
        } else {
          this._financialservice.leftScreenHeight = screen.height + "px";
        }
      }, 1000);
  }


}
