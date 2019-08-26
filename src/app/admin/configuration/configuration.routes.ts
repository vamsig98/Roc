
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationInitComponent } from './configuration-init/configuration-init.component';
import { AdminSecuredGuardService } from '../../shared/shared-services/admin/admin-guard.service';
import { ProcessesComponent } from './processes/processes.component';
import { ProcessdetailsComponent } from './processdetails/processdetails.component';
import { SubwayConfigComponent } from './subway-config/subway-config.component';
import { ThroughputReconComponent } from './throughput-recon/throughput-recon.component';
import { BasicComponent } from './basic/basic.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { LobsComponent } from './lobs/lobs.component';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [
    {
        path: '',
        component: ConfigurationInitComponent,
        canActivate: [AdminSecuredGuardService],
        children: [
            { path: '', redirectTo: 'processlist', pathMatch: 'full' },
            { path: 'processlist', component: ProcessesComponent },
            { path: 'processlist/:id/:name', component: ProcessdetailsComponent },
            { path: 'subwaymap', component: SubwayConfigComponent },
            { path: 'throughput', component: ThroughputReconComponent },
            { path: 'smtpServer', component: BasicComponent },
            {path: 'EmailTemaplte', component: EmailTemplateComponent},
            {path: 'Lobs', component: LobsComponent},
            {path: 'UsersList', component: UsersListComponent},
        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);
