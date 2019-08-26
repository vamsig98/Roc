import { Component, OnInit, OnChanges, OnDestroy, ElementRef, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { WorkItem, WorkItemsService } from '../../../shared/shared-services/work-items/work-items.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService, ProcessItem } from '../../../shared/shared-services/admin/admin.service';
import { MatExpansionPanel } from '@angular/material';


@Component({
  host: {
    '(document:click)': 'BodyClick($event)'
  },
  selector: 'app-processes-list',
  templateUrl: './processes-list.component.html',
  styleUrls: ['./processes-list.component.scss']
})
export class ProcessesListComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;
  toppingList: string[] = ['CDAI', 'FINANCE', 'CRI', 'HR', 'Not Associated'];
  public filterLOB: any;

  public showLobFilter = false;
  public showLegendBox = false;
  public checkedAll = false;
  public selectedStatus = [];
  public selectedFilter = [];
  public participants = [];

  public allProcesses: any;
  public allProcessesTemp: any;

  public customCollapsedHeight: string = '22px';
  public customExpandedHeight: string = '22px';
  public searchString: '';
  public isLoading: boolean;
  public errorMessage: string;

  public processes: Array<ProcessItem> = [];
  public totalProcesses: number = 0;

  private _subHandle: Subscription;
  private _subRouteHandle: Subscription;

  private _selectedProcessId: string;
  public showfilterBox = false;
  public leftMenuHeight: number;
  public parent_name: any;


  constructor(
    public _workItemService: WorkItemsService,
    private _activeRouter: ActivatedRoute,
    private _adminService: AdminService,
    private _router: Router,
    private _eref: ElementRef,
  ) {
    // this.getWorkItemsProcess();
    this.getWorkItemsLobsProcesses();
    this.checkProcessIdInRoute();

    this.leftMenuHeight = window.innerHeight - 45;

  }

  public BodyClick() {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showLobFilter = false;
    }
  }


  public checkProcessIdInRoute() {
    if (this._subHandle) {
      this._subHandle.unsubscribe();
    }
    this._subHandle = this._activeRouter.params.subscribe((params) => {
      console.log('params.processId', params.processId);
      this.changeSelectedProcess(params.processId);
    });
  }

  ngOnInit() {
    console.log('', this.allProcesses);
    // console.log('qqqqq', this.allProcesses[0].group.parent.display_name);
    // this.isActiveProcess = this.allProcesses.length > 0 ? this.allProcesses[0].group.child[0].displayName : '';
    // console.log('this.isActiveProcess', this.isActiveProcess);
  }
  closeOtherPanels(openPanel: MatExpansionPanel) {
    this.panels.forEach(panel => {
      if (panel !== openPanel) {
        panel.close();
      }
    });
  }


  ngOnChanges() {
    this.updateSideContentView();

  }
  public getWorkItemsLobsProcesses() {
    this.isLoading = true;
    // this.processes = [];
    this.allProcesses = [];
    this.participants = [];

    this._adminService.getLOBProcessList().subscribe((data) => {
      console.log('data', data);
      this._workItemService.activeProcess = data[0].group.child[0]['displayName'];
      this.allProcesses = data;
      this.allProcessesTemp = this.allProcesses;
      // this.totalProcesses = this.processes.length;
      this.allProcesses.forEach((eachtemp, ind) => {
        console.log(eachtemp['group']['parent']['display_name']);
        this.participants.push(this.allProcesses[ind]['group']['parent']['display_name']);
      });

      console.log('this.participants', this.participants);
      this.isLoading = false;
      this.updateSideContentView();
    }, (error) => {
      this.errorMessage = error.error;
      this.isLoading = false;
    });

  }

  public getWorkItemsProcess() {
    this.isLoading = true;
    this.processes = [];
    this._adminService.operationgetProcessList().subscribe((data: { result: Array<ProcessItem> }) => {
      this.processes = data.result;
      this.totalProcesses = this.processes.length;
      this.isLoading = false;
      this.updateSideContentView();
    }, (error) => {
      this.errorMessage = error.error;
      this.isLoading = false;
    });
    // public getWorkItems() {
    //   this.isLoading = true;
    //   this.processes = [];
    //   this._workItemService.getUserProcesses()
    //     .subscribe((data: { result: Array<ProcessItem>, total: number }) => {
    //       this.processes = data.result;
    //       this.totalProcesses = data.total;
    //       this.isLoading = false;
    //       this.updateSideContentView();
    //     }, (error) => {
    //       this.isLoading = false;
    //       this.errorMessage = error.error;
    //     });
  }
  // private updateSideContentView() {
  //   if (!this.processes.length) {
  //     return;
  //   }

  //   let process: ProcessItem;
  //   for (let i = 0; i < this.processes.length; i++) {
  //     if (this.processes[i].name == this._selectedProcessId) {
  //       process = this.processes[i];
  //       break;
  //     }
  //   }

  //   if (!process && this.processes.length) {
  //     this._router.navigate(['app', 'processes', this.processes[0].name]);
  //     return;
  //   }

  //   this._workItemService.processesListSubject.next(process);
  // }


  private updateSideContentView() {
    if (!this.allProcesses.length) {
      return;
    }
    let process: ProcessItem;
    for (let k = 0; k < this.allProcesses.length; k++) {
      for (let i = 0; i < this.allProcesses[k].group.child.length; i++) {
        if (this.allProcesses[k].group.child[i].name === this._selectedProcessId) {
          process = this.allProcesses[k].group.child[i];
          this.parent_name = this.allProcesses[k].group.parent.display_name
          console.log('this.allProcesses[k]', this.allProcesses[k], k);
          this._workItemService.activeProcess = process['displayName'];
          break;
        }
      }
    }
    if (!process && this.allProcesses[0].group.child.length) {
      this._router.navigate(['app', 'processes', this.allProcesses[0].group.child[0].name]);
      return;
    }

    this._workItemService.processesListSubject.next(process);
  }


  ngOnDestroy() {
    console.log(this._subHandle, "1111");
    console.log(this._subRouteHandle, "2222")
    if (this._subHandle) {

      this._subHandle.unsubscribe();
    }
    if (this._subRouteHandle) {
      this._subRouteHandle.unsubscribe();
    }
  }

  activeSelectedProcess(processDisplayName) {
    console.log('processDisplayName', processDisplayName);
    this._workItemService.activeProcess = processDisplayName;

  }
  hideLobFilter() {
    this.showLobFilter = false;
  }

  public changeSelectedProcess(processKey: string) {
    console.log(processKey);

    this._selectedProcessId = processKey;

    this.updateSideContentView();

  }

  setLobFilter(filterLOB) {
    console.log('filterLOB', filterLOB);
    this.allProcessesTemp = [];
    this.filterLOB.forEach((eachLob, index) => {
      if (eachLob === 'ALL') {
        this.allProcessesTemp = this.allProcesses;
        return;
      } else {
        this.allProcesses.forEach((eachtemp, ind) => {
          console.log(this.allProcesses[ind]['group']['parent']['display_name']);
          if (eachLob === this.allProcesses[ind]['group']['parent']['display_name']) {
            this.allProcessesTemp.push(this.allProcesses[ind]);
          }
        });

      }
    });
  }

  openLobFilter() {
    this.showLobFilter = !this.showLobFilter;
  }

  public toggleselection(x) {
    if (x === 'All') {
      this.checkedAll = !this.checkedAll;
      if (this.checkedAll) {
        this.selectedStatus = [];
        for (let i = 0; i < this.participants.length; i++) {
          this.selectedStatus.push(this.participants[i]);
        }
      } else {
        this.selectedStatus = [];
      }
    } else {
      const index = this.selectedStatus.indexOf(x);
      if (index > -1) {
        this.selectedStatus.splice(index, 1);
      } else {
        this.selectedStatus.push(x);
      }

      if (this.participants.length === this.selectedStatus.length) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    }
    if (this.selectedStatus.length === 0) {
      // this.participants = this.participants;
      this.allProcessesTemp = this.allProcesses;
    }
    this.reRuildLeftMenu();
  }

  reRuildLeftMenu() {
    this.allProcessesTemp = [];
    if (this.selectedStatus.length === 0) {
      this.allProcessesTemp = this.allProcesses;
    } else {
      this.selectedStatus.forEach((eachLob, index) => {
        this.allProcesses.forEach((eachtemp, ind) => {
          if (eachLob === this.allProcesses[ind]['group']['parent']['display_name']) {
            this.allProcessesTemp.push(this.allProcesses[ind]);
          }
        });
      });
    }
  }

}
