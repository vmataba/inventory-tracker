import {InventoryState} from "../reducers/inventory.reducer";

export const getStoredState = (feature: string, defaultState: any) => {
  const serialState = localStorage.getItem('appState')
  if (serialState == null) {
    return defaultState;
  }
 try {
   const appState = JSON.parse(serialState);
   return appState[feature];
 } catch (e){
    return defaultState
 }
}
