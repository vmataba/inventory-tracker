import {createAction, props} from "@ngrx/store";

export enum SidenavActionTypes {
  TOGGLE = '[ SideNav ] Toggle'
}

export const toggleSideNav = createAction(SidenavActionTypes.TOGGLE, props<{ opened?: boolean }>())
