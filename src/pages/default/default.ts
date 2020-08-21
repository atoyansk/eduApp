import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { TasksPage } from '../tasks/tasks';
import { HomePage } from '../home/home';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-default',
  templateUrl: 'default.html',
})
export class DefaultPage implements OnInit{

  @ViewChild('barCanvas') barCanvas: ElementRef;

  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.barChartMethod();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefaultPage');
  }

  goMsgs(){
    this.navCtrl.setRoot(HomePage, {tabIndex: 4});
  }

  goTasks(){
    this.navCtrl.setRoot(HomePage, {tabIndex: 3});
  }
  

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['1st Qtr', '2nd Qtr', '3rd Qtr'],
        datasets: [{
          label: 'Grades',
          data: [100, 80, 95],
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
