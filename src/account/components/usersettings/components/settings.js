/* eslint-disable import/no-mutable-exports */
import React from 'react'
import Intl from 'shared/hocs/intl'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'

let SettingsForm = ({ copy, form: { validateFields } }) => {
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  const user = (
    <div className="card-container">
      <Form onSubmit={handleSubmit} layout="vertical">
        <Form.Item label="Default Prefix">
          <Input placeholder="South Africa (27)" />
        </Form.Item>
        <Form.Item label="Timezone">
          <Input placeholder="Basic usage" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>
            {copy.shared('save')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )

  return <div className="content-empty-wrapper">{user}</div>
}

SettingsForm.propTypes = {
  copy: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
}

SettingsForm = Form.create({ name: 'settingsform' })(SettingsForm)
SettingsForm = Intl({
  usersettings: 'account.usersettings'
})(SettingsForm)

export { SettingsForm }
