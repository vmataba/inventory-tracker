import {Sale} from "../models/sale.model";
import {Error} from "../models/error.model";
import {getStoredState} from "../selectors";
import {createReducer, on} from "@ngrx/store";
import {add, load, loadedWithError, loadedWithSuccess} from "../actions/sale.action";

export interface SaleState {
  loading: boolean
  loaded: boolean
  sales: Sale[]
  error?: Error
}

const initialState: SaleState = getStoredState('inventory.sales', {
  loading: false,
  loaded: false,
  sales: []
})

export const saleReducer = createReducer(initialState,
  on(load, (state) => ({
    ...state,
    loading: true
  })),
  on(loadedWithSuccess, (state, {sales}) => ({
    ...state,
    loading: false,
    loaded: true,
    sales
  })),
  on(loadedWithError, (state, {error}) => ({
    ...state,
    loading: false,
    loaded: false,
    error
  })),
  on(add, (state, {sale}) => ({
    ...state,
    sales: [
      ...state.sales,
      sale
    ]
  })),
)
