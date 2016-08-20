import React from 'react'
import { Route, IndexRoute } from 'react-router'


import App from './containers/App'
import HomePage from './containers/HomePage'
import StyleGuide from './containers/StyleGuide'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path='styleguide' component={StyleGuide} />
  </Route>
)
