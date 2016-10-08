import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as uiReducer } from 'redux-ui'

const rootReducer = combineReducers({
  routing,
	ui: uiReducer
})

export default rootReducer
