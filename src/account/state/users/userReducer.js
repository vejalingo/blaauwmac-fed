import { combineReducers } from 'redux'

export const user = (
  state = {
    token_type: '',
    party_roles: [],
    permissions: [],
    renew_credentials: false
  },
  action
) => {
  switch (action.type) {
    case 'app/FETCHED_USER':
      return action.user
    default:
      return state
  }
}

export default combineReducers({
  user
})
