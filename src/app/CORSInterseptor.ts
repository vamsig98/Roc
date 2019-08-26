import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
  //import { AuthService } from './auth/auth.service';
  import { Observable } from 'rxjs/Observable';
  @Injectable()
  export class CORSInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
            'Access-Control-Allow-Origin': '*'
        }
      });
      return next.handle(request);
    }
  }