import { paginateQuery } from 'shared/api/utils'
import api from 'shared/api/request'
import { push } from 'connected-react-router'
import { updateQuery } from 'shared/state/actions'
import { toClient, toApi } from './resource'

export const fetchAccounts = query => async dispatch => {
  query = dispatch(updateQuery(query))
  dispatch({ type: 'shared/list/FETCHING' })

  const { data, errors } = await api.get(`/accounts`, { params: paginateQuery(query) })
  if (data) {
    dispatch({
      type: 'shared/list/FETCHED_ITEMS',
      items: data
    })
  } else {
    dispatch({ type: 'shared/list/FETCH_ERROR' })
  }
}

export const fetchAccount = accId => dispatch => {
  dispatch({ type: 'shared/form/FETCHING' })
  api
    .get(`/accounts/?accountId=${accId}`)
    .then(({ data }) => {
      dispatch({ type: 'shared/item/FETCHED_ITEM', item: data[0] })
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/FETCH_ERROR', messages: description })
    })
}

export const createAccounts = data => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .post(`/accounts`, { data })
    .then(({ body }) => {
      dispatch(push('/account'))
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}

export const updateAccount = (accId, data) => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .put(`/accounts/${accId}`, { data })
    .then(res => {
      dispatch(push('/account'))
    })
    .catch(error => {
      dispatch({ type: 'shared/form/SUBMITTED' })
    })
}

export const deleteAccount = accId => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .delete(`/accounts/${accId}`)
    .then(body => {
      console.log(body)
      dispatch(push('/account'))
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}
