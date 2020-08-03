import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import shared from 'shared/state/sharedReducer'
import app from 'account/state/users/userReducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    shared,
    app
  })
