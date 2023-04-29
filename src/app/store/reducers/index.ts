import {ActionReducer, combineReducers, MetaReducer} from "@ngrx/store";
import {authReducer} from "./auth.reducer";
import {layoutReducer} from "./layout.reducer";

export const reducers = combineReducers({
  auth: authReducer,
  layout: layoutReducer
})

export const storeStateChanges = (reducer: ActionReducer<any>) => {
  return function (state: any, action: any) {
    localStorage.setItem('appState', state != undefined ? JSON.stringify(state) : '{}')
    return reducer(state, action)
  }
}
export const metaReducers: MetaReducer<any>[] = [
  storeStateChanges
]
