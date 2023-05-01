import {createAction, props} from "@ngrx/store";
import {Error} from "../models/error.model";
import {Product} from "../models/product.model";

export enum ProductActionType{
  ADD = '[ Product ] Add',
  REMOVE = '[ Product ] Remove',
  LOAD = '[ Product ] Load',
  LOADED_SUCCESSFULLY = '[ Product ] Loaded Successfully',
  LOADED_WITH_ERROR = '[ Product ] Loaded with Error',
}

export const add = createAction(ProductActionType.ADD,props<{product: Product}>())

export  const remove = createAction(ProductActionType.REMOVE,props<{id:number}>())

export const load = createAction(ProductActionType.LOAD)

export const loadedSuccessfully = createAction(ProductActionType.LOADED_SUCCESSFULLY,props<{products: Product[]}>())

export const loadedWithError = createAction(ProductActionType.LOADED_WITH_ERROR,props<{error: Error}>())
