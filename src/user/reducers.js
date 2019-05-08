// @flow

import { combineReducers } from 'redux'
import actionTypes from './actionTypes'

const notesInitState = {
  id: null,
  loading: false,
  synced: false
}
const user: any = (state = notesInitState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOTE.REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_NOTE.SUCCESS:
      // return action.response.data.notes
      break
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
