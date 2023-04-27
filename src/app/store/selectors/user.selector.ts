import {createSelector} from "@ngrx/store";
import {getInventoryState} from "./feature.selector";

export const selectUserState = createSelector(
  getInventoryState,
  (state: any) => state.user
)
export const getUser = createSelector(
  selectUserState,
  (state: any) => state.user.results[0]
)

export const getLoading = createSelector(
  selectUserState,
  (state: any) => state.loading
)

export const getLoaded = createSelector(
  selectUserState,
  (state: any) => state.loaded
)

export const getHasError = createSelector(
  selectUserState,
  (state: any) => state.hasError
)

export const getError = createSelector(
  selectUserState,
  (state: any) => state.error
)

