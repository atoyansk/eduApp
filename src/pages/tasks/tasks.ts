import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorksPage } from '../works/works';
import { MorePage } from '../more/more';
import { TaskPage } from '../task/task';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  selectedSegment = 'task';
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  // scrollHandler(event){
  //   console.log("####SCROLL EVENT : ", event.scrollTop)
  //   if(event.scrollTop > 132){
  //     let css = ".toolbar-background {background-color: #4527A0 !important;}";
  //   }else{
  //     let css = ".toolbar-background {background: transparent !important;}";
  //   }
  // }

}
