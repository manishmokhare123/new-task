import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ng-components/login/login.component';
import { UserProfileComponent } from './ng-components/user-profile/user-profile.component';
import { UserDetailsComponent } from './ng-components/user-details/user-details.component';
import { ProductsComponent } from './ng-components/products/products.component';
import { AuthGuard } from './ng-base/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user-details',
        component: UserDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
