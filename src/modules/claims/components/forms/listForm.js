/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Intl from 'shared/hocs/intl'
import { Typography, Form, Input, Button, Collapse, Select, Switch, Steps, message } from 'antd'
import List from './List'

const { Title } = Typography

class ClaimForms extends Component {
  render() {
    const { copy } = this.props

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {copy.smsalist('Claim Forms')}
        </Title>
        <div className="content-wrapper">
          <List />
        </div>
      </>
    )
  }
}

ClaimForms = Form.create({ name: 'claimforms' })(ClaimForms)

export default Intl({
  smsalist: 'compose.smsalist'
})(ClaimForms)
