// @flow

import { combineReducers } from 'redux'
import Note from 'src/note'
const appReducer = combineReducers({
  note: Note.reducers
})

const rootReducer = (state: any, action: any): any => appReducer(state, action)

export default rootReducer
