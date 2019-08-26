import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/shared-services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';
  isSuperAdmin: boolean = false;
  checkingSession: boolean = false;
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getLoggedInUserInfo();
  }

  private getLoggedInUserInfo() {
    this.checkingSession = true;

    setTimeout(() => {
      let user = this._auth.authUser;
      if (user === null) {
        this.checkingSession = false;
        window.location.assign("/saml/sso");
      }
      else {
        this._auth.getUserInfo().subscribe((data) => {
          this.gotoDashboard();
        });
      }
    }, 3000);
    this._auth.getUserInfo().subscribe((data) => {
      this.gotoDashboard();
    });
    
  }

  public login() {
    this._auth.login({
      username: this.username,
      password: this.password
    }).subscribe((data) => {
      this.gotoDashboard();
    }, (error) => {
      this.errorMessage = error.error;
    })
  }

  private gotoDashboard() {
    this.isSuperAdmin = this._auth.isSuperAdmin;
    console.log('this.isSuperAdmin', this.isSuperAdmin);
    // if (!this.isSuperAdmin) {
    //   this._router.navigate(['/app/operational/dashboard']);
    // } else {
    //   console.log("not nav to gotoDashboard");
    // }
    this._router.navigate(['/app/operational/dashboard']);
  }

}
