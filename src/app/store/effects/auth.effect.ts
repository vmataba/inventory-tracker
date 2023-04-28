import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {AuthActionTypes, loggedIn, logInFailed} from "../actions/auth.action";

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private service: AuthService) {
  }

  $login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap(
      (credential) => this.service.loadInfo().pipe(
        map(user => loggedIn({user})),
        catchError(error => of(logInFailed({error})))
      )
    )
  ))
}
