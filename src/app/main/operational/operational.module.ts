import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperationalInitComponent } from './operational-init/operational-init.component';
import { OperationalDashboardComponent } from './operational-dashboard/operational-dashboard.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { RecordsComponent } from './work-item/records/records.component';
import { LogsTimelineComponent } from './work-item/logs-timeline/logs-timeline.component';
import { SubwayViewerComponent } from './subway-viewer/subway-viewer.component';

import { routeRoot } from './operational.routes';

import { SharedModulesModule } from '../../shared/shared-modules/shared-modules.module';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
import { ListItemComponent } from './operational-dashboard/list-item/list-item.component';
import { ProcessItemComponent } from './work-item/process-item/process-item.component';
import { AddBotComponent } from './add-bot/add-bot.component';
import { LogItemComponent } from './work-item/logs-timeline/log-item/log-item.component';
// import { QuillModule } from 'ngx-quill';


import { Daterangepicker } from 'ng2-daterangepicker';
import {CustomdragDirective} from './../../shared/shared-modules/subwaymap-drag/customdrag.directive';
@NgModule({
  imports: [
    CommonModule,
    routeRoot,
    FormsModule,
    SharedModulesModule,
    SharedComponentsModule,
    Daterangepicker
  ],
  declarations: [
    OperationalInitComponent,
    OperationalDashboardComponent,
    WorkItemComponent,
    RecordsComponent,
    LogsTimelineComponent,
    ListItemComponent,
    ProcessItemComponent,
    AddBotComponent,
    LogItemComponent,
    SubwayViewerComponent,
    CustomdragDirective
  ]
})
export class OperationalModule { }
