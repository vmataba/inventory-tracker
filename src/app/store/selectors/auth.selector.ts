import {createSelector} from "@ngrx/store";
import {getAuthState} from "./feature.selector";

export const selectAuthState = createSelector(
  getAuthState,
  (state: any) => state.user
)
export const getUser = createSelector(
  selectAuthState,
  (state: any) => state.user.results[0]
)

export const getLoading = createSelector(
  selectAuthState,
  (state: any) => state.loading
)

export const getLoaded = createSelector(
  selectAuthState,
  (state: any) => state.loaded
)

export const getHasError = createSelector(
  selectAuthState,
  (state: any) => state.hasError
)

export const getError = createSelector(
  selectAuthState,
  (state: any) => state.error
)

