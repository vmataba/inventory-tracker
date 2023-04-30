import {createReducer, on} from "@ngrx/store";
import {add, load, loadedSuccessfully, loadedWithError, remove} from "../actions/product.action";
import {Error} from "../models/error.model";
import {getStoredState} from "../selectors";
import {Product} from "../models/product.model";
import * as fromSaleActions from '../actions/sale.action'
import {Sale} from "../models/sale.model";

export interface InventoryState {
  loading: boolean,
  loaded: boolean,
  products: Product[],
  error?: Error,
  sales: Sale[]
}

const initialState: InventoryState = getStoredState('inventory', {
  loading: false,
  loaded: false,
  products: [],
  sales: []
})

export const inventoryReducer = createReducer(
  initialState,
  on(add, (state, {product}) => ({
    ...state,
    products: [
      ...state.products,
      product
    ]
  })),
  on(remove, (state, {id}) => ({
      ...state, products: state.products.filter(product => product.id != id)
    }
  )),
  on(load, state => ({...state, loading: true, loaded: false})),
  on(loadedSuccessfully, (state, {products}) => ({...state, loading: true, loaded: false, products})),
  on(loadedWithError, (state, {error}) => ({...state, loading: true, loaded: false, error})),
  on(fromSaleActions.load, (state) => ({
    ...state,
    loading: true
  })),
  on(fromSaleActions.loadedWithSuccess, (state, {sales}) => ({
    ...state,
    loading: false,
    loaded: true,
    sales
  })),
  on(fromSaleActions.loadedWithError, (state, {error}) => ({
    ...state,
    loading: false,
    loaded: true,
    error
  })),
  on(fromSaleActions.add, (state, {sale}) => ({
    ...state,
    sales: [
      ...state.sales,
      sale
    ]
  }))
)
