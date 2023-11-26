import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvernightLoggerPageRoutingModule } from './overnight-logger-routing.module';

import { OvernightLoggerPage } from './overnight-logger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightLoggerPageRoutingModule
  ],
  declarations: [OvernightLoggerPage]
})
export class OvernightLoggerPageModule {}
