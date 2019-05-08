// @flow

import { combineReducers } from 'redux'
import actionTypes from './actionTypes'

const notesInitState = {
  id: null,
  loading: false,
  synced: false,
  name: null
}
const user: any = (state = notesInitState, { type, user }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        ...user
      }
    case actionTypes.LOGOUT:
      return notesInitState
    default:
      return state
  }
}

const reducers = combineReducers({
  user
})

export default reducers
