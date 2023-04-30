import {createAction, props} from "@ngrx/store";
import {User} from "../models/user.model";
import {Credential} from "../models/credential.model";
import {Error} from "../models/error.model";

export enum AuthActionType {
  LOGIN = '[ User ] Login',
  LOGGED_IN = '[ User ] Logged In',
  LOGIN_FAILED = '[ User ] Log In Failed',
  LOGOUT = '[ User ] Logout',
  LOGGED_OUT = '[ User ] Logged Out',
  LOGOUT_FAILED = '[ User ] Logged Out Failed',
  CLEAR_LOGIN_ERROR = '[ User ] Clear Login Error',
}

export const login = createAction(AuthActionType.LOGIN,props<{credentials: Credential}>())
export const loggedIn = createAction(AuthActionType.LOGGED_IN, props<{ user: User }>())
export const logInFailed = createAction(AuthActionType.LOGIN_FAILED, props<{ error: Error }>())
export const logout = createAction(AuthActionType.LOGOUT)
export const loggedOut = createAction(AuthActionType.LOGGED_OUT)
export const loggedOutFailed = createAction(AuthActionType.LOGOUT_FAILED,props<{error:Error}>())
export const clearLoginError = createAction(AuthActionType.CLEAR_LOGIN_ERROR)
