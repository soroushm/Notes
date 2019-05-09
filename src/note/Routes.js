// @flow

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotePage from './componnets/Page'
import DetailsPage from './componnets/Details'

function Router() {
  return (
    <Switch>
      <Route path="/note/:id/edit" component={NotePage} />
      <Route path="/note/:id" component={DetailsPage} />
      <Route path="/note" component={NotePage} />
    </Switch>
  )
}

export default Router
