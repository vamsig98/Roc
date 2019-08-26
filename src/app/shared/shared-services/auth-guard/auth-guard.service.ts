import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';

/**
 * Handles all the authenticated and un-authenticated routes
 */
@Injectable()
export class AuthLoginGuardService implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {
    }

    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(["/app/operational"]);
        return false;
    }
}

/**
 * Handles all the authenticated and un-authenticated routes
 */
@Injectable()
export class AuthSecuredGuardService implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {
    }

    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(["/auth/login"]);
        return false;
    }
}

