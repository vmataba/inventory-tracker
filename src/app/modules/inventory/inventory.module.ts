import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProductsListComponent} from './products-list/products-list.component';
import {RouterModule} from "@angular/router";
import {inventoryReducer} from "../../store/reducers/inventory.reducer";
import {ProductFormComponent} from './product-form/product-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductComponent} from './product/product.component';
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
import {DashboardModule} from "../dashboard/dashboard.module";
import {StoreModule} from "@ngrx/store";


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductFormComponent,
    ProductComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'products-list', component: ProductsListComponent}
        ]),
        StoreModule.forFeature('inventory', inventoryReducer),
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
        MatProgressSpinnerModule,
        MatSidenavModule,
        DashboardModule,
        NgOptimizedImage
    ]
})
export class InventoryModule {
}
