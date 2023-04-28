import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {InventoryModule} from "./modules/inventory/inventory.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {AuthModule} from "./modules/auth/auth.module";

const routes: Route[] = [
  {path: '', loadChildren: () => DashboardModule},
  {path: 'inventory', loadChildren: () => InventoryModule},
  {path: 'auth', loadChildren: () => AuthModule},
];

@NgModule({
  providers: [],
  declarations: [],
  exports: [],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {

}
