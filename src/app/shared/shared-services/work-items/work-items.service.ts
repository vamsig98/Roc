import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Observable, Subject,BehaviorSubject } from "rxjs/Rx";
import { isPending } from 'q';
import { ProcessItem } from '../admin/admin.service';

/**
 * Work-items
 */
@Injectable()
export class WorkItemsService {
  public activeProcess = '';
  public isViewRecordDetails = false;
  public activePage = '';
  SubwayMapActive$: Observable<any>;
  public subwayMapDetails: object;
  private subwayMapSubject = new Subject<any>();
  public workItemDetails: any = {};
  public workItemDetailsFilter = 'All';
  public subwayMapData:object ={};
  
  public hasChanged: Subject<any> = new Subject();
  public hasChangedObserver = this.hasChanged.asObservable();
  queryParam: string = '';

  public processesListSubject: Subject<ProcessItem> = new Subject();
  public processesListObserver = this.processesListSubject.asObservable();


  private _workItems: Array<WorkItem> = [];
  public set workItems(workItems: Array<WorkItem>) {
    this._workItems = workItems;
  }
  public set subwayMap(subwaymap: object) {
    this.subwayMapData = subwaymap;
  }
  public get subwayMap(): object{
   return this.subwayMapData;
  }
 
  public get workItems(): Array<WorkItem> {
    return this._workItems;
  }
 

  putActivesubway(data) {
     // I have data! Let's return it so subscribers can use it!
      // we can do stuff with data if we want
      this.subwayMapSubject.next(data);
  }

  constructor(
    private _httpClient: HttpClient,
    private _config: ConfigService,
    
  ) { 
    this.SubwayMapActive$ = this.subwayMapSubject.asObservable();
  }

