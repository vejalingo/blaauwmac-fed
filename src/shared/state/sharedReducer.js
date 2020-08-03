import { combineReducers } from 'redux'
import * as create from 'shared/state/reducerFactory'

export default combineReducers({
  list: create.list({ path: 'shared' }),
  form: create.form({ path: 'shared' }),
  item: create.item({ path: 'shared' }),
  items: create.items({ path: 'shared' }),
  claim: create.claim({ path: 'shared' })
})
