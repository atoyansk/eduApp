import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { TaskServicesProvider } from '../../providers/task-services/task-services';
import { WorkServicesProvider } from '../../providers/work-services/work-services';
import { NewTaskPage } from '../new-task/new-task';


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

  tasks;
  showSpinner: boolean = true;
  total: number = 0;
  done: number;
  concluded: number = 0;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public db: AngularFireDatabase,
    public taskServices: TaskServicesProvider,
    public workServices: WorkServicesProvider) {

    this.data = navParams.get('data');
    this.name = this.data.name;
    this.delivery = this.data.deliveryDate;
    this.id = this.data.id;

    this.listTasks();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  listTasks(){
    this.tasks = this.taskServices.getTasks(this.id);

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
            this.workServices.pctWork(this.id, {concluded: this.concluded});
          }else{
            this.concluded = 0;
          }
          
        })     
  }

  editTask(task){
    let newTaskModal = this.modalCtrl.create(NewTaskPage, {task}, {cssClass:"cont-modal"});
    newTaskModal.present();
    console.log(task);
  }

  removeTask(key){
    this.taskServices.remove(key);
  }

  makeDone(key){
    this.taskServices.doneTask(key);
  }

  newTask(workId){
    let newTaskModal = this.modalCtrl.create(NewTaskPage, {workId}, {cssClass:"cont-modal"});
    newTaskModal.present();
    console.log(workId);
  }
}
