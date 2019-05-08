// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { store, history } from 'src/store'
import Routes from 'src/Routes'
import 'src/App.css'

export const theme = {
  direction: 'ltr',
  palette: {
    primary: {
      light: 'red',
      main: 'red',
      dark: 'red'
    },
    secondary: {
      light: 'blue',
      main: 'blue',
      dark: 'blue'
    },
    error: 'red',
    text: 'gray'
  }
}

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
