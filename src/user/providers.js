// @flow

import { connect } from 'react-redux'
import actionTypes from './actionTypes'
import { push } from 'react-router-redux'

const UserProvider = connect(
  (state) => ({
    user: state.userReducer.user
  }),
  (dispatch) => {
    return {
      setUser: (user: Object) => {
        dispatch({ type: actionTypes.SET_USER, user })
        dispatch(push('/note'))
      }
    }
  }
)

const providers = {
  user: UserProvider
}

export default providers
