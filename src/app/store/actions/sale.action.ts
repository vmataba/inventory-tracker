import {createAction, props} from "@ngrx/store";
import {Sale} from "../models/sale.model";
import {Error} from "../models/error.model";

export enum SaleActionType {
  ADD = '[ Sale ] Add',
  LOAD = '[ Sale ] Load',
  LOADED_WITH_SUCCESS = '[ Sale ] Loaded with Success',
  LOADED_WITH_ERROR = '[ Sale ] Loaded with Error',
}

export const load = createAction(SaleActionType.LOAD)
export const add = createAction(SaleActionType.ADD, props<{ sale: Sale }>())
export const loadedWithSuccess = createAction(SaleActionType.LOADED_WITH_SUCCESS, props<{ sales: Sale[] }>())
export const loadedWithError = createAction(SaleActionType.LOADED_WITH_ERROR, props<{ error: Error }>())
