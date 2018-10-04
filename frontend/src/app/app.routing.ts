import { Routes, RouterModule } from "@angular/router"
import { InstancesComponent } from './instances/instances.component'
import { NetworksComponent } from './networks/networks.component'
import { AccountsComponent } from './accounts/accounts.component'
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";

const APP_ROUTES: Routes = [
  {path:'', redirectTo: '/instances', pathMatch: 'full'},
  {path:"instances", component:InstancesComponent},
  {path:"networks", component:NetworksComponent},
  {path:"accounts", component:AccountsComponent},
  {path:"login", component:LoginComponent},
  {path:"users", component:UsersComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
