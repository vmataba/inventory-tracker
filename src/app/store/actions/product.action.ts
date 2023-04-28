import {createAction, props} from "@ngrx/store";
import {Item} from "../models/item.model";
import {Error} from "../models/error.model";

export enum ItemActionTypes{
  ADD = '[ Item ] Add',
  REMOVE = '[ Item ] Remove',
  LOAD = '[ Item ] Load',
  LOADED_SUCCESSFULLY = '[ Item ] Loaded Successfully',
  LOADED_WITH_ERROR = '[ Item ] Loaded with Error',
}

export const add = createAction(ItemActionTypes.ADD,props<{item: Item}>())

export  const remove = createAction(ItemActionTypes.REMOVE,props<{id:number}>())

export const load = createAction(ItemActionTypes.LOAD)

export const loadedSuccessfully = createAction(ItemActionTypes.LOADED_SUCCESSFULLY,props<{items: Item[]}>())

export const loadedWithError = createAction(ItemActionTypes.LOADED_WITH_ERROR,props<{error: Error}>())
