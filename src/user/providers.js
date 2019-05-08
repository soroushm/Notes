// @flow

import { connect } from 'react-redux'
import actionTypes from './actionTypes'

const UserProvider = connect(
  null,
  (dispatch) => {
    return {
      setUser: (user: Object) => dispatch({ type: actionTypes.SET_USER, user })
    }
  }
)

const providers = {
  user: UserProvider
}

export default providers
