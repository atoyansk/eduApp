import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { EducServicesProvider } from '../../providers/educ-services/educ-services'
import { JustifyPage } from '../justify/justify';

@IonicPage()
@Component({
  selector: 'page-absences',
  templateUrl: 'absences.html',
})
export class AbsencesPage {

  absences;
  showSpinner: boolean = true;

  private basePath: string = 'absences/';


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

      this.listAbsences();
      //this.newAbsence();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsencesPage');
  }

  listAbsences(){
    this.absences = this.educServices.getList(this.basePath);

    this.absences.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        })     
  }

  goJustify(data){
    this.navCtrl.push(JustifyPage, {data: data});
  }

  newAbsence(){
    this.educServices.createItem(this.basePath, { 
      subject: 'Mathematics', 
      date: '2019-09-22',
      hasLeave: false
    })
  }

}
