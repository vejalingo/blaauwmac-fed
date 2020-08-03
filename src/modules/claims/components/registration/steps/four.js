import React from 'react'

import { Form, Input, Button, Select, message, DatePicker, Radio, Divider } from 'antd'

const { Option } = Select
const { TextArea } = Input

const Four = ({ gfd }) => {
  return (
    <>
      <Form.Item style={{ marginBottom: 0 }}>
        Assessor’s fees / Additional fees
        <Divider />
        <Form.Item
          label="Assessor`s Name"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('assessor_name')(<Input />)}
        </Form.Item>
        <Form.Item
          label="Appointment Date"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('appointment_date')(<DatePicker style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item
          label="Assessment Fees"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('assessment_fees')(<Input />)}
        </Form.Item>
        <Form.Item
          label="Fees"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('fees')(<Input />)}
        </Form.Item>
        <Divider />
        <Form.Item
          label="Claimed Amount"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('claimed_amount')(<Input />)}
        </Form.Item>
        <Form.Item
          label="Excess Amount"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('excess')(<Input />)}
        </Form.Item>
        <Form.Item
          label="Invoice Amount"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('invoice')(<Input />)}
        </Form.Item>
        <Divider />
        <Form.Item
          label="Contractor’s Name"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('contractor_name')(<Input />)}
        </Form.Item>
        <Form.Item
          label="Contact Details"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('contact_details')(<Input />)}
        </Form.Item>
      </Form.Item>
    </>
  )
}

export default Four
