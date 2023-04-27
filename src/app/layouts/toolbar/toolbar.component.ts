import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {toggle} from "../../store/actions/sidenav.action";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() title: string = ''

  @Input() isSmallScreen: boolean = false

  constructor(private store: Store) {
  }

  toggleSideNav(opened = undefined){
    this.store.dispatch(toggle({opened}))
  }
}
