
import { Routes, RouterModule } from '@angular/router';
import { MainInitComponent } from './main-init/main-init.component';

import { AuthSecuredGuardService } from '../shared/shared-services/auth-guard/auth-guard.service';
import { ChangePasswordComponent } from './main-init/change-password/change-password.component';
import { AdminLoginGuardService, AdminSecuredGuardService } from '../shared/shared-services/admin/admin-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: MainInitComponent,
        canActivate: [AuthSecuredGuardService],
        children: [
            { path: '', redirectTo: 'operational', pathMatch: 'full' },
            { path: 'change-password', component : ChangePasswordComponent, },
            { path: 'operational', loadChildren: './operational/operational.module#OperationalModule' },
            { path: 'processes', loadChildren: './processes/processes.module#ProcessesModule' },
            { path: 'financial', loadChildren: './financial/financial.module#FinancialModule', canActivate: [AdminSecuredGuardService]},
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' }
        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);
