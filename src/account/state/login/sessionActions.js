// import { isEmpty } from 'lodash'
import api from 'shared/api/request'
import { push } from 'connected-react-router'
import { selectToken } from 'shared/state/actions'
import { toApi, toClient } from './resource'

export const loginUser = data => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .post('/auth/login', { data })
    .then(body => {
      dispatch({
        type: 'shared/form/SUBMITTED'
      })
      if (Object.entries(body).length > 1) {
        dispatch(selectToken(body, '/dashboard'))
      } else {
        dispatch(push('login'))
      }
    })
    .catch(errors => {
      throw errors
    })
}

export const registerUser = data => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .post('/auth/register', { data })
    .then(({ user, errors }) => {
      if (!Object.keys(errors).length > 0) {
        dispatch({
          type: 'shared/form/SUBMITTED'
        })

        dispatch(push('login'))
      } else {
        dispatch(push('register'))
      }
    })
    .catch(({ errors }) => {
      console.log(errors)
      throw errors
    })
}
