import {Routes} from '@angular/router';
import {WashCreateComponent} from "./wash/wash-create/wash-create.component";
import {WashIndexComponent} from "./wash/wash-index/wash-index.component";
import {WashViewComponent} from "./wash/wash-view/wash-view.component";
import {RegisterComponent} from "./user/register/register.component";
import {LoginComponent} from "./user/login/login.component";
import {UserComponent} from "./user/user.component";

export const routes: Routes = [
  {path: '', redirectTo: 'wash/index', pathMatch: 'full'},
  {path: 'wash/create', title: "Create Wash", component: WashCreateComponent},
  {path: 'wash/index', title: "Washes", component: WashIndexComponent},
  {path: 'wash/:id', title: "Wash", component: WashViewComponent},
  {path: 'register', title: "Register", component: RegisterComponent},
  {path: 'login', title: "Login", component: LoginComponent},
  {path: 'users', title: "Users", component: UserComponent}
];
