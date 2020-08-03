/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import Intl from 'shared/hocs/intl'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import MainFooter from 'shared/components/layouts/MainFooter'

let UserLogin = ({
  copy,
  submitting,
  form: { getFieldDecorator, validateFields },
  loginUser,
  push
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        loginUser(values)
      }
    })
  }

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
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator &&
              getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }]
              })(
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                />
              )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator &&
              getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator &&
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>{copy.login('Remember Me')}</Checkbox>)} */}
            <span className="login-form-forgot" onClick={() => push('/forgot-password')}>
              {copy.login('Forgot Password')}
            </span>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-submit"
              icon="login"
              loading={submitting}
            >
              {copy.login('Login')}
            </Button>
            {/* <Button onClick={() => push('/register')} type="link">
              Register
            </Button> */}
          </Form.Item>
        </Form>
        <MainFooter />
      </div>
    </div>
  )
}

UserLogin.defaultProps = {
  submitting: false,
  loginUser: () => {}
}

UserLogin.defaultProps = {
  push: () => {}
}

UserLogin.propTypes = {
  copy: PropTypes.object.isRequired,
  submitting: PropTypes.bool,
  loginUser: PropTypes.func,
  form: PropTypes.object.isRequired,
  push: PropTypes.func
}

UserLogin = Form.create({ name: 'login' })(UserLogin)

export default Intl({
  login: 'account.login'
})(UserLogin)
