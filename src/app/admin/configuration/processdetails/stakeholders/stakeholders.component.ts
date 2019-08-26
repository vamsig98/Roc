import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminService } from '../../../../../app/shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrls: ['./stakeholders.component.scss']
})
export class StakeholdersComponent implements OnInit {
  @Input() stakeholders:any;
  @Input() process:any;
  update_process: any;
  constructor(private _admin:AdminService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  saveData(event){
    this.update_process = {
      "condition": { "name": this.process.name },
      "data": {"stakeholder_information" : this.stakeholders}
    }
    this._admin.saveStakeholderData(this.update_process).subscribe((data : any)=>{
      if (data.status == "Success") {
        this.toastr.info(data.Message, 'Information!');
    }
  })
  }
  
  // isEmptyObject(obj) {
  //   return (obj && (Object.keys(obj).length === 0));
  // }

  
}
