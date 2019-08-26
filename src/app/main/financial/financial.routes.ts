
import { Routes, RouterModule } from '@angular/router';
import { FinancialInitComponent } from './financial-init/financial-init.component';
import { FinancialViewerComponent } from './financial-viewer/financial-viewer.component';

export const routes: Routes = [
    {
        path: '', component: FinancialInitComponent,
        children: [
            { path: '', redirectTo: 'viewer', pathMatch: 'full' },
            { path: 'viewer', component: FinancialViewerComponent }
        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);