import { combineReducers } from 'redux'

const initialClaimState = {
  claim: {},
  claimLoaded: false
}

const claims = (state = initialClaimState, action) => {
  switch (action.type) {
    case 'claim/registration/SAVED':
      return { ...state, claim: { ...state.claim, ...action.claim }, claimLoaded: true }
    default:
      return state
  }
}

export default combineReducers({
  claims
})
