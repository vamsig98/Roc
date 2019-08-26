import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcessesInitComponent,DeleteConfirmationDialogComponent } from './processes-init/processes-init.component';
import { ProcessesListComponent } from './processes-list/processes-list.component';
import { ActiveWorkItemsComponent } from './active-work-items/active-work-items.component';
import { CompletedWorkItemsComponent } from './completed-work-items/completed-work-items.component';

import { routeRoot } from './proccesses.routes';
import { RouterModule } from '@angular/router';
import { SharedModulesModule } from '../../shared/shared-modules/shared-modules.module';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
import { ProcessHeaderComponent } from './process-header/process-header.component';
import { IncompletedWorkItemsComponent } from './incompleted-work-items/incompleted-work-items.component';
import { ViewLogDetailsComponent } from './view-log-details/view-log-details.component';
import { ViewRecordDetailsComponent } from './view-record-details/view-record-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

import { Ng2OrderModule, Ng2OrderPipe } from 'ng2-order-pipe';
import { ResourcesandsupportComponent } from './resourcesandsupport/resourcesandsupport.component'; //importing the module
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModulesModule,
    SharedComponentsModule,
    routeRoot,
    NgxPaginationModule,Ng2SearchPipeModule,Ng2OrderModule
  ],
  declarations: [ProcessesInitComponent, ProcessesListComponent, DeleteConfirmationDialogComponent,ActiveWorkItemsComponent, CompletedWorkItemsComponent, ProcessHeaderComponent, IncompletedWorkItemsComponent, ViewLogDetailsComponent, ViewRecordDetailsComponent, ResourcesandsupportComponent],
  entryComponents: [DeleteConfirmationDialogComponent],
})
export class ProcessesModule { }
