import {Item} from "../models/item.model";
import {createReducer, on} from "@ngrx/store";
import {add, load, loadedSuccessfully, loadedWithError, remove} from "../actions/product.action";
import {Error} from "../models/error.model";

export interface ItemsState {
  loading: boolean,
  loaded: boolean,
  items: Item[],
  error?: Error
}

const initialState: ItemsState = {
  loading: false,
  loaded: false,
  items: []
}

export const itemsReducer = createReducer(
  initialState,
  on(add, (state, {item}) => ({
    ...state,
    items: [
      ...state.items, item
    ]
  })),
  on(remove, (state, {id}) => ({
    ...state,
    items: state.items.filter(item => item.id != id)
  })),
  on(load, state => ({...state, loading: true, loaded: false})),
  on(loadedSuccessfully, (state, {items}) => ({...state, loading: true, loaded: false, items})),
  on(loadedWithError, (state, {error}) => ({...state, loading: true, loaded: false, error})),
)
