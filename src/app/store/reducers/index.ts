import {ActionReducer, combineReducers, MetaReducer} from "@ngrx/store";
import {authReducer} from "./auth.reducer";
import {layoutReducer} from "./layout.reducer";
import {inventoryReducer} from "./inventory.reducer";

export const reducers = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
  inventory: inventoryReducer
})

export const storeStateChanges = (reducer: ActionReducer<any>) => {
  return function (state: any, action: any) {
    state = undefined ? {} : state
    localStorage.setItem('appState', JSON.stringify(state))
    return reducer(state, action)
  }
}
export const metaReducers: MetaReducer<any>[] = [
  storeStateChanges
]
