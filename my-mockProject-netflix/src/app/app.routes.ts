import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { BrowserComponent } from './page/browse/browse.component';
import { authGuard } from './gaurds/auth.guard';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "browse",
        component: BrowserComponent,
        canActivate:[authGuard]
    },
    {
        path: "**",
        component: LoginComponent
    }
];
