import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FinancialService } from '../../../shared/shared-services/financial/financial.service';
import * as d3 from 'd3';
import * as $ from 'jquery';
import * as html2canvas from "html2canvas";
import { AdminService } from '../../../shared/shared-services/admin/admin.service';
import * as tableexport from 'tableexport';
import { ToastrService } from 'ngx-toastr';
declare const moment: any;

@Component({
  selector: 'app-healthcheck-reports',
  templateUrl: './healthcheck-reports.component.html',
  styleUrls: ['./healthcheck-reports.component.css']
})
export class HealthcheckReportsComponent implements OnInit {
  public reportData: any;
  public options: any;
  public leftoptions: any;
  public data: any;
  public api: any;
  public reportdrillData: any = {};
  public selectedRecord: any;
  public showDrill: boolean = false;
  public showDrillData :boolean = false;
  public isLoading: boolean = false;
  public colours: Array<string>;
  public newColours: any;
  public selecteddrillDate: any;
  public reportdrilldate: any;
  public isdrillLoading: boolean = false;
  public selectedFilter: string;
  public selectedprocess:any;
  public selecteddrillFilter: string;
  public tableOptions: any;
  public weekrangestart:number;
  public weekrangeend:number;
  public processList:any;
  public filterYear:number;
  public header_data :any[]=[];
  public success_data:any[] =[];
  public start_index:number=0;
  public last_index:number =0;
  public total_header:number;
  public total_data :number;
  public reports_list :any;
  public selectedKeys:any[]=[];
  week_values:any;
  constructor(private _financialservice: FinancialService, private _adminservice: AdminService,private _toastr:ToastrService) {
  }

  ngOnInit() {
    this.selectedFilter = "total";
    this.filterYear = (new Date).getFullYear();
    this.weekrangestart=1;
    this.isLoading = true;
    this.colours = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5", "#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"];
    //d3.scale.category20().range().concat(d3.scale.category20b().range().slice(0));
    // var self = this;
    this.loaddata();
  }
  public loaddata(){
    this._financialservice.loadHealthData(this.selectedFilter).subscribe((data: { result: object }) => {
      this.reportData = data.result;
      this.reports_list = data.result;
      this.total_header =  this.reports_list["headers"].length;
      this.total_data = this.reports_list["data"].length;
      this.header_data =  this.reports_list["headers"].slice(this.start_index,5);
     this.success_data =  this.reports_list["data"].slice(this.last_index,5);
      this.isLoading = false;
      this.weekrangeend=this.header_data .length-1;
    });
  }
 
  public truncateto20(processName: string) {
    if (processName && processName.length > 19)
      return processName.slice(0, 20);
    else
      return processName;
  }

  public backtoReport() {
    this.showDrill = false;
  }

  public openDrilldown(wkNmber: string, wkValue: string, procName: string, name: string) {
    let DateOfWeek = moment(moment().format("YYYY")).add(parseInt(wkNmber), 'weeks');
    let monthofWeek = DateOfWeek.format("YYYY, MMMM");
  
    this.selectedRecord = {
      "week_number": wkNmber,
      "week_value": wkValue,
      "week_year": moment().format("YYYY"),
      "proc_name": procName,
      "name": name,
      "DateofWeek": monthofWeek
    };
    if(this.selectedRecord.week_value){
    this.selectedKeys = Object.keys( this.selectedRecord.week_value);
    this.showDrill = true;
    this.showDrillData = true;
    this.reportdrilldate = null;
    this.selecteddrillFilter = this.selectedFilter;
    this.isdrillLoading = true;
    this._adminservice.getDrillDowndataforhealthReport(name, wkNmber, moment().format("YYYY"), this.selectedFilter).subscribe((data: { result: object }) => {
      
      this.drillDownData(data);
    });
  }
  else{
    this.showDrillData = false;
  }
  }

  drillDownData(data) {
    this.reportdrillData = data;
    this.isdrillLoading = false;
    if (this.reportdrillData && this.reportdrillData.result && this.reportdrillData.result.length != 0) {
      let firstRecord = this.reportdrillData.result[0];
      this.drillRuns(firstRecord["day"], firstRecord["records"]);
    }
  }
  public loaddrillReportByFilter(filter: string) {
    this.isdrillLoading = true;
    let selectedRec = this.selectedRecord;
    this._adminservice.getDrillDowndataforhealthReport(selectedRec.name, selectedRec.week_number, moment().format("YYYY"), filter).subscribe((data: { result: object }) => {
      this.drillDownData(data);
    });
  }

  public drillRuns(drillDate: string, drillRuns: any) {
    this.selecteddrillDate = drillDate;
    this.reportdrilldate = drillRuns;
  }

