import { Component, ViewChild, ChangeDetectorRef, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage {

  selectedSegment = 'gradcert';

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

  ionViewDidLoad() {
  }

  ngAfterViewInit(){

    this.myContent.ionScroll.subscribe((ev) => {
      this.scrollHandler(ev);
    });

    //this.toolbarstyle = this.tool._elementRef.nativeElement;
  }

  scrollHandler(ev){
    ev.domWrite(() => {
      if(ev.scrollTop > 120){
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
