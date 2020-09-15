/* eslint-disable react/display-name */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Intl from 'shared/hocs/intl'
import { Table, Icon, Modal, Menu, Dropdown } from 'antd'

const { confirm } = Modal

const ClaimList = ({ orgId, listItems, deleteClaim, updateClaim }) => {
  const showDeleteConfirm = (claimId, name) => {
    confirm({
      title: `Are you sure you want to ${name} ?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteClaim(orgId, claimId)
        // onRefresh({ perPage: 10 })
      }
    })
  }

  const menu = (claimId, name) => (
    <Menu>
      <Menu.Item key="2" onClick={() => showDeleteConfirm(claimId, name)}>
        <Icon type="delete" />
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: 'Claim Number',
      dataIndex: 'claim_number'
    },
    {
      title: 'Broker Claim Number',
      dataIndex: 'broker_c_number'
    },
    {
      title: 'Date of Loss',
      dataIndex: 'date_loss'
    },
    {
      title: 'Date Claim Registered',
      dataIndex: 'date_registration'
    },
    {
      title: 'Section',
      dataIndex: 'policy_section'
    },
    {
      title: 'Description',
      dataIndex: 'notes'
    },
    {
      title: 'Claimed amount',
      dataIndex: 'claimed_amount'
    },
    {
      title: 'Excess',
      dataIndex: 'excess'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Actions',
      fixed: 'right',
      render: data => (
        <Dropdown.Button overlay={() => menu(data?._id, data?.claim_number)}>
          <Link to={`/claims/${orgId}/edit/${data?._id}`}>
            <Icon type="edit" style={{ paddingRight: '5px' }} />
            Edit
          </Link>
        </Dropdown.Button>
      )
    }
  ]

  return <Table columns={columns} dataSource={listItems} scroll={{ x: 1500 }} />
}

export default Intl({
  inbox: 'sms.inbox'
})(ClaimList)
