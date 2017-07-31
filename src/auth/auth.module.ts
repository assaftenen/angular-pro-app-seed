import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// third party
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'

//shared
import { SharedModule } from './shared/shred.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
]

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBCK5Q2OU3zR_MK--94Uz3BZ-Dy8DPDBJM",
    authDomain: "fitness-app-d0180.firebaseapp.com",
    databaseURL: "https://fitness-app-d0180.firebaseio.com",
    projectId: "fitness-app-d0180",
    storageBucket: "fitness-app-d0180.appspot.com",
    messagingSenderId: "96769499391"
};


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    declarations: [],
    providers: []
})
export class AuthModule { }