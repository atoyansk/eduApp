import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePage } from './date';
import { SchedulesPage } from '../schedules/schedules';
import { EventsPage } from '../events/events';
import { CalendarPage } from '../calendar/calendar';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DatePage,
    SchedulesPage,
    EventsPage,
    CalendarPage
  ],
  imports: [
    IonicPageModule.forChild(DatePage),
    ComponentsModule
  ],
})
export class DatePageModule {}
