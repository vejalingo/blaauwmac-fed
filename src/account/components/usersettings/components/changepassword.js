import React, { Component } from 'react'
import Intl from 'shared/hocs/intl'
import { Form, Input, Button } from 'antd'

class ChangePassword extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleSelectChange = value => {
    console.log(value)
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
    })
  }

  render() {
    const user = (
      <div className="card-container">
        <Form onSubmit={this.handleSubmit} layout="vertical">
          <Form.Item label="New Password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    )

    return (
      <>
        <div className="content-empty-wrapper">{user}</div>
      </>
    )
  }
}

ChangePassword = Form.create({ name: 'changepasswordform' })(ChangePassword)

ChangePassword = Intl({
  usersettings: 'account.usersettings'
})(ChangePassword)

export { ChangePassword }
