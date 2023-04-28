
import {getInventoryState, getLayoutState} from "./feature.selector";
import {createSelector} from "@ngrx/store";


export const getOpen = createSelector(
  getLayoutState,
  (state: any) => state.sideNavOpened
)

