import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { SaveUser } from '../user/user.service';
import { ROLE_TYPE_SUPER_ADMIN, ROLE_TYPE_ADMIN, ROLE_TYPE_OPERATOR, ROLE_TYPE_SUPPORT } from '../auth/auth.service';
import { ICON_REGISTRY_PROVIDER_FACTORY } from '@angular/material';
import { Hosted } from 'protractor/built/driverProviders';
import { Subject } from 'rxjs';

@Injectable()
export class AdminService {
  constructor(
    private _httpClient: HttpClient,
    private _config: ConfigService
  ) { }
    public isSave = false;
  public processList: any;

  
  public changePassword(data: { username: string, password: string }) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminChangePassword.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/password', data);
    }
  }

  public filterProcessRecords(data1: { username: string, password: string }) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminProcessRecords.json');
    } else {
      // return this._httpClient.get('assets/mock-data/adminProcessRecords.json');
      return this._httpClient.post(this._config.config.adminApiUrl +'/processes', data1);
    }
  }

  public updateUser(user: SaveUser) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
    } else {
      return this._httpClient.put(this._config.config.adminApiUrl + '/admin/users', user);
    }
  }
  public createUser(user: SaveUser) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/users', user);
    }
  }

  // public deleteUser(data: { username: string }) {
  //   if (this._config.config.useMockData) {
  //     return this._httpClient.get('assets/mock-data/adminDeleteUser.json');
  //   } else {
  //     return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/users/' + data.username);
  //   }
  // }

  public deleteRoleById(data: { id: string }) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminDeleteUser.json');
    } else {
      return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/roles/' + data.id);
    }
  }

  public getUserByUsername(data: { username: string }) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminUserByUserName.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/admin/users/' + data.username);
    }
  }
  // public getUsersList(data: { start?: number, limit?: number }) {
  //   if (this._config.config.useMockData) {
  //     return this._httpClient.get('assets/mock-data/adminUsersList.json');
  //   } else {
  //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/users');
  //   }
  // }

  // public getDivisions() {
  //   if (this._config.config.useMockData) {
  //     return this._httpClient.get('assets/mock-data/adminDivisions.json');
  //   } else {
  //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/divisions');
  //   }
  // }
  // public getRoles() {
  //   if (this._config.config.useMockData) {
  //     return this._httpClient.get('assets/mock-data/adminRoles.json');
  //   } else {
  //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/roles');
  //   }
  // }
  public getRoleById(data: { id: string }) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminRoles.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/admin/roles/' + data.id);
    }
  }
  public updateRole(user1: SaveRole) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
    } else {
      return this._httpClient.put(this._config.config.adminApiUrl + '/admin/roles', user1);
    }
  }
  public createRole(dataCreate: SaveRole) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/roles', dataCreate);
    }
  }

  // public getBasicInfo() {
  //   if (this._config.config.useMockData) {
  //     return this._httpClient.get('assets/mock-data/adminGetBasicInfo.json');
  //   } else {
  //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/config');
  //   }
  // }
  public updateBasicInfo(data2: any) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminGetBasicInfo.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/config', data2);
    }
  }
  // public getProcessInfo() {
  //   if (this._config.config.useMockData) {
  //     return this._httpClient.get('assets/mock-data/adminGetProcesses.json');
  //   } else {
  //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/processNames');
  //   }
  // }
  public updateProcessInfo(updatedata) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminGetProcessesInfo.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/processNames', updatedata);
    }
  }
  /*admin processList collection */
  public getProcessList() {
    if (this._config.config.useMockData) {  
      return this._httpClient.get('assets/mock-data/adminGetProcessesList.json');
    } else { 
      return this._httpClient.get(this._config.config.adminApiUrl +'/processes?module=subwaymap ');
      // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/');
    }
  }
  public getProcesslistselect() {
    if (this._config.config.useMockData) {
       return this._httpClient.get('assets/mock-data/process_namesbyshow.json');

    } else {
      let queryParams: string = "?";
      queryParams += 'configure=1';
    //  return this._httpClient.get(this._config.config.adminApiUrl + '/processes')
    return this._httpClient.get(this._config.config.adminApiUrl +'/processes'+ queryParams);
     // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/');
    }
  }
  public  operationgetProcessList() {
    if (this._config.config.useMockData) {
       return this._httpClient.get('assets/mock-data/process_names.json');

    } else { 
      let queryParams: string = "?";
      queryParams += 'flat_child=1';
    //  return this._httpClient.get(this._config.config.adminApiUrl + '/processes')
    return this._httpClient.get(this._config.config.adminApiUrl +'/processes'+ queryParams);
     // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/');
    }
  }

  public  getLOBProcessList() {
    if (this._config.config.useMockData) {
       return this._httpClient.get('assets/mock-data/lob_processes_names.json');

    } else { 
      let queryParams: string = "?";
      queryParams += 'flat_child=1';
    return this._httpClient.get(this._config.config.adminApiUrl + '/lobs/processes');
    }
  }

  /* admin subway process and subprocess list  */
  // public getProcessListforSubway() {
  //   if (this._config.config.useMockData) {
  //     return this._httpClient.get('assets/mock-data/adminGetProcessesListforSubway.json');
  //   } else {
  //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/process_sub_processes/');
  //   }
  // }


  /*get processs from admin processList collection */
  public getProcessById(processname) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminGetProcessesById.json');
    } else { 
      return this._httpClient.get(this._config.config.adminApiUrl +'/read/master_configuration/name/'+processname)

      // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/' + processId);
    }
  }
  public GetsmtpServer() {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/admin/email_config');
    }
  }
  public testSmtp(smtpdata){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/email_config/test',smtpdata);
    }
  }
  public putsmtpServer(smtpId,smtpData) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.put(this._config.config.adminApiUrl + '/admin/email_config/'+smtpId,smtpData);
    }
  }
  public postsmtpServer(smtpdata) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/email_config',smtpdata);
    }
  }

  // get userslist
  public getUmUsersList() {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/umUsers.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/um/users');
    }
  }

  public updateLobs(data) {
    console.log(data);
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/um/lobs/assign', data);
    }
  }

  public getLobsTemplate() {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/lobtemplate.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/lobs?module=settings');
    }
  }

  public updateLobTemplate(lob_id, templatedata) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/um/lobs/' + lob_id, templatedata);
    }
  }

  public postLobTemplate(templatedata) {
    if (this._config.config.useMockData) {
     return this._httpClient.get('assets/mock-data/lobtemplate.json');
   } else {
    // url: baseurl/api/um/create_lob
     return this._httpClient.post(this._config.config.adminApiUrl + '/um/lobs' , templatedata);
   }
 }

 public deleteLobById(lob_id) {
  if (this._config.config.useMockData) {
    return this._httpClient.get('assets/mock-data/emailtemplateget.json');
  } else {
    // url: baseurl/api/um/delete_lob/756cbce7-6af7-4631-8382-6319df9cb6f2
    return this._httpClient.delete(this._config.config.adminApiUrl + '/um/lobs/' + lob_id);
  }
}

  public getEmailTemplate() {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/email_templates/');
    }
  }
  public updateEmailTemplate(template_id:number,templatedata){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.put(this._config.config.adminApiUrl + '/admin/operation/email_templates/' + template_id,templatedata);
    }
  }
  public PostEmailTemplate(templatedata){
     if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/operation/email_templates/' , templatedata);
    }
  }
 public deleteTemplateById(template_id){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/emailtemplateget.json');
    } else {
      return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/operation/email_templates/'+template_id);
    }
  }

  /*update new process*/
  public updateProcess(process: ProcessList) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminCreateUpdateProcess.json');
    } else { 
      return this._httpClient.put(this._config.config.adminApiUrl + '/update/master_configuration' , process);
      // return this._httpClient.put(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/' + process._id, process);
    }
  }
  /*add new subprocess*/
  public createsubProcess(process: ProcessList) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminCreateUpdateProcess.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/insert/master_configuration', process);

      // return this._httpClient.post(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/', process);
    }
  }
  /*delete process*/
  public deleteProcessById(processId?: string) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminCreateUpdateProcess.json');
    } else {
      return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/' + processId);
    }
  }

  /*set custom financial weekly count  */

  public setCustomvalueforWeeklyreport(customWeek: customWeek) {
    delete customWeek._id;
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/financial_drill_down.json');
    } else {
      return this._httpClient.post(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/', customWeek);
    }
  }
 //update //
  public updateCustomvalueforWeeklyreport(customWeek: customWeek) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/financial_drill_down.json');
    } else {
      return this._httpClient.put(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/'+customWeek._id,customWeek);
    }
  }

   //delete //
   public deleteCustomvalueforWeeklyreport(id: string) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/financial_drill_down.json');
    } else {
      return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/'+id);
    }
  }

  public getweeklyprocessCount(request:any){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/financial_drill_down.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/weekly_pname_count/'+request.pname+"/"+request.week_num+"/"+request.year);
    }
  }

  // public getgeneralMock() {
  //   return this._httpClient.get('assets/mock-data/generalMockData.json');
  // }

  public getCustomValuesofWeeklyReport(){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/financial_drill_down.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/');
    }
  }

  public getDrillDowndataforWeeklyReport(processName:string,week:string,year:string,filterBy:string){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/wrdrilldown.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/admin/weekly_count/'+processName+'/'+week+'/'+year+'/'+filterBy);
    }
  }

  public getDrillDowndataforhealthReport(processName:string,week:string,year:string,filterBy:string){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/wrdrilldown.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/admin/health_check_weekly_count/'+processName+'/'+week+'/'+year);
    }
  }
  public getProcessScheduleData(host,pname){
    if (this._config.config.useMockData) {
      return this._httpClient.get<schedule>('assets/mock-data/schedule.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/process/schedules/'+host+'?operation=crud&process_name='+pname);
    }
  }
  public deleteProcessScheduleddata(host,schedule_id){
    return this._httpClient.delete(this._config.config.adminApiUrl + '/process/schedules/'+host+'?operation=crud&schedule_id='+schedule_id);
  }
  
  public updateProcessScheduleddata(host,schedule_id,data){
    return this._httpClient.put(this._config.config.adminApiUrl + '/process/schedules/'+host+'?operation=crud&schedule_id='+schedule_id, data);
  }

  public saveProcessScheduleddata(host,data){
    return this._httpClient.post(this._config.config.adminApiUrl + '/process/schedules/'+host+'?operation=crud',data);
  }

  public getProcessAssetsData(){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/assets.json');
    } else {
      // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/health_check_weekly_count/'+processName+'/'+week+'/'+year);
    }
  }

  public getProcessStakeholdersData(id){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/stakeholders.json');
    } else {
      return this._httpClient.get(this._config.config.adminApiUrl + '/read/specific/master_configuration/'+id+'/stakeholder_information');
    }
  }

  public saveStakeholderData(data){
    return this._httpClient.put(this._config.config.adminApiUrl + '/update/specific/master_configuration', data);
  }

  public sendEmail(data: { firstname: any , lastname : any , email : any}){
    return this._httpClient.post(this._config.config.adminApiUrl + '/email/send', data);
  }

  public deleteUser(data){
    return this._httpClient.delete(this._config.config.adminApiUrl + '/users/delete/um_user/'+data);
  }

  public updateSchedule(data,hosted) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/updateSchedule.json');
    } else {
      return this._httpClient.post(this._config.config.apiUrl + '/process/schedules/'+hosted+'?operation=toggle', data);
    }
  }

  public getprocessCodes() {
    return {
      "RS": 201,
      "RE": 210,
      "RERR": 400,
      "RPRE": 301,
      "RPRO": 302,
      "RPOS": 303,
      "PSTART": 102,
      "PEND": 110,
      "PERR": 500
    }
  }

  /**
   * Sets Label text  for the basic info items as API does not sends it.
   * @param data BasicInfo details which API sends.
   */
  public static formatBasicInfo(data: Array<BasicInfo>): Array<BasicInfo> {

    for (let i = 0; i < data.length; i++) {
      switch (data[i].key) {
        case 'es_host':
          data[i].label = 'Elasticseach URL';
          break;

        case 'orch_host':
          data[i].label = 'Orchestrator URL';
          break;

        case 'orch_user':
          data[i].label = 'Orchestrator User Name';
          break;

        case 'orch_pwd':
          data[i].label = 'Orchestrator Password';
          break;
      }
    }

    return data;
  }

  public static get roleTypes() {
    return [ROLE_TYPE_SUPER_ADMIN, ROLE_TYPE_ADMIN, ROLE_TYPE_OPERATOR, ROLE_TYPE_SUPPORT]
  }
}

