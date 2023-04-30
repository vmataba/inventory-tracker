import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {toggleSideNav} from "../../../store/actions/layout.action";
import {Observable} from "rxjs";
import {getIGuest} from "../../../store/selectors/auth.selector";
import {logout} from "../../../store/actions/auth.action";
import {getScreenSize} from "../../../store/selectors/layout.selector";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() title: string = ''

  isGuest$: Observable<boolean>

  screenSize$: Observable<string>

  constructor(private store: Store) {
    this.isGuest$ = store.select(getIGuest)
    this.screenSize$ = store.select(getScreenSize)
  }

  toggleSideNav(opened = undefined){
    this.store.dispatch(toggleSideNav({opened}))
  }

  logout(){
    this.store.dispatch(logout())
  }
}
