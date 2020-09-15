/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import Intl from 'shared/hocs/intl'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import MainFooter from 'shared/components/layouts/MainFooter'

let UserRegister = ({
  copy,
  submitting,
  form: { getFieldDecorator, validateFields },
  registerUser,
  push
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        registerUser(values)
      }
    })
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-top">
          <div className="login-header">
            <img src={require('shared/assets/logo.jpeg')} alt="Blaaumac" />
            <span className="login-title">{copy.register('title')}</span>
          </div>
          <div className="login-desc">{copy.register('desc')}</div>
        </div>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator &&
              getFieldDecorator('surname', {
                rules: [{ required: true, message: 'Please input your surname!' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Surname"
                />
              )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator &&
              getFieldDecorator('names', {
                rules: [{ required: true, message: 'Please input your first names!' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="First Names"
                />
              )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator &&
              getFieldDecorator('idNumber', {
                rules: [{ required: true, message: 'Please input your ID Number!' }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="ID Number"
                />
              )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator &&
              getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }]
              })(
                <Input
                  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Phone"
                />
              )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator &&
              getFieldDecorator('city', {
                rules: [{ required: true, message: 'Please input your city!' }]
              })(
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="City"
                />
              )}
          </Form.Item>

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
            <Button
              type="primary"
              htmlType="submit"
              className="login-submit"
              icon="login"
              loading={submitting}
            >
              {copy.register('Register')}
            </Button>
            <Button onClick={() => push('/login')} type="link">
              Login
            </Button>
          </Form.Item>
        </Form>
        <MainFooter />
      </div>
    </div>
  )
}

UserRegister.defaultProps = {
  submitting: false,
  registerUser: () => {}
}

UserRegister.defaultProps = {
  push: () => {}
}

UserRegister.propTypes = {
  copy: PropTypes.object.isRequired,
  submitting: PropTypes.bool,
  registerUser: PropTypes.func,
  form: PropTypes.object.isRequired,
  push: PropTypes.func
}

UserRegister = Form.create({ name: 'register' })(UserRegister)

export default Intl({
  register: 'account.register'
})(UserRegister)
