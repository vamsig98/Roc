import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminService, ProcessItem, ProcessList } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { constants } from 'os';
declare const moment: any;


@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

  public isLoading: boolean = true;
  public isSaving: boolean;
  public errorMessage: string;
  public openedId: string = "0";
  public searchString: string;
  public processes: Array<ProcessItem> = [];
  public processesList: Array<ProcessList> = [];
  public toconfiguredList: Array<string> = [];
  expandedElement: any;
  public rows: Array<any> = [];
  public columnData: any;

  public payload: any;
  public sortfield: any;
  public orgUnits: any;
  public selected: string = "All";




  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  info: any;
  isProcessesLoading: boolean = false;
  public total: number;
  tableHeight: number;

  // public filterObj = [{
  //   'name': '',
  //   'display_name': '',
  //   'org_unit': '',
  //   'hosted_on': '',
  //   'last_modified_on': '',
  //   'last_modified_on_format': ''
  // }];

  constructor(
    private _adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog
  ) {
    this.tableHeight = window.innerHeight - 58 - 39;
    // this.isLoading = true;
    // this._adminService.getProcessList().subscribe((data: { result: any, to_configured: any }) => {
    //   this.processesList = data.result;
    //   this.toconfiguredList = data.to_configured;
    //   _adminService.processList = data.result;
    //   this.isLoading = false;
    // }, (error) => {
    //   this.errorMessage = error.error;
    //   this.isLoading = false;
    // });
  }



  ngOnInit() {
    this.orgUnits = ['CDAI', 'CRI', 'Financial', 'HR'];
    // const table_sec_height = window.innerHeight - 55 - 58 - 34 - 46 - 48;
    const table_sec_height = window.innerHeight - 241;
    this.itemsPerPage = Math.round(table_sec_height / 36);
    if (this.itemsPerPage < 0) {
      this.itemsPerPage = 0;
    }

    // this.onChangeTable(this.config);
    this.sortfield = { key: 'last_modified_on', sort_order: '-1' };
    this.payload = {
      filter: {},
      sort: this.sortfield,
      pagination: {
        itemsperpage: this.itemsPerPage,
        pageno: 1,
        offset: (this.page - 1) * this.itemsPerPage
      },
    };
    this.processFiltering();
  }
  lobChanged(opt) {
    this.selected = opt;
  }
  pageChange(page) {
    this.page = page;
    this.payload.pagination.pageno = page;
      this.payload.pagination.offset = (this.page - 1) * this.itemsPerPage;
      this.processFiltering();
  }
  clearDateTime(key) {
    this.columnData.headers.forEach((eachkey, ind) => {
      if (eachkey.key === key) {
        this.columnData.headers[ind].searchFilter = '';
        delete this.payload.filter[key];
      }
    });
    this.processFiltering();
  }
  chosenDateTime(event: any) {
    // const selected_date_time = moment(event._selected).format('DD MMM YYYY, h:mma');
    // this.filterObj[0].last_modified_on_format = selected_date_time;
    this.changeFilter();
  }

  // public changePage(page: any, data: Array<any> = this.data): Array<any> {
  //   let start = (page.page - 1) * page.itemsPerPage;
  //   let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  //   return data.slice(start, end);
  // }

  public changeSort(key, sortvalue): any {
    this.sortfield = { key: key, sort_order: sortvalue };
    this.payload.sort = this.sortfield;
    this.processFiltering();
  }

  public changeFilter(): any {
    this.payload.filter = {};
    this.columnData.headers.forEach((field_entry) => {
      if (field_entry.searchFilter !== '') {
        // const obj = {};
        if (field_entry.key === 'last_modified_on') {
          const selected_date_time = moment(field_entry.searchFilter).format('DD MMM YYYY, h:mma');
          this.payload.filter[field_entry.key]  = selected_date_time;
        } else {
          this.payload.filter[field_entry.key]  = field_entry.searchFilter;
        }
      }
    });
    this.processFiltering();
  }
  processFiltering() {
    this.isProcessesLoading = true;
    this._adminService.filterProcessRecords(this.payload).subscribe((data) => {
      this.isProcessesLoading = false;
        this.columnData = data['result'];
        this.total = data['result'].total ? data['result'].total : 50;
    }, (error) => {
     console.log('error', error);
     this.isProcessesLoading = false;
    });
  }


  public onCellClick(data: any): any {
    console.log(data);
  }


  public save() {
    this.isSaving = true;
    this.errorMessage = "";

    let payLoad = [];

    for (let i = 0; i < this.processes.length; i++) {
      let pObj = {};
      pObj[this.processes[i].Key] = this.processes[i].displayName;
      payLoad.push(pObj);
    }

    this._adminService.updateProcessInfo(payLoad).subscribe((data) => {
      this.isSaving = false;
    }, (error) => {
      this.isSaving = false;
      this.errorMessage = error.error;
    });
  }

  public openSubprocess(name) {
    this.openedId = name;
  }

  openDialog(rowdata, ind): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: { name: 'Are you sure to delete the Process', item: rowdata.display_name +'?' , title:'Delete' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.processesList.splice(ind, 1);
    });
  }

  public deleteProcess(process,index) {

    let dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: { name: 'Are you sure to delete the Process', item: process.display_name + '?' , title:'Delete' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._adminService.deleteProcessById(process._id).subscribe((data) => {
            this.toastr.success('Processes deleted successfully!..', 'Message From Admin');
            this.processesList.splice(index, 1);
        }, (error) => {
          this.errorMessage = error.error;
        });
      }
    });
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
