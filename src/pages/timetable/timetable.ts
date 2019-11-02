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
  timeTable;
  weekdays;

  showSpinner: boolean = true;

  private basePath: string = 'timetable/';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

    let currentDate = new Date();
    this.weekdays = [
      { name: "sunday",   id: 'SUN'},
      { name: "monday",   id: "MON"}, 
      { name: "tuesday",  id: 'TUE'}, 
      { name: "wednesday",id: 'WED'}, 
      { name: "thursday", id: 'THU'}, 
      { name: "friday",   id: 'FRI'}
    ];
    if(currentDate.getDay() !== 6){
      this.selectedDay = this.weekdays[currentDate.getDay()].name;
    }else{
      this.selectedDay = "sunday";
    }
    
    this.listTimetable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

  segments(ev){
    this.selectedDay = ev.value;
    this.listTimetable();
  }

  listTimetable(){
    this.timeTable = this.educServices.getListRef(this.selectedDay, this.basePath, 'day');
    this.timeTable.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        });
      }       
}
