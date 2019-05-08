// @flow

import { connect } from 'react-redux'

const noteProvider = connect(
  null,
  (dispatch) => {
    return {
      getNotes: (id: string) => dispatch('TEST', { id })
    }
  }
)

const providers = {
  note: noteProvider
}

export default providers
