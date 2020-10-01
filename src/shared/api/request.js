/**
 * Network Request Tool
 * https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request'
import { notification } from 'antd'
import { push } from 'connected-react-router'
import { deleteToken, deleteUser } from 'shared/api/tokens'
import { getToken } from './tokens'

const codeMessage = {
  200: 'The server successfully returned the requested data.',
  201: 'New or modified data is successful.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'The data was deleted successfully.',
  400: 'The request was made with an error and the server did not perform any operations to create or modify data.',
  401: 'User does not have permission (token, username or password is incorrect).',
  403: 'The user is authorized, but access is forbidden.',
  404: 'The request is made for a record that does not exist and the server does not operate.',
  406: 'The format of the request is not available.',
  410: 'The requested resource is permanently deleted and will not be retrieved.',
  422: 'A validation error occurred when creating an object.',
  500: 'An error occurred on the server. Please check the server.',
  502: 'Gateway error.',
  503: 'The service is unavailable and the server is temporarily overloaded or maintained.',
  504: 'The gateway timed out.'
}
/**
 * Exception handler
 */

const errorHandler = error => {
  const { response } = error
  console.log(response)

  if (response && [401, 403].includes(response.status)) {
    deleteToken()
    deleteUser()

    // window.location.reload()

    // push(`/${response.status}`)
  }

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText
    const { status, url } = response
    notification.error({
      message: `Request error ${status}`,
      description: errorText
    })
  } else if (!response) {
    notification.error({
      description: 'Your network is abnormal and cannot connect to the server',
      message: 'Network anomaly'
    })
  }

  return response
}
/**
 * Default parameters when configuring request
 */

// const basePath = 'https://blaaumac-be.herokuapp.com'
const basePath = 'http://localhost:3005'
const apiPrefix = 'api/v1'
const requestHandler = extend({
  prefix: `${basePath}/${apiPrefix}`,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json'
  },
  // redirect: 'error',
  errorHandler
})

// const refreshTokenFromHeader = header => {
//   if (!header) {
//     return
//   }

//   const token = header.replace('Bearer ', '')
//   return window.__STORE__.dispatch(selectToken({ token: token }))
// }

requestHandler.interceptors.request.use((_, options) => {
  const token = getToken(t => t)

  if (token) {
    return {
      options: {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      }
    }
  }
  return false
})

export default requestHandler
