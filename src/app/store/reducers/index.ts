import {ActionReducer, combineReducers, MetaReducer} from "@ngrx/store";
import {authReducer} from "./auth.reducer";
import {layoutReducer} from "./layout.reducer";
import {productReducer, ProductState} from "./product.reducer";
import {saleReducer, SaleState} from "./sale.reducer";

export interface InventoryState {
  products: ProductState,
  sales: SaleState
}

export const inventoryReducers = combineReducers({
  products: productReducer,
  sales: saleReducer
})

export const appReducers = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
  inventory: inventoryReducers
})

export const storeStateChanges = (reducer: ActionReducer<any>) => {
  return function (state: any, action: any) {
    state = reducer(state,action)
    localStorage.setItem('appState', JSON.stringify(state))
    return state
  }
}
export const metaReducers: MetaReducer<any>[] = [
  storeStateChanges
]
