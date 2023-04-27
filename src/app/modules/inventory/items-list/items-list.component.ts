import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {getItems} from "../../../store/selectors/item.selector";
import {Observable, of} from "rxjs";
import {Item} from "../../../store/models/item.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../services/user.service";
import {loadUser} from "../../../store/actions/user.action";
import {getError, getHasError, getLoaded, getLoading, getUser} from "../../../store/selectors/user.selector";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{

  items$: Observable<Item[]>

  loadingUser$: Observable<boolean>

  loadedUser$: Observable<boolean>

  user$: Observable<any>

  hasError$: Observable<boolean>

  error$: Observable<any>
  constructor(private store: Store,private userService:UserService) {
    this.items$ = this.store.select(getItems) == null?of([]):this.store.select(getItems)
    this.loadingUser$ = this.store.select(getLoading)
    this.loadedUser$ = this.store.select(getLoaded)
    this.user$ = this.store.select(getUser)
    this.hasError$ = this.store.select(getHasError)
    this.error$ = this.store.select(getError)
  }

  ngOnInit() {
    this.userService.loadInfo().subscribe(info => console.log(info))
    this.store.dispatch(loadUser())
  }
}
