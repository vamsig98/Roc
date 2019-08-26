import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationInitComponent } from './configuration-init/configuration-init.component';
import { ProcessesComponent } from './processes/processes.component';

import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
import { SharedModulesModule } from '../../shared/shared-modules/shared-modules.module';
import { SharedServicesModule } from '../../shared/shared-services/shared-services.module';
import { CustomMaterialModule } from '../../shared/shared-modules/custom-material/custom-material.module';

import { routeRoot } from './configuration.routes';
import { ProcessdetailsComponent } from './processdetails/processdetails.component';
import { SubwayConfigComponent } from './subway-config/subway-config.component';
import { ThroughputReconComponent } from './throughput-recon/throughput-recon.component';
import { BasicComponent } from './basic/basic.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { QuillModule } from 'ngx-quill';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {NgxPaginationModule} from 'ngx-pagination';
import { LobsComponent  } from './lobs/lobs.component';
import { UsersListComponent , DeleteConfirmationDialogComponent} from './users-list/users-list.component';
import { GeneralComponent } from './processdetails/general/general.component';
import { ScheduleComponent, ScheduleCornDialogueComponent , DeleteScheduleDialogComponent , ScheduleCheckedDialogComponent } from './processdetails/schedule/schedule.component';
import { OnboardingComponent } from './processdetails/onboarding/onboarding.component';
import { AssetsComponent } from './processdetails/assets/assets.component';
import { StakeholdersComponent} from './processdetails/stakeholders/stakeholders.component';
import { UserDetailsComponent , stakeHolderDialogueComponent , DeleteDialogComponent} from './processdetails/stakeholders/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxEditorModule } from 'ngx-editor';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedComponentsModule,
    SharedModulesModule,
    CustomMaterialModule,
    SharedServicesModule,
    routeRoot,
    QuillModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxPaginationModule,
    HttpClientModule,
    NgxEditorModule,
  ],
  declarations: [ConfigurationInitComponent, ProcessesComponent,stakeHolderDialogueComponent,ScheduleCornDialogueComponent,
    ProcessdetailsComponent, SubwayConfigComponent, ThroughputReconComponent, BasicComponent, EmailTemplateComponent,
  LobsComponent, DeleteConfirmationDialogComponent, UsersListComponent, GeneralComponent, ScheduleComponent, OnboardingComponent, AssetsComponent, StakeholdersComponent, UserDetailsComponent, DeleteDialogComponent , DeleteScheduleDialogComponent , ScheduleCheckedDialogComponent],

 entryComponents: [DeleteConfirmationDialogComponent,stakeHolderDialogueComponent,ScheduleCornDialogueComponent , DeleteDialogComponent , DeleteScheduleDialogComponent , ScheduleCheckedDialogComponent],
})
export class ConfigurationModule { }
