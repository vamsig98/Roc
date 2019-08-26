import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBodyComponent } from './app-body/app-body.component';

import { SharedModulesModule } from '../shared-modules/shared-modules.module';

import { Daterangepicker } from 'ng2-daterangepicker';

import { RouterModule } from '@angular/router';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ItemRecordComponent } from './item-record/item-record.component';
import { WorkItemMetadataComponent } from './work-item-metadata/work-item-metadata.component';
import { ScrollSpyDirective } from '../shared-directives/scroll-spy.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  SharedModulesModule,
    Daterangepicker
  ],
  declarations: [AppBodyComponent, ErrorMessageComponent, ItemRecordComponent, WorkItemMetadataComponent,ScrollSpyDirective],
  exports: [AppBodyComponent, ErrorMessageComponent, ItemRecordComponent, WorkItemMetadataComponent,ScrollSpyDirective]
})
export class SharedComponentsModule { }
