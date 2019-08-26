import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AdminService, ProcessItem, ProcessList } from '../../../shared/shared-services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import Quill from 'quill';


@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {
  text: string = "";
  editEmailTemplate: boolean;
  defaultEmailTemplate: boolean = true;
  options: any = { maxLines: 1000, printMargin: false };
  public email_templates: any[] = [];
  public Template: any;
  public post_template: boolean = false;
  public update_template: boolean = false;
  public template_id;
  public errorMessage: string;
 
  constructor(private _adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog) {

  }
  ngOnInit() {
    this.GetEmailTemplate();

    this.Template = {
      "template_name": " ",
      "template_description": " ",
      "content": " "
    }
  }
  public GetEmailTemplate() {
    this._adminService.getEmailTemplate().subscribe((data: any) => {
      this.email_templates = data.result;
    }, (error) => {
      console.log(error);
    });
  }



  editTemplate(template_id) {
    this.editEmailTemplate = true;
    this.defaultEmailTemplate = false;
    if (template_id === 'new') {
      this.post_template = true;
      this.update_template = false;
      this.Template = {
        "template_name": "",
        "template_description": "",
        "content": ""
      }
    }
    else {
      this.update_template = true;
      this.post_template = false;
      this.template_id = template_id;
      this.email_templates.forEach(obj => {
        if (obj["_id"] === template_id) {
          this.Template = obj;
        }
      });
    }

  }


  putEmailTemaplte(emailTemplate, template_id) {
    this.update_template = true;
    this._adminService.updateEmailTemplate(this.template_id, emailTemplate).subscribe((data: any) => {
      this.emailData(data);
    }, (error) => {
      console.log(error);
      this.defaultEmailTemplate = false;
      this.editEmailTemplate = true;
      this.toastr.error("error !");
    });
  }
  postEmailTemaplte(emailTemplate) {
    this.post_template = true;
    this._adminService.PostEmailTemplate(emailTemplate).subscribe((data: any) => {
     this.emailData(data);
    }, (error) => {
      console.log(error);
      this.toastr.error("error while saving email template !");
      this.defaultEmailTemplate = false;
      this.editEmailTemplate = true;
    });
  }

  emailData(data) {
    if (data["error"] || data["errors"]) {
      let errormessage = "";
      if (data["error"]) {
        errormessage = data["error"];
      }
      if (data["errors"]) {
        for (var i = 0; i < data["errors"].length; i++) {
          errormessage += data["errors"][i] + "<br>";
        }
      }
      this.toastr.error(errormessage, 'Information!');
    } else {
      this.email_templates = data.result;
      this.defaultEmailTemplate = true;
      this.editEmailTemplate = false;
      this.GetEmailTemplate();
      if(this.update_template){
        this.toastr.success("Email Template updated successfully!");
        }
        if(this.post_template){
          this.toastr.success("Email Template saved successfully!");
        }
    }
  }
  cancelEditTemplate() {
    this.editEmailTemplate = false;
    this.defaultEmailTemplate = true;
  }
  public deleteTemplate(Temaple_id, name, index) {
    let dialogRef = this.dialog.open(DeleteTemplateConfirmationDialogComponent, {
      width: '350px',
      data: { name: 'Are you sure to delete the Process ?' ,title:'Delete' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._adminService.deleteTemplateById(Temaple_id).subscribe((data) => {
          this.toastr.success('Email Template deleted successfully!..', 'Message From Admin');
          this.email_templates.splice(index, 1);
        }, (error) => {
          this.errorMessage = error.error;
        });
      }
    });
  }

}

@Component({
  selector: 'delete-template-confirmation-dialog',
  templateUrl: '../../../shared/shared-components/confirm-dialog/delete-confirmation-dialog.html',
})
export class DeleteTemplateConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteTemplateConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
