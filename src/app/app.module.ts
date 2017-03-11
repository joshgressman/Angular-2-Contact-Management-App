import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyD5sD9oh7lgAXsRMNIZC2QbsAKzhjyXTUQ',
  authDomain: 'business-contacts-42265.firebaseapp.com',
  databaseURL: 'https://business-contacts-42265.firebaseio.com',
  storageBucket: 'business-contacts-42265.appspot.com',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
