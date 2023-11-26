import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: NavTabsComponent,
   children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'overnight-logger',
      loadChildren: () => import('./pages/overnight-logger/overnight-logger.module').then( m => m.OvernightLoggerPageModule)
    },
    {
      path: 'daytime-logger',
      loadChildren: () => import('./pages/daytime-logger/daytime-logger.module').then( m => m.DaytimeLoggerPageModule)
    },
    {
      path: 'data',
      loadChildren: () => import('./pages/data/data.module').then( m => m.DataPageModule)
    },

   ]
  }
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
