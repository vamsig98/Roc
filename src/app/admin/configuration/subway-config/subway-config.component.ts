import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames } from "../../../shared/shared-modules/bpmn-js/bpmn-js";
import { CustomPropsProvider } from '../../../shared/shared-modules/props-provider/CustomPropsProvider';
import { BpmnService } from '../../../shared/shared-services/bpmn/bpmn.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subway-config',
  templateUrl: './subway-config.component.html',
  styleUrls: ['./subway-config.component.scss']
})

export class SubwayConfigComponent implements OnInit {
  showpanel: boolean = false;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log(event);
    if (this.edited) {
      if (event["srcElement"]["localName"] === "polyline" || event["srcElement"]["localName"] === "svg" || event["srcElement"]["localName"] === "div") {
        this.edited = true;
      }
      else {
        this.edited = false;
        this.showpanel = true;
      }
    }
    else {
      if (event["srcElement"]["localName"] === "div") {
        this.edited = false;
      }
      if (event["srcElement"]["localName"] === "polyline" || event["srcElement"]["localName"] === "svg") {
        this.edited = true;
        this.showpanel = true;

      }
    }

  }
  public edited: boolean = true;
  public title = 'Angular/BPMN';
  public modeler: any;
  public _zoomScroll: any;
  public isLoading: boolean = false;
  private bpmnData: object;
  private options: any[];
  private participants: any[] = [];
  constructor(private http: HttpClient, public _bpmnService: BpmnService, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem("bpmnfilter") != "undefined")
      this.options = JSON.parse(localStorage.getItem("bpmnfilter"));
    if (this.options) {
      for (var i = 0; i < this.options.length; i++) {
        this.participants.push({ "name": this.options[i].name, "key": this.options[i].id });
      }
    }
    this.isLoading = true;
    setTimeout(() => {
      try {
        this.modeler = new Modeler({
          container: '#canvas',
          width: '100%',
          height: '600px',
          propertiesPanel: {
            parent: '#properties'
          },
          additionalModules: [
            PropertiesPanelModule,
            // Re-use original bpmn-properties-module, see CustomPropsProvider
            { [InjectionNames.bpmnPropertiesProvider]: ['type', OriginalPropertiesProvider.propertiesProvider[1]] },
            { [InjectionNames.propertiesProvider]: ['type', CustomPropsProvider] }
          ]
        });
      } catch (e) {
        console.log(e);
      }
      this._bpmnService.settingsPage = true;
      this._bpmnService.loadProcessMapxml().subscribe((data: any) => {
        this.bpmnData = data.result[0];
        this.modeler.importXML(data.result[0].bpmn, this.handleError);
        this.isLoading = false;
        this._zoomScroll = this.modeler.get(InjectionNames.zoomScroll);
        setTimeout(() => {
          this.zoomOut();
        }, 500);
      }, this.handleError
      );
    }, 1000);
  }

  public handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
      this.isLoading = false;
    }
  }

  public load() {
    const url = '/assets/bpmn/subway_map_v_0_3.bpmn';
    this.http.get(url, {
      headers: { observe: 'response' }, responseType: 'text'
    }).subscribe(
      (x: any) => {
        this.modeler.importXML(x, this.handleError);
      },
      this.handleError
    );
  }

  public save() {
    this.isLoading = true;
    this.modeler.saveXML((err: any, xml: any) => {
      let bpmnId = this.bpmnData["_id"];
      this.participants = [];
      this.options = JSON.parse(localStorage.getItem("bpmnfilter"));
      if (this.options) {
        for (var i = 0; i < this.options.length; i++) {
          this.participants.push({ "name": this.options[i].name, "key": this.options[i].id });
        }
      }
      this._bpmnService.updateProcessMapxml(bpmnId, { "bpmn": xml, "filter": this.participants }).subscribe((data: any) => {
        if (data.result) {
          this.toastr.success("Process Subway Map updated successfully.", "information");
          localStorage.removeItem("bpmnfilter");
        }
        this.isLoading = false;
      }, this.handleError
      )
      // console.log('Result of saving XML: ', err, xml);
    });
  }

  public zoomIn() {
    this._zoomScroll.stepZoom(1);
  }

  public zoomOut() {
    this._zoomScroll.stepZoom(-1);
  }

  public zoomReset() {
    this._zoomScroll.reset();
  }
}
