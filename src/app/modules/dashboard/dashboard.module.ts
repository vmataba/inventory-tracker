import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {path: '', component: MainComponent}
]


@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {
}
