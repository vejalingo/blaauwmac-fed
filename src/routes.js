/* eslint-disable react/display-name */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

// Layouts
import BasicLayout from 'shared/components/layouts/BasicLayout'
import EmptyLayout from 'shared/components/layouts/EmptyLayout'
import PrivateRoute from 'shared/components/Authorization/PrivateRoute'
import { Role } from 'shared/lib/role'

// Login
import UserLogin from './account/components/login/loginContainer'
import UserPasswordReset from './account/components/login/forgot-password'

// Register
import UserRegister from './account/components/login/registerContainer'

// Dashboard
import Dashboard from './modules/dashboard/index'

// Claims
import ClaimsRegistration from './modules/claims/components/registration/form'
import ClaimForms from './modules/claims/components/forms/listForm'
import ClaimReports from './modules/claims/components/report/listReport'

// Underwriting
import Underwriting from './modules/underwriting/components/overview/form'
import OverviewForm from './modules/underwriting/components/overview/policy-details'
import SectionsOfCover from './modules/underwriting/components/overview/cover-sections'
import SectionsOfCoverForm from './modules/underwriting/components/overview/cover-section-form'

import BuildingCombined from './modules/underwriting/components/overview/sections/building-combined'

// Account
import UserSettings from './account/components/usersettings/usersettings'

// Exception
import NotFoundPage from './shared/components/exceptions/404'
import NoPermissionsPage from './shared/components/exceptions/403'
import ServerErrorPage from './shared/components/exceptions/500'

const Wrapper = ({ wrapper: Wrapped, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Wrapped>
        <Component {...props} />
      </Wrapped>
    )}
  />
)

const form = (Form, type, options) => props => <Form {...props} formType={type} {...options} />

const Routes = ({ history }) => (
  <Switch history={history}>
    {/* Base */}
    <Redirect exact from="/" to="/dashboard" />

    {/* Login */}
    <Wrapper exact path="/login" wrapper={EmptyLayout} component={UserLogin} />
    <Wrapper exact path="/forgot-password" wrapper={EmptyLayout} component={UserPasswordReset} />
    <Wrapper exact path="/register" wrapper={EmptyLayout} component={UserRegister} />

    {/* Dashboard */}
    <PrivateRoute exact path="/dashboard" wrapper={BasicLayout} component={Dashboard} />

    {/* Claims */}
    <PrivateRoute
      exact
      path="/claims/:orgId/create"
      wrapper={BasicLayout}
      component={form(ClaimsRegistration, 'create')}
    />

    <PrivateRoute
      exact
      path="/claims/:orgId/edit/:claimId"
      wrapper={BasicLayout}
      component={form(ClaimsRegistration, 'edit')}
    />

    <PrivateRoute
      exact
      path="/claims/:orgId/forms"
      wrapper={BasicLayout}
      component={form(ClaimForms, 'create')}
    />

    <PrivateRoute
      exact
      path="/claims/:orgId/reports"
      wrapper={BasicLayout}
      component={form(ClaimReports, 'create')}
    />

    {/* Underwriting */}
    <PrivateRoute
      exact
      path="/underwriting/:orgId/overview"
      wrapper={BasicLayout}
      component={form(Underwriting, 'create')}
    />

    <PrivateRoute
      exact
      path="/underwriting/:orgId/overview/building-combined"
      wrapper={BasicLayout}
      component={BuildingCombined}
    />

    <PrivateRoute
      exact
      path="/underwriting/:orgId/cover-sections"
      wrapper={BasicLayout}
      component={SectionsOfCover}
    />

    <PrivateRoute
      exact
      path="/underwriting/:orgId/cover-sections"
      wrapper={BasicLayout}
      component={form(SectionsOfCoverForm, 'create')}
    />

    {/* Account */}
    <PrivateRoute exact path="/account/settings" wrapper={BasicLayout} component={UserSettings} />

    {/* Exception */}
    <Wrapper exact path="/403" wrapper={EmptyLayout} component={NoPermissionsPage} />
    <Wrapper exact path="/500" wrapper={EmptyLayout} component={ServerErrorPage} />
    <Wrapper wrapper={EmptyLayout} component={NotFoundPage} />
  </Switch>
)

Routes.propTypes = {
  history: PropTypes.object.isRequired
}

Wrapper.propTypes = {
  wrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

export default Routes
