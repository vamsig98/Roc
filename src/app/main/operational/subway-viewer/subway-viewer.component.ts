import { Component, OnInit, Input, OnDestroy, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { InjectionNames, NavigatedViewer } from "../../../shared/shared-modules/bpmn-js/bpmn-js";

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { ConfigService } from '../../../shared/shared-services/config/config.service';

import { BpmnService } from '../../../shared/shared-services/bpmn/bpmn.service';
import { AdminService, ProcessItem } from '../../../shared/shared-services/admin/admin.service';
import { svg } from 'd3';
import { WorkItem, WorkItemsService } from '../../../shared/shared-services/work-items/work-items.service';
import { flatMap } from 'rxjs/operators';
declare var require: any;
declare var $: any;


@Component({
  selector: 'app-subway-viewer',
  templateUrl: './subway-viewer.component.html',
  styleUrls: ['./subway-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubwayViewerComponent implements OnInit, OnDestroy {
  private _viewer: any;
  private _overlays: any;
  private _canvas: any;
  private _elementRegistry: any;
  private _eventBus: any;
  private _intervalId: any;
  private _zoomScroll: any;
  private _statusCssCls: Array<string>;
  private _activeOverlayId: any;
  private _status_css_mapping: object;
  private _processesStatusData: object;
  private _alive: boolean = true;
  public isLoading: boolean = false;
  public childProcess: Array<string> = [];
  public participants: any[] = [];
  public procgrp: any[] = [];
  public subwayMapdata: object;
  tooltipHTML: HTMLElement;
  tooltipLEFT: string;
  tooltipTOP: string;
  // private viewer_0 = true;
  accordionheight = 365;
  yAxis = 0;
  resizesvg = false;
   isbottomshown:any = "visible";
  ishavingdata:any = "visible";
  @Input('xmlData') public xmldata: any;
  @Input('bpmn_id') public bpmn_id: string;
  selectedLOB_str: string;

  constructor(private _adminService: AdminService, public _bpmnService: BpmnService, private _workItemService: WorkItemsService, private _configService: ConfigService, private router: Router) { }

  loadSubWayMap() {
    this._viewer = new NavigatedViewer({
      container: '#subway_map_viewer_' + this.bpmn_id,
      width: '100%',
      height: '100%'
    });
    this._overlays = this._viewer.get(InjectionNames.overlays);
    this._canvas = this._viewer.get(InjectionNames.canvas);
    this._elementRegistry = this._viewer.get(InjectionNames.elementRegistry);
    this._eventBus = this._viewer.get(InjectionNames.eventBus);
    this._zoomScroll = this._viewer.get(InjectionNames.zoomScroll)
    // this._eventBus.on('element.hover', (e) => {
    //   if ((e.element.type == 'bpmn:IntermediateThrowEvent') && (this._processesStatusData)) {
    //     let statusObject: any = this._processesStatusData[e.element.id];
    //     if (statusObject && statusObject.status != '' && statusObject.status != "INACTIVE") {
    //       let tooltipHTML = '';
    //       let pos: any = { "bottom": 0, "right": -10 }
    //       if (e.originalEvent.offsetX > 400) {
    //         pos.right = 450;
    //       }
    //       if (e.originalEvent.offsetY > 280) {
    //         pos.bottom = 280;
    //       } else {
    //         pos.bottom = e.originalEvent.offsetY - 30;
    //       }
    //       let tmptooltipHTML = this.generateTooltip(statusObject.attribute, statusObject);
    //       this._activeOverlayId = this._overlays.add(e.element.id, {
    //         position: {
    //           bottom: pos.bottom,
    //           right: pos.right,
    //         },
    //         html: '<div>' + tmptooltipHTML + '</div>'
    //       });

    //     }
    //   }
    // });
    this._eventBus.on('element.out', (e) => {
      if ((e.element.type == 'bpmn:IntermediateThrowEvent') && (this._activeOverlayId)) {
        //this._overlays.remove(this._activeOverlayId);
        // this._activeOverlayId = "";
        this.tooltipHTML = HTMLElement.apply('<div style="display:none;"></div>');
      }
    });

    this._eventBus.on('element.click', (e) => {
      if (this._processesStatusData) {
        var data = this._processesStatusData[e.element.id];
        if (data && data.key) { //  && isSubProcessexist == -1) {
          let key = data.key;
          this.router.navigate(['app', 'processes', key]);
        }
      }
    });
    this.loadProcessMap();
  }

  ngOnInit() {
    this._statusCssCls = ['highlight-white', 'highlight-green', 'highlight-red', 'highlight-yellow', 'highlight-blue', 'highlight-black', 'highlight-darkgrey'];
    this._status_css_mapping = {
      'ACTIVE_FLOWING': 'highlight-green',
      'ACTIVE_SLOW': 'highlight-yellow',
      'INACTIVE': 'highlight-white',
      'ACTIVE_NOT_FLOWING': 'highlight-red',
      'FEATURE_OFFLINE': 'highlight-black',
      'NOT_INDEXED': 'highlight-darkgrey',
      'INDEXED': 'highlight-darkgrey',
      'WAITING': 'highlight-darkgrey'
    }
    /* API call for get subprocess list to block the click on subprocess on subwaymap */
    this._adminService.getProcessList().subscribe((data: { result: any, to_configured: any }) => {
      let processes = data.result;
      for (let i = 0; i < processes.length; i++) {
        if (processes[i].children && processes[i].children.length != 0) {
          for (let j = 0; j < processes[i].children.length; j++) {
            this.childProcess.push(processes[i].children[j]["name"]);
          }
        }
      }
    }, (error) => {
      console.log(error);
    });

    if (this._bpmnService.participants && this._bpmnService.participants.length > 0) {

      setTimeout(() => {
        this.loadSubWayMap();
        this.isLoading = false;
        this.setLoader();
        setTimeout(() => {
          this.zoomReset();
        }, 500);
      }, 500);
    }
    setTimeout(() => {
      document.getElementById('subway_dblclick').onkeypress=function(){return false;}
    }, 1000);
  
  }
  ngOnDestroy() {
    this._alive = false;
    if (this._activeOverlayId) {
      this._overlays.remove(this._activeOverlayId);
      this._activeOverlayId = "";
    }
  }

  public setXML(procesId) {
    // var len = procesId.length;
    if (procesId.length === 0) {
      this.participants.forEach(obj => {
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0]).style.visibility = 'visible';
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0]).style.display = "block";
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].nextSibling).style.display = "block";
      });
    }
    this.participants.forEach(obj => {
      let isexist: number = procesId.indexOf(obj.key);
      if (isexist > -1) {
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0]).style.visibility = 'visible';
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0]).style.display = "block";
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].nextSibling).style.display = "block";
      }
      else if (procesId.length !== 0) {
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0]).style.visibility = 'hidden';
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0]).style.display = "none";
        (<HTMLElement>document.querySelectorAll("[data-element-id=" + obj.key + "]")[0].nextSibling).style.display = "none";

      }
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  private loadProcessMap() {
    this._bpmnService.settingsPage = false;
    //this._bpmnService.loadProcessMapxml().subscribe((data: any) => {
    //data.result[0].bpmn
    this._viewer.importXML(this.xmldata, this.handleError);
    this.loadProcessStates();
    this.participants = this._bpmnService.participants; //data.result[0].filter;
    this.getProcessStatesInInterval();
    //}, 
    // (error) => {
    //   console.log("Error in SubWay data call");
    // });
  }

  private setLoader() {
    this.setDefaultWidth();
    var parent = document.getElementsByClassName("highlight-darkgrey");
    if (parent.length != 0) {
      for (var i = 0; i <= parent.length; i++) {
        if (parent[i] && <HTMLElement>parent[i]) {
          var parentchild = (<HTMLElement>parent[i]).getElementsByClassName("djs-visual");
          for (var j = 0; j <= parentchild.length; j++) {

            if (parentchild[j]) {
              var parentchildchild = (<HTMLElement>parentchild[j]).querySelectorAll('circle');
              for (var k = 0; k <= parentchildchild.length; k++) {
                var animationCircle = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform')
                if (parentchildchild[k]) {
                  let circleheight = parentchildchild[k].getAttribute("cx");
                  parentchildchild[k].style.strokeWidth = "3px";
                  if (k == 1) {
                    parentchildchild[k].style.strokeWidth = "0px";
                  }
                  parentchildchild[k].style.strokeDasharray = "5";
                  let circleheightNmr = parseInt(circleheight);
                  animationCircle.innerHTML = '<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="' + 0 + ' ' + circleheightNmr + ' ' + circleheightNmr + ';360' + ' ' + circleheightNmr + ' ' + circleheightNmr + '" keyTimes="0;1" dur="3s" begin="0s" repeatCount="indefinite"></animateTransform>';
                  // let Animationelement = animationCircle.firstElementChild;
                  parentchildchild[k].innerHTML = "";
                  parentchildchild[k].appendChild(animationCircle.firstElementChild);
                }
              }
            }

          }
        }
      }
    }
  }

  public setDefaultWidth() {
    let allCircleElms = document.getElementsByTagName("circle");
    for (let i = 0; i <= allCircleElms.length; i++) {
      if (allCircleElms[i] && allCircleElms[i].style) {
        let circleStrokeWidth = allCircleElms[i].style.strokeDasharray;
        if (circleStrokeWidth != null && circleStrokeWidth != "" && circleStrokeWidth === "5") {
          allCircleElms[i].style.strokeWidth = "1px";
          allCircleElms[i].style.strokeDasharray = "0";
        }
      }
    }
  }
  public generateTooltip = function (tooltipdata, data) {
    let img_clr = '';
    if (data.healthStatus) {
      switch (data.healthStatus) {
        case 'healthy':
          img_clr = 'green';
          break;
        case 'unhealthy':
          img_clr = 'red';
          break;
      }
    }
    let statusMessage = '';
    if (data.status) {
      switch (data.status) {
        case 'ACTIVE_NOT_FLOWING':
          statusMessage = "Active, issues";
          break;
        case 'ACTIVE_FLOWING':
          statusMessage = "Active, acceptable";
          break;
        case 'ACTIVE_SLOW':
          statusMessage = "Active, average";
          break;
        case 'INDEXED':
          statusMessage = "Initiated, waiting";
          break;
        case 'NOT_INDEXED':
          statusMessage = "Initiated, waiting";
          break;
          case 'WAITING':
            statusMessage = "Initiated, waiting";
            break;
    
        default:
          statusMessage = "";
      }
    }
    // let isbottomshown = "visible";
    // let ishavingdata = "visible";
    if (tooltipdata && tooltipdata.failed_records_actual && tooltipdata.failed_records_actual[0] == 0 && tooltipdata.failed_records_actual[1] == 0 && tooltipdata.failed_records_actual[2] == 0) {
      this.ishavingdata = "hidden";
    }
    if (tooltipdata.anticipated_time == undefined || tooltipdata.anticipated_time == "") {
      this.isbottomshown = "hidden";
    }
    let arrowMarker = '', arrowMarkerFail = '', arrowMarkerTotal = '';
    if (tooltipdata.avg_processess_time_actual[1] > tooltipdata.avg_processess_time_actual[2]) {
      arrowMarker = 'arrowdown';
    } else {
      arrowMarker = 'arrowup';
    }
    if (tooltipdata.failed_records_actual[0] > tooltipdata.failed_records_actual[2]) {
      arrowMarkerFail = 'arrowdown';
    } else {
      arrowMarkerFail = 'arrowup';
    }
    if (tooltipdata.total_records_per_day_actual[0] > tooltipdata.total_records_per_day_actual[1]) {
      arrowMarkerTotal = 'arrowdown'
    } else {
      arrowMarkerTotal = 'arrowup'
    }
    if (tooltipdata && tooltipdata.avg_processess_time_actual && tooltipdata.avg_processess_time_actual[1] === null) {
      tooltipdata.avg_processess_time_actual[1] = '-';
    }
    if (tooltipdata && tooltipdata.avg_processess_time_actual && tooltipdata.avg_processess_time_actual[2] === null) {
      tooltipdata.avg_processess_time_actual[2] = '-';
    }
    if (tooltipdata && tooltipdata.failed_records_actual && tooltipdata.failed_records_actual[0] === null) {
      tooltipdata.failed_records_actual[0] = '-';
    }
    if (tooltipdata && tooltipdata.failed_records_actual && tooltipdata.failed_records_actual[2] === null) {
      tooltipdata.failed_records_actual[2] = '-';
    }
    if (tooltipdata && tooltipdata.total_records_per_day_actual && tooltipdata.total_records_per_day_actual[0] === null) {
      tooltipdata.total_records_per_day_actual[0] = '-';
    }
    if (tooltipdata && tooltipdata.total_records_per_day_actual && tooltipdata.total_records_per_day_actual[1] === null) {
      tooltipdata.total_records_per_day_actual[1] = '-';
    }

    let clsName = data.healthStatus === "unhealthy" ? 'content' : 'health_green';
    let headerclr = data.status === "WAITING" ? 'active_waiting': data.status === "NOT_INDEXED" ? 'active_waiting' : data.status === "ACTIVE_SLOW" ? 'active_slow' : data.status === "ACTIVE_NOT_FLOWING" ? 'active_issues' : data.status === "ACTIVE_FLOWING" ? 'active_acceptable' : data.status === "INDEXED" ? 'active_waiting' : 'active_issues';
    let tmpHtml = `
    <div class="subway-viewer-nodes-tooltip">
      <div class="subway-tooltip-header `+ headerclr+`">
        <span class="text">Process Throughput : </span><span class="status">`+ statusMessage + `</span>
      </div>
      <div class="row">
        <div class="col-lg-12 headercontent">
          <span class="headertext"> Bots Health</span>
        </div>
        <div class="row">
          <div class="col-lg-9 headercontent">
            <img class="icon" src="/assets/images/bitmap`+ img_clr + `.png"><span class='` + clsName + "'>" + data.healthStatus + ` </span>
          </div>
        </div>
        <div class="hr"></div>
        <div class="subway-tooltip-label">Active Bots :  <span class="subway-tooltip-value">`+ tooltipdata.active_bots + `</span>
        Standby Bots  :  <span class="subway-tooltip-value">`+ tooltipdata.stand_by_bots + `</span></div>
      </div>
      <div class="subway-tooltip-main-container">
        <table class="table">
          <tr>
            <th>   </th>
            <th> Actuals </th>
            <th> KPI </th>
          </tr>
          <tr>
            <td> Avg Processing Time/Record</br>(in Seconds)</td>
            <td class="timevalue">`+ tooltipdata.avg_processess_time_actual[1] + `<img src="/assets/images/` + arrowMarker + `.png" class="tooltip_image"></td>
            <td class="timevalue">`+ tooltipdata.avg_processess_time_actual[2] + `</td>
          <tr>
          <tr>
            <td> Failed Records</br>(in %)</td>
            <td class="timevalue">`+ tooltipdata.failed_records_actual[0] + `<img src="/assets/images/` + arrowMarkerFail + `.png" class="tooltip_image"></td>
            <td class="timevalue">`+ tooltipdata.failed_records_actual[2] + `</td>
          <tr>
          <tr>
            <td> Total Records/day</td>
            <td class="timevalue">`+ tooltipdata.total_records_per_day_actual[0] + `<img src="/assets/images/` + arrowMarkerTotal + `.png" class="tooltip_image"></td>
            <td class="timevalue">`+ tooltipdata.total_records_per_day_actual[1] + `</td>
          <tr>
        </table>
        <div class="row tooltip-bottom">
          <div class="col-lg-6 text-center">
            <span class="timeclass"> Anticipated Time </span></br>
            <span class="timevalue">`+ tooltipdata.anticipated_time + `</span>
          </div>
          <div class="col-lg-6 text-center">
            <span class="timeclass"> Up Time </span></br>
            <span class="timevalue">`+ tooltipdata.up_time + `</span>
          </div>
        </div>
      </div>
    </div>`;
    return tmpHtml;
  }
  private compareValues(firstNumber: number, secondNumber: number) {
    if (firstNumber <= secondNumber)
      return "ok";
    else
      return "notok";
  }
  private SecondsTohhmmss = function (totalSeconds: number) {
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100
    var result = (hours > 0 ? hours + "h:" : '');
    result += (minutes > 0 ? minutes + "m:" : '');
    result += (seconds > 0 ? seconds < 10 && seconds >= 1 ? "0" + seconds + "s:" : seconds + "s:" : seconds == 0 ? "0s:" : seconds + "s:");
    return result.trim().slice(0, -1);
  }
  private loadProcessStates() {
    this.isLoading = true;
    this._workItemService.getWorkItems({ start: 1, limit: -1 })
      .subscribe((data: any) => {
        this._processesStatusData = data.result["subway_map"];
        setTimeout(() => {
          //this.zoomReset();
          this.setRoundEdges();
          this._repaintMap();
        }, 100);

        this.setLoader();
        this.isLoading = false;
      }, (error) => {
        console.log("Error in SubWay data call");
      });
  }

  private getProcessStatesInInterval() {
    IntervalObservable.create(this._configService.config.subWayMapPollingTime)
      .takeWhile(() => {
        return this._alive;
      })
      .subscribe(() => {
        this.loadProcessStates();
      });
  }

  private _repaintMap() {
    for (let p in this._processesStatusData) {
      this.setMarkers(p, this._processesStatusData[p].status, this._processesStatusData[p].healthStatus, this._processesStatusData[p]);
    }
  }

  private setRoundEdges() {
    let marker = document.getElementsByTagName('marker');
    for (let i = 0; i < marker.length; i++) {
      if (marker[i]) {
        marker[i].setAttribute('style', 'marker-end: url(#marker-circle)');
      }
    }
  }

  private setMarkers(canvasEl, styleVal, healthStatus, canvasObj) {
    // let marker = document.getElementsByTagName('marker');
    // for (let i = 0; i < marker.length; i++) {
    //   if (marker[i]) {
    //     marker[i].setAttribute('style', 'marker-end: url(#marker-circle)');
    //   }
    // }
    //const allCircleElms: any = document.getElementsByTagName("circle");
    // for (let i = 0; i <= allCircleElms.length; i++) {
    //   if (allCircleElms[i] && allCircleElms[i].style) {
    //     //  allCircleElms[i].style.strokeWidth = "2px";
    //     //  allCircleElms[i].style.stroke = "#1C1B3B";
    //   }
    // }

    /* to hide lob name */
    if (document.querySelectorAll("[data-element-id='" + canvasEl + "']") && document.querySelectorAll("[data-element-id='" + canvasEl + "']")[0]) {
      let custom_circls = Array.from(document.querySelectorAll("[data-element-id='" + canvasEl + "']")[0].querySelectorAll("circle"));
      custom_circls.forEach(item => {
        item.style.strokeDasharray = '0';
      });
    }
    let tspan = document.getElementsByTagName('tspan');
    this._bpmnService.participants.forEach((item) => {
      for (let i = 0; i < tspan.length; i++) {
        if (tspan[i].innerHTML === item.name) {
          tspan[i].style.display = 'none';
        }
      }
    });

    try {
      this._statusCssCls.forEach(cls => {
        if (cls) {
          this._canvas.removeMarker(canvasEl, cls);
        }
      });

      if (styleVal) {
        let inner_img_clr = 'bitmapgreen';
        if (healthStatus) {
          switch (healthStatus) {
            case 'healthy':
              inner_img_clr = 'bitmapgreen';
              break;
            case 'unhealthy':
              inner_img_clr = 'bitmapred';
              break;
          }
        }

        let activeCls = '';
        let strokestyle = '';
        let loadclass = '';
        switch (styleVal) {
          case 'ACTIVE_FLOWING':
            activeCls = "#518b11";
            strokestyle = "#red"
            break;
          case "ACTIVE_NOT_FLOWING":
            activeCls = "#d0021b";
            strokestyle = "#f85f71"
            break;
          case "ACTIVE_SLOW":
            activeCls = "#ffb600";
            strokestyle = "#fedd74"
            break;
          case "FEATURE_OFFLINE":
            activeCls = "#000000";
            strokestyle = "#4d4d4d";
            break;
          case "INACTIVE":
            activeCls = "#686868";
            strokestyle = "#bfbfbf"
            break;
          case "INDEXED":
          case "NOT_INDEXED":
          case "WAITING":
            loadclass = "loader";
            break;
        }

        if (inner_img_clr !== '') {
          this._overlays.remove({ element: canvasEl });
          var shape = this._elementRegistry.get(canvasEl); // to get the height and width of element
          var $overlayHtml =
            $('<div class="diagram-note" data-canvas-id=' + canvasEl + '><svg height="16" width="16"> <circle cx="7" cy="7" r="5" stroke-width="3" fill=' + activeCls + ' stroke = ' + strokestyle + ' /> </svg><img class="fa-robot" src="/assets/images/' + inner_img_clr + '.png " alt = " " /></div>') .css({
                width: shape.width,
                height: shape.height
              });
          let bot_count = canvasObj.attribute ? (canvasObj.attribute.active_bots ? canvasObj.attribute.active_bots : 0) : 0;
          var $overBotCountHtml = $('<div class="bot-count bot-count-healthy">' + bot_count + ' Bot' + (bot_count == 1 ? '' : 's') + '</div>');
          //var this = this;
          $overlayHtml.click(function (e) {
            let processId = e.currentTarget.dataset.canvasId;
            this.router.navigate(['app', 'processes', processId]);
          }.bind(this));
          $overlayHtml.mouseleave(function (e) {
            this.tooltipHTML = '<div style="display:none;"></div>';
          }.bind(this));
          $overlayHtml.mouseover(function (e) {
            let processId = e.currentTarget.dataset.canvasId;
            let statusObject: any = this._processesStatusData[processId];
            if (statusObject && statusObject.status != '' && statusObject.status != "INACTIVE") {
              let tooltipHTML = '';
              let pos: any = { "bottom": 0, "right": -10 }
              if (e.pageX > 400) {
                pos.left = e.pageX - 400 - 40;
              } else {
                pos.left = e.pageX + 40;
              }
              if (e.pageY > 250 && e.pageY < 400) {
                pos.top = e.pageY - 200 - 40;
              } else if (e.pageY > 400) {
                pos.top = e.pageY - 400;
              } else {
                pos.top = e.pageY - 5;
              }
              let tmptooltipHTML = this.generateTooltip(statusObject.attribute, statusObject);
              this.tooltipHTML = '<div class="subway-map-custom-style">' + tmptooltipHTML + '</div>';
              this.tooltipTOP = pos.top + "px";
              this.tooltipLEFT = pos.left + "px";
              console.log(e.originalEvent);
            }
          }.bind(this));

          this._overlays.add(canvasEl, styleVal, {
            position: {
              bottom: 30,
              right: 30
            },
            html: $overlayHtml
          });
        }
        if (loadclass) {
          this._overlays.add(canvasEl, styleVal, {
            position: {
              bottom: 30,
              right: 30
            },
            html: '<div style="margin-top: -15px;margin-left: -6px;"><img src="/assets/images/loader.gif" style="width: 17px;border-radius:50%"></div>'
          });
        }
        this._canvas.addMarker(canvasEl, styleVal);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public zoomIn() {
    this._zoomScroll.stepZoom(1);
  }

  public zoomOut(id) {
    this._zoomScroll.stepZoom(-1);
  }

  public zoomReset() {
    this._zoomScroll.reset();
  }

  public zoomup(delta) {
    this._zoomScroll.scroll(delta);
  }

  onValueChanged(event) {
    this.accordionheight = event;
    let parent_lob = $("#subway_map_viewer_" + this.selectedLOB_str).parents()[6];
    parent_lob.setAttribute('style', 'height:' + (this.accordionheight) + ';margin-bottom:10px');
    let subway_map_viewer: any = document.getElementById("subway_map_viewer_" + this.selectedLOB_str);
    if (subway_map_viewer) {
      subway_map_viewer.style.height = (this.accordionheight) + "px";
    }
    // setTimeout(() => {
    //   this.zoomReset();
    // }, 300);
  }

  selectedLOB(lob: string) {
    this.selectedLOB_str = lob;
  }

}
