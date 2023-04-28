import {createSelector} from "@ngrx/store";
import {getAuthState} from "./feature.selector";


export const getUser = createSelector(
  getAuthState,
  state => state.user
)

export const getLoading = createSelector(
  getAuthState,
  state => state.loading
)

export const getLoaded = createSelector(
  getAuthState,
  state => state.loaded
)

export const getError = createSelector(
  getAuthState,
  state => state.error
)

export const getIGuest = createSelector(
  getAuthState,
  state => state.isGuest
)

