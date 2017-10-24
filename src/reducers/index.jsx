import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import navigation from './navigation'

export default combineReducers({
  navigation,
  router: routerReducer,
})