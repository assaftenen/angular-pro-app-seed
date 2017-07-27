import { AuthModule } from '../auth/auth.module'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';
AuthModule
// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/* 
  var config = {
    apiKey: "AIzaSyBCK5Q2OU3zR_MK--94Uz3BZ-Dy8DPDBJM",
    authDomain: "fitness-app-d0180.firebaseapp.com",
    databaseURL: "https://fitness-app-d0180.firebaseio.com",
    projectId: "fitness-app-d0180",
    storageBucket: "fitness-app-d0180.appspot.com",
    messagingSenderId: "96769499391"
  };
*/
