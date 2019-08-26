import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404/page-404.component';
import { Page401Component } from './page-401/page-401.component';
import { ErrorInitComponent } from './error-init/error-init.component';

import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

import {SharedModulesModule} from '../shared/shared-modules/shared-modules.module';

import { routeRoot } from './error.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModulesModule,
    SharedComponentsModule,
    routeRoot
  ],
  declarations: [Page401Component, Page404Component, ErrorInitComponent]
})
export class ErrorModule { }
