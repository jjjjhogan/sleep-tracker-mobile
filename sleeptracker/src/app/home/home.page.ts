import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
  constructor(public sleepService:SleepService) {
	}

	ngOnInit() {
	}

	
}
