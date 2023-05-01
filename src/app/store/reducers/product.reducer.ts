import {createReducer, on} from "@ngrx/store";
import {add, load, loadedSuccessfully, loadedWithError, remove} from "../actions/product.action";
import {Error} from "../models/error.model";
import {getStoredState} from "../selectors";
import {Product} from "../models/product.model";
import * as fromSaleActions from '../actions/sale.action'

export interface ProductState {
  loading: boolean,
  loaded: boolean,
  products: Product[],
  error?: Error
}

const initialState: ProductState = getStoredState('inventory.products', {
  loading: false,
  loaded: false,
  products: [],
})

/*const initialState:ProductState = {
  loading: false,
  loaded: false,
  products: []
}*/
export const productReducer = createReducer(
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
  }))
)
