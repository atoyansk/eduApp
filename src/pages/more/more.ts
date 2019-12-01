import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { EducServicesProvider } from '../../providers/educ-services/educ-services';
import { ContentPage } from '../content/content';



@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  contents;
  showSpinner: boolean = true;

  private basePath: string = 'contents/';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public educServices: EducServicesProvider) {

      this.listContents();
      //this.moreContents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  listContents(){
    this.contents = this.educServices.getList(this.basePath);

    this.contents.subscribe(
        res=> {
          console.log(res);
          this.showSpinner = false;
        })     
  }

  goContent(data){
    this.navCtrl.push(ContentPage, {data: data});
  }

  // newContent(){
  //   this.educServices.createItem(this.basePath, { 
  //     subject: 'Mathematics', 
  //     date: '2019-09-22',
  //     class: 'Area of a triangle',
  //     contents: [
  //       {type: 'link',
  //         content: 'https://www.mathgoodies.com/lessons/vol1/area_triangle'
  //       }
  //     ]
  //   })
  // }

  // moreContents(){
  //   this.educServices.createItem(this.basePath + '/-Lv1KaV2bmkTB2YrUTEt/' + 'contents', { 
  //       type: 'video',
  //         content: 'https://www.youtube.com/watch?v=Lo_dJZZsAws'
  //   })
  // }

}