  public loadReportByFilter(filterBy: string) {

      if(this.weekrangestart < 1 || this.weekrangeend < 1){
       this._toastr.info("Week From (or) Week To must be positive numbers !", 'Information!');
        return;
      }
      if(this.weekrangestart > this.weekrangeend){
        this._toastr.info("Week From must be greater than Week To !", 'Information!');
        return;
      }

    this.isLoading = true;
    this._financialservice.loadHealthData(this.selectedFilter).subscribe((data: { result: object }) => {
      this.reportData = {};
      this.reports_list ={};
      let tmpresult = data.result;
      if(this.weekrangestart && this.weekrangeend){
        let weekrangestart = this.weekrangestart;
        let weekrangeend = this.weekrangeend;
        tmpresult["headers"] = tmpresult["headers"].slice(weekrangestart,weekrangeend+1);
        tmpresult["headers"].unshift("week");
        for(var i=0;i< tmpresult["graph_data"].length;i++){
         tmpresult["graph_data"][i].values = tmpresult["graph_data"][i].values.slice(weekrangestart-1,weekrangeend);
        }
    }
    let newtmp = {};
    newtmp["headers"] =tmpresult["headers"];
    if(this.selectedprocess && this.selectedprocess.length>0){
     newtmp["graph_data"]=[];
     newtmp["data"]=[];
      for(let i=0;i<this.selectedprocess.length;i++){
        for(let j=0; j< tmpresult["graph_data"].length;j++){
          if(tmpresult["graph_data"][j].key==this.selectedprocess[i]){
            newtmp["graph_data"].push(tmpresult["graph_data"][j]);
          }
        }
      }
      for(let i=0;i<this.selectedprocess.length;i++){
        for(let j=0; j< tmpresult["data"].length;j++){
          if(tmpresult["data"][j].week==this.selectedprocess[i]){
            newtmp["data"].push(tmpresult["data"][j]);
          }
        }
      }
    }else{
      newtmp["graph_data"] = tmpresult["graph_data"];
      newtmp["data"]=tmpresult["data"];
    }
     
    });
  }

  public getDay(edate: string) {
    var check = moment(edate, 'YYYY/MM/DD');
    return check.format('D');
  }

  public leftweek(){
    if(this.start_index >=5){
    this.last_index=  this. start_index;
    this.start_index =  this.start_index-5;
    }else{
      this.last_index=  5;
      this.start_index = 0;
    }
    // let week_values;
    this.header_data =  this.reports_list["headers"].slice(this.start_index,this.last_index);
    this.reports_list["data"].forEach(obj=>{
     this.reportsListData(obj);
      })
    if(this.selectedRecord){
      this.openDrilldown( this.header_data[0], this.week_values, this.selectedRecord.proc_name, this.selectedRecord.name)
    }
    console.log( this.start_index,this.last_index);
    }
// public leftDay(name,processname){
//   if(this.start_index >=5){
//     this.last_index=  this. start_index;
//     this.start_index =  this.start_index-5;
//     }else{
//       this.last_index=  5;
//       this.start_index = 0;
//     }
//     this.header_data =  this.reports_list["headers"].slice(this.start_index,this.last_index);
//     this.success_data =  this.reports_list["data"];
//     this.openDrilldown( this.header_data[0], this.success_data[this.header_data[0]], processname, name)
// }
// public rightDay(name,processname){
//   if(this.start_index+5 <=  this.reports_list["headers"].length){
//     this.start_index =  this.start_index+5;
//     this.last_index=  this.start_index+5;
//     this.header_data =  this.reports_list["headers"].slice(this.start_index,this.last_index);    
//     console.log(this.header_data );
//     this.openDrilldown( this.header_data[0], this.reports_list["data"][this.header_data[0]], processname, name)
//   }
// }
reportsListData(obj) {
  if(obj.week === this.selectedRecord.proc_name){
    this.week_values = obj[this.header_data[0]]
  }
}
  public rightweek(){
    if(this.start_index+5 <=  this.reports_list["headers"].length){
      this.start_index =  this.start_index+5;
      this.last_index=  this.start_index+5;
      // let week_values ;
      this.header_data =  this.reports_list["headers"].slice(this.start_index,this.last_index);
      console.log(this.header_data);
      console.log(this.selectedRecord);

      if(this.selectedRecord){ 
      this.reports_list["data"].forEach(obj=>{
       this.reportsListData(obj);
        })
        this.openDrilldown( this.header_data[0],this.week_values, this.selectedRecord.proc_name, this.selectedRecord.name)
      }
    }
  }
  public getDate(edate: string) {
    if (edate == "-")
      return "-";
    var check = moment(edate, 'YYYY/MM/DD  hh:mm:ss');
    return check.format('DD MMM, h:mm:ss a')
  };
}

