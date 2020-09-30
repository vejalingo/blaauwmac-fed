import { transform } from 'lodash'

const initialListState = {
  listItems: [],
  dashboardData: [],
  pagination: {},
  fetching: true
}

export const list = ({ path, pathReset }) => (state = initialListState, action) => {
  switch (action.type) {
    case `${path}/list/FETCHED_ITEMS`:
      // eslint-disable-next-line no-case-declarations
      const { items = [], pagination, dashboardData = [] } = action
      return { ...state, listItems: items, dashboardData, pagination, fetching: false }
    case `${path}/list/FETCHING`:
      return { ...state, listItems: [], fetching: true }
    case `${path}/list/FETCH_ERROR`:
      return { ...state, fetching: false }
    case `${pathReset ? `${path}/list/RESET` : 'ROUTE_CHANGED'}`:
      return initialListState
    default:
      return state
  }
}

const initialFormState = {
  formItem: {},
  formLoaded: false,
  submitting: false,
  messages: []
}

export const form = ({ path, pathReset }) => (state = initialFormState, action) => {
  switch (action.type) {
    case `${path}/form/FETCHING`:
      return { ...state, ...initialFormState }
    case `${path}/form/FETCHED_ITEM`:
      return { ...state, formItem: action.item, formLoaded: true, submitting: false }
    case `${path}/form/SUBMITTING`:
      return { ...state, submitting: true }
    case `${path}/form/SUBMITTED`:
      return { ...state, submitting: false, messages: action.messages || [] }
    case `${pathReset ? `${path}/form/RESET` : 'ROUTE_CHANGED'}`:
      return initialFormState
    default:
      return state
  }
}

const initialItemState = {
  item: {},
  itemLoaded: false
}

export const item = ({ path, pathReset }) => (state = initialItemState, action) => {
  switch (action.type) {
    case `${path}/item/FETCHED_ITEM`:
      return { ...state, item: action.item, itemLoaded: true }
    case `${pathReset ? `${path}/item/RESET` : 'ROUTE_CHANGED'}`:
      return initialItemState
    default:
      return state
  }
}

const initialClaimState = {
  claim: {},
  claimLoaded: false
}

export const claim = ({ path, pathReset }) => (state = initialClaimState, action) => {
  switch (action.type) {
    case `${path}/item/FETCHED_CLAIM_ITEM`:
      return { ...state, claim: { ...state.claim, ...action.claim }, claimLoaded: true }
    case `${pathReset ? `${path}/item/RESET` : 'ROUTE_CHANGED'}`:
      return initialClaimState
    default:
      return state
  }
}

const initialItemsState = {
  getItems: (state, itemTypes) =>
    transform(
      itemTypes,
      (ret, type) => {
        ret[type] = state[type] || []
        ret[`${type}Loaded`] = !!state[`${type}Loaded`]
      },
      {}
    )
}

export const items = ({ path, pathReset }) => (state = initialItemsState, action) => {
  switch (action.type) {
    case `${path}/items/FETCHED_ITEMS`:
      return transform(
        action.items,
        (ret, collection, type) => {
          ret[type] = collection
          ret[`${type}Loaded`] = true
        },
        { ...state }
      )
    case `${pathReset ? `${path}/items/RESET` : 'ROUTE_CHANGED'}`:
      return initialItemsState
    default:
      return state
  }
}
