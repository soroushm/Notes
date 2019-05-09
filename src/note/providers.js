// @flow

import { connect } from 'react-redux'
import actionTypes from './actionTypes'
import { push } from 'react-router-redux'

const noteProvider = connect(
  null,
  (dispatch) => {
    return {
      addNote: (note: Object) => {
        dispatch({ type: actionTypes.ADD_NOTE, note })
      },
      editNote: (note: Object) => {
        dispatch({ type: actionTypes.EDIT_NOTE, note })
        dispatch(push('/note'))
      },
      deletNote: (note: Object) => {
        dispatch({ type: actionTypes.DELETE_NOTE, note })
        dispatch(push('/note'))
      },
      goToNote: (id: string) => {
        if (!id) {
          return
        }
        dispatch(push(`/note/${id}`))
      }
    }
  }
)

const providers = {
  note: noteProvider
}

export default providers
