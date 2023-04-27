import {createAction, props} from "@ngrx/store";

export enum SidenavActionTypes {
  TOGGLE = '[ SideNav ] Toggle'
}

export const toggle = createAction(SidenavActionTypes.TOGGLE, props<{ opened?: boolean }>())
