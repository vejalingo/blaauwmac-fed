/* eslint-disable react/display-name */
import React from 'react'
import Intl from 'shared/hocs/intl'
import { Table, Menu, Dropdown, Modal } from 'antd'

const { confirm } = Modal

const NotificationTable = () => {
  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this campaign?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={showDeleteConfirm}>
        <a href="#Delete">Delete</a>
      </Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type'
    },
    {
      title: 'Value (If applicable)',
      dataIndex: 'value'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: 100,
      render: () => <Dropdown.Button overlay={menu}>Edit</Dropdown.Button>
    }
  ]
  const data = [
    {
      key: '1',
      type: 'Account Balance',
      value: '200',
      email: 'user.name@patternmatched.com'
    },
    {
      key: '2',
      type: 'Price Updates',
      value: '',
      email: 'user.name@patternmatched.com'
    }
  ]

  return <Table columns={columns} dataSource={data} pagination={false} />
}
export default Intl({
  campaigns: 'sms.campaigns'
})(NotificationTable)
