import {createReducer, on} from "@ngrx/store";
import {Error} from "../models/error.model";
import {loggedIn, loggedOut, loggedOutFailed, login, logInFailed, logout} from "../actions/auth.action";
import {getStoredState} from "../selectors";


export interface AuthState {
  loading: boolean,
  loaded: boolean,
  isGuest: boolean,
  error?: Error,
  user?: Object
}


const initialState = getStoredState('auth', {
  loading: false,
  loaded: false,
  isGuest: true
})


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
    isGuest: false,
    error: undefined
  })),
  on(logInFailed, (state, {error}) => ({
    ...state,
    error,
    loading: false,
    loaded: true,
    isGuest: true,
    user: undefined
  })),
  on(logout, (state) => ({
    ...state,
    loading: true
  })),
  on(loggedOut, (state) => ({
    ...state,
    loading: false,
    loaded: true,
    isGuest: true,
    user: undefined
  })),
  on(loggedOutFailed, (state, {error}) => ({
    ...state,
    loading: false,
    loaded: true,
    error
  }))
)
