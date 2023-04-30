import {createSelector} from "@ngrx/store";
import {getInventoryState} from "./feature.selector";


export const getProducts = createSelector(
  getInventoryState,
  (state) => state.products
)

export const getProductsCount = createSelector(
  getProducts,
  (products) => products.length
)

export const getProductsInStock = createSelector(
  getProducts,
  (products) => products.filter(product => product.quantity > 0)
)
