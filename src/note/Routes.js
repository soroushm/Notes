// @flow

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NotePage from './componnets/Page'

function Router() {
  return (
    <Switch>
      <Route path="/note/list" component={NotePage} />
      <Route path="/note/:id" component={NotePage} />
    </Switch>
  )
}

export default Router
