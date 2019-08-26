import { Component, OnInit, Input, Inject } from '@angular/core';
import { AdminService } from '../../../../shared/shared-services/admin/admin.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  @Input() scheduledata: any;
  @Input() process: any;

  public name: "";
  public cornValue: "";
  public nextRun: boolean;
  public isScheduleChecked = false;
  public scheduleMessage: string;
  public scheduleObj: any;

  constructor(private _adminservice: AdminService, public dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit() {
    if (this.scheduledata) {
      if (this.scheduledata.next_run == null) {
        this.nextRun = false;
      }
      else {
        this.nextRun = true;
      }
    }
  }
  scheduled(event, i, schedule) {
    const obj = {
      is_scheduled: event.target.checked,
      process_name: this.process.name,
      schedule_id: schedule.Id
    };
    if (event.target.checked === true) {
      this.scheduleMessage = "Are you sure want to Switch On the Process ? "
    }
    else {
      this.scheduleMessage = "Are you sure want to Switch Off the Process ? "
    }
    const dialogRef = this.dialog.open(ScheduleCheckedDialogComponent, {
      width: '350px',
      data: { name: this.scheduleMessage, title: 'Confirm' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._adminservice.updateSchedule(obj, this.process.hosted_on).subscribe((data) => {
          if (data['result']['status'] === 'Failed') {
            this.toastr.error(data['result']['message'], 'Information!');
            this.scheduledata.result[i].Enabled = !event.target.checked;
          } else {
            this.scheduledata.result[i].Enabled = event.target.checked;
            this._adminservice.getProcessScheduleData(this.process.hosted_on, this.process.name).subscribe((data: any) => {
              this.scheduledata = data;

              if (this.scheduledata.next_run == null) {
                this.nextRun = false;
              }
              else {
                this.nextRun = true;
              }
            })
            this.toastr.success(data['result']['message'], 'Information!');
          }
        }, (error) => {
          this.scheduledata.result[i].Enabled = !event.target.checked;
          this.toastr.error(error, 'Information!');
        });
      }
      else
        this.scheduledata.result[i].Enabled = !event.target.checked;
    });
  }
  addCorn() {
    if (!this.process.hosted_on) {
      this.toastr.info("Hosted On is a required field");
      return;
    }
    let dialogRef = this.dialog.open(ScheduleCornDialogueComponent, {
      width: '500px',
      data: { title: "Add Corn", name: this.name, cornValue: this.cornValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let obj = {
          Name: result.name,
          ReleaseId: this.process.ReleaseId,
          ReleaseName: this.process.name,
          StartProcessCron: result.cornValue,
        }
        this._adminservice.saveProcessScheduleddata(this.process.hosted_on, obj).subscribe((data) => {
          if (data["status"] == "Success") {
            this.toastr.info(data["Message"], 'Information!');
            this._adminservice.getProcessScheduleData(this.process.hosted_on, this.process.name).subscribe((data: any) => {
              this.scheduledata = data;
              
              if (this.scheduledata.next_run == null) {
                this.nextRun = false;
              }
              else {
                this.nextRun = true;
              }
            })
          }
          else {
            this.toastr.error(data["Message"], 'Information!')
          }
        })
      }
      else {
        this.name = "";
        this.cornValue = "";
      }
    });

  }
  editScheduleCorn(schedule, index) {
    this.name = schedule.Name;
    this.cornValue = schedule.StartProcessCron;
    let dialogRef = this.dialog.open(ScheduleCornDialogueComponent, {
      width: '500px',
      data: { title: "Edit Corn", name: this.name, cornValue: this.cornValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        schedule.Name = result.name;
        schedule.StartProcessCron = result.cornValue;
        this._adminservice.updateProcessScheduleddata(this.process.hosted_on, schedule.Id, schedule).subscribe((data) => {
          if (data["status"] == "Success") {
            this.toastr.info(data["Message"], 'Information!');
            this._adminservice.getProcessScheduleData(this.process.hosted_on, this.process.name).subscribe((data: any) => {
              this.scheduledata = data;
            })
          }
          else {
            this.toastr.error(data["Message"], 'Information!');
            schedule.Name = this.name;
            schedule.StartProcessCron = this.cornValue;
          }
        })
      }
      else {
        this.name = "";
        this.cornValue = "";
      }
    });

  }
  deleteScheduleorn(schedule, i) {
    let dialogRef = this.dialog.open(DeleteScheduleDialogComponent, {
      width: '350px',
      data: { name: 'Are you sure to delete the Corn ?', title: 'Delete' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._adminservice.deleteProcessScheduleddata(this.process.hosted_on, schedule.Id).subscribe((data) => {

          if (data["result"]["status"] == "Failed") {
            this.toastr.error(data["result"]["message"], 'Information!');
          }
          else {
            this.toastr.info(data["result"]["message"], 'Information!');

          }
        })
        console.log(this.scheduledata);
      }
    });

  }
}


@Component({
  selector: 'add-stakeholders-dialog',
  templateUrl: '../../../../shared/shared-components/confirm-dialog/add-schedule-corn.html',
  styleUrls: ['../../../../shared/shared-components/confirm-dialog/add-stakeholders.scss']
})
export class ScheduleCornDialogueComponent {
  submitted = false;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<ScheduleCornDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  registerForm: FormGroup;


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required]],
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
  templateUrl: '../../../../shared/shared-components/confirm-dialog/delete-confirmation-dialog.html',
})
export class DeleteScheduleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteScheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'delete-confirmation-dialog',
  templateUrl: '../../../../shared/shared-components/confirm-dialog/delete-confirmation-dialog.html',
})
export class ScheduleCheckedDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ScheduleCheckedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}