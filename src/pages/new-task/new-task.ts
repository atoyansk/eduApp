import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { EducServicesProvider } from '../../providers/educ-services/educ-services';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  private basePath: string = 'tasks/';

  public addTask: FormGroup;
  public updateTask: FormGroup;

  workId;
  task;

  upName;
  upDescription;
  upKey;

  title: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public fb: FormBuilder,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

      this.workId = navParams.get('workId');
      this.task = navParams.get('task');
      if(this.task){
        this.upKey = this.task.id;
        this.upName = this.task.name;
        this.upDescription = this.task.description;
      }
      
      this.addTask = fb.group({
        name: new FormControl(''),
        description: this.fb.control(''),
        id: this.fb.control('')
      });

      this.updateTask = fb.group({
        name: this.fb.control(this.upName),
        description: this.fb.control(this.upDescription)
      });



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
    this.educServices.createItem(this.basePath, { 
      name: this.addTask.value.name, 
      description: this.addTask.value.description,
      done: false,
      workId: this.workId 
    })
    this.dismiss();
  }

  upTask(key){
    this.educServices.updateItem(key, this.basePath, {
      name: this.updateTask.value.name, 
      description: this.updateTask.value.description
    });
    this.dismiss();
  }
}