export interface Admin {
  _id: {
    "$oid": string
  },
  profileImage: string,
  username: string,
  password: string,
  firstname: string,
  lastname: string,
  roles: Array<string>,
  division: string,
  processes: Array<number>
}


export interface schedule {
  schedulename: string;
  schedulevalue: string;
}
export interface Role {
  _id: {
    "$oid": string,
  },
  id: string,
  name: string,
  type?: string,
  processes?: Array<string>
}

export interface Division {
  _id: {
    "$oid": string
  },
  role: Array<string>
}

export interface SaveRole {
  id?: string,
  name: string,
  type?: string,
  spinOffRobots: boolean,
  processes?: Array<string>
}

export interface BasicInfo {
  key: string,
  value: string,
  label?: string
}

export interface ProcessItem {
  bot_opex_cost_kpi:number ,
  display_name: string,
  db_process:boolean,
  failure_records_kpi: number,
  is_sub_process: boolean,
  sub_process_prefix: string,
  manual_opex_cost_kpi:number,
  max_idle_time_kpi: number,
  name: string,
  parent_process_id:string,
  processing_time_kpi:number, 
  savings_per_record:number,
  show_in_financial_dashboard: boolean,
  show_in_processes_list: boolean,
  source_type_search: boolean,
  volume_backlog_kpi :number
  sla_email_template_id:string,
  sla_distribution_list:string,
  distribution_list:string,
  email_template_id:string,
}

