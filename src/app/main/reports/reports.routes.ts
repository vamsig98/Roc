
import { Routes, RouterModule } from '@angular/router';
import { ReportsInitComponent } from './reports-init/reports-init.component';
import { ReportsViewerComponent } from './reports-viewer/reports-viewer.component';
import { HealthcheckReportsComponent } from './healthcheck-reports/healthcheck-reports.component'
import { HealthCheckReportsComponent } from './health-check-reports/health-check-reports.component';
export const routes: Routes = [
    {
        path: '', component: ReportsInitComponent,
        children: [
            { path: '', redirectTo: 'viewer', pathMatch: 'full' },
            { path: 'healthreports', component: HealthCheckReportsComponent },
            { path: 'viewer', component: ReportsViewerComponent },
            
        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);