import {createAction, props} from "@ngrx/store";
import {Sale, SaleItemItem} from "../models/sale.model";
import {Error} from "../models/error.model";

export enum SaleActionType {
  ADD = '[ Sale ] Add',
  ADD_ITEM = '[ Sale ] Add Item',
  LOAD = '[ Sale ] Load',
  LOADED_WITH_SUCCESS = '[ Sale ] Loaded with Success',
  LOADED_WITH_ERROR = '[ Sale ] Loaded with Error',
}

export const load = createAction(SaleActionType.LOAD)
export const add = createAction(SaleActionType.ADD, props<{ sale: Sale }>())
export const addItem = createAction(SaleActionType.ADD_ITEM, props<{ item: SaleItemItem }>())
export const loadedWithSuccess = createAction(SaleActionType.LOADED_WITH_SUCCESS, props<{ sales: Sale[] }>())
export const loadedWithError = createAction(SaleActionType.LOADED_WITH_ERROR, props<{ error: Error }>())
