import {createReducer, on} from "@ngrx/store";
import {loadUser, loadUserWithError, loadUserWithSuccess} from "../actions/user.action";

export interface UserState {
  loading: boolean,
  loaded: boolean,
  hasError: boolean,
  user?: Object
}

const initialState: UserState = {
  loading: false,
  loaded: false,
  hasError: false
}

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state) => ({
    ...state,
    loading: true
  })),
  on(loadUserWithSuccess, (state, {user}) => ({
    ...state,
    user,
    loading: false,
    loaded: true
  })),
  on(loadUserWithError, (state, {error}) => ({
    ...state,
    error,
    loading: false,
    loaded: true,
    hasError: true
  }))
)
