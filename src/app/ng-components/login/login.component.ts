import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../../ng-base/auth-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup; //login form group name

    constructor(
        private _fb: FormBuilder,
        private apiService: ApiService,
        private route: Router,
        private authService: AuthServiceService,
        private notificationService: NotificationService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {

        this.loginForm = this._fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    submit() {
 
        let loginDetails = this.loginForm.value;

        if (loginDetails.username === "" || loginDetails.password === "") {
            
            this.notificationService.error("Please Enter Username or Password");

            return;
        }
        
        //CHECK FORM IS VALID
        if (this.loginForm.valid) {

            this.apiService.login(loginDetails.username, loginDetails.password).subscribe({
                next: (response) => {
                    console.log('Login successful:', response);
                    this.notificationService.success("User Logged In Successfully");
                    localStorage.setItem('accessToken', response.accessToken);
                    this.authService.setAuthInfo('user-logged-in');
                    this.route.navigate(['/user-profile']);
                },
                error: (error) => {
                    console.error('Login failed:', error);
                    this.notificationService.error("Login failed");
                }
            });
        }
    }


}
