import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaytimeLoggerPage } from './daytime-logger.page';

const routes: Routes = [
  {
    path: '',
    component: DaytimeLoggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaytimeLoggerPageRoutingModule {}
