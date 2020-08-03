/* eslint-disable import/prefer-default-export */
export const permissions = {
  toClient: item => ({
    group_id: 0,
    description: 'string',
    permissions: [
      {
        perm_id: 0,
        group_id: 0,
        name: 'string',
        description: 'string'
      }
    ]
  }),
  toApi: item => ({
    ...item
  })
}

export const users = {
  toClient: item => ({
    total_count: 0,
    results: [
      {
        user_id: 0,
        credential_type: 'USERNAME_PASSWORD',
        user_identifier: 'string',
        security_data: 'string',
        party_id: 0,
        name: 'string',
        lastname: 'string',
        party_name: 'string',
        status: 0,
        status_desc: 'string',
        account_id: 0,
        account_role: 'string',
        account_name: 'string',
        created_at: '2019-09-13T09:34:23.220Z',
        assign_roles: [0],
        roles_desc: 'string',
        roles: [
          {
            role_id: 0,
            description: 'string',
            permissions: [
              {
                perm_id: 0,
                group_id: 0,
                name: 'string',
                description: 'string'
              }
            ]
          }
        ]
      }
    ]
  }),
  toClientUser: user => ({
    user_id: 0,
    credential_type: 'USERNAME_PASSWORD',
    user_identifier: 'string',
    security_data: 'string',
    party_id: 0,
    name: 'string',
    lastname: 'string',
    party_name: 'string',
    status: 0,
    status_desc: 'string',
    account_id: 0,
    account_role: 'string',
    account_name: 'string',
    created_at: '2019-09-13T10:10:39.618Z',
    assign_roles: [0],
    roles_desc: 'string',
    roles: [
      {
        role_id: 0,
        description: 'string',
        permissions: [
          {
            perm_id: 0,
            group_id: 0,
            name: 'string',
            description: 'string'
          }
        ]
      }
    ]
  })
}
