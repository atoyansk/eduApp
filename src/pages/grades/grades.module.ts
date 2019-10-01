import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradesPage } from './grades';
import { GradcertPage } from '../gradcert/gradcert';
import { AbsencesPage } from '../absences/absences';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GradesPage,
    GradcertPage,
    AbsencesPage
  ],
  imports: [
    IonicPageModule.forChild(GradesPage),
    ComponentsModule
  ],
})
export class GradesPageModule {}
