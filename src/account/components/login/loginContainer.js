import React from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'
import { push } from 'connected-react-router'
import * as actions from '../../state/login/sessionActions'
import LoginUser from './login'

let UserLoginContainer = props => {
  return <LoginUser {...props} />
}

const mapStateToProps = ({
  shared: {
    form: { submitting }
  }
}) => ({
  submitting
})

const mapDispatchToProps = { ...actions, push }

UserLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginContainer)

export default Intl({
  login: 'account.login'
})(UserLoginContainer)
