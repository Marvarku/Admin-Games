
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/dashboard/games', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'starter',
                loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
            }
        ]
    },

    {
        path: '**',
        redirectTo: '/authentication/404'
    }
];
