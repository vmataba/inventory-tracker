import {createReducer, on} from "@ngrx/store";
import {Error} from "../models/error.model";
import {loggedIn, login, logInFailed} from "../actions/auth.action";

export interface AuthState {
  loading: boolean,
  loaded: boolean,
  isGuest: boolean,
  error?: Error,
  user?: Object
}

const initialState: AuthState = {
  loading: false,
  loaded: false,
  isGuest: true
}

export const authReducer = createReducer(
  initialState,
  on(login, (state, {credentials}) => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(loggedIn, (state, {user}) => ({
    ...state,
    user,
    loading: false,
    loaded: true,
    isGuest: false
  })),
  on(logInFailed, (state, {error}) => ({
    ...state,
    error,
    loading: false,
    loaded: true,
    isGuest: true,
    user: undefined
  }))
)
