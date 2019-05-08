export const asyncActionCreator = (actionType: string): Object => ({
  REQUEST: `${actionType}_REQUEST`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`
})
