import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeRoot } from './financial.routes';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FinancialInitComponent } from './financial-init/financial-init.component';
import { FinancialViewerComponent } from './financial-viewer/financial-viewer.component';
import { SummaryComponent } from './financial-viewer/summary/summary.component';
import { GraphicalViewComponent } from './financial-viewer/graphical-view/graphical-view.component';
import { FinanceRecordsComponent } from './financial-viewer/finance-records/finance-records.component';
import { CustomMaterialModule } from '../../shared/shared-modules/custom-material/custom-material.module';
import { SharedModulesModule } from '../../shared/shared-modules/shared-modules.module';
import { NvD3Module } from 'ng2-nvd3';
import {PopoverModule} from "ngx-popover";
import { FormsModule } from '@angular/forms';


// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
import { FinanceloblistComponent } from './financial-viewer/financeloblist/financeloblist.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routeRoot,
    Daterangepicker,
    CustomMaterialModule,
    SharedModulesModule,
    NvD3Module,
    PopoverModule,
    FormsModule
  ],
  declarations: [FinancialInitComponent, FinancialViewerComponent, SummaryComponent, GraphicalViewComponent, FinanceRecordsComponent, FinanceloblistComponent]
})
export class FinancialModule { }
