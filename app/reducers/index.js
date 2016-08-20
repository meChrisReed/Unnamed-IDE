import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import currentInputs from './currentInputs'

const rootReducer = combineReducers({
  ui: combineReducers({
    currentInputs
  }),
  routing
})

export default rootReducer
