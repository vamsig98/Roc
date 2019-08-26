import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainInitComponent } from './main-init/main-init.component';

import { routeRoot } from './main.routes';

import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { ChangePasswordComponent } from './main-init/change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routeRoot,
    SharedModulesModule,
    SharedComponentsModule
  ],
  entryComponents: [ChangePasswordComponent],
  declarations: [MainInitComponent, ChangePasswordComponent]
})
export class MainModule { }
