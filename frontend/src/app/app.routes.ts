import { Routes } from '@angular/router';
import {WashCreateComponent} from "./wash/wash-create/wash-create.component";
import {WashIndexComponent} from "./wash/wash-index/wash-index.component";

export const routes: Routes = [
  { path: '',redirectTo: 'wash/index', pathMatch: 'full'},
  { path: 'wash/create', component: WashCreateComponent },
  { path: 'wash/index', component: WashIndexComponent },
  ];
