import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/shared-services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public errorMessage: string = '';
  public username: string;
  public password: string;
  public isLoading: boolean = false;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    this.isLoading = true;

    this._authService.adminLogin({
      username: this.username,
      password: this.password
    }).subscribe((data) => {
      this.isLoading = false;
      this._router.navigate(['/admin/configuration']);
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error;
    });
  }

}
