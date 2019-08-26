import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthInitComponent } from './auth-init/auth-init.component';

import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

import {SharedModulesModule} from '../shared/shared-modules/shared-modules.module';

import { routeRoot } from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModulesModule,
    SharedComponentsModule,
    
    routeRoot
  ],
  declarations: [LoginComponent, LogoutComponent, AuthInitComponent]
})
export class AuthModule { }
