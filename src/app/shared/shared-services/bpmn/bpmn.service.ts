import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable()
export class BpmnService {
  participants: { key: string; name: string; }[];
  settingsPage: boolean;

  constructor(
    private _httpClient: HttpClient,
    private _config: ConfigService
  ) { }

  public loadProcessMap() {
    return this._httpClient.get('/assets/bpmn/subway_map_v_0_3.bpmn', {
        headers: {observe: 'response'}, responseType: 'text'
    });
  }

  ///* get bpmn xml file from db */
  public loadProcessMapxml(){
    if (this.settingsPage === true) {
      if (this._config.config.useMockData) {
        return this._httpClient.get('/assets/mock-data/subwaymapold.json');
      } else {
        let params = new HttpParams().set('module', 'settings');
        return this._httpClient.get(this._config.config.apiUrl + '/admin/operation/subway_map_persist/', { params: params });
      }
    } else {
      if (this._config.config.useMockData) {
        return this._httpClient.get('/assets/mock-data/subwaymap.json');
      } else {
        return this._httpClient.get(this._config.config.apiUrl + '/admin/operation/subway_map_persist/');
      }
    }
  }

  public updateProcessMapxml(bpmnId?:string,bpmnxml?:object){
    if(this._config.config.useMockData){
      return this._httpClient.get('/assets/mock-data/subwaymap.json');
    } else {
      return this._httpClient.put(this._config.config.apiUrl + '/admin/operation/subway_map_persist/'+bpmnId,bpmnxml);
    }
  }

  public getProcessesCurrentState(){
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/processesCurrentStatus.json');
    } else {
      return this._httpClient.get(this._config.config.apiUrl +'/admin/process_metrics');
    }
  }

}
