import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import configureStore from './store/configureStore'
import BaseContainer from './containers/BaseContainer'

import './index.css'

const history = createHistory()

const store = configureStore()


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={BaseContainer} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)