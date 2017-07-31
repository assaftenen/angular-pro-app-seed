
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

//providers
import { AuthService } from './../../../shared/services/auth/auth.service';
import { Router } from "@angular/router";



@Component({
    selector: 'register',
    template: `
        <div>
           <auth-form (submitted)="loginUser($event)">
                <h1>Login</h1>
                <a routerLink="/auth/register">Not registered?</a>
                <button type="submit">
                Login
                </button>
                 <div class="error" *ngIf="error">
                {{error}}
                </div>
            </auth-form>
        </div>
    `
})
export class LoginComponent {
    error: string
    constructor(private authService: AuthService,
    private router:Router) {}

    loginUser(event: FormGroup){
        const { email, password} = event.value
           try{
               this.authService.loginUser(email, password)
               this.router.navigate(['/'])
           }
           
        catch(error){
            this.error = error.message
        }

    }

}