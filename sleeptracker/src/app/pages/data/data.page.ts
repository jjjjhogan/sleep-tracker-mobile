import { Component, OnInit } from '@angular/core';
import { SleepService } from 'src/app/services/sleep.service';
import { SleepData } from 'src/app/data/sleep-data';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  sleepData:SleepData[] = [];

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
    this.sleepData = this.sleepService.getAllData();
  }

  deleteData(id:string){
    this.sleepData = this.sleepData.filter((data) => data.id != id);

      
  }

}
