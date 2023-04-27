import {createReducer, on} from "@ngrx/store";
import {toggle} from "../actions/sidenav.action";

export interface SideNavState {
  opened: boolean
}

const initialState: SideNavState = {
  opened: true
}

export const sideNavReducer = createReducer(
  initialState,
  on(toggle, (state, {opened}) => ({
    ...state,
    opened: opened == undefined ? !state.opened : opened
  }))
)
