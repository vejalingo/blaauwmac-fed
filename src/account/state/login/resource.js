// eslint-disable-next-line import/prefer-default-export
export const toApi = item => ({
  channel: 'string',
  auth_type: 'USERNAME_PASSWORD',
  scope: ['PERMISSIONS'],
  identifier: 'string',
  security_data: 'string'
})

export const toClient = item => ({
  token_type: item.token_type,
  party_roles: item.party_roles,
  permissions: item.permissions,
  renew_credentials: item.renew_credentials
})
