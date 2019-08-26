
import { Routes, RouterModule } from '@angular/router';
import { OperationalDashboardComponent } from './operational-dashboard/operational-dashboard.component';
import { OperationalInitComponent } from './operational-init/operational-init.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { LogsTimelineComponent } from './work-item/logs-timeline/logs-timeline.component';
import { RecordsComponent } from './work-item/records/records.component';

export const routes: Routes = [
    {
        path: '', component: OperationalInitComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: OperationalDashboardComponent },
            {
                path: 'work-item/:status/:jobId/:processName', component: WorkItemComponent,
                children: [
                    { path: '', redirectTo: 'records', pathMatch: 'full' },
                    { path: 'records', component: RecordsComponent },
                    { path: 'log-items', component: LogsTimelineComponent }
                ]
            }
        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);
