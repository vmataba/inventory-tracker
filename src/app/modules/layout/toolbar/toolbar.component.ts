import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {toggleSideNav} from "../../../store/actions/layout.action";
import {Observable} from "rxjs";
import {getIGuest} from "../../../store/selectors/auth.selector";
import {logout} from "../../../store/actions/auth.action";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() title: string = ''

  @Input() isSmallScreen: boolean = false

  isGuest$: Observable<boolean>
  constructor(private store: Store) {
    this.isGuest$ = store.select(getIGuest)
  }

  toggleSideNav(opened = undefined){
    this.store.dispatch(toggleSideNav({opened}))
  }

  logout(){
    this.store.dispatch(logout())
  }
}
