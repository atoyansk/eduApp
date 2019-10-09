import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { GetServicesProvider } from '../../providers/get-services/get-services';
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

  public addTask: FormGroup;
  id;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public fb: FormBuilder,
    public db: AngularFireDatabase,
    public getServices: GetServicesProvider) {

      this.addTask = fb.group({
        name: new FormControl(''),
        description: this.fb.control(''),
        id: this.fb.control('')
      });

      this.id = navParams.get('task');
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
      workId: this.id 
    }).then(()=>{
      this.dismiss();
    })
  }
}
