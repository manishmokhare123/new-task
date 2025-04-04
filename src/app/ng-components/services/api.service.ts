import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    login(username: string, password: string): Observable<any> {

        const body = { username, password };
        return this.http.post('https://dummyjson.com/user/login', body);
    }

    getUser(token: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get("https://dummyjson.com/auth/me", { headers });
    }

    getUserDetails() {
        return this.http.get<any>("https://dummyjson.com/users");
    }

    getProductData() {
        return this.http.get<any>("https://dummyjson.com/products");
    }

}
