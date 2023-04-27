
import {getInventoryState} from "./feature.selector";
import {createSelector} from "@ngrx/store";

export const selectSideNavState = createSelector(
  getInventoryState,
  (state: any) => state.sideNav
)
export const getOpen = createSelector(
  selectSideNavState,
  (state: any) => state.opened
)

