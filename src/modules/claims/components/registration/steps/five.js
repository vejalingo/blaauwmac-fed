/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'

import { Form, Input, Button, Select, message, DatePicker, Radio } from 'antd'

const { Option } = Select
const { TextArea } = Input

const Five = ({ gfd, vf }) => {
  const [addedNotes, pushToAddedNotes] = useState([])

  const addNote = () => {
    vf((err, values) => {
      if (!err) {
        pushToAddedNotes([...addedNotes, values.notes])
      }
    })
  }

  return (
    <>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Notes"
          style={{ display: 'inline-block', width: 'calc(100% - 20px)', margin: 10 }}
        >
          {gfd('notes', {
            rules: [{ required: true, message: 'Required' }]
          })(<TextArea value={JSON.stringify(addedNotes)} rows={6} />)}
        </Form.Item>
      </Form.Item>

      <div>
        {addedNotes
          ? addedNotes.map((note, key) => (
              <div
                style={{
                  margin: '10px 0',
                  background: '#f5f5f5',
                  padding: '5px'
                }}
                key={`${note[0]}-${key}`}
              >
                {note}
              </div>
            ))
          : null}
      </div>

      <div className="steps-action">
        <Button type="primary" onClick={addNote}>
          Add Note
        </Button>
      </div>
    </>
  )
}

export default Five
