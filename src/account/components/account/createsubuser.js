import React, { Component } from 'react'
import Intl from 'shared/hocs/intl'
import { Typography, Form, Input, Button, Select, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography
const Option = Select.Option

class CreateSubUser extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { copy } = this.props

    const user = (
      <Form onSubmit={this.handleSubmit} layout="vertical">
        <Form.Item label="Username" required={true}>
          <Input placeholder="user.name" />
        </Form.Item>
        <Form.Item label="Password" required={true}>
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Confirm Password" required={true}>
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Name">
          <Input placeholder="South Africa (27)" />
        </Form.Item>
        <Form.Item label="Email" required={true}>
          <Input placeholder="South Africa (27)" />
        </Form.Item>
        <Form.Item label="Would you like this account information emailed to  the user?">
          <Input placeholder="South Africa (27)" />
        </Form.Item>
        <Form.Item label="Consolidated Billing" required={true}>
          <Select defaultValue="Seperately">
            <Option value="Seperately">Seperately</Option>
            <Option value="Acount">Use My Account</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Country">
          <Select defaultValue="SA">
            <Option value="SA">SA</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Default Prefix" required={true}>
          <Select defaultValue="SA">
            <Option value="SA">SA</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item label="TImezone">
          <Select defaultValue="SA">
            <Option value="SA">SA</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>
            Add User
          </Button>
          <Link to="/account" style={{ marginLeft: '10px' }}>
            <Button type="secondary">
              <Icon type="left" style={{ paddingRight: '5px' }} />
              Cancel
            </Button>
          </Link>
        </Form.Item>
      </Form>
    )

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {copy.CreateSubUser('title')}{' '}
          <Title type="secondary" level={4}>
            {copy.CreateSubUser('subTitle')}
          </Title>
        </Title>

        <div className="content-wrapper">{user}</div>
      </>
    )
  }
}

CreateSubUser = Form.create({ name: 'CreateSubUser' })(CreateSubUser)

export default Intl({
  CreateSubUser: 'account.CreateSubUser'
})(CreateSubUser)
