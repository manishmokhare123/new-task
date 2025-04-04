import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../ng-base/auth-service.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
        private route: Router,
        private authService:AuthServiceService
    ) { }

    ngOnInit(): void {
    }

    logoutUser() {
        localStorage.removeItem('accessToken');
        this.authService.setAuthInfo('user-logged-out');
        this.route.navigate(['/login']);
    }

}
