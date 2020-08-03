import { push, replace, goBack } from 'connected-react-router'
import { buildUrl } from 'shared/api/utils'
import storage from 'shared/lib/storage'
import { storeToken, deleteToken, deleteUser } from 'shared/api/tokens'

export const updateHash = hash => (dispatch, getState) => {
  const currentUrl = getState().routing.locationBeforeTransitions
  dispatch(replace(`${currentUrl.pathname}${hash}`))
}

export const updateQuery = query => (dispatch, getState) => {
  const currentUrl = getState().router.location
  query = {
    ...currentUrl.query,
    ...query
  }
  dispatch(replace(buildUrl(currentUrl.pathname, query)))
  return query
}

export const fetchStoredUser = () => {
  const user = storage.local.getObj('user')
  return { type: 'app/FETCHED_USER', user }
}

export const selectToken = (data, redirectPath) => dispatch => {
  storage.local.setObj('user', () => data.user)
  storeToken(data.token.accessToken)
  dispatch(fetchStoredUser())
  if (redirectPath) {
    dispatch(push(redirectPath))
  }
}

export const logOut = () => dispatch => {
  const fakeShouldRemeberMe = false
  deleteToken()
  // delete user data if remember me is false
  if (!fakeShouldRemeberMe) {
    deleteUser()
  }

  dispatch(push('/login'))
}

export const setPageTitle = title => dispatch => {
  dispatch({
    type: 'SET_PAGE_TITLE',
    title
  })
}

export const back = goBack
