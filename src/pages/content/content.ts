import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { EducServicesProvider } from '../../providers/educ-services/educ-services';

import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  data;
  class;
  subject;
  dateCnt;
  id;
  thumb: any;

  cont: Array<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private platForm: Platform,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

      this.data = navParams.get('data');
      this.class = this.data.class;
      this.subject = this.data.subject;
      this.dateCnt = this.data.date;
      this.id = this.data.id;
  }

  ionViewDidLoad() {
    console.log(this.data);
    this.cont = [];

    this.cont.push(this.data);
    console.log(this.cont);
  }

  generateArray(obj){
    if(obj){
      return Object.keys(obj).map((key)=>{ return obj[key]});
    }   
  }

  thumbnail(data){
    let url = data;
    let videoId = String(url.split('//').pop().split('=').pop());
    this.thumb = 'http://img.youtube.com/vi/'+videoId+'/1.jpg';

    return this.thumb;
  }

  openLink(detail) {
    // if (this.platForm.is('cordova')) {
    //   this.youtube.openLink(detail);
    // } else {
      window.open(detail);
    // }
  }

}
