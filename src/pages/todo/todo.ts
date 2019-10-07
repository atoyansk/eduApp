import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  data;
  name;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = navParams.get('data');
    this.name = this.data.name;
    console.log(this.data.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

}