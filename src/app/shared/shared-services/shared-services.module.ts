import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS, HttpResponse } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { ConfigService } from './config/config.service';
import { WorkItemsService } from './work-items/work-items.service';

import { AuthService } from './auth/auth.service';
import { UserService, SAMLUser } from './user/user.service';
import { AuthLoginGuardService, AuthSecuredGuardService } from './auth-guard/auth-guard.service';
import { AdminSecuredGuardService, AdminLoginGuardService } from './admin/admin-guard.service';
import { AdminService } from './admin/admin.service';
import { BpmnService } from './bpmn/bpmn.service';
import { FinancialService } from './financial/financial.service';
import { APPInterceptor } from './interceptor/app.interceptor';

import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
// import 'rxjs/add/observable/throw'
// import 'rxjs/add/operator/catch';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [{
        provide: ConfigService,
        useClass: ConfigService,
        deps: [
          HttpClient
        ]
      }, {
        provide: WorkItemsService,
        useClass: WorkItemsService,
        deps: [
          HttpClient,
          ConfigService
        ]
      }, {
        provide: APP_INITIALIZER,
        useFactory: configInitFactory,
        deps: [
          ConfigService
        ],
        multi: true
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: APPInterceptor,
        multi: true
      },
        AuthService,
        UserService,
        AdminService,
        AuthLoginGuardService,
        AuthSecuredGuardService,
        AdminLoginGuardService,
        AdminSecuredGuardService,
        BpmnService,
        FinancialService
      ]
    }
  }
}

export function configInitFactory(_configService: ConfigService) {
  return () => _configService.initializeApp();
}


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers = null;

    // let authUser: SAMLUser = AuthService.getLocalStorageUserInfo();
    // if (authUser && authUser.session_user) {
    //   headers = { headers: req.headers.set("session_user", authUser.session_user) };
    // }


    let authReq;
    if (headers) {
      authReq = req.clone(headers);
    } else {
      authReq = req.clone();
    }

    //send the newly created request
    return next.handle(authReq)
      .map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          // if (event.body && event.body.status && event.body.status == 'FAIL') {

          //   if (event.body.message == 'Invalid Session !') {
          //     setTimeout(() => {
          //       window.localStorage.clear();
          //       window.location.reload(true);
          //     }, 1000);

          //     throw Observable.throw(
          //       event.body.message
          //     );
          //   }

          //   throw Observable.throw(
          //     event.body.message || 'Something went wrong. Please try again later!'
          //   );
          // }

          if (event.body && event.body.result && !event.body.total) {
            return event.clone({
              body: event.body.result
            });
          }
        }

        return event;
      })
      .catch((error, caught) => {
        // handle the errors 
        switch (error.status) {
          case 401:
          case 403:
            //this._router.navigate(['/auth/logout']);
            setTimeout(() => {
              window.localStorage.clear();
              window.location.href="#/auth/logout";
            }, 1000);
            break;
        }
        return Observable.throw(error);
      });
  }
}