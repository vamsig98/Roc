import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';

/**
 * Handles all the authenticated and un-authenticated routes
 */
@Injectable()
export class AdminLoginGuardService implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {
    }

    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAdminAuthenticated()) {
            return true;
        }
        this.router.navigate(["/admin/configuration/processlist"]);
        return false;
    }
}

/**
 * Handles all the authenticated and un-authenticated routes
 */
@Injectable()
export class AdminSecuredGuardService implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {
    }

    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAdminAuthenticated() || this.authService.isAdmin) {
            return true;
        }
        this.router.navigate(["/admin/login"]);
        return false;
    }
}

