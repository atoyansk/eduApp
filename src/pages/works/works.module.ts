import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorksPage } from './works';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WorksPage,
  ],
  imports: [
    IonicPageModule.forChild(WorksPage),
    ComponentsModule
  ],
})
export class WorksPageModule {}
