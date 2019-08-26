
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginGuardService } from '../shared/shared-services/auth-guard/auth-guard.service';
import { AdminInitComponent } from './admin-init/admin-init.component';
import { AdminLoginGuardService, AdminSecuredGuardService } from '../shared/shared-services/admin/admin-guard.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminInitComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: AdminLoginComponent, canActivate: [AdminLoginGuardService] },
            { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule', canActivate: [AdminSecuredGuardService] },
        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);
