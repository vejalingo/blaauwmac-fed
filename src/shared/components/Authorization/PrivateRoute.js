import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import storage from 'shared/lib/storage'

const fetchStoredUser = () => {
  return storage.local.getObj('user')
}

const PrivateRoute = ({ wrapper: Wrapped, component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = fetchStoredUser()
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }

      // check if route is restricted by role
      if (roles && !roles.includes(currentUser.role)) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: '/403' }} />
      }

      // authorised so return component
      return (
        <Wrapped>
          <Component {...props} />
        </Wrapped>
      )
    }}
  />
)

PrivateRoute.propTypes = {
  roles: PropTypes.array.isRequired,
  wrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  // eslint-disable-next-line react/require-default-props
  location: PropTypes.object
}

export default PrivateRoute
