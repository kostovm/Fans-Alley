import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { authGuard } from "../auth.guard";
import { loggedInGuard } from "../logged-in.guard";

const routes: Routes = [
 {path: 'login', component: LoginComponent, canActivate: [loggedInGuard]},
 {path: 'register', component: RegisterComponent, canActivate: [loggedInGuard]},
 {path: 'your-profile', component: ProfileComponent, canActivate: [authGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {};