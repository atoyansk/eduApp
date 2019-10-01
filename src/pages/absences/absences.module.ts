import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsencesPage } from './absences';

@NgModule({
  declarations: [
    AbsencesPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsencesPage),
  ],
})
export class AbsencesPageModule {}
