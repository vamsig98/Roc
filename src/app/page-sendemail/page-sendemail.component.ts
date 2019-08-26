import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/shared-services/config/config.service';
import { AdminService } from '../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/shared-services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-sendemail',
  templateUrl: './page-sendemail.component.html',
  styleUrls: ['./page-sendemail.component.css']
})

export class PageSendemailComponent implements OnInit {
  public firstname: any;
  public lastname: any;
  public email: any;
  public isSuperAdmin: boolean = false;
  public isbuttonactive: boolean = false;
  public isdisabled : boolean = false;

  constructor(private _config: ConfigService, private _admin: AdminService,public _router: Router,private toastr: ToastrService, private _auth: AuthService) {
    this.isSuperAdmin = this._auth.isSuperAdmin;

  }

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem("_u"));
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
  }
  public logout() {
    // this._auth.logout().subscribe((data) => {
    //   this._router.navigate(['/auth/logout']);
    // });
    let userInfo = JSON.parse(localStorage.getItem("_u"))
    if (userInfo.client === "ciox") {
      this._auth.logout().subscribe((data) => {
        this._router.navigate(['/auth/logout']);
      });
    } else {
      window.location.assign(this._config.config.apiUrl + "/users/logout");
      localStorage.clear();
    }
  }
  public sendemail() {
    let obj ={firstname : this.firstname , lastname : this.lastname , email : this.email};
    this.isbuttonactive = true;
    this._admin.sendEmail(obj).subscribe((data: any) => {
      if(data.result.status === "success"){
        this.toastr.info(data.result.message, 'Information!');
        this.isbuttonactive = false;
        this.isdisabled = true;
      }
      else{
        this.toastr.error(data.result.message, 'Information!');
        this.isbuttonactive = false;
        this.isdisabled = false;
      }
    });
  }
}
