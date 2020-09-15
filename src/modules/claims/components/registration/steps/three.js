import React, { useState } from 'react'

import { Form, Input, Button, Select, message, DatePicker, Radio, Checkbox, Divider } from 'antd'

const { Option } = Select
const { TextArea } = Input

const Three = ({ gfd, vf, formType }) => {
  const [motorSec, updateMotorSec] = useState(false)
  const [hideDamageDesc, updateDamageDesc] = useState(false)
  const toSearchString = (searchParams = {}) => {
    return Object.keys(searchParams)
      .map(key => `${key}=${encodeURIComponent(searchParams[key])}`)
      .join('&')
  }

  const createMailtoLink = (email, headers) => {
    let link = `mailto:${email}`
    if (headers) {
      link += `?${toSearchString(headers)}`
    }
    return link
  }

  const onMotorChanged = event => {
    event.preventDefault()

    updateMotorSec(event.target.checked)
  }

  const onTotalLoss = event => {
    event.preventDefault()

    updateDamageDesc(event.target.checked)
  }

  const onRemoveCover = event => {
    event.preventDefault()

    if (event.target.checked) {
      vf((err, values) => {
        const headers = {
          subject: 'Remove from cover',
          body: JSON.stringify(values)
        }
        if (!err) {
          window.location.href = createMailtoLink('vejalingo@gmail.com', headers)
        }
      })
    }
  }

  return (
    <>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Asset Code"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('asset_code', {
            rules: [{ required: true, message: 'Name is required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Date Acquired"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('date_acquired', {
            rules: [{ required: formType === 'create', message: 'Required' }]
          })(<DatePicker disabled={formType === 'edit'} style={{ width: '100%' }} />)}
        </Form.Item>

        <Form.Item
          label="Make"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('make', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Model"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('model', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Serial / IMEI Number"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('serial_number')(<Input />)}
        </Form.Item>

        <Form.Item
          label="Value"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('asset_value', {
            rules: [{ required: true, message: 'Required' }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Vehicle Details"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('motor')(<Checkbox onChange={onMotorChanged} />)}
        </Form.Item>

        <Form.Item
          label="Total Loss"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('total_loss')(<Checkbox onChange={onTotalLoss} />)}
        </Form.Item>

        {motorSec && (
          <>
            <Divider />
            <Form.Item
              label="Engine Number"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('engine_number', {
                rules: [{ required: true, message: 'Required' }]
              })(<Input />)}
            </Form.Item>

            <Form.Item
              label="Vin Number"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('vin_number', {
                rules: [{ required: true, message: 'Required' }]
              })(<Input />)}
            </Form.Item>

            <Form.Item
              label="Reg Number"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('reg_number', {
                rules: [{ required: true, message: 'Required' }]
              })(<Input />)}
            </Form.Item>

            <Form.Item
              label="Remove from cover"
              style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
            >
              {gfd('remove_cover')(<Checkbox onChange={onRemoveCover} />)}
            </Form.Item>
            <Divider />
          </>
        )}

        {!hideDamageDesc && (
          <Form.Item
            label="Damage description"
            style={{ display: 'inline-block', width: 'calc(80% - 20px)', margin: 10 }}
          >
            {gfd('damage_desc', {
              rules: [{ required: true, message: 'Required' }]
            })(<TextArea rows={4} />)}
          </Form.Item>
        )}
      </Form.Item>
    </>
  )
}

export default Three
