import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { push } from 'react-router-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import './app.global.css'
import './normalize.css'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

import { ipcRenderer } from 'electron'
ipcRenderer.on('push-route', (event, route) => {
  store.dispatch(
		push(route)
	)
})

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