  /**
   * Makes an API call to get all the workItems
   * @param data pass the start and limit for the API, if type=all is passed than all processes are passed
   */
  getWorkItems(data: { start: number, limit: number, type?: string }) {
   
    if (data.type) {
      this.queryParam = '?type=' + data.type;
    }

    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/workItems.json');
    } else {
      return this._httpClient.get(this._config.config.apiUrl + '/workitems/active');
      // return this._httpClient.get(this._config.config.apiUrl + '/workitems' + queryParam);
    }
  }


  getWorkItemDetails(id: string, process: string) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/workItemDetail.json');
    } else {
      return this._httpClient.get(this._config.config.apiUrl + '/workitems/details/' + id + '/' + process);
    }
  }
  getLogsForTimelineBySourceId(sourceId: string, paginationData?: { start: number, limit?: number }) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/errorRecords.json');
    } else {
      // return this._httpClient.get(this._config.config.apiUrl + '/errorRecords/' + sourceId);
      return this._httpClient.get(this._config.config.apiUrl + '/workitems/details/errors/' + sourceId);
    }
  }

  updateBotsForWorkItem(data) {
    if (this._config.config.useMockData) {
      return this._httpClient.put(this._config.config.apiUrl + '/updateBotForWorkItem.json', data);
    } else {
      return this._httpClient.post(this._config.config.apiUrl + '/addBotToProcess', { processKey: data.processKey, qty: data.qty });
    }
  }

  getRecordsBySourceId(sourceId: string, paginationData?: { start: number, limit?: number }) { 
    let total: number = (this.workItemDetails.recordDetails) ? this.workItemDetails.recordDetails.length : 0;
    return Observable.of({ result: this.workItemDetails.recordDetails || [], total: total });
  }


  getCurrentPreProcessingInfo(sourceId: string, paginationData?: { start: number, limit?: number }) {
    return this._httpClient.get('assets/mock-data/preProcessingInfoBySourceId.json');
  }
  getCurrentProcessingInfo(sourceId: string, paginationData?: { start: number, limit?: number }) {
    return this._httpClient.get('assets/mock-data/processingInfoBySourceId.json');
  }
  getCurrentPostProcessingInfo(sourceId: string, paginationData?: { start: number, limit?: number }) {
    return this._httpClient.get('assets/mock-data/postProcessingInfoBySourceId.json');
  }

  getWorkItemMetaDataByIdAndTime(data) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/workItemMetadataByIdAndTime.json');
    } else {
      return this._httpClient.post(this._config.config.apiUrl + '/process/aggregates', { Key: data.key, agg_type: data.aggType, from: data.tmStart, to: data.tmEnd });

    }
  }


  public static checkIfPendingExists(source: any) {
    let isPendingExists: boolean = false;
   //  for (let i = 0; i < source.length; i++) {
    if (source.status == 'PENDING') {
      isPendingExists = true;
     //   }
    }

    return isPendingExists;
  }
  public static checkIfPendingExistsrecord(source: Array<any>) { 
    console.log(source);
    let isPendingExists: boolean = false;
    for (let i = 0; i < source.length; i++) {
      if (source[i].status == 'PENDING') {
        isPendingExists = true;
        break;
      }
    }
    return isPendingExists;
  }

  getActiveWorkItemsByProcessName(processName) {

    if (this._config.config.useMockData) {

      return this._httpClient.get('assets/mock-data/processActiveWorkItems.json');
    } else { 
      return this._httpClient.get(this._config.config.apiUrl + '/workitems/active/' + processName+'?processing_failures=true');
    }
  }

  getIncompleyteWorkItemsByProcessName(data: { processName: string, start: number, limit: number }) {

    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/processedWorkItems.json');
    } else {

      let queryParams: string = "?";
      queryParams += 'start=' + data.start;
      queryParams += '&limit=' + data.limit;

      return this._httpClient.get(this._config.config.apiUrl + '/incompleteWorkitems/' + data.processName + queryParams);
    }
  }


  getProcessedWorkItemsByProcessName(data: { processName: string, start: number, limit: number, keyvalue:string, selectedmetakey:string }) {
    // console.log("data: ", data);
    if (this._config.config.useMockData) {
      // return this._httpClient.get('assets/mock-data/processedWorkItems.json');
      return this._httpClient.get('assets/mock-data/completedWorkItems.json');
    } else { 
      console.log(data);
      let queryParams: string = "?";
      // queryParams += 'start=' + data.start;
      // queryParams += '&limit=' + data.limit;
      if(data.keyvalue && data.selectedmetakey){
      queryParams += '&source_type=' + data.selectedmetakey;
      queryParams += '&source_name=' + data.keyvalue;
      return this._httpClient.get(this._config.config.apiUrl + '/workitems/completed/' + data.processName + '/' + data.start + '/' + data.limit + queryParams);
      }
      else{
      return this._httpClient.get(this._config.config.apiUrl + '/workitems/completed/' + data.processName + '/' + data.start + '/' + data.limit);
      }
      // return this._httpClient.get(this._config.config.apiUrl + '/processedWorkitems/' + data.processName + queryParams);
    }
  }

  getUserProcesses() {

    

    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/userProcesses.json');
    } else {
      return this._httpClient.get(this._config.config.apiUrl + '/processNames');
    }
  }

  updateSchedule(data,hosted) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/updateSchedule.json');
    } else {
      return this._httpClient.post(this._config.config.apiUrl + '/process/schedules/'+hosted+'?operation=toggle', data);
    }
  }
  getSchedule(data:string) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/updateSchedule.json');
    } else {
      return this._httpClient.get(this._config.config.apiUrl + '/processes/schedules/'+data);
    }
  }

  getStakeholderData(pname){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/stakeholders.json');
    } else {
      return this._httpClient.get(this._config.config.apiUrl + '/read/master_configuration/name/'+pname+'?module=processes_tab');
    }
  }
  killTheProcess(data) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/killTheProcess.json');
    } else {
      return this._httpClient.post(this._config.config.apiUrl + '/workitems/active/kill', data);
    }
  }

}

/**
 * Work-Item - Which contains soruce. For Operational DB
 */
export interface WorkItem {
  process: string,
  key: string,
  items:number,
  metadata:any,
  metrics :Array<string>,
  processName: string,
  triggeredBy: Array<string>,
  availableBots: number,
  botsRunning: number,
  Source: Array<any>,
  jobId: string,
  status: string,
  aggregates: ProcessMetadata,
  tmStarted: number,
  head_key: string,
  head_value: string,
  sourceId: string,
  label: string,
  botsAvailable: any
}

/**
 * Each source like file scheduler
 */
export interface Source {
  sourceId: string,
  jobId: string,
  status: string,
  // details: { preProcess: Array<string>, processing: Array<string>, postProcessing: Array<string> },
  label: string,
  value: any,
  clickable: boolean,
  process?: string,
  key?: string,
  triggeredBy: Array<string>,
  botsAvailable?: number,
  botsRunning?: number,
  tmStarted?: number,
  head_key?: string,
  head_value?: string,
}

/**
 * Data which shows up for pre-processing, processing and post-processing stagies
 */
export interface ProcessData {
  sources: Array<string>
}


/**
 * Record interface
 */
export interface Record {
  recordId: string,
  name: string,
  status: string,
  message: string,
  tags: any,
  timeStamp: string
}


export interface TimelineLog {
  status: string,
  logMessage: string,
  extraInfo: string,
  logTimeFormatted: string,
  tmLog: number
}

export interface ProcessMetadata {
  botCount: any,
  failed: any,
  files: any,
  processed: any,
  processKey?: string,
  Key?: string,
  items?: any
  totalRecords?: any;
  totalFailed : any
}
