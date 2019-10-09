import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { GetServicesProvider } from '../../providers/get-services/get-services';
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

  //status=true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public db: AngularFireDatabase,
    public getServices: GetServicesProvider) {

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
    this.tasks = this.getServices.getTasks(this.id);

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
          this.concluded = Math.round(this.done * 100 / this.total);
          console.log(this.concluded);
        })     
  }

  editTask(task){

  }

  removeTask(key){
    this.getServices.remove(key);
  }

  makeDone(key){
    this.getServices.doneTask(key);
  }

  // onChange(task){
  //   if(this.status){
  //     this.openForm(task);
  //     this.status=false;
  //   }
  //   else{
  //     this.newTask();
  //     this.status=true;
  //   }
  // }

  openForm(task){
    console.log("Abrindo o form para criar tarefa");
    let newTaskModal = this.modalCtrl.create(NewTaskPage, {task}, {cssClass:"cont-modal"});
    newTaskModal.present();
  }

  newTask(){
    console.log("Criar nova tarefa!");
  }
}
