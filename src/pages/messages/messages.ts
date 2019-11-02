import { Component, ChangeDetectorRef, Renderer, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  selectedSegment = 'inbox';

  public currentColor: string;

  @ViewChild(Content)
  myContent:Content;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private changeDetectorRef: ChangeDetectorRef,
    public renderer: Renderer,
    public element: ElementRef) {

      this.currentColor = "transp";
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

}
