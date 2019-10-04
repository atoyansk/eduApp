import { Component, ViewChild, ChangeDetectorRef, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  selectedSegment = 'task';

  public currentColor: string;

  //toolbarstyle;

  //@ViewChild('tool') tool:Content;
  
  @ViewChild(Content)
    myContent:Content;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private changeDetectorRef: ChangeDetectorRef,
    public renderer: Renderer,
    public element: ElementRef) {

    this.currentColor = "transp";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  ngAfterViewInit(){

    this.myContent.ionScroll.subscribe((ev) => {
      this.scrollHandler(ev);
    });

    //this.toolbarstyle = this.tool._elementRef.nativeElement;
  }

  scrollHandler(ev){
    ev.domWrite(() => {
      if(ev.scrollTop >= 120){
        this.currentColor = "branco";
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
  //   this.renderer.setElementStyle(this.toolbarstyle, 'transition', '1s linear');
  // }

}
