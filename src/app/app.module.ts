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

import { DatePageModule } from '../pages/date/date.module';
import { GradesPageModule } from '../pages/grades/grades.module';
import { TasksPageModule } from '../pages/tasks/tasks.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GetServicesProvider } from '../providers/get-services/get-services';


export const FirebaseConfig = {
  apiKey: "AIzaSyB_5tvMn7UjYIIwPS7MiciPpq5lxcdzKIc",
  authDomain: "eduapp-118f8.firebaseapp.com",
  databaseURL: "https://eduapp-118f8.firebaseio.com",
  projectId: "eduapp-118f8",
  storageBucket: "",
  messagingSenderId: "305003753304",
  appId: "1:305003753304:web:8556607577ca82402fff2d"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
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
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetServicesProvider
  ]
})
export class AppModule {}
