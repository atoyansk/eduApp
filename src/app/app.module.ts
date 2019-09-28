import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { WorksPage } from '../pages/works/works';
// import { MorePage } from '../pages/more/more';
// import { TaskPage } from '../pages/task/task';

//import { ShrinkingSegmentHeader } from '../components/shrinking-segment-header/shrinking-segment-header';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // TaskPage,
    // WorksPage,
    // MorePage,
    //ShrinkingSegmentHeader
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // TaskPage,
    // WorksPage,
    // MorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
