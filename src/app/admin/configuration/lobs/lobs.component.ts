import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AdminService, ProcessItem, ProcessList } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import Quill from 'quill';


@Component({
  selector: 'app-lobs',
  templateUrl: './lobs.component.html',
  styleUrls: ['./lobs.component.scss']
})
export class LobsComponent implements OnInit {
  text: string = "";
  editLobTemplate: boolean;
  defaultLobTemplate: boolean = true;
  options: any = { maxLines: 1000, printMargin: false };
  public lob_templates = [];
  public Template: any;
  public post_template: boolean = false;
  public update_template: boolean = false;
  public template_id;
  public errorMessage: string;
  isLoading: boolean;
 
  constructor(private _adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.getLobsTemplate();

    this.Template = {
      lob_name: '',
      lob_id: '',
      lob_description: ''
    };
  }
  public getLobsTemplate() {
    this.isLoading = true;
    this._adminService.getLobsTemplate().subscribe((data: any) => {
      this.lob_templates = data.result;
      this.isLoading = false;
    }, (error) => {
      console.log(error);
      this.isLoading = false;
    });
  }



  editTemplate(template_id) {
    this.editLobTemplate = true;
    this.defaultLobTemplate = false;
    if (template_id === 'new') {
      this.post_template = true;
      this.update_template = false;
      this.Template = {
        lob_name: '',
        lob_id: '',
        lob_description: ''
      };
    } else {
      this.update_template = true;
      this.post_template = false;
      this.template_id = template_id;
      this.lob_templates.forEach(obj => {
        if (obj['lob_id'] === template_id) {
          this.Template = obj;
        }
      });
    }

  }


  putLobTemaplte(lobTemplate) {
    this.update_template = true;
    const putObj = {
      lob_name: lobTemplate.lob_name,
      lob_description : lobTemplate.lob_description
    };
    this.isLoading = true;
    this._adminService.updateLobTemplate(lobTemplate.lob_id, putObj).subscribe((data: any) => {
      this.isLoading = false;
      if (data['error'] || data['errors']) {
        let errormessage = '';
        if (data['error']) {
          errormessage = data['error'];
        }
        if (data['errors']) {
          for (let i = 0; i < data['errors'].length; i++) {
            errormessage += data['errors'][i] + '<br>';
          }
        }
        this.toastr.error(errormessage, 'Information!');
      } else {
        // this.lob_templates = data.result;
        this.defaultLobTemplate = true;
        this.editLobTemplate = false;
        this.getLobsTemplate();
        this.toastr.success(putObj.lob_name + ' ' + ' updated successfully!');
      }
    }, (error) => {
      this.isLoading = false;
      this.defaultLobTemplate = false;
      this.editLobTemplate = true;
      this.toastr.error('error !');
    });
  }
  postLobTemaplte(lobTemplate) {
    if (lobTemplate.lob_name.length === 0 ) {
        this.toastr.error('Please enter LOB name!');
    } else {
      this.isLoading = true;
      this.post_template = true;
      const postobj = {
        lob_name: lobTemplate.lob_name,
        lob_description : lobTemplate.lob_description
      };
      this._adminService.postLobTemplate(postobj).subscribe((data: any) => {
        this.isLoading = false;
        if (data['message']) {
          let errormessage = '';
          errormessage = data['message'];
          this.toastr.error(errormessage, 'Information!');
        } else {
          // this.lob_templates = data.result;
          this.getLobsTemplate();
          this.defaultLobTemplate = true;
          this.editLobTemplate = false;
          this.toastr.success(postobj.lob_name + ' saved successfully!');
        }
      }, (error) => {
        this.isLoading = false;
        this.toastr.error('error while saving the lob!');
        this.defaultLobTemplate = false;
        this.editLobTemplate = true;
      });
    }
  }
  cancelEditTemplate() {
    this.editLobTemplate = false;
    this.defaultLobTemplate = true;
  }
  public deleteTemplate(Temaple_id, name, index) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: { name: 'Are you sure to delete the Process' + '?', title:'Delete' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoading = true;
        this._adminService.deleteLobById(Temaple_id).subscribe((data) => {
          this.isLoading = false;
          this.toastr.success(name + ' deleted successfully!..', 'Message From Admin');
          this.lob_templates.splice(index, 1);
        }, (error) => {
          this.isLoading = false;
          this.errorMessage = error.error;
          this.toastr.error('error while deleting the lob!');
        });
      }

    });
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


