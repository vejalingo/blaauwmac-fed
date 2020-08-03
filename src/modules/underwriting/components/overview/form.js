/* eslint-disable no-undef */
/* eslint-disable no-class-assign */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'
import { Typography, Form, Input, Button, Collapse, Select, Switch, Steps, message } from 'antd'

import { formatDateTime } from 'shared/lib/dates'

import * as overviewActions from '../../state/overview'

import PolicyDetails from './policy-details'
import SectionsOfCover from './cover-sections'
// import FormThree from './steps/three'
// import FormFour from './steps/four'
// import FormFive from './steps/five'
// import FormSix from './steps/six'

const { Step } = Steps

const { TextArea } = Input

const { Title } = Typography
const { Panel } = Collapse
const { Option } = Select

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    const { orgId, claimId, formType, fetchClaim } = this.props
    console.log(this.props)
    // if (formType === 'edit') fetchClaim(orgId, claimId)
  }

  handleSubmit = e => {
    const {
      form: { validateFields }
    } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        this.next(values)
      }
    })
  }

  finishProcess = e => {
    const {
      orgId,
      claimId,
      formType,
      form: { validateFields },
      createClaim,
      updateClaim,
      item
    } = this.props

    e.preventDefault()
    if (formType === 'edit') {
      updateClaim(orgId, claimId, item)
    } else {
      createClaim(orgId, item)
    }
  }

  next = values => {
    const { saveClaimsToState } = this.props
    const current = this.state.current + 1

    saveClaimsToState(values)

    this.setState({ current })
  }

  prev = () => {
    const current = this.state.current - 1
    this.setState({ current })
  }

  onChange = current => {
    this.setState({ current })
  }

  render() {
    const {
      copy,
      formType,
      form: { getFieldDecorator, validateFields }
    } = this.props

    const { current } = this.state

    const steps = [
      {
        title: 'Policy Details',
        content: <PolicyDetails {...this.props} gfd={getFieldDecorator} />
      },
      {
        title: 'Sections Of Cover',
        content: <SectionsOfCover {...this.props} gfd={getFieldDecorator} />
      }
    ]

    return (
      <>
        <Title level={3} className="heading-wrapper">
          Underwriting
        </Title>

        <div className="content-nofilter-wrapper">
          <Steps current={current} onChange={this.onChange}>
            {steps.map(step => (
              <Step key={step.title} title={step.title} />
            ))}
          </Steps>

          <div className="steps-content" style={{ padding: '20px 0' }}>
            <Form
              onSubmit={this.handleSubmit}
              layout="horizontal"
              className="ant-advanced-search-form"
            >
              {steps[current].content}
            </Form>
          </div>
        </div>
      </>
    )
  }
}

Overview = Form.create({
  name: 'overview'
})(Overview)

const mapStateToProps = ({ shared }, { match: { params } }) => ({
  ...params
})

const mapDispatchToProps = overviewActions

Overview = connect(mapStateToProps, mapDispatchToProps)(Overview)

export default Intl({
  smsalist: 'compose.smsalist'
})(Overview)
