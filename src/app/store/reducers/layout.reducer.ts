import {createReducer, on} from "@ngrx/store";
import {toggleSideNav} from "../actions/layout.action";
import {getStoredState} from "../selectors";


export interface LayoutState {
  sideNavOpened: boolean
}

const initialState = getStoredState('layout', {
  sideNavOpened: true
})

export const layoutReducer = createReducer(
  initialState,
  on(toggleSideNav, (state, {opened}) => ({
    ...state,
    sideNavOpened: opened == undefined ? !state.sideNavOpened : opened
  }))
)
