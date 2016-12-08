import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as uiReducer } from 'redux-ui'

import pathResults from './pathResults'

const rootReducer = combineReducers({
  routing,
	ui: uiReducer,
	pathResults
})

export default rootReducer
