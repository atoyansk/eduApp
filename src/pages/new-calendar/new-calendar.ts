import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { Calendar } from '@ionic-native/calendar';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-new-calendar',
  templateUrl: 'new-calendar.html',
})
export class NewCalendarPage {

  public addCalendar: FormGroup;

  event = { title: "", location: "", message: "", startDate: "", endDate: "" };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public fb: FormBuilder,
    public db: AngularFireDatabase,
    private calendar: Calendar) {

    this.addCalendar = fb.group({
      name: new FormControl(''),
      location: this.fb.control(''),
      notes: this.fb.control(''),
      startDate: this.fb.control(''),
      endDate: this.fb.control('')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCalendarPage');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  newEvent(){
    this.calendar.createEvent(this.addCalendar.value.name, 
      this.addCalendar.value.location, 
      this.addCalendar.value.notes, 
      new Date(this.addCalendar.value.startDate), 
      new Date(this.addCalendar.value.endDate)).then(
      (msg) => {
        this.dismiss();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
