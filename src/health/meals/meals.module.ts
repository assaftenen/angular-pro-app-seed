import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//containers
import { MealsComponent } from './containers/meals/meals.component';
//shared
import { SharedModule } from './../../auth/shared/shred.module';

export  const ROUTES: Routes= [
    {path: '', component: MealsComponent }
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        MealsComponent
    ],
   
})
export class MealsModule {}