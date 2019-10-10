import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Task } from '../../pages/new-task/task-model';

@Injectable()
export class TaskServicesProvider {

  private basePath: string = 'tasks/';

  task: AngularFireList<Task[]>;

  constructor(public db: AngularFireDatabase) {
    
  }

  getTasks(id: string){
    return this.db.list(this.basePath, ref => 
    ref.orderByChild('workId').equalTo(id)).snapshotChanges()
    .map(changes =>{
      return changes.map(c=> {
        const data = c.payload.val();
        const id = c.payload.key;
        return { id, ...data };
      });
    })
  }

  doneTask(key: string){
    this.db.list(this.basePath).update(key, {done: true});
  }

  remove(key: string) {
    return this.db.list(this.basePath).remove(key);
  }

  updateTask(key: string, value: any): void {
    this.db.list(this.basePath).update(key, value)
      .catch(error => console.log(error))
  }

}
