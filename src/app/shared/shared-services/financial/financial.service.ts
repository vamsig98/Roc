import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable()
export class FinancialService {

  public selectedFilter : any;
  public leftScreenHeight = screen.height + "px";

  constructor(private _httpClient: HttpClient,
    private _config: ConfigService) { }

  /*get financial api records */
  public loadFinancaildata(data:any) {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/financialgetdata.json');
    } else {
      //return this._httpClient.get('assets/mock-data/financialgetdata.json');
      return this._httpClient.post(this._config.config.apiUrl + '/financial', { agg_type: data.aggType, from: data.tmStart, to: data.tmEnd, lob:data.lob });
    }
  }
  public loadLobsdata() {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/mock-data/financialgetdata.json');
    } else {
      return this._httpClient.get(this._config.config.apiUrl + '/lobs');
    }
  }

  /*  report data*/

  public loadReportData(filterBy:string,year:number,dimentions :string){
    if(this._config.config.useMockData){
      return this._httpClient.get('assets/mock-data/reportsdatareports.json');
    }else{
      
      let queryParams: string = "?";
      queryParams += 'dimension=' + dimentions;
      queryParams += '&year=' + year;
      return this._httpClient.get(this._config.config.apiUrl+'/weekly-files-processed/'+filterBy + queryParams);
    }
  }
  public loadHealthData(filterBy:string){
    if(this._config.config.useMockData){
      return this._httpClient.get('assets/mock-data/reportsdata.json');
    }else{
      return this._httpClient.get(this._config.config.apiUrl+'/health-check-weekly');
    }
  }

  /*get drilldownl data based on processName */

  public getdrillDownData(processName:string){
    if(this._config.config.useMockData){
      return this._httpClient.get('assets/mock-data/financial_drill_down.json');
    }else{
      return this._httpClient.get(this._config.config.apiUrl+'/financial_drill_down/'+processName);
    }
  }
}


export interface FSummary {
  "totalSavings": string,
  "avgSavingsPerRun": string
  "avgSavingsPerRecord": string
}
export interface FRecords {
  "processName": string,
  "savingsBaseLine": string,
  "savingAchievedToDate": string,
  "avgSavingsPerRun": string,
  "throughputtoDate": string,
  "avgRecordsperRun": string
}

export interface FLiveSummary{
  "year":string,
  "month":string,
  "week":string,
  "today":string,
  "begining": any;
  "life": any;
}
