import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {toggleSideNav} from "./store/actions/layout.action";
import {getIGuest} from "./store/selectors/auth.selector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'For Store';

  mediaSubscription: Subscription | undefined

  sizeXs = false

  constructor(public mediaObserver: MediaObserver, private store: Store, private router: Router) {
  }

  ngOnInit() {
    this.store.select(getIGuest).subscribe(isGuest => {
      if (!isGuest) {
        this.mediaSubscription = this.mediaObserver.asObservable().subscribe(mediaChange => {
          const firstChange = mediaChange[0]
          this.sizeXs = ['xs'].includes(firstChange.mqAlias)
          this.store.dispatch(toggleSideNav({opened: !this.sizeXs}))
        })
        return;
      }
      this.router.navigate(['/login']).then(() => this.store.dispatch(toggleSideNav({opened: false})))
    })
  }

  ngOnDestroy() {
    this.mediaSubscription?.unsubscribe()
  }
}
