import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../services/auth.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {AuthActionTypes, loggedIn, loggedOut, loggedOutFailed, logInFailed, logout} from "../actions/auth.action";

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private service: AuthService) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap(
      (action: any) => this.service.loadInfo().pipe(
        map(users => {
          const {credentials} = action
          const matchedUsers = users.filter(user => user.username == credentials.username && user.password == credentials.password)
          if (matchedUsers.length == 0) {
            return logInFailed({
              error: {
                code: '400',
                message: 'Incorrect username or password'
              }
            })
          }
          return loggedIn({user: matchedUsers[0]});
        }),
        catchError(error => of(logInFailed({error})))
      )
    )
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    mergeMap(
      (action) => this.service.logout().pipe(
        map(data => loggedOut()),
        catchError(error => of(loggedOutFailed({error})))
      )
    )
  ))

}
