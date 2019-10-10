import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { TaskServicesProvider } from '../../providers/task-services/task-services';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { Task } from './task-model';

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  public addTask: FormGroup;
  workId;
  task;

  title: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public fb: FormBuilder,
    public db: AngularFireDatabase,
    public taskServices: TaskServicesProvider) {

      this.addTask = fb.group({
        name: new FormControl(''),
        description: this.fb.control(''),
        id: this.fb.control('')
      });

      this.workId = navParams.get('workId');
      this.task = navParams.get('task');

      if(this.task){
        this.title = "Update a Task"
      }else{
        this.title = "Add a New Task"
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  newTask(){
    this.db.list('tasks/').push({ 
      name: this.addTask.value.name, 
      description: this.addTask.value.description,
      done: false,
      workId: this.workId 
    }).then(()=>{
      this.dismiss();
    })
  }
}
