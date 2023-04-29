import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getOpen} from "../../../store/selectors/layout.selector";
import {getIGuest} from "../../../store/selectors/auth.selector";
import * as M from "materialize-css";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  opened$: Observable<boolean>

  isGuest$: Observable<boolean>
  constructor(private store: Store) {
    this.opened$ = store.select(getOpen)
    this.isGuest$  = store.select(getIGuest)
  }

}
