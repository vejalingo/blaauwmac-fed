/* eslint-disable react/display-name */
import React, { Component } from 'react'
import Intl from 'shared/hocs/intl'
import { Table, Dropdown, Icon } from 'antd'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Document Name',
    dataIndex: 'name'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    width: 120,
    render: () => (
      <Link to={`${process.env.PUBLIC_URL}/documents/C-Claims.pdf`} target="_blank">
        <Icon type="edit" style={{ paddingRight: '5px' }} />
        Download
      </Link>
    )
  }
]

const data = []

const List = () => {
  return <Table columns={columns} dataSource={data} />
}

export default Intl({
  listsList: 'contacts.listsList'
})(List)
