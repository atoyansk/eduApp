import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { TasksPage } from '../tasks/tasks';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-default',
  templateUrl: 'default.html',
})
export class DefaultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefaultPage');
  }

  goMsgs(){
    this.navCtrl.setRoot(HomePage, {tabIndex: 4});
  }

  goTasks(){
    this.navCtrl.setRoot(HomePage, {tabIndex: 3});
  }

}
