import React, { Component } from 'react'
import Intl from 'shared/hocs/intl'
import { Form, Input, Button } from 'antd'
import storage from 'shared/lib/storage'

class ProfileInfo extends Component {
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

  getUserEmail = () => storage.local.getObj('user').email

  render() {
    const user = (
      <div className="card-container">
        <Form onSubmit={this.handleSubmit} layout="vertical">
          <Form.Item label="Email">
            <Input placeholder={this.getUserEmail} />
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

ProfileInfo = Form.create({ name: 'ProfileInfoForm' })(ProfileInfo)
ProfileInfo = Intl({
  usersettings: 'account.usersettings'
})(ProfileInfo)

export { ProfileInfo }
