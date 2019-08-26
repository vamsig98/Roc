import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminInitComponent } from './admin-init/admin-init.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DeleteConfirmationDialogComponent } from './configuration/processes/processes.component';
import { DeleteTemplateConfirmationDialogComponent } from './configuration/email-template/email-template.component';
import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedServicesModule } from '../shared/shared-services/shared-services.module';

import { routeRoot } from './admin.routes';
import { QuillModule } from 'ngx-quill';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedComponentsModule,
    SharedModulesModule,
    SharedServicesModule,
    routeRoot,
    QuillModule 
  ],
 
  declarations: [AdminInitComponent, AdminLoginComponent,DeleteConfirmationDialogComponent,DeleteTemplateConfirmationDialogComponent],
  entryComponents: [
    DeleteConfirmationDialogComponent,
    DeleteTemplateConfirmationDialogComponent
  ]
})
export class AdminModule { }
