
import { Routes, RouterModule } from '@angular/router';
import { ErrorInitComponent } from './error-init/error-init.component';
import { Page401Component } from './page-401/page-401.component';
import { Page404Component } from './page-404/page-404.component';


export const routes: Routes = [
    {
        path: '',
        component: ErrorInitComponent,
        children: [
            { path: '', redirectTo: '404', pathMatch: 'full' },
            { path: '401', component: Page401Component },
            { path: '404', component: Page404Component }        ]
    }
];

export const routeRoot = RouterModule.forChild(routes);
