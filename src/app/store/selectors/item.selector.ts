import {createFeatureSelector, createSelector} from "@ngrx/store";
import {getInventoryState} from "./feature.selector";


export const getItemsState = createSelector(
  getInventoryState,
  (state: any) => state.items
)
export const getItems = createSelector(
  getItemsState,
  (state: any) => state.items
)
