import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getOpen} from "../../../store/selectors/layout.selector";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  opened$: Observable<boolean>

  constructor(private store: Store) {
    this.opened$ = store.select(getOpen)
  }
}
