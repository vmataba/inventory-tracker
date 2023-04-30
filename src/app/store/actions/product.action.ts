import {createAction, props} from "@ngrx/store";
import {Item} from "../models/item.model";
import {Error} from "../models/error.model";
import {Product} from "../models/product.model";

export enum ProductActionTypes{
  ADD = '[ Product ] Add',
  REMOVE = '[ Product ] Remove',
  LOAD = '[ Product ] Load',
  LOADED_SUCCESSFULLY = '[ Product ] Loaded Successfully',
  LOADED_WITH_ERROR = '[ Product ] Loaded with Error',
}

export const add = createAction(ProductActionTypes.ADD,props<{product: Product}>())

export  const remove = createAction(ProductActionTypes.REMOVE,props<{id:number}>())

export const load = createAction(ProductActionTypes.LOAD)

export const loadedSuccessfully = createAction(ProductActionTypes.LOADED_SUCCESSFULLY,props<{products: Product[]}>())

export const loadedWithError = createAction(ProductActionTypes.LOADED_WITH_ERROR,props<{error: Error}>())
