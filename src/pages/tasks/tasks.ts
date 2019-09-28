import { Component, ViewChild, ChangeDetectorRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { WorksPage } from '../works/works';
import { MorePage } from '../more/more';
import { TaskPage } from '../task/task';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  selectedSegment = 'task';

  public currentColor: string;
  
  @ViewChild(Content)
    myContent:Content;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private changeDetectorRef: ChangeDetectorRef,
    public renderer: Renderer) {
    this.currentColor = "transp";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  ngAfterViewInit(){

    this.myContent.ionScroll.subscribe((ev) => {
      this.scrollHandler(ev);
    });
  }

  scrollHandler(ev){
    ev.domWrite(() => {
      if(ev.scrollTop > 120){
        this.currentColor = "primary";
        //this.setTransitions();
        this.changeDetectorRef.detectChanges();
      }else{
        this.currentColor = "transp";
        //this.setTransitions();
        this.changeDetectorRef.detectChanges();
      }
    }) 
  }

  // setTransitions(){
  //   this.renderer.setElementStyle(this.currentColor, 'transition', '1s linear');
  // }

}
