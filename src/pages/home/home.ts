import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Tabs } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 
  
  tab1 = 'DatePage';
  tab2 = 'GradesPage';
  tab3 = 'DefaultPage';
  tab4 = 'TasksPage';
  tab5 = 'MessagesPage';

  mySelectedIndex;

  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions, private app: App) {
      
      this.mySelectedIndex = navParams.data.tabIndex || 2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.mySelectedIndex);
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //   console.log(this.educTabs);
  //   this.educTabs.select(1);
  //   }, 500);
  // }

  private getAnimationDirection(index:number):string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return('right');
    }
  }

  public transition(e:any):void {    
    let options: NativeTransitionOptions = {
     direction:this.getAnimationDirection(e.index),
     duration: 250,
     slowdownfactor: -1,
     slidePixels: 0,
     iosdelay: 20,
     androiddelay: 0,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.fade(null);
  }

}
