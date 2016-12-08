import React from 'react'
import {  Route, IndexRoute  } from 'react-router'


import App from './components/'
import CleanOpen from './containers/routes/CleanOpen'
import Editor from './containers/routes/Editor'
import LoadProject from 'app/containers/routes/LoadProject'
import NewProject from 'app/containers/routes/NewProject'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CleanOpen } />
		<Route path='/load-project' component={ LoadProject }/>
		<Route path='/new-project' component={ NewProject }/>
		<Route path='/editor' component={ Editor }/>
  </Route>
)
