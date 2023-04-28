import {createReducer, on} from "@ngrx/store";
import {toggleSideNav} from "../actions/layout.action";

export interface LayoutState {
  sideNavOpened: boolean
}

const initialState: LayoutState = {
  sideNavOpened: true
}

export const layoutReducer = createReducer(
  initialState,
  on(toggleSideNav, (state, {opened}) => ({
    ...state,
    sideNavOpened: opened == undefined ? !state.sideNavOpened : opened
  }))
)
