import moment from 'moment'

/* eslint-disable import/prefer-default-export */
export const toClient = item => ({
  account_id: 0,
  class_id: 0,
  class_description: 'string',
  party_id: 0,
  name: 'string',
  account_number: 'string',
  status: 'string',
  created_at: 'string',
  created_by: 0
})

export const toApi = item => ({
  account_id: 0,
  class_id: 0,
  class_description: 'string',
  party_id: 0,
  name: 'string',
  account_number: 'string',
  status: 'string',
  created_at: moment.utc(),
  created_by: 0
})
