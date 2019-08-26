import { Component, OnInit } from '@angular/core';
import { AdminService, ProcessItem, customWeek } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-throughput-recon',
  templateUrl: './throughput-recon.component.html',
  styleUrls: ['./throughput-recon.component.scss']
})
export class ThroughputReconComponent implements OnInit {

  public processesList: Array<any>;
  public search: any = {};
  public searchResult: any;
  public searchResultKeys: any;
  public customResults: any;
  public reportCount: any;
  public reportResult: any;
  public isLoadingSearch: boolean = false;
  public isLoadingSaving: boolean = false;
  public isLoadingDeleting: boolean = false;
  public isLoadingProcess: boolean = false;
  public weekCount:number = 0;
  constructor(private _adminservice: AdminService, private toastr: ToastrService) {
    this.isLoadingProcess = true;
    this._adminservice.operationgetProcessList().subscribe(data => {
      this.processesList = data["result"];
      console.log(this.processesList);
      this.isLoadingProcess = false;
    });
    this.getCustomWeeklyReportList();
  }

  ngOnInit() {
    this.search.year = "2018";
  }


  public saveWeekCount(search: any, weekcount: number) {
    this.isLoadingSaving = true;
    let req = {
      "pname": search.selectedProcess,
      "week_num": search.weekNumber,
      "week_count": weekcount,
      "year": search.year,
      "_id": ""
    };
    if (this.reportResult["existing_id"] != null) {
      req._id = this.reportResult["existing_id"];
      this._adminservice.updateCustomvalueforWeeklyreport(req).subscribe(data => {
        this.searchResult = data["result"];
        this.searchResultKeys = Object.keys(data["result"]);
        this.search = {};
        this.reportCount = [];
        this.reportResult = {};
        this.weekCount = 0;
        this.getCustomWeeklyReportList();
        this.isLoadingSaving = false;
        this.toastr.info("Record updated successfully", 'Success!');
      })
    } else {
      this._adminservice.setCustomvalueforWeeklyreport(req).subscribe(data => {
        this.searchResult = data["result"];
        this.searchResultKeys = Object.keys(data["result"]);
        this.search = {};
        this.reportCount = [];
        this.reportResult = {};
        this.weekCount = 0;
        if (data["error"]) {
          this.toastr.error(data["error"], 'Information!');
        } else {
          this.toastr.info("Record saved successfully", 'Success!');
        }
        this.getCustomWeeklyReportList();
        this.isLoadingSaving = false;
      })
    }
  }

  public searchReport(search: any) {
    this.isLoadingSearch = true;
    this.weekCount = 0;
    let req = { "pname": search.selectedProcess, "week_num": search.weekNumber, "year": search.year };
    if (search.selectedProcess == undefined || search.weekNumber == undefined || search.year == undefined) {
      this.isLoadingSearch = false;
      return;
    }
    this._adminservice.getweeklyprocessCount(req).subscribe(data => {
      this.reportResult = data;
      this.reportCount = Object.keys(data);
      this.isLoadingSearch = false;
    });
  }

  public getCustomWeeklyReportList() {
    this._adminservice.getCustomValuesofWeeklyReport().subscribe(data => {
      this.customResults = data["result"];
    });
  }

  public deleteRecord(deleteId) {
    this.isLoadingDeleting = true;
    this._adminservice.deleteCustomvalueforWeeklyreport(deleteId).subscribe(data => {
      this.getCustomWeeklyReportList();
      this.toastr.info("Record deleted successfully", 'Success!');
      this.isLoadingDeleting = false;
    });
  }

  public isIdExist(isId: string) {
    let isIdIndex = isId.toLowerCase().indexOf("id");
    if (isIdIndex == -1) {
      return true;
    } else {
      return false;
    }
  }

  public getDate(date: string) {
    if (date)
      return date.split('.')[0];
  }

}
