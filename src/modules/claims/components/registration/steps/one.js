import React, { useState } from 'react'
import { DatePicker, Form, Input, Button, Select, message } from 'antd'
import { formatDate, getDifference } from 'shared/lib/dates'
import moment from 'moment'

const { TextArea } = Input
const { Option } = Select

const cData = {
  Motor: [
    'Private type motor cars',
    'LDVS',
    'Commercial Vehicle',
    'Mini Buses',
    'Special types',
    'Ambulance Fire & Theft',
    'Fire Engines',
    'Motor Cycle',
    'Tractors',
    'Trailers',
    'High Valued Vehicles'
  ],
  Combined: [
    'Standard Constructed Buildings ',
    'Escalation 15% ',
    'Standard Constructed Buildings (Contents)',
    'Sub-stations, mini sub-stations, transformers,etc',
    'Property in the open ',
    'All water purification works and pump stations',
    'Plant, Machinery and Equipment',
    'Non Standard  - Thatch',
    'Non Standard  - Thatch (Contents)',
    'Private dwellings, residential units hostels, Flats',
    'Private dwellings, residential units & etc - (Contents)'
  ],
  'Business Interruption': [' Income', 'Gross rentals', 'Additional Increase in Cost of Working'],
  'Office Contents': [
    'Contents insured property',
    'Theft ( forcible & violent entry or exit)',
    'Loss of Rent ( up to 25% of sum insured)',
    'Loss of Documents',
    'Legal Liability (Documents)',
    'Increase in Cost of Working'
  ],
  'Accounts Receivable': ['Outstanding Debit Balances'],
  'Business All Risks': [
    'All other specified items (excluding Cellphones & Laptops)',
    'Laptops ',
    '20 x Steel skip dustbins',
    'Cellphones'
  ],
  Theft: ['First Loss Limit'],
  Glass: ['All fixed internal & external glass at the premises '],
  Money: [
    'Posession of Councillors/Employees away from insured',
    'premises on a business trip',
    'On the premises outside business hours in locked safe',
    ' Loss of or damage to crossed cheques, money or postal',
    'Major limit',
    'Seasonal',
    'Receptacles as a result of theft of money or attempt '
  ],
  'Fidelity Guarantee': ['Limit any one period (187 employees)'],
  'Accidental Damage': ['Total Assets', 'Limit of indemnity'],
  'Group Personal Accident - 24 Hours': [
    'Councillors, Speaker, Mayor and Deputy Mayor',
    'Officials',
    'Temporary staff'
  ],
  'Motor Liability': ['Motor Liability '],
  'Public Liability': ['General Liability']
}

const One = ({ gfd, formType }) => {
  const [selectedDate, updateSelectedDate] = useState(new Date())
  const [selectedSection, updateSubSection] = useState('Combined')

  const showSelected = cData[selectedSection].map((item, key) => (
    <Option key={key} value={item}>
      {item}
    </Option>
  ))

  return (
    <>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Policy Section"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('policy_section', {
            rules: [{ required: true, message: 'Policy Section is required' }]
          })(
            <Select placeholder="Please select option" onChange={val => updateSubSection(val)}>
              {Object.keys(cData)?.map(data => (
                <Option key={data} value={data}>
                  {data}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>

        <Form.Item
          label="Sub Section"
          style={{ display: 'inline-block', width: 'calc(50% - 20px)', margin: 10 }}
        >
          {gfd('sub_section', {
            rules: [{ required: true, message: 'Sub Section is required' }]
          })(<Select placeholder="Please select option">{showSelected}</Select>)}
        </Form.Item>

        <Form.Item label="Date of loss" style={{ display: 'inline-block', margin: 10 }}>
          {gfd('date_loss', {
            rules: [{ required: formType === 'create', message: 'Date of loss is required' }]
          })(<DatePicker style={{ marginRight: 10 }} onChange={val => updateSelectedDate(val)} />)}
        </Form.Item>

        <Form.Item label="Registration" style={{ display: 'inline-block', margin: 10 }}>
          {gfd('date_registration')(
            <DatePicker
              defaultValue={formType === 'create' && moment()}
              placeholder={formType === 'create' && formatDate(moment())}
              disabled
            />
          )}
        </Form.Item>

        {getDifference(new Date(), selectedDate) > 30 && (
          <Form.Item
            label="Reason for Late Notification"
            style={{ display: 'inline-block', width: 'calc(80% - 20px)', margin: 10 }}
          >
            {gfd('reason_late_notify', {
              rules: [{ required: true, message: 'Reason for Late Notification is required' }]
            })(<TextArea rows={4} />)}
          </Form.Item>
        )}
      </Form.Item>
    </>
  )
}

export default One
