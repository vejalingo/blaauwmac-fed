import { paginateQuery } from 'shared/api/utils'
import api from 'shared/api/request'
import { updateQuery } from 'shared/state/actions'
import { push } from 'connected-react-router'
import { toClient } from './resource'

export const saveClaimsToState = claim => dispatch => {
  dispatch({ type: 'shared/item/FETCHED_CLAIM_ITEM', claim })
}

export const fetchClaim = (userId, claimId) => dispatch => {
  dispatch({ type: 'shared/form/FETCHING' })
  api
    .get(`/claims/${userId}/${claimId}`)
    .then(({ data }) => {
      dispatch({ type: 'shared/item/FETCHED_ITEM', item: data[0] })
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/FETCH_ERROR', messages: description })
    })
}

export const fetchClaims = (userId, query = {}) => async dispatch => {
  query = dispatch(updateQuery(query))
  dispatch({ type: 'shared/list/FETCHING' })

  const { data, dashboardData, errors } = await api.get(`/claims/${userId}`, {
    params: paginateQuery(query)
  })
  if (data) {
    dispatch({
      type: 'shared/list/FETCHED_ITEMS',
      items: data.map(d => toClient(d)),
      dashboardData: dashboardData.filter((v, i, a) => a.findIndex(t => t.name === v.name) === i)
    })
  } else {
    dispatch({ type: 'shared/list/FETCH_ERROR' })
  }
}

export const createClaim = (userId, data) => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .post(`/claims/${userId}`, { data })
    .then(() => {
      window.location.reload()
      dispatch(push('/dashboard'))
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}

export const updateClaim = (userId, claimId, data) => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .put(`/claims/${userId}/${claimId}`, { data })
    .then(() => {
      dispatch(push('/dashboard'))
    })
    .catch(error => {
      dispatch({ type: 'shared/form/SUBMITTED' })
    })
}

export const deleteClaim = (userId, claimId) => dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  api
    .delete(`/claims/${userId}/${claimId}`)
    .then(() => {
      dispatch(push('/dashboard'))
    })
    .catch(({ description }) => {
      dispatch({ type: 'shared/form/SUBMITTED', messages: description })
    })
}
