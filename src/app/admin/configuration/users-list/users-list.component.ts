import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AdminService, ProcessItem, ProcessList } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import Quill from 'quill';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public usersList = [];
  public Template: any;
  public defaultView = true;
  public editLob = false;
  public lobsStr = '';
  public search: any = {};
  public allLob = [];
  public is_update = -1;
  toppings = new FormControl();
  selectedLobsList: any;
  disableSelect: any = -1;
  isLoading: boolean;
  selectedLobs = [];

  constructor(private _adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getUserList();
    this.getLobsTemplate();
  }

  public getLobsTemplate() {
    this.isLoading = true;
    this._adminService.getLobsTemplate().subscribe((data: any) => {
      this.allLob = data.result;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      console.log(error);
    });
  }

  public getUserList() {
    this.isLoading = true;
    this._adminService.getUmUsersList().subscribe((data: any) => {
      this.isLoading = false;
      this.usersList = data.result;
      console.log(this.usersList);
      this.selectedLobsList = data.result.last_list;
    }, (error) => {
      console.log(error);
    });
  }

  public cancelEditTemplate() {
    this.editLob = false;
    this.defaultView = true;
  }
  public deleteUser(user) {
    let dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: { name: 'Are you sure to delete the User' + '?' , title:'Delete' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
    this._adminService.deleteUser(user._id).subscribe((data: any) => {
      if (data.status == "success") {
        this.toastr.info(data.message, 'Information!');
        this.getUserList();
      }
      else {
        this.toastr.info(data.message, 'Information!');
      }
    }, (error) => {
      console.log(error);
    });
  }
});
}

//   public deleteUser(user) {
//     let dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
//       width: '350px',
//       data: { name: 'Are you sure to delete the User' + '?' , title:'Delete' }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result == true) {
//     this._adminService.deleteUser(user._id).subscribe((data: any) => {
//       if (data.status == "success") {
//         this.toastr.info(data.message, 'Information!');
//         this.getUserList();
//       }
//       else {
//         this.toastr.info(data.message, 'Information!');
//       }
//     }, (error) => {
//       console.log(error);
//     });
//   }
// });
// }
  public updateLobs(user, i) {
    // this.disableSelect = i;
    let updateLobObj;
    if (this.is_update !== i) {
      this.is_update = i;
      this.disableSelect = i;
    } else {
      this.is_update = -1;
      this.disableSelect = -1;
      
      this.allLob.forEach((eachLob, idx) => {
        user.lobs.forEach((eachitem, ind) => {
          if (eachLob.lob_name === eachitem) {
            this.selectedLobs.push(eachLob);
          }
        });
      });

      updateLobObj = {
        'user_id': user.user_id,
        'lobs': user.lobs
      };
      this.isLoading = true;
      this._adminService.updateLobs(updateLobObj).subscribe((data: any) => {
        this.getUserList();
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
        console.log(error);
      });
    }
  }

}

@Component({
  selector: 'delete-confirmation-dialog',
  templateUrl: '../../../shared/shared-components/confirm-dialog/delete-confirmation-dialog.html',
})
export class DeleteConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
