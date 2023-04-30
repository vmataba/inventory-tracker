import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {StoreModule} from "@ngrx/store";
import {layoutReducer} from "../../store/reducers/layout.reducer";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('layout', layoutReducer),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    FlexModule,
    MatListModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class LayoutModule {
}
