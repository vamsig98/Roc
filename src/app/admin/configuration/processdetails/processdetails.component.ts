import { Component, OnInit, ViewEncapsulation, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService, ProcessItem, ProcessList } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-processdetails',
  templateUrl: './processdetails.component.html',
  styleUrls: ['./processdetails.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProcessdetailsComponent implements OnInit {

  lobs = new FormControl();
  Loblist = [];
  public selectedLobs = [];
  public isLoading: boolean;
  public updateLoading : boolean;
  public isSaving: boolean;
  public errorMessage: string;
  public processId: string;
  public procName: string;
  public isSubprocess: boolean = false;
  public process: any;
  public viewCodes: object = {};
  public existingprocess: any;
  public newsubprocess: any;
  public parentprocessesList: any;
  public isNew: boolean = false;
  public addNew: boolean = false;
  public stringParentId: string;
  public general: boolean = true;
  public notification: boolean = false;
  public pulseCheckList: any[] = [];
  public distribution_list: any[];
  public preview_template: boolean = true;
  public SLADistribute = 'none';
  public Distribute = 'block';
  public distrinuteplus: boolean = false;
  public distrinuteminus: boolean = true;
  public SLAdistrinuteplus: boolean = true;
  public SLAdistrinuteminus: boolean = false;
  public SLAkeys: Array<any> = [];
  public Distkeys: Array<any> = [];
  public email_templates: any[] = [];
  public distributions_list: string;
  public sla_distributions_list: string;
  public processes: Array<any> = [];
  public update_process: any;
  public post_process: any;
  public selectedHighlight: any;
  public saveButton: boolean = true;
   msgPrefix = "Process";

  public processobj = {
    "general": [],
    "schedule": [],
    "assets": [],
    "onboarding": {},
    "stakeholders": {}
  }
  public currentSection = 'General';

  public scheduledata: any;
  public assetsdata: any;
  public stakeholders: any = {};
  public button_name: any;
  generalList: any;
  
  constructor(private route: ActivatedRoute, private router: Router, private _adminService: AdminService, private toastr: ToastrService) {
    this.route.params.subscribe(res => { this.processId = res.id; this.procName = res.name });
    this.viewCodes = this._adminService.getprocessCodes();
    this._adminService.isSave = false;
    // this. getGenaralData();
    this.process = {
      "bot_opex_cost_kpi": null,
      "display_name": "",
      "lobs": [],
      "failure_records_kpi": null,
      "is_sub_process": " ",
      "sub_process_prefix": " ",
      "manual_opex_cost_kpi": null,
      "max_idle_time_kpi": null,
      "name": this.procName,
      "parent_process_id": " ",
      "processing_time_kpi": null,
      "savings_per_record": null,
      "show_in_financial_dashboard": false,
      "show_in_processes_list": false,
      "source_type_search": false,
      "volume_backlog_kpi": null,
      "sla_email_template_id": " ",
      "sla_distribution_list": " ",
      "distribution_list": " ",
      "email_template_id": " ",
    }
    this.selectedLobs = this.process.lobs;
    this._adminService.getProcesslistselect().subscribe((data: any) => {
      this.parentprocessesList = data["result"];
      // console.log('parentprocess', this.parentprocessesList);
    });
    // this.parentprocessesList = _adminService.processList;
    this.isLoading = true;
    if (this.processId != "new") {
      this.isNew = false;
      this._adminService.getProcessById(this.procName).subscribe((data: ProcessList) => {
        if (data["result"].length > 0) {
          this.process = data["result"][0];
          this.generalList = data["result"][0];
          this.process.is_configured === true ? this.button_name = "Update" : this.button_name = "Save";
          console.log(this.process);
          if (this.process["distribution_list"]) {
            this.Distkeys = this.process["distribution_list"].split(',');
          }
          if (this.process["sla_distribution_list"]) {
            this.SLAkeys = this.process["sla_distribution_list"].split(',');
          }
        }

        this.existingprocess = JSON.parse(JSON.stringify(this.process));
        if (data["result"].length > 0) {
          if (this.process["parent_process_id"] && this.process) {
            this.isSubprocess = true;
            this.stringParentId = this.process["parent_process_id"];
          } else {
            this.isSubprocess = false;
          }
        } else {
          this.isSubprocess = false;
          this.isNew = true;
          this.processId = "new";
        }
        this.isLoading = false;
      }, (error) => {
        this.errorMessage = error.error;
        this.isLoading = false;
      });
    } else {
      this.addNew = true;
      this.isNew = true;
      this.process = {
        "name": this.procName,
        "display_name": "",
        "db_process": true,
        "RS": this.viewCodes["RS"],
        "RE": this.viewCodes["RE"],
        "RERR": this.viewCodes["RERR"],
        "RPRE": this.viewCodes["RPRE"],
        "RPRO": this.viewCodes["RPRO"],
        "RPOS": this.viewCodes["RPOS"],
        "THR": 0,
        "HTHR": 0,
        "DSBL": 0,
        "PSTART": this.viewCodes["PSTART"],
        "PEND": this.viewCodes["PEND"],
        "PERR": this.viewCodes["PERR"],
        "PID": "",
        "VKPIPD": "",
        "FKPI": "",
        "MCPR": 0,
        "BCPR": 0,
        "_id": "0"
      }

      this.existingprocess = JSON.parse(JSON.stringify(this.process));
      this.isLoading = false;

    }
  }

  ngOnInit() {
    this.selectedHighlight = 'General';
  }

 
  public addSubprocess() {
    this.isSubprocess = true;
    this.isNew = true;
    this.process.display_name = "";
    this.process.name = "";
  }

  // public processcheck(keydistribute) {
  //   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //   if (reg.test(keydistribute) == false) {
  //     this.toastr.warning("please Enater Valid Email !Warning");
  //     return;
  //   }
  //   this.Distkeys.push(keydistribute);
  //   this.distributions_list = "";
  // }

  public saveprocess(process) {
    this.updateLoading = true;
    if (process.display_name == null) {
      this.toastr.error('Name (or) Display name should not be empty !', 'Information!');
      this.updateLoading = false;
      return;
    }
    if (process.volume_backlog_kpi == null) {
      this.toastr.error('Volume Backlog KPI/Day should not be empty !', 'Information!');
      this.updateLoading = false;
      return;
    }
    if (process.processing_time_kpi == null) {
      this.toastr.error('Ideal Process Time(Sec) should not be empty !', 'Information!');
      this.updateLoading = false;
      return;
    }
    if (process.max_idle_time_kpi == null) {
      this.toastr.error('Max. Idle Time(Sec) should not be empty !', 'Information!');
      this.updateLoading = false;
      return;
    }
    this.isSaving = true;
    // let msgPrefix = "Process";

    if (process.is_configured) {
      this.update_process = {
        "condition": { "name": process.name },
        "data": process
      }
      this.update_process.data.failure_records_kpi = this.update_process.data.failure_records_kpi
        != null ? Number(process.failure_records_kpi) : 0;
        delete process["_id"];

      this._adminService.updateProcess(this.update_process).subscribe((data) => {
        this.adminData(data);
      })
    }
    else {
      this._adminService.isSave = true;
      delete process["_id"];
      this.post_process = {
        'volume_backlog_kpi': process.volume_backlog_kpi != null ? Number(process.volume_backlog_kpi) : 0,
        'processing_time_kpi': process.processing_time_kpi != null ? Number(process.processing_time_kpi) : 0,
        'failure_records_kpi': process.failure_records_kpi != null ? Number(process.failure_records_kpi) : 0,
        'max_idle_time_kpi': process.max_idle_time_kpi != null ? Number(process.max_idle_time_kpi) : 0,
        'manual_opex_cost_kpi': process.manual_opex_cost_kpi != null ? Number(process.manual_opex_cost_kpi) : 0,
        'bot_opex_cost_kpi': process.bot_opex_cost_kpi != null ? Number(process.bot_opex_cost_kpi) : 0,
        'savings_per_record': process.savings_per_record != null ? Number(process.savings_per_record) : 0,
        'show_in_financial_dashboard': process.show_in_financial_dashboard !=undefined ? process.show_in_financial_dashboard : false,
        'show_in_processes_list': process.show_in_processes_list !=undefined ? process.show_in_processes_list : false,
        'bot_count': process.bot_count != null ? process.bot_count: "",
        'snapshot_name': process.snapshot_name != null ? process.snapshot_name: "",
        'infra_type': process.infra_type != null ? process.infra_type: "",
        'hosted_on': process.hosted_on != null ? process.hosted_on: "",
        'description': process.description != null ? process.description: "",
        // 'org_unit': process.org_unit != null ? process.org_unit: "",
        'display_name': process.display_name != null ? process.display_name: "",
        'lobs': process.lobs,
        'onboarding':process.onboarding,
        'name': process.name ,
        'parent_process_id': ""
      }
      this._adminService.createsubProcess(this.post_process).subscribe((data) => {
       this.adminData(data);
       this.router.navigate(['admin', 'configuration', 'processlist']);
      }, (error) => {
        this.isSaving = false;
        this.errorMessage = error.error;
      });
    }
  }
  //   public save(process) {

  //     if (process.display_name.trim().length === 0) {
  //       this.toastr.error('Name (or) Display name should not be empty !', 'Information!');
  //       return;
  //     }
  //     if (process.volume_backlog_kpi == null) {
  //       this.toastr.error('Volume Backlog KPI/Day should not be empty !', 'Information!');
  //       return;
  //     }
  //     if (process.processing_time_kpi == null) {
  //       this.toastr.error('Ideal Process Time(Sec) should not be empty !', 'Information!');
  //       return;
  //     }
  //     if (process.max_idle_time_kpi == null) {
  //       this.toastr.error('Max. Idle Time(Sec) should not be empty !', 'Information!');
  //       return;
  //     }
  //     if (this.isSubprocess == true) {
  //       if (this.stringParentId == undefined) {
  //         this.toastr.error("Parent process name should be selected !", 'Information!');
  //         return;
  //       }
  //     }
  //     this.isSaving = true;
  //     let msgPrefix = "Process";
  //     if (this.isSubprocess == true) {
  //       msgPrefix = "Subprocess"
  //     }
  //     if (this.Distkeys.length > 0) {
  //       // for(var i=0;i<this.Distkeys.length;i++){
  //       process["distribution_list"] = this.Distkeys.join(',');
  //       // } 
  //     }
  //     if (this.Distkeys.length === 0) {
  //       process["distribution_list"] = this.distributions_list;
  //     }

  //     if (this.SLAkeys.length > 0) {
  //       // for(var i=0;i<this.Distkeys.length;i++){
  //       process["sla_distribution_list"] = this.SLAkeys.join(',');
  //       // } 
  //     } if (this.SLAkeys.length === 0) {
  //       process["sla_distribution_list"] = this.sla_distributions_list;
  //     }
  //     if (this.isNew == true) {
  //       if (process.display_name.trim().length === 0) {
  //         this.toastr.error('Name (or) Display name should not be empty !', 'Information!');
  //         return;
  //       }
  //       if (process.volume_backlog_kpi === null) {
  //         this.toastr.error('Volume Backlog KPI/Day should not be empty !', 'Information!');
  //         return;
  //       }
  //       if (process.processing_time_kpi === null) {
  //         this.toastr.error('Ideal Process Time(Sec) should not be empty !', 'Information!');
  //         return;
  //       }
  //       if (process.max_idle_time_kpi === null) {
  //         this.toastr.error('Max. Idle Time(Sec) should not be empty !', 'Information!');
  //         return;
  //       }

  //       if (this.addNew == false) {
  //         process.PID = this.stringParentId;
  //       } else {
  //         if (this.isSubprocess == true) {
  //           process.PID = this.stringParentId;
  //         } else {
  //           delete process["PID"];
  //         }
  //       }

  //       this.post_process = {
  // <<<<<<< HEAD
  //          'bot_opex_cost_kpi': process.bot_opex_cost_kpi != null ? Number(process.bot_opex_cost_kpi) : 0,
  //          'lobs':lobs,
  //           'display_name': process.display_name,
  //           'failure_records_kpi': process.failure_records_kpi != null ? Number(process.failure_records_kpi) : 0,
  //           'is_sub_process': this.isSubprocess,
  //           'sub_process_prefix': process.sub_process_prefix,
  //           'manual_opex_cost_kpi': process.manual_opex_cost_kpi != null ? Number(process.manual_opex_cost_kpi) : 0,
  //           'max_idle_time_kpi': process.max_idle_time_kpi != null ? Number(process.max_idle_time_kpi) : process.max_idle_time_kpi,
  //           'name': process.name,
  //           'parent_process_id': process._id ? process._id : null,
  //           'processing_time_kpi': process.processing_time_kpi != null ?
  // =======
  //         'bot_opex_cost_kpi': process.bot_opex_cost_kpi != null ? Number(process.bot_opex_cost_kpi) : 0,
  //         'display_name': process.display_name,
  //         'failure_records_kpi': process.failure_records_kpi != null ? Number(process.failure_records_kpi) : 0,
  //         'is_sub_process': this.isSubprocess,
  //         'sub_process_prefix': process.sub_process_prefix,
  //         'manual_opex_cost_kpi': process.manual_opex_cost_kpi != null ? Number(process.manual_opex_cost_kpi) : 0,
  //         'max_idle_time_kpi': process.max_idle_time_kpi != null ? Number(process.max_idle_time_kpi) : process.max_idle_time_kpi,
  //         'name': process.name,
  //         'parent_process_id': process._id ? process._id : null,
  //         'processing_time_kpi': process.processing_time_kpi != null ?
  // >>>>>>> develop
  //           Number(process.processing_time_kpi) : process.processing_time_kpi,
  //         'savings_per_record': process.savings_per_record != null ? Number(process.savings_per_record) : 0,
  //         'show_in_financial_dashboard': process.show_in_financial_dashboard,
  //         'show_in_processes_list': process.show_in_processes_list,
  //         'volume_backlog_kpi': process.volume_backlog_kpi != null ? Number(process.volume_backlog_kpi) : 0,
  //         'source_type_search': process.source_type_search,
  //       };
  //       delete process["_id"];
  //       this._adminService.createsubProcess(this.post_process).subscribe((data) => {
  //         this.isSaving = false;
  //         if (data["error"] || data["errors"]) {
  //           let errormessage = "";
  //           if (data["error"]) {
  //             errormessage = data["error"];
  //           }
  //           if (data["errors"]) {
  //             for (var i = 0; i < data["errors"].length; i++) {
  //               errormessage += data["errors"][i] + "<br>";
  //             }
  //           }
  //           this.toastr.error(errormessage, 'Information!');
  //         } else {
  //           this.toastr.success(msgPrefix + ' added successfully!..', 'Information');
  //           this.router.navigate(['admin', 'configuration', 'processlist']);
  //         }
  //       }, (error) => {
  //         this.isSaving = false;
  //         this.errorMessage = error.error;
  //       });
  //     } else {
  //       process["lobs"] = lobs;
  //       this.update_process = {
  //         "condition": { "name": process.name},
  //         "data": process
  //       }
  // <<<<<<< HEAD
  //     this.update_process.data.failure_records_kpi = this.update_process.data.failure_records_kpi 
  //     != null ? Number(process.failure_records_kpi) : 0,
  //       delete process["_id"];
  //       console.log(this.update_process);
  // =======
  //       this.update_process.data.failure_records_kpi = this.update_process.data.failure_records_kpi
  //         != null ? Number(process.failure_records_kpi) : 0,
  //         delete process["_id"];
  // >>>>>>> develop
  //       this._adminService.updateProcess(this.update_process).subscribe((data) => {
  //         this.isSaving = false;
  //         if (data["error"] || data["errors"]) {
  //           let errormessage = "";
  //           if (data["error"]) {
  //             errormessage = data["error"];
  //           }
  //           if (data["errors"]) {
  //             for (var i = 0; i < data["errors"].length; i++) {
  //               errormessage += data["errors"][i] + "<br>";
  //             }
  //           }
  //           this.toastr.error(errormessage, 'Information!');
  //         } else {
  //           this.toastr.success(msgPrefix + ' updated successfully!..', 'Information');
  //           this.router.navigate(['admin', 'configuration', 'processlist']);
  //         }
  //       }, (error) => {
  //         this.isSaving = false;
  //         this.errorMessage = error.error;
  //       });
  //     }
  //   }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    if (sectionId == "General") {
      this.saveButton = true;
    }
    if (sectionId == "Onboarding") {
      this.saveButton = true;
    }

    // if (sectionId == "Schedule") {
    //   this.isLoading = true;
    //   this.saveButton = false;
    //   if (this.processobj.schedule.length > 0) {
    //     this.isLoading = false;
    //     return;
    //   }
    //   else {
    //     this._adminService.getProcessScheduleData(this.process.hosted_on, this.procName).subscribe((data: any) => {
    //       this.scheduledata = data;
    //       this.processobj.schedule = data.result;
    //         this.isLoading = false;
    //     })
    //   }
    // }

    if (sectionId == "Stakeholders") {
      this.isLoading = true;
      this.saveButton = false;
      if (Object.keys(this.processobj.stakeholders).length > 0) {
        this.isLoading = false;
        return;
      }
      else {
        this._adminService.getProcessStakeholdersData(this.process._id).subscribe((data: any) => {
          if (data.result == null) {
            this.stakeholders = {};
            return;
          }
          else {
            this.stakeholders = data.result;
            this.processobj.stakeholders = data.result;
            this.isLoading = false;
          }
        }, (error) => {
          console.log(error);
        })
      }
    }

  }

  adminData(data) {
    this.updateLoading = false;
        this.isSaving = false;
        if (data["error"] || data["errors"]) {
          this.updateLoading = false;
          let errormessage = "";
          if (data["error"]) {
            errormessage = data["error"];
          }
          if (data["errors"]) {
            for (var i = 0; i < data["errors"].length; i++) {
              errormessage += data["errors"][i] + "<br>";
            }
          }
          this.toastr.error(errormessage, 'Information!');
        } else {
          if(this.process.is_configured){
          this.toastr.success(this.msgPrefix + ' updated successfully!..', 'Information');
          // this.router.navigate(['admin', 'configuration', 'processlist']);
        } else {
          this.toastr.success(this.msgPrefix + ' added successfully!..', 'Information');
        }

        }
  }
  scrollTo(section) {
    this.selectedHighlight = section;
    document.querySelector('#' + section)
      .scrollIntoView();
  }
}
