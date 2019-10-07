import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { GetServicesProvider } from '../../providers/get-services/get-services'
import { TodoPage } from '../todo/todo';

@IonicPage()
@Component({
  selector: 'page-works',
  templateUrl: 'works.html',
})
export class WorksPage {

  works;
  subjectImg: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public getServices: GetServicesProvider) {

      this.listWorks();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorksPage');
  }

  listWorks(){
    this.works = this.getServices.getWorks();

    this.works.subscribe(
        res=> {
          console.log(res);
          
        })     
  }

  goTodo(data){
    this.navCtrl.push(TodoPage, {data: data});
  }

}
