import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getOpen, getScreenSize} from "../../../store/selectors/layout.selector";
import {getIGuest} from "../../../store/selectors/auth.selector";
import {toggleSideNav} from "../../../store/actions/layout.action";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened$: Observable<boolean>

  isGuest$: Observable<boolean>

  constructor(private store: Store) {
    this.opened$ = store.select(getOpen)
    this.isGuest$ = store.select(getIGuest)
  }

  ngOnInit() {
    this.setLinkActions()
  }

  setLinkActions() {
    document.querySelectorAll('mat-nav-list>a').forEach(a => {
      a.addEventListener('click', () => {
        this.store.select(getScreenSize).subscribe(screenSize => screenSize == 'xs' ? this.store.dispatch(toggleSideNav({opened: false})) : '')
      })
    })
  }
}
