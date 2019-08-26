import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../../../../shared/shared-services/admin/admin.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  @Input() process: any;
  public Loblist = [];
  
  constructor(private _adminService: AdminService) {
  }

  ngOnInit() {
    this._adminService.getLobsTemplate().subscribe((data: any) => {
      this.Loblist = data.result;
    })
  }
  onKeyPress1(event: any) {
    this.process.savings_per_record = event.target.value - this.process.bot_opex_cost_kpi;
  };
  onKeyPress2(event: any) {
    this.process.savings_per_record = this.process.manual_opex_cost_kpi - event.target.value;
  };

}
