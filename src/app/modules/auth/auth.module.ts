import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {Route, RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "../../store/reducers/auth.reducer";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


const routes: Route[] = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer),
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AuthModule {
}
