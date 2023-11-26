import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvernightLoggerPage } from './overnight-logger.page';

const routes: Routes = [
  {
    path: '',
    component: OvernightLoggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightLoggerPageRoutingModule {}
