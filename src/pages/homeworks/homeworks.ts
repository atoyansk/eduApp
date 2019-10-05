import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-homeworks',
  templateUrl: 'homeworks.html',
})
export class HomeworksPage {

  somethings: any = new Array(20);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworksPage');
  }

}
