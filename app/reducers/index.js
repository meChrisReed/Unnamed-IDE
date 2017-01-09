import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as uiReducer } from 'redux-ui'

import pathResults from './pathResults'
import projectMenu from './projectMenu'
import qualityMenu from './qualityMenu'

const rootReducer = combineReducers({
  routing,
	ui: uiReducer,
	pathResults,
	projectMenu,
	qualityMenu
})

export default rootReducer
