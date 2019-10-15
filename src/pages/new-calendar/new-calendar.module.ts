import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCalendarPage } from './new-calendar';

@NgModule({
  declarations: [
    NewCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCalendarPage),
  ],
})
export class NewCalendarPageModule {}
