import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EducServicesProvider {

  constructor(public db: AngularFireDatabase) {

  }

  getList(basePath: string){
    return this.db.list(basePath).snapshotChanges()
    .map(changes =>{
      return changes.map(c=> {
        const data = c.payload.val();
        const id = c.payload.key;
        return { id, ...data };
      });
    })
  }

  getListRef(id: string, basePath: string, field: string){
    return this.db.list(basePath, ref => 
    ref.orderByChild(field).equalTo(id)).snapshotChanges()
    .map(changes =>{
      return changes.map(c=> {
        const data = c.payload.val();
        const id = c.payload.key;
        return { id, ...data };
      });
    })
  }

  removeItem(key: string, basePath: string) {
    return this.db.list(basePath).remove(key);
  }

  updateItem(key: string, basePath: string, value: any): void {
    this.db.list(basePath).update(key, value)
      .catch(error => console.log(error))
  }

  createItem(basePath: string, value: any) {
    this.db.list(basePath).push(value)
      .catch(error => console.log(error))
  }

}
