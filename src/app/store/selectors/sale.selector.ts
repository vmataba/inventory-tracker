import {createSelector} from "@ngrx/store";
import {getInventoryState} from "./feature.selector";

const getSaleState = createSelector(
  getInventoryState,
  (state)=> state.sales
)

export const getSales = createSelector(
  getSaleState,
  (state) => state.sales
)

export const getSalesCount = createSelector(
  getSales,
  (sales) => sales.length
)
