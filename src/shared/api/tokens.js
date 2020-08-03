import storage from 'shared/lib/storage'

let __token__ = null

/**
 * Stores the token in local storage and sets the in memory pointer to the token.
 * The token is stored in local storage so that the system can re-populate the token if the page is refreshed.
 * @param {The JWT token string} data
 */
export const storeToken = data => {
  storage.local.set('tokenString', data)
  __token__ = data
}

/**
 * Used when logging out to remove references to the current token
 */
export const deleteToken = (name = false) => {
  storage.local.remove(name || 'tokenString')
  __token__ = null
}

/**
 * If the in memory pointer is null then it needs to retrieved from local storage.
 * If the token in local storage does not exist then it needs to request a new token from the api.
 * @param {The callback which receives the token} callback
 */
export const getToken = callback => {
  if (!__token__) {
    __token__ = storage.local.get('tokenString')
  }
  return callback(__token__)
}

export const deleteUser = () => deleteToken('user')
