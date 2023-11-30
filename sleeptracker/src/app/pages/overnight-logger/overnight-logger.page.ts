import { Component, OnInit } from '@angular/core';
import { formatISO, differenceInSeconds, intervalToDuration} from 'date-fns';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { SleepService } from 'src/app/services/sleep.service';


@Component({
  selector: 'app-overnight-logger',
  templateUrl: './overnight-logger.page.html',
  styleUrls: ['./overnight-logger.page.scss'],
})
export class OvernightLoggerPage implements OnInit {
  today:string;
  endDate:string;
  startDate:string;
  secondsSlept: number = 0;

  constructor(private sleepService:SleepService) { 
    this.today = formatISO(new Date());
    this.endDate = this.today;
    this.startDate = this.today;
   }

  ngOnInit() {
  }


  changeEndDate(value: any) {
    this.endDate = value || this.today; 
  }

  changeStartDate(value: any) {
    this.startDate = value || this.today; 
  }

  clear(instance:string){
    if(instance == 'end'){
      this.endDate= this.today;
    }
    else{
      this.startDate = this.today;
    }
  }

  updateHoursSlept(){
    if(this.startDate != this.endDate){
      let date1 = new Date(this.startDate);
      let date2 = new Date(this.endDate);

      this.secondsSlept = differenceInSeconds(date1,date2);
      let timeSlept = intervalToDuration({start: 0, end: this.secondsSlept * 1000});
      console.log(timeSlept);


    }
  }

  timeSlept(){
    let durationSlept = intervalToDuration({start: 0, end: this.secondsSlept * 1000});
    let outputStr = '' + durationSlept['hours'];

    if(durationSlept['hours']! > 0){
      outputStr += ' hours';
    }
    else{
      outputStr = 'no hours';
    }

    if(durationSlept['minutes']! > 0){
      outputStr += ' and ' + durationSlept['minutes'] + ' minute'
    }

    if(durationSlept['minutes']! > 1){
      outputStr += 's'
    }

    return outputStr;
    
  }

  submitHoursSlept(){
    this.sleepService.logOvernightData(new OvernightSleepData(new Date(this.startDate), new Date(this.endDate)))
  }
}
