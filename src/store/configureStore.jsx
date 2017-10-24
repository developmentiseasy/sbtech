import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'

import rootReducer from '../reducers'

const history = createHistory()


const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunk,
      createLogger(),
      routerMiddleware(history)
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore