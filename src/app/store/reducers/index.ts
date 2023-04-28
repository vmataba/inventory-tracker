import {ActionReducer, combineReducers, MetaReducer} from "@ngrx/store";
import {authReducer} from "./auth.reducer";
import {layoutReducer} from "./layout.reducer";

//TODO: complete this implementation
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

export const readStoredState = (reducer: ActionReducer<any>) => {
  return function (state: any, action: any) {
    const storedState = localStorage.getItem('appState')
    const newState = state ? state : JSON.parse(storedState ? storedState : '{}')
    return reducer(newState, action)
  }
}

export const metaReducers: MetaReducer<any>[] = [
  storeStateChanges,
  readStoredState
]