export interface ProcessItem {
  Key: string,
  ProcessKey: string,
  ProcessVersion: string,
  IsLatestVersion: boolean,
  IsProcessDeleted: boolean,
  Description: string,
  name: string,
  EnvironmentId: string,
  EnvironmentName: string,
  Id: string,
  isChecked: boolean,
  displayName: string
}
export interface ProcessList {
  _id: string,
  NAME: string,
  DISPLAYNAME: string,
  ISSHOWN: boolean,
  source_type_search:boolean,
  RS: number,
  RE: number,
  RERR: number,
  RPRE: number,
  RPRO: number,
  RPOS: number,
  THR: any,
  HTHR: number,
  DSBL: number,
  PSTART: number,
  PEND: number,
  PERR: number,
  PID: string,
  VKPIPD: string,
  FKPI: string,
  MCPR: number,
  BCPR: number,
  email_template_id:string,
  distribution_list:string
}


const ProcessViewNames = {
  "_Id": "Process Id",
  "NAME": "Process Name",
  "RS": "Record Start Code",
  "RE": "Record End Code",
  "RERR": "Record Error Code",
  "RPRE": "Record Pre Process Code",
  "RPRO": "Record Process Code",
  "RPOS": "Record Post Process Code",
  "THR": "Threshold Value",
  "HTHR": "Hight Threshold Value"
}
export class getProcessViewNames {
  ProcessViewNames
}

export interface customWeek {
  "pname": string,
  "week_num": number,
  "week_count": number,
  "year":number,
  "_id": string
}

export interface generalMock {
  "display_name": string,
    "org_unit": string,
    "description": string,
    "hosted_on": number,
    "infra_type": string,
    "snapshot_name": string,
    "environment_name": string,
    "maximum_bots": number,
    "kpi_name": string,
    "volume_backlog_kpi": string
}

