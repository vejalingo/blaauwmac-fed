/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Intl from 'shared/hocs/intl'
import { Typography, Form, Input, Button, Collapse, Select, Switch, Steps, message } from 'antd'

const { Title } = Typography

class AdditionalInsurancePolicy extends Component {
  render() {
    const { copy } = this.props

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {copy.smsalist('Additional Insurance Policy')}
        </Title>
        <div className="content-wrapper">Coming Soon</div>
      </>
    )
  }
}

export default Intl({
  smsalist: 'compose.smsalist'
})(AdditionalInsurancePolicy)
