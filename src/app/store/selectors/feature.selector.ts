import {createFeatureSelector} from "@ngrx/store";
import {AuthState} from "../reducers/auth.reducer";
import {LayoutState} from "../reducers/layout.reducer";
import {InventoryState} from "../reducers";
export const getInventoryState = createFeatureSelector<InventoryState>('inventory')

export const getAuthState = createFeatureSelector<AuthState>('auth')

export const getLayoutState = createFeatureSelector<LayoutState>('layout')
