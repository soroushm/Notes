// @flow

import { combineReducers } from 'redux'
import { reducers as noteReducer } from 'src/note'
import { reducers as userReducer } from 'src/user'
const appReducer = combineReducers({
  noteReducer,
  userReducer
})

const rootReducer = (state: any, action: any): any => appReducer(state, action)

export default rootReducer
