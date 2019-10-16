import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { AngularFireModule } from '@angular/fire/index';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Firebase } from "@ionic-native/firebase";
import 'firebase/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoPage } from '../pages/todo/todo';
import { NewTaskPage } from '../pages/new-task/new-task';
import { NewCalendarPage } from '../pages/new-calendar/new-calendar';

import { DatePageModule } from '../pages/date/date.module';
import { GradesPageModule } from '../pages/grades/grades.module';
import { TasksPageModule } from '../pages/tasks/tasks.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskServicesProvider } from '../providers/task-services/task-services';
import { WorkServicesProvider } from '../providers/work-services/work-services';

import { ComponentsModule } from '../components/components.module';

import { FirebaseConfig } from './firebase.credentials';
import { CalendarServicesProvider } from '../providers/calendar-services/calendar-services';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodoPage,
    NewTaskPage,
    NewCalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DatePageModule,
    GradesPageModule,
    TasksPageModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodoPage,
    NewTaskPage,
    NewCalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskServicesProvider,
    WorkServicesProvider,
    CalendarServicesProvider
  ]
})
export class AppModule {}
