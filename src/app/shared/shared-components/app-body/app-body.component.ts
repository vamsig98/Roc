import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../shared-services/auth/auth.service';
import { SAMLUser } from '../../shared-services/user/user.service';
import { Observer } from 'rxjs';
import { ConfigService } from '../../shared-services/config/config.service';

@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss']
})
export class AppBodyComponent implements OnInit, OnDestroy {

  public loggedInUserDetails: SAMLUser;
  public isAdmin: boolean = false;
  public isSuperAdmin: boolean = false;
  public isAdminHead: boolean;

  private _subHandle: any;

  private blockMenu: boolean;

  public processKey: string = '1';
  public activeUrl = '';
  client_image: any;
  version: any;
  isLogoLoading = false;
  client_profile: any;
  public showEnso: boolean =true;

  constructor(
    private _auth: AuthService,
    public _router: Router,
    private _config: ConfigService
  ) {
    this.loggedInUserDetails = this._auth.authUser;

    this.isSuperAdmin = this._auth.isSuperAdmin;
    this.isAdmin = this._auth.isAdmin;
  }

  ngOnInit() {
    // console.log('this._router.url', this._router.url);
    this.activeUrl = this._router.url;
    // this.isAdminHead = this.activeUrl.indexOf('admin') !== -1 ? true : false;
    if(this.activeUrl.indexOf('admin') !== -1){
      this.isAdminHead = true;
    }
    else{
      this.isAdminHead = false;
    }
    console.log('this.isAdminHead', this.isAdminHead);

    // if (this.activeUrl.indexOf('admin') === -1 && this.activeUrl.indexOf('admin') !== -1 && this.isSuperAdmin) {
    //   console.log('role', this.isSuperAdmin);
    // } else if (this.activeUrl.indexOf('admin') === -1 && this.activeUrl.indexOf('admin') !== -1 && !this.isSuperAdmin) {
    //     this._router.navigate(['/app/operational/dashboard']);
    // }

    this.getclientDetails();
    var data = JSON.parse(localStorage.getItem("_u"));
    if(data){
    if (data.user.lobs.length === 0 && !this.isSuperAdmin ) {
      this._router.navigate(['/unauthorize']);
    }

    if(data.client === "enso"){
      this.showEnso =  true ;
    }
    else{
      this.showEnso = false;
    }
  }
  }
  getclientDetails() {
    this.isLogoLoading = false;
    this.client_profile = JSON.parse(sessionStorage.getItem('clientDetails'));

    // this.client_image = this.client_profile.logo;
    // this.version = this.client_profile.version;
  }

  // getclientDetails() {
  //   this.isLogoLoading = true;
  //   this._auth.getclientDetails().subscribe((data: any) => {
  //     console.log(data);
  //     // sessionStorage.setItem('clientDetails', JSON.stringify( data));
  //     this.isLogoLoading = false;
  //     this.client_image = data.logo;
  //     this.version = data.version;

  //     this._auth.setAppFavicon('appIcon', data.browser_title, 'icon');
  //   }, (error) => {
  //     console.log(error);
  //     this.isLogoLoading = false;
  //   });
  // }

  ngOnDestroy() {
    if (this._subHandle) {
      this._subHandle.unsubscribe();
    }
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
  // public logout() {
  //   // this._auth.logout().subscribe((data) => {
  //   //   this._router.navigate(['/auth/logout']);
  //   // });
  //   window.location.assign(this._config.config.apiUrl + "/users/logout");
  //   localStorage.clear();
  // }
  // public logout() {
  //   this._auth.logout().subscribe((data) => {
  //     let logout_url = data["account_management"];
  //     this._auth.authUser = null;
  //     window.localStorage.clear();
  //     this.deleteAllCookies();
  //     window.location.assign(logout_url);
  //   });
  // }
  public adminLogout() {
    this._auth.adminLogout().subscribe((data) => {
      this._router.navigate(['/admin/login']);
    });
  }

  public openReports() {
    this._router.navigate(['app', 'reports', 'viewer']);
  }

  public changePassword() {
    this._router.navigate(['/app', 'change-password']);
  }

  isActive(tag): boolean {
    return (this._router.url.indexOf('/' + tag) != -1);
  }

  deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

}
