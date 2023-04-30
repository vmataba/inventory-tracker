import {Item} from "../models/item.model";
import {createReducer, on} from "@ngrx/store";
import {add, load, loadedSuccessfully, loadedWithError, remove} from "../actions/product.action";
import {Error} from "../models/error.model";
import {getStoredState} from "../selectors";
import {Product} from "../models/product.model";

export interface InventoryState {
  loading: boolean,
  loaded: boolean,
  products: Product[],
  error?: Error
}

const initialState: InventoryState = getStoredState('inventory',{
  loading: false,
  loaded: false,
  products: []
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
    ...state, products: state.products.filter(product => product.id != id)}
  )),
  on(load, state => ({...state, loading: true, loaded: false})),
  on(loadedSuccessfully, (state, {products}) => ({...state, loading: true, loaded: false, products})),
  on(loadedWithError, (state, {error}) => ({...state, loading: true, loaded: false, error})),
)
