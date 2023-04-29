export const getStoredState = (feature: string, defaultState: any) => {
  const serialState = localStorage.getItem('appState')
  if (serialState == null) {
    return defaultState;
  }
  const appState = JSON.parse(serialState);
  return appState[feature];
}
