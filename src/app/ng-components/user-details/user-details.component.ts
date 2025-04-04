import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    userDetails: any;

    constructor(
        private apiService: ApiService
    ) { }

    ngOnInit(): void {

        this.fetchApiData();

    }

    fetchApiData() {

        this.apiService.getUserDetails().subscribe(response => {

            if (response.users) {

                this.userDetails = response.users;
            }
        });;
    }
}
