import React from 'react'

import { Upload, Icon, Form, Input, Button, Select, message, DatePicker, Radio } from 'antd'

const { Option } = Select
const { TextArea } = Input

const Six = ({ gfd }) => {
  const normFile = e => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  return (
    <>
      <Form.Item>
        {gfd('dragger', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile
        })(
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">You can import PDF, WORD, files.</p>
          </Upload.Dragger>
        )}
      </Form.Item>
    </>
  )
}

export default Six
