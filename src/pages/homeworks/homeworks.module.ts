import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworksPage } from './homeworks';

@NgModule({
  declarations: [
    HomeworksPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworksPage),
  ],
})
export class TaskPageModule {}
