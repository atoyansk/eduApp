import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class GetServicesProvider {

  constructor(public db: AngularFireDatabase) {
    
  }

  getWorks(){
    return this.db.list('works/').snapshotChanges()
    .map(changes =>{
      return changes.map(c=> {
        const data = c.payload.val();
        const id = c.payload.key;
        return { id, ...data };
      });
    })
  }

  getTasks(){
    return this.db.list('tasks/').snapshotChanges()
    .map(changes =>{
      return changes.map(c=> {
        const data = c.payload.val();
        const id = c.payload.key;
        return { id, ...data };
      });
    })
  }

  createTask(){
    this.db.list('tasks/').push({ 
      name: task.name, 
      description: task.description 
    })
  }

}
