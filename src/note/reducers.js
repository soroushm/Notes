// @flow

import { combineReducers } from 'redux'
import { v4 } from 'uuid'
import actionTypes from './actionTypes'

const notesInitState = {
  loading: false,
  synced: false
}
const notes: any = (state = [], { type, note }) => {
  switch (type) {
    case actionTypes.ADD_NOTE:
      return [
        ...state,
        {
          id: v4(),
          ...note,
          ...notesInitState
        }
      ]
    case actionTypes.EDIT_NOTE:
      return state.map((item) => (item.id === note.id ? { ...note, ...notesInitState } : item))
    case actionTypes.DELETE_NOTE:
      return state.map((item) => item.id !== note.id)
    case actionTypes.GET_NOTE.SUCCESS:
      // return action.response.data.notes
      break
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const reducers = combineReducers({
  notes
})

export default reducers
