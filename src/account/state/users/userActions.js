// import { paginateQuery } from 'shared/api/utils'
import api from 'shared/api/request'
import { updateQuery } from 'shared/state/actions'
import { permissions, users } from './resource'

export const fetchUsers = query => dispatch => {
  query = dispatch(updateQuery(query))
  dispatch({ type: 'shared/list/FETCHING' })
  api
    .get(`/users`, query)
    .then(body => {
      console.log('res', body)
      dispatch({
        type: 'shared/list/FETCHED_ITEMS',
        items: body.map(item => users.toClient(item))
      })
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/list/FETCH_ERROR', messages: description })
    })
}

export const createUser = userData => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .post(`/users`, userData)
    .then(body => {
      console.log(body)
      // redirect to users
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}

export const fetchUser = userId => dispatch => {
  dispatch({ type: 'shared/list/FETCHING' })
  api
    .get(`/users/${userId}`)
    .then(user => {
      console.log('user data', user)
      dispatch({ type: 'shared/item/FETCHED_ITEM', item: users.toClientUser(user) })
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/list/FETCH_ERROR', messages: description })
    })
}

export const updateUser = (userId, userData) => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .put(`/users/${userId}`, userData)
    .then(body => {
      console.log(body)
      // redirect to users
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}

export const deleteUser = userId => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .delete(`/users/${userId}`)
    .then(body => {
      console.log(body)
      // redirect to users
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}

export const fetchPermissionsByGroup = () => dispatch => {
  dispatch({ type: 'shared/list/FETCHING' })
  api
    .get(`/users/permissions`)
    .then(body => {
      console.log(body)
      dispatch({
        type: 'shared/list/FETCHED_ITEMS',
        items: body.map(item => permissions.toClient(item))
      })
    })
    .catch(({ description }) => {
      console.info('User Permission error', description)
      dispatch({ type: 'shared/list/FETCH_ERROR', messages: description })
    })
}

export const createUserRoles = role => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .post(`/users/roles`, role)
    .then(body => {
      console.log(body)
      // redirect to user roles
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}

export const fetchUserRoles = () => dispatch => {
  dispatch({ type: 'shared/list/FETCHING' })
  api
    .get(`/users/roles`)
    .then(body => {
      console.log('res', body)
      dispatch({
        type: 'shared/list/FETCHED_ITEMS',
        items: body.map(item => users.toClient(item)) // TODO: update resource
      })
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/list/FETCH_ERROR', messages: description })
    })
}

export const fetchUserRolesById = roleId => dispatch => {
  dispatch({ type: 'shared/list/FETCHING' })
  api
    .get(`/users/roles/${roleId}`)
    .then(body => {
      console.log('res', body)
      dispatch({
        type: 'shared/item/FETCHED_ITEM',
        item: body.map(item => users.toClient(item)) // TODO: update resource
      })
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/list/FETCH_ERROR', messages: description })
    })
}

export const updateUserRoles = (roleId, role) => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .post(`/users/roles/${roleId}`, role)
    .then(body => {
      console.log(body)
      // redirect to user roles
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}

export const deleteUserRole = roleId => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .delete(`/users/roles/${roleId}`)
    .then(body => {
      // TODO: Redirect here
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}
