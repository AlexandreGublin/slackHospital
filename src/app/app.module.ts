import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: 'AIzaSyCxrfWWRkKK0nAWqwVYgSIL75PH8Gui0v4',
  authDomain: 'formation-angular-e9b2f.firebaseapp.com',
  databaseURL: 'https://formation-angular-e9b2f.firebaseio.com',
  projectId: 'formation-angular-e9b2f',
  storageBucket: 'formation-angular-e9b2f.appspot.com',
  messagingSenderId: '550404399326',
  appId: '1:550404399326:web:c1c0a803ba250c87a5224f'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
