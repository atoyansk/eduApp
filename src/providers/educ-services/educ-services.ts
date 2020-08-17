import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable()
export class EducServicesProvider {

  constructor(public db: AngularFireDatabase) {

  }

  documentToDomainObject = _ => {
      const object = _.payload.val();
      object.id = _.payload.key;
      return object;
  }

  getList(basePath: string){
    return this.db.list(basePath).snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(this.documentToDomainObject);
    }))
  }

  getListRef(id: string, basePath: string, field: string){
    return this.db.list(basePath, ref => 
    ref.orderByChild(field).equalTo(id)).snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(this.documentToDomainObject);
    }))
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
