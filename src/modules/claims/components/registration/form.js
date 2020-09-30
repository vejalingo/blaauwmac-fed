/* eslint-disable no-undef */
/* eslint-disable no-class-assign */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'
import { Typography, Form, Input, Button, Collapse, Select, Switch, Steps, message } from 'antd'
import moment from 'moment'
import { formatDate, getDifference } from 'shared/lib/dates'
import { formatDateTime } from 'shared/lib/dates'

import * as claimActions from '../../state/registration'

import FormOne from './steps/one'
import FormTwo from './steps/two'
import FormThree from './steps/three'
import FormFour from './steps/four'
import FormFive from './steps/five'
import FormSix from './steps/six'

const { Step } = Steps

const { TextArea } = Input

const { Title } = Typography
const { Panel } = Collapse
const { Option } = Select

class ClaimForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    const { orgId, claimId, formType, fetchClaim } = this.props
    if (formType === 'edit') fetchClaim(orgId, claimId)
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
    const { orgId, claimId, formType, form, createClaim, updateClaim, item } = this.props

    e.preventDefault()
    if (formType === 'edit') {
      updateClaim(orgId, claimId, item)
    } else {
      createClaim(orgId, item)
    }
  }

  handlePrev = e => {
    const {
      form: { validateFields }
    } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      this.prev(values)
    })
  }

  next = values => {
    const { saveClaimsToState, formType } = this.props

    if (formType === 'create') {
      saveClaimsToState(values)
    }

    this.setState(prevState => ({ current: prevState.current + 1 }))
  }

  prev = values => {
    const { saveClaimsToState, formType } = this.props
    saveClaimsToState(values)
    this.setState(prevState => ({ current: prevState.current - 1 }))
  }

  onChange = current => {
    const { formType } = this.props
    if (formType === 'edit') {
      this.setState({ current })
    }
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
        content: <FormOne {...this.props} gfd={getFieldDecorator} />
      },
      {
        title: 'Claim Details',
        content: <FormTwo {...this.props} gfd={getFieldDecorator} />
      },
      {
        title: 'Item Details',
        content: <FormThree {...this.props} vf={validateFields} gfd={getFieldDecorator} />
      },
      { title: 'Financials', content: <FormFour {...this.props} gfd={getFieldDecorator} /> },
      {
        title: 'Notes',
        content: <FormFive {...this.props} vf={validateFields} gfd={getFieldDecorator} />
      },
      { title: 'Documents', content: <FormSix {...this.props} gfd={getFieldDecorator} /> }
    ]

    const capitalize = str => `${str.split('')[0].toUpperCase()}${str.substring(1)}`

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {`${capitalize(formType)} Claim`}
        </Title>

        <div className="content-nofilter-wrapper">
          <Steps current={current} onChange={this.onChange}>
            {steps.map(step => (
              <Step key={step.title} title={step.title} />
            ))}
          </Steps>

          <div className="steps-content" style={{ padding: '20px 0' }}>
            <Form
              // onSubmit={this.handleSubmit}
              layout="horizontal"
              className="ant-advanced-search-form"
            >
              {steps[current].content}
            </Form>
          </div>

          <div className="steps-action">
            {current === steps.length - 1 && (
              <Button type="primary" onClick={this.finishProcess}>
                Done
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button style={{ float: 'right' }} type="primary" onClick={this.handleSubmit}>
                Next
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={this.handlePrev}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </>
    )
  }
}

