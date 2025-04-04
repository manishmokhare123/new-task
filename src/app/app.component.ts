import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { concat, concatMap, from, map, mergeMap, Observable, of, switchMap } from 'rxjs';
import { AuthServiceService } from './ng-base/auth-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    accessToken: string = localStorage.getItem('accessToken');

    isUserLoggedIn: boolean = false;

    constructor(
        private authService: AuthServiceService,
        private route: Router
    ) {

        /*  username: 'emilys',
  password: 'emilyspass', */

        this.authService.isUserLoggedIn$.subscribe((res) => {

            if (localStorage.getItem('accessToken')) {
                this.isUserLoggedIn = true;
            } else {
                this.isUserLoggedIn = false;
            }
        })
    }

    ngOnInit(): void {
        if (localStorage.getItem('accessToken')) {
            this.isUserLoggedIn = true;
        }
    }

}

