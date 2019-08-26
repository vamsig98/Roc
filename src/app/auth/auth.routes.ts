
import { Routes, RouterModule } from '@angular/router';
import { AuthInitComponent } from './auth-init/auth-init.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthLoginGuardService } from '../shared/shared-services/auth-guard/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: AuthInitComponent,
        canActivate: [AuthLoginGuardService],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent }
        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);
