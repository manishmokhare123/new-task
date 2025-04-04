import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    isUserLoggedIn: Subject<any> = new Subject<any>();

    isUserLoggedIn$: Observable<any> = this.isUserLoggedIn.asObservable();

    accessToken: string = localStorage.getItem('accessToken');

    userLoggedIn: boolean;

    constructor() { }
    
    setAuthInfo(value: any) {

        if (value) {
            this.userLoggedIn = true;
            this.isUserLoggedIn.next(value);
        }
    }

    getAuthInfo() {
        return this.userLoggedIn;
    }
}
