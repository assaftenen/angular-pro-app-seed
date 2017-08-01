import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {  AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';
import { AuthService } from './../../../../auth/shared/services/auth/auth.service';
import 'rxjs/add/operator/do';

export interface Meal{
    name:string,
    ingredient: string[],
    timeStamp: number,
    $key: string,
    $exsist: ()=> boolean
}
@Injectable()
export class MealsService {
    meals$:Observable<Meal[]> = this.db.list(`meals/${this.uid}`)
    .do(next => this.store.set('meals', next) )
    constructor(
        private store:Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}
    get uid(){
        return this.authService.user.uid

    }
}