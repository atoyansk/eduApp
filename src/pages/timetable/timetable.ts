import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { EducServicesProvider } from '../../providers/educ-services/educ-services'

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {

  selectedDay: string;
  classes: any = new Array(10);

  timeSunday;
  timeMonday;
  timeTuesday;
  timeWednesday;
  timeThursday;
  timeFriday;

  weekdays = [];

  showSpinner: boolean = true;

  private basePath: string = 'timetable/';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

    let currentDate = new Date();
    this.weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    this.selectedDay = this.weekdays[currentDate.getDay()];

    //this.newTimetable();
    this.listTimetable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

  listTimetable(){
    this.timeSunday = this.educServices.getList(this.basePath + this.weekdays[0]);
    this.timeSunday.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        });
        
    this.timeMonday = this.educServices.getList(this.basePath + this.weekdays[1]);
    this.timeMonday.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        });

    this.timeTuesday = this.educServices.getList(this.basePath + this.weekdays[2]);
    this.timeTuesday.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        });

    this.timeWednesday = this.educServices.getList(this.basePath + this.weekdays[3]);
    this.timeWednesday.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        }); 
        
    this.timeThursday = this.educServices.getList(this.basePath + this.weekdays[4]);
    this.timeThursday.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        });

    this.timeFriday = this.educServices.getList(this.basePath + this.weekdays[5]);
    this.timeFriday.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        });
  }

  // newTimetable(){
  //   this.educServices.createItem(this.basePath + this.weekdays[1], { 
  //         number: 10,
  //         subject: '',
  //         teacher: '',
  //         time: ''    
  //   })
  // }

}
