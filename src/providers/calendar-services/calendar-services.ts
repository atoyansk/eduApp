import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CalendarServicesProvider {

  private basePath: string = 'calendar/';

  constructor(public db: AngularFireDatabase) {
    
  }

  getCalendar(){
    return this.db.list(this.basePath).snapshotChanges()
    .map(changes =>{
      return changes.map(c=> {
        const data = c.payload.val();
        const id = c.payload.key;
        return { id, ...data };
      });
    })
  }

  createCalendar(value: any) {
    this.db.list(this.basePath).push(value)
      .catch(error => console.log(error))
  }

}
