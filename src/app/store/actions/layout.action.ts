import {createAction, props} from "@ngrx/store";

export enum LayoutActionTypes {
  TOGGLE_SIDE_NAV = '[ Layout ] Toggle Side Nav',
  CHANGE_SCREEN_SIZE = '[ Layout ] Change Screen Size',
}

export const toggleSideNav = createAction(LayoutActionTypes.TOGGLE_SIDE_NAV, props<{ opened?: boolean }>())

export const changeScreenSize = createAction(LayoutActionTypes.CHANGE_SCREEN_SIZE, props<{ screenSize: string }>())
