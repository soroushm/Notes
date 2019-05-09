// @flow

import { applyMiddleware, compose, createStore } from 'redux'

import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from 'src/reducers'

const persistConfig = {
  key: 'root',
  storage
}
export const history = createBrowserHistory()
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    middleware.push(devToolsExtension())
  }
}
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composedEnhancers)
export const persistor = persistStore(store)
