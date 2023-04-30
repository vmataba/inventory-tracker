import {createSelector} from "@ngrx/store";
import {getInventoryState} from "./feature.selector";


export const getSales = createSelector(
  getInventoryState,
  (state) => state.sales
)

export const getSalesCount = createSelector(
  getSales,
  (sales) => sales.length
)
