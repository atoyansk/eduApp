import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { NewCalendarPage } from '../new-calendar/new-calendar';
import { CalendarComponent } from "ionic2-calendar/calendar";
import { AngularFireDatabase } from '@angular/fire/database';
import { EducServicesProvider } from '../../providers/educ-services/educ-services';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  private basePath: string = 'calendar/';

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  calendarData;

  @ViewChild(CalendarComponent) myCalendar:CalendarComponent;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public db: AngularFireDatabase,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public educServices: EducServicesProvider) {

      this.loadCalendar();
  }

  ionViewDidLoad() {
    
  }

  loadCalendar() { 
    let loader = this.loadingCtrl.create({ 
      content: "Loading...", 
    }); 
    loader.present(); 
      this.calendarData = this.educServices.getList(this.basePath)
      this.calendarData.subscribe((res) => { 
        res.forEach(el => {
          this.eventSource.push({  
            title: el.title, 
            startTime: new Date(el.startTime), 
            endTime: new Date(el.endTime), 
            allDay: el.allDay
          }) 
          this.myCalendar.loadEvents();
        });    
      }); 
      loader.dismiss();  
      console.log(this.eventSource) 
    }


  addCalendar(){
    let newCalModal = this.modalCtrl.create(NewCalendarPage, {selectedDay: this.selectedDay}, {cssClass:"cont-modal"});
    newCalModal.present();

    newCalModal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = [];
        events.push(eventData);
        setTimeout(() => {
          for(let ev of events.slice(-1)){
            console.log(ev);
            this.educServices.createItem(this.basePath, { 
              title: ev.title, 
              startTime: ev.startTime.toString(),
              endTime: ev.endTime.toString(),
              allDay: ev.allDay 
            })
          }
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let dados = {};
    if(event.allDay === false){
      dados = {
        title: '' + event.title,
        subTitle: 'From: ' + start + '<br>To: ' + end,
        buttons: ['OK']
      }
    }else{
      dados = {
        title: '' + event.title,
        subTitle: 'The event lasts all day.',
        buttons: ['OK']
      }
    }
    
    let alert = this.alertCtrl.create(dados);
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

}
