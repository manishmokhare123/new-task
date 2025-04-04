import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    requestUrl: string = "https://dummyjson.com/auth/me"

    accessToken: string = localStorage.getItem('accessToken');

    userDetails: any;

    constructor(
        private apiService: ApiService
    ) { }

    ngOnInit(): void {

        this.fetchApiData();

    }

    fetchApiData() {

        this.apiService.getUser(this.accessToken).subscribe(response => {
            if (response) {
                this.userDetails = response;
            }
        });;

    }

}
