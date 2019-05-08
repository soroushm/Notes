// @flow

import {applyMiddleware, compose, createStore} from 'redux'

import {routerMiddleware} from 'react-router-redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'
import rootReducer from 'src/reducers'

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

export const store = createStore(rootReducer, composedEnhancers)
