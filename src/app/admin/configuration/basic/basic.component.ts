import { Component, OnInit } from '@angular/core';
import { AdminService, ProcessItem, ProcessList } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  public general: boolean = false;
  public notification: boolean = true;
  public smtpdata: any;
  public smtp_id: string;
  public isNew: boolean=false;
  public smtptest: any;

  constructor(private _adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getsmtpserver();
    this.smtpdata = {
      "smtp_server": "",
      "smtp_port": "",
      "smtp_username": "",
      "smtp_password": "",
      "from_email": " "
    }
    this.smtptest = {};

  }

  public testSMTP(smtpserver) {
    console.log(smtpserver);
    delete smtpserver["_id"];
    this._adminService.testSmtp(smtpserver).subscribe((data: any) => {
      this.smtptest = data.result;
      if(data.result["errors"].length > 0 || data.result["error"].length > 0 ){
      if (data.result["error"] || data.result["errors"]) {
        let errormessage = "";
        if (data.result["error"]) {
          errormessage = data.result["error"];
        }
        if (data.result["errors"]) {
          for (var i = 0; i < data.result["errors"].length; i++) {
            errormessage += data.result["errors"][i] + "<br>";
          }
        }
        this.toastr.error(errormessage, 'Information!');
      }
     } else {
        this.toastr.success(data.result["status"], 'Information!');
      }
    }, (error) => {
      console.log(error);
    });

  }
  public getsmtpserver() {
    this._adminService.GetsmtpServer().subscribe((data: any) => {
      this.smtpdata = data.result;
      if (this.smtpdata == null) {
        this.isNew = true;
        this.smtpdata = {
          "smtp_server": "",
          "smtp_port": "",
          "smtp_username": "",
          "smtp_password": "",
          "from_email": ""
        }
      }
      else {
        this.isNew = false;
      }
      console.log(this.smtpdata);
    }, (error) => {
      console.log(error);
    });
  };
  public saveSmtpServer(smtpserver) {
    this._adminService.postsmtpServer(smtpserver).subscribe((data: any) => {
     this.smtpServer(data);
    }, (error) => {
      console.log(error);
    });
  }
  public updateSmtpServer(smtpserver) {
    this._adminService.putsmtpServer(smtpserver._id, smtpserver).subscribe((data: any) => {
    this.smtpServer(data);
    }, (error) => {
      console.log(error);
    });
  }

  smtpServer(data:any) {
    if (data.result["error"] || data.result["errors"]) {
      let errormessage = "";
      if (data.result["error"]) {
        errormessage = data.result["error"];
      }
      if (data.result["errors"]) {
        for (var i = 0; i < data.result["errors"].length; i++) {
          errormessage += data.result["errors"][i] + "<br>";
        }
      }
      this.toastr.error(errormessage, 'Information!');
    } else {
      this.toastr.success('SMTP server details added Successfully ! ,Information!');
    }
  }

}
