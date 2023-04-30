import {getLayoutState} from "./feature.selector";
import {createSelector} from "@ngrx/store";


export const getOpen = createSelector(
  getLayoutState,
  (state) => state.sideNavOpened
)

export const getScreenSize = createSelector(
  getLayoutState,
  (state) => state.screenSize
)

