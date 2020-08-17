import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
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
    this.educServices.getList(this.basePath).subscribe(
        res=> {
          this.works = res;
          console.log(res);
          this.showSpinner = false;
        })     
  }

  goTodo(dados){
    this.navCtrl.push(TodoPage, {dados: dados});
  }

}
