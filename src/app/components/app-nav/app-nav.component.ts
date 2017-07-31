import { Component, ChangeDetectionStrategy, } from '@angular/core';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-nav.component.scss'],
    template: `
        <div class="app-nav">
        <div class="wrapper"></div>
            <a routerLink="schedule" routerLinkActive="active">Schedule</a>
            <a routerLink="meals" routerLinkActive="active">Meals</a>
            <a routerLink="workouts" routerLinkActive="active">Workouts</a>
        </div>
    `
})
export class AppNavComponent {
    constructor() {}
}