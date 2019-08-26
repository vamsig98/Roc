import { BrowserModule ,} from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,APP_INITIALIZER } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppComponent } from './app.component';
import { initializer } from './utils/app-init';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { Page404Component } from './page-404/page-404.component';

import { routeRoot } from './app.routes';

import { SharedServicesModule } from './shared/shared-services/shared-services.module';

import { ToastrModule } from 'ngx-toastr';
import { setTheme } from 'ngx-bootstrap/utils';
import {ServiceInjector} from '../app/shared/shared-modules/props-provider/injector.service';
import {Injector} from "@angular/core";
import { QuillModule } from 'ngx-quill';
import { NvD3Module  } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
// import {NgxEditorModule} from 'ngx-editor';
import { SERVE_THTOUGH_FLASK } from '../environments/config';
// import {NgxEditorModule} from 'ngx-editor';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {NgxPaginationModule} from 'ngx-pagination';
import { CORSInterceptor } from './CORSInterseptor';
import { SharedDirectivesModule } from './shared/shared-directives/shared-directive.module';
import { PageSendemailComponent } from './page-sendemail/page-sendemail.component';
import { CustomMaterialModule } from './shared/shared-modules/custom-material/custom-material.module';

let providers =[]
if (!SERVE_THTOUGH_FLASK){
  providers=[{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
  }]
}
@NgModule({
  declarations: [
    AppComponent,
    PageSendemailComponent
    // Page404Component
  ],
  imports: [
    CustomMaterialModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    routeRoot,
    SharedServicesModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NvD3Module,
    QuillModule,
    KeycloakAngularModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxPaginationModule,
    SharedDirectivesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){    // Create global Service Injector.
    ServiceInjector.injector = this.injector;
  }
 }
