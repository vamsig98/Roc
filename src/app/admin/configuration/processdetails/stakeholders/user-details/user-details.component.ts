import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../../../shared/shared-services/admin/admin.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() owner: any = [];
  @Output() save = new EventEmitter<any>();
  @Input() process:any;


  public hoverInd: -1;
  public isHovered: boolean = false;
  public username: "";
  public email: "";
  public phonenum: "";

  constructor(public dialog: MatDialog ,  private toastr: ToastrService , private _adminService: AdminService) { }

  ngOnInit() {
  }

  saveStakeholder(ownerkey) {
    if (!this.process.is_configured) {
      if(!this._adminService.isSave){
        this.toastr.error('Please configure and save general information.');
      return;
    }
  }
    let dialogRef = this.dialog.open(stakeHolderDialogueComponent, {
      width: '500px',
      data: { title: ownerkey , username: this.username, email: this.email, phonenum: this.phonenum , buttonName : "Save"}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        let obj = {
          email: result.email,
          name: result.username,
          phonenum: result.phonenum
        }
        this.owner.val.push(obj);
        this.save.emit(obj);
      }
      else {
        this.username = "";
        this.email = "";
        this.phonenum = ""
      }
    });

  }

  editStakeholder(user, key, index) {
    this.username = user.name;
    this.email = user.email;
    this.phonenum = user.phonenum

    let dialogRef = this.dialog.open(stakeHolderDialogueComponent, {
      width: '500px',
      data: { title: "Update Stakeholder", username: this.username, email: this.email, phonenum: this.phonenum ,buttonName : "Update" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let obj = {
          email: result.email,
          name: result.username,
          phonenum: result.phonenum
        }
        this.owner.val[index] = obj;
        this.save.emit(obj);
      }
      else {
        this.username = "";
        this.email = "";
        this.phonenum = ""
      }
    });

  }

  deleteStakeholder(index, key) {
    
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data: { name: 'Are you sure to delete the Stakeholder ?', title:'Delete' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.owner.val.splice(index, 1);
        this.save.emit(this.owner);
      }
    });

  }

  changeStyle($event, idx) {
    this.hoverInd = idx;
    this.isHovered = true;
  }
  changeStyle1($event, idx) {
    this.hoverInd = -1;
    this.isHovered = false;
  }
}
@Component({
  selector: 'add-stakeholders-dialog',
  templateUrl: '../../../../../shared/shared-components/confirm-dialog/add-stakeholders.html',
  styleUrls: ['../../../../../shared/shared-components/confirm-dialog/add-stakeholders.scss']
})
export class stakeHolderDialogueComponent {
  submitted = false;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<stakeHolderDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNum: ['', Validators.required],

    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }
}

@Component({
  selector: 'delete-confirmation-dialog',
  templateUrl: '../../../../../shared/shared-components/confirm-dialog/delete-confirmation-dialog.html',
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
