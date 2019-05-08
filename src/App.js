// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { store, history } from 'src/store'
import { theme } from 'src/utils/theme'
import Routes from 'src/Routes'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
