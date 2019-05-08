// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { store, history } from 'src/store'
import Routes from 'src/Routes'
import 'src/App.css'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
