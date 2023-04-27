import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {InventoryModule} from "./modules/inventory/inventory.module";

const routes: Route[] = [
  {path: 'inventory', loadChildren: () => InventoryModule}
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
