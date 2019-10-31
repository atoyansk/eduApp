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

  timetable;

  showSpinner: boolean = true;

  private basePath: string = 'timetable/';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    this.selectedDay = weekdays[currentDate.getDay()];

    //this.newTimetable();
    this.listTimetable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

  listTimetable(){
    this.timetable = this.educServices.getList(this.basePath);

    this.timetable.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        })     
  }

  // newTimetable(){
  //   this.educServices.createItem(this.basePath, { 
  //     sunday: [
  //       {
  //         number: 1,
  //         subject: 'Mathematics 4',
  //         teacher: 'John Smith',
  //         time: '08:10 - 08:55'
  //       },
  //       {
  //         number: 2,
  //         subject: 'Mathematics 4',
  //         teacher: 'John Smith',
  //         time: '09:00 - 09:45'
  //       },
  //       {
  //         number: 3,
  //         subject: 'English 5',
  //         teacher: 'Peter Strauss',
  //         time: '09:50 - 10:35'
  //       },
  //       {
  //         number: 4,
  //         subject: 'Hebrew 4',
  //         teacher: 'Tamar Cohen',
  //         time: '11:00 - 11:45'
  //       },
  //       {
  //         number: 5,
  //         subject: 'History 4',
  //         teacher: 'William Doe',
  //         time: '11:50 - 12:35'
  //       },
  //       {
  //         number: 6,
  //         subject: 'Biology 1',
  //         teacher: 'Chen Levi',
  //         time: '12:45 - 13:30'
  //       },
  //       {
  //         number: 7,
  //         subject: 'Biology 1',
  //         teacher: 'Chen Levi',
  //         time: '13:35 - 14:20'
  //       }
  //     ]
  //   })
  // }

}
