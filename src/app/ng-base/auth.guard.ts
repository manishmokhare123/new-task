import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    accessToken: string = localStorage.getItem('accessToken');

    isUserLoggedIn: boolean = true;

    constructor(
        private router: Router,
        private authService:AuthServiceService
    ) {

        this.authService.isUserLoggedIn$.subscribe((res) => {

            if (res === "user-logged-in") {
                this.isUserLoggedIn = true;
            } else {
                this.isUserLoggedIn = false;
            }
        })
        
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        const currentUrl = state.url; 

        if (!localStorage.getItem('accessToken') && currentUrl !== "/login") {
            this.router.navigateByUrl('/login');
            return false;
        }

        return true;
    }

}