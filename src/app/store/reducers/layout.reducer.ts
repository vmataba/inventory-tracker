import {createReducer, on} from "@ngrx/store";
import {changeScreenSize, toggleSideNav} from "../actions/layout.action";
import {getStoredState} from "../selectors";


export interface LayoutState {
  sideNavOpened: boolean
  screenSize: string
}

const initialState = getStoredState('layout', {
  sideNavOpened: true,
  deviceSize: ''
})

export const layoutReducer = createReducer(
  initialState,
  on(toggleSideNav, (state, {opened}) => ({
    ...state,
    sideNavOpened: opened == undefined ? !state.sideNavOpened : opened
  })),
  on(changeScreenSize, (state, {screenSize}) => ({
    ...state,
    screenSize
  })),
)
