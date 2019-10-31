import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {

  selectedDay: string;
  classes: any = new Array(10);

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    this.selectedDay = weekdays[currentDate.getDay()];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

}
