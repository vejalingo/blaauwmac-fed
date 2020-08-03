import React, { useState } from 'react'
import { DatePicker, Form, Input, Button, Select, message, Divider } from 'antd'
import { formatDate, getDifference } from 'shared/lib/dates'

const { TextArea } = Input
const { Option } = Select

const PolicyDetails = ({ gfd, formType }) => {
  return (
    <>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Client Name"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('client_name')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Insurer`s Name"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('insurer_name')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Insurer`s FSP No"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('insurer_fsp_no')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Broker`s Name"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('broker_name')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Broker`s FSP No"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('broker_fsp_no')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Contact Person"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('contact_person')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Contact Details"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('fees')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Risk Address"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('risk_address', {
            rules: [{ required: false, message: 'Required' }]
          })(<TextArea rows={4} />)}
        </Form.Item>

        <Form.Item
          label="Policy Number"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('policy_no')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Period Of Cover"
          style={{ display: 'inline-block', width: 'calc(25% - 20px)', margin: 10 }}
        >
          {gfd('period_cover')(<Input />)}
        </Form.Item>

        <Divider />

        <Form.Item
          label="Annual Premium Paid"
          style={{ display: 'inline-block', width: 'calc(20% - 20px)', margin: 10 }}
        >
          {gfd('annual_premium_paid')(<Input placeholder="R" />)}
        </Form.Item>

        <Form.Item
          label="Total Claims Paid"
          style={{ display: 'inline-block', width: 'calc(20% - 20px)', margin: 10 }}
        >
          {gfd('total_claims_paid')(<Input placeholder="R" />)}
        </Form.Item>

        <Form.Item
          label="Loss Ratio"
          style={{ display: 'inline-block', width: 'calc(20% - 20px)', margin: 10 }}
        >
          {gfd('loss_ratio')(<Input placeholder="%" />)}
        </Form.Item>

        <Form.Item
          label="LTA Discount"
          style={{ display: 'inline-block', width: 'calc(20% - 20px)', margin: 10 }}
        >
          {gfd('lta_discount')(<Input placeholder="R" />)}
        </Form.Item>

        <Form.Item
          label="LTA Rate"
          style={{ display: 'inline-block', width: 'calc(20% - 20px)', margin: 10 }}
        >
          {gfd('lta_rate')(<Input placeholder="%" />)}
        </Form.Item>
      </Form.Item>
    </>
  )
}

export default PolicyDetails
