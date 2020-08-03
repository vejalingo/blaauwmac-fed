/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Icon, Modal, Menu, Dropdown } from 'antd'
import Intl from 'shared/hocs/intl'
import { formatDateTime } from 'shared/lib/dates'
import { connect } from 'react-redux'

const { confirm } = Modal

const AccountList = ({ copy, accountData, pageSize, onDelete, onUpdate, onRefresh }) => {
  const showDeleteConfirm = (accountId, name) => {
    confirm({
      title: `Are you sure you want to ${name} ?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelete(accountId)
        onRefresh({ perPage: 10 })
      }
    })
  }

  const showDisableConfirm = (accountId, name, status) => {
    const text = copy.account(`op${status}`).toLowerCase()
    confirm({
      title: `Are you sure you want to ${text.slice(0, -1)} ${name}?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onUpdate(accountId, { status: text })
        onRefresh({ perPage: 10 })
      }
    })
  }

  const menu = (accountId, name, status) => (
    <Menu>
      <Menu.Item key="1" onClick={() => showDisableConfirm(accountId, name, status)}>
        <Icon type="disconnect" />
        <span>{copy.account(`op${status}`).slice(0, -1)}</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => showDeleteConfirm(accountId, name)}>
        <Icon type="delete" />
        <span>Delete</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Icon type="delete" />
        <span>Login as user</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="delete" />
        <span>Billing</span>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="delete" />
        <span>Recent Transactions</span>
      </Menu.Item>
    </Menu>
  )

  const accData = accountData.map((item, key) => ({
    key,
    accountId: item._id,
    name: item.name,
    class_description: item.class_description,
    status: item.status,
    created_at: formatDateTime(item.createdAt),
    created_by: item.created_by
  }))

  const columns = [
    {
      title: 'Name',
      render: ({ name, accountId }) => {
        return <Link to={`/account/edit/${accountId}`}>{name}</Link>
      }
    },
    {
      title: 'Description',
      dataIndex: 'class_description'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Created At',
      dataIndex: 'created_at'
    },
    {
      title: 'Created By',
      dataIndex: 'created_by'
    },
    {
      title: 'Actions',
      width: 100,
      render: ({ accountId, name, status }) => (
        <Dropdown.Button overlay={() => menu(accountId, name, status)}>
          <Link to={`/account/edit/${accountId}`}>
            <Icon type="edit" style={{ paddingRight: '5px' }} />
            Edit
          </Link>
        </Dropdown.Button>
      )
    }
  ]

  return <Table columns={columns} dataSource={accData} pagination={{ pageSize }} />
}

AccountList.propTypes = {
  accountData: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Intl({
  account: 'account.account'
})(AccountList)
