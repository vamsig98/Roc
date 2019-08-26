import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MainInitComponent } from '../main-init.component';
import { AdminService } from '../../../shared/shared-services/admin/admin.service';
import { AuthService } from '../../../shared/shared-services/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  public isLoading: boolean = true;
  public isSaving: boolean = false;
  public errorMessage: string = '';

  public password: string;
  public confirmPassword: string;

  public buttonText: string = 'Save';

  constructor(
    private _adminService: AdminService,
    private _authService: AuthService,
    // public dialogRef: MatDialogRef<MainInitComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.isLoading = false;
  }

  savePassword() {

    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Password and confirm passoword should match";
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
      return;
    }


    this.isSaving = true;
    this.errorMessage = '';
    this._adminService.changePassword({
      username: this._authService.authUser.username,
      password: this.password
    }).subscribe((data: any) => {
      if (data.status == 'SUCCESS') {
        // this.dialogRef.close('yes');

        this.buttonText = 'logging you out. Please login again...';
        setTimeout(() => {

          this._authService.logout().subscribe((data) => {
            window.location.reload();
          });
        }, 2000);

      } else {
        this.errorMessage = "Something went wrong. Please contact your admin.";
      }

      this.isSaving = false;

    }, (error) => {
      this.isSaving = false;
      this.errorMessage = error.error;
    });
  }

}
