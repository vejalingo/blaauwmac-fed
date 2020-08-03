/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'
import configureStore, { history } from './store'
import { unregister } from './serviceWorker'
import Routes from './routes'
import './index.less'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes history={history} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

unregister()
