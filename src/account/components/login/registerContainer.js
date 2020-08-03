import React from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'
import { push } from 'connected-react-router'
import * as actions from '../../state/login/sessionActions'
import RegisterUser from './register'

let UserRegisterContainer = props => {
  return <RegisterUser {...props} />
}

const mapStateToProps = ({
  shared: {
    form: { submitting }
  }
}) => ({
  submitting
})

const mapDispatchToProps = { ...actions, push }

UserRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(UserRegisterContainer)

export default Intl({
  login: 'account.login'
})(UserRegisterContainer)
