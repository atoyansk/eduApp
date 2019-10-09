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

  getTasks(id){
    return this.db.list('tasks/', ref => 
    ref.orderByChild('workId').equalTo(id)).snapshotChanges()
    .map(changes =>{
      return changes.map(c=> {
        const data = c.payload.val();
        const id = c.payload.key;
        return { id, ...data };
      });
    })
  }

  doneTask(key){
    this.db.list('tasks/').update(key, {done: true});
  }

}
