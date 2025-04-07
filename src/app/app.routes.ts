import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserRegisterComponent } from './user-register/user-register.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'userList' },
    { path: 'userDetails', component: UserDetailsComponent },
    { path: 'userList', component: UserListComponent},
    { path: 'userRegister', component: UserRegisterComponent},
    { path: '**', component: PageNotFoundComponent},
];
