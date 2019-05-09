// @flow
import { asyncActionCreator } from 'src/utils/actions'

const actionTypes: Object = {
  GET_NOTE: asyncActionCreator('GET_NOTE'),
  ADD_NOTE: 'ADD_NOTE',
  EDIT_NOTE: 'EDIT_NOTE',
  DELETE_NOTE: 'DELETE_NOTE'
}

export default actionTypes
