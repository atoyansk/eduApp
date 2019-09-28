import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';
import { ShrinkingSegmentHeader } from '../../components/shrinking-segment-header/shrinking-segment-header';
import { WorksPage } from '../works/works';
import { MorePage } from '../more/more';
import { TaskPage } from '../task/task';

@NgModule({
  declarations: [
    TasksPage,
    ShrinkingSegmentHeader,
    WorksPage,
    MorePage,
    TaskPage
  ],
  imports: [
    IonicPageModule.forChild(TasksPage),
  ],
})
export class TasksPageModule {}
