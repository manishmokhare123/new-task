// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ng-components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './ng-components/user-profile/user-profile.component';
import { UserDetailsComponent } from './ng-components/user-details/user-details.component';
import { ProductsComponent } from './ng-components/products/products.component';
import { NavbarComponent } from './ng-components/navbar/navbar.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceService } from './ng-base/auth-service.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UserProfileComponent,
        UserDetailsComponent,
        ProductsComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            progressBar: true
        }),
        BrowserAnimationsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [AuthServiceService],
    bootstrap: [AppComponent]

})
export class AppModule { }
