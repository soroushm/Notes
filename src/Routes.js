// @flow

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NoteRoutes from 'src/note/Routes'
import UserRoutes from 'src/user/Routes'

import 'src/App.css'

function Router({ user }) {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={user.name ? '/note' : '/user/login'} />} />
      <Route path="/note" component={NoteRoutes} />
      <Route path="/user" component={UserRoutes} />
      <Route path="/error" render={() => <h1>Something went wrong! please try again later!</h1>} />
      <Route path="*" render={() => <h1>Not found</h1>} />
    </Switch>
  )
}

const mapStateToProps = (state) => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(Router)
