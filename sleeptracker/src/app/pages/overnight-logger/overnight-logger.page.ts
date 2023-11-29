import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-overnight-logger',
  templateUrl: './overnight-logger.page.html',
  styleUrls: ['./overnight-logger.page.scss'],
})
export class OvernightLoggerPage implements OnInit {
  today:string;
  endDate:string;
  startDate:string;

  constructor() { 
    this.today = new Date(new Date(Date.now()).toLocaleDateString()).toISOString();
    this.endDate = this.today;
    this.startDate = this.today;
   }

  ngOnInit() {
  }


  changeEndDate(value: any) {
    this.endDate = value || ''; 
    console.log(this.parseDate(this.endDate!))
  }

  changeStartDate(value: any) {
    this.startDate = value || ''; 
    console.log(this.parseDate(this.startDate!))
  }

  clear(instance:string){
    if(instance == 'end'){
      this.endDate= this.today;
    }
    else{
      this.startDate = this.today;
    }
  }

  parseDate(isoDate:string){
    console.log(isoDate);
    return format(parseISO(isoDate), 'PPpp');
  }
}
