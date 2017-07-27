import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common/src/common";
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    {path: '', component: LoginComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [],
    providers: []
})
export class LoginModule {}