ClaimForm = Form.create({
  name: 'claimform',
  mapPropsToFields({ claim, item, formType }) {
    let obj = {}
    if (formType === 'create') {
      obj = {
        policy_section: Form.createFormField({
          ...claim.policy_section,
          value: claim.policy_section
        }),
        sub_section: Form.createFormField({
          ...claim.sub_section,
          value: claim.sub_section
        }),

        saps_number: Form.createFormField({
          ...claim.saps_number,
          value: claim.saps_number
        }),
        date_loss: Form.createFormField({
          ...item.date_loss,
          value: item.date_loss
        }),
        date_registration: Form.createFormField({
          ...claim.date_registration,
          value: claim.date_registration
        }),
        date_acquired: Form.createFormField({
          ...claim.date_acquired,
          value: claim.date_acquired
        }),
        appointment_date: Form.createFormField({
          ...claim.appointment_date,
          value: claim.appointment_date
        })
      }
    } else {
      obj = {}
    }

    return {
      ...obj,
      policy_section: Form.createFormField({
        ...item.policy_section,
        value: item.policy_section
      }),
      sub_section: Form.createFormField({
        ...item.sub_section,
        value: item.sub_section
      }),

      saps_number: Form.createFormField({
        ...item.saps_number,
        value: item.saps_number
      }),

      date_loss: Form.createFormField({
        ...(formType === 'edit' && moment(item.date_loss, 'YYYY/MM/DD')),
        value: formType === 'edit' && moment(item.date_loss, 'YYYY/MM/DD')
      }),

      date_registration: Form.createFormField({
        ...(formType === 'edit' && moment(item.date_registration, 'YYYY/MM/DD')),
        value: formType === 'edit' && moment(item.date_registration, 'YYYY/MM/DD')
      }),

      case_number: Form.createFormField({
        ...item.case_number,
        value: item.case_number
      }),
      claim_number: Form.createFormField({
        ...item.claim_number,
        value: item.claim_number
      }),
      name_user: Form.createFormField({
        ...item.name_user,
        value: item.name_user
      }),
      broker_c_number: Form.createFormField({
        ...item.broker_c_number,
        value: item.broker_c_number
      }),
      id_number: Form.createFormField({
        ...item.id_number,
        value: item.id_number
      }),
      insurance_c_number: Form.createFormField({
        ...item.insurance_c_number,
        value: item.insurance_c_number
      }),
      contact_details: Form.createFormField({
        ...item.contact_details,
        value: item.contact_details
      }),
      desc_of_loss: Form.createFormField({
        ...item.desc_of_loss,
        value: item.desc_of_loss
      }),
      drivers_licence: Form.createFormField({
        ...item.drivers_licence,
        value: item.drivers_licence
      }),
      licence_code: Form.createFormField({
        ...item.licence_code,
        value: item.licence_code
      }),
      asset_code: Form.createFormField({
        ...item.asset_code,
        value: item.asset_code
      }),

      make: Form.createFormField({
        ...item.make,
        value: item.make
      }),
      model: Form.createFormField({
        ...item.model,
        value: item.model
      }),
      serial_number: Form.createFormField({
        ...item.serial_number,
        value: item.serial_number
      }),
      asset_value: Form.createFormField({
        ...item.asset_value,
        value: item.asset_value
      }),
      motor: Form.createFormField({
        ...item.motor,
        value: item.motor
      }),
      total_loss: Form.createFormField({
        ...item.total_loss,
        value: item.total_loss
      }),
      engine_number: Form.createFormField({
        ...item.engine_number,
        value: item.engine_number
      }),
      vin_number: Form.createFormField({
        ...item.vin_number,
        value: item.vin_number
      }),
      reg_number: Form.createFormField({
        ...item.reg_number,
        value: item.reg_number
      }),
      remove_cover: Form.createFormField({
        ...item.remove_cover,
        value: item.remove_cover
      }),
      damage_desc: Form.createFormField({
        ...item.damage_desc,
        value: item.damage_desc
      }),
      assessor_name: Form.createFormField({
        ...item.assessor_name,
        value: item.assessor_name
      }),

      assessment_fees: Form.createFormField({
        ...item.assessment_fees,
        value: item.assessment_fees
      }),
      fees: Form.createFormField({
        ...item.fees,
        value: item.fees
      }),
      claimed_amount: Form.createFormField({
        ...item.claimed_amount,
        value: item.claimed_amount
      }),
      excess: Form.createFormField({
        ...item.excess,
        value: item.excess
      }),
      invoice: Form.createFormField({
        ...item.invoice,
        value: item.invoice
      }),
      contractor_name: Form.createFormField({
        ...item.contractor_name,
        value: item.contractor_name
      }),
      notes: Form.createFormField({
        ...item.notes,
        value: item.notes
      }),
      status: Form.createFormField({
        ...item.status,
        value: item.status
      })
    }
  }
})(ClaimForm)

const mapStateToProps = (
  {
    shared: {
      claim: { claim },
      item: { item }
    }
  },
  { match: { params } }
) => ({
  item: Object.keys(claim).length > 0 ? claim : item,
  claim,
  ...params
})

const mapDispatchToProps = claimActions

ClaimForm = connect(mapStateToProps, mapDispatchToProps)(ClaimForm)

export default Intl({
  smsalist: 'compose.smsalist'
})(ClaimForm)
