import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsencesPage } from './absences';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AbsencesPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsencesPage),
    ComponentsModule
  ],
})
export class AbsencesPageModule {}
