// @flow

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './componnets/Page'

function Router() {
  return (
    <Switch>
      <Route path="/user/login" component={LoginPage} />
    </Switch>
  )
}

export default Router
