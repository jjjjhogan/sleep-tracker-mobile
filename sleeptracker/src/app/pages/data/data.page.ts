import { Component, OnInit } from '@angular/core';
import { SleepService } from 'src/app/services/sleep.service';
import { SleepData } from 'src/app/data/sleep-data';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  sleepData:SleepData[] = [];

  constructor(private storage: Storage, private sleepService:SleepService) { }

  async ngOnInit() {
    this.sleepData = await this.sleepService.getAllData();
    console.log(this.sleepData);
  }

  deleteData(id: string){
    this.storage.remove(id);
  }


}
