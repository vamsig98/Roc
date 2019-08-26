
import { Routes, RouterModule } from '@angular/router';
import { PageSendemailComponent } from './page-sendemail/page-sendemail.component';
// import { Page404Component } from './page-404/page-404.component';


export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'app', loadChildren: './main/main.module#MainModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    // { path: '**', redirectTo: 'error' },
    { path: 'error', loadChildren: './error/error.module#ErrorModule' },
    { path : 'unauthorize',  component :PageSendemailComponent}

];

export const routeRoot = RouterModule.forRoot(routes, { useHash: true });
