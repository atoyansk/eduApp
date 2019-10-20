import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { EducServicesProvider } from '../../providers/educ-services/educ-services';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-furlough',
  templateUrl: 'furlough.html',
})
export class FurloughPage {

  selectedSegment = 'hour';

  data;
  subject;
  dateAbs;
  id;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

      this.data = navParams.get('data');
      this.subject = this.data.subject;
      this.dateAbs = this.data.date;
      this.id = this.data.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FurloughPage');
    console.log(this.data);
  }

}
