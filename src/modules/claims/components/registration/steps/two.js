import React, { useState } from 'react'

import { Form, Input, Button, Select, message, Checkbox, Divider } from 'antd'

const { Option } = Select
const { TextArea } = Input

const Two = ({ gfd }) => {
  const [motorSec, updateMotorSec] = useState(false)
  const codes = ['EC', 'EC1', 'B', 'EB', 'C1', 'C']
  const onMotorChanged = event => {
    event.preventDefault()

    updateMotorSec(event.target.checked)
  }

  return (
    <>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="SAPS Names"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('saps_number', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Claim Status"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('status', {
            rules: [{ required: true, message: 'Required' }]
          })(
            <Select placeholder="Please select option" style={{ width: '100%' }}>
              <Option value="Not Taken up">Not Taken up</Option>
              <Option value="Insurer handling TP claim">Insurer handling TP claim</Option>
              <Option value="Claims authorized">Claims authorized</Option>
              <Option value="Awaiting payment confirmation">Awaiting payment confirmation</Option>
              <Option value="Awaiting TP approach">Awaiting TP approach</Option>
              <Option value="File pending">File pending</Option>
              <Option value="Awaiting Agreement of loss">Awaiting Agreement of loss</Option>
              <Option value="Settled">Settled</Option>
              <Option value="Claim with access">Claim with access</Option>
              <Option value="Repudiated">Repudiated</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item
          label="Case Number"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('case_number', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Claim Number"
          help="Auto Generated"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('claim_number')(<Input disabled />)}
        </Form.Item>

        <Form.Item
          label="Name of user"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('name_user', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Broker Claim Number"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('broker_c_number')(<Input />)}
        </Form.Item>

        <Form.Item
          label="ID Number"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('id_number', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Insurance Claim Number"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('insurance_c_number')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Motor"
          style={{ display: 'inline-block', width: 'calc(100% - 20px)', margin: 10 }}
        >
          {gfd('motor')(<Checkbox onChange={onMotorChanged} />)}
        </Form.Item>

        {motorSec && (
          <>
            <Form.Item
              label="Drivers Licence Number"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('drivers_licence', {
                rules: [{ required: true, message: 'Required' }]
              })(<Input />)}
            </Form.Item>

            <Form.Item
              label="Valid"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('drivers_licence', {
                rules: [{ required: true, message: 'Required' }]
              })(<Input placeholder="2020/01/20 - 2020/02/20" />)}
            </Form.Item>

            <Form.Item
              label="Licence Code"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('licence_code', {
                rules: [{ required: true, message: 'Required' }]
              })(
                <Select style={{ width: '100%' }}>
                  {codes?.map(code => (
                    <Option key={code} value={code}>
                      {code}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>

            <Form.Item
              label="PRDP Expiry Date"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('prdp', {
                rules: [{ required: true, message: 'Required' }]
              })(<Input />)}
            </Form.Item>
          </>
        )}

        <Form.Item
          label="Contact Details"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('contact_details', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Description of loss"
          style={{ display: 'inline-block', width: 'calc(80% - 20px)', margin: 10 }}
        >
          {gfd('desc_of_loss', {
            rules: [{ required: true, message: 'Required' }]
          })(<TextArea rows={4} />)}
        </Form.Item>
      </Form.Item>
    </>
  )
}

export default Two
