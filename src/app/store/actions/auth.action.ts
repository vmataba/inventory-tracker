import {createAction, props} from "@ngrx/store";
import {User} from "../models/user.model";
import {Credential} from "../models/credential.model";
import {Error} from "../models/error.model";

export enum AuthActionTypes {
  LOGIN = '[ User ] Login',
  LOGGED_IN = '[ User ] Logged In',
  LOGIN_FAILED = '[ User ] Log In Failed'
}

export const login = createAction(AuthActionTypes.LOGIN,props<{credentials: Credential}>())
export const loggedIn = createAction(AuthActionTypes.LOGGED_IN, props<{ user: User }>())
export const logInFailed = createAction(AuthActionTypes.LOGIN_FAILED, props<{ error: Error }>())
