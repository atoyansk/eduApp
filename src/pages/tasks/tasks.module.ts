import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';
import { WorksPage } from '../works/works';
import { MorePage } from '../more/more';
import { TaskPage } from '../task/task';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TasksPage,
    WorksPage,
    MorePage,
    TaskPage
  ],
  imports: [
    IonicPageModule.forChild(TasksPage),
    ComponentsModule
  ],
})
export class TasksPageModule {}
