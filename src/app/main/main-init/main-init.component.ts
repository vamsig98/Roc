import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../shared/shared-services/auth/auth.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-init',
  templateUrl: './main-init.component.html',
  styleUrls: ['./main-init.component.css']
})
export class MainInitComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }
}
