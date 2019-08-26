import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeRoot } from './reports.routes';
import { NvD3Module } from 'ng2-nvd3';
import { ReportsInitComponent } from './reports-init/reports-init.component';
import { ReportsViewerComponent } from './reports-viewer/reports-viewer.component';
import { CustomMaterialModule } from '../../shared/shared-modules/custom-material/custom-material.module';
import { SharedModulesModule } from '../../shared/shared-modules/shared-modules.module';
import { FormsModule } from '@angular/forms';
import { HealthcheckReportsComponent } from './healthcheck-reports/healthcheck-reports.component';
import { HealthCheckReportsComponent } from './health-check-reports/health-check-reports.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routeRoot,
    NvD3Module,
    CustomMaterialModule,
    SharedModulesModule,
    FormsModule,
    TooltipModule
  ],
  declarations: [ReportsInitComponent, ReportsViewerComponent, HealthcheckReportsComponent, HealthCheckReportsComponent]
})
export class ReportsModule { }
