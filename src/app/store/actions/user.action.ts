import {createAction, props} from "@ngrx/store";

export enum UserActionType {
  LOAD = '[ User ] Load',
  LOADED_WITH_SUCCESS = '[ User ] Loaded with Success',
  LOADED_WITH_ERROR = '[ User ] Loaded with Error'
}

export const loadUser = createAction(UserActionType.LOAD)
export const loadUserWithSuccess = createAction(UserActionType.LOADED_WITH_SUCCESS, props<{ user: any }>())
export const loadUserWithError = createAction(UserActionType.LOADED_WITH_ERROR, props<{ error: any }>())
