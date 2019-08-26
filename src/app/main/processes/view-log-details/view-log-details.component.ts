import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-log-details',
  templateUrl: './view-log-details.component.html',
  styleUrls: ['./view-log-details.component.scss']
})
export class ViewLogDetailsComponent implements OnInit {
  public orgUnits : any;
  public selected: string = "All";
  constructor() { }

  ngOnInit() {
    this.orgUnits = ['All','CDAI', 'CRI', 'Financial', 'HR'];

  }
  lobChanged(opt) {
    this.selected = opt;
  }
}
