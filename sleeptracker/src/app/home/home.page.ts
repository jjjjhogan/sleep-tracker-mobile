import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
  constructor(public storage: Storage, public sleepService:SleepService) {
	}

	ngOnInit() {
	}

	
}
