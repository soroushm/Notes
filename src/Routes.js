// @flow

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NoteRoutes from 'src/note/Routes'
import UserRoutes from 'src/user/Routes'

import 'src/App.css'

function Router() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/user/login" />
        }}
      />
      <Route path="/note" component={NoteRoutes} />
      <Route path="/user" component={UserRoutes} />
      <Route path="/error" render={() => <h1>Something went wrong! please try again later!</h1>} />
      <Route path="*" render={() => <h1>Not found</h1>} />
    </Switch>
  )
}

export default Router
