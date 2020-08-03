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
    width: 120,
    render: props => (
      <Link to={`${process.env.PUBLIC_URL}/documents/${props?.docUrl}.pdf`} target="_blank">
        <Icon type="download" style={{ paddingRight: '5px' }} />
        Download
      </Link>
    )
  }
]

const data = [
  {
    name: 'Accident and Health Claim form',
    docUrl: '2018_Accident_and_Health_Claim_form'
  },
  {
    name: 'Liability claim form',
    docUrl: '2018_Liability_claim_form'
  },
  {
    name: 'Property loss damage claim form',
    docUrl: '2018_Property_loss_damage_claim_form'
  },
  {
    name: 'Motor Claim Form',
    docUrl: 'Motor_Claim_Form_2018'
  }
]

const List = () => {
  return <Table columns={columns} dataSource={data} />
}

export default Intl({
  listsList: 'contacts.listsList'
})(List)
