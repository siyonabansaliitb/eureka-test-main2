import { Routes } from '@angular/router';
import { CompiComponent } from './compi/compi.component';
import { LandingComponent } from './landing/landing.component';

import { FullComponent } from './layouts/full/full.component';
import { TracksComponent } from './tracks/tracks.component';

export const AppRoutes: Routes = [
  {
    path: 'dash',
    component: FullComponent,
    children: [
      {
        path: 'dash',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dash',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  { path: '', component: LandingComponent },
  { path: 'compi', component: CompiComponent },
  { path: 'tracks', component: TracksComponent },

];
