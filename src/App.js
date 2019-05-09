// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { history, store, persistor } from 'src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { theme } from 'src/utils/theme'
import Routes from 'src/Routes'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
