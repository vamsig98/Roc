import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class APPInterceptor implements HttpInterceptor {
  private _router:Router;  
  private _authService:AuthService;
  constructor(private inj: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.body && event.body.result && !event.body.total) {
            return event.clone({
              body: event.body.result
            });
        }
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this._router = this.inj.get(Router);
        this._authService = this.inj.get(AuthService);    
        if (err.status === 401) {
            window.localStorage.clear();
            this._authService.authUser = null;
            this._router.navigate(["/auth/logout"]);
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
}