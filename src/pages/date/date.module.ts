import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePage } from './date';
import { TimetablePage } from '../timetable/timetable';
import { EventsPage } from '../events/events';
import { CalendarPage } from '../calendar/calendar';

import { ComponentsModule } from '../../components/components.module';

import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    DatePage,
    TimetablePage,
    EventsPage,
    CalendarPage
  ],
  imports: [
    IonicPageModule.forChild(DatePage),
    ComponentsModule,
    NgCalendarModule
  ],
})
export class DatePageModule {}
