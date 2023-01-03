import { combineReducers } from 'redux'
import userReducer from './userReducer'
import repoReducer from './repoReducer'

export default combineReducers({
  user: userReducer,
  repo: repoReducer
})