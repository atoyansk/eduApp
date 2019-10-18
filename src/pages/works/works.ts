import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { EducServicesProvider } from '../../providers/educ-services/educ-services'
import { TodoPage } from '../todo/todo';

@IonicPage()
@Component({
  selector: 'page-works',
  templateUrl: 'works.html',
})
export class WorksPage {

  works;
  showSpinner: boolean = true;

  private basePath: string = 'works/';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

      this.listWorks();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorksPage');
  }

  listWorks(){
    this.works = this.educServices.getList(this.basePath);

    this.works.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        })     
  }

  goTodo(data){
    this.navCtrl.push(TodoPage, {data: data});
  }

}
