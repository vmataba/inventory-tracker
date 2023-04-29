import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list/products-list.component';
import {RouterModule} from "@angular/router";
import {combineReducers, StoreModule} from "@ngrx/store";
import {itemsReducer} from "../../store/reducers/product.reducer";
import {ItemFormComponent} from './product-form/item-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemComponent} from './product/item.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatTreeModule} from "@angular/material/tree";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffect} from "../../store/effects/auth.effect";
import {authReducer} from "../../store/reducers/auth.reducer";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSidenavModule} from "@angular/material/sidenav";
import {layoutReducer} from "../../store/reducers/layout.reducer";
import {DashboardModule} from "../dashboard/dashboard.module";


@NgModule({
  declarations: [
    ProductsListComponent,
    ItemFormComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products-list', component: ProductsListComponent}
    ]),
    StoreModule.forFeature('inventory', combineReducers({
      items: itemsReducer,
      user: authReducer
    })),
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatTreeModule,
    MatPaginatorModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffect]),
    MatProgressSpinnerModule,
    MatSidenavModule,
    DashboardModule
  ]
})
export class InventoryModule {
}
