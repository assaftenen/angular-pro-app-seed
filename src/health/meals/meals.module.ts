import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';
//shared
import { SharedModule } from '../shared/shared.module';

// component
import { MealFormComponent } from './components/meal-form/meal-form.component';


export  const ROUTES: Routes= [
    {path: '', component: MealsComponent },
    {path:'new', component: MealComponent},
    {path:':id', component: MealComponent}
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        MealsComponent,
        MealComponent,
        MealFormComponent
    ],
   
})
export class MealsModule {}