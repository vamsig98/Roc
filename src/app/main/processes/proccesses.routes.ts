
import { Routes, RouterModule } from '@angular/router';
import { ProcessesInitComponent } from './processes-init/processes-init.component';
import { ActiveWorkItemsComponent } from './active-work-items/active-work-items.component';
import { CompletedWorkItemsComponent } from './completed-work-items/completed-work-items.component';

export const routes: Routes = [{
    path: ':processId',
    component: ProcessesInitComponent
}];

export const routeRoot = RouterModule.forChild(routes);
