import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';
import { SleepService } from 'src/app/services/sleep.service';

@Component({
  selector: 'app-daytime-logger',
  templateUrl: './daytime-logger.page.html',
  styleUrls: ['./daytime-logger.page.scss'],
})
export class DaytimeLoggerPage implements OnInit {
  options:any[];

  constructor(private sleepService:SleepService) {
    this.options = StanfordSleepinessData.ScaleValues;
   }

  ngOnInit() {
  }

  submitSleepiness(index:number){
    this.sleepService.logSleepinessData(new StanfordSleepinessData(index));
  }
}
