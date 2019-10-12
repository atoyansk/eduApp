import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorksPage } from './works';

import { ComponentsModule } from '../../components/components.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    WorksPage,
  ],
  imports: [
    IonicPageModule.forChild(WorksPage),
    ComponentsModule,
    RoundProgressModule
  ],
})
export class WorksPageModule {}
