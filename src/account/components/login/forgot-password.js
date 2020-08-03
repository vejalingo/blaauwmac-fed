import React from 'react'
import Intl from 'shared/hocs/intl'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { Link } from 'react-router-dom'
import MainFooter from 'shared/components/layouts/MainFooter'

let UserPasswordReset = ({ copy, form: { getFieldDecorator } }) => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-top">
          <div className="login-header">
            <Logo alt="logo" className="login-logo" />
            <span className="login-title">{copy.login('Blaauwmac')}</span>
          </div>
          <div className="login-desc">{copy.login('Commercial Claims System™')}</div>
        </div>
        {/* <div className="login-top">
          <div className="login-header">
            <Logo alt="logo" className="login-logo" />
            <span className="login-title">{copy.login('title')}</span>
          </div>
          <div className="forgot-desc">{copy.login('desc')}</div>
          <div className="forgot-pass-notif">{copy.login('enterEmail')}</div>
          <div className="forgot-pass-message">{copy.login('forgotMessage')}</div>
        </div> */}
        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please enter your email!' }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-submit">
              {copy.login('Reset Password')}
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/login">{copy.login('login')}</Link>
          </Form.Item>
        </Form>
        <MainFooter />
      </div>
    </div>
  )
}

UserPasswordReset.propTypes = {
  copy: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
}

UserPasswordReset = Form.create({ name: 'forgotpassword' })(UserPasswordReset)

export default Intl({
  login: 'account.login'
})(UserPasswordReset)
