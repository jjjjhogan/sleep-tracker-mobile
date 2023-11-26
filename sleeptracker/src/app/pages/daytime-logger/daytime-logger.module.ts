import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaytimeLoggerPageRoutingModule } from './daytime-logger-routing.module';

import { DaytimeLoggerPage } from './daytime-logger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaytimeLoggerPageRoutingModule
  ],
  declarations: [DaytimeLoggerPage]
})
export class DaytimeLoggerPageModule {}
