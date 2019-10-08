import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { GetServicesProvider } from '../../providers/get-services/get-services'


@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  data;
  name;
  id;

  tasks;
  showSpinner: boolean = true;

  status=true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public getServices: GetServicesProvider) {

    this.data = navParams.get('data');
    this.name = this.data.name;
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
        })     
  }

  editTask(task){

  }

  removeTask(key){

  }

  makeDone(key){
    this.getServices.doneTask(key);
  }

  onChange(){
    if(this.status){
      this.openForm();
      this.status=false;
    }
    else{
      this.newTask();
      this.status=true;
    }
  }

  openForm(){
    console.log("Abrindo o form para criar tarefa");
  }

  newTask(){
    console.log("Criar nova tarefa!");
  }
}
