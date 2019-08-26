import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomMaterialModule} from './custom-material/custom-material.module';
import { FilterPipe } from './pipes/filter-pipe';
import { ProcessFilterPipe } from './pipes/processname-filter-pipe';
import { CustomPropsProvider } from './props-provider/CustomPropsProvider';
import { AdminService } from '../shared-services/admin/admin.service';
import { ProcessesFilterPipe } from './pipes/proc.filter';
import { ObjectConvert } from './pipes/objconvert';
import { SafePipe } from './pipes/dialog-content';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CustomMaterialModule,
    FilterPipe,
    ProcessFilterPipe,
    ProcessesFilterPipe,
    ObjectConvert,SafePipe
  ],
  providers: [
    AdminService
  ],
  declarations: [FilterPipe, SafePipe,ProcessFilterPipe, ProcessesFilterPipe,ObjectConvert]
 
})
export class SharedModulesModule { }
