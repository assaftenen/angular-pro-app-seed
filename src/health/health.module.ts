
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//shared module
import { SharedModule } from './shared/shared.module';
// gurds
import { AuthGurd } from './../auth/shared/guards/auth.guard';

export const ROUTES: Routes=[
    {path:'schedule', canActivate: [AuthGurd], loadChildren: './schedule/schedule.module#ScheduleModule'},
    {path:'meals', canActivate: [AuthGurd], loadChildren: './meals/meals.module#MealsModule'},
    {path:'workouts', canActivate: [AuthGurd], loadChildren: './workouts/workouts.module#WorkoutsModule'}
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ],
    declarations: [],
    providers: []
})
export class HealthModule {}