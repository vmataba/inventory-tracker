import {createSelector} from "@ngrx/store";
import {getInventoryState} from "./feature.selector";

const getProductState = createSelector(
  getInventoryState,
  (state) => state.products
)

export const getProducts = createSelector(
  getProductState,
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
