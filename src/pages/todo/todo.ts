import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { EducServicesProvider } from '../../providers/educ-services/educ-services';
import { NewTaskPage } from '../new-task/new-task';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  data;
  name;
  delivery;
  id;
  field;

  tasks;
  showSpinner: boolean = true;
  total: number = 0;
  done: number;
  concluded: number = 0;

  today = moment().format("YYYY-MM-DD");

  countDown;
  msgCount: string;

  private basePath: string = 'tasks/';
  private basePath2: string = 'works/';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

    this.data = navParams.get('data');
    this.name = this.data.name;
    this.delivery = this.data.deliveryDate;
    this.id = this.data.id;

    this.field = 'workId';

    this.listTasks();
    this.dateDifference();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  listTasks(){
    this.tasks = this.educServices.getListRef(this.id, this.basePath, this.field);

    this.tasks.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
          this.done = 0;
          res.forEach(r => {
            if(r.done === true){
              this.done = this.done + 1
              console.log(this.done)
            }
          })
          this.total = Object.keys(res).length;

          console.log("Total: " + this.total, "Done: " + this.done);

          if(this.total && this.done){
            this.concluded = Math.round(this.done * 100 / this.total);
            console.log(this.concluded);
            this.educServices.updateItem(this.id, this.basePath2, {concluded: this.concluded});
          }else{
            this.concluded = 0;
          }
          
        })     
  }

  dateDifference() {
    let date1 = moment(this.today, "YYYY-MM-DD");
    let date2 = moment(this.delivery, "YYYY-MM-DD"); 
    let duration = moment.duration(date2.diff(date1));
    this.countDown = Math.round(duration.asDays());

    if(this.countDown === 0){
      this.msgCount = "It's today!";
    }else if (this.countDown === 1){
      this.msgCount = "It's tomorrow!";
    }else{
      this.msgCount = "You have " + this.countDown + " days.";
    }
}

  editTask(task){
    let newTaskModal = this.modalCtrl.create(NewTaskPage, {task}, {cssClass:"cont-modal"});
    newTaskModal.present();
    console.log(task);
  }

  removeTask(key){
    this.educServices.removeItem(key, this.basePath);
  }

  makeDone(key){
    this.educServices.updateItem(key, this.basePath, {done: true});
  }

  newTask(workId){
    let newTaskModal = this.modalCtrl.create(NewTaskPage, {workId}, {cssClass:"cont-modal"});
    newTaskModal.present();
    console.log(workId);
  }
}
