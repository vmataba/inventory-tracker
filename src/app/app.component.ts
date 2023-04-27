import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {toggle} from "./store/actions/sidenav.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'For Store';

  mediaSubscription: Subscription | undefined

  sizeXs = false

  constructor(public mediaObserver: MediaObserver, private store: Store) {
  }

  ngOnInit() {
    this.mediaSubscription = this.mediaObserver.asObservable().subscribe(mediaChange => {
      const firstChange = mediaChange[0]
      this.sizeXs = ['xs'].includes(firstChange.mqAlias)
      this.store.dispatch(toggle({opened: !this.sizeXs}))
    })
  }

  ngOnDestroy() {
    this.mediaSubscription?.unsubscribe()
  }
}
