import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../../modules/inventory/services/user.service";
import {loadUserWithError, loadUserWithSuccess, UserActionType} from "../actions/user.action";
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private service: UserService) {
  }

  $loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionType.LOAD),
    mergeMap(
      () => this.service.loadInfo().pipe(
        map(user => loadUserWithSuccess({user})),
        catchError(error => of(loadUserWithError({error})))
      )
    )
  ))
}
