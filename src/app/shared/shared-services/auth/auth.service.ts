import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Rx";
import { HttpClient } from '@angular/common/http';

import { SAMLUser } from '../user/user.service';

import { map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import * as $ from 'jquery';

export const ROLE_TYPE_SUPER_ADMIN = 'SG-ROCSA';
export const ROLE_TYPE_ADMIN = 'SG-ROCBO';
export const ROLE_TYPE_OPERATOR = 'SG-ROCPO';
export const ROLE_TYPE_SUPPORT = 'SG-ROCTS';

@Injectable()
export class AuthService {

  private _authUser: SAMLUser;

  constructor(
    private _httpClient: HttpClient,
    private _configService: ConfigService
  ) {
    this.authUser = AuthService.getLocalStorageUserInfo();
  }

  public static getLocalStorageUserInfo() {
    let tmpLocalStorageData: string = window.localStorage.getItem('_u');

    if (!tmpLocalStorageData) {
      return null;
    }

    let aU: SAMLUser = null;

    if (tmpLocalStorageData) {
      try {
        aU = JSON.parse(tmpLocalStorageData);
      } catch (e) {
        aU = null;
      }
    }

    return aU;
  }

  public isAuthenticated(): boolean {
    if (!this.authUser) {
      return false;
    }


    return true;
  }
  public isAdminAuthenticated(): boolean {
    return this.isSuperAdmin;
    //return true; 
  }

  public get authUser() {
    return this._authUser;
  }

  public set authUser(authUser: SAMLUser) {
    this._authUser = {"email":"Raghuram.Pulla@cioxhealth.com","firstname":"Raghuram","groups":["SG-ROCTS","SG-ROCSA"],"lastname":"Pulla","client":""};
      // this._authUser= authUser;
    window.localStorage.setItem('_u', JSON.stringify(this._authUser));
  }

  public getUserInfo(): Observable<any> {
    return this._httpClient.get(this._configService.config.apiUrl + '/userInfo').pipe(map((data: any) => {
      this.authUser = data;
      console.log('from getUserInfo()', data);
      return this.authUser;
    }));
  }

  public login(data: { username: string; password: string }): Observable<any> {
    // if (data.username != 'admin' || data.password != 'ciox@123') {
    //   return Observable.throw("Username or password is wrong!");
    // }

    if (this._configService.config.useMockData) {
      return this._httpClient.get('assets/mock-data/login.json',
      ).pipe(map((data: any) => {
        this.authUser = data;
        return this.authUser;
      }));
    } else {
      return this._httpClient.post(this._configService.config.apiUrl + '/users/login',
        data).pipe(map((data: any) => {
          this.authUser = data;
          return this.authUser;
        }));
    }
  }


    // public logout(): Observable<any> {
    //   let username = this.authUser.username;
      
    //   return this._httpClient.post(this._configService.config.adminApiUrl + '/users/logout',
    //     { username: username }
    //   ).pipe(map((data: any) => {
    //     this.authUser = null;
    //     return true;
    //   }));

    public logout(): Observable<any> {
      // let username = this.authUser.username;
      
      return this._httpClient.get(this._configService.config.adminApiUrl + '/users/logout'
      ).pipe(map((data: any) => {
        this.authUser = null;
        return true;
      }));
  



  // this.authUser = null;    
  // return Observable.of({});
}

  public adminLogin(data: { username: string; password: string }): Observable<any> {


    if (this._configService.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminLogin.json',
      ).pipe(map((data: any) => {
        this.authUser = data;
        return this.authUser;
      }));
    } else {
      return this._httpClient.post(this._configService.config.adminApiUrl + '/admin/login',
        data
      ).pipe(map((data: any) => {
        this.authUser = data;
        return this.authUser;
      }));
    }
  }

  public adminLogout(): Observable<any> {


    if (this._configService.config.useMockData) {
      return this._httpClient.get('assets/mock-data/adminLogout.json',
      ).pipe(map((data: any) => {
        this.authUser = null;
        return data;
      }));
    } else {
      return this._httpClient.post(this._configService.config.adminApiUrl + '/admin/logout',
        { username: this.authUser.username }
      ).pipe(map((data: any) => {
        this.authUser = null;
        return true;
      }));
    }
  }

  private isValidRoleCheck(): boolean {
    if (!this.authUser) {
      return false;
    }

    if (!this.authUser.groups) {
      return false;
    }

    return true;
  }

  public get isSuperAdmin(): boolean {
    console.log('user', this.authUser);
    if (!this.isValidRoleCheck()) {
      console.log('isValidRoleCheck FALSE ');
      return false;
    }

    if (this.authUser.groups.indexOf(ROLE_TYPE_SUPER_ADMIN) != -1 ) {
      console.log('GROUP - ROLE SUPERADMIN TRUE');
      return true;
    }
    console.log('GROUP - ROLE SUPERADMIN FALSE');
    return false;
  }
  public get isAdmin(): boolean {
    console.log('user', this.authUser);
    if (!this.isValidRoleCheck()) {
      console.log('isValidRoleCheck FALSE');
      return false;
    }

    if (this.authUser.groups.indexOf(ROLE_TYPE_ADMIN) != -1 ) {
      console.log('GROUP - ROLE ADMIN TRUE');
      return true;
    }
    console.log('ADMIN false');
    return false;
  }
  public get isOperator(): boolean {
    this.roleCheck();
    return false;
  }
  public get isSupport(): boolean {
    this.roleCheck();

    return false;
  }
  roleCheck() {
    if (!this.isValidRoleCheck()) {
      return false;
    }

    if (this.authUser.groups.indexOf(ROLE_TYPE_OPERATOR) != -1 ) {
      return true;
    }
    
  }
  public getclientDetails() {
    if (this._configService.config.useMockData) {
      return this._httpClient.get('assets/mock-data/clientProfile.json');
    } else {
      return this._httpClient.get(this._configService.config.adminApiUrl + '/client/profile');
    }
  }

  public setAppFavicon(id, browser_title, icon) {
    $('#' + id).attr('href', icon);
    document.title = browser_title ? browser_title : 'ROC';
  }

  public logoutPost() {
    if (this._configService.config.useMockData) {
      return this._httpClient.get('assets/mock-data/clientProfile.json');
    } else {
      return this._httpClient.post('/saml/logout?GLO=true',{});
    }
  }


}
