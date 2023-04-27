import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsListComponent} from './items-list/items-list.component';
import {RouterModule} from "@angular/router";
import {combineReducers, StoreModule} from "@ngrx/store";
import {itemsReducer} from "../../store/reducers/item.reducer";
import {ItemFormComponent} from './item-form/item-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemComponent} from './item/item.component';
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
import {UserEffects} from "../../store/effects/user.effects";
import {userReducer} from "../../store/reducers/user.reducer";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSidenavModule} from "@angular/material/sidenav";
import {sideNavReducer} from "../../store/reducers/sidenav.reducer";


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemFormComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'items', component: ItemsListComponent}
    ]),
    StoreModule.forFeature('inventory', combineReducers({
      items: itemsReducer,
      user: userReducer,
      sideNav: sideNavReducer
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
    EffectsModule.forFeature([UserEffects]),
    MatProgressSpinnerModule,
    MatSidenavModule
  ]
})
export class InventoryModule {
}
