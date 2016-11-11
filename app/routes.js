import React from 'react'
import { Route, IndexRoute } from 'react-router'


import App from './components/'
import CleanOpen from './containers/routes/CleanOpen'
import Editor from './containers/routes/Editor'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={CleanOpen} />
		<Route path='/editor' component={Editor}/>
  </Route>
)
