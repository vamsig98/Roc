import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-resourcesandsupport',
  templateUrl: './resourcesandsupport.component.html',
  styleUrls: ['./resourcesandsupport.component.scss']
})
export class ResourcesandsupportComponent implements OnInit {
  @Input() stakeholderInformation:any;
  
  closeSideNav: any;
  public arrow_back:boolean = false;
  public arrow_forward:boolean = true;
  @Output() ResourceEvent = new EventEmitter<string>();
  @Output() ResourceShowEvent = new EventEmitter<string>();
  
  constructor() { }
 
  ngOnInit() { }

  getStakeholderCount(user){
    if(user === undefined){
      return 0;
    }
    else{
      return  user["Business Owners"].length + user["Process Owners"].length + user["Technical Support"].length;
    }
  }
 
  hideResource(event) {
    this.arrow_back = true;
    this.arrow_forward = false;
    this.ResourceEvent.emit(event);
  }
  showResource(event) {
    this.arrow_back = false;
    this.arrow_forward = true;
    this.ResourceShowEvent.emit(event);
  }
}
