import {createFeatureSelector} from "@ngrx/store";

export const getInventoryState = createFeatureSelector('inventory')

export const getAuthState = createFeatureSelector('auth')

export const getLayoutState = createFeatureSelector('layout')
