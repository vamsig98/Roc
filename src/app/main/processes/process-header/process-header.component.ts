import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkItem } from '../../../shared/shared-services/work-items/work-items.service';
import { ProcessItem } from '../../../shared/shared-services/admin/admin.service';

@Component({
  selector: 'app-process-header',
  templateUrl: './process-header.component.html',
  styleUrls: ['./process-header.component.css']
})
export class ProcessHeaderComponent implements OnInit {

  @Input('process') public process: ProcessItem;
  @Input('triggeredBy') public triggeredBy: Array<any>;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public openOperationalDashboard() {
    this._router.navigate(['app/operational/dashboard']);
  }

}
